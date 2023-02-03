(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[308],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7347:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(398);const i={id:"cpc1_intro",title:"CPC1 Introduction",sidebar_label:"CPC1 Introduction",sidebar_position:1},o=void 0,l={unversionedId:"cpc1/cpc1_intro",id:"cpc1/cpc1_intro",title:"CPC1 Introduction",description:"The 1st Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the Clarity-2022 Workshsop website.",source:"@site/docs/cpc1/cpc1_intro.md",sourceDirName:"cpc1",slug:"/cpc1/cpc1_intro",permalink:"/docs/cpc1/cpc1_intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cpc1_intro",title:"CPC1 Introduction",sidebar_label:"CPC1 Introduction",sidebar_position:1},sidebar:"tutorialSidebar_cpc1",next:{title:"Scenario",permalink:"/docs/cpc1/cpc1_scenario"}},s={},p=[{value:"Key dates (updated 14/01/22)",id:"key-dates-updated-140122",level:2},{value:"More details",id:"more-details",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The 1st Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the ",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://claritychallenge.org/clarity2022-workshop/"},"Clarity-2022 Workshsop website")),".")),(0,n.kt)("p",null,"To allow the development of better hearing aids, we need ways to evaluate the speech intelligibility of audio signals automatically. We need a prediction model that takes the audio produced by a hearing aid and the listener's characteristics (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://www.hear-it.org/Audiogram-"},"audiogram"),") and estimates the speech intelligibility score that the listener would achieve in a listening test. Here is a brief introduction to the challenge:"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9DY2VOeRU0s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,"For the prediction challenge we will provide the following data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Audio produced by a variety of (simulated) hearing aids for speech-in-noise;"),(0,n.kt)("li",{parentName:"ul"},"The corresponding clean reference signals (the original speech);"),(0,n.kt)("li",{parentName:"ul"},"Characteristics of the listeners (pure tone audiogram, etc.); and"),(0,n.kt)("li",{parentName:"ul"},"The measured speech intelligibility scores from listening tests, where the listener was asked to say what they heard for the speech-in-noise.")),(0,n.kt)("p",null,"The challenge has two separate but related tracks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("b",null,"Track 1: Closed-set")," - i.e, Systems that can make prediction for hearing-aid algorithms and listeners that have been seen in the training data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("b",null,"Track 2: Open-set")," - i.e, Systems that can make predictions for unseen hearing-aid algorithms and/or listeners.")),(0,n.kt)("p",null,"We have an ",(0,n.kt)("a",{parentName:"p",href:"./cpc1_faq"},"extensive FAQ")," to answer key questions competitors might have. So even if you have never worked on speech intelligibility models for people with hearing loss, you will have the knowledge to take part. This includes seminar recordings on the following topics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What hearing loss is;"),(0,n.kt)("li",{parentName:"ul"},"How it's typically mitigated in hearing aids; and"),(0,n.kt)("li",{parentName:"ul"},"How speech intelligibility is measured and estimated using metrics.")),(0,n.kt)("h2",{id:"key-dates-updated-140122"},"Key dates (updated 14/01/22)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"16th November 2021"),": Launch of challenge, release of data. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"23rd November 2021"),": Webinar to introduce the challenge 15:00-17:00 UK time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1st March 2022"),": Release of evaluation data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"21st March 2022"),": Submission deadline. All entrants submit their predictions plus a draft of their technical report (details below). Scores will be returned with 24 hours of submission."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"28th March 2022"),": Deadline for Interspeech paper submission."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"25th April 2022"),": Deadline by which all entrants must submit two page technical reports to Clarity Prediction Challenge 2022 workshop."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"29th June 2022"),": Clarity Prediction Challenge 2022 workshop."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sept 18-22, 2022"),": Interspeech 2022 Special Session.")),(0,n.kt)("h2",{id:"more-details"},"More details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_scenario"},"Scenario")," - a description of the listening scenario and how it has been simulated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_baseline"},"Baseline System")," - a description of the baseline software model.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_data"},"Data")," - the data that can be used to train and evaluate your system during development.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_software"},"Software")," - the software tools that we are providing to help you build and evaluate a challenge entry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_rules"},"Challenge Rules")," - the rules to which all challenge entries must adhere.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_submission"},"Submission")," - information about how to prepare your submission.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_prizes"},"Prizes")," - information about our prizes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_download"},"Download")," - where to go to download the software and challenge data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"../cec2/cec2_find_a_team"},"Find a team")," - if you'd like to find collaborators to help you compete.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"./cpc1_faq"},"FAQ")," - an extensive FAQ answering key questions and providing background knowledge to help you compete."))))}u.isMDXComponent=!0},1748:(e,t,a)=>{var r={"./locale":9234,"./locale.js":9234};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=1748}}]);