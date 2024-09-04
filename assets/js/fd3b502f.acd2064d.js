"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=c(a),m=l,s=k["".concat(d,".").concat(m)]||k[m]||p[m]||n;return a?r.createElement(s,i(i({ref:t},u),{},{components:a})):r.createElement(s,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(87462),l=(a(67294),a(3905));const n={id:"SyncStack-1",title:"SyncStack<T>"},i="Class SyncStack&lt;T&gt;",o={unversionedId:"reference/Mirage.Collections/SyncStack-1",id:"reference/Mirage.Collections/SyncStack-1",title:"SyncStack<T>",description:"Inheritance",source:"@site/docs/reference/Mirage.Collections/SyncStack-1.md",sourceDirName:"reference/Mirage.Collections",slug:"/reference/Mirage.Collections/SyncStack-1",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncStack-1",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Collections/SyncStack-1.md",tags:[],version:"current",frontMatter:{id:"SyncStack-1",title:"SyncStack<T>"},sidebar:"api",previous:{title:"SyncSortedSet<T>",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncSortedSet-1"},next:{title:"Mirage.Components",permalink:"/Mirage/docs/reference/Mirage.Components/"}},d={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:"Constructors",id:"constructors",level:3},{value:"SyncStack()",id:"syncstack",level:4},{value:"Declaration",id:"declaration",level:5},{value:"SyncStack(Stack&lt;T&gt;)",id:"syncstackstackt",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Properties",id:"properties",level:3},{value:"Count",id:"count",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"IsReadOnly",id:"isreadonly",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"IsDirty",id:"isdirty",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Methods",id:"methods",level:3},{value:"ISyncObject.SetShouldSyncFrom(Boolean)",id:"isyncobjectsetshouldsyncfromboolean",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"ISyncObject.SetNetworkBehaviour(NetworkBehaviour)",id:"isyncobjectsetnetworkbehaviournetworkbehaviour",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Flush()",id:"flush",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Reset()",id:"reset",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"OnSerializeAll(NetworkWriter)",id:"onserializeallnetworkwriter",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"OnSerializeDelta(NetworkWriter)",id:"onserializedeltanetworkwriter",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"OnDeserializeAll(NetworkReader)",id:"ondeserializeallnetworkreader",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"OnDeserializeDelta(NetworkReader)",id:"ondeserializedeltanetworkreader",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"Push(T)",id:"pusht",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"AddRange(IEnumerable&lt;T&gt;)",id:"addrangeienumerablet",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"Clear()",id:"clear",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"CopyTo(T[], Int32)",id:"copytot-int32",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"Pop()",id:"pop",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Returns",id:"returns",level:5},{value:"IEnumerable&lt;T&gt;.GetEnumerator()",id:"ienumerabletgetenumerator",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"Returns",id:"returns-1",level:5},{value:"IEnumerable.GetEnumerator()",id:"ienumerablegetenumerator",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"Returns",id:"returns-2",level:5}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-syncstackt"},"Class SyncStack","<","T",">"),(0,l.kt)("div",{class:"inheritance"},(0,l.kt)("h5",{id:"inheritance"},"Inheritance"),(0,l.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,l.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show")),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class SyncStack<T> : IReadOnlyCollection<T>, IEnumerable<T>, IEnumerable, ISyncObject\n")),(0,l.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("h4",{id:"syncstack"},"SyncStack()"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncStack()\n")),(0,l.kt)("h4",{id:"syncstackstackt"},"SyncStack(Stack","<","T",">",")"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncStack(Stack<T> objects)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.Stack","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"count"},"Count"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public int Count { get; }\n")),(0,l.kt)("h4",{id:"isreadonly"},"IsReadOnly"),(0,l.kt)("h5",{id:"declaration-3"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsReadOnly { get; }\n")),(0,l.kt)("h4",{id:"isdirty"},"IsDirty"),(0,l.kt)("h5",{id:"declaration-4"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsDirty { get; }\n")),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"isyncobjectsetshouldsyncfromboolean"},"ISyncObject.SetShouldSyncFrom(Boolean)"),(0,l.kt)("h5",{id:"declaration-5"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void ISyncObject.SetShouldSyncFrom(bool shouldSync)\n")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"shouldSync"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"isyncobjectsetnetworkbehaviournetworkbehaviour"},"ISyncObject.SetNetworkBehaviour(NetworkBehaviour)"),(0,l.kt)("h5",{id:"declaration-6"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void ISyncObject.SetNetworkBehaviour(NetworkBehaviour networkBehaviour)\n")),(0,l.kt)("h5",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour"),(0,l.kt)("td",{parentName:"tr",align:null},"networkBehaviour"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"flush"},"Flush()"),(0,l.kt)("h5",{id:"declaration-7"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Flush()\n")),(0,l.kt)("h4",{id:"reset"},"Reset()"),(0,l.kt)("h5",{id:"declaration-8"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Reset()\n")),(0,l.kt)("h4",{id:"onserializeallnetworkwriter"},"OnSerializeAll(NetworkWriter)"),(0,l.kt)("h5",{id:"declaration-9"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnSerializeAll(NetworkWriter writer)\n")),(0,l.kt)("h5",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"onserializedeltanetworkwriter"},"OnSerializeDelta(NetworkWriter)"),(0,l.kt)("h5",{id:"declaration-10"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnSerializeDelta(NetworkWriter writer)\n")),(0,l.kt)("h5",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,l.kt)("td",{parentName:"tr",align:null},"writer"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"ondeserializeallnetworkreader"},"OnDeserializeAll(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-11"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnDeserializeAll(NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"ondeserializedeltanetworkreader"},"OnDeserializeDelta(NetworkReader)"),(0,l.kt)("h5",{id:"declaration-12"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnDeserializeDelta(NetworkReader reader)\n")),(0,l.kt)("h5",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,l.kt)("td",{parentName:"tr",align:null},"reader"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"pusht"},"Push(T)"),(0,l.kt)("h5",{id:"declaration-13"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Push(T item)\n")),(0,l.kt)("h5",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"item"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"addrangeienumerablet"},"AddRange(IEnumerable","<","T",">",")"),(0,l.kt)("h5",{id:"declaration-14"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddRange(IEnumerable<T> range)\n")),(0,l.kt)("h5",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerable","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"range"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"clear"},"Clear()"),(0,l.kt)("h5",{id:"declaration-15"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Clear()\n")),(0,l.kt)("h4",{id:"copytot-int32"},"CopyTo(T[], Int32)"),(0,l.kt)("h5",{id:"declaration-16"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CopyTo(T[] array, int arrayIndex)\n")),(0,l.kt)("h5",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{T}[]"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"arrayIndex"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"pop"},"Pop()"),(0,l.kt)("h5",{id:"declaration-17"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public T Pop()\n")),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"ienumerabletgetenumerator"},"IEnumerable","<","T",">",".GetEnumerator()"),(0,l.kt)("h5",{id:"declaration-18"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IEnumerator<T> IEnumerable<T>.GetEnumerator()\n")),(0,l.kt)("h5",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IEnumerator","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"ienumerablegetenumerator"},"IEnumerable.GetEnumerator()"),(0,l.kt)("h5",{id:"declaration-19"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IEnumerator IEnumerable.GetEnumerator()\n")),(0,l.kt)("h5",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.IEnumerator"),(0,l.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);