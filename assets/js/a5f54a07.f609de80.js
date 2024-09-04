"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"ConnectionState",title:"ConnectionState"},c="Enum ConnectionState",i={unversionedId:"reference/Mirage.SocketLayer/ConnectionState",id:"reference/Mirage.SocketLayer/ConnectionState",title:"ConnectionState",description:"Syntax",source:"@site/docs/reference/Mirage.SocketLayer/ConnectionState.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/ConnectionState",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/ConnectionState",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.SocketLayer/ConnectionState.md",tags:[],version:"current",frontMatter:{id:"ConnectionState",title:"ConnectionState"},sidebar:"api",previous:{title:"ConnectionExtensions",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/ConnectionExtensions"},next:{title:"DisconnectReason",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/DisconnectReason"}},l={},d=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"Created",id:"created",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Connecting",id:"connecting",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Connected",id:"connected",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Disconnected",id:"disconnected",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Removing",id:"removing",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Destroyed",id:"destroyed",level:4},{value:"Declaration",id:"declaration-5",level:5}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum-connectionstate"},"Enum ConnectionState"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum ConnectionState\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"created"},"Created"),(0,a.kt)("p",null,"Initial state"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Created = 1\n")),(0,a.kt)("h4",{id:"connecting"},"Connecting"),(0,a.kt)("p",null,"Client is connecting to server"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Connecting = 2\n")),(0,a.kt)("h4",{id:"connected"},"Connected"),(0,a.kt)("p",null,"Server as accepted connection"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Connected = 3\n")),(0,a.kt)("h4",{id:"disconnected"},"Disconnected"),(0,a.kt)("p",null,"Server or client has disconnected the connection and is waiting to be cleaned up"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Disconnected = 9\n")),(0,a.kt)("h4",{id:"removing"},"Removing"),(0,a.kt)("p",null,"Marked to be removed from the connection collection"),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Removing = 10\n")),(0,a.kt)("h4",{id:"destroyed"},"Destroyed"),(0,a.kt)("p",null,"Removed from collection and all state cleaned up"),(0,a.kt)("h5",{id:"declaration-5"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Destroyed = 11\n")))}u.isMDXComponent=!0}}]);