"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[9556],{62724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(85893),a=i(11151),s=i(59047);const o={id:"icassp2023_submission",title:"ICASSP 2023 Submission",sidebar_label:"Submission",sidebar_position:14},l=void 0,r={id:"icassp2023/taking_part/icassp2023_submission",title:"ICASSP 2023 Submission",description:"- All teams are required to register for the challenge prior to submission. Please register as early as possible.",source:"@site/docs/icassp2023/taking_part/icassp2023_submission.mdx",sourceDirName:"icassp2023/taking_part",slug:"/icassp2023/taking_part/icassp2023_submission",permalink:"/docs/icassp2023/taking_part/icassp2023_submission",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"icassp2023_submission",title:"ICASSP 2023 Submission",sidebar_label:"Submission",sidebar_position:14},sidebar:"tutorialSidebar_icassp2023",previous:{title:"Find A Team",permalink:"/docs/icassp2023/taking_part/icassp2023_find_a_team"},next:{title:"FAQ",permalink:"/docs/icassp2023/taking_part/icassp2023_faq"}},d={},c=[{value:"What evaluation data is provided?",id:"what-evaluation-data-is-provided",level:2},{value:"What audio do I need to submit?",id:"what-audio-do-i-need-to-submit",level:2},{value:"Naming and packaging signals",id:"naming-and-packaging-signals",level:2},{value:"Using head rotation data and/or extended training data",id:"using-head-rotation-data-andor-extended-training-data",level:2},{value:"Technical report",id:"technical-report",level:2},{value:"How will intellectual property be handled?",id:"how-will-intellectual-property-be-handled",level:2},{value:"Where do I submit the signals?",id:"where-do-i-submit-the-signals",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["All teams are ",(0,t.jsx)(n.a,{href:"./icassp2023_registration",children:"required to register"})," for the challenge prior to submission. Please register as early as possible."]}),"\n",(0,t.jsxs)(n.li,{children:["Evaluation data now available! ",(0,t.jsx)(n.a,{href:"https://www.myairbridge.com/en/#!/folder/EkthOZZeBW33aaDBWSDadTgpOkbgaFxO",children:"Download Now"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"Submissions will be evaluated using a combination of HASPI and HASQI to give a combined speech intelligibility and speech quality metric."}),"\n",(0,t.jsx)(n.p,{children:"Key dates."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"2nd Feb 2023"}),": Release of evaluation data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"10th Feb 2023"}),": Submission by teams."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"14th Feb 2023"}),": Results released.Top 5 ranked teams invited to submit papers to ICASSP-2023"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"20th Feb 2023"}),": Invited papers submitted to ICASSP-2023"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"4-9th June 2023"}),": Overview paper and invited papers presented at dedicated ICASSP session"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-evaluation-data-is-provided",children:"What evaluation data is provided?"}),"\n",(0,t.jsxs)(n.p,{children:["There will be two sets of evaluation data: i) the simulate set consisting of 1500 scenes generated in the same way as the training and development data (",(0,t.jsx)(n.code,{children:"eval1"}),"), ii) the real data consisting of real acoustic mixtures (",(0,t.jsx)(n.code,{children:"eval2"}),"). For details see ",(0,t.jsx)(n.a,{href:"../data/icassp2023_data",children:"the data description page"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For each scene, you are provided with the signals received at each of the three microphones on the left and right hearing aid device. You will also be provided with JSON or csv formatted metadata consisting of"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"the audiograms for a set of listeners and"}),"\n",(0,t.jsx)(n.li,{children:"a mapping of which listeners will listen to which scenes."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There will also be some clean example utterances from the target talker, that are not the same as the target utterance, but which can be used to identify the target talker, i.e., to disambiguate scenes in which other speakers are present."}),"\n",(0,t.jsx)(n.p,{children:"For HASPI/HASQI evaluation, there will be one listener per scene and the scene-listener mapping will be the same for all teams."}),"\n",(0,t.jsx)(n.h2,{id:"what-audio-do-i-need-to-submit",children:"What audio do I need to submit?"}),"\n",(0,t.jsx)(n.p,{children:"You must submit the stereo audio signals produced at the output of your enhancement stage, which the organisers will process by the hearing aid amplification stage and the HASPI/HASQI evaluation metric. Signals should be submitted as stereo, floating point wav format signals, at the same sampling rate as the signals provided"}),"\n",(0,t.jsx)(n.h2,{id:"naming-and-packaging-signals",children:"Naming and packaging signals"}),"\n",(0,t.jsxs)(n.p,{children:["Your processed signals should be named using the conventions used by the baseline system, i.e., ",(0,t.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_enhanced.wav"})," and explained on the ",(0,t.jsx)(n.a,{href:"../data/icassp2023_data#d6-enhanced-signals",children:"data page"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Place the processed signals for the two sets into separate directories named ",(0,t.jsx)(n.code,{children:"eval1"})," and ",(0,t.jsx)(n.code,{children:"eval2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These should be placed in a directory whose name is the unique team ID that you will be sent, e.g., ",(0,t.jsx)(n.code,{children:"ICASSP2023_E001"})," and  then packaged using ",(0,t.jsx)(n.code,{children:"zip"})," or ",(0,t.jsx)(n.code,{children:"tar"})," or any standard packaging tool, e.g., to make a packaged file called ",(0,t.jsx)(n.code,{children:"<TEAM_ID>.zip"})]}),"\n",(0,t.jsx)(n.p,{children:"The packaged file will have the following structure,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"ICASSP2023_E001\n\u251c\u2500\u2500 eval1 (1500 processed signals)\n\u2514\u2500\u2500 eval2 (1500 processed signals)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting file should be about 4 GB."}),"\n",(0,t.jsx)(n.p,{children:"Upload the packaged data to the Google Drive link that you will have been sent."}),"\n",(0,t.jsx)(n.h2,{id:"using-head-rotation-data-andor-extended-training-data",children:"Using head rotation data and/or extended training data"}),"\n",(0,t.jsx)(n.p,{children:"We would like to be able to separately evaluate the benefit of using the head rotation and extra training data, so in accordance with the challenge rules,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you have trained on data which was not included in the core database, then please also provide outputs of a system trained only with the standard data."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you have made use of the head rotation data you should also provide outputs of an equivalent system that does not use the head rotation data."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you have used extra training data and/or the head rotation data, then please package the outputs separately using the following naming convention,"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u2039TEAM_ID\u203a.zip"})," - standard training data and no head rotation (all teams)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u2039TEAM_ID\u203a_hr.zip"})," - standard data and using head rotation"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u2039TEAM_ID\u203a_data.zip"})," - extended training data without using head rotation"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u2039TEAM_ID\u203a_hr_data.zip"})," - extended training data and using head rotation"]}),"\n",(0,t.jsx)(n.h2,{id:"technical-report",children:"Technical report"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For every entry, a technical report needs to be uploaded to the Google Drive along with your evaluation signals - see ",(0,t.jsx)(n.a,{href:"../icassp2023_dates",children:"here"})," for deadline. The draft needs to be sufficiently complete for us to judge whether your system is compliant with the challenge rules."]}),"\n",(0,t.jsx)(n.li,{children:"Your report should include an abstract and introduction and sections on experimental setup/methodology including system information and model/network architecture, evaluation/results, discussion, conclusion and references. Please provide an estimation of the computational resources needed. You must describe any external data and pre-existing tools, software and models used."}),"\n",(0,t.jsx)(n.li,{children:"The report can be placed in the Google Drive alongside your data."}),"\n",(0,t.jsx)(n.li,{children:"The top five systems will be invited to submit a paper to the ICASSP 2023 special session."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-will-intellectual-property-be-handled",children:"How will intellectual property be handled?"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"./icassp2023_rules#intellectual-property",children:"here"})," under Intellectual Property."]}),"\n",(0,t.jsx)(n.h2,{id:"where-do-i-submit-the-signals",children:"Where do I submit the signals?"}),"\n",(0,t.jsx)(n.p,{children:"When you have registered you will receive a link to a Google Drive to which you will be able to securely upload your signals.  We also encourage you to submit your enhancement code via this link."}),"\n",(0,t.jsx)(n.p,{children:"Materials uploaded will be visible to the Clarity Team but not to other entrants."}),"\n",(0,t.jsx)(s.Z,{type:"warning",children:(0,t.jsx)(n.p,{children:"Note, in order to use the Google Drive you will need to have a Google account. If you anticipate problems using Google then please make arrangements to send us the materials by other means, e.g., via a service such as WeTransfer or similar."})})]})}function u(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},59047:(e,n,i)=>{i.d(n,{Z:()=>N});var t=i(67294),a=i(85893);function s(e){const{mdxAdmonitionTitle:n,rest:i}=function(e){const n=t.Children.toArray(e),i=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==i)),o=i?.props.children;return{mdxAdmonitionTitle:o,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:i}}var o=i(86010),l=i(95999),r=i(35281);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:n,className:i,children:t}=e;return(0,a.jsx)("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(n),d.admonition,i),children:t})}function h(e){let{icon:n,title:i}=e;return(0,a.jsxs)("div",{className:d.admonitionHeading,children:[(0,a.jsx)("span",{className:d.admonitionIcon,children:n}),i]})}function u(e){let{children:n}=e;return n?(0,a.jsx)("div",{className:d.admonitionContent,children:n}):null}function p(e){const{type:n,icon:i,title:t,children:s,className:o}=e;return(0,a.jsxs)(c,{type:n,className:o,children:[(0,a.jsx)(h,{title:t,icon:i}),(0,a.jsx)(u,{children:s})]})}function m(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,a.jsx)(m,{}),title:(0,a.jsx)(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,a.jsx)(p,{...g,...e,className:(0,o.Z)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(p,{...f,...e,className:(0,o.Z)("alert alert--success",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,a.jsx)(p,{...w,...e,className:(0,o.Z)("alert alert--info",e.className),children:e.children})}function _(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,a.jsx)(_,{}),title:(0,a.jsx)(l.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function I(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const S={icon:(0,a.jsx)(I,{}),title:(0,a.jsx)(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,a.jsx)(_,{}),title:(0,a.jsx)(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const A={...{note:x,tip:v,info:y,warning:function(e){return(0,a.jsx)(p,{...k,...e,className:(0,o.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(p,{...S,...e,className:(0,o.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(x,{title:"secondary",...e}),important:e=>(0,a.jsx)(y,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(p,{...T,...e,className:(0,o.Z)("alert alert--warning",e.className),children:e.children})}}};function N(e){const n=s(e),i=(t=n.type,A[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),A.info));var t;return(0,a.jsx)(i,{...n})}},11151:(e,n,i)=>{i.d(n,{ah:()=>s});var t=i(67294);const a=t.createContext({});function s(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);