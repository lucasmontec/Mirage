"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4915],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),k=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=k(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=k(a),p=o,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>k});var n=a(87462),o=(a(67294),a(3905));const r={id:"Mirage.SocketLayer",title:"Mirage.SocketLayer"},i="Mirage.SocketLayer",l={unversionedId:"reference/Mirage.SocketLayer/Mirage.SocketLayer",id:"reference/Mirage.SocketLayer/Mirage.SocketLayer",title:"Mirage.SocketLayer",description:"Classes",source:"@site/docs/reference/Mirage.SocketLayer/index.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.SocketLayer/index.md",tags:[],version:"current",frontMatter:{id:"Mirage.SocketLayer",title:"Mirage.SocketLayer"},sidebar:"api",previous:{title:"ZigZagEncodeAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/ZigZagEncodeAttribute"},next:{title:"AckSystem.ReliablePacket",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/AckSystem.ReliablePacket"}},c={},k=[{value:"Classes",id:"classes",level:2},{value:"AckSystem",id:"acksystem",level:4},{value:"AckSystem.ReliablePacket",id:"acksystemreliablepacket",level:4},{value:"ArrayBatch",id:"arraybatch",level:4},{value:"AutoCompleteToken",id:"autocompletetoken",level:4},{value:"Batch",id:"batch",level:4},{value:"BufferFullException",id:"bufferfullexception",level:4},{value:"ByteBuffer",id:"bytebuffer",level:4},{value:"ByteUtils",id:"byteutils",level:4},{value:"Config",id:"config",level:4},{value:"ConnectionExtensions",id:"connectionextensions",level:4},{value:"INotifyCallBackExtensions",id:"inotifycallbackextensions",level:4},{value:"MessageSizeException",id:"messagesizeexception",level:4},{value:"Metrics",id:"metrics",level:4},{value:"NoConnectionException",id:"noconnectionexception",level:4},{value:"NotifyToken",id:"notifytoken",level:4},{value:"NotifyTokenException",id:"notifytokenexception",level:4},{value:"Peer",id:"peer",level:4},{value:"Pool&lt;T&gt;",id:"poolt",level:4},{value:"ReliableBatch",id:"reliablebatch",level:4},{value:"RingBuffer&lt;T&gt;",id:"ringbuffert",level:4},{value:"Sequencer",id:"sequencer",level:4},{value:"SocketFactory",id:"socketfactory",level:4},{value:"SocketLayerException",id:"socketlayerexception",level:4},{value:"Structs",id:"structs",level:2},{value:"AckSystem.ReliableReceived",id:"acksystemreliablereceived",level:4},{value:"Metrics.Frame",id:"metricsframe",level:4},{value:"PoolMetrics",id:"poolmetrics",level:4},{value:"Interfaces",id:"interfaces",level:2},{value:"IConnection",id:"iconnection",level:4},{value:"IDataHandler",id:"idatahandler",level:4},{value:"IEndPoint",id:"iendpoint",level:4},{value:"IHasAddress",id:"ihasaddress",level:4},{value:"IHasPort",id:"ihasport",level:4},{value:"INotifyCallBack",id:"inotifycallback",level:4},{value:"INotifyToken",id:"inotifytoken",level:4},{value:"IPeer",id:"ipeer",level:4},{value:"IRawConnection",id:"irawconnection",level:4},{value:"ISocket",id:"isocket",level:4},{value:"ITime",id:"itime",level:4},{value:"Enums",id:"enums",level:2},{value:"Commands",id:"commands",level:4},{value:"ConnectionState",id:"connectionstate",level:4},{value:"DisconnectReason",id:"disconnectreason",level:4},{value:"PacketType",id:"packettype",level:4},{value:"RejectReason",id:"rejectreason",level:4},{value:"Delegates",id:"delegates",level:2},{value:"Pool&lt;T&gt;.CreateNewItem",id:"pooltcreatenewitem",level:4},{value:"Pool&lt;T&gt;.CreateNewItemNoCount",id:"pooltcreatenewitemnocount",level:4}],s={toc:k};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"miragesocketlayer"},"Mirage.SocketLayer"),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("h4",{id:"acksystem"},(0,o.kt)("a",{parentName:"h4",href:"./AckSystem"},"AckSystem")),(0,o.kt)("h4",{id:"acksystemreliablepacket"},(0,o.kt)("a",{parentName:"h4",href:"./AckSystem.ReliablePacket"},"AckSystem.ReliablePacket")),(0,o.kt)("h4",{id:"arraybatch"},(0,o.kt)("a",{parentName:"h4",href:"./ArrayBatch"},"ArrayBatch")),(0,o.kt)("h4",{id:"autocompletetoken"},(0,o.kt)("a",{parentName:"h4",href:"./AutoCompleteToken"},"AutoCompleteToken")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Token that invokes  immediately")),(0,o.kt)("h4",{id:"batch"},(0,o.kt)("a",{parentName:"h4",href:"./Batch"},"Batch")),(0,o.kt)("h4",{id:"bufferfullexception"},(0,o.kt)("a",{parentName:"h4",href:"./BufferFullException"},"BufferFullException")),(0,o.kt)("h4",{id:"bytebuffer"},(0,o.kt)("a",{parentName:"h4",href:"./ByteBuffer"},"ByteBuffer")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Warpper around a byte[] that belongs to a ")),(0,o.kt)("h4",{id:"byteutils"},(0,o.kt)("a",{parentName:"h4",href:"./ByteUtils"},"ByteUtils")),(0,o.kt)("h4",{id:"config"},(0,o.kt)("a",{parentName:"h4",href:"./Config"},"Config")),(0,o.kt)("h4",{id:"connectionextensions"},(0,o.kt)("a",{parentName:"h4",href:"./ConnectionExtensions"},"ConnectionExtensions")),(0,o.kt)("h4",{id:"inotifycallbackextensions"},(0,o.kt)("a",{parentName:"h4",href:"./INotifyCallBackExtensions"},"INotifyCallBackExtensions")),(0,o.kt)("h4",{id:"messagesizeexception"},(0,o.kt)("a",{parentName:"h4",href:"./MessageSizeException"},"MessageSizeException")),(0,o.kt)("h4",{id:"metrics"},(0,o.kt)("a",{parentName:"h4",href:"./Metrics"},"Metrics")),(0,o.kt)("h4",{id:"noconnectionexception"},(0,o.kt)("a",{parentName:"h4",href:"./NoConnectionException"},"NoConnectionException")),(0,o.kt)("h4",{id:"notifytoken"},(0,o.kt)("a",{parentName:"h4",href:"./NotifyToken"},"NotifyToken")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Object returned from  with events for when packet is Lost or Delivered")),(0,o.kt)("h4",{id:"notifytokenexception"},(0,o.kt)("a",{parentName:"h4",href:"./NotifyTokenException"},"NotifyTokenException")),(0,o.kt)("h4",{id:"peer"},(0,o.kt)("a",{parentName:"h4",href:"./Peer"},"Peer")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Controls flow of data in/out of mirage, Uses ")),(0,o.kt)("h4",{id:"poolt"},(0,o.kt)("a",{parentName:"h4",href:"./Pool-1"},"Pool","<","T",">")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Holds a collection of  so they can be re-used without allocations")),(0,o.kt)("h4",{id:"reliablebatch"},(0,o.kt)("a",{parentName:"h4",href:"./ReliableBatch"},"ReliableBatch")),(0,o.kt)("h4",{id:"ringbuffert"},(0,o.kt)("a",{parentName:"h4",href:"./RingBuffer-1"},"RingBuffer","<","T",">")),(0,o.kt)("h4",{id:"sequencer"},(0,o.kt)("a",{parentName:"h4",href:"./Sequencer"},"Sequencer")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A sequence generator that can wrap.\nFor example a 2 bit sequencer would generate\nthe following numbers:\n0,1,2,3,0,1,2,3,0,1,2,3...")),(0,o.kt)("h4",{id:"socketfactory"},(0,o.kt)("a",{parentName:"h4",href:"./SocketFactory"},"SocketFactory")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creates an instance of ")),(0,o.kt)("h4",{id:"socketlayerexception"},(0,o.kt)("a",{parentName:"h4",href:"./SocketLayerException"},"SocketLayerException")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Base Exception by all errors from using SocketLayer")),(0,o.kt)("h2",{id:"structs"},"Structs"),(0,o.kt)("h4",{id:"acksystemreliablereceived"},(0,o.kt)("a",{parentName:"h4",href:"./AckSystem.ReliableReceived"},"AckSystem.ReliableReceived")),(0,o.kt)("h4",{id:"metricsframe"},(0,o.kt)("a",{parentName:"h4",href:"./Metrics.Frame"},"Metrics.Frame")),(0,o.kt)("h4",{id:"poolmetrics"},(0,o.kt)("a",{parentName:"h4",href:"./PoolMetrics"},"PoolMetrics")),(0,o.kt)("h2",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"iconnection"},(0,o.kt)("a",{parentName:"h4",href:"./IConnection"},"IConnection")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Connection for ")),(0,o.kt)("h4",{id:"idatahandler"},(0,o.kt)("a",{parentName:"h4",href:"./IDataHandler"},"IDataHandler")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Handles data from SocketLayer\nA high level script should implement this interface give it to Peer when it is created")),(0,o.kt)("h4",{id:"iendpoint"},(0,o.kt)("a",{parentName:"h4",href:"./IEndPoint"},"IEndPoint")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Object that can be used as an endpoint for  and ")),(0,o.kt)("p",null,"Implementation of this should override  and  so that 2 instance wil be equal if they have the same address internally"),(0,o.kt)("p",null,"When a new connection is received by Peer a copy of this endpoint will be created and given to that connection.\nOn future received the incoming endpoint will be compared to active connections inside a dictionary"),(0,o.kt)("h4",{id:"ihasaddress"},(0,o.kt)("a",{parentName:"h4",href:"./IHasAddress"},"IHasAddress")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can be added to SocketFactory that have an Address Setting")),(0,o.kt)("h4",{id:"ihasport"},(0,o.kt)("a",{parentName:"h4",href:"./IHasPort"},"IHasPort")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can be added to SocketFactory that have a Port Setting")),(0,o.kt)("h4",{id:"inotifycallback"},(0,o.kt)("a",{parentName:"h4",href:"./INotifyCallBack"},"INotifyCallBack")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can be passed into  and methods will be invoked when notify is delivered or lost")),(0,o.kt)("p",null,"See the Notify Example on how to use this interface"),(0,o.kt)("h4",{id:"inotifytoken"},(0,o.kt)("a",{parentName:"h4",href:"./INotifyToken"},"INotifyToken")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Object returned from  with events for when packet is Lost or Delivered")),(0,o.kt)("h4",{id:"ipeer"},(0,o.kt)("a",{parentName:"h4",href:"./IPeer"},"IPeer")),(0,o.kt)("h4",{id:"irawconnection"},(0,o.kt)("a",{parentName:"h4",href:"./IRawConnection"},"IRawConnection")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A connection that can send data directly to sockets\nOnly things inside socket layer should be sending raw packets. Others should use the methods inside ")),(0,o.kt)("h4",{id:"isocket"},(0,o.kt)("a",{parentName:"h4",href:"./ISocket"},"ISocket")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Link between Mirage and the outside world")),(0,o.kt)("h4",{id:"itime"},(0,o.kt)("a",{parentName:"h4",href:"./ITime"},"ITime")),(0,o.kt)("h2",{id:"enums"},"Enums"),(0,o.kt)("h4",{id:"commands"},(0,o.kt)("a",{parentName:"h4",href:"./Commands"},"Commands")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Small message used to control a connection")),(0,o.kt)("p",null," and Commands uses their own byte/enum to split up the flow and add struture to the code."),(0,o.kt)("h4",{id:"connectionstate"},(0,o.kt)("a",{parentName:"h4",href:"./ConnectionState"},"ConnectionState")),(0,o.kt)("h4",{id:"disconnectreason"},(0,o.kt)("a",{parentName:"h4",href:"./DisconnectReason"},"DisconnectReason")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reason why a connection was disconnected")),(0,o.kt)("h4",{id:"packettype"},(0,o.kt)("a",{parentName:"h4",href:"./PacketType"},"PacketType")),(0,o.kt)("h4",{id:"rejectreason"},(0,o.kt)("a",{parentName:"h4",href:"./RejectReason"},"RejectReason")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reason for reject sent from server")),(0,o.kt)("h2",{id:"delegates"},"Delegates"),(0,o.kt)("h4",{id:"pooltcreatenewitem"},(0,o.kt)("a",{parentName:"h4",href:"./Pool-1.CreateNewItem"},"Pool","<","T",">",".CreateNewItem")),(0,o.kt)("h4",{id:"pooltcreatenewitemnocount"},(0,o.kt)("a",{parentName:"h4",href:"./Pool-1.CreateNewItemNoCount"},"Pool","<","T",">",".CreateNewItemNoCount")))}d.isMDXComponent=!0}}]);