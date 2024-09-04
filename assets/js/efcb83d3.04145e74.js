"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(r),d=n,m=k["".concat(l,".").concat(d)]||k[d]||p[d]||i;return r?a.createElement(m,c(c({ref:t},s),{},{components:r})):a.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},88338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},c="Vector Pack",o={unversionedId:"guides/bit-packing/vector-pack",id:"guides/bit-packing/vector-pack",title:"Vector Pack",description:"A Vector2 or Vector3 can be compressed using Vector2PackAttribute or Vector3PackAttribute",source:"@site/docs/guides/bit-packing/vector-pack.md",sourceDirName:"guides/bit-packing",slug:"/guides/bit-packing/vector-pack",permalink:"/Mirage/docs/guides/bit-packing/vector-pack",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/guides/bit-packing/vector-pack.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Variable Sized Integer",permalink:"/Mirage/docs/guides/bit-packing/var-int"},next:{title:"ZigZag Encode",permalink:"/Mirage/docs/guides/bit-packing/zig-zag-encode"}},l={},u=[{value:"Use cases",id:"use-cases",level:3},{value:"Supported Types",id:"supported-types",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Generated Code",id:"generated-code",level:3}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vector-pack"},"Vector Pack"),(0,n.kt)("p",null,"A Vector2 or Vector3 can be compressed using ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Serialization/Vector2PackAttribute"},"Vector2PackAttribute")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Serialization/Vector3PackAttribute"},"Vector3PackAttribute")),(0,n.kt)("p",null,"These attributes work in the same way as ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/bit-packing/float-pack"},"FloatPack")," except on 2 or 3 dimensions instead of 1"),(0,n.kt)("h3",{id:"use-cases"},"Use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Vector value with a maximum value")),(0,n.kt)("h3",{id:"supported-types"},"Supported Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vector2 ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/Mirage.Serialization/Vector2PackAttribute"},"Vector2PackAttribute")),(0,n.kt)("li",{parentName:"ul"},"Vector3 ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/Mirage.Serialization/Vector3PackAttribute"},"Vector3PackAttribute"))),(0,n.kt)("h3",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"A Position in bounds +-100 in all XYZ with 0.05 precision for all axis "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, Vector3Pack(100f, 100f, 100f, 0.05f)]\n    public Vector3 Position;\n}\n")),(0,n.kt)("h3",{id:"example-2"},"Example 2"),(0,n.kt)("p",null,"A Position in bounds +-100 in all XZ with 0.05 precision, but with +-20 and precision 0.1 in y-axis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, Vector3Pack(100f, 20f, 100f, 0.05f, 0.1f, 0.05f)]\n    public Vector3 Position;\n}\n")),(0,n.kt)("h3",{id:"example-3"},"Example 3"),(0,n.kt)("p",null,"A position in a 2D map"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, Vector2Pack(1000f, 80f, 0.05f)]\n    public Vector2 Position;\n}\n")),(0,n.kt)("h3",{id:"generated-code"},"Generated Code"),(0,n.kt)("p",null,"Source:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"[SyncVar, Vector3Pack(100f, 20f, 100f, 0.05f, 0.1f, 0.05f)]\npublic int myValue1;\n\n[SyncVar, Vector2Pack(1000f, 80f, 0.05f)]\npublic int myValue2;\n")),(0,n.kt)("p",null,"Generated:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"\nprivate Vector3Packer myValue1__Packer = new Vector3Packer(1100f, 20f, 100f, 0.05f, 0.1f, 0.05f);\nprivate Vector2Packer myValue2__Packer = new Vector2Packer(1000f, 80f, 0.05f, 0.05f);\n\npublic override bool SerializeSyncVars(NetworkWriter writer, bool initialState)\n{\n    ulong syncVarDirtyBits = base.SyncVarDirtyBits;\n    bool result = base.SerializeSyncVars(writer, initialize);\n\n    if (initialState) \n    {\n        myValue1__Packer.Pack(writer, this.myValue1);\n        myValue2__Packer.Pack(writer, this.myValue2);\n        return true;\n    }\n\n    writer.Write(syncVarDirtyBits, 2);\n    if ((syncVarDirtyBits & 1UL) != 0UL)\n    {\n        myValue1__Packer.Pack(writer, this.myValue1);\n        result = true;\n    }\n    if ((syncVarDirtyBits & 2UL) != 0UL)\n    {\n        myValue2__Packer.Pack(writer, this.myValue2);\n        result = true;\n    }\n\n    return result;\n}\n\npublic override void DeserializeSyncVars(NetworkReader reader, bool initialState)\n{\n    base.DeserializeSyncVars(reader, initialState);\n\n    if (initialState)\n    {\n        this.myValue1 = myValue1__Packer.Unpack(reader);\n        this.myValue2 = myValue2__Packer.Unpack(reader);\n        return;\n    }\n\n    ulong dirtyMask = reader.Read(2);\n    if ((dirtyMask & 1UL) != 0UL)\n    {\n        this.myValue1 = myValue1__Packer.Unpack(reader);\n    }\n    if ((dirtyMask & 2UL) != 0UL)\n    {\n        this.myValue2 = myValue2__Packer.Unpack(reader);\n    }\n}\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"last updated for Mirage v101.8.0")))}p.isMDXComponent=!0}}]);