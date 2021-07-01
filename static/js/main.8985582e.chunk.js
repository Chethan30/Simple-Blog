(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(16),i=c.n(s),l=(c(22),c(2)),j=c(7),o=c(0),a=function(){var e=Object(l.f)();return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{onClick:function(){e.push("/")},children:" My Blog "}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(j.b,{to:"/",children:"Home"}),Object(o.jsx)(j.b,{to:"/create",children:"New Blog"})]})]})},b=function(e){var t=e.blogs,c=e.title;return Object(o.jsxs)("div",{className:"blog-list",children:[Object(o.jsx)("h2",{children:c}),t.map((function(e){return Object(o.jsx)("div",{className:"blog-preview",children:Object(o.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("p",{children:["Written by ",e.author," "]})]})},e.id)}))]})},h=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(h.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),l=Object(h.a)(i,2),j=l[0],o=l[1],a=Object(n.useState)(null),b=Object(h.a)(a,2),d=b[0],u=b[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw d("Could not fetch data!");return e.json()})).then((function(e){s(e),o(!1),u(null)})).catch((function(e){"AbortError"!==e.name&&(u(e.message),o(!1))})),function(){return t.abort()}}),[e,d]),{data:r,isPending:j,Error:d}},u=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isPending,n=e.Error;return Object(o.jsxs)("div",{className:"home",children:[n&&Object(o.jsx)("div",{children:n}),c&&Object(o.jsx)("div",{children:"Loading...."}),t&&Object(o.jsx)(b,{blogs:t,title:"All Blogs"})]})},O=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(h.a)(s,2),j=i[0],a=i[1],b=Object(n.useState)("mario"),d=Object(h.a)(b,2),u=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(h.a)(x,2),f=g[0],v=g[1],p=Object(l.f)();return Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("h2",{children:"Add a new Blog"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:j,author:u};v(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added!"),v(!1),p.push("/")}))},children:[Object(o.jsx)("label",{children:"Blog title : "}),Object(o.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("label",{children:"Blog Body : "}),Object(o.jsx)("textarea",{required:!0,value:j,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"Blog Author : "}),Object(o.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(o.jsx)("option",{value:"mario",children:"Mario"}),Object(o.jsx)("option",{value:"luigi",children:"Luigi"}),Object(o.jsx)("option",{value:"chethan",children:"Chethan"})]}),!f&&Object(o.jsx)("button",{children:"Add Blog"}),f&&Object(o.jsx)("button",{children:"AddING Blog...."})]})]})},x=function(){var e=Object(l.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isPending,s=Object(l.f)();return Object(o.jsxs)("div",{className:"blog-details",children:[r&&Object(o.jsx)("div",{children:"Loading...."}),n&&Object(o.jsxs)("div",{children:[" ",n," "]}),c&&Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:c.title}),Object(o.jsxs)("p",{children:["Written by ",c.author]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{children:[" ",c.body]}),Object(o.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(o.jsxs)("div",{className:"Error404",children:[Object(o.jsx)("h2",{children:"Sorry, Not Sorry!"}),Object(o.jsx)("p",{children:" Sorry for the inconvineince, This project currently runs on a local databse! "}),Object(o.jsx)("p",{children:" Updates Coming soon!"}),Object(o.jsxs)("h5",{children:[Object(o.jsx)(j.b,{to:"/",children:" Click here "})," to go back to the home page. "]})]})};var f=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(a,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(u,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/create",children:Object(o.jsx)(O,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/blogs/:id",children:Object(o.jsx)(x,{})}),Object(o.jsx)(l.a,{exact:!0,path:"*",children:Object(o.jsx)(g,{})})]})})]})})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8985582e.chunk.js.map