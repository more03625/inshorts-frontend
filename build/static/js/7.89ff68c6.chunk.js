(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[7],{42:function(t,e,n){"use strict";n.d(e,"a",(function(){return ht}));var r=n(0),a=n(39),i={data:""},s=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||i},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,c=/\/\*[^]*?\*\/|\s\s+|\n/g,u=function t(e,n){var r,a="",i="",s="",o=function(o){var u=e[o];"object"==typeof u?(r=n?n.replace(/([^,])+/g,(function(t){return o.replace(/([^,])+/g,(function(e){return/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e}))})):o,i+="@"==o[0]?"f"==o[1]?t(u,o):o+"{"+t(u,"k"==o[1]?"":n)+"}":t(u,r)):"@"==o[0]&&"i"==o[1]?a=o+" "+u+";":(o=o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=t.p?t.p(o,u):o+":"+u+";"),c=o};for(var c in e)o(c);return s[0]?a+(r=n?n+"{"+s+"}":s)+i:a+i},l={},d=function t(e){var n="";for(var r in e)n+=r+("object"==typeof e[r]?t(e[r]):e[r]);return n},f=function(t,e,n,r,i){var s="object"==typeof t?d(t):t,f=l[s]||(l[s]=function(t){for(var e=0,n=11;e<t.length;)n=101*n+t.charCodeAt(e++)>>>0;return"go"+n}(s));if(!l[f]){var b="object"==typeof t?t:function(t){for(var e,n=[{}];e=o.exec(t.replace(c,""));)e[4]&&n.shift(),e[3]?n.unshift(n[0][e[3]]=n[0][e[3]]||{}):e[4]||(n[0][e[1]]=e[2]);return n[0]}(t);l[f]=u(i?Object(a.a)({},"@keyframes "+f,b):b,n?"":"."+f)}return function(t,e,n){-1==e.data.indexOf(t)&&(e.data=n?t+e.data:e.data+t)}(l[f],e,r),f},b=function(t,e,n){return t.reduce((function(t,r,a){var i=e[a];if(i&&i.call){var s=i(n),o=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=o?"."+o:s&&"object"==typeof s?s.props?"":u(s,""):s}return t+r+(null==i?"":i)}),"")};function p(t){var e=this||{},n=t.call?t(e.p):t;return f(n.unshift?n.raw?b(n,[].slice.call(arguments,1),e.p):n.reduce((function(t,n){return n?Object.assign(t,n.call?n(e.p):n):t}),{}):n,s(e.target),e.g,e.o,e.k)}p.bind({g:1});var m,j,g,h=p.bind({k:1});function v(t,e){var n=this||{};return function(){var r=arguments;function a(i,s){var o=Object.assign({},i),c=o.className||a.className;n.p=Object.assign({theme:j&&j()},o),n.o=/ *go\d+/.test(c),o.className=p.apply(n,r)+(c?" "+c:""),e&&(o.ref=s);var u=o.as||t;return delete o.as,g&&u[0]&&g(o),m(u,o)}return e?e(a):a}}function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function x(t,e){return e||(e=t.slice(0)),t.raw=e,t}var y,w=function(t,e){return function(t){return"function"===typeof t}(t)?t(e):t},N=function(){var t=0;return function(){return(++t).toString()}}(),T=function(){var t=void 0;return function(){if(void 0===t&&"undefined"!==typeof window){var e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(y||(y={}));var S=new Map,E=function(t){if(!S.has(t)){var e=setTimeout((function(){S.delete(t),D({type:y.REMOVE_TOAST,toastId:t})}),1e3);S.set(t,e)}},_=function t(e,n){switch(n.type){case y.ADD_TOAST:return O({},e,{toasts:[n.toast].concat(e.toasts).slice(0,20)});case y.UPDATE_TOAST:return n.toast.id&&function(t){var e=S.get(t);e&&clearTimeout(e)}(n.toast.id),O({},e,{toasts:e.toasts.map((function(t){return t.id===n.toast.id?O({},t,n.toast):t}))});case y.UPSERT_TOAST:var r=n.toast;return e.toasts.find((function(t){return t.id===r.id}))?t(e,{type:y.UPDATE_TOAST,toast:r}):t(e,{type:y.ADD_TOAST,toast:r});case y.DISMISS_TOAST:var a=n.toastId;return a?E(a):e.toasts.forEach((function(t){E(t.id)})),O({},e,{toasts:e.toasts.map((function(t){return t.id===a||void 0===a?O({},t,{visible:!1}):t}))});case y.REMOVE_TOAST:return void 0===n.toastId?O({},e,{toasts:[]}):O({},e,{toasts:e.toasts.filter((function(t){return t.id!==n.toastId}))});case y.START_PAUSE:return O({},e,{pausedAt:n.time});case y.END_PAUSE:var i=n.time-(e.pausedAt||0);return O({},e,{pausedAt:void 0,toasts:e.toasts.map((function(t){return O({},t,{pauseDuration:t.pauseDuration+i})}))})}},A=[],P={toasts:[],pausedAt:void 0},D=function(t){P=_(P,t),A.forEach((function(t){t(P)}))},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=function(t){return function(e,n){var r=function(t,e,n){return void 0===e&&(e="blank"),O({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(null==n?void 0:n.id)||N()})}(e,t,n);return D({type:y.UPSERT_TOAST,toast:r}),r.id}},U=function(t,e){return I("blank")(t,e)};U.error=I("error"),U.success=I("success"),U.loading=I("loading"),U.custom=I("custom"),U.dismiss=function(t){D({type:y.DISMISS_TOAST,toastId:t})},U.remove=function(t){return D({type:y.REMOVE_TOAST,toastId:t})},U.promise=function(t,e,n){var r=U.loading(e.loading,O({},n,null==n?void 0:n.loading));return t.then((function(t){return U.success(w(e.success,t),O({id:r},n,null==n?void 0:n.success)),t})).catch((function(t){U.error(w(e.error,t),O({id:r},n,null==n?void 0:n.error))})),t};var M=function(t){var e=function(t){void 0===t&&(t={});var e=Object(r.useState)(P),n=e[0],a=e[1];Object(r.useEffect)((function(){return A.push(a),function(){var t=A.indexOf(a);t>-1&&A.splice(t,1)}}),[n]);var i=n.toasts.map((function(e){var n,r,a;return O({},t,t[e.type],e,{duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==(r=t)?void 0:r.duration)||k[e.type],style:O({},t.style,null==(a=t[e.type])?void 0:a.style,e.style)})}));return O({},n,{toasts:i})}(t),n=e.toasts,a=e.pausedAt;Object(r.useEffect)((function(){if(!a){var t=Date.now(),e=n.map((function(e){if(e.duration!==1/0){var n=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(!(n<0))return setTimeout((function(){return U.dismiss(e.id)}),n);e.visible&&U.dismiss(e.id)}}));return function(){e.forEach((function(t){return t&&clearTimeout(t)}))}}}),[n,a]);var i=Object(r.useMemo)((function(){return{startPause:function(){D({type:y.START_PAUSE,time:Date.now()})},endPause:function(){a&&D({type:y.END_PAUSE,time:Date.now()})},updateHeight:function(t,e){return D({type:y.UPDATE_TOAST,toast:{id:t,height:e}})},calculateOffset:function(t,e){var r,a=e||{},i=a.reverseOrder,s=void 0!==i&&i,o=a.gutter,c=void 0===o?8:o,u=a.defaultPosition,l=n.filter((function(e){return(e.position||u)===(t.position||u)&&e.height})),d=l.findIndex((function(e){return e.id===t.id})),f=l.filter((function(t,e){return e<d&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,s?[f+1]:[0,f]).reduce((function(t,e){return t+(e.height||0)+c}),0)}}}),[n,a]);return{toasts:n,handlers:i}};function R(){var t=x(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return R=function(){return t},t}function C(){var t=x(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return C=function(){return t},t}function z(){var t=x(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return z=function(){return t},t}function F(){var t=x(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return F=function(){return t},t}var L=h(F()),V=h(z()),H=h(C()),J=v("div")(R(),(function(t){return t.primary||"#ff4b4b"}),L,V,(function(t){return t.secondary||"#fff"}),H);function B(){var t=x(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return B=function(){return t},t}function q(){var t=x(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return q=function(){return t},t}var K=h(q()),Q=v("div")(B(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),K);function W(){var t=x(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return W=function(){return t},t}function X(){var t=x(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return X=function(){return t},t}function Y(){var t=x(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return Y=function(){return t},t}var Z=h(Y()),$=h(X()),G=v("div")(W(),(function(t){return t.primary||"#61d345"}),Z,$,(function(t){return t.secondary||"#fff"}));function tt(){var t=x(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return tt=function(){return t},t}function et(){var t=x(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return et=function(){return t},t}function nt(){var t=x(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return nt=function(){return t},t}function rt(){var t=x(["\n  position: absolute;\n"]);return rt=function(){return t},t}var at=v("div")(rt()),it=v("div")(nt()),st=h(et()),ot=v("div")(tt(),st),ct=function(t){var e=t.toast,n=e.icon,a=e.type,i=e.iconTheme;return void 0!==n?"string"===typeof n?Object(r.createElement)(ot,null,n):n:"blank"===a?null:Object(r.createElement)(it,null,Object(r.createElement)(Q,Object.assign({},i)),"loading"!==a&&Object(r.createElement)(at,null,"error"===a?Object(r.createElement)(J,Object.assign({},i)):Object(r.createElement)(G,Object.assign({},i))))};function ut(){var t=x(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return ut=function(){return t},t}function lt(){var t=x(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return lt=function(){return t},t}var dt=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},ft=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},bt=v("div",r.forwardRef)(lt()),pt=v("div")(ut()),mt=Object(r.memo)((function(t){var e=t.toast,n=t.position,a=t.style,i=t.children,s=null!=e&&e.height?function(t,e){var n=t.includes("top")?1:-1,r=T()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[dt(n),ft(n)],a=r[1];return{animation:e?h(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":h(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(e.position||n||"top-center",e.visible):{opacity:0},o=Object(r.createElement)(ct,{toast:e}),c=Object(r.createElement)(pt,Object.assign({},e.ariaProps),w(e.message,e));return Object(r.createElement)(bt,{className:e.className,style:O({},s,a,e.style)},"function"===typeof i?i({icon:o,message:c}):Object(r.createElement)(r.Fragment,null,o,c))}));function jt(){var t=x(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return jt=function(){return t},t}!function(t,e,n,r){u.p=e,m=t,j=n,g=r}(r.createElement);var gt=p(jt()),ht=function(t){var e=t.reverseOrder,n=t.position,a=void 0===n?"top-center":n,i=t.toastOptions,s=t.gutter,o=t.children,c=t.containerStyle,u=t.containerClassName,l=M(i),d=l.toasts,f=l.handlers;return Object(r.createElement)("div",{style:O({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(t){var n,i=t.position||a,c=function(t,e){var n=t.includes("top"),r=n?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return O({left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+e*(n?1:-1)+"px)"},r,a)}(i,f.calculateOffset(t,{reverseOrder:e,gutter:s,defaultPosition:a})),u=t.height?void 0:(n=function(e){f.updateHeight(t.id,e.height)},function(t){t&&setTimeout((function(){var e=t.getBoundingClientRect();n(e)}))});return Object(r.createElement)("div",{ref:u,className:t.visible?gt:"",key:t.id,style:c},"custom"===t.type?w(t.message,t):o?o(t):Object(r.createElement)(mt,{toast:t,position:i}))})))};e.b=U},43:function(t){t.exports=JSON.parse('{"a":[{"_id":"613b52208a058326c493b6b9","image":"/uploads/user-profile/8kJEEL5K.jpg","name":"Business","slug":"business","shortsCount":50,"followCount":100}]}')},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(39);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},46:function(t,e,n){"use strict";var r=n(35),a=n.n(r),i=n(36),s=n(38),o=n(0),c=(n(43),n(10)),u=n(9),l=n(37),d=n.n(l),f=n(1);e.a=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],l=Object(o.useState)([]),b=Object(s.a)(l,2),p=b[0],m=b[1],j=function(){var t=Object(i.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.b+c.a.category+"/allList",t.next=3,d.a.get(e);case 3:!0===(n=t.sent).data.error?alert("Please reload the app!"):r(n.data.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(i.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.b+c.a.news+"/trending/news?page=1&size=3",t.next=3,d.a.get(e);case 3:!0===(n=t.sent).data.error?console.log("Please reload the app!"):m(n.data.data.detail);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){j(),g()}),[]),Object(f.jsx)("aside",{className:"col-lg-3",children:Object(f.jsxs)("div",{className:"offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto",id:"blog-sidebar",style:{maxWidth:"22rem"},children:[Object(f.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[Object(f.jsx)("h2",{className:"h5 mb-0",children:"Sidebar"}),Object(f.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(f.jsxs)("div",{className:"offcanvas-body py-grid-gutter py-lg-1 px-lg-4","data-simplebar":!0,"data-simplebar-auto-hide":"true",children:[Object(f.jsxs)("div",{className:"widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(f.jsx)("h3",{className:"widget-title",children:"Shorts by categories!"}),Object(f.jsx)("ul",{className:"widget-list",children:n&&n.slice(0,6).map((function(t,e){return Object(f.jsx)("li",{className:"widget-list-item",children:Object(f.jsxs)(u.b,{className:"widget-list-link d-flex justify-content-between align-items-center",to:"/category/".concat(t.slug,"/").concat(t._id),children:[Object(f.jsx)("span",{children:t.name}),Object(f.jsx)("span",{className:"fs-xs text-muted ms-3",children:t.postCount})]})},e)}))})]}),Object(f.jsxs)("div",{className:"widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(f.jsx)("h3",{className:"widget-title",children:"Trending posts"}),p&&p.slice(0,3).map((function(t,e){return Object(f.jsx)(u.b,{className:"flex-shrink-0",to:"/read/"+Object(c.d)(t.title)+"/"+t._id,children:Object(f.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(f.jsx)("img",{className:"rounded",src:c.b+t.image,width:"64",alt:"Post image"}),Object(f.jsxs)("div",{className:"ps-3",children:[Object(f.jsx)("h6",{className:"blog-entry-title fs-sm mb-0",children:t.title.slice(0,44)+"..."}),Object(f.jsxs)("span",{className:"fs-ms text-muted",children:["by "," ",Object(f.jsx)(u.b,{to:"author/".concat(t.author_id&&t.author_id._id),className:"blog-entry-meta-link",children:t.author_id&&Object(c.h)(t.author_id.name)})]})]})]})},e)}))]}),Object(f.jsx)("div",{className:"bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2",style:{backgroundImage:'url("http://localhost:5254/uploads/ad-banner/0QPA5MX1.jpg")'},children:Object(f.jsx)("div",{className:"py-5 px-4 text-center"})})]})]})})}},47:function(t,e,n){"use strict";n(0);var r=n(9),a=n(10),i=n(42),s=n(1);e.a=function(t){var e=t.shortsData,n=t.setShareShort;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("article",{className:"masonry-grid-item",children:Object(s.jsxs)("div",{className:"card gallery",children:[Object(s.jsx)(i.a,{}),Object(s.jsx)("img",{className:"card-img-top",src:"".concat(a.b+e.image),alt:"Post"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h2",{className:"h6 blog-entry-title",title:e.title,children:Object(s.jsx)(r.b,{to:e&&e.title?"/read/"+Object(a.d)(e.title)+"/"+e._id:"",children:e.title})}),Object(s.jsxs)("p",{className:"news-additional-info",title:e.title,children:["Shorts by"," ",Object(s.jsxs)("span",{children:[Object(s.jsx)(r.b,{className:"me-2 mb-2",to:"/author/".concat(e.author_id&&e.author_id._id),children:e.author_id&&e.author_id.name}),new Date(e.createdAt).toDateString()]})]}),Object(s.jsx)("p",{className:"fs-sm",children:e.description}),Object(s.jsxs)("p",{className:"news-additional-info",title:e.read_at,children:["Read More at"," ",Object(s.jsx)("span",{children:Object(s.jsx)("a",{target:"_blank",className:"me-2 mb-2",href:e.read_at_link+"?newsdb.in",children:e.read_at})})]})]}),Object(s.jsxs)("div",{className:"card-footer d-flex align-items-center fs-xs",children:[Object(s.jsx)("a",{target:"_blank",className:"blog-entry-meta-link",href:e.read_at_link+"?newsdb.in",children:e.summary}),Object(s.jsxs)("div",{className:"ms-auto text-nowrap",children:[Object(s.jsx)("span",{className:"blog-entry-meta-divider mx-2"}),Object(s.jsxs)("a",{onClick:function(){return n({shareID:e._id,shareSlug:e.slug})},className:"share-btn blog-entry-meta-link text-nowrap",href:"#",id:"share-btn","data-bs-toggle":"modal","data-bs-target":"#modalDefault",children:[Object(s.jsx)("i",{className:"ci-telegram "})," "]})]})]})]})}),Object(s.jsx)("hr",{className:"mb-4"})]})}},48:function(t,e,n){"use strict";var r=n(9),a=n(1);e.a=function(t){var e=t.page,n=t.title;return Object(a.jsx)("div",{className:"bg-secondary py-4",children:Object(a.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(a.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(a.jsx)("nav",{"aria-label":"breadcrumb",children:Object(a.jsxs)("ol",{className:"breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsxs)(r.b,{className:"text-nowrap",to:"/",children:[Object(a.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(a.jsx)("li",{className:"breadcrumb-item text-nowrap",children:e}),Object(a.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:n})]})})}),Object(a.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start"})]})})}},55:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return r}))},93:function(t,e,n){"use strict";n.r(e);n(0);var r=n(49),a=n(46),i=n(50),s=n(1),o=n(48),c=(n(47),n(2));e.default=function(){Object(c.g)().authorUserName;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r.a,{}),Object(s.jsx)(o.a,{}),Object(s.jsx)("div",{className:"container-fluid pb-5 mb-2 mb-md-4",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"row pt-5 mt-md-2",children:[Object(s.jsx)("div",{className:"col-lg-3"}),Object(s.jsx)("div",{className:"col-lg-6"}),Object(s.jsx)(a.a,{})]})})}),Object(s.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=7.89ff68c6.chunk.js.map