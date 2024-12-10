"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[5620],{67733:(e,t,a)=>{a.d(t,{A:()=>y});var r=a(58168),n=a(98587),o=a(96540),i=a(34164),s=a(72911),l=a(33571),c=a(39599),u=a(43049),h=a(74848);const d=["className","component"];var m=a(79071),p=a(33997),v=a(58312);const g=(0,a(38413).A)("MuiBox",["root"]),f=(0,p.A)(),A=function(e={}){const{themeId:t,defaultTheme:a,defaultClassName:m="MuiBox-root",generateClassName:p}=e,v=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.A);return o.forwardRef((function(e,o){const s=(0,u.A)(a),l=(0,c.A)(e),{className:g,component:f="div"}=l,A=(0,n.A)(l,d);return(0,h.jsx)(v,(0,r.A)({as:f,ref:o,className:(0,i.A)(g,p?p(m):m),theme:t&&s[t]||s},A))}))}({themeId:v.A,defaultTheme:f,defaultClassName:g.root,generateClassName:m.A.generate}),y=A},57416:(e,t,a)=>{a.d(t,{A:()=>A});var r=a(98587),n=a(58168),o=a(96540),i=a(34164),s=a(75659),l=a(771),c=a(11848);const u=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var h=a(46126),d=a(38413),m=a(31609);function p(e){return(0,m.Ay)("MuiPaper",e)}(0,d.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=a(74848);const g=["className","component","elevation","square","variant"],f=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t[`elevation${a.elevation}`]]}})((({theme:e,ownerState:t})=>{var a;return(0,n.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.A)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.X4)("#fff",u(t.elevation))}, ${(0,l.X4)("#fff",u(t.elevation))})`},e.vars&&{backgroundImage:null==(a=e.vars.overlays)?void 0:a[t.elevation]}))})),A=o.forwardRef((function(e,t){const a=(0,h.b)({props:e,name:"MuiPaper"}),{className:o,component:l="div",elevation:c=1,square:u=!1,variant:d="elevation"}=a,m=(0,r.A)(a,g),A=(0,n.A)({},a,{component:l,elevation:c,square:u,variant:d}),y=(e=>{const{square:t,elevation:a,variant:r,classes:n}=e,o={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${a}`]};return(0,s.A)(o,p,n)})(A);return(0,v.jsx)(f,(0,n.A)({as:l,ownerState:A,className:(0,i.A)(y.root,o),ref:t},m))}))},47859:(e,t,a)=>{a.d(t,{A:()=>b});var r=a(98587),n=a(58168),o=a(96540),i=a(34164),s=a(39599),l=a(75659),c=a(11848),u=a(46126),h=a(28466),d=a(38413),m=a(31609);function p(e){return(0,m.Ay)("MuiTypography",e)}(0,d.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=a(74848);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,h.A)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.A)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),A={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=o.forwardRef((function(e,t){const a=(0,u.b)({props:e,name:"MuiTypography"}),o=(e=>y[e]||e)(a.color),c=(0,s.A)((0,n.A)({},a,{color:o})),{align:d="inherit",className:m,component:b,gutterBottom:x=!1,noWrap:j=!1,paragraph:w=!1,variant:N="body1",variantMapping:C=A}=c,M=(0,r.A)(c,g),k=(0,n.A)({},c,{align:d,color:o,className:m,component:b,gutterBottom:x,noWrap:j,paragraph:w,variant:N,variantMapping:C}),B=b||(w?"p":C[N]||A[N])||"span",q=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,h.A)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,l.A)(s,p,i)})(k);return(0,v.jsx)(f,(0,n.A)({as:B,ref:t,ownerState:k,className:(0,i.A)(q.root,m)},M))}))},28466:(e,t,a)=>{a.d(t,{A:()=>r});const r=a(13967).A},43049:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(51264),n=a(96540),o=a(24684);const i=function(e=null){const t=n.useContext(o.T);return t&&(a=t,0!==Object.keys(a).length)?t:e;var a},s=(0,r.A)();const l=function(e=s){return i(e)}},3616:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(96540);var r=a(34164),n=a(24837),o=a(44586),i=a(65648),s=a(67733),l=a(57416),c=a(47859),u=(a(41873),a(74848));function h(){const{siteConfig:e}=(0,o.A)();return(0,u.jsxs)("header",{className:(0,r.A)("hero hero--primary",i.A.heroBanner),children:[(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h1",{className:"hero__title",children:" The Clarity Project "})," ",(0,u.jsx)("p",{className:"hero__subtitle",children:" Contact Us "})," ",(0,u.jsx)("div",{className:i.A.buttons,children:" "})," "]})," "]})}function d(){const{siteConfig:e}=(0,o.A)();return(0,u.jsxs)(n.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,u.jsxs)("main",{children:[(0,u.jsx)(h,{}),(0,u.jsxs)(s.A,{sx:{p:6},children:[(0,u.jsx)("h2",{children:"Contact Us"}),(0,u.jsx)("p",{children:(0,u.jsx)(c.A,{variant:"h6",children:"Please feel free to contact us. We are always keen to receive input and feedback from the community."})}),(0,u.jsxs)(l.A,{sx:{p:2,m:4},children:[(0,u.jsx)("h3",{children:"General enquiries"}),"For general enquiries about the project or our future plans please email us via"," ",(0,u.jsx)("a",{href:"mailto:claritychallengecontact@gmail.com",children:"claritychallengecontact@gmail.com"})]}),(0,u.jsxs)(l.A,{sx:{p:2,m:4},children:[(0,u.jsx)("h3",{children:"For questions about the current challenge"}),"If you have questions about the current challenge (e.g., uncertainty about the rules) please consider posting the question on our"," ",(0,u.jsx)("a",{href:"https://groups.google.com/g/clarity-challenge",children:"Clarity Challenge Google group"}),"."]}),(0,u.jsxs)(l.A,{sx:{p:2,m:4},children:[(0,u.jsx)("h3",{children:"Reporting software issues"}),"For issues relating the the Clarity software please consider raising an 'issue' on our"," ",(0,u.jsx)("a",{href:"https://github.com/claritychallenge/clarity",children:"Clarity software GitHub site"}),". We are also happy for people to use the GitHub issues to raise feature requests."]}),(0,u.jsxs)(l.A,{sx:{p:2,m:4},children:[(0,u.jsx)("h3",{children:"Contacting individual team members"}),"If you wish to contact a specific team member you will find individual contact details via the links on our"," ",(0,u.jsx)("a",{href:"../about",children:"'About Us'"})," page"]})]})]})," "]})}},65648:(e,t,a)=>{a.d(t,{A:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},41873:(e,t,a)=>{a.d(t,{K:()=>i});var r=a(96540),n=a(43083);const o="light";const i=({chart:e,config:t})=>{if("undefined"==typeof window)return r.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const a=(0,r.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),i=document.querySelector("html"),[s,l]=(0,r.useState)(!1),c=(0,r.useMemo)((()=>function(e,t){let a=e.getAttribute("data-theme")??o;a!==o&&"dark"!==a&&(a=o);const r=a===o?"default":"dark";return t?.theme?.[a]??t?.mermaid?.theme??r}(i,a)),[a,s]);return(0,r.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){l((e=>!e));break}}));return e.observe(i,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,r.useEffect)((()=>{a&&(a.mermaid?n.A.initialize({startOnLoad:!0,...a.mermaid,theme:c}):n.A.initialize({startOnLoad:!0,theme:c}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),n.A.contentLoaded())}),[a,c]),(0,r.useEffect)((()=>{setTimeout(n.A.contentLoaded,0)}),[e]),r.createElement("div",{className:"mermaid","data-mermaid-src":e},e)}}}]);