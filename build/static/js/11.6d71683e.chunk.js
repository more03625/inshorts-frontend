(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[11],{41:function(e,t,a){"use strict";a(0);var s=a(1);t.a=function(e){var t=e.loading,a=e.hasMore,c=e.setPage,r=e.page;return!1!==a&&(window.onscroll=function(){window.pageYOffset+window.innerHeight>=document.documentElement.scrollHeight-450&&c(r+1)}),Object(s.jsxs)(s.Fragment,{children:[!0===t?Object(s.jsx)("div",{className:"row justify-content-center mb-2",children:Object(s.jsx)("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"}})}):"",!1===a?Object(s.jsx)("div",{className:"row text-center justify-content-center mb-2",children:Object(s.jsx)("p",{children:"You are all caught up \ud83d\udd25"})}):""]})}},43:function(e){e.exports=JSON.parse('{"a":[{"_id":"613b52208a058326c493b6b9","image":"/uploads/user-profile/8kJEEL5K.jpg","name":"Business","slug":"business","shortsCount":50,"followCount":100}]}')},46:function(e,t,a){"use strict";var s=a(35),c=a.n(s),r=a(36),n=a(38),i=a(0),l=(a(43),a(10)),o=a(9),d=a(37),b=a.n(d),j=a(1);t.a=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),a=t[0],s=t[1],d=Object(i.useState)([]),m=Object(n.a)(d,2),u=m[0],h=m[1],x=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.category+"/allList",e.next=3,b.a.get(t);case 3:!0===(a=e.sent).data.error?alert("Please reload the app!"):s(a.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.news+"/trending/news?page=1&size=3",e.next=3,b.a.get(t);case 3:!0===(a=e.sent).data.error?console.log("Please reload the app!"):h(a.data.data.detail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){x(),g()}),[]),Object(j.jsx)("aside",{className:"col-lg-3",children:Object(j.jsxs)("div",{className:"offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto",id:"blog-sidebar",style:{maxWidth:"22rem"},children:[Object(j.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[Object(j.jsx)("h2",{className:"h5 mb-0",children:"Sidebar"}),Object(j.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(j.jsxs)("div",{className:"offcanvas-body py-grid-gutter py-lg-1 px-lg-4","data-simplebar":!0,"data-simplebar-auto-hide":"true",children:[Object(j.jsxs)("div",{className:"widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(j.jsx)("h3",{className:"widget-title",children:"Shorts by categories!"}),Object(j.jsx)("ul",{className:"widget-list",children:a&&a.slice(0,6).map((function(e,t){return Object(j.jsx)("li",{className:"widget-list-item",children:Object(j.jsxs)(o.b,{className:"widget-list-link d-flex justify-content-between align-items-center",to:"/category/".concat(e.slug,"/").concat(e._id),children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("span",{className:"fs-xs text-muted ms-3",children:e.postCount})]})},t)}))})]}),Object(j.jsxs)("div",{className:"widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(j.jsx)("h3",{className:"widget-title",children:"Trending posts"}),u&&u.slice(0,3).map((function(e,t){return Object(j.jsx)(o.b,{className:"flex-shrink-0",to:"/read/"+Object(l.d)(e.title)+"/"+e._id,children:Object(j.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(j.jsx)("img",{className:"rounded",src:l.b+e.image,width:"64",alt:"Post image"}),Object(j.jsxs)("div",{className:"ps-3",children:[Object(j.jsx)("h6",{className:"blog-entry-title fs-sm mb-0",children:e.title.slice(0,44)+"..."}),Object(j.jsxs)("span",{className:"fs-ms text-muted",children:["by "," ",Object(j.jsx)(o.b,{to:"author/".concat(e.author_id&&e.author_id._id),className:"blog-entry-meta-link",children:e.author_id&&Object(l.h)(e.author_id.name)})]})]})]})},t)}))]}),Object(j.jsx)("div",{className:"bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2",style:{backgroundImage:'url("http://localhost:5254/uploads/ad-banner/0QPA5MX1.jpg")'},children:Object(j.jsx)("div",{className:"py-5 px-4 text-center"})})]})]})})}},47:function(e,t,a){"use strict";a(0);var s=a(9),c=a(10),r=a(42),n=a(1);t.a=function(e){var t=e.shortsData,a=e.setShareShort;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("article",{className:"masonry-grid-item",children:Object(n.jsxs)("div",{className:"card gallery",children:[Object(n.jsx)(r.a,{}),Object(n.jsx)("img",{className:"card-img-top",src:"".concat(c.b+t.image),alt:"Post"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"h6 blog-entry-title",title:t.title,children:Object(n.jsx)(s.b,{to:t&&t.title?"/read/"+Object(c.d)(t.title)+"/"+t._id:"",children:t.title})}),Object(n.jsxs)("p",{className:"news-additional-info",title:t.title,children:["Shorts by"," ",Object(n.jsxs)("span",{children:[Object(n.jsx)(s.b,{className:"me-2 mb-2",to:"/author/".concat(t.author_id&&t.author_id._id),children:t.author_id&&t.author_id.name}),new Date(t.createdAt).toDateString()]})]}),Object(n.jsx)("p",{className:"fs-sm",children:t.description}),Object(n.jsxs)("p",{className:"news-additional-info",title:t.read_at,children:["Read More at"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{target:"_blank",className:"me-2 mb-2",href:t.read_at_link+"?newsdb.in",children:t.read_at})})]})]}),Object(n.jsxs)("div",{className:"card-footer d-flex align-items-center fs-xs",children:[Object(n.jsx)("a",{target:"_blank",className:"blog-entry-meta-link",href:t.read_at_link+"?newsdb.in",children:t.summary}),Object(n.jsxs)("div",{className:"ms-auto text-nowrap",children:[Object(n.jsx)("span",{className:"blog-entry-meta-divider mx-2"}),Object(n.jsxs)("a",{onClick:function(){return a({shareID:t._id,shareSlug:t.slug})},className:"share-btn blog-entry-meta-link text-nowrap",href:"#",id:"share-btn","data-bs-toggle":"modal","data-bs-target":"#modalDefault",children:[Object(n.jsx)("i",{className:"ci-telegram "})," "]})]})]})]})}),Object(n.jsx)("hr",{className:"mb-4"})]})}},48:function(e,t,a){"use strict";var s=a(9),c=a(1);t.a=function(e){var t=e.page,a=e.title;return Object(c.jsx)("div",{className:"bg-secondary py-4",children:Object(c.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(c.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsxs)(s.b,{className:"text-nowrap",to:"/",children:[Object(c.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap",children:t}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:a})]})})}),Object(c.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start"})]})})}},94:function(e,t,a){"use strict";a.r(t);var s=a(35),c=a.n(s),r=a(44),n=a(36),i=a(38),l=a(0),o=a(49),d=a(48),b=a(46),j=a(50),m=a(47),u=a(10),h=a(37),x=a.n(h),g=a(2),O=a(41),f=a(43),p=(a(18),a(9)),N=a(1),v=function(e){var t=f.a[0],a=Object(l.useState)("Follow"),s=Object(i.a)(a,2),r=s[0],o=s[1],d=Object(l.useState)(!1),b=Object(i.a)(d,2),j=b[0],m=b[1],h=function(){var t=Object(n.a)(c.a.mark((function t(){var a,s,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),a={categoryId:e.id,userId:Object(u.f)().data._id},s=u.b+u.a.follow,t.next=5,x.a.post(s,a,{headers:{token:Object(u.f)().token}});case 5:!0===(r=t.sent).data.error?console.log("Please reload the app!"):"followed"===r.data.title?o("Following"):o("Follow"),m(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1 follow-area",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center fs-sm mb-2",children:[Object(N.jsxs)(p.b,{className:"blog-entry-meta-link",to:"/author/".concat(t.userName),children:[Object(N.jsx)("div",{className:"blog-entry-author-ava",children:Object(N.jsx)("img",{className:"fit-image",src:u.b+t.image,alt:t.name})}),t.name]}),Object(N.jsx)("span",{className:"blog-entry-meta-divider"}),Object(N.jsxs)("a",{className:"blog-entry-meta-link",href:"#",children:["Shorts: ",t.shortsCount]})]}),Object(N.jsx)("div",{className:"fs-sm a mb-2",children:null===Object(u.f)()?Object(N.jsxs)("a",{href:"#signin-modal","data-bs-toggle":"modal",className:"btn btn-primary btn-sm",children:["Follow ",Object(N.jsx)("span",{children:t.followCount})]}):Object(N.jsxs)("button",{className:"btn btn-primary btn-sm",onClick:h,style:{borderRadius:"25px"},children:[r,"  ",!0===j?Object(N.jsx)("i",{className:"fs-lg me-2 spinner-border spinner-border-sm",role:"status"}):""]})})]})};t.default=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],h=Object(l.useState)(1),f=Object(i.a)(h,2),p=f[0],w=f[1],y=Object(l.useState)(!1),k=Object(i.a)(y,2),_=k[0],S=k[1],C=Object(l.useState)(!0),D=Object(i.a)(C,2),P=D[0],F=D[1],I=Object(l.useState)(2),E=Object(i.a)(I,2),J=E[0],M=(E[1],Object(l.useState)({shareID:0,shareSlug:null})),z=Object(i.a)(M,2),H=(z[0],z[1]),A=Object(g.g)(),L=A.slug,R=A.newsID,Y=function(){var e=Object(n.a)(c.a.mark((function e(t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==P){e.next=7;break}return S(!0),n=u.b+u.a.category+"/".concat(L,"?page=").concat(t,"&size=").concat(J),e.next=5,x.a.get(n);case 5:!0===(i=e.sent).data.error?console.log("there are some errors!"):(0===i.data.data.posts.length?F(!1):s([].concat(Object(r.a)(a),Object(r.a)(i.data.data.posts))),S(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){Y(p)}),[R,p]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.a,{}),Object(N.jsx)(d.a,{page:"category",title:L}),Object(N.jsx)("div",{className:"container-fluid pb-5 mb-2 mb-md-4",children:Object(N.jsx)("div",{className:"container-fluid",children:Object(N.jsxs)("div",{className:"row pt-5 mt-md-2",children:[Object(N.jsx)("div",{className:"col-lg-3"}),Object(N.jsxs)("div",{className:"col-lg-6",children:[Object(N.jsx)(v,{id:R}),a.map((function(e,t){return Object(N.jsx)(m.a,{shortsData:e,setShareShort:H},t)})),Object(N.jsx)(O.a,{loading:_,hasMore:P,setPage:w,page:p})]}),Object(N.jsx)(b.a,{})]})})}),Object(N.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=11.6d71683e.chunk.js.map