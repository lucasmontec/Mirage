"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,u=p["".concat(o,".").concat(m)]||p[m]||g[m]||l;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={id:"IMessageReceiver",title:"IMessageReceiver"},i="Interface IMessageReceiver",s={unversionedId:"reference/Mirage/IMessageReceiver",id:"reference/Mirage/IMessageReceiver",title:"IMessageReceiver",description:"An object that can receive messages",source:"@site/docs/reference/Mirage/IMessageReceiver.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/IMessageReceiver",permalink:"/Mirage/docs/reference/Mirage/IMessageReceiver",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/IMessageReceiver.md",tags:[],version:"current",frontMatter:{id:"IMessageReceiver",title:"IMessageReceiver"},sidebar:"api",previous:{title:"HostRendererVisibility",permalink:"/Mirage/docs/reference/Mirage/HostRendererVisibility"},next:{title:"IMessageSender",permalink:"/Mirage/docs/reference/Mirage/IMessageSender"}},o={},c=[{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"RegisterHandler&lt;T&gt;(MessageDelegateWithPlayer&lt;T&gt;, Boolean)",id:"registerhandlertmessagedelegatewithplayert-boolean",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"UnregisterHandler&lt;T&gt;()",id:"unregisterhandlert",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"ClearHandlers()",id:"clearhandlers",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"HandleMessage(INetworkPlayer, ArraySegment&lt;Byte&gt;)",id:"handlemessageinetworkplayer-arraysegmentbyte",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-1",level:5}],d={toc:c};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interface-imessagereceiver"},"Interface IMessageReceiver"),(0,n.kt)("p",null,"An object that can receive messages"),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IMessageReceiver\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"registerhandlertmessagedelegatewithplayert-boolean"},"RegisterHandler","<","T",">","(MessageDelegateWithPlayer","<","T",">",", Boolean)"),(0,n.kt)("p",null,"Registers a handler for a network message that has INetworkPlayer and T Message parameters"),(0,n.kt)("p",null,"When network message are sent, the first 2 bytes are the Id for the type T.\nWhen message is received the handler with the matching Id is found and invoked"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterHandler<T>(MessageDelegateWithPlayer<T> handler, bool allowUnauthenticated)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.MessageDelegateWithPlayer","<","T",">"),(0,n.kt)("td",{parentName:"tr",align:null},"handler"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"allowUnauthenticated"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unregisterhandlert"},"UnregisterHandler","<","T",">","()"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void UnregisterHandler<T>()\n")),(0,n.kt)("h4",{id:"clearhandlers"},"ClearHandlers()"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void ClearHandlers()\n")),(0,n.kt)("h4",{id:"handlemessageinetworkplayer-arraysegmentbyte"},"HandleMessage(INetworkPlayer, ArraySegment","<","Byte",">",")"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void HandleMessage(INetworkPlayer player, ArraySegment<byte> packet)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,n.kt)("td",{parentName:"tr",align:null},"packet"),(0,n.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);