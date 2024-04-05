"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[8500],{6254:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(74848),a=t(28453);const s={slug:"baseline",title:"Baseline speech intelligibility model in round one",author:"Simone Graetzer",author_title:"Clarity Team Member",author_url:"https://www.salford.ac.uk/our-staff/simone-graetzer",author_image_url:"https://avatars.githubusercontent.com/sgraetzer",tags:["audibility","intelligibility","MBSTOI","baseline","CEC1"]},l=void 0,r={permalink:"/blog/baseline",source:"@site/blog/2021-04-22-baseline-speech-intelligiblity-model.mdx",title:"Baseline speech intelligibility model in round one",description:"Some comments on signal alignment and level-insensitivity",date:"2021-04-22T00:00:00.000Z",formattedDate:"April 22, 2021",tags:[{label:"audibility",permalink:"/blog/tags/audibility"},{label:"intelligibility",permalink:"/blog/tags/intelligibility"},{label:"MBSTOI",permalink:"/blog/tags/mbstoi"},{label:"baseline",permalink:"/blog/tags/baseline"},{label:"CEC1",permalink:"/blog/tags/cec-1"}],readingTime:3.75,hasTruncateMarker:!0,authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"}],frontMatter:{slug:"baseline",title:"Baseline speech intelligibility model in round one",author:"Simone Graetzer",author_title:"Clarity Team Member",author_url:"https://www.salford.ac.uk/our-staff/simone-graetzer",author_image_url:"https://avatars.githubusercontent.com/sgraetzer",tags:["audibility","intelligibility","MBSTOI","baseline","CEC1"]},unlisted:!1,prevItem:{title:"CEC1 eval data released",permalink:"/blog/CEC1 eval data released"},nextItem:{title:"Latency, computation time and real-time operation",permalink:"/blog/Latency, computation time and real-time operation"}},o={authorsImageUrls:[void 0]},d=[{value:"Some comments on signal alignment and level-insensitivity",id:"some-comments-on-signal-alignment-and-level-insensitivity",level:3},{value:"Evaluation",id:"evaluation",level:2},{value:"Signal alignment in time and frequency",id:"signal-alignment-in-time-and-frequency",level:2},{value:"Level insensitivity",id:"level-insensitivity",level:2},{value:"MBSTOI",id:"mbstoi",level:2},{value:"References",id:"references",level:2}];function c(e){const i={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"some-comments-on-signal-alignment-and-level-insensitivity",children:"Some comments on signal alignment and level-insensitivity"}),"\n",(0,n.jsx)(i.p,{children:"Our baseline binaural speech intelligibility measure in round one is the Modified Binaural Short-Time Objective Intelligibility measure, or MBSTOI. This short post outlines the importance of correcting for delays that your hearing aid processing algorithm introduces into the audio signals to allow MBSTOI to estimate the speech intelligibility accurately. It also discusses the importance of considering the audibility of signals before evaluation with MBSTOI."}),"\n",(0,n.jsx)(i.h2,{id:"evaluation",children:"Evaluation"}),"\n",(0,n.jsxs)(i.p,{children:["In stage one, entries will be ranked according to the average MBSTOI score across all samples in the evaluation test set. In the second stage, entries will be evaluated by the listening panel. There will be prizes for both stages. See this ",(0,n.jsx)(i.a,{href:"https://claritychallenge.github.io/clarity_CEC1_doc/docs/cec1_rules",children:"page"})," for more information."]}),"\n","\n",(0,n.jsx)(i.h2,{id:"signal-alignment-in-time-and-frequency",children:"Signal alignment in time and frequency"}),"\n",(0,n.jsx)(i.p,{children:"If the signal processed by the hearing aid introduces a significant delay, you should correct for this delay before submitting your entry. This is necessary because MBSTOI requires alignment of the clean speech \u201creference\u201d with the processed signal in time and frequency. This needs to be done for both ear signals."}),"\n",(0,n.jsx)(i.p,{children:"MBSTOI downsamples signals to 10 kHz, uses a Discrete Fourier Transform to decompose the signal into one-third octave bands, and performs envelope extraction and short-time segmentation into 386 ms regions. Each region consists of 30 frames. These approaches are motivated by what is know about which frequencies and modulation frequencies are most important for intelligibility. For each frequency band and frame (over the region of which it is the last frame), an intermediate correlation coefficient is calculated between the clean reference and processed power envelopes for each ear. These are averaged to obtain the MBSTOI index. Thus is usually between 0 and 1, and rises monotonically with measured intelligibility scores, such that higher values indicate greater speech intelligibility. Alignment is therefore required at the level of the one-third octave bands and short-time regions."}),"\n",(0,n.jsx)(i.p,{children:"Our baseline corrects for broadband delay per ear due to the hearing loss model. (The delay is measured by running a kronnecker delta function through the model for each ear.) However, the baseline software will not correct for delays created by your hearing aid processing."}),"\n",(0,n.jsx)(i.p,{children:"Consequently, when submitting your hearing aid output signals, you are responsible for correcting for any delays introduced by your hearing aid. Note that this must be done blindly; the clean reference signals will not be supplied for the test/evaluation set."}),"\n",(0,n.jsx)(i.h2,{id:"level-insensitivity",children:"Level insensitivity"}),"\n",(0,n.jsx)(i.p,{children:"MBSTOI is level-independent, i.e., MBSTOI is broadly insensitive to the level of the processed signal because it is calculated using a cross-correlation method. This could be a problem because sounds that are below the auditory thresholds of the hearing impaired listener may appear to MBSTOI to be highly intelligible."}),"\n",(0,n.jsx)(i.p,{children:"To overcome this, the baseline experimental code mbstoi_beta, in conjunction with the baseline hearing loss model, can be used to approximate hearing-impaired auditory thresholds. Specifically, mbstoi_beta adds internal noise that can be used to approximate normal hearing auditory thresholds. This noise, in combination with the attenuation of signals by the hearing loss model to simulate raised auditory thresholds, makes MBSTOI level-sensitive."}),"\n",(0,n.jsx)(i.p,{children:"The noise is created by filtering white noise using pure tone threshold filter coefficients with one-third octave weighting, approximating the shape of a typical auditory filter (from Moore 2012, based on Patterson\u2019s method, 1976). This noise is added to the processed signal. Note, the standard MBSTOI in the equalisation-cancellation stage adds internal noise to parameters, but this is an independent process."}),"\n",(0,n.jsx)(i.h2,{id:"mbstoi",children:"MBSTOI"}),"\n",(0,n.jsx)(i.p,{children:"The method was developed by Asger Heidemann Andersen, Jan Mark de Haan, Zheng-Hua Tan and Jesper Jensen (Andersen et al., 2018). It builds on the Short-Time Objective Intelligibility (STOI) metric created by Cees H. Taal, Richard C. Hendriks, Richard Heusdens, and Jesper Jensen (Taal et al., 2011). MBSTOI includes a better ear stage and an equalisation-cancellation stage. For simplicity, the latter stage is not discussed here; see Andersen et al. (2018) for details."}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Andersen, A. H., de Haan, J. M., Tan, Z. H., & Jensen, J. (2018). Refinement and validation of the binaural short time objective intelligibility measure for spatially diverse conditions. ",(0,n.jsx)(i.em,{children:"Speech Communication"}),", 102, 1-13."]}),"\n",(0,n.jsxs)(i.li,{children:["Moore, B. C. (2012). ",(0,n.jsx)(i.em,{children:"An introduction to the psychology of hearing"}),". Brill."]}),"\n",(0,n.jsxs)(i.li,{children:["Patterson, R. D. (1976). Auditory filter shapes derived with noise stimuli. ",(0,n.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 59(3), 640-654."]}),"\n",(0,n.jsxs)(i.li,{children:["Taal, C. H., Hendriks, R. C., Heusdens, R., & Jensen, J. (2011). An algorithm for intelligibility prediction of time\u2013frequency weighted noisy speech. ",(0,n.jsx)(i.em,{children:"IEEE Transactions on Audio, Speech, and Language Processing"}),", 19(7), 2125-2136."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>r});var n=t(96540);const a={},s=n.createContext(a);function l(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);