"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(a),u=l,m=k["".concat(d,".").concat(u)]||k[u]||p[u]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},37698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={id:"NetworkPlayer",title:"NetworkPlayer"},i="Class NetworkPlayer",o={unversionedId:"reference/Mirage/NetworkPlayer",id:"reference/Mirage/NetworkPlayer",title:"NetworkPlayer",description:"A High level network connection. This is used for connections from client-to-server and for connection from server-to-client.",source:"@site/docs/reference/Mirage/NetworkPlayer.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkPlayer",permalink:"/Mirage/docs/reference/Mirage/NetworkPlayer",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/NetworkPlayer.md",tags:[],version:"current",frontMatter:{id:"NetworkPlayer",title:"NetworkPlayer"},sidebar:"api",previous:{title:"NetworkPingMessage",permalink:"/Mirage/docs/reference/Mirage/NetworkPingMessage"},next:{title:"NetworkPongMessage",permalink:"/Mirage/docs/reference/Mirage/NetworkPongMessage"}},d={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"NetworkPlayer(IConnection, Boolean)",id:"networkplayericonnection-boolean",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Properties",id:"properties",level:3},{value:"IsHost",id:"ishost",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Authentication",id:"authentication",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"IsAuthenticated",id:"isauthenticated",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"SceneIsReady",id:"sceneisready",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"HasCharacter",id:"hascharacter",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Connection",id:"connection",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Address",id:"address",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"IsConnecting",id:"isconnecting",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"IsConnected",id:"isconnected",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"VisList",id:"vislist",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"OwnedObjects",id:"ownedobjects",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Identity",id:"identity",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Methods",id:"methods",level:3},{value:"SetAuthentication(PlayerAuthentication, Boolean)",id:"setauthenticationplayerauthentication-boolean",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Disconnect()",id:"disconnect",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"MarkAsDisconnected()",id:"markasdisconnected",level:4},{value:"Declaration",id:"declaration-15",level:5},{value:"Send&lt;T&gt;(T, Channel)",id:"sendtt-channel",level:4},{value:"Declaration",id:"declaration-16",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Send(ArraySegment&lt;Byte&gt;, Channel)",id:"sendarraysegmentbyte-channel",level:4},{value:"Declaration",id:"declaration-17",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Send&lt;T&gt;(T, INotifyCallBack)",id:"sendtt-inotifycallback",level:4},{value:"Declaration",id:"declaration-18",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"ToString()",id:"tostring",level:4},{value:"Declaration",id:"declaration-19",level:5},{value:"Returns",id:"returns",level:5},{value:"AddToVisList(NetworkIdentity)",id:"addtovislistnetworkidentity",level:4},{value:"Declaration",id:"declaration-20",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"RemoveFromVisList(NetworkIdentity)",id:"removefromvislistnetworkidentity",level:4},{value:"Declaration",id:"declaration-21",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"ContainsInVisList(NetworkIdentity)",id:"containsinvislistnetworkidentity",level:4},{value:"Declaration",id:"declaration-22",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-1",level:5},{value:"RemoveAllVisibleObjects()",id:"removeallvisibleobjects",level:4},{value:"Declaration",id:"declaration-23",level:5},{value:"AddOwnedObject(NetworkIdentity)",id:"addownedobjectnetworkidentity",level:4},{value:"Declaration",id:"declaration-24",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"RemoveOwnedObject(NetworkIdentity)",id:"removeownedobjectnetworkidentity",level:4},{value:"Declaration",id:"declaration-25",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"RemoveAllOwnedObject(Boolean)",id:"removeallownedobjectboolean",level:4},{value:"Declaration",id:"declaration-26",level:5},{value:"Parameters",id:"parameters-10",level:5},{value:"DestroyOwnedObjects()",id:"destroyownedobjects",level:4},{value:"Declaration",id:"declaration-27",level:5}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-networkplayer"},"Class NetworkPlayer"),(0,l.kt)("p",null,"A High level network connection. This is used for connections from client-to-server and for connection from server-to-client."),(0,l.kt)("div",{class:"inheritance"},(0,l.kt)("h5",{id:"inheritance"},"Inheritance"),(0,l.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,l.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show")),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public sealed class NetworkPlayer : INetworkPlayer, IMessageSender, IVisibilityTracker, IObjectOwner, ISceneLoader\n")),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("h4",{id:"networkplayericonnection-boolean"},"NetworkPlayer(IConnection, Boolean)"),(0,l.kt)("p",null,"Creates a new NetworkConnection with the specified address and connectionId"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkPlayer(IConnection connection, bool isHost)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IConnection"),(0,l.kt)("td",{parentName:"tr",align:null},"connection"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"isHost"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"ishost"},"IsHost"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsHost { get; }\n")),(0,l.kt)("h4",{id:"authentication"},"Authentication"),(0,l.kt)("p",null,"Authentication information for this NetworkPlayer"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public PlayerAuthentication Authentication { get; }\n")),(0,l.kt)("h4",{id:"isauthenticated"},"IsAuthenticated"),(0,l.kt)("p",null,"Helper methods to check if Authentication is set"),(0,l.kt)("h5",{id:"declaration-3"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsAuthenticated { get; }\n")),(0,l.kt)("h4",{id:"sceneisready"},"SceneIsReady"),(0,l.kt)("p",null,"Flag that tells us if the scene has fully loaded in for player.\nThis property is read-only. It is set by the system on the client when the scene has fully loaded, and set by the system on the server when a ready message is received from a client.\nA client that is ready is sent spawned objects by the server and updates to the state of spawned objects. A client that is not ready is not sent spawned objects.\nStarts as true, when a client connects it is assumed that it is already in a ready scene. It will be set to not ready if NetworkSceneManager loads a scene"),(0,l.kt)("h5",{id:"declaration-4"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool SceneIsReady { get; set; }\n")),(0,l.kt)("h4",{id:"hascharacter"},"HasCharacter"),(0,l.kt)("p",null,"Checks if this player has a "),(0,l.kt)("h5",{id:"declaration-5"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool HasCharacter { get; }\n")),(0,l.kt)("h4",{id:"connection"},"Connection"),(0,l.kt)("h5",{id:"declaration-6"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IConnection Connection { get; }\n")),(0,l.kt)("h4",{id:"address"},"Address"),(0,l.kt)("p",null,"The IP address / URL / FQDN associated with the connection.\nCan be useful for a game master to do IP Bans etc."),(0,l.kt)("p",null,"Best used to get concrete Endpoint type based on the  being used"),(0,l.kt)("h5",{id:"declaration-7"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IEndPoint Address { get; }\n")),(0,l.kt)("h4",{id:"isconnecting"},"IsConnecting"),(0,l.kt)("p",null,"Connect called on client, but server has not replied yet"),(0,l.kt)("h5",{id:"declaration-8"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsConnecting { get; }\n")),(0,l.kt)("h4",{id:"isconnected"},"IsConnected"),(0,l.kt)("p",null,"Server and Client are connected and can send messages"),(0,l.kt)("h5",{id:"declaration-9"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool IsConnected { get; }\n")),(0,l.kt)("h4",{id:"vislist"},"VisList"),(0,l.kt)("p",null,"List of all networkIdentity that this player can see\nOnly valid on server"),(0,l.kt)("h5",{id:"declaration-10"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IReadOnlyCollection<NetworkIdentity> VisList { get; }\n")),(0,l.kt)("h4",{id:"ownedobjects"},"OwnedObjects"),(0,l.kt)("h5",{id:"declaration-11"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public IReadOnlyCollection<NetworkIdentity> OwnedObjects { get; }\n")),(0,l.kt)("h4",{id:"identity"},"Identity"),(0,l.kt)("p",null,"The NetworkIdentity for this connection."),(0,l.kt)("h5",{id:"declaration-12"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkIdentity Identity { get; set; }\n")),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"setauthenticationplayerauthentication-boolean"},"SetAuthentication(PlayerAuthentication, Boolean)"),(0,l.kt)("h5",{id:"declaration-13"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void SetAuthentication(PlayerAuthentication authentication, bool allowReplace)\n")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Authentication.PlayerAuthentication"),(0,l.kt)("td",{parentName:"tr",align:null},"authentication"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"allowReplace"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"disconnect"},"Disconnect()"),(0,l.kt)("p",null,"Disconnects the player.\nA disconnected player can not send messages"),(0,l.kt)("h5",{id:"declaration-14"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Disconnect()\n")),(0,l.kt)("h4",{id:"markasdisconnected"},"MarkAsDisconnected()"),(0,l.kt)("p",null,"Marks player as disconnected, used when the disconnect call is from peer\nA disconnected player can not send messages"),(0,l.kt)("h5",{id:"declaration-15"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void MarkAsDisconnected()\n")),(0,l.kt)("h4",{id:"sendtt-channel"},"Send","<","T",">","(T, Channel)"),(0,l.kt)("p",null,"This sends a network message to the connection."),(0,l.kt)("h5",{id:"declaration-16"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send<T>(T message, Channel channelId = Channel.Reliable)\n")),(0,l.kt)("h5",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"channelId"),(0,l.kt)("td",{parentName:"tr",align:null},"The transport layer channel to send on.")))),(0,l.kt)("h4",{id:"sendarraysegmentbyte-channel"},"Send(ArraySegment","<","Byte",">",", Channel)"),(0,l.kt)("p",null,'Sends a block of data\nOnly use this method if data has message Id already included, otherwise receives wont know how to handle it. Otherwise use (T, int)">'),(0,l.kt)("h5",{id:"declaration-17"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send(ArraySegment<byte> segment, Channel channelId = Channel.Reliable)\n")),(0,l.kt)("h5",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,l.kt)("td",{parentName:"tr",align:null},"segment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"channelId"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendtt-inotifycallback"},"Send","<","T",">","(T, INotifyCallBack)"),(0,l.kt)("p",null,"This sends a network message to the connection."),(0,l.kt)("h5",{id:"declaration-18"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void Send<T>(T message, INotifyCallBack callBacks)\n")),(0,l.kt)("h5",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyCallBack"),(0,l.kt)("td",{parentName:"tr",align:null},"callBacks"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"tostring"},"ToString()"),(0,l.kt)("h5",{id:"declaration-19"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public override string ToString()\n")),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"addtovislistnetworkidentity"},"AddToVisList(NetworkIdentity)"),(0,l.kt)("h5",{id:"declaration-20"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddToVisList(NetworkIdentity identity)\n")),(0,l.kt)("h5",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"removefromvislistnetworkidentity"},"RemoveFromVisList(NetworkIdentity)"),(0,l.kt)("h5",{id:"declaration-21"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveFromVisList(NetworkIdentity identity)\n")),(0,l.kt)("h5",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"containsinvislistnetworkidentity"},"ContainsInVisList(NetworkIdentity)"),(0,l.kt)("p",null,"Checks if player can see NetworkIdentity"),(0,l.kt)("h5",{id:"declaration-22"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public bool ContainsInVisList(NetworkIdentity identity)\n")),(0,l.kt)("h5",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"removeallvisibleobjects"},"RemoveAllVisibleObjects()"),(0,l.kt)("p",null,"Removes all objects that this player can see\nThis is called when loading a new scene"),(0,l.kt)("h5",{id:"declaration-23"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveAllVisibleObjects()\n")),(0,l.kt)("h4",{id:"addownedobjectnetworkidentity"},"AddOwnedObject(NetworkIdentity)"),(0,l.kt)("h5",{id:"declaration-24"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void AddOwnedObject(NetworkIdentity identity)\n")),(0,l.kt)("h5",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"removeownedobjectnetworkidentity"},"RemoveOwnedObject(NetworkIdentity)"),(0,l.kt)("h5",{id:"declaration-25"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveOwnedObject(NetworkIdentity identity)\n")),(0,l.kt)("h5",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"removeallownedobjectboolean"},"RemoveAllOwnedObject(Boolean)"),(0,l.kt)("h5",{id:"declaration-26"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void RemoveAllOwnedObject(bool sendAuthorityChangeEvent)\n")),(0,l.kt)("h5",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"sendAuthorityChangeEvent"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"destroyownedobjects"},"DestroyOwnedObjects()"),(0,l.kt)("p",null,"Destroy all objects owned by this player\nNOTE: only destroyed objects that are currently spawned"),(0,l.kt)("h5",{id:"declaration-27"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void DestroyOwnedObjects()\n")))}p.isMDXComponent=!0}}]);