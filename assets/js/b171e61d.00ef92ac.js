"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[5642],{68897:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=t(74848),n=t(28453),a=t(41622);const o={id:"cec2_faq",title:"CEC2 FAQ",sidebar_label:"FAQ",sidebar_position:15},r=void 0,l={id:"cec2/taking_part/cec2_faq",title:"CEC2 FAQ",description:"Speech Intelligibility",source:"@site/docs/cec2/taking_part/cec2_faq.mdx",sourceDirName:"cec2/taking_part",slug:"/cec2/taking_part/cec2_faq",permalink:"/docs/cec2/taking_part/cec2_faq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"cec2_faq",title:"CEC2 FAQ",sidebar_label:"FAQ",sidebar_position:15},sidebar:"tutorialSidebar_cec2",previous:{title:"Submission",permalink:"/docs/cec2/taking_part/cec2_submission"},next:{title:"Results",permalink:"/docs/cec2/cec2_results"}},c={},h=[{value:"Speech Intelligibility",id:"speech-intelligibility",level:2},{value:"What is Speech Intelligibility?",id:"what-is-speech-intelligibility",level:3},{value:"How is Speech Intelligibility measured with listeners?",id:"how-is-speech-intelligibility-measured-with-listeners",level:3},{value:"How is Speech Intelligibility objectively measured by a computer?",id:"how-is-speech-intelligibility-objectively-measured-by-a-computer",level:3},{value:"What speech intelligibility models already exist and what are they used for?",id:"what-speech-intelligibility-models-already-exist-and-what-are-they-used-for",level:3},{value:"Hearing Loss",id:"hearing-loss",level:2},{value:"How does hearing loss affect the perception of audio signals, and how do modern hearing aids process sound to help with this?",id:"how-does-hearing-loss-affect-the-perception-of-audio-signals-and-how-do-modern-hearing-aids-process-sound-to-help-with-this",level:3}];function d(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"speech-intelligibility",children:"Speech Intelligibility"}),"\n",(0,s.jsx)(i.h3,{id:"what-is-speech-intelligibility",children:"What is Speech Intelligibility?"}),"\n",(0,s.jsxs)(i.p,{children:["The term ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Intelligibility_(communication)",children:"Speech Intelligibility"})," is generally used in two different ways. It can refer to how much speech is understood by a listener, or to the number of words correctly identified by a listener as a proportion or percentage of the total number of words. In the Clarity project, we are using the latter definition, i.e., the percentage of words in a sentence that a listener identified correctly. This percentage is the target for your prediction models."]}),"\n",(0,s.jsx)(i.p,{children:"Speech intelligibility captures how a listener's ability to participate in conversation is changed when the speech signal is degraded, e.g., by background noise and room reverberation, or is processed, e.g., by a hearing aid. Your prediction model will need to incorporate a model of the hearing abilities of each listener."}),"\n",(0,s.jsx)(i.h3,{id:"how-is-speech-intelligibility-measured-with-listeners",children:"How is Speech Intelligibility measured with listeners?"}),"\n",(0,s.jsx)(i.p,{children:"In the Clarity project, a set of listeners listen to a sentence and then say what words they heard. In this project, speech intelligibility is measured as the number of words identified correctly as a percentage of the total number of words in a sentence."}),"\n",(0,s.jsxs)(i.p,{children:["You might consider looking at ",(0,s.jsx)(i.a,{href:"https://www.sciencedirect.com/science/article/pii/S1877050918302187",children:"other metrics"}),", such as Word Error Rate (WER), which picks up on, e.g., where listeners insert words not in the original sentence. You might do this if you think that an estimate of WER or other metrics would help your system to estimate speech intelligibility, as defined in the Clarity project."]}),"\n",(0,s.jsx)(i.h3,{id:"how-is-speech-intelligibility-objectively-measured-by-a-computer",children:"How is Speech Intelligibility objectively measured by a computer?"}),"\n",(0,s.jsx)(i.p,{children:"When fitting a hearing aid, it would be beneficial for an audiologist to be able to use an objective measure of speech intelligibility to determine what signal processing algorithm(s) should be used to compensate for the listener's hearing impairment. Objective measures are also useful when measured speech intelligibility scores are unavailable, such as when developing a machine learning-based hearing aid algorithm or some other speech enhancement method. Another advantage of non-intrusive measures is that they do not require time-alignment of processed and reference signals."}),"\n",(0,s.jsx)(i.p,{children:"Objective measures - or metrics - of speech intelligibility are used to allow a computer to estimate the likely performance of humans in listening tests. The main goal of entries to the prediction challenge is to produce one of these measures that performs well for listeners with hearing loss. There are two broad classes of speech intelligibility models:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Intrusive metrics (also known as double-ended) are most common. This is where the intelligibility is estimated by comparing the degraded or processed speech signal with the original clean speech signal."}),"\n",(0,s.jsx)(i.li,{children:"Non-intrusive metrics (also known as single-ended or blind) are less well developed. This is where intelligibility is estimated from the degraded or processed speech signal alone."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In the Clarity project, both types of metrics are of interest. Intrusive metrics will be more accurate in many cases. However, there are hearing aid processes where the speech content is shifted in frequency, which will defeat most current intrusive speech intelligibility metrics. We also hypothesise that there might be issues with intrusive metrics and machine learning approaches in hearing aids that revoice the original speech."}),"\n",(0,s.jsx)(i.h3,{id:"what-speech-intelligibility-models-already-exist-and-what-are-they-used-for",children:"What speech intelligibility models already exist and what are they used for?"}),"\n",(0,s.jsxs)(i.p,{children:["There aren't many speech intelligibility models that consider hearing impairment, but one that does is ",(0,s.jsx)(i.a,{href:"https://www.sciencedirect.com/science/article/pii/S0167639320300431",children:"HASPI by Kates and Arehart"}),". In this seminar from the first Clarity workshop, James Kates discusses speech intelligibility models with a focus on the ones he has developed. He also discusses the speech quality metric ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Hearing-Aid_Speech_Quality_Index",children:"HASQI"}),". If you're interested in using HASPI or HASQI for the challenge, James Kates has kindly made the ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(26968).A+"",children:"MATLAB code"})," and ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(77588).A+"",children:"user guide"})," available for download."]}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hp9NT1zkGz0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,s.jsx)(a.A,{summary:"Click arrow to see synopsis.",children:(0,s.jsx)(i.p,{children:"Signal degradations, such as additive noise and nonlinear distortion, can reduce the intelligibility and quality of a speech signal. Predicting intelligibility and quality for hearing aids is especially difficult since these devices may contain intentional nonlinear distortion designed to make speech more audible to a hearing-impaired listener. This speech processing often takes the form of time-varying multichannel gain adjustments. Intelligibility and quality metrics used for hearing aids and hearing-impaired listeners must therefore consider the trade-offs between audibility and distortion introduced by hearing-aid speech envelope modifications. This presentation uses the Hearing Aid Speech Perception Index (HASPI) and the Hearing Aid Speech Quality Index (HASQI) to predict intelligibility and quality, respectively. These indices incorporate a model of the auditory periphery that can be adjusted to reflect hearing loss. They have been trained on intelligibility scores and quality ratings from both normal-hearing and hearing-impaired listeners for a wide variety of signal and processing conditions. The basics of the metrics are explained, and the metrics are then used to analyse the effects of additive noise on speech, to evaluate noise suppression algorithms, and to measure differences among commercial hearing aids."})}),"\n",(0,s.jsx)(i.h2,{id:"hearing-loss",children:"Hearing Loss"}),"\n",(0,s.jsxs)(i.p,{children:["There are many types of hearing loss, but the focus of the Clarity project is the hearing loss that happens with ageing. This is a form of ",(0,s.jsx)(i.a,{href:"https://rnid.org.uk/information-and-support/hearing-loss/types-of-hearing-loss-and-deafness/",children:"sensorineural hearing loss"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"how-does-hearing-loss-affect-the-perception-of-audio-signals-and-how-do-modern-hearing-aids-process-sound-to-help-with-this",children:"How does hearing loss affect the perception of audio signals, and how do modern hearing aids process sound to help with this?"}),"\n",(0,s.jsx)(i.p,{children:"In this seminar from the first Clarity workshop, Karolina Smeds from ORCA Europe and WS Audiology discusses the effects of hearing loss and the hearing aid processing strategies that are typically used to counter the sensory deficits."}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/waPONoYrf8Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,s.jsx)(a.A,{summary:"Click arrow to see synopsis.",children:(0,s.jsxs)(i.p,{children:["Hearing loss leads to several unwanted effects. Loss of audibility for soft sounds is one effect, but also when amplification is used to create audibility for soft sounds, many ",(0,s.jsx)(i.a,{href:"https://www.lexico.com/en/definition/suprathreshold",children:"suprathreshold"})," deficits remain. The most common type of hearing loss is a ",(0,s.jsx)(i.a,{href:"https://www.lexico.com/definition/cochlear",children:"cochlear"})," hearing loss, where haircells or nerve synapses in the cochlea are damaged. Ageing and noise exposure are the most common causes of cochlear hearing loss. This type of hearing loss is associated with atypical loudness perception and difficulties in noisy situations. Background noise masks for instance speech to a higher degree than for a person with healthy hair cells. This explains why listening to speech-in-noise (SPIN) is such an important topic to work on. A brief introduction to signal processing in hearing aids will be presented. With the use of frequency-specific amplification and compression (automatic gain control, AGC), hearing aids are usually doing a good job in compensating for reduced audibility and for atypical suprathreshold loudness perception. However, it is more difficult to compensate for the increased masking effect. Some examples of strategies will be presented. Finally, natural conversations in noise will be discussed. The balance between being able to have a conversation with a specific communication partner in a group of people and being able to switch attention if someone else starts to talk will be touched upon."]})})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},41622:(e,i,t)=>{t.d(i,{A:()=>f});var s=t(96540),n=t(18215),a=t(15066),o=t(63427),r=t(92303),l=t(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var h=t(74848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,i){return!!e&&(e===i||p(e.parentElement,i))}function u(e){let{summary:i,children:t,...n}=e;(0,o.A)().collectAnchor(n.id);const u=(0,r.A)(),m=(0,s.useRef)(null),{collapsed:g,setCollapsed:f}=(0,l.u)({initialState:!n.open}),[y,b]=(0,s.useState)(n.open),w=s.isValidElement(i)?i:(0,h.jsx)("summary",{children:i??"Details"});return(0,h.jsxs)("details",{...n,ref:m,open:y,"data-collapsed":g,className:(0,a.A)(c.details,u&&c.isBrowser,n.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const i=e.target;d(i)&&p(i,m.current)&&(e.preventDefault(),g?(f(!1),b(!0)):f(!0))},children:[w,(0,h.jsx)(l.N,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),b(!e)},children:(0,h.jsx)("div",{className:c.collapsibleContent,children:t})})]})}const m={details:"details_b_Ee"},g="alert alert--info";function f(e){let{...i}=e;return(0,h.jsx)(u,{...i,className:(0,n.A)(g,m.details,i.className)})}},26968:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/files/HASPIv2_HASQIv2_HAAQIv1-90688098b8d9e90fdc1ee4516175688c.zip"},77588:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/files/Users_Guide_ver3-079c55157dae104c506c47dd0bf03565.zip"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var s=t(96540);const n={},a=s.createContext(n);function o(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);