"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(r),d=n,y=k["".concat(c,".").concat(d)]||k[d]||s[d]||i;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},52059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"ReadyCheck",title:"ReadyCheck"},l="Class ReadyCheck",o={unversionedId:"reference/Mirage.Components/ReadyCheck",id:"reference/Mirage.Components/ReadyCheck",title:"ReadyCheck",description:"Simple component to track if a player is ready in a lobby",source:"@site/docs/reference/Mirage.Components/ReadyCheck.md",sourceDirName:"reference/Mirage.Components",slug:"/reference/Mirage.Components/ReadyCheck",permalink:"/Mirage/docs/reference/Mirage.Components/ReadyCheck",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Components/ReadyCheck.md",tags:[],version:"current",frontMatter:{id:"ReadyCheck",title:"ReadyCheck"},sidebar:"api",previous:{title:"LobbyReady",permalink:"/Mirage/docs/reference/Mirage.Components/LobbyReady"},next:{title:"SyncObjectActive",permalink:"/Mirage/docs/reference/Mirage.Components/SyncObjectActive"}},c={},u=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"IsReady",id:"isready",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Methods",id:"methods",level:3},{value:"SetReady(Boolean)",id:"setreadyboolean",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-readycheck"},"Class ReadyCheck"),(0,n.kt)("p",null,"Simple component to track if a player is ready in a lobby"),(0,n.kt)("p",null,"To best use this component Set Sync Direction from owner to server"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,n.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour._nextSyncTime"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncSettings"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsHost"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.BehaviourId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.AnySyncObjectDirty"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.UpdateSyncObjectShouldSync()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClearDirtyBits()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.AnyDirtyBits()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.RegisterRpc(Mirage.RemoteCalls.RemoteCallCollection)")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class ReadyCheck : NetworkBehaviour\n")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"isready"},"IsReady"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsReady { get; }\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"setreadyboolean"},"SetReady(Boolean)"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetReady(bool ready)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"ready"),(0,n.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);