"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[6868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={id:"cpc2_intro",title:"The 2nd Clarity Prediction Challenge",sidebar_label:"CPC2 Introduction",sidebar_position:1},o=void 0,s={unversionedId:"cpc2/cpc2_intro",id:"cpc2/cpc2_intro",title:"The 2nd Clarity Prediction Challenge",description:"The 2nd Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the Clarity-2023 Workshsop website.",source:"@site/docs/cpc2/cpc2_intro.md",sourceDirName:"cpc2",slug:"/cpc2/cpc2_intro",permalink:"/docs/cpc2/cpc2_intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cpc2_intro",title:"The 2nd Clarity Prediction Challenge",sidebar_label:"CPC2 Introduction",sidebar_position:1},sidebar:"tutorialSidebar_cpc2",next:{title:"Important dates",permalink:"/docs/cpc2/cpc2_dates"}},l={},c=[{value:"Short Description",id:"short-description",level:2},{value:"The data",id:"the-data",level:3},{value:"The task",id:"the-task",level:3},{value:"Registering and submitting",id:"registering-and-submitting",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The 2nd Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the ",(0,r.kt)("b",null,(0,r.kt)("a",{href:"https://claritychallenge.org/clarity2023-workshop/"},"Clarity-2023 Workshsop website")),"."),(0,r.kt)("p",{parentName:"admonition"},"For details of information on forthcoming challenge see ",(0,r.kt)("b",null,(0,r.kt)("a",{href:"https://claritychallenge.org/timeline"},"here")),".")),(0,r.kt)("p",null,"To allow the development of better hearing aids, we need ways to evaluate the speech intelligibility of audio signals automatically. We need a prediction model that takes the audio produced by a hearing aid and the listener's characteristics (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://www.hear-it.org/Audiogram-"},"audiogram"),") and estimates the speech intelligibility score that the listener would achieve in a listening test."),(0,r.kt)("p",null,"Last year we ran the ",(0,r.kt)("a",{parentName:"p",href:"../cpc1/cpc1_intro"},"CPC1 Challenge")," to develop such a model. The challenge was presented at an online workshop and a special session of Interspeech 2022. We are now running the 2nd round of this challenge, which builds on the first by using more complex signals and a larger set of listening test data for training and evaluating the prediction systems."),(0,r.kt)("p",null,"The outputs of the new challenge will be presented at an ",(0,r.kt)("a",{parentName:"p",href:"https://claritychallenge.org/clarity2023-workshop/"},"ISCA workshop")," that is being run as a satellite event to Interspeech 2023 in Dublin on 19th August 2023."),(0,r.kt)("p",null,"This site provides entrants with what they need to know to take part in the challenge."),(0,r.kt)("h2",{id:"short-description"},"Short Description"),(0,r.kt)("p",null,"The task involves estimating the intelligibility of speech-in-noise signals that have been processed by hearing aid algorithms and presented to listeners with hearing loss. Each signal contains a short sentence that the listeners were asked to repeat. The system you build needs to be able to predict how many of the words were recognised correctly by the listeners. It is not expected that systems can do this accurately on a per sentence basis, but rather we will rank systems on this basis of how well they perform over a large evaluation set, i.e., which system produces the lowest average estimation error."),(0,r.kt)("p",null,"The hearing aid signals being assessed vary widely in quality. Examples of good, fair and poor signals are provided below. Your prediction algorithm needs to be able to cope with this variation."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Good"),(0,r.kt)("th",null,"Fair"),(0,r.kt)("th",null,"Poor")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0,style:{width:"250px"}},(0,r.kt)("source",{src:"/audio/CEC2_samples/CEC2_E009/S08501_L0104_HA-output.wav",type:"audio/wav"}),"Your browser does not support the audio element.")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0,style:{width:"250px"}},(0,r.kt)("source",{src:"/audio/CEC2_samples/CEC2_E022/S08501_L0104_HA-output.wav",type:"audio/wav"}),"Your browser does not support the audio element.")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0,style:{width:"250px"}},(0,r.kt)("source",{src:"/audio/CEC2_samples/CEC2_E032/S08501_L0104_HA-output.wav",type:"audio/wav"}),"Your browser does not support the audio element."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0,style:{width:"250px"}},(0,r.kt)("source",{src:"/audio/CEC2_samples/CEC2_E009/S08502_L0106_HA-output.wav",type:"audio/wav"}),"Your browser does not support the audio element.")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0,style:{width:"250px"}},(0,r.kt)("source",{src:"/audio/CEC2_samples/CEC2_E022/S08502_L0106_HA-output.wav",type:"audio/wav"}),"Your browser does not support the audio element.")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0,style:{width:"250px"}},(0,r.kt)("source",{src:"/audio/CEC2_samples/CEC2_E032/S08502_L0106_HA-output.wav",type:"audio/wav"}),"Your browser does not support the audio element.")))),(0,r.kt)("h3",{id:"the-data"},"The data"),(0,r.kt)("p",null,"You will be provided with a set of training data which you can use to develop your systems. This data consists of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio produced by a variety of (simulated) hearing aids for speech-in-noise;"),(0,r.kt)("li",{parentName:"ul"},"The corresponding clean reference signals (the original speech);"),(0,r.kt)("li",{parentName:"ul"},"Characteristics of the listeners (pure tone audiograms, etc);"),(0,r.kt)("li",{parentName:"ul"},"The measured speech intelligibility scores from listening tests, where the listener was asked to say what they heard after listening to the hearing aid processed signal.")),(0,r.kt)("p",null,"For full details of the data see the ",(0,r.kt)("a",{parentName:"p",href:"./cpc2_data"},"Data")," page."),(0,r.kt)("h3",{id:"the-task"},"The task"),(0,r.kt)("p",null,"You will be provided with an evaluation set containing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio produced by a variety of (simulated) hearing aids for speech-in-noise;"),(0,r.kt)("li",{parentName:"ul"},"The audiogram of a listener;"),(0,r.kt)("li",{parentName:"ul"},"The clean reference signal (the original speech).")),(0,r.kt)("p",null,"Your task will be to produce a score (0.0 to 1.0), which should predict the proportion of words in the reference signal that the listener would be able to repeat correctly after listening to the hearing aid processed signal."),(0,r.kt)("p",null,"We will be considering two types of system: intrusive and non-intrusive. Intrusive systems (also known as double-ended) are those that require a clean speech reference, and non-intrusive systems (also known as single-ended) are those that use the hearing aid output alone."),(0,r.kt)("p",null,"Intrusive and non-intrusive systems will be separately ranked according to the RMSE between their predictions and the true values."),(0,r.kt)("p",null,"To help you get started we have provided a baseline system that uses the HASPI metric to predict the speech intelligibility score. Details of this system are available on the ",(0,r.kt)("a",{parentName:"p",href:"./cpc2_baseline"},"Baseline")," page."),(0,r.kt)("p",null,"For full details of the task see the ",(0,r.kt)("a",{parentName:"p",href:"./cpc2_rules"},"rules")," page."),(0,r.kt)("h3",{id:"registering-and-submitting"},"Registering and submitting"),(0,r.kt)("p",null,"To take part in the challenge you will need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/cpc2/taking_part/cpc2_registration"},"register your team")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/cpc2/taking_part/cpc2_download"},"download the data"),". Entrants will have until 31st July to complete their submissions. Full instructions for submission are available on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cpc2/taking_part/cpc2_submission"},"Submission")," page."))}u.isMDXComponent=!0}}]);