"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},51488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={id:"SessionIdAuthenticator",title:"SessionIdAuthenticator"},l="Class SessionIdAuthenticator",s={unversionedId:"reference/Mirage.Authenticators.SessionId/SessionIdAuthenticator",id:"reference/Mirage.Authenticators.SessionId/SessionIdAuthenticator",title:"SessionIdAuthenticator",description:"Inheritance",source:"@site/docs/reference/Mirage.Authenticators.SessionId/SessionIdAuthenticator.md",sourceDirName:"reference/Mirage.Authenticators.SessionId",slug:"/reference/Mirage.Authenticators.SessionId/SessionIdAuthenticator",permalink:"/Mirage/docs/reference/Mirage.Authenticators.SessionId/SessionIdAuthenticator",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Authenticators.SessionId/SessionIdAuthenticator.md",tags:[],version:"current",frontMatter:{id:"SessionIdAuthenticator",title:"SessionIdAuthenticator"},sidebar:"api",previous:{title:"SessionData",permalink:"/Mirage/docs/reference/Mirage.Authenticators.SessionId/SessionData"},next:{title:"SessionKeyMessage",permalink:"/Mirage/docs/reference/Mirage.Authenticators.SessionId/SessionKeyMessage"}},o={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"NO_KEY_ERROR",id:"no_key_error",level:4},{value:"Declaration",id:"declaration",level:5},{value:"NOT_FOUND_ERROR",id:"not_found_error",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"SessionIDLength",id:"sessionidlength",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"TimeoutMinutes",id:"timeoutminutes",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"ClientIdStore",id:"clientidstore",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Methods",id:"methods",level:3},{value:"Authenticate(INetworkPlayer, SessionKeyMessage)",id:"authenticateinetworkplayer-sessionkeymessage",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"CreateOrRefreshSession(INetworkPlayer)",id:"createorrefreshsessioninetworkplayer",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-sessionidauthenticator"},"Class SessionIdAuthenticator"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,n.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.Authentication.NetworkAuthenticator"),(0,n.kt)("div",{class:"level",style:{"--data-index":2}},"Mirage.Authentication.NetworkAuthenticator<Mirage.Authenticators.SessionId.SessionKeyMessage>")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show"),(0,n.kt)("p",null,"Mirage.Authentication.NetworkAuthenticator","<","Mirage.Authenticators.SessionId.SessionKeyMessage",">",".AuthenticateAsync(Mirage.INetworkPlayer, Mirage.Authenticators.SessionId.SessionKeyMessage)"),(0,n.kt)("p",null,"Mirage.Authentication.NetworkAuthenticator","<","Mirage.Authenticators.SessionId.SessionKeyMessage",">",".SendAuthentication(Mirage.NetworkClient, Mirage.Authenticators.SessionId.SessionKeyMessage)"),(0,n.kt)("p",null,"Mirage.Authentication.NetworkAuthenticator.AuthenticatorName")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class SessionIdAuthenticator : NetworkAuthenticator<SessionKeyMessage>, INetworkAuthenticator\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"no_key_error"},"NO_KEY_ERROR"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'public const string NO_KEY_ERROR = "Empty key from client"\n')),(0,n.kt)("h4",{id:"not_found_error"},"NOT_FOUND_ERROR"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'public const string NOT_FOUND_ERROR = "No session found"\n')),(0,n.kt)("h4",{id:"sessionidlength"},"SessionIDLength"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public int SessionIDLength\n")),(0,n.kt)("h4",{id:"timeoutminutes"},"TimeoutMinutes"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public int TimeoutMinutes\n")),(0,n.kt)("h4",{id:"clientidstore"},"ClientIdStore"),(0,n.kt)("p",null,"Set on client to save key somewhere. For example as a cookie on webgl"),(0,n.kt)("p",null,"By default it is just stored in memory"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public ISessionIdStore ClientIdStore\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"authenticateinetworkplayer-sessionkeymessage"},"Authenticate(INetworkPlayer, SessionKeyMessage)"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"protected override AuthenticationResult Authenticate(INetworkPlayer player, SessionKeyMessage message)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Authenticators.SessionId.SessionKeyMessage"),(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Authentication.AuthenticationResult"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"createorrefreshsessioninetworkplayer"},"CreateOrRefreshSession(INetworkPlayer)"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public ArraySegment<byte> CreateOrRefreshSession(INetworkPlayer player)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,n.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);