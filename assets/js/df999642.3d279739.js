"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),k=l,m=p["".concat(o,".").concat(k)]||p[k]||u[k]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},39701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={id:"NetworkClient",title:"NetworkClient"},i="Class NetworkClient",c={unversionedId:"reference/Mirage/NetworkClient",id:"reference/Mirage/NetworkClient",title:"NetworkClient",description:"This is a network client class used by the networking system. It contains a NetworkConnection that is used to connect to a network server.",source:"@site/docs/reference/Mirage/NetworkClient.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkClient",permalink:"/Mirage/docs/reference/Mirage/NetworkClient",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/NetworkClient.md",tags:[],version:"current",frontMatter:{id:"NetworkClient",title:"NetworkClient"},sidebar:"api",previous:{title:"NetworkBehaviour",permalink:"/Mirage/docs/reference/Mirage/NetworkBehaviour"},next:{title:"NetworkDiagnostics.MessageInfo",permalink:"/Mirage/docs/reference/Mirage/NetworkDiagnostics.MessageInfo"}},o={},d=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"EnablePeerMetrics",id:"enablepeermetrics",level:4},{value:"Declaration",id:"declaration",level:5},{value:"MetricsSize",id:"metricssize",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"SocketFactory",id:"socketfactory",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"ObjectManager",id:"objectmanager",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"DisconnectOnException",id:"disconnectonexception",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"RethrowException",id:"rethrowexception",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"RunInBackground",id:"runinbackground",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Authenticator",id:"authenticator",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"ManualUpdate",id:"manualupdate",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Properties",id:"properties",level:3},{value:"Metrics",id:"metrics",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"PeerConfig",id:"peerconfig",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"PeerPoolMetrics",id:"peerpoolmetrics",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Started",id:"started",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Connected",id:"connected",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Authenticated",id:"authenticated",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Disconnected",id:"disconnected",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Player",id:"player",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Active",id:"active",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"IsConnected",id:"isconnected",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"World",id:"world",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"SyncVarSender",id:"syncvarsender",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"MessageHandler",id:"messagehandler",level:4},{value:"Declaration",id:"declaration-21",level:5},{value:"IsLocalClient",id:"islocalclient",level:4},{value:"Declaration",id:"declaration-22",level:5},{value:"IsHost",id:"ishost",level:4},{value:"Declaration",id:"declaration-23",level:5},{value:"Methods",id:"methods",level:3},{value:"Connect(String, Nullable&lt;UInt16&gt;)",id:"connectstring-nullableuint16",level:4},{value:"Declaration",id:"declaration-24",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Disconnect()",id:"disconnect",level:4},{value:"Declaration",id:"declaration-25",level:5},{value:"Send&lt;T&gt;(T, Channel)",id:"sendtt-channel",level:4},{value:"Declaration",id:"declaration-26",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Send(ArraySegment&lt;Byte&gt;, Channel)",id:"sendarraysegmentbyte-channel",level:4},{value:"Declaration",id:"declaration-27",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Send&lt;T&gt;(T, INotifyCallBack)",id:"sendtt-inotifycallback",level:4},{value:"Declaration",id:"declaration-28",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"UpdateReceive()",id:"updatereceive",level:4},{value:"Declaration",id:"declaration-29",level:5},{value:"UpdateSent()",id:"updatesent",level:4},{value:"Declaration",id:"declaration-30",level:5}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-networkclient"},"Class NetworkClient"),(0,l.kt)("p",null,"This is a network client class used by the networking system. It contains a NetworkConnection that is used to connect to a network server.\nThe  handle connection state, messages handlers, and connection configuration. There can be many  instances in a process at a time, but only one that is connected to a game server () that uses spawned objects.\nhas an internal update function where it handles events from the transport layer. This includes asynchronous connect events, disconnect events and incoming data from a server."),(0,l.kt)("div",{class:"inheritance"},(0,l.kt)("h5",{id:"inheritance"},"Inheritance"),(0,l.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkClient : MonoBehaviour, IMessageSender\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"enablepeermetrics"},"EnablePeerMetrics"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool EnablePeerMetrics\n")),(0,l.kt)("h4",{id:"metricssize"},"MetricsSize"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public int MetricsSize\n")),(0,l.kt)("h4",{id:"socketfactory"},"SocketFactory"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SocketFactory SocketFactory\n")),(0,l.kt)("h4",{id:"objectmanager"},"ObjectManager"),(0,l.kt)("h5",{id:"declaration-3"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public ClientObjectManager ObjectManager\n")),(0,l.kt)("h4",{id:"disconnectonexception"},"DisconnectOnException"),(0,l.kt)("h5",{id:"declaration-4"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool DisconnectOnException\n")),(0,l.kt)("h4",{id:"rethrowexception"},"RethrowException"),(0,l.kt)("h5",{id:"declaration-5"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool RethrowException\n")),(0,l.kt)("h4",{id:"runinbackground"},"RunInBackground"),(0,l.kt)("h5",{id:"declaration-6"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool RunInBackground\n")),(0,l.kt)("h4",{id:"authenticator"},"Authenticator"),(0,l.kt)("h5",{id:"declaration-7"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public AuthenticatorSettings Authenticator\n")),(0,l.kt)("h4",{id:"manualupdate"},"ManualUpdate"),(0,l.kt)("p",null,"Set to true if you want to manually call  and  and stop mirage from automatically calling them"),(0,l.kt)("h5",{id:"declaration-8"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool ManualUpdate\n")),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"metrics"},"Metrics"),(0,l.kt)("h5",{id:"declaration-9"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Metrics Metrics { get; }\n")),(0,l.kt)("h4",{id:"peerconfig"},"PeerConfig"),(0,l.kt)("p",null,"Config for peer, if not set will use default settings"),(0,l.kt)("h5",{id:"declaration-10"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Config PeerConfig { get; set; }\n")),(0,l.kt)("h4",{id:"peerpoolmetrics"},"PeerPoolMetrics"),(0,l.kt)("h5",{id:"declaration-11"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public PoolMetrics? PeerPoolMetrics { get; }\n")),(0,l.kt)("h4",{id:"started"},"Started"),(0,l.kt)("p",null,"Event fires when the client starts, before it has connected to the Server."),(0,l.kt)("h5",{id:"declaration-12"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IAddLateEventUnity Started { get; }\n")),(0,l.kt)("h4",{id:"connected"},"Connected"),(0,l.kt)("p",null,"Event fires once the Client has connected its Server."),(0,l.kt)("h5",{id:"declaration-13"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IAddLateEventUnity<INetworkPlayer> Connected { get; }\n")),(0,l.kt)("h4",{id:"authenticated"},"Authenticated"),(0,l.kt)("p",null,"Event fires after the Client connection has successfully been authenticated with its Server."),(0,l.kt)("h5",{id:"declaration-14"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IAddLateEventUnity<INetworkPlayer> Authenticated { get; }\n")),(0,l.kt)("h4",{id:"disconnected"},"Disconnected"),(0,l.kt)("p",null,"Event fires after the Client has disconnected from its Server and Cleanup has been called."),(0,l.kt)("h5",{id:"declaration-15"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IAddLateEventUnity<ClientStoppedReason> Disconnected { get; }\n")),(0,l.kt)("h4",{id:"player"},"Player"),(0,l.kt)("p",null,"The NetworkConnection object this client is using."),(0,l.kt)("h5",{id:"declaration-16"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public INetworkPlayer Player { get; }\n")),(0,l.kt)("h4",{id:"active"},"Active"),(0,l.kt)("p",null,"active is true while a client is connecting/connected\n(= while the network is active)"),(0,l.kt)("h5",{id:"declaration-17"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool Active { get; }\n")),(0,l.kt)("h4",{id:"isconnected"},"IsConnected"),(0,l.kt)("p",null,"This gives the current connection status of the client."),(0,l.kt)("h5",{id:"declaration-18"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsConnected { get; }\n")),(0,l.kt)("h4",{id:"world"},"World"),(0,l.kt)("h5",{id:"declaration-19"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkWorld World { get; }\n")),(0,l.kt)("h4",{id:"syncvarsender"},"SyncVarSender"),(0,l.kt)("h5",{id:"declaration-20"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncVarSender SyncVarSender { get; }\n")),(0,l.kt)("h4",{id:"messagehandler"},"MessageHandler"),(0,l.kt)("h5",{id:"declaration-21"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public MessageHandler MessageHandler { get; }\n")),(0,l.kt)("h4",{id:"islocalclient"},"IsLocalClient"),(0,l.kt)("p",null,"Is this NetworkClient connected to a local server in host mode"),(0,l.kt)("h5",{id:"declaration-22"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'[Obsolete("use IsHost instead")]\npublic bool IsLocalClient { get; }\n')),(0,l.kt)("h4",{id:"ishost"},"IsHost"),(0,l.kt)("p",null,"Is this NetworkClient connected to a local server in host mode"),(0,l.kt)("h5",{id:"declaration-23"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsHost { get; }\n")),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"connectstring-nullableuint16"},"Connect(String, Nullable","<","UInt16",">",")"),(0,l.kt)("p",null,"Connect client to a NetworkServer instance."),(0,l.kt)("h5",{id:"declaration-24"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Connect(string address = null, ushort? port = default(ushort? ))\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.String"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Nullable","<","System.UInt16",">"),(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"disconnect"},"Disconnect()"),(0,l.kt)("p",null,"Disconnect from server.\nThe disconnect message will be invoked."),(0,l.kt)("h5",{id:"declaration-25"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Disconnect()\n")),(0,l.kt)("h4",{id:"sendtt-channel"},"Send","<","T",">","(T, Channel)"),(0,l.kt)("p",null,"This sends a network message with a message Id to the server. This message is sent on channel zero, which by default is the reliable channel.\nThe message must be an instance of a class derived from MessageBase.\nThe message id passed to Send() is used to identify the handler function to invoke on the server when the message is received."),(0,l.kt)("h5",{id:"declaration-26"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send<T>(T message, Channel channelId = Channel.Reliable)\n")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"channelId"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendarraysegmentbyte-channel"},"Send(ArraySegment","<","Byte",">",", Channel)"),(0,l.kt)("h5",{id:"declaration-27"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send(ArraySegment<byte> segment, Channel channelId = Channel.Reliable)\n")),(0,l.kt)("h5",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,l.kt)("td",{parentName:"tr",align:null},"segment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"channelId"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendtt-inotifycallback"},"Send","<","T",">","(T, INotifyCallBack)"),(0,l.kt)("h5",{id:"declaration-28"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send<T>(T message, INotifyCallBack notifyCallBack)\n")),(0,l.kt)("h5",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyCallBack"),(0,l.kt)("td",{parentName:"tr",align:null},"notifyCallBack"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"updatereceive"},"UpdateReceive()"),(0,l.kt)("h5",{id:"declaration-29"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void UpdateReceive()\n")),(0,l.kt)("h4",{id:"updatesent"},"UpdateSent()"),(0,l.kt)("h5",{id:"declaration-30"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void UpdateSent()\n")))}u.isMDXComponent=!0}}]);