/*! For license information please see 73c72237.2a189bb4.js.LICENSE.txt */
(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[6001],{10563:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=i(74848),a=i(28453),r=i(86025),s=(i(28770),i(40712));const o={id:"cec3_intro",title:"The 3rd Clarity Enhancement Challenge",sidebar_label:"CEC3 Introduction",sidebar_position:1},l=void 0,c={id:"cec3/cec3_intro",title:"The 3rd Clarity Enhancement Challenge",description:"Task 1, 2 and 3 are now live. The eval data is now available obtained the download page and full task descriptions are available on this site. Submission deadline 9th September 2024.",source:"@site/docs/cec3/cec3_intro.mdx",sourceDirName:"cec3",slug:"/cec3/cec3_intro",permalink:"/docs/cec3/cec3_intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cec3_intro",title:"The 3rd Clarity Enhancement Challenge",sidebar_label:"CEC3 Introduction",sidebar_position:1},sidebar:"tutorialSidebar_cec3",next:{title:"Webinar recording",permalink:"/docs/cec3/cec3_webinar"}},d={},h=[{value:"Overview of challenge",id:"overview-of-challenge",level:2},{value:"Task 1: Real ambisonic room impulse responses \ud83d\udd25\ud83d\udd25\ud83d\udd25",id:"task-1-real-ambisonic-room-impulse-responses-firefirefire",level:3},{value:"Task 2: Real hearing aid signals \ud83d\udd25\ud83d\udd25\ud83d\udd25",id:"task-2-real-hearing-aid-signals-firefirefire",level:3},{value:"Task 3: Real dynamic backgrounds \ud83d\udd25\ud83d\udd25\ud83d\udd25",id:"task-3-real-dynamic-backgrounds-firefirefire",level:3},{value:"All tasks",id:"all-tasks",level:3}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"All tasks are now live! \ud83d\udd25\ud83d\udd25\ud83d\udd25",type:"info",children:(0,t.jsxs)(n.p,{children:["Task 1, 2 and 3 are now live. The eval data is now available obtained the ",(0,t.jsx)(n.a,{href:"./cec3_download",children:"download page"})," and full task descriptions are available on this site. Submission deadline 9th September 2024."]})}),"\n",(0,t.jsx)(n.p,{children:"The third Clarity Enhancement Challenge (CEC3) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them and use them enough. A major reason for low uptake is the perception that hearing aids perform poorly."}),"\n",(0,t.jsx)(n.h2,{id:"overview-of-challenge",children:"Overview of challenge"}),"\n",(0,t.jsx)(n.p,{children:"The challenge provides participants with hearing aid input signals representing scenes containing a target speaker. Participants are asked to process the signals to provide hearing aid output signals that will be intelligible to hearing-impaired listeners. The challenge is evaluated using standard objective speech intelligibility metrics but also with listening tests with hearing-impaired listeners."}),"\n",(0,t.jsxs)(n.p,{children:["The challenge is formed of three enhancement tasks that add realism to the fully simulated scenes used in the previous ",(0,t.jsx)(n.a,{href:"../cec2/cec2_intro",children:"2nd Clarity Enhancement Challenge"}),". Participants are welcome to submit to one or more tasks. We are particularly interested in systems that handle all three cases with little or no redesign/retraining. Further details of the tasks are presented below."]}),"\n",(0,t.jsxs)(n.h3,{id:"task-1-real-ambisonic-room-impulse-responses-firefirefire",children:["Task 1: Real ambisonic room impulse responses ","\ud83d\udd25","\ud83d\udd25","\ud83d\udd25"]}),"\n",(0,t.jsxs)("figure",{id:"fig1",children:[(0,t.jsx)("img",{width:"400",src:(0,r.Ay)("/img/ICASSP2023/scenario.png")}),(0,t.jsx)("figcaption",{children:"Fig 1. The scenario for tasks 1 and 2 is a listener with hearing loss and wearing hearing aids, listening to a talker in a domestic environment with common sources of unwanted sound."})]}),"\n",(0,t.jsx)(n.p,{children:"In the previous CEC1 and CEC2 challenges, hearing aid input signals were simulated using pre-recorded audio sources mixed with simulated room impulse responses. These simulated responses were then used to make training and evaluation data. In this first task, we are rerunning the CEC2 scenario, but with a new evaluation set that uses real impulse responses measured with an ambisonic microphone array in a real room. We are interested in how well systems that are trained on simulated data can generalise to this new evaluation set."}),"\n",(0,t.jsx)(s.A,{variant:"outlined",href:"./task_1/cec3_task1_overview",children:"Task 1 Details..."}),"\n",(0,t.jsxs)(n.h3,{id:"task-2-real-hearing-aid-signals-firefirefire",children:["Task 2: Real hearing aid signals ","\ud83d\udd25","\ud83d\udd25","\ud83d\udd25"]}),"\n",(0,t.jsx)(n.p,{children:"In all previous Clarity challenges, hearing aid input signals are simulated using room impulse responses and head-related transfer function. In this task, we provide participants with real microphone signals. We have recorded scenes using microphones on a behind-the-ear hearing-aid worn by a real listener attending to a target speaker. The scenario closely follows CEC2, i.e. the same noise interferers, etc, but the data is more challenging because it includes real room acoustics, real head movements and real microphone characteristics. A matched training set has been provided and we are interested in how well systems can cope with the inherently more complex data. Ground truth head motion data is also provided and we are interested in whether systems can exploit this information."}),"\n",(0,t.jsx)(s.A,{variant:"outlined",href:"./task_2/cec3_task2_overview",children:"Task 2 Details..."}),"\n",(0,t.jsxs)(n.h3,{id:"task-3-real-dynamic-backgrounds-firefirefire",children:["Task 3: Real dynamic backgrounds ","\ud83d\udd25","\ud83d\udd25","\ud83d\udd25"]}),"\n",(0,t.jsxs)("figure",{id:"fig2",children:[(0,t.jsx)("img",{width:"400",src:(0,r.Ay)("/img/CEC3/task3_railway_scenario_CEC3_smaller.png")}),(0,t.jsx)("figcaption",{children:"Fig 2. Task 3 is a scenario with dynamic background noise, including recordings at a railway station (with trains!)."})]}),"\n",(0,t.jsx)(n.p,{children:"In all previous Clarity challenges, the interfering signals have been static and carefully controlled. In this task, we will use naturally occurring, dynamic noise backgrounds. We are collecting a dataset of 64-channel ambisonic audio recordings from settings that hearing-impaired listeners find challenging. These include train stations, roadsides and large social gatherings (i.e., the 'cocktail party' scenario). Using these recordings and measured impulse responses, we will create a dataset of hearing aid input signals feature target sentences in dynamic background noise."}),"\n",(0,t.jsx)(s.A,{variant:"outlined",href:"./task_3/cec3_task3_overview",children:"Task 3 Details..."}),"\n",(0,t.jsx)(n.h3,{id:"all-tasks",children:"All tasks"}),"\n",(0,t.jsx)(n.p,{children:"For all tasks, we will be providing standard training, development and evaluation datasets. The training and development datasets will be released at the start of the challenge. The evaluation dataset will be released shortly before the submission deadline without reference signals. Participants will then be asked to submit their processed signals for remote evaluation."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),", if you are interested in participating, please sign up to our ",(0,t.jsx)(n.a,{href:"https://groups.google.com/g/clarity-challenge",children:"Clarity Challenge\u2019s Google group"})," so that we can keep you posted on the latest developments."]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28770:(e,n,i)=>{"use strict";i.d(n,{CU:()=>s});var t=i(96540),a="https://platform.twitter.com/widgets.js",r="createTimeline",s=function(e){var n=t.useRef(null),s=t.useState(!0),o=s[0],l=s[1];return t.useEffect((function(){var t=!0;return i(62491)(a,"twitter-embed",(function(){if(window.twttr){if(t){if(!window.twttr.widgets[r])return void console.error("Method "+r+" is not present anymore in twttr.widget api");var i=function(){var i,t,a=Object.assign({},e.options);return null!=e&&e.autoHeight&&(a.height=null===(i=n.current)||void 0===i||null===(t=i.parentNode)||void 0===t?void 0:t.offsetHeight),a=Object.assign({},a,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();i=function(n){return n.chrome="",e.noHeader&&(n.chrome=n.chrome+" noheader"),e.noFooter&&(n.chrome=n.chrome+" nofooter"),e.noBorders&&(n.chrome=n.chrome+" noborders"),e.noScrollbar&&(n.chrome=n.chrome+" noscrollbar"),e.transparent&&(n.chrome=n.chrome+" transparent"),n}(i),window.twttr.widgets[r]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==n?void 0:n.current,i).then((function(n){l(!1),e.onLoad&&e.onLoad(n)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){t=!1}}),[]),t.createElement(t.Fragment,null,o&&t.createElement(t.Fragment,null,e.placeholder),t.createElement("div",{ref:n}))}},62491:(e,n,i)=>{var t,a,r;r=function(){var e,n,i=document,t=i.getElementsByTagName("head")[0],a=!1,r="push",s="readyState",o="onreadystatechange",l={},c={},d={},h={};function u(e,n){for(var i=0,t=e.length;i<t;++i)if(!n(e[i]))return a;return 1}function g(e,n){u(e,(function(e){return n(e),1}))}function m(n,i,t){n=n[r]?n:[n];var a=i&&i.call,s=a?i:t,o=a?n.join(""):i,f=n.length;function v(e){return e.call?e():l[e]}function w(){if(! --f)for(var e in l[o]=1,s&&s(),d)u(e.split("|"),v)&&!g(d[e],v)&&(d[e]=[])}return setTimeout((function(){g(n,(function n(i,t){return null===i?w():(t||/^https?:\/\//.test(i)||!e||(i=-1===i.indexOf(".js")?e+i+".js":e+i),h[i]?(o&&(c[o]=1),2==h[i]?w():setTimeout((function(){n(i,!0)}),0)):(h[i]=1,o&&(c[o]=1),void p(i,w)))}))}),0),m}function p(e,a){var r,l=i.createElement("script");l.onload=l.onerror=l[o]=function(){l[s]&&!/^c|loade/.test(l[s])||r||(l.onload=l[o]=null,r=1,h[e]=2,a())},l.async=1,l.src=n?e+(-1===e.indexOf("?")?"?":"&")+n:e,t.insertBefore(l,t.lastChild)}return m.get=p,m.order=function(e,n,i){!function t(a){a=e.shift(),e.length?m(a,t):m(a,n,i)}()},m.path=function(n){e=n},m.urlArgs=function(e){n=e},m.ready=function(e,n,i){e=e[r]?e:[e];var t,a=[];return!g(e,(function(e){l[e]||a[r](e)}))&&u(e,(function(e){return l[e]}))?n():(t=e.join("|"),d[t]=d[t]||[],d[t][r](n),i&&i(a)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=r():void 0===(a="function"==typeof(t=r)?t.call(n,i,n,e):t)||(e.exports=a)},28453:(e,n,i)=>{"use strict";i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);