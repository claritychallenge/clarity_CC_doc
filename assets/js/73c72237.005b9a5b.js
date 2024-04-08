/*! For license information please see 73c72237.005b9a5b.js.LICENSE.txt */
(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[6001],{20734:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(74848),a=t(28453),r=(t(86025),t(28770),t(40712));const s={id:"cec3_intro",title:"The 3rd Clarity Enhancement Challenge",sidebar_label:"CEC3 Introduction",sidebar_position:1},o=void 0,l={id:"cec3/cec3_intro",title:"The 3rd Clarity Enhancement Challenge",description:"Task 1 and 2 are now live. The data can be obtained from the download page and full task descriptions are available on this site.Task 3 data will be available from the 1st May.",source:"@site/docs/cec3/cec3_intro.mdx",sourceDirName:"cec3",slug:"/cec3/cec3_intro",permalink:"/docs/cec3/cec3_intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cec3_intro",title:"The 3rd Clarity Enhancement Challenge",sidebar_label:"CEC3 Introduction",sidebar_position:1},sidebar:"tutorialSidebar_cec3",next:{title:"Important Dates",permalink:"/docs/cec3/cec3_dates"}},c={},d=[{value:"Overview of challenge",id:"overview-of-challenge",level:2},{value:"Task 1: Real ambisonic room impulse responses \ud83d\udd25\ud83d\udd25\ud83d\udd25",id:"task-1-real-ambisonic-room-impulse-responses-firefirefire",level:3},{value:"Task 2: Real hearing aid signals \ud83d\udd25\ud83d\udd25\ud83d\udd25",id:"task-2-real-hearing-aid-signals-firefirefire",level:3},{value:"\ud83d\udd1c Task 3: Real dynamic backgrounds (launching 1st May)",id:"-task-3-real-dynamic-backgrounds-launching-1st-may",level:3}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"CEC3 Task1 and Task2 are now live! \ud83d\udd25\ud83d\udd25\ud83d\udd25",type:"info",children:(0,i.jsxs)(n.p,{children:["Task 1 and 2 are now live. The data can be obtained from the ",(0,i.jsx)(n.a,{href:"./cec3_download",children:"download page"})," and full task descriptions are available on this site.Task 3 data will be available from the 1st May."]})}),"\n",(0,i.jsx)(n.p,{children:"The third Clarity Enhancement Challenge (CEC3) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them. A major reason for low uptake and use is the perception that hearing aids perform poorly."}),"\n",(0,i.jsx)(n.h2,{id:"overview-of-challenge",children:"Overview of challenge"}),"\n",(0,i.jsx)(n.p,{children:"The challenge provides participants with hearing aid input signals representing scenes containing a target speaker. Participants are asked to process the signals to provide hearing aid output signals that will be intelligible to hearing-impaired listeners. The challenge is evaluated using standard objective speech intelligibility metrics but also with listening tests with hearing-impaired listeners."}),"\n",(0,i.jsxs)(n.p,{children:["The challenge is formed of three enhancement tasks that add realism to the fully simulated scenes used in the previous ",(0,i.jsx)(n.a,{href:"../cec2/cec2_intro",children:"2nd Clarity Enhancement Challenge"})," in complementary directions. Participants are welcome to submit to one or more tasks. We are particularly interested in systems that handle all three cases with little or no redesign/retraining. Further details of the tasks are presented below."]}),"\n",(0,i.jsxs)(n.h3,{id:"task-1-real-ambisonic-room-impulse-responses-firefirefire",children:["Task 1: Real ambisonic room impulse responses ","\ud83d\udd25","\ud83d\udd25","\ud83d\udd25"]}),"\n",(0,i.jsx)(n.p,{children:"In the previous CEC1 and CEC2 challenges, hearing aid input signals were simulated using pre-recorded audio sources mixed with simulated room impulse responses. These simulated responses were then used to make training and evaluation data. In this first task, we are rerunning the CEC2 scenario, but with a new evaluation set that is using real impulse responses measured using an ambisonic microphone array in a real room. We are interested in how well systems that are trained on simulated data can generalise to this new evaluation set."}),"\n",(0,i.jsx)(r.A,{variant:"outlined",href:"./task_1/cec3_task1_overview",children:"Task 1 Details..."}),"\n",(0,i.jsxs)(n.h3,{id:"task-2-real-hearing-aid-signals-firefirefire",children:["Task 2: Real hearing aid signals ","\ud83d\udd25","\ud83d\udd25","\ud83d\udd25"]}),"\n",(0,i.jsx)(n.p,{children:"In all previous Clarity, hearing aid input signals are simulated using room impulse responses and head-related transfer function. In this task, we provide participants with real microphone signals. We have recorded scenes using real microphones in a hearing-aid configuration worn by a listener attending a target speaker. The scenario closely follows CEC2, i.e. the same noise interferers, etc, but the data is more challenging because it includes real room acoustics, real head movements and real microphone characteristics. A matched training set has been provided and we are interested in how well systems can cope with the inherently more complex data. Ground truth head motion data is also provided and we are interested in whether systems can exploit this information."}),"\n",(0,i.jsx)(r.A,{variant:"outlined",href:"./task_2/cec3_task2_overview",children:"Task 2 Details..."}),"\n",(0,i.jsx)(n.h3,{id:"-task-3-real-dynamic-backgrounds-launching-1st-may",children:"\ud83d\udd1c Task 3: Real dynamic backgrounds (launching 1st May)"}),"\n",(0,i.jsx)(n.p,{children:"In all previous Clarity challenges, the interfering signals have been static and carefully controlled. In this task, we will use naturally occurring, dynamic noise backgrounds. We are collecting a dataset of 64-channel ambisonic audio recordings from settings that hearing-impaired listeners find challenging. These include train stations, roadsides and large social gatherings (i.e., the 'cocktail party' scenario). Using these recordings and measured impulse responses, we will create a dataset of hearing aid input signals feature target sentences in dynamic background noise."}),"\n",(0,i.jsx)(n.p,{children:"For all tasks, we will be providing standard training, development and evaluation datasets. The training and development datasets will be released at the start of the challenge. The evaluation dataset will be released shortly before the submission deadline without reference signals. Participants will then be asked to submit their processed signals for remote evaluation."}),"\n",(0,i.jsx)(r.A,{variant:"outlined",href:"./task_3/cec3_task3_overview",children:"Task 3 Details..."}),"\n",(0,i.jsx)("p",{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),", if you are interested in participating in any of these tasks, please sign up for the ",(0,i.jsx)(n.a,{href:"https://groups.google.com/g/clarity-challenge",children:"Clarity Challenge\u2019s Google group"})," so that we can keep you posted on the latest developments."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28770:(e,n,t)=>{"use strict";t.d(n,{CU:()=>s});var i=t(96540),a="https://platform.twitter.com/widgets.js",r="createTimeline",s=function(e){var n=i.useRef(null),s=i.useState(!0),o=s[0],l=s[1];return i.useEffect((function(){var i=!0;return t(62491)(a,"twitter-embed",(function(){if(window.twttr){if(i){if(!window.twttr.widgets[r])return void console.error("Method "+r+" is not present anymore in twttr.widget api");var t=function(){var t,i,a=Object.assign({},e.options);return null!=e&&e.autoHeight&&(a.height=null===(t=n.current)||void 0===t||null===(i=t.parentNode)||void 0===i?void 0:i.offsetHeight),a=Object.assign({},a,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();t=function(n){return n.chrome="",e.noHeader&&(n.chrome=n.chrome+" noheader"),e.noFooter&&(n.chrome=n.chrome+" nofooter"),e.noBorders&&(n.chrome=n.chrome+" noborders"),e.noScrollbar&&(n.chrome=n.chrome+" noscrollbar"),e.transparent&&(n.chrome=n.chrome+" transparent"),n}(t),window.twttr.widgets[r]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==n?void 0:n.current,t).then((function(n){l(!1),e.onLoad&&e.onLoad(n)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){i=!1}}),[]),i.createElement(i.Fragment,null,o&&i.createElement(i.Fragment,null,e.placeholder),i.createElement("div",{ref:n}))}},62491:(e,n,t)=>{var i,a,r;r=function(){var e,n,t=document,i=t.getElementsByTagName("head")[0],a=!1,r="push",s="readyState",o="onreadystatechange",l={},c={},d={},h={};function u(e,n){for(var t=0,i=e.length;t<i;++t)if(!n(e[t]))return a;return 1}function m(e,n){u(e,(function(e){return n(e),1}))}function g(n,t,i){n=n[r]?n:[n];var a=t&&t.call,s=a?t:i,o=a?n.join(""):t,f=n.length;function v(e){return e.call?e():l[e]}function w(){if(! --f)for(var e in l[o]=1,s&&s(),d)u(e.split("|"),v)&&!m(d[e],v)&&(d[e]=[])}return setTimeout((function(){m(n,(function n(t,i){return null===t?w():(i||/^https?:\/\//.test(t)||!e||(t=-1===t.indexOf(".js")?e+t+".js":e+t),h[t]?(o&&(c[o]=1),2==h[t]?w():setTimeout((function(){n(t,!0)}),0)):(h[t]=1,o&&(c[o]=1),void p(t,w)))}))}),0),g}function p(e,a){var r,l=t.createElement("script");l.onload=l.onerror=l[o]=function(){l[s]&&!/^c|loade/.test(l[s])||r||(l.onload=l[o]=null,r=1,h[e]=2,a())},l.async=1,l.src=n?e+(-1===e.indexOf("?")?"?":"&")+n:e,i.insertBefore(l,i.lastChild)}return g.get=p,g.order=function(e,n,t){!function i(a){a=e.shift(),e.length?g(a,i):g(a,n,t)}()},g.path=function(n){e=n},g.urlArgs=function(e){n=e},g.ready=function(e,n,t){e=e[r]?e:[e];var i,a=[];return!m(e,(function(e){l[e]||a[r](e)}))&&u(e,(function(e){return l[e]}))?n():(i=e.join("|"),d[i]=d[i]||[],d[i][r](n),t&&t(a)),g},g.done=function(e){g([null],e)},g},e.exports?e.exports=r():void 0===(a="function"==typeof(i=r)?i.call(n,t,n,e):i)||(e.exports=a)},28453:(e,n,t)=>{"use strict";t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);