"use strict";(self.webpackChunkstonebase=self.webpackChunkstonebase||[]).push([[3792],{4298:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=s(5893),r=s(1151);const t={sidebar_position:1},i="\u7ba1\u7406\u6587\u6863\u7248\u672c",c={id:"tutorial-extras/manage-docs-versions",title:"\u7ba1\u7406\u6587\u6863\u7248\u672c",description:"Docusaurus \u53ef\u4ee5\u7ba1\u7406\u4f60\u7684\u6587\u6863\u7684\u591a\u4e2a\u7248\u672c\u3002",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"},next:{title:"\u7ffb\u8bd1\u4f60\u7684\u7ad9\u70b9",permalink:"/docs/tutorial-extras/translate-your-site"}},d={},l=[{value:"\u521b\u5efa\u6587\u6863\u7248\u672c",id:"\u521b\u5efa\u6587\u6863\u7248\u672c",level:2},{value:"\u6dfb\u52a0\u7248\u672c\u4e0b\u62c9\u83dc\u5355",id:"\u6dfb\u52a0\u7248\u672c\u4e0b\u62c9\u83dc\u5355",level:2},{value:"\u66f4\u65b0\u73b0\u6709\u7248\u672c",id:"\u66f4\u65b0\u73b0\u6709\u7248\u672c",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u7ba1\u7406\u6587\u6863\u7248\u672c",children:"\u7ba1\u7406\u6587\u6863\u7248\u672c"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus \u53ef\u4ee5\u7ba1\u7406\u4f60\u7684\u6587\u6863\u7684\u591a\u4e2a\u7248\u672c\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u521b\u5efa\u6587\u6863\u7248\u672c",children:"\u521b\u5efa\u6587\u6863\u7248\u672c"}),"\n",(0,o.jsx)(n.p,{children:"\u53d1\u5e03\u9879\u76ee\u7684 1.0 \u7248\u672c\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"docs"})," \u6587\u4ef6\u5939\u5c06\u88ab\u590d\u5236\u5230 ",(0,o.jsx)(n.code,{children:"versioned_docs/version-1.0"}),"\uff0c\u5e76\u521b\u5efa\u4e86 ",(0,o.jsx)(n.code,{children:"versions.json"}),"\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u7684\u6587\u6863\u73b0\u5728\u6709\u4e24\u4e2a\u7248\u672c\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"1.0"})," \u7248\u672c\u7684\u6587\u6863\u4f4d\u4e8e ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"current"})," \u7248\u672c\u7684\u6587\u6863\u4f4d\u4e8e ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/next/"}),"\uff0c\u7528\u4e8e",(0,o.jsx)(n.strong,{children:"\u5373\u5c06\u53d1\u5e03\u7684\u6587\u6863"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u6dfb\u52a0\u7248\u672c\u4e0b\u62c9\u83dc\u5355",children:"\u6dfb\u52a0\u7248\u672c\u4e0b\u62c9\u83dc\u5355"}),"\n",(0,o.jsx)(n.p,{children:"\u4e3a\u4e86\u5728\u4e0d\u540c\u7248\u672c\u95f4\u65e0\u7f1d\u5207\u6362\uff0c\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u4e0b\u62c9\u83dc\u5355\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," \u6587\u4ef6\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6587\u6863\u7248\u672c\u4e0b\u62c9\u83dc\u5355\u5c06\u51fa\u73b0\u5728\u5bfc\u822a\u680f\u4e2d\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"\u6587\u6863\u7248\u672c\u4e0b\u62c9\u83dc\u5355",src:s(3660).Z+"",width:"370",height:"302"})}),"\n",(0,o.jsx)(n.h2,{id:"\u66f4\u65b0\u73b0\u6709\u7248\u672c",children:"\u66f4\u65b0\u73b0\u6709\u7248\u672c"}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u5404\u81ea\u7684\u6587\u4ef6\u5939\u4e2d\u7f16\u8f91\u5177\u6709\u7248\u672c\u7684\u6587\u6863\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," \u66f4\u65b0 ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"docs/hello.md"})," \u66f4\u65b0 ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},3660:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var o=s(7294);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);