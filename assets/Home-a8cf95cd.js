import{G as Le,r as $,j as p,R as re,b as ne}from"./index-60a8fb86.js";import{F as Xe,S as We}from"./index.esm-1782e1b2.js";import{m as at}from"./motion-d91262fa.js";const Be="/assets/profile-ee3e521c.png",Ge="/assets/Rahul_cv-336b6838.pdf";function Ue(t){return Le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}}]})(t)}const He=({onClose:t})=>{const[e,r]=$.useState(""),n=()=>{console.log("Email:",e),t()};return p.jsx("div",{className:"fixed z-50 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50 flex -flex-col justify-center items-center",children:p.jsxs("div",{className:"bg-white p-10 rounded-xl relative",children:[p.jsx(Ue,{className:"absolute top-2 right-4 text-red-600 cursor-pointer",onClick:t}),p.jsxs("div",{className:"",children:[p.jsx("h5",{className:"text-xl",children:"Please provide me your mail"}),p.jsx("input",{type:"text",className:"border-2 rounded-xl p-2 w-64 mt-4",placeholder:"email@gmail.com",value:e,onChange:a=>r(a.target.value)}),p.jsx("button",{type:"submit",className:"border-2 rounded-lg p-3 bg-green-600 text-white m-3 hover:bg-lime-500 translate-x-4 transition-colors",onClick:n,children:"Send CV"})]})]})})},qe=()=>{const[t,e]=$.useState(!1),[r,n]=$.useState(!1),a=50,s=()=>{e(!0),(()=>new Promise(f=>{setTimeout(()=>{f()},3e3)}))().then(()=>{const f=document.createElement("a");f.href=Ge,f.download="Rahul_cv.pdf",document.body.appendChild(f),f.click(),document.body.removeChild(f)}).catch(f=>{console.error("Download error:",f)}).finally(()=>{e(!1)})},i=()=>{n(!0)},c=()=>{n(!1)};return p.jsxs(p.Fragment,{children:[p.jsxs("button",{className:`w-36 relative bg-emerald-400 hover:bg-teal-600 mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg ${t?"hidden":""}`,onClick:s,disabled:t,children:["Download CV ",p.jsx(Xe,{className:"text-center"})]}),p.jsx("button",{className:`relative bg-emerald-400 hover:bg-teal-600 ml-32 mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg ${r?"hidden":""}`,onClick:i,disabled:r,children:"CV on mail"}),r&&p.jsx(He,{onClose:c}),t&&p.jsx("div",{className:"relative w-[7rem] h-2 bg-[#ff577f] mt-3 rounded-full",children:p.jsx("div",{className:"absolute top-0 left-0 h-full bg-highLighter",style:{width:`${a}%`}})})]})};function Ke(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Ze(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Je=function(){function t(r){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ze(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Ke(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),A="-ms-",ut="-moz-",v="-webkit-",pe="comm",Wt="rule",Bt="decl",Qe="@import",ye="@keyframes",tr="@layer",er=Math.abs,mt=String.fromCharCode,rr=Object.assign;function nr(t,e){return M(t,0)^45?(((e<<2^M(t,0))<<2^M(t,1))<<2^M(t,2))<<2^M(t,3):0}function he(t){return t.trim()}function ar(t,e){return(t=e.exec(t))?t[0]:t}function w(t,e,r){return t.replace(e,r)}function Yt(t,e){return t.indexOf(e)}function M(t,e){return t.charCodeAt(e)|0}function Z(t,e,r){return t.slice(e,r)}function L(t){return t.length}function Gt(t){return t.length}function st(t,e){return e.push(t),t}function sr(t,e){return t.map(e).join("")}var pt=1,G=1,ge=0,P=0,j=0,U="";function yt(t,e,r,n,a,s,i){return{value:t,root:e,parent:r,type:n,props:a,children:s,line:pt,column:G,length:i,return:""}}function q(t,e){return rr(yt("",null,null,"",null,null,0),t,{length:-t.length},e)}function or(){return j}function ir(){return j=P>0?M(U,--P):0,G--,j===10&&(G=1,pt--),j}function z(){return j=P<ge?M(U,P++):0,G++,j===10&&(G=1,pt++),j}function W(){return M(U,P)}function ct(){return P}function et(t,e){return Z(U,t,e)}function J(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function be(t){return pt=G=1,ge=L(U=t),P=0,[]}function xe(t){return U="",t}function ft(t){return he(et(P-1,Vt(t===91?t+2:t===40?t+1:t)))}function cr(t){for(;(j=W())&&j<33;)z();return J(t)>2||J(j)>3?"":" "}function fr(t,e){for(;--e&&z()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return et(t,ct()+(e<6&&W()==32&&z()==32))}function Vt(t){for(;z();)switch(j){case t:return P;case 34:case 39:t!==34&&t!==39&&Vt(j);break;case 40:t===41&&Vt(t);break;case 92:z();break}return P}function lr(t,e){for(;z()&&t+j!==47+10;)if(t+j===42+42&&W()===47)break;return"/*"+et(e,P-1)+"*"+mt(t===47?t:z())}function dr(t){for(;!J(W());)z();return et(t,P)}function ur(t){return xe(lt("",null,null,null,[""],t=be(t),0,[0],t))}function lt(t,e,r,n,a,s,i,c,l){for(var f=0,u=0,m=i,x=0,E=0,g=0,d=1,k=1,b=1,y=0,N="",T=a,_=s,I=n,h=N;k;)switch(g=y,y=z()){case 40:if(g!=108&&M(h,m-1)==58){Yt(h+=w(ft(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:h+=ft(y);break;case 9:case 10:case 13:case 32:h+=cr(g);break;case 92:h+=fr(ct()-1,7);continue;case 47:switch(W()){case 42:case 47:st(mr(lr(z(),ct()),e,r),l);break;default:h+="/"}break;case 123*d:c[f++]=L(h)*b;case 125*d:case 59:case 0:switch(y){case 0:case 125:k=0;case 59+u:b==-1&&(h=w(h,/\f/g,"")),E>0&&L(h)-m&&st(E>32?se(h+";",n,r,m-1):se(w(h," ","")+";",n,r,m-2),l);break;case 59:h+=";";default:if(st(I=ae(h,e,r,f,u,a,c,N,T=[],_=[],m),s),y===123)if(u===0)lt(h,e,I,I,T,s,m,c,_);else switch(x===99&&M(h,3)===110?100:x){case 100:case 108:case 109:case 115:lt(t,I,I,n&&st(ae(t,I,I,0,0,a,c,N,a,T=[],m),_),a,_,m,c,n?T:_);break;default:lt(h,I,I,I,[""],_,0,c,_)}}f=u=E=0,d=b=1,N=h="",m=i;break;case 58:m=1+L(h),E=g;default:if(d<1){if(y==123)--d;else if(y==125&&d++==0&&ir()==125)continue}switch(h+=mt(y),y*d){case 38:b=u>0?1:(h+="\f",-1);break;case 44:c[f++]=(L(h)-1)*b,b=1;break;case 64:W()===45&&(h+=ft(z())),x=W(),u=m=L(N=h+=dr(ct())),y++;break;case 45:g===45&&L(h)==2&&(d=0)}}return s}function ae(t,e,r,n,a,s,i,c,l,f,u){for(var m=a-1,x=a===0?s:[""],E=Gt(x),g=0,d=0,k=0;g<n;++g)for(var b=0,y=Z(t,m+1,m=er(d=i[g])),N=t;b<E;++b)(N=he(d>0?x[b]+" "+y:w(y,/&\f/g,x[b])))&&(l[k++]=N);return yt(t,e,r,a===0?Wt:c,l,f,u)}function mr(t,e,r){return yt(t,e,r,pe,mt(or()),Z(t,2,-2),0)}function se(t,e,r,n){return yt(t,e,r,Bt,Z(t,0,n),Z(t,n+1,-1),n)}function B(t,e){for(var r="",n=Gt(t),a=0;a<n;a++)r+=e(t[a],a,t,e)||"";return r}function pr(t,e,r,n){switch(t.type){case tr:if(t.children.length)break;case Qe:case Bt:return t.return=t.return||t.value;case pe:return"";case ye:return t.return=t.value+"{"+B(t.children,n)+"}";case Wt:t.value=t.props.join(",")}return L(r=B(t.children,n))?t.return=t.value+"{"+r+"}":""}function yr(t){var e=Gt(t);return function(r,n,a,s){for(var i="",c=0;c<e;c++)i+=t[c](r,n,a,s)||"";return i}}function hr(t){return function(e){e.root||(e=e.return)&&t(e)}}function gr(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var br=function(e,r,n){for(var a=0,s=0;a=s,s=W(),a===38&&s===12&&(r[n]=1),!J(s);)z();return et(e,P)},xr=function(e,r){var n=-1,a=44;do switch(J(a)){case 0:a===38&&W()===12&&(r[n]=1),e[n]+=br(P-1,r,n);break;case 2:e[n]+=ft(a);break;case 4:if(a===44){e[++n]=W()===58?"&\f":"",r[n]=e[n].length;break}default:e[n]+=mt(a)}while(a=z());return e},vr=function(e,r){return xe(xr(be(e),r))},oe=new WeakMap,wr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,n=e.parent,a=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!oe.get(n))&&!a){oe.set(e,!0);for(var s=[],i=vr(r,s),c=n.props,l=0,f=0;l<i.length;l++)for(var u=0;u<c.length;u++,f++)e.props[f]=s[l]?i[l].replace(/&\f/g,c[u]):c[u]+" "+i[l]}}},Sr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function ve(t,e){switch(nr(t,e)){case 5103:return v+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return v+t+ut+t+A+t+t;case 6828:case 4268:return v+t+A+t+t;case 6165:return v+t+A+"flex-"+t+t;case 5187:return v+t+w(t,/(\w+).+(:[^]+)/,v+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return v+t+A+"flex-item-"+w(t,/flex-|-self/,"")+t;case 4675:return v+t+A+"flex-line-pack"+w(t,/align-content|flex-|-self/,"")+t;case 5548:return v+t+A+w(t,"shrink","negative")+t;case 5292:return v+t+A+w(t,"basis","preferred-size")+t;case 6060:return v+"box-"+w(t,"-grow","")+v+t+A+w(t,"grow","positive")+t;case 4554:return v+w(t,/([^-])(transform)/g,"$1"+v+"$2")+t;case 6187:return w(w(w(t,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),t,"")+t;case 5495:case 3959:return w(t,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return w(w(t,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+t+t;case 4095:case 3583:case 4068:case 2532:return w(t,/(.+)-inline(.+)/,v+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(t)-1-e>6)switch(M(t,e+1)){case 109:if(M(t,e+4)!==45)break;case 102:return w(t,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+ut+(M(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yt(t,"stretch")?ve(w(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(M(t,e+1)!==115)break;case 6444:switch(M(t,L(t)-3-(~Yt(t,"!important")&&10))){case 107:return w(t,":",":"+v)+t;case 101:return w(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(M(t,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(M(t,e+11)){case 114:return v+t+A+w(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return v+t+A+w(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return v+t+A+w(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return v+t+A+t+t}return t}var Cr=function(e,r,n,a){if(e.length>-1&&!e.return)switch(e.type){case Bt:e.return=ve(e.value,e.length);break;case ye:return B([q(e,{value:w(e.value,"@","@"+v)})],a);case Wt:if(e.length)return sr(e.props,function(s){switch(ar(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([q(e,{props:[w(s,/:(read-\w+)/,":"+ut+"$1")]})],a);case"::placeholder":return B([q(e,{props:[w(s,/:(plac\w+)/,":"+v+"input-$1")]}),q(e,{props:[w(s,/:(plac\w+)/,":"+ut+"$1")]}),q(e,{props:[w(s,/:(plac\w+)/,A+"input-$1")]})],a)}return""})}},$r=[Cr],Er=function(e){var r=e.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(d){var k=d.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var a=e.stylisPlugins||$r,s={},i,c=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(d){for(var k=d.getAttribute("data-emotion").split(" "),b=1;b<k.length;b++)s[k[b]]=!0;c.push(d)});var l,f=[wr,Sr];{var u,m=[pr,hr(function(d){u.insert(d)})],x=yr(f.concat(a,m)),E=function(k){return B(ur(k),x)};l=function(k,b,y,N){u=y,E(k?k+"{"+b.styles+"}":b.styles),N&&(g.inserted[b.name]=!0)}}var g={key:r,sheet:new Je({key:r,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(c),g},we={exports:{}},S={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,Ut=O?Symbol.for("react.element"):60103,Ht=O?Symbol.for("react.portal"):60106,ht=O?Symbol.for("react.fragment"):60107,gt=O?Symbol.for("react.strict_mode"):60108,bt=O?Symbol.for("react.profiler"):60114,xt=O?Symbol.for("react.provider"):60109,vt=O?Symbol.for("react.context"):60110,qt=O?Symbol.for("react.async_mode"):60111,wt=O?Symbol.for("react.concurrent_mode"):60111,St=O?Symbol.for("react.forward_ref"):60112,Ct=O?Symbol.for("react.suspense"):60113,kr=O?Symbol.for("react.suspense_list"):60120,$t=O?Symbol.for("react.memo"):60115,Et=O?Symbol.for("react.lazy"):60116,Nr=O?Symbol.for("react.block"):60121,jr=O?Symbol.for("react.fundamental"):60117,Tr=O?Symbol.for("react.responder"):60118,Rr=O?Symbol.for("react.scope"):60119;function D(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ut:switch(t=t.type,t){case qt:case wt:case ht:case bt:case gt:case Ct:return t;default:switch(t=t&&t.$$typeof,t){case vt:case St:case Et:case $t:case xt:return t;default:return e}}case Ht:return e}}}function Se(t){return D(t)===wt}S.AsyncMode=qt;S.ConcurrentMode=wt;S.ContextConsumer=vt;S.ContextProvider=xt;S.Element=Ut;S.ForwardRef=St;S.Fragment=ht;S.Lazy=Et;S.Memo=$t;S.Portal=Ht;S.Profiler=bt;S.StrictMode=gt;S.Suspense=Ct;S.isAsyncMode=function(t){return Se(t)||D(t)===qt};S.isConcurrentMode=Se;S.isContextConsumer=function(t){return D(t)===vt};S.isContextProvider=function(t){return D(t)===xt};S.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ut};S.isForwardRef=function(t){return D(t)===St};S.isFragment=function(t){return D(t)===ht};S.isLazy=function(t){return D(t)===Et};S.isMemo=function(t){return D(t)===$t};S.isPortal=function(t){return D(t)===Ht};S.isProfiler=function(t){return D(t)===bt};S.isStrictMode=function(t){return D(t)===gt};S.isSuspense=function(t){return D(t)===Ct};S.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ht||t===wt||t===bt||t===gt||t===Ct||t===kr||typeof t=="object"&&t!==null&&(t.$$typeof===Et||t.$$typeof===$t||t.$$typeof===xt||t.$$typeof===vt||t.$$typeof===St||t.$$typeof===jr||t.$$typeof===Tr||t.$$typeof===Rr||t.$$typeof===Nr)};S.typeOf=D;we.exports=S;var Or=we.exports,Ce=Or,_r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$e={};$e[Ce.ForwardRef]=_r;$e[Ce.Memo]=Ir;var Mr=!0;function Ee(t,e,r){var n="";return r.split(" ").forEach(function(a){t[a]!==void 0?e.push(t[a]+";"):n+=a+" "}),n}var Kt=function(e,r,n){var a=e.key+"-"+r.name;(n===!1||Mr===!1)&&e.registered[a]===void 0&&(e.registered[a]=r.styles)},ke=function(e,r,n){Kt(e,r,n);var a=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var s=r;do e.insert(r===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Ar(t){for(var e=0,r,n=0,a=t.length;a>=4;++n,a-=4)r=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(t.charCodeAt(n+2)&255)<<16;case 2:e^=(t.charCodeAt(n+1)&255)<<8;case 1:e^=t.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Pr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zr=/[A-Z]|^ms/g,Dr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ne=function(e){return e.charCodeAt(1)===45},ie=function(e){return e!=null&&typeof e!="boolean"},zt=gr(function(t){return Ne(t)?t:t.replace(zr,"-$&").toLowerCase()}),ce=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Dr,function(n,a,s){return X={name:a,styles:s,next:X},a})}return Pr[e]!==1&&!Ne(e)&&typeof r=="number"&&r!==0?r+"px":r};function Q(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return X={name:r.name,styles:r.styles,next:X},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)X={name:n.name,styles:n.styles,next:X},n=n.next;var a=r.styles+";";return a}return Yr(t,e,r)}case"function":{if(t!==void 0){var s=X,i=r(t);return X=s,Q(t,e,i)}break}}if(e==null)return r;var c=e[r];return c!==void 0?c:r}function Yr(t,e,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=Q(t,e,r[a])+";";else for(var s in r){var i=r[s];if(typeof i!="object")e!=null&&e[i]!==void 0?n+=s+"{"+e[i]+"}":ie(i)&&(n+=zt(s)+":"+ce(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(e==null||e[i[0]]===void 0))for(var c=0;c<i.length;c++)ie(i[c])&&(n+=zt(s)+":"+ce(s,i[c])+";");else{var l=Q(t,e,i);switch(s){case"animation":case"animationName":{n+=zt(s)+":"+l+";";break}default:n+=s+"{"+l+"}"}}}return n}var fe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,X,Zt=function(e,r,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,s="";X=void 0;var i=e[0];i==null||i.raw===void 0?(a=!1,s+=Q(n,r,i)):s+=i[0];for(var c=1;c<e.length;c++)s+=Q(n,r,e[c]),a&&(s+=i[c]);fe.lastIndex=0;for(var l="",f;(f=fe.exec(s))!==null;)l+="-"+f[1];var u=Ar(s)+l;return{name:u,styles:s,next:X}},Vr=function(e){return e()},Fr=re["useInsertionEffect"]?re["useInsertionEffect"]:!1,je=Fr||Vr,Jt={}.hasOwnProperty,Te=$.createContext(typeof HTMLElement<"u"?Er({key:"css"}):null);Te.Provider;var Re=function(e){return $.forwardRef(function(r,n){var a=$.useContext(Te);return e(r,a,n)})},Oe=$.createContext({}),Ft="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Lr=function(e,r){var n={};for(var a in r)Jt.call(r,a)&&(n[a]=r[a]);return n[Ft]=e,n},Xr=function(e){var r=e.cache,n=e.serialized,a=e.isStringTag;return Kt(r,n,a),je(function(){return ke(r,n,a)}),null},Wr=Re(function(t,e,r){var n=t.css;typeof n=="string"&&e.registered[n]!==void 0&&(n=e.registered[n]);var a=t[Ft],s=[n],i="";typeof t.className=="string"?i=Ee(e.registered,s,t.className):t.className!=null&&(i=t.className+" ");var c=Zt(s,void 0,$.useContext(Oe));i+=e.key+"-"+c.name;var l={};for(var f in t)Jt.call(t,f)&&f!=="css"&&f!==Ft&&(l[f]=t[f]);return l.ref=r,l.className=i,$.createElement($.Fragment,null,$.createElement(Xr,{cache:e,serialized:c,isStringTag:typeof a=="string"}),$.createElement(a,l))}),Br=Wr,Gr=p.Fragment;function R(t,e,r){return Jt.call(e,"css")?p.jsx(Br,Lr(t,e),r):p.jsx(t,e,r)}function _e(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Zt(e)}var o=function(){var e=_e.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ur=function t(e){for(var r=e.length,n=0,a="";n<r;n++){var s=e[n];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(a&&(a+=" "),a+=i)}}return a};function Hr(t,e,r){var n=[],a=Ee(t,n,r);return n.length<2?r:a+e(n)}var qr=function(e){var r=e.cache,n=e.serializedArr;return je(function(){for(var a=0;a<n.length;a++)ke(r,n[a],!1)}),null},Dt=Re(function(t,e){var r=!1,n=[],a=function(){for(var f=arguments.length,u=new Array(f),m=0;m<f;m++)u[m]=arguments[m];var x=Zt(u,e.registered);return n.push(x),Kt(e,x,!1),e.key+"-"+x.name},s=function(){for(var f=arguments.length,u=new Array(f),m=0;m<f;m++)u[m]=arguments[m];return Hr(e.registered,a,Ur(u))},i={css:a,cx:s,theme:$.useContext(Oe)},c=t.children(i);return r=!0,$.createElement($.Fragment,null,$.createElement(qr,{cache:e,serializedArr:n}),c)}),Kr=Object.defineProperty,Zr=(t,e,r)=>e in t?Kr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ot=(t,e,r)=>(Zr(t,typeof e!="symbol"?e+"":e,r),r),Lt=new Map,it=new WeakMap,le=0,Jr=void 0;function Qr(t){return t?(it.has(t)||(le+=1,it.set(t,le.toString())),it.get(t)):"0"}function tn(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Qr(t.root):t[e]}`).toString()}function en(t){const e=tn(t);let r=Lt.get(e);if(!r){const n=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(c=>{var l;const f=c.isIntersecting&&a.some(u=>c.intersectionRatio>=u);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=f),(l=n.get(c.target))==null||l.forEach(u=>{u(f,c)})})},t);a=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:n},Lt.set(e,r)}return r}function Ie(t,e,r={},n=Jr){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const l=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:s,elements:i}=en(r),c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(e),s.observe(t),function(){c.splice(c.indexOf(e),1),c.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),Lt.delete(a))}}function rn(t){return typeof t.children!="function"}var de=class extends $.Component{constructor(t){super(t),ot(this,"node",null),ot(this,"_unobserveCb",null),ot(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),ot(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),rn(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:s}=this.props;this._unobserveCb=Ie(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:E,entry:g}=this.state;return t({inView:E,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:n,root:a,rootMargin:s,onChange:i,skip:c,trackVisibility:l,delay:f,initialInView:u,fallbackInView:m,...x}=this.props;return $.createElement(e||"div",{ref:this.handleNode,...x},t)}};function Me({threshold:t,delay:e,trackVisibility:r,rootMargin:n,root:a,triggerOnce:s,skip:i,initialInView:c,fallbackInView:l,onChange:f}={}){var u;const[m,x]=$.useState(null),E=$.useRef(),[g,d]=$.useState({inView:!!c,entry:void 0});E.current=f,$.useEffect(()=>{if(i||!m)return;let N;return N=Ie(m,(T,_)=>{d({inView:T,entry:_}),E.current&&E.current(T,_),_.isIntersecting&&s&&N&&(N(),N=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:r,delay:e},l),()=>{N&&N()}},[Array.isArray(t)?t.toString():t,m,a,n,s,i,r,l,e]);const k=(u=g.entry)==null?void 0:u.target,b=$.useRef();!m&&k&&!s&&!i&&b.current!==k&&(b.current=k,d({inView:!!c,entry:void 0}));const y=[x,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var Ae={exports:{}},C={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=Symbol.for("react.element"),te=Symbol.for("react.portal"),kt=Symbol.for("react.fragment"),Nt=Symbol.for("react.strict_mode"),jt=Symbol.for("react.profiler"),Tt=Symbol.for("react.provider"),Rt=Symbol.for("react.context"),nn=Symbol.for("react.server_context"),Ot=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),an=Symbol.for("react.offscreen"),Pe;Pe=Symbol.for("react.module.reference");function Y(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qt:switch(t=t.type,t){case kt:case jt:case Nt:case _t:case It:return t;default:switch(t=t&&t.$$typeof,t){case nn:case Rt:case Ot:case At:case Mt:case Tt:return t;default:return e}}case te:return e}}}C.ContextConsumer=Rt;C.ContextProvider=Tt;C.Element=Qt;C.ForwardRef=Ot;C.Fragment=kt;C.Lazy=At;C.Memo=Mt;C.Portal=te;C.Profiler=jt;C.StrictMode=Nt;C.Suspense=_t;C.SuspenseList=It;C.isAsyncMode=function(){return!1};C.isConcurrentMode=function(){return!1};C.isContextConsumer=function(t){return Y(t)===Rt};C.isContextProvider=function(t){return Y(t)===Tt};C.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qt};C.isForwardRef=function(t){return Y(t)===Ot};C.isFragment=function(t){return Y(t)===kt};C.isLazy=function(t){return Y(t)===At};C.isMemo=function(t){return Y(t)===Mt};C.isPortal=function(t){return Y(t)===te};C.isProfiler=function(t){return Y(t)===jt};C.isStrictMode=function(t){return Y(t)===Nt};C.isSuspense=function(t){return Y(t)===_t};C.isSuspenseList=function(t){return Y(t)===It};C.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===kt||t===jt||t===Nt||t===_t||t===It||t===an||typeof t=="object"&&t!==null&&(t.$$typeof===At||t.$$typeof===Mt||t.$$typeof===Tt||t.$$typeof===Rt||t.$$typeof===Ot||t.$$typeof===Pe||t.getModuleId!==void 0)};C.typeOf=Y;Ae.exports=C;var sn=Ae.exports;o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const ze=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function on({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=ze,iterationCount:a=1}){return _e`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function cn(t){return t==null}function fn(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function De(t,e){return r=>r?t():e()}function tt(t){return De(t,()=>null)}function Xt(t){return tt(()=>({opacity:0}))(t)}const Ye=t=>{const{cascade:e=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:s=0,keyframes:i=ze,triggerOnce:c=!1,className:l,style:f,childClassName:u,childStyle:m,children:x,onVisibilityChange:E}=t,g=$.useMemo(()=>on({keyframes:i,duration:a}),[a,i]);return cn(x)?null:fn(x)?R(dn,{...t,animationStyles:g,children:String(x)}):sn.isFragment(x)?R(Ve,{...t,animationStyles:g}):R(Gr,{children:$.Children.map(x,(d,k)=>{if(!$.isValidElement(d))return null;const b=n+(e?k*a*r:0);switch(d.type){case"ol":case"ul":return R(Dt,{children:({cx:y})=>R(d.type,{...d.props,className:y(l,d.props.className),style:Object.assign({},f,d.props.style),children:R(Ye,{...t,children:d.props.children})})});case"li":return R(de,{threshold:s,triggerOnce:c,onChange:E,children:({inView:y,ref:N})=>R(Dt,{children:({cx:T})=>R(d.type,{...d.props,ref:N,className:T(u,d.props.className),css:tt(()=>g)(y),style:Object.assign({},m,d.props.style,Xt(!y),{animationDelay:b+"ms"})})})});default:return R(de,{threshold:s,triggerOnce:c,onChange:E,children:({inView:y,ref:N})=>R("div",{ref:N,className:l,css:tt(()=>g)(y),style:Object.assign({},f,Xt(!y),{animationDelay:b+"ms"}),children:R(Dt,{children:({cx:T})=>R(d.type,{...d.props,className:T(u,d.props.className),style:Object.assign({},m,d.props.style)})})})})}})})},ln={display:"inline-block",whiteSpace:"pre"},dn=t=>{const{animationStyles:e,cascade:r=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:l,style:f,children:u,onVisibilityChange:m}=t,{ref:x,inView:E}=Me({triggerOnce:c,threshold:i,onChange:m});return De(()=>R("div",{ref:x,className:l,style:Object.assign({},f,ln),children:u.split("").map((g,d)=>R("span",{css:tt(()=>e)(E),style:{animationDelay:a+d*s*n+"ms"},children:g},d))}),()=>R(Ve,{...t,children:u}))(r)},Ve=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:n=!1,className:a,style:s,children:i,onVisibilityChange:c}=t,{ref:l,inView:f}=Me({triggerOnce:n,threshold:r,onChange:c});return R("div",{ref:l,className:a,css:tt(()=>e)(f),style:Object.assign({},s,Xt(!f)),children:i})};o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const un=o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,mn=o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,pn=o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,yn=o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,hn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,gn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,bn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,xn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function vn(t,e){switch(e){case"down":return t?hn:un;case"right":return t?bn:pn;case"up":return t?xn:yn;case"left":default:return t?gn:mn}}const wn=t=>{const{direction:e,reverse:r=!1,...n}=t,a=$.useMemo(()=>vn(r,e),[e,r]);return R(Ye,{keyframes:a,...n})};o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var dt={},Fe;Object.defineProperty(dt,"__esModule",{value:!0});var K=p,F=$,V=function(){return V=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},V.apply(this,arguments)};function Sn(t,e){var r,n;switch(e.type){case"TYPE":return V(V({},t),{speed:e.speed,text:(r=e.payload)===null||r===void 0?void 0:r.substring(0,t.text.length+1)});case"DELAY":return V(V({},t),{speed:e.payload});case"DELETE":return V(V({},t),{speed:e.speed,text:(n=e.payload)===null||n===void 0?void 0:n.substring(0,t.text.length-1)});case"COUNT":return V(V({},t),{count:t.count+1});default:return t}}var ue=function(t){var e=t.words,r=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,n=t.loop,a=n===void 0?1:n,s=t.typeSpeed,i=s===void 0?80:s,c=t.deleteSpeed,l=c===void 0?50:c,f=t.delaySpeed,u=f===void 0?1500:f,m=t.onLoopDone,x=t.onType,E=t.onDelete,g=t.onDelay,d=F.useReducer(Sn,{speed:i,text:"",count:0}),k=d[0],b=k.speed,y=k.text,N=k.count,T=d[1],_=F.useRef(0),I=F.useRef(!1),h=F.useRef(!1),rt=F.useRef(!1),H=F.useRef(!1),ee=F.useCallback(function(){var nt=N%r.length,Pt=r[nt];h.current?(T({type:"DELETE",payload:Pt,speed:l}),y===""&&(h.current=!1,T({type:"COUNT"}))):(T({type:"TYPE",payload:Pt,speed:i}),rt.current=!0,y===Pt&&(T({type:"DELAY",payload:u}),rt.current=!1,H.current=!0,setTimeout(function(){H.current=!1,h.current=!0},u),a>0&&(_.current+=1,_.current/r.length===a&&(H.current=!1,I.current=!0)))),rt.current&&x&&x(_.current),h.current&&E&&E(),H.current&&g&&g()},[N,u,l,a,i,r,y,x,E,g]);return F.useEffect(function(){var nt=setTimeout(ee,b);return I.current&&clearTimeout(nt),function(){return clearTimeout(nt)}},[ee,b]),F.useEffect(function(){m&&I.current&&m()},[m]),[y,{isType:rt.current,isDelay:H.current,isDelete:h.current,isDone:I.current}]},Cn="styles-module_blinkingCursor__yugAC",$n="styles-module_blinking__9VXRT";(function(t,e){e===void 0&&(e={});var r=e.insertAt;if(t&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var me=F.memo(function(t){var e=t.cursorBlinking,r=e===void 0||e,n=t.cursorStyle,a=n===void 0?"|":n,s=t.cursorColor,i=s===void 0?"inherit":s;return K.jsx("span",V({style:{color:i},className:"".concat(Cn," ").concat(r?$n:"")},{children:a}))});dt.Cursor=me,Fe=dt.Typewriter=function(t){var e=t.words,r=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,n=t.loop,a=n===void 0?1:n,s=t.typeSpeed,i=s===void 0?80:s,c=t.deleteSpeed,l=c===void 0?50:c,f=t.delaySpeed,u=f===void 0?1500:f,m=t.cursor,x=m!==void 0&&m,E=t.cursorStyle,g=E===void 0?"|":E,d=t.cursorColor,k=d===void 0?"inherit":d,b=t.cursorBlinking,y=b===void 0||b,N=t.onLoopDone,T=t.onType,_=t.onDelay,I=t.onDelete,h=ue({words:r,loop:a,typeSpeed:i,deleteSpeed:l,delaySpeed:u,onLoopDone:N,onType:T,onDelay:_,onDelete:I})[0];return K.jsxs(K.Fragment,{children:[K.jsx("span",{children:h}),x&&K.jsx(me,{cursorStyle:g,cursorColor:k,cursorBlinking:y})]})},dt.useTypewriter=ue;const jn=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{duration:1,delay:.5}}},e={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeInOut"}}},r={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1,transition:{duration:.8,ease:"easeInOut"}}};return p.jsxs(at.main,{className:"relative",variants:t,initial:"hidden",animate:"visible",children:[p.jsxs("section",{className:"flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-20 -mt-20",children:[p.jsxs(at.div,{className:"md:w-1/2 lg:w-[30rem] text-center",variants:e,children:[p.jsxs("div",{className:"text-lg font-bold text-left mb-4 flex",children:[p.jsxs("div",{className:"flex items-center -space-x-1.5",children:[p.jsx("span",{children:p.jsx(ne,{})}),p.jsx("span",{children:p.jsx(ne,{})})]}),p.jsx("span",{className:"ml-3",children:"Hello"})]}),p.jsxs("div",{className:"text-left",children:[p.jsxs("p",{children:[p.jsx(wn,{children:p.jsx("h1",{className:"font-bold text-3xl",children:"Akshat Chawla"})}),"2+ years of experience as Web Developer with a specialization in",p.jsxs("span",{className:"font-semibold text-blue-500",children:[" ",p.jsx(Fe,{loop:!0,words:["MERN Stack Developer ","Backend Developer","React.js Developer","Node.js Developer","Python Developer","Django Developer"]})," "]}),", based in Noida, Uttar Pradesh, India. I'm a passionate engineer eager to contribute my skills and collaborate with teams around the world."]}),p.jsx("div",{children:p.jsx(qe,{})})]})]}),p.jsx(at.img,{src:Be,alt:"",className:"md:w-1/2 w-[20rem] lg:w-[36rem] lg:h-[36rem] rounded-b-full mt-4",variants:r})]}),p.jsx("section",{className:"absolute bottom-[-4rem] flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center",children:p.jsx(at.div,{className:"text-xl mb-[1rem] m-[2rem] lg:mb-[6rem]",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},children:p.jsx(We,{})})})]})};export{jn as default};
