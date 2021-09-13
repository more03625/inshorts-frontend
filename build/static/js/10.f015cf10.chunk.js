(this["webpackJsonpinshorts-frontend"]=this["webpackJsonpinshorts-frontend"]||[]).push([[10],{34:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return r})),a.d(t,"h",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return d}));var s="http://localhost:5254",c={news:"/news",category:"/category",signup:"/api/signup",login:"/api/login"},r=function(e){return e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},n=function(e){return e[0].toUpperCase()+e.slice(1)},l=function(e){return new Promise((function(t,a){var s=new FileReader;void 0!==e&&(s.readAsDataURL(e),s.onload=function(){t(s.result)}),s.onerror=function(e){a(e)}}))},i=function(e,t){var a=new FileReader;a.onload=function(e){var a=new Image;a.onload=function(e){var a=this.width,s=this.height;t&&t(a,s)},a.src=e.target.result},a.readAsDataURL(e)},o=function(){return JSON.parse(localStorage.getItem("newsdb"))},d=function(){localStorage.removeItem("newsdb")}},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(39);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},48:function(e,t,a){"use strict";a(0);var s=a(13),c=a(34),r=a(1);t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("header",{className:"bg-light shadow-sm navbar-sticky",children:[Object(r.jsx)("div",{className:"navbar navbar-expand-lg navbar-light",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(s.b,{className:"navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1",to:"/admin/dashboard",children:Object(r.jsx)("img",{src:c.b+"/uploads/logo/news-db-pc-light-logo.png",width:"142",alt:"NewsDB"})}),Object(r.jsx)(s.b,{className:"navbar-brand d-sm-none me-2 order-lg-1",to:"/admin/dashboard",children:Object(r.jsx)("img",{src:c.b+"/uploads/logo/news-db-mobile-light-logo.png",width:"74",alt:"NewsDB Mobile"})}),Object(r.jsxs)("div",{className:"navbar-toolbar d-flex align-items-center order-lg-3",children:[Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("a",{className:"navbar-tool d-none d-lg-flex",href:"#","data-bs-toggle":"collapse","data-bs-target":"#searchBox",role:"button","aria-expanded":"false","aria-controls":"searchBox",children:[Object(r.jsx)("span",{className:"navbar-tool-tooltip",children:"Search"}),Object(r.jsx)("div",{className:"navbar-tool-icon-box",children:Object(r.jsx)("i",{className:"navbar-tool-icon ci-search"})})]}),Object(r.jsxs)("a",{className:"navbar-tool d-none d-lg-flex",href:"dashboard-favorites.html",children:[Object(r.jsx)("span",{className:"navbar-tool-tooltip",children:"Favorites"}),Object(r.jsx)("div",{className:"navbar-tool-icon-box",children:Object(r.jsx)("i",{className:"navbar-tool-icon ci-heart"})})]}),Object(r.jsxs)("div",{className:"navbar-tool dropdown ms-2",children:[Object(r.jsx)("a",{className:"navbar-tool-icon-box border dropdown-toggle",href:"dashboard-sales.html",children:Object(r.jsx)("img",{src:"img/marketplace/account/avatar-sm.png",width:"32",alt:"Createx Studio"})}),Object(r.jsxs)("a",{className:"navbar-tool-text ms-n1",href:"dashboard-sales.html",children:[Object(r.jsx)("small",{children:"Createx Std."}),"$1,375.00"]}),Object(r.jsx)("div",{className:"dropdown-menu dropdown-menu-end",children:Object(r.jsxs)("div",{style:{minWidth:"14rem"},children:[Object(r.jsx)("h6",{className:"dropdown-header",children:"Account"}),Object(r.jsxs)("a",{className:"dropdown-item d-flex align-items-center",href:"dashboard-favorites.html",children:[Object(r.jsx)("i",{className:"ci-heart opacity-60 me-2"}),"Favorites",Object(r.jsx)("span",{className:"fs-xs text-muted ms-auto",children:"4"})]}),Object(r.jsx)("div",{className:"dropdown-divider"}),Object(r.jsx)("h6",{className:"dropdown-header",children:"Seller Dashboard"})]})})]}),Object(r.jsx)("div",{className:"navbar-tool ms-4",children:Object(r.jsxs)("a",{className:"navbar-tool-icon-box bg-secondary dropdown-toggle",href:"marketplace-cart.html",children:[Object(r.jsx)("span",{className:"navbar-tool-label",children:"3"}),Object(r.jsx)("i",{className:"navbar-tool-icon ci-cart"})]})})]}),Object(r.jsxs)("div",{className:"collapse navbar-collapse me-auto order-lg-2",id:"navbarCollapse",children:[Object(r.jsxs)("div",{className:"input-group d-lg-none my-3",children:[Object(r.jsx)("i",{className:"ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"}),Object(r.jsx)("input",{className:"form-control rounded-start",type:"text",placeholder:"Search marketplace"})]}),Object(r.jsx)("ul",{className:"navbar-nav navbar-mega-nav pe-lg-2 me-lg-2",children:Object(r.jsxs)("li",{className:"nav-item dropdown",children:[Object(r.jsxs)("a",{className:"nav-link dropdown-toggle ps-lg-0",href:"#","data-bs-toggle":"dropdown",children:[Object(r.jsx)("i",{className:"ci-menu align-middle mt-n1 me-2"}),"Categories"]}),Object(r.jsx)("ul",{className:"dropdown-menu py-1",children:Object(r.jsx)("li",{className:"dropdown",children:Object(r.jsx)("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:"Photos"})})})]})}),Object(r.jsx)("ul",{className:"navbar-nav",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"index.html",children:"Back to main demo"})})})]})]})}),Object(r.jsx)("div",{className:"search-box collapse",id:"searchBox",children:Object(r.jsx)("div",{className:"card pt-2 pb-4 border-0 rounded-0",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("i",{className:"\r ci-search\r position-absolute\r top-50\r start-0\r translate-middle-y\r text-muted\r fs-base\r ms-3\r "}),Object(r.jsx)("input",{className:"form-control rounded-start",type:"text",placeholder:"Search marketplace"})]})})})})]})})}},49:function(e,t,a){"use strict";a(0);var s=a(13),c=a(1);t.a=function(){var e=window.location.pathname;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("aside",{className:"col-lg-4 pe-xl-5",children:[Object(c.jsx)("div",{className:"d-block d-lg-none p-4",children:Object(c.jsxs)("a",{className:"btn btn-outline-accent d-block",href:"#account-menu","data-bs-toggle":"collapse",children:[Object(c.jsx)("i",{className:"ci-menu me-2"}),"Account menu"]})}),Object(c.jsx)("div",{className:"h-100 border-end mb-2",children:Object(c.jsxs)("div",{className:"d-lg-block collapse",id:"account-menu",children:[Object(c.jsx)("div",{className:"bg-secondary p-4",children:Object(c.jsx)("h3",{className:"fs-sm mb-0 text-muted",children:"Account"})}),Object(c.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(c.jsx)("li",{className:"border-bottom mb-0 ".concat("/admin/dashboard"===e?"active":""," "),children:Object(c.jsxs)(s.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/admin/dashboard",children:[Object(c.jsx)("i",{className:"ci-settings opacity-60 me-2"}),"Dashboard"]})}),Object(c.jsx)("li",{className:"border-bottom mb-0 ".concat("/admin/add-shorts"===e?"active":""," "),children:Object(c.jsxs)(s.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/admin/add-shorts",children:[Object(c.jsx)("i",{className:"ci-basket opacity-60 me-2"}),"Add Shorts"]})}),Object(c.jsx)("li",{className:"border-bottom mb-0 ".concat("/admin/edit-shorts"===e?"active":""," "),children:Object(c.jsxs)(s.b,{className:" nav-link-style d-flex align-items-center px-4 py-3",to:"/admin/edit-shorts",children:[Object(c.jsx)("i",{className:"ci-heart opacity-60 me-2"}),"Edit Shorts",Object(c.jsx)("span",{className:"fs-sm text-muted ms-auto",children:"4"})]})})]}),Object(c.jsx)("hr",{})]})})]})})}},54:function(e,t,a){"use strict";a(0),a.p;var s=a(34),c=a(1);t.a=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page-title-overlap bg-accent pt-4",children:Object(c.jsx)("div",{className:"container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2",children:Object(c.jsxs)("div",{className:"d-flex align-items-center pb-3",children:[Object(c.jsx)("div",{className:" img-thumbnail rounded-circle position-relative flex-shrink-0",style:{width:"6.375rem"},children:Object(c.jsx)("img",{className:"rounded-circle",src:s.b+"/uploads/user-profile/newsdb-admin-logo.png",alt:"Createx Rahul"})}),Object(c.jsxs)("div",{className:"ps-3",children:[Object(c.jsx)("h3",{className:"text-light fs-lg mb-0",children:"Rahul More"}),Object(c.jsx)("span",{className:"d-block text-light fs-ms opacity-60 py-1",children:"#NewsDB Editors"})]})]})})})})}},87:function(e){e.exports=JSON.parse('{"b":["publish","draft","delete"],"a":["Hindustan Times","The New Indian Express","Business Insider India","The News Minute","Live Mint","CricTracker","Times Now","The Next Web","Twitter","Paytm","India Today","The Times Of India","Cricbuzz","Sportskeeda","ESPNcricinfo","Amazon","Flipkart","The Indian Express","India Times","News 18","Cointelegraph","Gadgets 360"]}')},96:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(48),r=a(49),n=a(54),l=a(39),i=a(47),o=a(35),d=a.n(o),m=a(36),b=a(38),j=a(2),u=a(13),h=a(34),p=a(37),x=a.n(p),O=a(87),g=a(1),f=function(){var e=Object(j.g)().shortsID,t=Object(s.useState)(null),a=Object(b.a)(t,2),c=a[0],r=a[1],n=Object(s.useState)({}),o=Object(b.a)(n,2),p=o[0],f=o[1],v=Object(s.useState)({defaultTitle:15,defaultDescription:60,defaultSummary:10,title:0,description:0,summary:0}),N=Object(b.a)(v,2),y=N[0],w=N[1],k=Object(s.useState)(!1),S=Object(b.a)(k,2),_=S[0],P=S[1],T=Object(s.useState)(!1),F=Object(b.a)(T,2),C=(F[0],F[1]),D=Object(s.useState)(null),I=Object(b.a)(D,2),E=I[0],A=I[1],B=Object(s.useState)(null),R=Object(b.a)(B,2),U=R[0],V=R[1],z=Object(j.f)(),K=function(){var e=Object(m.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.b+h.a.category,e.next=3,x.a.get(t);case 3:a=e.sent,A(a.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){r(Object(i.a)(Object(i.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))},M=function(){var t=Object(m.a)(d.a.mark((function t(a){var s,r,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),P(!0),!(null===c||""===c.title?(f({title:"Please add title"}),0):""===c.status||void 0===c.status?(f({status:"Please select status"}),0):""===c.description||void 0===c.description?(f({description:"Please add description"}),0):""===c.summary||void 0===c.summary?(f({summary:"Please add summary"}),0):""===c.image||void 0===c.image?(f({image:"Please add image"}),0):""===c.read_at||void 0===c.read_at?(f({read_at:"Please select read at"}),0):""===c.read_at_link||void 0===c.read_at_link?(f({read_at_link:"Please add read more link"}),0):""===c.main_category||void 0===c.main_category?(f({main_category:"Please select main category"}),0):""===c.sub_categories||void 0===c.sub_categories?(f({sub_categories:"Please select sub category"}),0):""!==c.short_tags&&void 0!==c.short_tags||(f({short_tags:"Please add tags"}),0))){t.next=20;break}if(s=Object(h.d)(c.title),Object.assign(c,{slug:s}),void 0===c.isImageSelected&&Object.assign(c,{image:0}),console.log(c),r=h.b+h.a.news,void 0===e){t.next=14;break}return t.next=11,x.a.put(r,c);case 11:t.t0=t.sent,t.next=17;break;case 14:return t.next=16,x.a.post(r,c);case 16:t.t0=t.sent;case 17:!1===(n=t.t0).data.error?(f(""),V(window.location.host+"/read/"+n.data.data.slug+"/"+n.data.data._id),setTimeout((function(){console.log("Thanks"),z.push("/admin/edit-shorts")}),2e3)):f({postShortError:n.data.title}),window.scrollTo({behavior:"smooth",top:0});case 20:P(!1);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(e,t,a){console.log(e),t=(t=(t=t.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n"),("title"===a&&t.split(" ").length>=y.defaultTitle||"description"===a&&t.split(" ").length>=y.defaultDescription||"summary"===a&&t.split(" ").length>=y.defaultSummary)&&e.preventDefault(),w("title"===a?Object(i.a)(Object(i.a)({},y),{},{title:t.split(" ").length}):"description"===a?Object(i.a)(Object(i.a)({},y),{},{description:t.split(" ").length}):Object(i.a)(Object(i.a)({},y),{},{summary:t.split(" ").length})),r(Object(i.a)(Object(i.a)({},c),{},Object(l.a)({},a,t)))},J=function(){var t=Object(m.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e){t.next=7;break}return P(!0),a=h.b+h.a.news+"/".concat(e),t.next=5,x.a.get(a);case 5:!0===(s=t.sent).data.error?console.log("there are some errors!"):(null===s.data.data?C(!0):r(s.data.data),P(!1));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){K(),J()}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("section",{className:"col-lg-8 pt-lg-4 pb-4 mb-3",children:Object(g.jsxs)("div",{className:"pt-2 px-4 ps-lg-0 pe-xl-5",children:[U&&Object(g.jsxs)("div",{className:"alert alert-success d-flex",role:"alert",children:[Object(g.jsx)("div",{className:"alert-icon",children:Object(g.jsx)("i",{className:"ci-check-circle"})}),Object(g.jsxs)("div",{children:["Post has been addedd successfully ",Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:U,className:"alert-link",children:"View Post"})]})]}),p.postShortError&&Object(g.jsxs)("div",{className:"alert alert-success d-flex",role:"alert",children:[Object(g.jsx)("div",{className:"alert-icon",children:Object(g.jsx)("i",{className:"ci-check-circle"})}),Object(g.jsx)("div",{children:p.postShortError})]}),Object(g.jsxs)("div",{className:"d-sm-flex flex-wrap justify-content-between align-items-center pb-2 ",children:[Object(g.jsx)("h2",{className:"h3 py-2 me-2 text-center text-sm-start",children:void 0!==e?"Edit shorts":"Add New Short"}),Object(g.jsxs)("div",{className:"py-2",children:[Object(g.jsxs)("select",{className:"form-select me-2",name:"status",onChange:function(e){return L(e)},value:c&&c.status?c.status:"",children:[Object(g.jsx)("option",{value:"",children:"Select status"}),O.b.map((function(e,t){return Object(g.jsx)("option",{value:e,children:Object(h.h)(e)})}))]}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.status})]})]}),Object(g.jsxs)("form",{onSubmit:M,children:[Object(g.jsxs)("div",{className:"mb-3 pb-2",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-product-name",children:"Shorts Title"}),Object(g.jsx)("input",{className:"form-control",type:"text",id:"unp-product-name",name:"title",onKeyPress:function(e){return W(e,e.target.value,"title")},defaultValue:c&&c.title}),Object(g.jsxs)("div",{className:"form-text",children:["Total word count: ",Object(g.jsx)("b",{children:y.title})," words. Words left: ",Object(g.jsx)("b",{children:y.defaultTitle-y.title})]}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.title})]}),Object(g.jsxs)("div",{className:"mb-3 py-2",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-shortds-description",children:"Shorts description"}),Object(g.jsx)("textarea",{className:"form-control",rows:"6",id:"unp-shortds-description",name:"description",onKeyPress:function(e){return W(e,e.target.value,"description")},defaultValue:c&&c.description}),Object(g.jsxs)("div",{className:"form-text",children:["Total word count: ",Object(g.jsx)("b",{children:y.description})," words. Words left: ",Object(g.jsx)("b",{children:y.defaultDescription-y.description})]}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.description})]}),Object(g.jsxs)("div",{className:"mb-3 pb-2",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-product-name",children:"Short Summary | Add Intresting Facts | Previous | Achievement"}),Object(g.jsx)("input",{className:"form-control",type:"text",id:"unp-product-name",name:"summary",onKeyPress:function(e){return W(e,e.target.value,"summary")},defaultValue:c&&c.summary}),Object(g.jsxs)("div",{className:"form-text",children:["Total word count: ",Object(g.jsx)("b",{children:y.summary})," words. Words left: ",Object(g.jsx)("b",{children:y.defaultSummary-y.summary})]}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.summary})]}),Object(g.jsxs)("div",{className:"mb-3 pb-2",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-product-files",children:"Add attractive image"}),Object(g.jsx)("input",{className:"form-control",type:"file",id:"unp-product-files",name:"image",onChange:function(e){return function(e){var t=e.target.files[0];Object(h.e)(t,(function(e,a){return t.size>5e4?(alert("File size should be below 50 KB"),document.getElementById("unp-product-files").value="",!1):600!==e&&358!==a?(alert("Only ".concat(600," * ").concat(358," image allowed")),document.getElementById("unp-product-files").value="",!1):void Object(h.c)(t).then((function(e){r(Object(i.a)(Object(i.a)({},c),{},{image:e,isImageSelected:!0}))}))}))}(e)},accept:"image/jpeg, image/jpg, image/png, image/webp"}),Object(g.jsxs)("div",{className:"form-text",children:["Use ",Object(g.jsx)(u.b,{to:{pathname:"https://tinypng.com/"},children:"Tinypng"})," or ",Object(g.jsx)(u.b,{to:{pathname:"https://compressimage.toolur.com/"},children:"Toolur"})," to compress images. it should be less than 50KB & Dimensions should be 600 * 358"]}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.image})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-6 mb-3",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-standard-price",children:"Read at"}),Object(g.jsxs)("select",{className:"form-select me-2",id:"unp-category",name:"read_at",onChange:function(e){return L(e)},value:c&&c.read_at?c.read_at:"",children:[Object(g.jsx)("option",{value:"",children:"Read at"}),O.a.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))]}),Object(g.jsx)("div",{className:"form-text",children:"Select read more brands!"}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.read_at})]}),Object(g.jsxs)("div",{className:"col-sm-6 mb-3",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-extended-price",children:"Read more link"}),Object(g.jsx)("input",{className:"form-control",type:"text",id:"unp-product-name",placeholder:"https://newsdb.in",name:"read_at_link",onChange:function(e){return L(e)},defaultValue:c&&c.read_at_link}),Object(g.jsx)("div",{className:"form-text",children:"Please enter a valid URL"}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.read_at_link})]})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-6 mb-3",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-standard-price",children:"Main Category"}),Object(g.jsxs)("select",{className:"form-select me-2",id:"unp-category",name:"main_category",onChange:function(e){return L(e)},value:c&&""!==c.main_category?c.main_category:"",children:[Object(g.jsx)("option",{value:"",children:"Select category"}),E&&E.map((function(e,t){return Object(g.jsx)("option",{value:e._id,children:e.name},t)}))]}),Object(g.jsx)("div",{className:"form-text",children:"Select only from suggestions!"}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.main_category})]}),Object(g.jsxs)("div",{className:"col-sm-6 mb-3",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-extended-price",children:"Sub categories"}),Object(g.jsxs)("select",{className:"form-select me-2",id:"unp-category",name:"sub_categories",onChange:function(e){return L(e)},value:c&&c.sub_categories,children:[Object(g.jsx)("option",{value:"",children:"Select sub category"}),E&&E.map((function(e,t){return Object(g.jsx)("option",{value:e._id,children:e.name},t)}))]}),Object(g.jsx)("div",{className:"form-text",children:"Select only from suggestions!"}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.sub_categories})]})]}),Object(g.jsxs)("div",{className:"mb-3 py-2",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"unp-product-tags",children:"Shorts tags"}),Object(g.jsx)("input",{className:"form-control",placeholder:"enter keywords",name:"short_tags",onChange:function(e){return L(e)},defaultValue:c&&c.short_tags}),Object(g.jsxs)("div",{className:"form-text",children:["Use trending keywords only to get traffic from Google! (Use ",Object(g.jsx)(u.b,{to:{pathname:"https://www.google.com/"},children:"Google autocomplete"})," feature to get trending keywords)"]}),Object(g.jsx)("p",{className:"text-danger fs-md",children:p.short_tags})]}),Object(g.jsxs)("button",{className:"btn btn-primary d-block w-100",type:"submit",disabled:_,children:[Object(g.jsx)("i",{className:"ci-cloud-upload fs-lg me-2"}),void 0!==e?"Update shorts":"Add Shorts","  "," ",!0===_?Object(g.jsx)("i",{className:"fs-lg me-2 spinner-border spinner-border-sm",role:"status"}):""]})]})]})})})};t.default=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(c.a,{}),Object(g.jsx)(n.a,{}),Object(g.jsx)("div",{className:"container mb-5 pb-3",children:Object(g.jsx)("div",{className:"bg-light shadow-lg rounded-3 overflow-hidden",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(r.a,{}),Object(g.jsx)(f,{})]})})})]})}}}]);
//# sourceMappingURL=10.f015cf10.chunk.js.map