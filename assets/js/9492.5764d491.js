"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[9492],{2614:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(87462),o=t(63366),i=t(67294);function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const s=function(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r};var c=t(62030),l=t(86523),u=t(39707),d=t(79718),m=t(85893);const p=["className","component"];var f=t(37078),h=t(44551),v=t(10606);const g=(0,t(1588).Z)("MuiBox",["root"]),w=(0,h.Z)(),S=function(e={}){const{themeId:n,defaultTheme:t,defaultClassName:a="MuiBox-root",generateClassName:f}=e,h=(0,c.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z);return i.forwardRef((function(e,i){const c=(0,d.Z)(t),l=(0,u.Z)(e),{className:v,component:g="div"}=l,w=(0,o.Z)(l,p);return(0,m.jsx)(h,(0,r.Z)({as:g,ref:i,className:s(v,f?f(a):a),theme:n&&c[n]||c},w))}))}({themeId:v.Z,defaultTheme:w,defaultClassName:g.root,generateClassName:f.Z.generate}),x=S},41181:(e,n,t)=>{t.d(n,{ZP:()=>M});var r=t(63366),o=t(87462),i=t(67294),a=t(63961),s=t(95408),c=t(39707),l=t(94780),u=t(11496),d=t(27623),m=t(79718),p=t(90247),f=t(10606);const h=i.createContext();var v=t(1588),g=t(34867);function w(e){return(0,g.ZP)("MuiGrid",e)}const S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...S.map((e=>`grid-xs-${e}`)),...S.map((e=>`grid-sm-${e}`)),...S.map((e=>`grid-md-${e}`)),...S.map((e=>`grid-lg-${e}`)),...S.map((e=>`grid-xl-${e}`))]);var b=t(85893);const Z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function $({breakpoints:e,values:n}){let t="";Object.keys(n).forEach((e=>{""===t&&0!==n[e]&&(t=e)}));const r=Object.keys(e).sort(((n,t)=>e[n]-e[t]));return r.slice(0,r.indexOf(t))}const k=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{container:r,direction:o,item:i,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:l}=t;let u=[];r&&(u=function(e,n,t={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t[`spacing-xs-${String(e)}`]];const r=[];return n.forEach((n=>{const o=e[n];Number(o)>0&&r.push(t[`spacing-${n}-${String(o)}`])})),r}(a,l,n));const d=[];return l.forEach((e=>{const r=t[e];r&&d.push(n[`grid-${e}-${String(r)}`])})),[n.root,r&&n.container,i&&n.item,c&&n.zeroMinWidth,...u,"row"!==o&&n[`direction-xs-${String(o)}`],"wrap"!==s&&n[`wrap-xs-${String(s)}`],...d]}})((({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:n}){const t=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},t,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${x.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:t,rowSpacing:r}=n;let o={};if(t&&0!==r){const n=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});let t;"object"==typeof n&&(t=$({breakpoints:e.breakpoints.values,values:n})),o=(0,s.k9)({theme:e},n,((n,r)=>{var o;const i=e.spacing(n);return"0px"!==i?{marginTop:`-${y(i)}`,[`& > .${x.item}`]:{paddingTop:y(i)}}:null!=(o=t)&&o.includes(r)?{}:{marginTop:0,[`& > .${x.item}`]:{paddingTop:0}}}))}return o}),(function({theme:e,ownerState:n}){const{container:t,columnSpacing:r}=n;let o={};if(t&&0!==r){const n=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});let t;"object"==typeof n&&(t=$({breakpoints:e.breakpoints.values,values:n})),o=(0,s.k9)({theme:e},n,((n,r)=>{var o;const i=e.spacing(n);return"0px"!==i?{width:`calc(100% + ${y(i)})`,marginLeft:`-${y(i)}`,[`& > .${x.item}`]:{paddingLeft:y(i)}}:null!=(o=t)&&o.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${x.item}`]:{paddingLeft:0}}}))}return o}),(function({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce(((r,i)=>{let a={};if(n[i]&&(t=n[i]),!t)return r;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:n.columns,breakpoints:e.breakpoints.values}),l="object"==typeof c?c[i]:c;if(null==l)return r;const u=Math.round(t/l*1e8)/1e6+"%";let d={};if(n.container&&n.item&&0!==n.columnSpacing){const t=e.spacing(n.columnSpacing);if("0px"!==t){const e=`calc(${u} + ${y(t)})`;d={flexBasis:e,maxWidth:e}}}a=(0,o.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===e.breakpoints.values[i]?Object.assign(r,a):r[e.breakpoints.up(i)]=a,r}),{})}));const N=e=>{const{classes:n,container:t,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let u=[];t&&(u=function(e,n){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const t=[];return n.forEach((n=>{const r=e[n];if(Number(r)>0){const e=`spacing-${n}-${String(r)}`;t.push(e)}})),t}(i,c));const d=[];c.forEach((n=>{const t=e[n];t&&d.push(`grid-${n}-${String(t)}`)}));const m={root:["root",t&&"container",o&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...d]};return(0,l.Z)(m,w,n)},z=i.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=function(){const e=(0,m.Z)(p.Z);return e[f.Z]||e}(),l=(0,c.Z)(t),{className:u,columns:v,columnSpacing:g,component:w="div",container:S=!1,direction:x="row",item:y=!1,rowSpacing:$,spacing:z=0,wrap:M="wrap",zeroMinWidth:E=!1}=l,W=(0,r.Z)(l,Z),R=$||z,C=g||z,B=i.useContext(h),P=S?v||12:B,T={},j=(0,o.Z)({},W);s.keys.forEach((e=>{null!=W[e]&&(T[e]=W[e],delete j[e])}));const L=(0,o.Z)({},l,{columns:P,container:S,direction:x,item:y,rowSpacing:R,columnSpacing:C,wrap:M,zeroMinWidth:E,spacing:z},T,{breakpoints:s.keys}),I=N(L);return(0,b.jsx)(h.Provider,{value:P,children:(0,b.jsx)(k,(0,o.Z)({ownerState:L,className:(0,a.Z)(I.root,u),as:w,ref:n},j))})}));const M=z},88169:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(87462),o=t(67294),i=t(63366),a=t(63961),s=t(94780),c=t(98216),l=t(27623),u=t(11496),d=t(1588),m=t(34867);function p(e){return(0,m.ZP)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=t(85893);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n[`color${(0,c.Z)(t.color)}`],n[`fontSize${(0,c.Z)(t.fontSize)}`]]}})((({theme:e,ownerState:n})=>{var t,r,o,i,a,s,c,l,u,d,m,p,f;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(r=t.create)?void 0:r.call(t,"fill",{duration:null==(o=e.transitions)||null==(o=o.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(l=e.typography)||null==(u=l.pxToRem)?void 0:u.call(l,35))||"2.1875rem"}[n.fontSize],color:null!=(d=null==(m=(e.vars||e).palette)||null==(m=m[n.color])?void 0:m.main)?d:{action:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.active,disabled:null==(f=(e.vars||e).palette)||null==(f=f.action)?void 0:f.disabled,inherit:void 0}[n.color]}})),g=o.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiSvgIcon"}),{children:u,className:d,color:m="inherit",component:g="svg",fontSize:w="medium",htmlColor:S,inheritViewBox:x=!1,titleAccess:b,viewBox:Z="0 0 24 24"}=t,y=(0,i.Z)(t,h),$=o.isValidElement(u)&&"svg"===u.type,k=(0,r.Z)({},t,{color:m,component:g,fontSize:w,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:Z,hasSvgAsChild:$}),N={};x||(N.viewBox=Z);const z=(e=>{const{color:n,fontSize:t,classes:r}=e,o={root:["root","inherit"!==n&&`color${(0,c.Z)(n)}`,`fontSize${(0,c.Z)(t)}`]};return(0,s.Z)(o,p,r)})(k);return(0,f.jsxs)(v,(0,r.Z)({as:g,className:(0,a.Z)(z.root,d),focusable:"false",color:S,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:n},N,y,$&&u.props,{ownerState:k,children:[$?u.props.children:u,b?(0,f.jsx)("title",{children:b}):null]}))}));g.muiName="SvgIcon";const w=g;function S(e,n){function t(t,o){return(0,f.jsx)(w,(0,r.Z)({"data-testid":`${n}Icon`,ref:o},t,{children:e}))}return t.muiName=w.muiName,o.memo(o.forwardRef(t))}},798:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),o=t(73546);const i=function(e){const n=r.useRef(e);return(0,o.Z)((()=>{n.current=e})),r.useRef(((...e)=>(0,n.current)(...e))).current}},11467:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),o=t(7960);const i=function(...e){return r.useMemo((()=>e.every((e=>null==e))?null:n=>{e.forEach((e=>{(0,o.Z)(e,n)}))}),e)}},18791:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(67294);let o,i=!0,a=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function l(){i=!1}function u(){"hidden"===this.visibilityState&&a&&(i=!0)}function d(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch(t){}return i||function(e){const{type:n,tagName:t}=e;return!("INPUT"!==t||!s[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}const m=function(){const e=r.useCallback((e=>{var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",l,!0),n.addEventListener("pointerdown",l,!0),n.addEventListener("touchstart",l,!0),n.addEventListener("visibilitychange",u,!0))}),[]),n=r.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!d(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(a=!0,window.clearTimeout(o),o=window.setTimeout((()=>{a=!1}),100),n.current=!1,!0)},ref:e}}},7960:(e,n,t)=>{function r(e,n){"function"==typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:()=>r})},73546:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect}}]);