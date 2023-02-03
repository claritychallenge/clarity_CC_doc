(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[4337],{3905:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>p,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return i?n.createElement(m,o(o({ref:t},p),{},{components:i})):n.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8877:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));i(398);const a={id:"cpc1_submission",title:"Submission",sidebar_label:"Submission",sidebar_position:7},o=void 0,l={unversionedId:"cpc1/cpc1_submission",id:"cpc1/cpc1_submission",title:"Submission",description:"Registration",source:"@site/docs/cpc1/cpc1_submission.mdx",sourceDirName:"cpc1",slug:"/cpc1/cpc1_submission",permalink:"/docs/cpc1/cpc1_submission",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"cpc1_submission",title:"Submission",sidebar_label:"Submission",sidebar_position:7},sidebar:"tutorialSidebar_cpc1",previous:{title:"Rules",permalink:"/docs/cpc1/cpc1_rules"},next:{title:"Registration",permalink:"/docs/cpc1/cpc1_registration"}},s={},c=[{value:"Registration",id:"registration",level:2},{value:"What evaluation data is provided?",id:"what-evaluation-data-is-provided",level:2},{value:"What do I need to submit?",id:"what-do-i-need-to-submit",level:2},{value:"The predicted intellgibility scores",id:"the-predicted-intellgibility-scores",level:3},{value:"Interspeech paper submission",id:"interspeech-paper-submission",level:3},{value:"The technical report",id:"the-technical-report",level:3},{value:"How will intellectual property be handled?",id:"how-will-intellectual-property-be-handled",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"registration"},"Registration"),(0,r.kt)("p",null,"Teams are required to ",(0,r.kt)("a",{parentName:"p",href:"./cpc1_registration"},"register")," to help us organise the challenge. Registered teams will be assigned a unique team ID."),(0,r.kt)("h2",{id:"what-evaluation-data-is-provided"},"What evaluation data is provided?"),(0,r.kt)("p",null,"The evaluation data consists of audio signals processed by hearing aid systems, clean reference signals, listener metadata, and a mapping of which listeners listened to which scenes/hearing aid systems."),(0,r.kt)("p",null,"The evaluation data is available for download here ",(0,r.kt)("a",{parentName:"p",href:"https://mab.to/R6H84YNf74p5U"},"clarity_CPC1_data.test.v1.tgz"),". See the ",(0,r.kt)("a",{parentName:"p",href:"cpc1_download"},"download")," page for more details."),(0,r.kt)("p",null,"Note, the evaluation data does not contain the listener responses. We will score your submission for you and return your score (we aim to do this within 24 hours for of submission). We will then release the true listener responses the day after the submission deadline to allow teams to perform analysis of their results."),(0,r.kt)("h2",{id:"what-do-i-need-to-submit"},"What do I need to submit?"),(0,r.kt)("p",null,"All teams must submit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Their predicted intelligibility scores"),(0,r.kt)("li",{parentName:"ul"},"An Interspeech paper describing their work (encouraged)"),(0,r.kt)("li",{parentName:"ul"},"A two page technical report (mandatory)")),(0,r.kt)("h3",{id:"the-predicted-intellgibility-scores"},"The predicted intellgibility scores"),(0,r.kt)("p",null,"You must submit your predicted intelligibility scores for the signals provided."),(0,r.kt)("p",null,"The predictions should be sent in CSV format files with two columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"signal_ID, intelligibility_score\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"signal_ID")," is the unique signal identifier used for the wav file name (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"S08510_L0239_E001"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"intelligibility_score")," is the predicted intelligibilty given in terms of the percentage words recognised correctly for the signal (i.e., for 0 to 100)."),(0,r.kt)("p",null,"Your CSV files should be named as follows  ",(0,r.kt)("inlineCode",{parentName:"p"},"CPC1_<TEAM_ID>.test.csv")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CPC1_<TEAM_ID>.test_indep.csv")," for closed set and open set evaluations respectively, where ",(0,r.kt)("inlineCode",{parentName:"p"},"<TEAM_ID>")," is your individual team ID, e.g. 'E001'."),(0,r.kt)("p",null,"The files should be sent as email attachments to the email address: ",(0,r.kt)("a",{parentName:"p",href:"mailto:claritychallengecontact@gmail.com"},"claritychallengecontact@gmail.com")),(0,r.kt)("p",null,'Please use "CPC1 Submission <TEAM_ID>" as the subject line.'),(0,r.kt)("p",null,"We also encourage you to submit your prediction model(s) code."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All registered teams will be emailed with their unique team ID shortly before the submission deadline. If you plan to submit please register before the submission deadline.")),(0,r.kt)("h3",{id:"interspeech-paper-submission"},"Interspeech paper submission"),(0,r.kt)("p",null,"All teams are ",(0,r.kt)("em",{parentName:"p"},"strongly"),' encouraged to submit a paper describing their work to the Interspeech 2022 Special Session "',(0,r.kt)("a",{parentName:"p",href:"https://claritychallenge.github.io/interspeech2022_siphil"},"Speech Intelligibility Prediction for Hearing-Impaired Listeners"),'".'),(0,r.kt)("p",null,"Interspeech submission instructions are here ",(0,r.kt)("a",{parentName:"p",href:"https://interspeech2022.org/forauthor/submissions.php"},"https://interspeech2022.org/forauthor/submissions.php")),(0,r.kt)("p",null,"The Interspeech papers need to be initially submitted by March 21st (title and abstract), with the full paper due on March 28th."),(0,r.kt)("h3",{id:"the-technical-report"},"The technical report"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The two page technical report must be submitted as a paper to the Clarity-CPC1-2022 Workshop. Deadline 25th April 2022"),". An author kit and submission instructions will be made available."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A draft of the report needs to be submitted along with your predictions by 21st March"),". The draft needs to be sufficiently complete for us to judge whether your system(s)/model(s) is compliant with the challenge rules. You can find a list of key challenge dates ",(0,r.kt)("a",{parentName:"p",href:"./cpc1_dates"},"here.")),(0,r.kt)("p",null,"Your report should include an abstract and introduction and sections on experimental setup/methodology including system/model information and model/network architecture, evaluation/results, discussion, conclusion and references. Please provide an estimation of the computational resources needed. You must describe any external data and pre-existing tools, software and models used. Please make it clear how your system(s)/model(s) meet the challenge rules."),(0,r.kt)("p",null,"Your report should cite the following document, which provides an overview of the challenge and the baseline system:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Jon Barker and Michael Akeroyd and Trevor J. Cox and John F. Culling and Jennifer Firth and Simone Graetzer and Holly Griffiths and Lara Harris and Graham Naylor and Zuzanna Podwinska and Eszter Porter and Rhoddy Viveros Munoz, \u201cThe 1st Clarity Prediction Challenge: A machine learning challenge for hearing aid intelligibility prediction,\u201d in Proceedings of the Annual Conference of the International Speech Communication Association, INTERSPEECH 2022, Incheon, South Korea, 2022.")),(0,r.kt)("p",null,"The document can be accessed ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1pfGTqYAivACAgtliLwM58opCNfHcMwBG?usp=sharing"},"here.")),(0,r.kt)("h2",{id:"how-will-intellectual-property-be-handled"},"How will intellectual property be handled?"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./cpc1_rules#intellectual-property"},"here")," under Intellectual Property."))}d.isMDXComponent=!0},1748:(e,t,i)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=1748}}]);