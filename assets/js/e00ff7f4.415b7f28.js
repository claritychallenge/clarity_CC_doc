/*! For license information please see e00ff7f4.415b7f28.js.LICENSE.txt */
(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[2041],{58098:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=i(74848),r=i(28453);i(86025),i(28770);const o={id:"icassp2023_intro",title:"The ICASSP 2023 Clarity Challenge",sidebar_label:"ICASSP 2023 Introduction",sidebar_position:1},a=void 0,s={id:"icassp2023/icassp2023_intro",title:"The ICASSP 2023 Clarity Challenge",description:"The Clarity ICASSP 2023 Challenge is now closed. Outcomes will be presented at ICASSP in June.",source:"@site/docs/icassp2023/icassp2023_intro.mdx",sourceDirName:"icassp2023",slug:"/icassp2023/icassp2023_intro",permalink:"/docs/icassp2023/icassp2023_intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"icassp2023_intro",title:"The ICASSP 2023 Clarity Challenge",sidebar_label:"ICASSP 2023 Introduction",sidebar_position:1},sidebar:"tutorialSidebar_icassp2023",next:{title:"Important Dates",permalink:"/docs/icassp2023/icassp2023_dates"}},l={},c=[{value:"Organisers",id:"organisers",level:2},{value:"Overview of challenge",id:"overview-of-challenge",level:2},{value:"What is be provided",id:"what-is-be-provided",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The Clarity ICASSP 2023 Challenge is now closed. Outcomes will be presented at ICASSP in June."}),(0,t.jsxs)(n.p,{children:["For details of information on forthcoming challenge see ",(0,t.jsx)("b",{children:(0,t.jsx)("a",{href:"https://claritychallenge.org/timeline",children:"here"})}),"."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Evaluation data now available! ",(0,t.jsx)(n.a,{href:"https://www.myairbridge.com/en/#!/folder/EkthOZZeBW33aaDBWSDadTgpOkbgaFxO",children:"Download Now"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"This ICASSP SP Clarity Challenge (Speech Enhancement for Hearing Aids) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them. A major reason for low uptake and use is the perception that hearing aids perform poorly."}),"\n",(0,t.jsx)("p",{}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pEhci66Lr28",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,t.jsx)(n.h2,{id:"organisers",children:"Organisers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Michael Akeroyd, Graham Naylor, ",(0,t.jsx)(n.strong,{children:"University of Nottingham"})]}),"\n",(0,t.jsxs)(n.li,{children:["Jon Barker, Will Bailey, Zehai Tu, ",(0,t.jsx)(n.strong,{children:"University of Sheffield"})]}),"\n",(0,t.jsxs)(n.li,{children:["Trevor Cox, Simone Graetzer, ",(0,t.jsx)(n.strong,{children:"University of Salford"})]}),"\n",(0,t.jsxs)(n.li,{children:["John Culling, ",(0,t.jsx)(n.strong,{children:"Cardiff University"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"overview-of-challenge",children:"Overview of challenge"}),"\n",(0,t.jsx)(n.p,{children:"Speech enhancement is a major research area with thousands of papers each year, yet only a tiny percentage of these explicitly consider improvements for listeners who have a hearing loss. Consequently, this signal processing challenge is designed to get the latest advancements in speech enhancement applied to hearing aids."}),"\n",(0,t.jsx)(n.p,{children:"Entrants are tasked to enhance speech-in-noise for input into a hearing aid amplification stage. The hearing aid will be tuned to the hearing characteristics of particular people. Thus you can enter without in-depth knowledge of hearing aids, and just concentrate on the task of de-noising."}),"\n",(0,t.jsx)(n.p,{children:"The scenario is listening to speech in the presence of typical domestic noise. We provide the signals captured by the microphones on a pair of behind-the-ear hearing aids and those captured at the eardrum. The target speech will be a short sentence. The interfering noises will be a mix of speech, domestic appliance noise and music. The audio includes the simulation of the acoustic of typical small living rooms."}),"\n",(0,t.jsx)(n.p,{children:"The challenge is to improve the speech intelligibility without excessive loss of quality. To this end, entries will be evaluated using an objective metric that is an average of the Hearing Aid Speech Perception Index (HASPI) and Hearing Aid Speech Quality Index (HASQI)."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-be-provided",children:"What is be provided"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Premixed speech + interferer scenes for training and evaluation."}),"\n",(0,t.jsx)(n.li,{children:"Databases of target sentences, along with speech, noise and music interferers."}),"\n",(0,t.jsx)(n.li,{children:"Listener characteristics, including audiograms and speech-in-noise testing."}),"\n",(0,t.jsx)(n.li,{children:"Software including tools for augmenting training data, a baseline enhancement system, a fixed hearing aid implementation and code for scoring signals using the HASPI and HASQI hearing aid metrics."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The scenario is similar to the second ",(0,t.jsx)(n.a,{href:"../cec2/cec2_intro",children:"Clarity Enhancement Challenge"})," but with the following key differences:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Participants are asked to focus on speech enhancement only. Hearing aid processing/simulation is not part of the challenge"}),"\n",(0,t.jsx)(n.li,{children:"Speech quality (HASQI) will be assessed in conjunction with speech intelligibility (HASPI)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This site provides access to all the software, data and information that you need to get started."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28770:(e,n,i)=>{"use strict";i.d(n,{CU:()=>a});var t=i(96540),r="https://platform.twitter.com/widgets.js",o="createTimeline",a=function(e){var n=t.useRef(null),a=t.useState(!0),s=a[0],l=a[1];return t.useEffect((function(){var t=!0;return i(62491)(r,"twitter-embed",(function(){if(window.twttr){if(t){if(!window.twttr.widgets[o])return void console.error("Method "+o+" is not present anymore in twttr.widget api");var i=function(){var i,t,r=Object.assign({},e.options);return null!=e&&e.autoHeight&&(r.height=null===(i=n.current)||void 0===i||null===(t=i.parentNode)||void 0===t?void 0:t.offsetHeight),r=Object.assign({},r,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();i=function(n){return n.chrome="",e.noHeader&&(n.chrome=n.chrome+" noheader"),e.noFooter&&(n.chrome=n.chrome+" nofooter"),e.noBorders&&(n.chrome=n.chrome+" noborders"),e.noScrollbar&&(n.chrome=n.chrome+" noscrollbar"),e.transparent&&(n.chrome=n.chrome+" transparent"),n}(i),window.twttr.widgets[o]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==n?void 0:n.current,i).then((function(n){l(!1),e.onLoad&&e.onLoad(n)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){t=!1}}),[]),t.createElement(t.Fragment,null,s&&t.createElement(t.Fragment,null,e.placeholder),t.createElement("div",{ref:n}))}},62491:(e,n,i)=>{var t,r,o;o=function(){var e,n,i=document,t=i.getElementsByTagName("head")[0],r=!1,o="push",a="readyState",s="onreadystatechange",l={},c={},d={},h={};function u(e,n){for(var i=0,t=e.length;i<t;++i)if(!n(e[i]))return r;return 1}function p(e,n){u(e,(function(e){return n(e),1}))}function f(n,i,t){n=n[o]?n:[n];var r=i&&i.call,a=r?i:t,s=r?n.join(""):i,m=n.length;function v(e){return e.call?e():l[e]}function w(){if(! --m)for(var e in l[s]=1,a&&a(),d)u(e.split("|"),v)&&!p(d[e],v)&&(d[e]=[])}return setTimeout((function(){p(n,(function n(i,t){return null===i?w():(t||/^https?:\/\//.test(i)||!e||(i=-1===i.indexOf(".js")?e+i+".js":e+i),h[i]?(s&&(c[s]=1),2==h[i]?w():setTimeout((function(){n(i,!0)}),0)):(h[i]=1,s&&(c[s]=1),void g(i,w)))}))}),0),f}function g(e,r){var o,l=i.createElement("script");l.onload=l.onerror=l[s]=function(){l[a]&&!/^c|loade/.test(l[a])||o||(l.onload=l[s]=null,o=1,h[e]=2,r())},l.async=1,l.src=n?e+(-1===e.indexOf("?")?"?":"&")+n:e,t.insertBefore(l,t.lastChild)}return f.get=g,f.order=function(e,n,i){!function t(r){r=e.shift(),e.length?f(r,t):f(r,n,i)}()},f.path=function(n){e=n},f.urlArgs=function(e){n=e},f.ready=function(e,n,i){e=e[o]?e:[e];var t,r=[];return!p(e,(function(e){l[e]||r[o](e)}))&&u(e,(function(e){return l[e]}))?n():(t=e.join("|"),d[t]=d[t]||[],d[t][o](n),i&&i(r)),f},f.done=function(e){f([null],e)},f},e.exports?e.exports=o():void 0===(r="function"==typeof(t=o)?t.call(n,i,n,e):t)||(e.exports=r)},28453:(e,n,i)=>{"use strict";i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);