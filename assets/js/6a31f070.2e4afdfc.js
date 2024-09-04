"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2653],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),s=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(u.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=n,m=p["".concat(u,".").concat(g)]||p[g]||k[g]||o;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},27121:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const o={id:"NetworkTransform",title:"NetworkTransform"},i="Class NetworkTransform",l={unversionedId:"reference/Mirage/NetworkTransform",id:"reference/Mirage/NetworkTransform",title:"NetworkTransform",description:"Inheritance",source:"@site/docs/reference/Mirage/NetworkTransform.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkTransform",permalink:"/Mirage/docs/reference/Mirage/NetworkTransform",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/NetworkTransform.md",tags:[],version:"current",frontMatter:{id:"NetworkTransform",title:"NetworkTransform"},sidebar:"api",previous:{title:"NetworkTime",permalink:"/Mirage/docs/reference/Mirage/NetworkTime"},next:{title:"NetworkTransformBase.DataPoint",permalink:"/Mirage/docs/reference/Mirage/NetworkTransformBase.DataPoint"}},u={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"TargetComponent",id:"targetcomponent",level:4},{value:"Declaration",id:"declaration",level:5}],c={toc:s};function k(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-networktransform"},"Class NetworkTransform"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,n.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.NetworkBehaviour"),(0,n.kt)("div",{class:"level",style:{"--data-index":2}},"Mirage.NetworkTransformBase")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show"),(0,n.kt)("p",null,"Mirage.NetworkTransformBase.ClientAuthority"),(0,n.kt)("p",null,"Mirage.NetworkTransformBase.LocalPositionSensitivity"),(0,n.kt)("p",null,"Mirage.NetworkTransformBase.LocalRotationSensitivity"),(0,n.kt)("p",null,"Mirage.NetworkTransformBase.LocalScaleSensitivity"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour._nextSyncTime"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncSettings"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalClient"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsHost"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsLocalPlayer"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsServerOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.IsClientOnly"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.HasAuthority"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Server"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ServerObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Client"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClientObjectManager"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Owner"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.World"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.NetworkTime"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.BehaviourId"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarDirtyBits"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.AnySyncObjectDirty"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.syncObjects"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.Identity"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.COMPONENT_INDEX_NOT_FOUND"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ComponentIndex"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.InitSyncObject(Mirage.Collections.ISyncObject)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.UpdateSyncObjectShouldSync()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SyncVarEqual","<","T",">","(T, T)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.ClearDirtyBits()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.AnyDirtyBits()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsAll(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.SerializeObjectsDelta(Mirage.Serialization.NetworkWriter)"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.GetRpcCount()"),(0,n.kt)("p",null,"Mirage.NetworkBehaviour.RegisterRpc(Mirage.RemoteCalls.RemoteCallCollection)")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkTransform : NetworkTransformBase\n")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"targetcomponent"},"TargetComponent"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected override Transform TargetComponent { get; }\n")))}k.isMDXComponent=!0}}]);