(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[6],{42:function(e,t,a){"use strict";a(0);var s=a(1);t.a=function(e){var t=e.loading,a=e.hasMore,c=e.setPage,r=e.page;return!1!==a&&(window.onscroll=function(){window.pageYOffset+window.innerHeight>=document.documentElement.scrollHeight-450&&c(r+1)}),Object(s.jsxs)(s.Fragment,{children:[!0===t?Object(s.jsx)("div",{className:"row justify-content-center mb-2",children:Object(s.jsx)("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"}})}):"",!1===a?Object(s.jsx)("div",{className:"row text-center justify-content-center mb-2",children:Object(s.jsx)("p",{children:"You are all caught up \ud83d\udd25"})}):""]})}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(50);var c=a(51);function r(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},44:function(e,t,a){"use strict";var s=a(37),c=a.n(s),r=a(38),n=a(40),i=a(0),l=a(9),d=a(10),o=a(39),j=a.n(o),b=a(1);t.a=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(i.useState)([]),m=Object(n.a)(o,2),h=m[0],u=m[1],x=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.category+"/allList",e.next=3,j.a.get(t);case 3:!0===(a=e.sent).data.error?alert("Please reload the app!"):s(a.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.news+"/trending/news?page=1&size=3",e.next=3,j.a.get(t);case 3:!0===(a=e.sent).data.error?console.log("Please reload the app!"):u(a.data.data.detail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){x(),O()}),[]),Object(b.jsx)("aside",{className:"col-lg-3",children:Object(b.jsxs)("div",{className:"offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto",id:"blog-sidebar",style:{maxWidth:"22rem"},children:[Object(b.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[Object(b.jsx)("h2",{className:"h5 mb-0",children:"Sidebar"}),Object(b.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(b.jsxs)("div",{className:"offcanvas-body py-grid-gutter py-lg-1 px-lg-4","data-simplebar":!0,"data-simplebar-auto-hide":"true",children:[Object(b.jsxs)("div",{className:"widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(b.jsx)("h3",{className:"widget-title",children:"Shorts by categories!"}),Object(b.jsx)("ul",{className:"widget-list",children:a&&a.slice(0,6).map((function(e,t){return Object(b.jsx)("li",{className:"widget-list-item",children:Object(b.jsxs)(d.b,{className:"widget-list-link d-flex justify-content-between align-items-center",to:"/category/".concat(e.slug,"/").concat(e._id),children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsxs)("span",{className:"fs-xs text-muted ms-3",children:[e.postCount," Shorts"]})]})},t)}))})]}),Object(b.jsxs)("div",{className:"widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(b.jsx)("h3",{className:"widget-title",children:"Trending posts"}),h&&h.slice(0,3).map((function(e,t){return Object(b.jsx)(d.b,{className:"flex-shrink-0",to:"/read/"+Object(l.d)(e.title)+"/"+e._id,children:Object(b.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(b.jsx)("img",{className:"rounded",src:l.b+e.image,width:"64",alt:"Post image"}),Object(b.jsxs)("div",{className:"ps-3",children:[Object(b.jsx)("h6",{className:"blog-entry-title fs-sm mb-0",children:e.title.slice(0,44)+"..."}),Object(b.jsxs)("span",{className:"fs-ms text-muted",children:["by "," ",Object(b.jsx)(d.b,{to:"author/".concat(e.author_id&&e.author_id._id),className:"blog-entry-meta-link",children:e.author_id&&Object(l.h)(e.author_id.name)})]})]})]})},t)}))]}),Object(b.jsxs)("div",{className:"bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2",children:[Object(b.jsx)("a",{href:"https://amzn.to/3ubMFr1",target:"_blank",children:Object(b.jsx)("img",{src:l.b+"/uploads/ad-banner/0QPA5MX1.jpg"})}),Object(b.jsx)("div",{className:"py-5 px-4 text-center"})]})]})]})})}},45:function(e,t,a){"use strict";a(0);var s=a(10),c=a(9),r=a(15),n=a(1);t.a=function(e){var t=e.shortsData,a=e.setShareShort;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("article",{className:"masonry-grid-item",children:Object(n.jsxs)("div",{className:"card gallery",children:[Object(n.jsx)(r.a,{}),Object(n.jsx)("img",{className:"card-img-top",src:"".concat(c.b+t.image),alt:"Post"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"h6 blog-entry-title",title:t.title,children:Object(n.jsx)(s.b,{to:t&&t.title?"/read/"+Object(c.d)(t.title)+"/"+t._id:"",children:t.title})}),Object(n.jsxs)("p",{className:"news-additional-info",title:t.title,children:["Shorts by"," ",Object(n.jsxs)("span",{children:[Object(n.jsx)(s.b,{className:"me-2 mb-2",to:"/author/".concat(t.author_id&&t.author_id._id),children:t.author_id&&t.author_id.name}),new Date(t.createdAt).toDateString()]})]}),Object(n.jsx)("p",{className:"fs-sm",children:t.description}),Object(n.jsxs)("p",{className:"news-additional-info",title:t.read_at,children:["Read More at"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{target:"_blank",className:"me-2 mb-2",href:t.read_at_link+"?utm_source=newsdb.in",children:t.read_at})})]})]}),Object(n.jsxs)("div",{className:"card-footer d-flex align-items-center fs-xs",children:[Object(n.jsx)("a",{target:"_blank",className:"blog-entry-meta-link",href:t.read_at_link+"?utm_source=newsdb.in",children:t.summary}),Object(n.jsxs)("div",{className:"ms-auto text-nowrap",children:[Object(n.jsx)("span",{className:"blog-entry-meta-divider mx-2"}),Object(n.jsxs)("a",{onClick:function(){return a({shareID:t._id,shareSlug:t.slug})},className:"share-btn blog-entry-meta-link text-nowrap",href:"#",id:"share-btn","data-bs-toggle":"modal","data-bs-target":"#modalDefault",children:[Object(n.jsx)("i",{className:"ci-telegram "})," "]})]})]})]})}),Object(n.jsx)("hr",{className:"mb-4"})]})}},46:function(e,t,a){"use strict";var s=a(10),c=a(1);t.a=function(e){var t=e.page,a=e.title;return Object(c.jsx)("div",{className:"bg-secondary py-4",children:Object(c.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(c.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsxs)(s.b,{className:"text-nowrap",to:"/",children:[Object(c.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap",children:t}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:a&&a.slice(0,35)+"..."})]})})}),Object(c.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start"})]})})}},47:function(e,t,a){"use strict";var s=a(37),c=a.n(s),r=a(43),n=a(38),i=a(40),l=a(0),d=a(42),o=a(9),j=a(39),b=a.n(j),m=a(10),h=(a(16),a(1)),u=a(15);t.a=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],j=Object(l.useState)([]),x=Object(i.a)(j,2),O=(x[0],x[1],Object(l.useState)(1)),g=Object(i.a)(O,2),p=g[0],f=g[1],N=Object(l.useState)(!1),v=Object(i.a)(N,2),w=v[0],y=v[1],k=Object(l.useState)(!0),_=Object(i.a)(k,2),S=_[0],D=_[1],F=Object(l.useState)(10),M=Object(i.a)(F,2),P=M[0],A=(M[1],function(){var e=Object(n.a)(c.a.mark((function e(t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==S){e.next=8;break}return y(!0),n=o.b+o.a.news+"/admin/news?page=".concat(t,"&size=").concat(P),e.next=5,b.a.get(n,{headers:{token:Object(o.f)().token}});case 5:!0===(i=e.sent).data.error?u.b.error(i.data.title):(console.log(i.data.data.detail),0===i.data.data.detail.length?D(!1):s([].concat(Object(r.a)(a),Object(r.a)(i.data.data.detail))),y(!1)),y(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(l.useEffect)((function(){A(p,P)}),[p]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{className:"col-lg-8 pt-lg-4 pb-4 mb-3",children:[Object(h.jsx)(u.a,{}),Object(h.jsxs)("div",{className:"table-responsive fs-md mb-4",children:[Object(h.jsxs)("table",{className:"table table-hover mb-0",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Category"}),Object(h.jsx)("th",{children:"Status"}),Object(h.jsx)("th",{children:"Created at"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:a.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:Object(h.jsx)(m.b,{target:"_blank",to:{pathname:window.location.protocol+"//"+window.location.host+"/read/".concat(e.slug,"/").concat(e._id)},children:e.title.slice(0,40)+"..."})}),Object(h.jsx)("td",{children:e.main_category.name}),Object(h.jsx)("td",{children:"publish"===e.status?Object(h.jsx)("span",{className:"text-success",children:Object(o.h)(e.status)}):Object(h.jsx)("span",{className:"text-danger",children:Object(o.h)(e.status)})}),Object(h.jsx)("td",{children:new Date(e.createdAt).toDateString()}),Object(h.jsx)("td",{children:Object(h.jsx)(m.b,{className:"mx-1",to:"/admin/edit-shorts/".concat(e._id),children:Object(h.jsx)("span",{className:"ci-edit"})})})]},t)}))})]}),Object(h.jsx)(d.a,{loading:w,hasMore:S,setPage:f,page:p})]})]})})}},52:function(e,t,a){"use strict";var s=a(0),c=(a(47),a(1));t.a=function(e){var t=e.shareShort,a=Object(s.useRef)(),r=window.location.host+"/read/"+t.shareSlug+"/"+t.shareID;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"modal fade",id:"modalDefault",tabIndex:"-1",role:"dialog",children:Object(c.jsx)("div",{className:"modal-dialog",role:"document",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h4",{className:"modal-title",children:"Share Shorts"}),Object(c.jsx)("button",{className:"btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsx)("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(r,"?utm_source=facebook"),className:"btn-social bs-facebook rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-facebook"})}),Object(c.jsx)("a",{target:"_blank",href:"whatsapp://send?text=".concat(r,"?utm_source=whatsapp"),className:"btn-social bs-whatsapp rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-whatsapp"})}),Object(c.jsx)("a",{target:"_blank",href:"https://twitter.com/share?url=".concat(r,"?utm_source=twitter"),className:"btn-social bs-twitter rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-twitter"})}),Object(c.jsx)("a",{target:"_blank",href:"https://t.me/share/url?url=".concat(r,"?utm_source=telegram"),className:"btn-social bs-telegram rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-telegram"})}),Object(c.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(r,"?utm_source=linkdin"),className:"btn-social bs-linkedin rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-linkedin"})}),Object(c.jsx)("a",{target:"_blank",href:"http://pinterest.com/pin/create/link/?url=".concat(r,"?utm_source=pinterest"),className:"btn-social bs-pinterest rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-pinterest"})})]})}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("input",{className:"form-control",type:"text",value:"".concat(r),readOnly:!0}),Object(c.jsx)("p",{className:"link-copied-message text-success d-flex justify-content-center d-none",style:{width:"90%"},ref:a,children:"Link has been copied to clipboard"}),Object(c.jsx)("span",{className:"ci-add-document float-end",onClick:function(){return function(e){navigator.clipboard.writeText(e),a.current.classList.remove("d-none"),setTimeout((function(){a.current.classList.add("d-none")}),3e3)}(r)},style:{cursor:"pointer"}})]})]})})})})}},93:function(e,t,a){"use strict";a.r(t);var s=a(43),c=a(37),r=a.n(c),n=a(38),i=a(40),l=a(0),d=a(48),o=a(44),j=a(49),b=a(46),m=a(45),h=a(2),u=a(42),x=a(39),O=a.n(x),g=a(9),p=a(1);function f(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center pt-lg-4 text-center",children:Object(p.jsxs)("div",{className:"col-lg-5 col-md-7 col-sm-9",children:[Object(p.jsx)("img",{className:"d-block mx-auto mb-5",src:"../../assets/images/logo/404.png",width:"340",alt:"404 Error"}),Object(p.jsx)("h1",{className:"h3",children:"404 error"}),Object(p.jsx)("h3",{className:"h5 fw-normal mb-4",children:"We can't seem to find the page you are looking for."}),Object(p.jsx)("p",{className:"fs-md mb-4",children:Object(p.jsx)("u",{children:"Here are some helpful links instead:"})})]})}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-xl-8 col-lg-10",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-4 mb-3",children:Object(p.jsx)("a",{className:"card h-100 border-0 shadow-sm",href:"index.html",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("i",{className:"ci-home text-primary h4 mb-0"}),Object(p.jsxs)("div",{className:"ps-3",children:[Object(p.jsx)("h5",{className:"fs-sm mb-0",children:"Homepage"}),Object(p.jsx)("span",{className:"text-muted fs-ms",children:"Return to homepage"})]})]})})})}),Object(p.jsx)("div",{className:"col-sm-4 mb-3",children:Object(p.jsx)("a",{className:"card h-100 border-0 shadow-sm",href:"#",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("i",{className:"ci-search text-success h4 mb-0"}),Object(p.jsxs)("div",{className:"ps-3",children:[Object(p.jsx)("h5",{className:"fs-sm mb-0",children:"Search"}),Object(p.jsx)("span",{className:"text-muted fs-ms",children:"Find with advanced search"})]})]})})})}),Object(p.jsx)("div",{className:"col-sm-4 mb-3",children:Object(p.jsx)("a",{className:"card h-100 border-0 shadow-sm",href:"help-topics.html",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("i",{className:"ci-help text-info h4 mb-0"}),Object(p.jsxs)("div",{className:"ps-3",children:[Object(p.jsx)("h5",{className:"fs-sm mb-0",children:"Help & Support"}),Object(p.jsx)("span",{className:"text-muted fs-ms",children:"Visit our help center"})]})]})})})})]})})})]})}var N=a(52);t.default=function(){var e=Object(h.g)(),t=(e.slug,e.newsID),a=Object(l.useState)(1),c=Object(i.a)(a,2),x=c[0],v=c[1],w=Object(l.useState)(2),y=Object(i.a)(w,2),k=y[0],_=(y[1],Object(l.useState)()),S=Object(i.a)(_,2),D=S[0],F=S[1],M=Object(l.useState)(!1),P=Object(i.a)(M,2),A=P[0],C=P[1],E=Object(l.useState)(!0),I=Object(i.a)(E,2),H=I[0],T=I[1],z=Object(l.useState)(!1),L=Object(i.a)(z,2),R=L[0],J=(L[1],Object(l.useState)({shareID:0,shareSlug:null})),W=Object(i.a)(J,2),Y=W[0],Q=W[1],V=Object(l.useState)([]),X=Object(i.a)(V,2),q=X[0],B=X[1],G=Object(l.useState)(null),K=Object(i.a)(G,2),U=K[0],Z=K[1],$=(D&&D.main_category,function(){var e=Object(n.a)(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==H){e.next=7;break}return C(!0),a=g.b+g.a.news+"/".concat(t),e.next=5,O.a.get(a);case 5:!0===(s=e.sent).data.error?console.log("there are some errors!"):(ee(s.data.data.main_category.slug),Z(s.data.data.main_category.slug),F(s.data.data));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),ee=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),void 0===t){e.next=13;break}if(!0!==H){e.next=10;break}return a=g.b+g.a.category+"/".concat(t,"?page=").concat(x,"&size=").concat(k),e.next=6,O.a.get(a);case 6:!0===(c=e.sent).data.error?console.log("there are some errors!"):(console.log(c.data.data.posts.length),0===c.data.data.posts.length?T(!1):B([].concat(Object(s.a)(q),Object(s.a)(c.data.data.posts)))),e.next=11;break;case 10:console.log("No More");case 11:e.next=14;break;case 13:console.log("Main cat is undefined");case 14:C(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){window.scrollTo({behavior:"smooth",top:0}),$()}),[t]),Object(l.useEffect)((function(){null!==U&&ee(U)}),[x]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{}),Object(p.jsx)(b.a,{page:"read",title:D&&D.title}),Object(p.jsx)("div",{className:"container-fluid pb-5 mb-2 mb-md-4",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsxs)("div",{className:"row pt-5 mt-md-2",children:[Object(p.jsx)("div",{className:"col-lg-3"}),!0===R?Object(p.jsx)(f,{}):void 0===D?Object(p.jsx)(u.a,{loading:A,hasMore:H,setPage:v,page:x}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"col-lg-6 p-0 m-0",children:[Object(p.jsx)(m.a,{shortsData:D,setShareShort:Q}),q.map((function(e,t){return Object(p.jsx)(m.a,{shortsData:e,setShareShort:Q},t)})),Object(p.jsx)(u.a,{loading:A,hasMore:H,setPage:v,page:x})]}),Object(p.jsx)(o.a,{}),Object(p.jsx)(N.a,{shareShort:Y})]})]})})}),Object(p.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=6.ecc33517.chunk.js.map