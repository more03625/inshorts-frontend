(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[11],{44:function(e,t,s){"use strict";var a=s(37),c=s.n(a),r=s(38),i=s(40),n=s(0),l=s(9),d=s(10),b=s(39),j=s.n(b),o=s(15),m=s(1);t.a=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],b=Object(n.useState)([]),h=Object(i.a)(b,2),x=h[0],u=h[1],g=function(){var e=Object(r.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.category+"/allList",e.next=3,j.a.get(t);case 3:!0===(s=e.sent).data.error?alert("Please reload the app!"):a(s.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.news+"/trending/news?page=1&size=3",e.next=3,j.a.get(t);case 3:!0===(s=e.sent).data.error?o.b.error(s.data.title):u(s.data.data.detail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g(),O()}),[]),Object(m.jsxs)("aside",{className:"col-lg-3",children:[Object(m.jsx)(o.a,{}),Object(m.jsxs)("div",{className:"offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto",id:"blog-sidebar",style:{maxWidth:"22rem"},children:[Object(m.jsxs)("div",{className:"offcanvas-header align-items-center shadow-sm",children:[Object(m.jsx)("h2",{className:"h5 mb-0",children:"Sidebar"}),Object(m.jsx)("button",{className:"btn-close ms-auto",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(m.jsxs)("div",{className:"offcanvas-body py-grid-gutter py-lg-1 px-lg-4","data-simplebar":!0,"data-simplebar-auto-hide":"true",children:[Object(m.jsxs)("div",{className:"widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(m.jsx)("h3",{className:"widget-title",children:"Shorts by categories!"}),Object(m.jsx)("ul",{className:"widget-list",children:s&&s.slice(0,6).map((function(e,t){return Object(m.jsx)("li",{className:"widget-list-item",children:Object(m.jsxs)(d.b,{className:"widget-list-link d-flex justify-content-between align-items-center",to:"/category/".concat(e.slug,"/").concat(e._id),children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsxs)("span",{className:"fs-xs text-muted ms-3",children:[e.postCount," Shorts"]})]})},t)}))})]}),Object(m.jsxs)("div",{className:"widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2",children:[Object(m.jsx)("h3",{className:"widget-title",children:"Trending posts"}),x&&x.slice(0,3).map((function(e,t){return Object(m.jsx)(d.b,{className:"flex-shrink-0",to:"/read/"+Object(l.d)(e.title)+"/"+e._id,children:Object(m.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(m.jsx)("img",{className:"rounded",src:l.b+e.image,width:"64",alt:"Post image"}),Object(m.jsxs)("div",{className:"ps-3",children:[Object(m.jsx)("h6",{className:"blog-entry-title fs-sm mb-0",children:e.title.slice(0,44)+"..."}),Object(m.jsxs)("span",{className:"fs-ms text-muted",children:["by "," ",Object(m.jsx)(d.b,{to:"author/".concat(e.author_id&&e.author_id._id),className:"blog-entry-meta-link",children:e.author_id&&Object(l.h)(e.author_id.name)})]})]})]})},t)}))]}),Object(m.jsxs)("div",{className:"bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2",children:[Object(m.jsx)("a",{href:"https://amzn.to/3ubMFr1",target:"_blank",children:Object(m.jsx)("img",{src:l.b+"/uploads/ad-banner/0QPA5MX1.jpg"})}),Object(m.jsx)("div",{className:"py-5 px-4 text-center"})]})]})]})]})}},45:function(e,t,s){"use strict";s(0);var a=s(10),c=s(9),r=s(15),i=s(1);t.a=function(e){var t=e.shortsData,s=e.setShareShort;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("article",{className:"masonry-grid-item",children:Object(i.jsxs)("div",{className:"card gallery",children:[Object(i.jsx)(r.a,{}),Object(i.jsx)("img",{className:"card-img-top",src:"".concat(c.b+t.image),alt:"Post"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h2",{className:"h6 blog-entry-title",title:t.title,children:Object(i.jsx)(a.b,{to:t&&t.title?"/read/"+Object(c.d)(t.title)+"/"+t._id:"",children:t.title})}),Object(i.jsxs)("p",{className:"news-additional-info",title:t.title,children:[Object(i.jsx)("span",{className:"ci-eye"})," ",t.hits," Hits |"," ",Object(i.jsx)("span",{children:new Date(t.createdAt).toDateString()})]}),Object(i.jsx)("p",{className:"fs-sm",children:t.description}),Object(i.jsxs)("p",{className:"news-additional-info",title:t.read_at,children:["Read More at"," ",Object(i.jsx)("span",{children:Object(i.jsx)("a",{target:"_blank",className:"me-2 mb-2",href:t.read_at_link+"?utm_source=newsdb.in",children:t.read_at})})]})]}),Object(i.jsxs)("div",{className:"card-footer d-flex align-items-center fs-xs",children:[Object(i.jsx)("a",{target:"_blank",className:"blog-entry-meta-link",href:t.read_at_link+"?utm_source=newsdb.in",children:t.summary}),Object(i.jsxs)("div",{className:"ms-auto text-nowrap",children:[Object(i.jsx)("span",{className:"blog-entry-meta-divider mx-2"}),Object(i.jsxs)("a",{onClick:function(){return s({shareID:t._id,shareSlug:t.slug})},className:"share-btn blog-entry-meta-link text-nowrap",href:"#",id:"share-btn","data-bs-toggle":"modal","data-bs-target":"#modalDefault",children:[Object(i.jsx)("i",{className:"ci-telegram "})," "]})]})]})]})}),Object(i.jsx)("hr",{className:"mb-4"})]})}},46:function(e,t,s){"use strict";var a=s(10),c=s(1);t.a=function(e){var t=e.page,s=e.title;return Object(c.jsx)("div",{className:"bg-secondary py-4",children:Object(c.jsxs)("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3",children:[Object(c.jsx)("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2",children:Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsxs)(a.b,{className:"text-nowrap",to:"/",children:[Object(c.jsx)("i",{className:"ci-home"}),"Home"]})}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap",children:t}),Object(c.jsx)("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page",children:s&&s.slice(0,35)+"..."})]})})}),Object(c.jsx)("div",{className:"order-lg-1 pe-lg-4 text-center text-lg-start"})]})})}},87:function(e,t,s){"use strict";s.r(t);s(0);var a=s(48),c=s(44),r=s(49),i=s(46),n=(s(45),s(2)),l=s(1);t.default=function(){Object(n.g)().authorUserName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{}),Object(l.jsx)(i.a,{page:"Author"}),Object(l.jsx)("div",{className:"container-fluid pb-5 mb-2 mb-md-4",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row pt-5 mt-md-2",children:[Object(l.jsx)("div",{className:"col-lg-3"}),Object(l.jsx)("div",{className:"col-lg-6 p-0 m-0"}),Object(l.jsx)(c.a,{})]})})}),Object(l.jsx)(r.a,{})]})}}}]);
//# sourceMappingURL=11.5daa2f66.chunk.js.map