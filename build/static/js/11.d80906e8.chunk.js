(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[11],{44:function(e,t,a){"use strict";var s=a(37),c=a.n(s),r=a(38),i=a(40),n=a(0),l=a(9),d=a(10),b=a(39),j=a.n(b),o=a(1);t.a=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],b=Object(n.useState)([]),m=Object(i.a)(b,2),h=m[0],u=m[1],x=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.category+"/allList",e.next=3,j.a.get(t);case 3:!0===(a=e.sent).data.error?alert("Please reload the app!"):s(a.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.news+"/trending/news?page=1&size=3",e.next=3,j.a.get(t);case 3:!0===(a=e.sent).data.error?console.log("Please reload the app!"):u(a.data.data.detail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(),g()}),[]),Object(o.jsx)("aside",{className:"col-lg-3",children:Object(o.jsxs)("div",{className:"offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto",id:"blog-sidebar",style:{maxWidth:"22rem"},children:[Object(o.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[Object(o.jsx)("h2",{className:"h5 mb-0",children:"Sidebar"}),Object(o.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(o.jsxs)("div",{className:"offcanvas-body py-grid-gutter py-lg-1 px-lg-4","data-simplebar":!0,"data-simplebar-auto-hide":"true",children:[Object(o.jsxs)("div",{className:"widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(o.jsx)("h3",{className:"widget-title",children:"Shorts by categories!"}),Object(o.jsx)("ul",{className:"widget-list",children:a&&a.slice(0,6).map((function(e,t){return Object(o.jsx)("li",{className:"widget-list-item",children:Object(o.jsxs)(d.b,{className:"widget-list-link d-flex justify-content-between align-items-center",to:"/category/".concat(e.slug,"/").concat(e._id),children:[Object(o.jsx)("span",{children:e.name}),Object(o.jsxs)("span",{className:"fs-xs text-muted ms-3",children:[e.postCount," Shorts"]})]})},t)}))})]}),Object(o.jsxs)("div",{className:"widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(o.jsx)("h3",{className:"widget-title",children:"Trending posts"}),h&&h.slice(0,3).map((function(e,t){return Object(o.jsx)(d.b,{className:"flex-shrink-0",to:"/read/"+Object(l.d)(e.title)+"/"+e._id,children:Object(o.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(o.jsx)("img",{className:"rounded",src:l.b+e.image,width:"64",alt:"Post image"}),Object(o.jsxs)("div",{className:"ps-3",children:[Object(o.jsx)("h6",{className:"blog-entry-title fs-sm mb-0",children:e.title.slice(0,44)+"..."}),Object(o.jsxs)("span",{className:"fs-ms text-muted",children:["by "," ",Object(o.jsx)(d.b,{to:"author/".concat(e.author_id&&e.author_id._id),className:"blog-entry-meta-link",children:e.author_id&&Object(l.h)(e.author_id.name)})]})]})]})},t)}))]}),Object(o.jsxs)("div",{className:"bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2",children:[Object(o.jsx)("a",{href:"https://amzn.to/3ubMFr1",target:"_blank",children:Object(o.jsx)("img",{src:l.b+"/uploads/ad-banner/0QPA5MX1.jpg"})}),Object(o.jsx)("div",{className:"py-5 px-4 text-center"})]})]})]})})}},45:function(e,t,a){"use strict";a(0);var s=a(10),c=a(9),r=a(15),i=a(1);t.a=function(e){var t=e.shortsData,a=e.setShareShort;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("article",{className:"masonry-grid-item",children:Object(i.jsxs)("div",{className:"card gallery",children:[Object(i.jsx)(r.a,{}),Object(i.jsx)("img",{className:"card-img-top",src:"".concat(c.b+t.image),alt:"Post"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h2",{className:"h6 blog-entry-title",title:t.title,children:Object(i.jsx)(s.b,{to:t&&t.title?"/read/"+Object(c.d)(t.title)+"/"+t._id:"",children:t.title})}),Object(i.jsxs)("p",{className:"news-additional-info",title:t.title,children:["Shorts by"," ",Object(i.jsxs)("span",{children:[Object(i.jsx)(s.b,{className:"me-2 mb-2",to:"/author/".concat(t.author_id&&t.author_id._id),children:t.author_id&&t.author_id.name}),new Date(t.createdAt).toDateString()]})]}),Object(i.jsx)("p",{className:"fs-sm",children:t.description}),Object(i.jsxs)("p",{className:"news-additional-info",title:t.read_at,children:["Read More at"," ",Object(i.jsx)("span",{children:Object(i.jsx)("a",{target:"_blank",className:"me-2 mb-2",href:t.read_at_link+"?utm_source=newsdb.in",children:t.read_at})})]})]}),Object(i.jsxs)("div",{className:"card-footer d-flex align-items-center fs-xs",children:[Object(i.jsx)("a",{target:"_blank",className:"blog-entry-meta-link",href:t.read_at_link+"?utm_source=newsdb.in",children:t.summary}),Object(i.jsxs)("div",{className:"ms-auto text-nowrap",children:[Object(i.jsx)("span",{className:"blog-entry-meta-divider mx-2"}),Object(i.jsxs)("a",{onClick:function(){return a({shareID:t._id,shareSlug:t.slug})},className:"share-btn blog-entry-meta-link text-nowrap",href:"#",id:"share-btn","data-bs-toggle":"modal","data-bs-target":"#modalDefault",children:[Object(i.jsx)("i",{className:"ci-telegram "})," "]})]})]})]})}),Object(i.jsx)("hr",{className:"mb-4"})]})}},46:function(e,t,a){"use strict";var s=a(10),c=a(1);t.a=function(e){var t=e.page,a=e.title;return Object(c.jsx)("div",{className:"bg-secondary py-4",children:Object(c.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(c.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsxs)(s.b,{className:"text-nowrap",to:"/",children:[Object(c.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap",children:t}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:a&&a.slice(0,35)+"..."})]})})}),Object(c.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start"})]})})}},91:function(e,t,a){"use strict";a.r(t);a(0);var s=a(48),c=a(44),r=a(49),i=a(1),n=a(46),l=(a(45),a(2));t.default=function(){Object(l.g)().authorUserName;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.a,{}),Object(i.jsx)(n.a,{}),Object(i.jsx)("div",{className:"container-fluid pb-5 mb-2 mb-md-4",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("div",{className:"row pt-5 mt-md-2",children:[Object(i.jsx)("div",{className:"col-lg-3"}),Object(i.jsx)("div",{className:"col-lg-6 p-0 m-0"}),Object(i.jsx)(c.a,{})]})})}),Object(i.jsx)(r.a,{})]})}}}]);
//# sourceMappingURL=11.d80906e8.chunk.js.map