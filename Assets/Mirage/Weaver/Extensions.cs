using System;
using System.Linq;
using Mono.Cecil;
using Mono.Cecil.Cil;

namespace Mirage.Weaver
{
    public static class Extensions
    {
        public static bool Is(this TypeReference td, Type t)
        {
            if (t.IsGenericType)
            {
                return td.GetElementType().FullName == t.FullName;
            }
            return td.FullName == t.FullName;
        }

        public static bool Is<T>(this TypeReference td) => Is(td, typeof(T));

        public static bool Is(this MethodReference method, Type t, string name) =>
            method.DeclaringType.Is(t) && method.Name == name;

        public static bool Is<T>(this MethodReference method, string name) =>
            method.DeclaringType.Is<T>() && method.Name == name;

        public static bool IsDerivedFrom<T>(this TypeDefinition td) => IsDerivedFrom(td, typeof(T));

        public static bool IsDerivedFrom(this TypeDefinition td, Type baseClass)
        {
            if (td == null)
                return false;

            if (!td.IsClass)
                return false;

            // are ANY parent classes of baseClass?
            var parent = td.BaseType;

            if (parent == null)
                return false;

            if (parent.Is(baseClass))
                return true;

            if (parent.CanBeResolved())
                return IsDerivedFrom(parent.Resolve(), baseClass);

            return false;
        }

        /// <summary>
        /// Resolves type using try/catch check
        /// Replacement for <see cref="CanBeResolved(TypeReference)"/>
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static TypeDefinition TryResolve(this TypeReference type)
        {
            if (type.Scope.Name == "Windows")
            {
                return null;
            }

            try
            {
                return type.Resolve();
            }
            catch
            {
                return null;
            }
        }

        /// <summary>
        /// Uses <see cref="TryResolve(TypeReference)"/> to find the Base Type
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static TypeReference TryResolveParent(this TypeReference type)
        {
            return type.TryResolve()?.BaseType;
        }

        // set the value of a constant in a class
        public static void SetConst<T>(this TypeDefinition td, string fieldName, T value) where T : struct
        {
            var field = td.Fields.FirstOrDefault(f => f.Name == fieldName);

            if (field == null)
            {
                // needs Static so that const isn't included as part of instance (in memory, use sizeof shows this)
                // needs HasDefault or unity 2021.3 will hard crash 
                // public const generated by c# have these: Public, Static, Literal, HasDefault
                field = new FieldDefinition(fieldName, FieldAttributes.Literal | FieldAttributes.HasDefault | FieldAttributes.Static | FieldAttributes.NotSerialized | FieldAttributes.Private, td.Module.ImportReference<T>());
                td.Fields.Add(field);
            }

            field.Constant = value;
        }

        public static T GetConst<T>(this TypeDefinition td, string fieldName) where T : struct
        {
            var field = td.Fields.FirstOrDefault(f => f.Name == fieldName);

            if (field == null)
            {
                return default;
            }

            var value = field.Constant as T?;

            return value.GetValueOrDefault();
        }

        public static TypeReference GetEnumUnderlyingType(this TypeDefinition td)
        {
            foreach (var field in td.Fields)
            {
                if (!field.IsStatic)
                    return field.FieldType;
            }
            throw new ArgumentException($"Invalid enum {td.FullName}");
        }

        public static bool ImplementsInterface<TInterface>(this TypeDefinition td)
        {
            if (td == null)
                return false;

            if (td.Is<TInterface>())
                return true;

            var typedef = td;

            while (typedef != null)
            {
                foreach (var iface in typedef.Interfaces)
                {
                    if (iface.InterfaceType.Is<TInterface>())
                        return true;
                }

                try
                {
                    var parent = typedef.BaseType;
                    typedef = parent?.Resolve();
                }
                catch (AssemblyResolutionException)
                {
                    // this can happen for pluins.
                    break;
                }
            }

            return false;
        }

        public static bool IsMultidimensionalArray(this TypeReference tr)
        {
            return tr is ArrayType arrayType && arrayType.Rank > 1;
        }

        public static bool CanBeResolved(this TypeReference parent)
        {
            while (parent != null)
            {
                if (parent.Scope.Name == "Windows")
                {
                    return false;
                }

                if (parent.Scope.Name == "mscorlib")
                {
                    var resolved = parent.Resolve();
                    return resolved != null;
                }

                try
                {
                    parent = parent.Resolve().BaseType;
                }
                catch
                {
                    return false;
                }
            }
            return true;
        }

        /// <summary>
        /// Given a method of a generic class such as ArraySegment`T.get_Count,
        /// and a generic instance such as ArraySegment`int
        /// Creates a reference to the specialized method  ArraySegment`int`.get_Count
        /// <para> Note that calling ArraySegment`T.get_Count directly gives an invalid IL error </para>
        /// </summary>
        /// <param name="self"></param>
        /// <param name="instanceType"></param>
        /// <returns></returns>
        public static MethodReference MakeHostInstanceGeneric(this MethodReference self, GenericInstanceType instanceType)
        {
            var reference = new MethodReference(self.Name, self.ReturnType, instanceType)
            {
                CallingConvention = self.CallingConvention,
                HasThis = self.HasThis,
                ExplicitThis = self.ExplicitThis
            };

            foreach (var parameter in self.Parameters)
                reference.Parameters.Add(new ParameterDefinition(parameter.ParameterType));

            foreach (var generic_parameter in self.GenericParameters)
                reference.GenericParameters.Add(new GenericParameter(generic_parameter.Name, reference));

            return self.Module.ImportReference(reference);
        }

        public static MethodReference MakeHostInstanceSelfGeneric(this MethodReference self)
        {
            var type = self.DeclaringType;
            if (!type.HasGenericParameters)
            {
                // if type isn't generic we dont need to do anything
                return self;
            }
            else
            {
                var genericType = (GenericInstanceType)type.MakeSelfGeneric();
                return self.MakeHostInstanceGeneric(genericType);
            }
        }

        public static TypeReference MakeSelfGeneric(this TypeReference self)
        {
            if (!self.HasGenericParameters)
            {
                // if type isn't generic we dont need to do anything
                return self;
            }
            else
            {
                // make generic instance of type, and give it the generic params as args
                var genericType = new GenericInstanceType(self);
                foreach (var param in self.GenericParameters)
                    genericType.GenericArguments.Add(param);

                return genericType;
            }
        }

        public static bool TryGetCustomAttribute<TAttribute>(this ICustomAttributeProvider method, out CustomAttribute customAttribute)
        {
            foreach (var ca in method.CustomAttributes)
            {
                if (ca.AttributeType.Is<TAttribute>())
                {
                    customAttribute = ca;
                    return true;
                }
            }

            customAttribute = null;
            return false;
        }

        public static CustomAttribute GetCustomAttribute<TAttribute>(this ICustomAttributeProvider method)
        {
            _ = method.TryGetCustomAttribute<TAttribute>(out var customAttribute);
            return customAttribute;
        }

        public static bool HasCustomAttribute<TAttribute>(this ICustomAttributeProvider attributeProvider)
        {
            return HasCustomAttribute(attributeProvider, typeof(TAttribute));
        }

        public static bool HasCustomAttribute(this ICustomAttributeProvider attributeProvider, Type t)
        {
            return attributeProvider.CustomAttributes.Any(attr => attr.AttributeType.Is(t));
        }

        public static void AddCustomAttribute(this ICustomAttributeProvider attributeProvider, ModuleDefinition module, Type t)
        {
            var constructor = t.GetConstructor(new Type[0]);
            var customAttribute = new CustomAttribute(module.ImportReference(constructor));
            attributeProvider.CustomAttributes.Add(customAttribute);
        }

        public static T GetField<T>(this CustomAttribute ca, string field, T defaultValue)
        {
            foreach (var customField in ca.Fields)
            {
                if (customField.Name == field)
                {
                    return (T)customField.Argument.Value;
                }
            }

            return defaultValue;
        }

        public static void AddField<T>(this CustomAttribute ca, ModuleDefinition module, string field, T value)
        {
            if (ca.Fields.Any(x => x.Name == field))
                throw new ArgumentException($"Field with name '{field}' already exists. AddField should only be used to add a new field");

            var fieldType = module.ImportReference<T>();
            var argValue = new CustomAttributeArgument(fieldType, value);
            var newField = new CustomAttributeNamedArgument(field, argValue);

            ca.Fields.Add(newField);
        }

        /// <summary>
        /// Imports a field and makes it a member of its orignal type.
        /// <para>This is needed if orignal type is a generic instance, this will ensure that it stays a member of that instance, eg MyMessage{int}.Value</para>
        /// </summary>
        /// <param name="module"></param>
        /// <param name="field"></param>
        /// <param name="orignalType">Type that the field orignal belonged to, NOT the resolved type</param>
        /// <returns></returns>
        public static FieldReference ImportField(this ModuleDefinition module, FieldDefinition field, TypeReference orignalType)
        {
            if (orignalType.Module != module)
                orignalType = module.ImportReference(orignalType);

            var fieldType = module.ImportReference(field.FieldType);
            return new FieldReference(field.Name, fieldType, orignalType);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="field"></param>
        /// <param name="orignalType">make sure orignalType is already imported</param>
        /// <returns></returns>
        public static TypeReference GetFieldTypeIncludingGeneric(this FieldDefinition field, TypeReference orignalType)
        {
            // if generic, then check if it has a type from orignalType 
            if (field.FieldType.IsGenericParameter && orignalType.IsGenericInstance)
            {
                if (FindGenericArgmentWithMatchingName(field.FieldType, orignalType, out var found))
                    return found;
            }

            // if not generic, or no matching found just return its type
            return field.FieldType;
        }

        private static bool FindGenericArgmentWithMatchingName(TypeReference genericParameter, TypeReference orignalType, out TypeReference found)
        {
            // resolve to get GenericParameters
            var resolved = orignalType.Resolve();

            var typeName = genericParameter.Name;
            for (var i = 0; i < resolved.GenericParameters.Count; i++)
            {
                var param = resolved.GenericParameters[i];
                if (param.Name == typeName)
                {
                    var generic = (GenericInstanceType)orignalType;
                    found = generic.GenericArguments[i];
                    return true;
                }
            }

            found = null;
            return false;
        }

        /// <summary>
        /// Makes a field part of generic defintion
        /// <para>
        /// NOTE: this only works when you need the type to be part of a generic defintion, NOT a generic instance, eg member of List{T} works, but List{int} doesn't
        /// </para>
        /// </summary>
        /// <param name="fd"></param>
        /// <returns></returns>
        public static FieldReference MakeHostGenericIfNeeded(this FieldReference fd)
        {
            if (fd.DeclaringType.HasGenericParameters)
            {
                return new FieldReference(fd.Name, fd.FieldType, fd.DeclaringType.Resolve().ConvertToGenericIfNeeded());
            }

            return fd;
        }

        /// <summary>
        /// Converts bool to constant opcode
        /// <para>bools are loaded using int32, with values 1 or 0</para>
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static OpCode OpCode_Ldc(this bool value)
        {
            return value ? OpCodes.Ldc_I4_1 : OpCodes.Ldc_I4_0;
        }
    }
}
