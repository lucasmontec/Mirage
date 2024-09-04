"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),v=u(r),k=n,d=v["".concat(c,".").concat(k)]||v[k]||p[k]||l;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},66327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"NetworkBehaviorSyncvar",title:"NetworkBehaviorSyncvar"},o="Struct NetworkBehaviorSyncvar",i={unversionedId:"reference/Mirage/NetworkBehaviorSyncvar",id:"reference/Mirage/NetworkBehaviorSyncvar",title:"NetworkBehaviorSyncvar",description:"backing struct for a NetworkIdentity when used as a syncvar",source:"@site/docs/reference/Mirage/NetworkBehaviorSyncvar.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkBehaviorSyncvar",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviorSyncvar",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/NetworkBehaviorSyncvar.md",tags:[],version:"current",frontMatter:{id:"NetworkBehaviorSyncvar",title:"NetworkBehaviorSyncvar"},sidebar:"api",previous:{title:"NetworkBehaviorSyncvar<T>",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviorSyncvar-1"},next:{title:"NetworkBehaviour.Id",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviour.Id"}},c={},u=[{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"NetworkBehaviorSyncvar(NetworkBehaviour)",id:"networkbehaviorsyncvarnetworkbehaviour",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Properties",id:"properties",level:3},{value:"Value",id:"value",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"GetAs&lt;T&gt;()",id:"getast",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Returns",id:"returns",level:5},{value:"Equals(NetworkBehaviorSyncvar)",id:"equalsnetworkbehaviorsyncvar",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"struct-networkbehaviorsyncvar"},"Struct NetworkBehaviorSyncvar"),(0,n.kt)("p",null,"backing struct for a NetworkIdentity when used as a syncvar\nthe weaver will replace the syncvar with this struct."),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public struct NetworkBehaviorSyncvar : IEquatable<NetworkBehaviorSyncvar>\n")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("h4",{id:"networkbehaviorsyncvarnetworkbehaviour"},"NetworkBehaviorSyncvar(NetworkBehaviour)"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkBehaviorSyncvar(NetworkBehaviour behaviour)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviour"),(0,n.kt)("td",{parentName:"tr",align:null},"behaviour"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"value"},"Value"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkBehaviour Value { get; set; }\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"getast"},"GetAs","<","T",">","()"),(0,n.kt)("p",null,"returns Value cast as T"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public T GetAs<T>()\n    where T : NetworkBehaviour\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"T"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"equalsnetworkbehaviorsyncvar"},"Equals(NetworkBehaviorSyncvar)"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Equals(NetworkBehaviorSyncvar other)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkBehaviorSyncvar"),(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);