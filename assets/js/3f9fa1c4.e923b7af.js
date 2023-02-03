(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[9759],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6704:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));a(398);const r={id:"icassp2023_rules",title:"ICASSP 2023 Grand Challenge Rules",sidebar_label:"Rules",sidebar_position:6},o=void 0,s={unversionedId:"icassp2023/taking_part/icassp2023_rules",id:"icassp2023/taking_part/icassp2023_rules",title:"ICASSP 2023 Grand Challenge Rules",description:"Teams",source:"@site/docs/icassp2023/taking_part/icassp2023_rules.md",sourceDirName:"icassp2023/taking_part",slug:"/icassp2023/taking_part/icassp2023_rules",permalink:"/docs/icassp2023/taking_part/icassp2023_rules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"icassp2023_rules",title:"ICASSP 2023 Grand Challenge Rules",sidebar_label:"Rules",sidebar_position:6},sidebar:"tutorialSidebar_icassp2023",previous:{title:"Submission",permalink:"/docs/icassp2023/taking_part/icassp2023_submission"},next:{title:"Find A Team",permalink:"/docs/icassp2023/icassp2023_find_a_team"}},l={},u=[{value:"Teams",id:"teams",level:2},{value:"Transparency",id:"transparency",level:2},{value:"What information can I use?",id:"what-information-can-i-use",level:2},{value:"Training and development",id:"training-and-development",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Computational restrictions",id:"computational-restrictions",level:2},{value:"Submitting multiple entries",id:"submitting-multiple-entries",level:2},{value:"Evaluation of systems",id:"evaluation-of-systems",level:2},{value:"Intellectual property",id:"intellectual-property",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"teams"},"Teams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams must have pre-registered and nominated a contact person."),(0,i.kt)("li",{parentName:"ul"},"Teams can be from one or more institutions.")),(0,i.kt)("h2",{id:"transparency"},"Transparency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used."),(0,i.kt)("li",{parentName:"ul"},"We will publish all technical documents (anonymous or otherwise)."),(0,i.kt)("li",{parentName:"ul"},"Teams are encouraged \u2013 but not required \u2013 to provide us with access to the system/model and to make their code open source."),(0,i.kt)("li",{parentName:"ul"},"Teams may reserve the right to be referred to using anonymous code names in the published rank ordering.")),(0,i.kt)("h2",{id:"what-information-can-i-use"},"What information can I use?"),(0,i.kt)("h3",{id:"training-and-development"},"Training and development"),(0,i.kt)("p",null,"For training, teams can not use external data but can expand the official training data through automated modifications and remixing, i.e. data augmentation strategies. However, teams that do this must make a second submission using only the official audio files. Any audio or metadata can be used during training and development, but during evaluation, the enhancement algorithm will not have access to all of the data (see next section)."),(0,i.kt)("h3",{id:"evaluation"},"Evaluation"),(0,i.kt)("p",null,"The only data that can be used by the Enhancement Processor during evaluation are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The audio input signals (the sum of the target and interferers for each hearing aid microphone)."),(0,i.kt)("li",{parentName:"ul"},"The listener characterisation (pure tone air-conduction audiograms and/or digit triple test results)."),(0,i.kt)("li",{parentName:"ul"},"The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)")),(0,i.kt)("h2",{id:"computational-restrictions"},"Computational restrictions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams may choose to use all, some or none of the parts of the baseline model."),(0,i.kt)("li",{parentName:"ul"},"Systems must be causal; the output from the hearing aid at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms)."),(0,i.kt)("li",{parentName:"ul"},"There is no limit on computational cost.")),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://claritychallenge.org/blog/Latency,%20computation%20time%20and%20real-time%20operation"},"this blog post")," for further explanation of these last two rules about latency and computation time."),(0,i.kt)("h2",{id:"submitting-multiple-entries"},"Submitting multiple entries"),(0,i.kt)("p",null,"It is intended that there should be one submission per registered team. Submitting multiple entries is discouraged."),(0,i.kt)("h2",{id:"evaluation-of-systems"},"Evaluation of systems"),(0,i.kt)("p",null,"Each signal will be scored using the average of its HASPI and HASQI scores. A system score will then be computed by averaging over the evaluation set. Separate scores will be computed for the real and simulated evaluation sets, along with a summary score formed by their average. Systems will be ranked according to their summary scores with all three (real, simulated and summary) scores being reported."),(0,i.kt)("h2",{id:"intellectual-property"},"Intellectual property"),(0,i.kt)("p",null,"The following terms apply to participation in this machine learning challenge (\u201cChallenge\u201d). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions (a \u201cSubmission\u201d). The Challenge is organised by the Challenge Organiser."),(0,i.kt)("p",null,"Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions."),(0,i.kt)("p",null,"As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission."),(0,i.kt)("p",null,"Entrants provide Submissions on an \u201cAS IS\u201d BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE."))}p.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=1748}}]);