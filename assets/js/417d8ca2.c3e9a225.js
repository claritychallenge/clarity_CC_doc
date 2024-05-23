/*! For license information please see 417d8ca2.c3e9a225.js.LICENSE.txt */
(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[125],{83130:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(74848),o=n(28453);n(86025),n(28770);const i={id:"cec3_webinar",title:"Recording from launch webinar",sidebar_label:"Webinar recording",sidebar_position:1.1},c=void 0,a={id:"cec3/cec3_webinar",title:"Recording from launch webinar",description:"",source:"@site/docs/cec3/cec3_webinar.mdx",sourceDirName:"cec3",slug:"/cec3/cec3_webinar",permalink:"/docs/cec3/cec3_webinar",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1.1,frontMatter:{id:"cec3_webinar",title:"Recording from launch webinar",sidebar_label:"Webinar recording",sidebar_position:1.1},sidebar:"tutorialSidebar_cec3",previous:{title:"CEC3 Introduction",permalink:"/docs/cec3/cec3_intro"},next:{title:"Important Dates",permalink:"/docs/cec3/cec3_dates"}},l={},u=[];function s(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/e3ofLUFS9dI?si=8nyamm5bZMUVmfwE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s()}},28770:(e,t,n)=>{"use strict";n.d(t,{CU:()=>c});var r=n(96540),o="https://platform.twitter.com/widgets.js",i="createTimeline",c=function(e){var t=r.useRef(null),c=r.useState(!0),a=c[0],l=c[1];return r.useEffect((function(){var r=!0;return n(62491)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");var n=function(){var n,r,o=Object.assign({},e.options);return null!=e&&e.autoHeight&&(o.height=null===(n=t.current)||void 0===n||null===(r=n.parentNode)||void 0===r?void 0:r.offsetHeight),o=Object.assign({},o,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();n=function(t){return t.chrome="",e.noHeader&&(t.chrome=t.chrome+" noheader"),e.noFooter&&(t.chrome=t.chrome+" nofooter"),e.noBorders&&(t.chrome=t.chrome+" noborders"),e.noScrollbar&&(t.chrome=t.chrome+" noscrollbar"),e.transparent&&(t.chrome=t.chrome+" transparent"),t}(n),window.twttr.widgets[i]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==t?void 0:t.current,n).then((function(t){l(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,a&&r.createElement(r.Fragment,null,e.placeholder),r.createElement("div",{ref:t}))}},62491:(e,t,n)=>{var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o=!1,i="push",c="readyState",a="onreadystatechange",l={},u={},s={},d={};function f(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return o;return 1}function m(e,t){f(e,(function(e){return t(e),1}))}function p(t,n,r){t=t[i]?t:[t];var o=n&&n.call,c=o?n:r,a=o?t.join(""):n,w=t.length;function b(e){return e.call?e():l[e]}function g(){if(! --w)for(var e in l[a]=1,c&&c(),s)f(e.split("|"),b)&&!m(s[e],b)&&(s[e]=[])}return setTimeout((function(){m(t,(function t(n,r){return null===n?g():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(a&&(u[a]=1),2==d[n]?g():setTimeout((function(){t(n,!0)}),0)):(d[n]=1,a&&(u[a]=1),void h(n,g)))}))}),0),p}function h(e,o){var i,l=n.createElement("script");l.onload=l.onerror=l[a]=function(){l[c]&&!/^c|loade/.test(l[c])||i||(l.onload=l[a]=null,i=1,d[e]=2,o())},l.async=1,l.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(l,r.lastChild)}return p.get=h,p.order=function(e,t,n){!function r(o){o=e.shift(),e.length?p(o,r):p(o,t,n)}()},p.path=function(t){e=t},p.urlArgs=function(e){t=e},p.ready=function(e,t,n){e=e[i]?e:[e];var r,o=[];return!m(e,(function(e){l[e]||o[i](e)}))&&f(e,(function(e){return l[e]}))?t():(r=e.join("|"),s[r]=s[r]||[],s[r][i](t),n&&n(o)),p},p.done=function(e){p([null],e)},p},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);