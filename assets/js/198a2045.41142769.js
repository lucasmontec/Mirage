"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=l.createContext({}),p=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return l.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),k=p(a),c=r,s=k["".concat(m,".").concat(c)]||k[c]||u[c]||n;return a?l.createElement(s,i(i({ref:t},o),{},{components:a})):l.createElement(s,i({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=k;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={id:"SyncList-1",title:"SyncList<T>"},i="Class SyncList&lt;T&gt;",d={unversionedId:"reference/Mirage.Collections/SyncList-1",id:"reference/Mirage.Collections/SyncList-1",title:"SyncList<T>",description:"Inheritance",source:"@site/docs/reference/Mirage.Collections/SyncList-1.md",sourceDirName:"reference/Mirage.Collections",slug:"/reference/Mirage.Collections/SyncList-1",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncList-1",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Collections/SyncList-1.md",tags:[],version:"current",frontMatter:{id:"SyncList-1",title:"SyncList<T>"},sidebar:"api",previous:{title:"SyncList<T>.Enumerator",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncList-1.Enumerator"},next:{title:"SyncObjectUtils",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncObjectUtils"}},m={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:"Constructors",id:"constructors",level:3},{value:"SyncList()",id:"synclist",level:4},{value:"Declaration",id:"declaration",level:5},{value:"SyncList(IEqualityComparer&lt;T&gt;)",id:"synclistiequalitycomparert",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5},{value:"SyncList(IList&lt;T&gt;, IEqualityComparer&lt;T&gt;)",id:"synclistilistt-iequalitycomparert",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Properties",id:"properties",level:3},{value:"Count",id:"count",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"IsReadOnly",id:"isreadonly",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"IsDirty",id:"isdirty",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"ItemInt32",id:"itemint32",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Methods",id:"methods",level:3},{value:"ISyncObject.SetShouldSyncFrom(Boolean)",id:"isyncobjectsetshouldsyncfromboolean",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"ISyncObject.SetNetworkBehaviour(NetworkBehaviour)",id:"isyncobjectsetnetworkbehaviournetworkbehaviour",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Flush()",id:"flush",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"Reset()",id:"reset",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"OnSerializeAll(NetworkWriter)",id:"onserializeallnetworkwriter",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"OnSerializeDelta(NetworkWriter)",id:"onserializedeltanetworkwriter",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"OnDeserializeAll(NetworkReader)",id:"ondeserializeallnetworkreader",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"OnDeserializeDelta(NetworkReader)",id:"ondeserializedeltanetworkreader",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"Add(T)",id:"addt",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"AddRange(IEnumerable&lt;T&gt;)",id:"addrangeienumerablet",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"Clear()",id:"clear",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Contains(T)",id:"containst",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"Parameters",id:"parameters-10",level:5},{value:"Returns",id:"returns",level:5},{value:"CopyTo(T[], Int32)",id:"copytot-int32",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"Parameters",id:"parameters-11",level:5},{value:"IndexOf(T)",id:"indexoft",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"Parameters",id:"parameters-12",level:5},{value:"Returns",id:"returns-1",level:5},{value:"FindIndex(Predicate&lt;T&gt;)",id:"findindexpredicatet",level:4},{value:"Declaration",id:"declaration-21",level:5},{value:"Parameters",id:"parameters-13",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Find(Predicate&lt;T&gt;)",id:"findpredicatet",level:4},{value:"Declaration",id:"declaration-22",level:5},{value:"Parameters",id:"parameters-14",level:5},{value:"Returns",id:"returns-3",level:5},{value:"FindAll(Predicate&lt;T&gt;)",id:"findallpredicatet",level:4},{value:"Declaration",id:"declaration-23",level:5},{value:"Parameters",id:"parameters-15",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Insert(Int32, T)",id:"insertint32-t",level:4},{value:"Declaration",id:"declaration-24",level:5},{value:"Parameters",id:"parameters-16",level:5},{value:"InsertRange(Int32, IEnumerable&lt;T&gt;)",id:"insertrangeint32-ienumerablet",level:4},{value:"Declaration",id:"declaration-25",level:5},{value:"Parameters",id:"parameters-17",level:5},{value:"Remove(T)",id:"removet",level:4},{value:"Declaration",id:"declaration-26",level:5},{value:"Parameters",id:"parameters-18",level:5},{value:"Returns",id:"returns-5",level:5},{value:"RemoveAt(Int32)",id:"removeatint32",level:4},{value:"Declaration",id:"declaration-27",level:5},{value:"Parameters",id:"parameters-19",level:5},{value:"RemoveAll(Predicate&lt;T&gt;)",id:"removeallpredicatet",level:4},{value:"Declaration",id:"declaration-28",level:5},{value:"Parameters",id:"parameters-20",level:5},{value:"Returns",id:"returns-6",level:5},{value:"SetItemDirty(T)",id:"setitemdirtyt",level:4},{value:"Declaration",id:"declaration-29",level:5},{value:"Parameters",id:"parameters-21",level:5},{value:"SetItemDirtyAt(Int32)",id:"setitemdirtyatint32",level:4},{value:"Declaration",id:"declaration-30",level:5},{value:"Parameters",id:"parameters-22",level:5},{value:"GetEnumerator()",id:"getenumerator",level:4},{value:"Declaration",id:"declaration-31",level:5},{value:"Returns",id:"returns-7",level:5},{value:"IEnumerable&lt;T&gt;.GetEnumerator()",id:"ienumerabletgetenumerator",level:4},{value:"Declaration",id:"declaration-32",level:5},{value:"Returns",id:"returns-8",level:5},{value:"IEnumerable.GetEnumerator()",id:"ienumerablegetenumerator",level:4},{value:"Declaration",id:"declaration-33",level:5},{value:"Returns",id:"returns-9",level:5}],o={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-synclistt"},"Class SyncList","<","T",">"),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,r.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class SyncList<T> : IList<T>, ICollection<T>, IReadOnlyList<T>, IReadOnlyCollection<T>, IEnumerable<T>, IEnumerable, ISyncObject\n")),(0,r.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("h4",{id:"synclist"},"SyncList()"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncList()\n")),(0,r.kt)("h4",{id:"synclistiequalitycomparert"},"SyncList(IEqualityComparer","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncList(IEqualityComparer<T> comparer)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEqualityComparer","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"comparer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"synclistilistt-iequalitycomparert"},"SyncList(IList","<","T",">",", IEqualityComparer","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncList(IList<T> objects, IEqualityComparer<T> comparer = null)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IList","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"objects"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEqualityComparer","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"comparer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"count"},"Count"),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public int Count { get; }\n")),(0,r.kt)("h4",{id:"isreadonly"},"IsReadOnly"),(0,r.kt)("h5",{id:"declaration-4"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsReadOnly { get; }\n")),(0,r.kt)("h4",{id:"isdirty"},"IsDirty"),(0,r.kt)("h5",{id:"declaration-5"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsDirty { get; }\n")),(0,r.kt)("h4",{id:"itemint32"},"Item","[Int32]"),(0,r.kt)("h5",{id:"declaration-6"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public T this[int i] { get; set; }\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"isyncobjectsetshouldsyncfromboolean"},"ISyncObject.SetShouldSyncFrom(Boolean)"),(0,r.kt)("h5",{id:"declaration-7"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void ISyncObject.SetShouldSyncFrom(bool shouldSync)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"shouldSync"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"isyncobjectsetnetworkbehaviournetworkbehaviour"},"ISyncObject.SetNetworkBehaviour(NetworkBehaviour)"),(0,r.kt)("h5",{id:"declaration-8"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void ISyncObject.SetNetworkBehaviour(NetworkBehaviour networkBehaviour)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour"),(0,r.kt)("td",{parentName:"tr",align:null},"networkBehaviour"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"flush"},"Flush()"),(0,r.kt)("h5",{id:"declaration-9"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Flush()\n")),(0,r.kt)("h4",{id:"reset"},"Reset()"),(0,r.kt)("h5",{id:"declaration-10"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Reset()\n")),(0,r.kt)("h4",{id:"onserializeallnetworkwriter"},"OnSerializeAll(NetworkWriter)"),(0,r.kt)("h5",{id:"declaration-11"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnSerializeAll(NetworkWriter writer)\n")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,r.kt)("td",{parentName:"tr",align:null},"writer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"onserializedeltanetworkwriter"},"OnSerializeDelta(NetworkWriter)"),(0,r.kt)("h5",{id:"declaration-12"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnSerializeDelta(NetworkWriter writer)\n")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,r.kt)("td",{parentName:"tr",align:null},"writer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ondeserializeallnetworkreader"},"OnDeserializeAll(NetworkReader)"),(0,r.kt)("h5",{id:"declaration-13"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnDeserializeAll(NetworkReader reader)\n")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,r.kt)("td",{parentName:"tr",align:null},"reader"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ondeserializedeltanetworkreader"},"OnDeserializeDelta(NetworkReader)"),(0,r.kt)("h5",{id:"declaration-14"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnDeserializeDelta(NetworkReader reader)\n")),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,r.kt)("td",{parentName:"tr",align:null},"reader"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"addt"},"Add(T)"),(0,r.kt)("h5",{id:"declaration-15"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Add(T item)\n")),(0,r.kt)("h5",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"addrangeienumerablet"},"AddRange(IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-16"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddRange(IEnumerable<T> range)\n")),(0,r.kt)("h5",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"clear"},"Clear()"),(0,r.kt)("h5",{id:"declaration-17"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Clear()\n")),(0,r.kt)("h4",{id:"containst"},"Contains(T)"),(0,r.kt)("h5",{id:"declaration-18"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Contains(T item)\n")),(0,r.kt)("h5",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"copytot-int32"},"CopyTo(T[], Int32)"),(0,r.kt)("h5",{id:"declaration-19"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CopyTo(T[] array, int arrayIndex)\n")),(0,r.kt)("h5",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{T}[]"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"arrayIndex"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"indexoft"},"IndexOf(T)"),(0,r.kt)("h5",{id:"declaration-20"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public int IndexOf(T item)\n")),(0,r.kt)("h5",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"findindexpredicatet"},"FindIndex(Predicate","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-21"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public int FindIndex(Predicate<T> match)\n")),(0,r.kt)("h5",{id:"parameters-13"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Predicate","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"match"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"findpredicatet"},"Find(Predicate","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-22"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public T Find(Predicate<T> match)\n")),(0,r.kt)("h5",{id:"parameters-14"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Predicate","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"match"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"findallpredicatet"},"FindAll(Predicate","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-23"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public List<T> FindAll(Predicate<T> match)\n")),(0,r.kt)("h5",{id:"parameters-15"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Predicate","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"match"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.List","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"insertint32-t"},"Insert(Int32, T)"),(0,r.kt)("h5",{id:"declaration-24"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Insert(int index, T item)\n")),(0,r.kt)("h5",{id:"parameters-16"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"insertrangeint32-ienumerablet"},"InsertRange(Int32, IEnumerable","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-25"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void InsertRange(int index, IEnumerable<T> range)\n")),(0,r.kt)("h5",{id:"parameters-17"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removet"},"Remove(T)"),(0,r.kt)("h5",{id:"declaration-26"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Remove(T item)\n")),(0,r.kt)("h5",{id:"parameters-18"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removeatint32"},"RemoveAt(Int32)"),(0,r.kt)("h5",{id:"declaration-27"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveAt(int index)\n")),(0,r.kt)("h5",{id:"parameters-19"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"removeallpredicatet"},"RemoveAll(Predicate","<","T",">",")"),(0,r.kt)("h5",{id:"declaration-28"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public int RemoveAll(Predicate<T> match)\n")),(0,r.kt)("h5",{id:"parameters-20"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Predicate","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"match"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"setitemdirtyt"},"SetItemDirty(T)"),(0,r.kt)("p",null,"Can be used to set item dirty manually.\nshould be used with classes to avoid having to clear field first\nWill invoke OnSet"),(0,r.kt)("h5",{id:"declaration-29"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetItemDirty(T item)\n")),(0,r.kt)("h5",{id:"parameters-21"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"setitemdirtyatint32"},"SetItemDirtyAt(Int32)"),(0,r.kt)("p",null,"Can be used to set item dirty manually.\nshould be used with classes to avoid having to clear field first"),(0,r.kt)("h5",{id:"declaration-30"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetItemDirtyAt(int index)\n")),(0,r.kt)("h5",{id:"parameters-22"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"getenumerator"},"GetEnumerator()"),(0,r.kt)("h5",{id:"declaration-31"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncList<T>.Enumerator GetEnumerator()\n")),(0,r.kt)("h5",{id:"returns-7"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.Collections.SyncList.Enumerator","<",">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ienumerabletgetenumerator"},"IEnumerable","<","T",">",".GetEnumerator()"),(0,r.kt)("h5",{id:"declaration-32"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"IEnumerator<T> IEnumerable<T>.GetEnumerator()\n")),(0,r.kt)("h5",{id:"returns-8"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerator","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"ienumerablegetenumerator"},"IEnumerable.GetEnumerator()"),(0,r.kt)("h5",{id:"declaration-33"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"IEnumerator IEnumerable.GetEnumerator()\n")),(0,r.kt)("h5",{id:"returns-9"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Collections.IEnumerator"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);