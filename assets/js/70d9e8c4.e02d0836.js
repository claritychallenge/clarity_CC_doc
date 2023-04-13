"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[6221],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=h(i),u=n,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return i?a.createElement(m,s(s({ref:t},d),{},{components:i})):a.createElement(m,s({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:n,s[1]=r;for(var h=2;h<o;h++)s[h]=i[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},46353:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=i(87462),n=(i(67294),i(3905));i(8209);const o={id:"cpc1_faq",title:"FAQ for Prediction Challenge",sidebar_label:"FAQ",sidebar_position:12},s="FAQ",r={unversionedId:"cpc1/cpc1_faq",id:"cpc1/cpc1_faq",title:"FAQ for Prediction Challenge",description:"Speech Intelligibility",source:"@site/docs/cpc1/faq.mdx",sourceDirName:"cpc1",slug:"/cpc1/cpc1_faq",permalink:"/docs/cpc1/cpc1_faq",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"cpc1_faq",title:"FAQ for Prediction Challenge",sidebar_label:"FAQ",sidebar_position:12},sidebar:"tutorialSidebar_cpc1",previous:{title:"Download",permalink:"/docs/cpc1/cpc1_download"},next:{title:"Contact",permalink:"/docs/cpc1/cpc1_contact"}},l={},h=[{value:"Speech Intelligibility",id:"speech-intelligibility",level:2},{value:"What is Speech Intelligibility?",id:"what-is-speech-intelligibility",level:3},{value:"How is Speech Intelligibility measured with listeners?",id:"how-is-speech-intelligibility-measured-with-listeners",level:3},{value:"How is Speech Intelligibility objectively measured by a computer?",id:"how-is-speech-intelligibility-objectively-measured-by-a-computer",level:3},{value:"What speech intelligibility models already exist and what are they used for?",id:"what-speech-intelligibility-models-already-exist-and-what-are-they-used-for",level:3},{value:"Hearing Loss",id:"hearing-loss",level:2},{value:"How does hearing loss affect the perception of audio signals, and how do modern hearing aids process sound to help with this?",id:"how-does-hearing-loss-affect-the-perception-of-audio-signals-and-how-do-modern-hearing-aids-process-sound-to-help-with-this",level:3},{value:"Prediction model",id:"prediction-model",level:2},{value:"Do I have to use a separate hearing loss model?",id:"do-i-have-to-use-a-separate-hearing-loss-model",level:3},{value:"What should the output of my prediction model be?",id:"what-should-the-output-of-my-prediction-model-be",level:3},{value:"Data",id:"data",level:2},{value:"Do you have suggestions for expanding the training data?",id:"do-you-have-suggestions-for-expanding-the-training-data",level:3},{value:"Missing data",id:"missing-data",level:3}],d={toc:h},c="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"speech-intelligibility"},"Speech Intelligibility"),(0,n.kt)("h3",{id:"what-is-speech-intelligibility"},"What is Speech Intelligibility?"),(0,n.kt)("p",null,"The term ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Intelligibility_(communication)"},"Speech Intelligibility")," is generally used in two different ways. It can refer to how much speech is understood by a listener, or to the number of words correctly identified by a listener as a proportion or percentage of the total number of words. In the Clarity project, we are using the latter definition, i.e., the percentage of words in a sentence that a listener identified correctly. This percentage is the target for your prediction models."),(0,n.kt)("p",null,"Speech intelligibility captures how a listener's ability to participate in conversation is changed when the speech signal is degraded, e.g., by background noise and room reverberation, or is processed, e.g., by a hearing aid. Your prediction model will need to incorporate a model of the hearing abilities of each listener."),(0,n.kt)("h3",{id:"how-is-speech-intelligibility-measured-with-listeners"},"How is Speech Intelligibility measured with listeners?"),(0,n.kt)("p",null,"In the Clarity project, a set of listeners listen to a sentence and then say what words they heard. In this project, speech intelligibility is measured as the number of words identified correctly as a percentage of the total number of words in a sentence."),(0,n.kt)("p",null,"You might consider looking at ",(0,n.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S1877050918302187"},"other metrics"),", such as Word Error Rate (WER), which picks up on, e.g., where listeners insert words not in the original sentence. You might do this if you think that an estimate of WER or other metrics would help your system to estimate speech intelligibility, as defined in the Clarity project."),(0,n.kt)("h3",{id:"how-is-speech-intelligibility-objectively-measured-by-a-computer"},"How is Speech Intelligibility objectively measured by a computer?"),(0,n.kt)("p",null,"When fitting a hearing aid, it would be beneficial for an audiologist to be able to use an objective measure of speech intelligibility to determine what signal processing algorithm(s) should be used to compensate for the listener's hearing impairment. Objective measures are also useful when measured speech intelligibility scores are unavailable, such as when developing a machine learning-based hearing aid algorithm or some other speech enhancement method. Another advantage of non-intrusive measures is that they do not require time-alignment of processed and reference signals."),(0,n.kt)("p",null,"Objective measures - or metrics - of speech intelligibility are used to allow a computer to estimate the likely performance of humans in listening tests. The main goal of entries to the prediction challenge is to produce one of these measures that performs well for listeners with hearing loss. There are two broad classes of speech intelligibility models:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Intrusive metrics (also known as double-ended) are most common. This is where the intelligibility is estimated by comparing the degraded or processed speech signal with the original clean speech signal."),(0,n.kt)("li",{parentName:"ul"},"Non-intrusive metrics (also known as single-ended or blind) are less well developed. This is where intelligibility is estimated from the degraded or processed speech signal alone.")),(0,n.kt)("p",null,"In the Clarity project, both types of metrics are of interest. Intrusive metrics will be more accurate in many cases. However, there are hearing aid processes where the speech content is shifted in frequency, which will defeat most current intrusive speech intelligibility metrics. We also hypothesise that there might be issues with intrusive metrics and machine learning approaches in hearing aids that revoice the original speech."),(0,n.kt)("h3",{id:"what-speech-intelligibility-models-already-exist-and-what-are-they-used-for"},"What speech intelligibility models already exist and what are they used for?"),(0,n.kt)("p",null,"There aren't many speech intelligibility models that consider hearing impairment, but one that does is ",(0,n.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S0167639320300431"},"HASPI by Kates and Arehart"),". In this seminar from the first Clarity workshop, James Kates discusses speech intelligibility models with a focus on the ones he has developed. He also discusses the speech quality metric ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hearing-Aid_Speech_Quality_Index"},"HASQI"),". If you're interested in using HASPI or HASQI for the challenge, James Kates has kindly made the ",(0,n.kt)("a",{parentName:"p",href:"http://claritychallenge.org/wp-content/uploads/2021/10/HASPIv2_HASQIv2_HAAQIv1.zip"},"MATLAB code")," and ",(0,n.kt)("a",{parentName:"p",href:"http://claritychallenge.org/wp-content/uploads/2021/10/Users_Guide_ver3.zip"},"user guide")," available for download."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hp9NT1zkGz0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click arrow to see synopsis."),(0,n.kt)("div",null,(0,n.kt)("div",null,"Signal degradations, such as additive noise and nonlinear distortion, can reduce the intelligibility and quality of a speech signal. Predicting intelligibility and quality for hearing aids is especially difficult since these devices may contain intentional nonlinear distortion designed to make speech more audible to a hearing-impaired listener. This speech processing often takes the form of time-varying multichannel gain adjustments. Intelligibility and quality metrics used for hearing aids and hearing-impaired listeners must therefore consider the trade-offs between audibility and distortion introduced by hearing-aid speech envelope modifications. This presentation uses the Hearing Aid Speech Perception Index (HASPI) and the Hearing Aid Speech Quality Index (HASQI) to predict intelligibility and quality, respectively. These indices incorporate a model of the auditory periphery that can be adjusted to reflect hearing loss. They have been trained on intelligibility scores and quality ratings from both normal-hearing and hearing-impaired listeners for a wide variety of signal and processing conditions. The basics of the metrics are explained, and the metrics are then used to analyse the effects of additive noise on speech, to evaluate noise suppression algorithms, and to measure differences among commercial hearing aids."))),(0,n.kt)("h2",{id:"hearing-loss"},"Hearing Loss"),(0,n.kt)("p",null,"There are many types of hearing loss, but the focus of the Clarity project is the hearing loss that happens with ageing. This is a form of ",(0,n.kt)("a",{parentName:"p",href:"https://rnid.org.uk/information-and-support/hearing-loss/types-of-hearing-loss-and-deafness/"},"sensorineural hearing loss"),"."),(0,n.kt)("h3",{id:"how-does-hearing-loss-affect-the-perception-of-audio-signals-and-how-do-modern-hearing-aids-process-sound-to-help-with-this"},"How does hearing loss affect the perception of audio signals, and how do modern hearing aids process sound to help with this?"),(0,n.kt)("p",null,"In this seminar from the first Clarity workshop, Karolina Smeds from ORCA Europe and WS Audiology discusses the effects of hearing loss and the hearing aid processing strategies that are typically used to counter the sensory deficits."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/waPONoYrf8Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click arrow to see synopsis."),(0,n.kt)("div",null,"Hearing loss leads to several unwanted effects. Loss of audibility for soft sounds is one effect, but also when amplification is used to create audibility for soft sounds, many [suprathreshold](https://www.lexico.com/en/definition/suprathreshold) deficits remain. The most common type of hearing loss is a [cochlear](https://www.lexico.com/definition/cochlear) hearing loss, where haircells or nerve synapses in the cochlea are damaged. Ageing and noise exposure are the most common causes of cochlear hearing loss. This type of hearing loss is associated with atypical loudness perception and difficulties in noisy situations. Background noise masks for instance speech to a higher degree than for a person with healthy hair cells. This explains why listening to speech-in-noise (SPIN) is such an important topic to work on. A brief introduction to signal processing in hearing aids will be presented. With the use of frequency-specific amplification and compression (automatic gain control, AGC), hearing aids are usually doing a good job in compensating for reduced audibility and for atypical suprathreshold loudness perception. However, it is more difficult to compensate for the increased masking effect. Some examples of strategies will be presented. Finally, natural conversations in noise will be discussed. The balance between being able to have a conversation with a specific communication partner in a group of people and being able to switch attention if someone else starts to talk will be touched upon.")),(0,n.kt)("h2",{id:"prediction-model"},"Prediction model"),(0,n.kt)("h3",{id:"do-i-have-to-use-a-separate-hearing-loss-model"},"Do I have to use a separate hearing loss model?"),(0,n.kt)("p",null,"No is the short answer! In the baseline, we've used the Cambridge hearing loss model and a separate binaural speech intelligibility model. Another approach would be to create a single model that encapsulates the combined effects of hearing loss and speech perception."),(0,n.kt)("h3",{id:"what-should-the-output-of-my-prediction-model-be"},"What should the output of my prediction model be?"),(0,n.kt)("p",null,"The output should include a predicted speech intelligibility score per input signal, specifically, an estimate of the number of words correct as a percentage of the total number of words in the signal."),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)("h3",{id:"do-you-have-suggestions-for-expanding-the-training-data"},"Do you have suggestions for expanding the training data?"),(0,n.kt)("p",null,"The prediction challenge data is limited by having to get the ground truth from listening tests on people with a hearing loss. We look forward to seeing what approaches teams use to help overcome this limitation, such as using unsurpervised models, data augmentation or generating additional ground truth data using a pre-existing model. The baseline model includes a hearing loss and speech intelligibility model that could be used for creating additional pre-training data. There are other models that you might consider where code is available. None has been checked by the Clarity team."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.fit.vut.cz/person/izmolikova/functions/.en#nav"},"Katerina Zmolikova")," has made ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/BUTSpeechFIT/torch_msbg_mbstoi"},"her Pytorch version of the baseline hearing impairment and speech intelligibility model available"),". Both model fit a neural network framework, are faster but more approximate (see graphs on github)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pubmed.ncbi.nlm.nih.gov/29554034/"},"HASQI and HASPI")," are quality and speech intelligibility metrics designed to work for people with a hearing impairment. ",(0,n.kt)("a",{parentName:"li",href:"cpc1_faq/#speech-intelligibility"},"James Kates explains more about these above"),". ",(0,n.kt)("a",{parentName:"li",href:"http://claritychallenge.org/wp-content/uploads/2021/10/HASPIv2_HASQIv2_HAAQIv1.zip"},"MATLAB code HASPI v2 and HASQI v2")," are available, along with the ",(0,n.kt)("a",{parentName:"li",href:"http://claritychallenge.org/wp-content/uploads/2021/10/Users_Guide_ver3.zip"},"user guide"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dhimasryan/STOI-Net"},"STOI-Net: A Deep Learning based Non-Intrusive Speech Intelligibility Assessment Model")," by Ryandhimas Zezario et al. is monaural and non-intrusive using Python, Keras and TensorFlow. It doesn't model the effect of hearing loss. An alternative is ",(0,n.kt)("a",{parentName:"li",href:"http://ah-andersen.net/code/"},"Asger Heidemann Andersen's MATLAB code"),".")),(0,n.kt)("h3",{id:"missing-data"},"Missing data"),(0,n.kt)("p",null,"We have audiograms for all our listening panel. But for other characterisations of hearing, only some of the panel have provided data. Therefore there is missing data that has to be dealt with."),(0,n.kt)("p",null,"1) One approach to the missing data is to just ignore it and just use the audiograms. The problem with this approach is that audiograms only quantifies the hearing threshold, and our speech in noise audio samples were not played that quietly. Nevertheless, audiograms are the most common way of characterising hearing loss."),(0,n.kt)("p",null,"2) Alternatively, a method to use the partial data could be developed, and we expect this would help with speech intelligibility prediction. You will find plenty of data science blog posts, ",(0,n.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/all-about-missing-data-handling-b94b8b5d2184"},"e.g. towards data science")," discussing different approaches."),(0,n.kt)("p",null,"A key question is whether the missing data is 'missing at random' i.e. is the distribution of the missing data expected to be the same as that of the present data? For the prediction challenge, this would mean the missing triple-digit-test values are coming from some random sample of the listeners, who'd be no different from the listeners who did complete the triple-digital-test. Unfortunately, this might not be true, because the failure to complete the triple-digit-tests could well correlate with hearing loss (e.g. maybe older people with more hearing loss were less likely to do the test). The Clarity data is probably 'missing not at random'."),(0,n.kt)("p",null,"One simple solution is to delete examples with missing data, but the loss of so much data probably makes this undesirable."),(0,n.kt)("p",null,"A more sophisticated approach is to fill gaps in data via ",(0,n.kt)("em",{parentName:"p"},"imputation")," i.e. first estimate values for the missing data and then treat the dataset as complete. A couple of simple approaches for imputation are: (i) use the mean value from the dataset for missing values, and (ii) create a model to estimate the missing data from the audiograms. There are other approaches in data science that could be exploited such as coding the missing values into a 'N/A' category within the input data."))}p.isMDXComponent=!0}}]);