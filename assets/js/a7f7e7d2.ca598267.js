"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,s=u["".concat(d,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(s,i(i({ref:t},p),{},{components:a})):n.createElement(s,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={id:"ISocket",title:"ISocket"},i="Interface ISocket",o={unversionedId:"reference/Mirage.SocketLayer/ISocket",id:"reference/Mirage.SocketLayer/ISocket",title:"ISocket",description:"Link between Mirage and the outside world",source:"@site/docs/reference/Mirage.SocketLayer/ISocket.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/ISocket",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/ISocket",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.SocketLayer/ISocket.md",tags:[],version:"current",frontMatter:{id:"ISocket",title:"ISocket"},sidebar:"api",previous:{title:"IRawConnection",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/IRawConnection"},next:{title:"ITime",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/ITime"}},d={},c=[{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"Bind(IEndPoint)",id:"bindiendpoint",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Connect(IEndPoint)",id:"connectiendpoint",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Close()",id:"close",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Poll()",id:"poll",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Returns",id:"returns",level:5},{value:"Receive(Byte[], out IEndPoint)",id:"receivebyte-out-iendpoint",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Send(IEndPoint, Byte[], Int32)",id:"sendiendpoint-byte-int32",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-3",level:5}],p={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-isocket"},"Interface ISocket"),(0,r.kt)("p",null,"Link between Mirage and the outside world"),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public interface ISocket\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"bindiendpoint"},"Bind(IEndPoint)"),(0,r.kt)("p",null,"Starts listens for data on an endpoint\nUsed by Server to allow clients to connect"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void Bind(IEndPoint endPoint)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IEndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"endPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"the endpoint to listen on")))),(0,r.kt)("h4",{id:"connectiendpoint"},"Connect(IEndPoint)"),(0,r.kt)("p",null,"Sets up Socket ready to send data to endpoint as a client"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void Connect(IEndPoint endPoint)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IEndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"endPoint"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"close"},"Close()"),(0,r.kt)("p",null,"Closes the socket, stops receiving messages from other peers"),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void Close()\n")),(0,r.kt)("h4",{id:"poll"},"Poll()"),(0,r.kt)("p",null,"Checks if a packet is available "),(0,r.kt)("h5",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"bool Poll()\n")),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true if there is atleast 1 packet to read")))),(0,r.kt)("h4",{id:"receivebyte-out-iendpoint"},"Receive(Byte[], out IEndPoint)"),(0,r.kt)("p",null,"Gets next packet\nShould be called after Poll"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Implementation should check that incoming packet is within the size of buffer,\nand make sure not to return bytesReceived above that size\n")),(0,r.kt)("h5",{id:"declaration-4"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"int Receive(byte[] buffer, out IEndPoint endPoint)\n")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},"buffer to write recevived packet into")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IEndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"endPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"where packet came from")))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"length of packet, should not be above ",(0,r.kt)("code",{"data-dev-comment-type":"paramref",class:"paramref"},"buffer")," length")))),(0,r.kt)("h4",{id:"sendiendpoint-byte-int32"},"Send(IEndPoint, Byte[], Int32)"),(0,r.kt)("p",null,"Sends a packet to an endpoint\nImplementation should use length because packet is a buffer than may contain data from previous packets"),(0,r.kt)("h5",{id:"declaration-5"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"void Send(IEndPoint endPoint, byte[] packet, int length)\n")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IEndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"endPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"where packet is being sent to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"packet"),(0,r.kt)("td",{parentName:"tr",align:null},"buffer that contains the packet, starting at index 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},"length of the packet")))))}k.isMDXComponent=!0}}]);