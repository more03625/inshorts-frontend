(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[5],{42:function(e,t,a){"use strict";a(0);var s=a(1);t.a=function(e){var t=e.loading,a=e.hasMore,c=e.setPage,r=e.page;return!1!==a&&(window.onscroll=function(){window.pageYOffset+window.innerHeight>=document.documentElement.scrollHeight-450&&c(r+1)}),Object(s.jsxs)(s.Fragment,{children:[!0===t?Object(s.jsx)("div",{className:"row justify-content-center mb-2",children:Object(s.jsx)("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"}})}):"",!1===a?Object(s.jsx)("div",{className:"row text-center justify-content-center mb-2",children:Object(s.jsx)("p",{children:"You are all caught up \ud83d\udd25"})}):""]})}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(50);var c=a(51);function r(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},44:function(e,t,a){"use strict";var s=a(37),c=a.n(s),r=a(38),n=a(40),i=a(0),l=a(9),o=a(10),d=a(39),b=a.n(d),j=a(1);t.a=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),a=t[0],s=t[1],d=Object(i.useState)([]),m=Object(n.a)(d,2),u=m[0],h=m[1],O=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.category+"/allList",e.next=3,b.a.get(t);case 3:!0===(a=e.sent).data.error?alert("Please reload the app!"):s(a.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.news+"/trending/news?page=1&size=3",e.next=3,b.a.get(t);case 3:!0===(a=e.sent).data.error?console.log("Please reload the app!"):h(a.data.data.detail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){O(),x()}),[]),Object(j.jsx)("aside",{className:"col-lg-3",children:Object(j.jsxs)("div",{className:"offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto",id:"blog-sidebar",style:{maxWidth:"22rem"},children:[Object(j.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[Object(j.jsx)("h2",{className:"h5 mb-0",children:"Sidebar"}),Object(j.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(j.jsxs)("div",{className:"offcanvas-body py-grid-gutter py-lg-1 px-lg-4","data-simplebar":!0,"data-simplebar-auto-hide":"true",children:[Object(j.jsxs)("div",{className:"widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(j.jsx)("h3",{className:"widget-title",children:"Shorts by categories!"}),Object(j.jsx)("ul",{className:"widget-list",children:a&&a.slice(0,6).map((function(e,t){return Object(j.jsx)("li",{className:"widget-list-item",children:Object(j.jsxs)(o.b,{className:"widget-list-link d-flex justify-content-between align-items-center",to:"/category/".concat(e.slug,"/").concat(e._id),children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsxs)("span",{className:"fs-xs text-muted ms-3",children:[e.postCount," Shorts"]})]})},t)}))})]}),Object(j.jsxs)("div",{className:"widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(j.jsx)("h3",{className:"widget-title",children:"Trending posts"}),u&&u.slice(0,3).map((function(e,t){return Object(j.jsx)(o.b,{className:"flex-shrink-0",to:"/read/"+Object(l.d)(e.title)+"/"+e._id,children:Object(j.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(j.jsx)("img",{className:"rounded",src:l.b+e.image,width:"64",alt:"Post image"}),Object(j.jsxs)("div",{className:"ps-3",children:[Object(j.jsx)("h6",{className:"blog-entry-title fs-sm mb-0",children:e.title.slice(0,44)+"..."}),Object(j.jsxs)("span",{className:"fs-ms text-muted",children:["by "," ",Object(j.jsx)(o.b,{to:"author/".concat(e.author_id&&e.author_id._id),className:"blog-entry-meta-link",children:e.author_id&&Object(l.h)(e.author_id.name)})]})]})]})},t)}))]}),Object(j.jsxs)("div",{className:"bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2",children:[Object(j.jsx)("a",{href:"https://amzn.to/3ubMFr1",target:"_blank",children:Object(j.jsx)("img",{src:l.b+"/uploads/ad-banner/0QPA5MX1.jpg"})}),Object(j.jsx)("div",{className:"py-5 px-4 text-center"})]})]})]})})}},45:function(e,t,a){"use strict";a(0);var s=a(10),c=a(9),r=a(15),n=a(1);t.a=function(e){var t=e.shortsData,a=e.setShareShort;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("article",{className:"masonry-grid-item",children:Object(n.jsxs)("div",{className:"card gallery",children:[Object(n.jsx)(r.a,{}),Object(n.jsx)("img",{className:"card-img-top",src:"".concat(c.b+t.image),alt:"Post"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"h6 blog-entry-title",title:t.title,children:Object(n.jsx)(s.b,{to:t&&t.title?"/read/"+Object(c.d)(t.title)+"/"+t._id:"",children:t.title})}),Object(n.jsxs)("p",{className:"news-additional-info",title:t.title,children:["Shorts by"," ",Object(n.jsxs)("span",{children:[Object(n.jsx)(s.b,{className:"me-2 mb-2",to:"/author/".concat(t.author_id&&t.author_id._id),children:t.author_id&&t.author_id.name}),new Date(t.createdAt).toDateString()]})]}),Object(n.jsx)("p",{className:"fs-sm",children:t.description}),Object(n.jsxs)("p",{className:"news-additional-info",title:t.read_at,children:["Read More at"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{target:"_blank",className:"me-2 mb-2",href:t.read_at_link+"?utm_source=newsdb.in",children:t.read_at})})]})]}),Object(n.jsxs)("div",{className:"card-footer d-flex align-items-center fs-xs",children:[Object(n.jsx)("a",{target:"_blank",className:"blog-entry-meta-link",href:t.read_at_link+"?utm_source=newsdb.in",children:t.summary}),Object(n.jsxs)("div",{className:"ms-auto text-nowrap",children:[Object(n.jsx)("span",{className:"blog-entry-meta-divider mx-2"}),Object(n.jsxs)("a",{onClick:function(){return a({shareID:t._id,shareSlug:t.slug})},className:"share-btn blog-entry-meta-link text-nowrap",href:"#",id:"share-btn","data-bs-toggle":"modal","data-bs-target":"#modalDefault",children:[Object(n.jsx)("i",{className:"ci-telegram "})," "]})]})]})]})}),Object(n.jsx)("hr",{className:"mb-4"})]})}},46:function(e,t,a){"use strict";var s=a(10),c=a(1);t.a=function(e){var t=e.page,a=e.title;return Object(c.jsx)("div",{className:"bg-secondary py-4",children:Object(c.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(c.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsxs)(s.b,{className:"text-nowrap",to:"/",children:[Object(c.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap",children:t}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:a&&a.slice(0,35)+"..."})]})})}),Object(c.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start"})]})})}},47:function(e,t,a){"use strict";var s=a(37),c=a.n(s),r=a(43),n=a(38),i=a(40),l=a(0),o=a(42),d=a(9),b=a(39),j=a.n(b),m=a(10),u=(a(16),a(1)),h=a(15);t.a=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],b=Object(l.useState)([]),O=Object(i.a)(b,2),x=(O[0],O[1],Object(l.useState)(1)),g=Object(i.a)(x,2),p=g[0],f=g[1],N=Object(l.useState)(!1),v=Object(i.a)(N,2),w=v[0],y=v[1],k=Object(l.useState)(!0),_=Object(i.a)(k,2),S=_[0],D=_[1],C=Object(l.useState)(10),F=Object(i.a)(C,2),I=F[0],P=(F[1],function(){var e=Object(n.a)(c.a.mark((function e(t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==S){e.next=8;break}return y(!0),n=d.b+d.a.news+"/admin/news?page=".concat(t,"&size=").concat(I),e.next=5,j.a.get(n,{headers:{token:Object(d.f)().token}});case 5:!0===(i=e.sent).data.error?h.b.error(i.data.title):(console.log(i.data.data.detail),0===i.data.data.detail.length?D(!1):s([].concat(Object(r.a)(a),Object(r.a)(i.data.data.detail))),y(!1)),y(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(l.useEffect)((function(){P(p,I)}),[p]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"col-lg-8 pt-lg-4 pb-4 mb-3",children:[Object(u.jsx)(h.a,{}),Object(u.jsxs)("div",{className:"table-responsive fs-md mb-4",children:[Object(u.jsxs)("table",{className:"table table-hover mb-0",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:"Category"}),Object(u.jsx)("th",{children:"Status"}),Object(u.jsx)("th",{children:"Created at"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:a.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:t+1}),Object(u.jsx)("td",{children:Object(u.jsx)(m.b,{target:"_blank",to:{pathname:window.location.protocol+"//"+window.location.host+"/read/".concat(e.slug,"/").concat(e._id)},children:e.title.slice(0,40)+"..."})}),Object(u.jsx)("td",{children:e.main_category.name}),Object(u.jsx)("td",{children:"publish"===e.status?Object(u.jsx)("span",{className:"text-success",children:Object(d.h)(e.status)}):Object(u.jsx)("span",{className:"text-danger",children:Object(d.h)(e.status)})}),Object(u.jsx)("td",{children:new Date(e.createdAt).toDateString()}),Object(u.jsx)("td",{children:Object(u.jsx)(m.b,{className:"mx-1",to:"/admin/edit-shorts/".concat(e._id),children:Object(u.jsx)("span",{className:"ci-edit"})})})]},t)}))})]}),Object(u.jsx)(o.a,{loading:w,hasMore:S,setPage:f,page:p})]})]})})}},52:function(e,t,a){"use strict";var s=a(0),c=(a(47),a(1));t.a=function(e){var t=e.shareShort,a=Object(s.useRef)(),r=window.location.host+"/read/"+t.shareSlug+"/"+t.shareID;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"modal fade",id:"modalDefault",tabIndex:"-1",role:"dialog",children:Object(c.jsx)("div",{className:"modal-dialog",role:"document",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h4",{className:"modal-title",children:"Share Shorts"}),Object(c.jsx)("button",{className:"btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsx)("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(r,"?utm_source=facebook"),className:"btn-social bs-facebook rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-facebook"})}),Object(c.jsx)("a",{target:"_blank",href:"whatsapp://send?text=".concat(r,"?utm_source=whatsapp"),className:"btn-social bs-whatsapp rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-whatsapp"})}),Object(c.jsx)("a",{target:"_blank",href:"https://twitter.com/share?url=".concat(r,"?utm_source=twitter"),className:"btn-social bs-twitter rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-twitter"})}),Object(c.jsx)("a",{target:"_blank",href:"https://t.me/share/url?url=".concat(r,"?utm_source=telegram"),className:"btn-social bs-telegram rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-telegram"})}),Object(c.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(r,"?utm_source=linkdin"),className:"btn-social bs-linkedin rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-linkedin"})}),Object(c.jsx)("a",{target:"_blank",href:"http://pinterest.com/pin/create/link/?url=".concat(r,"?utm_source=pinterest"),className:"btn-social bs-pinterest rounded-circle bs-outline bs-lg mx-2",children:Object(c.jsx)("i",{className:"ci-pinterest"})})]})}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("input",{className:"form-control",type:"text",value:"".concat(r),readOnly:!0}),Object(c.jsx)("p",{className:"link-copied-message text-success d-flex justify-content-center d-none",style:{width:"90%"},ref:a,children:"Link has been copied to clipboard"}),Object(c.jsx)("span",{className:"ci-add-document float-end",onClick:function(){return function(e){navigator.clipboard.writeText(e),a.current.classList.remove("d-none"),setTimeout((function(){a.current.classList.add("d-none")}),3e3)}(r)},style:{cursor:"pointer"}})]})]})})})})}},84:function(e){e.exports=JSON.parse('{"a":[{"_id":"613b52208a058326c493b6b9","image":"/uploads/user-profile/8kJEEL5K.jpg","name":"Business","slug":"business","shortsCount":50,"followCount":100}]}')},92:function(e,t,a){"use strict";a.r(t);var s=a(37),c=a.n(s),r=a(43),n=a(38),i=a(40),l=a(0),o=a(48),d=a(46),b=a(44),j=a(49),m=a(45),u=a(9),h=a(39),O=a.n(h),x=a(2),g=a(42),p=a(84),f=(a(20),a(10)),N=a(1),v=function(e){var t=p.a[0],a=Object(l.useState)("Follow"),s=Object(i.a)(a,2),r=s[0],o=s[1],d=Object(l.useState)(!1),b=Object(i.a)(d,2),j=b[0],m=b[1],h=function(){var t=Object(n.a)(c.a.mark((function t(){var a,s,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),a={categoryId:e.id,userId:Object(u.f)().data._id},s=u.b+u.a.follow,t.next=5,O.a.post(s,a,{headers:{token:Object(u.f)().token}});case 5:!0===(r=t.sent).data.error?console.log("Please reload the app!"):"followed"===r.data.title?o("Following"):o("Follow"),m(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1 follow-area",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center fs-sm mb-2",children:[Object(N.jsxs)(f.b,{className:"blog-entry-meta-link",to:"#",children:[Object(N.jsx)("div",{className:"blog-entry-author-ava",children:Object(N.jsx)("img",{className:"fit-image",src:u.b+t.image,alt:t.name})}),e.slug]}),Object(N.jsx)("span",{className:"blog-entry-meta-divider"}),Object(N.jsxs)(f.b,{className:"blog-entry-meta-link",to:"#",children:["Shorts: ",e.shorts.length]})]}),Object(N.jsx)("div",{className:"fs-sm a mb-2",children:null===Object(u.f)()?Object(N.jsx)("a",{href:"#signin-modal","data-bs-toggle":"modal",className:"btn btn-primary btn-sm",style:{borderRadius:"25px"},children:"Follow"}):Object(N.jsxs)("button",{className:"btn btn-primary btn-sm",onClick:h,style:{borderRadius:"25px"},children:[r,"  ",!0===j?Object(N.jsx)("i",{className:"fs-lg me-2 spinner-border spinner-border-sm",role:"status"}):""]})})]})},w=a(52);t.default=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],h=Object(l.useState)(1),p=Object(i.a)(h,2),f=p[0],y=p[1],k=Object(l.useState)(!1),_=Object(i.a)(k,2),S=_[0],D=_[1],C=Object(l.useState)(!0),F=Object(i.a)(C,2),I=F[0],P=F[1],A=Object(l.useState)(2),E=Object(i.a)(A,2),M=E[0],z=(E[1],Object(l.useState)({shareID:0,shareSlug:null})),L=Object(i.a)(z,2),T=L[0],J=L[1],R=Object(x.g)(),H=R.slug,Y=R.newsID,B=function(){var e=Object(n.a)(c.a.mark((function e(t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==I){e.next=7;break}return D(!0),n=u.b+u.a.category+"/".concat(H,"?page=").concat(t,"&size=").concat(M),e.next=5,O.a.get(n);case 5:!0===(i=e.sent).data.error?console.log("there are some errors!"):(0===i.data.data.posts.length?P(!1):s([].concat(Object(r.a)(a),Object(r.a)(i.data.data.posts))),D(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){B(f)}),[Y,f]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.a,{}),Object(N.jsx)(d.a,{page:"category",title:H}),Object(N.jsx)("div",{className:"container-fluid pb-5 mb-2 mb-md-4",children:Object(N.jsx)("div",{className:"container-fluid",children:Object(N.jsxs)("div",{className:"row pt-5 mt-md-2",children:[Object(N.jsx)("div",{className:"col-lg-3"}),Object(N.jsxs)("div",{className:"col-lg-6 p-0 m-0",children:[Object(N.jsx)(v,{id:Y,shorts:a,slug:H}),a.map((function(e,t){return Object(N.jsx)(m.a,{shortsData:e,setShareShort:J},t)})),Object(N.jsx)(g.a,{loading:S,hasMore:I,setPage:y,page:f})]}),Object(N.jsx)(b.a,{}),Object(N.jsx)(w.a,{shareShort:T})]})})}),Object(N.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=5.a0dd3347.chunk.js.map