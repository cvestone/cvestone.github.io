"use strict";(self.webpackChunkstonebase=self.webpackChunkstonebase||[]).push([[6755],{897:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(5893),t=s(1151);const i={sidebar_position:2},c="\u7ffb\u8bd1\u4f60\u7684\u7ad9\u70b9",o={id:"tutorial-extras/translate-your-site",title:"\u7ffb\u8bd1\u4f60\u7684\u7ad9\u70b9",description:"\u8ba9\u6211\u4eec\u5c06 docs/intro.md \u7ffb\u8bd1\u6210\u6cd5\u8bed\u3002",source:"@site/docs/tutorial-extras/translate-your-site.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/translate-your-site",permalink:"/docs/tutorial-extras/translate-your-site",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u6587\u6863\u7248\u672c",permalink:"/docs/tutorial-extras/manage-docs-versions"},next:{title:"\u7ea2\u961f",permalink:"/docs/\u7ea2\u961f"}},d={},a=[{value:"\u914d\u7f6e\u56fd\u9645\u5316",id:"\u914d\u7f6e\u56fd\u9645\u5316",level:2},{value:"\u7ffb\u8bd1\u6587\u6863",id:"\u7ffb\u8bd1\u6587\u6863",level:2},{value:"\u542f\u52a8\u672c\u5730\u5316\u7ad9\u70b9",id:"\u542f\u52a8\u672c\u5730\u5316\u7ad9\u70b9",level:2},{value:"\u6dfb\u52a0\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355",id:"\u6dfb\u52a0\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355",level:2},{value:"\u6784\u5efa\u672c\u5730\u5316\u7ad9\u70b9",id:"\u6784\u5efa\u672c\u5730\u5316\u7ad9\u70b9",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u7ffb\u8bd1\u4f60\u7684\u7ad9\u70b9",children:"\u7ffb\u8bd1\u4f60\u7684\u7ad9\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u5c06 ",(0,r.jsx)(n.code,{children:"docs/intro.md"})," \u7ffb\u8bd1\u6210\u6cd5\u8bed\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u56fd\u9645\u5316",children:"\u914d\u7f6e\u56fd\u9645\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," \u6587\u4ef6\uff0c\u6dfb\u52a0\u5bf9 ",(0,r.jsx)(n.code,{children:"fr"})," \u8bed\u8a00\u73af\u5883\u7684\u652f\u6301\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7ffb\u8bd1\u6587\u6863",children:"\u7ffb\u8bd1\u6587\u6863"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06 ",(0,r.jsx)(n.code,{children:"docs/intro.md"})," \u6587\u4ef6\u590d\u5236\u5230 ",(0,r.jsx)(n.code,{children:"i18n/fr"})," \u6587\u4ef6\u5939\u4e2d\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/intro.md"})," \u6587\u4ef6\u4e2d\u8fdb\u884c\u6cd5\u8bed\u7ffb\u8bd1\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u52a8\u672c\u5730\u5316\u7ad9\u70b9",children:"\u542f\u52a8\u672c\u5730\u5316\u7ad9\u70b9"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6cd5\u8bed\u73af\u5883\u4e0b\u542f\u52a8\u4f60\u7684\u7ad9\u70b9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u7684\u672c\u5730\u5316\u7ad9\u70b9\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"http://localhost:3000/fr/",children:"http://localhost:3000/fr/"})," \u8bbf\u95ee\uff0c\u800c\u4e14 ",(0,r.jsx)(n.code,{children:"Getting Started"})," \u9875\u9762\u5df2\u7ecf\u88ab\u7ffb\u8bd1\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u5728\u5f00\u53d1\u4e2d\uff0c\u4f60\u53ea\u80fd\u540c\u65f6\u4f7f\u7528\u4e00\u4e2a\u8bed\u8a00\u73af\u5883\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355",children:"\u6dfb\u52a0\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u5728\u4e0d\u540c\u8bed\u8a00\u4e4b\u95f4\u65e0\u7f1d\u5207\u6362\uff0c\u6dfb\u52a0\u4e00\u4e2a\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," \u6587\u4ef6\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355\u5c06\u51fa\u73b0\u5728\u5bfc\u822a\u680f\u4e2d\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u8bed\u8a00\u9009\u62e9\u4e0b\u62c9\u83dc\u5355",src:s(7568).Z+"",width:"370",height:"302"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6784\u5efa\u672c\u5730\u5316\u7ad9\u70b9",children:"\u6784\u5efa\u672c\u5730\u5316\u7ad9\u70b9"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u7279\u5b9a\u7684\u8bed\u8a00\u73af\u5883\u6784\u5efa\u4f60\u7684\u7ad9\u70b9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build -- --locale fr\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6216\u8005\u4e00\u6b21\u6027\u6784\u5efa\u5305\u542b\u6240\u6709\u8bed\u8a00\u73af\u5883\u7684\u7ad9\u70b9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7568:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var r=s(7294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);