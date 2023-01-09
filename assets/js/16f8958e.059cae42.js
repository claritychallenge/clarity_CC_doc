(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[9909],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(m,l(l({ref:t},h),{},{components:a})):n.createElement(m,l({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36262:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var n=a(87462),i=(a(67294),a(3905)),r=(a(38516),a(44996));const l={id:"icassp2023_data",title:"ICASSP 2023 Data",sidebar_label:"Data Specification",sidebar_position:6},o=void 0,s={unversionedId:"icassp2023/data/icassp2023_data",id:"icassp2023/data/icassp2023_data",title:"ICASSP 2023 Data",description:"To obtain the data and baseline code, please see the download page.",source:"@site/docs/icassp2023/data/icassp2023_data.mdx",sourceDirName:"icassp2023/data",slug:"/icassp2023/data/icassp2023_data",permalink:"/docs/icassp2023/data/icassp2023_data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"icassp2023_data",title:"ICASSP 2023 Data",sidebar_label:"Data Specification",sidebar_position:6},sidebar:"tutorialSidebar_cpc1",previous:{title:"Scene Generation",permalink:"/docs/icassp2023/data/icassp2023_scene_generation"},next:{title:"New evaluation set",permalink:"/docs/icassp2023/data/icassp2023_new_evaluation"}},d={},h=[{value:"A. Training, development and evaluation data",id:"a-training-development-and-evaluation-data",level:2},{value:"B. The scene dataset",id:"b-the-scene-dataset",level:2},{value:"B.1 Training data",id:"b1-training-data",level:3},{value:"B.2 Development data",id:"b2-development-data",level:3},{value:"B.3 Simulated Evaluation data",id:"b3-simulated-evaluation-data",level:3},{value:"B.4 Real Evaluation data",id:"b4-real-evaluation-data",level:3},{value:"C Listener data",id:"c-listener-data",level:2},{value:"D Data file formats and naming conventions",id:"d-data-file-formats-and-naming-conventions",level:2},{value:"D.1 Abbreviations used in filenames",id:"d1-abbreviations-used-in-filenames",level:3},{value:"D.2 General",id:"d2-general",level:3},{value:"D.3 Prompt and transcription data",id:"d3-prompt-and-transcription-data",level:3},{value:"D.4 Source audio files",id:"d4-source-audio-files",level:3},{value:"D.5 Preprocessed scene signals",id:"d5-preprocessed-scene-signals",level:3},{value:"D.6 Enhanced signals",id:"d6-enhanced-signals",level:3},{value:"D.7 Hearing-aid output signals",id:"d7-hearing-aid-output-signals",level:3},{value:"D.8 Room metadata",id:"d8-room-metadata",level:3},{value:"D.9 Scene metadata",id:"d9-scene-metadata",level:3},{value:"D.10 Listener metadata",id:"d10-listener-metadata",level:3},{value:"D.11 Scene-Listener map",id:"d11-scene-listener-map",level:3},{value:"References",id:"references",level:2}],p={toc:h};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To obtain the data and baseline code, please see the ",(0,i.kt)("a",{parentName:"p",href:"../icassp2023_download"},"download page"),"."),(0,i.kt)("h2",{id:"a-training-development-and-evaluation-data"},"A. Training, development and evaluation data"),(0,i.kt)("p",null,"The dataset of 10,000 simulated scenes is split into three sets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"6000 training scenes (available now)"),(0,i.kt)("li",{parentName:"ul"},"2500 development scenes (available now)"),(0,i.kt)("li",{parentName:"ul"},"1500 evaluation scenes (released 1st Feb. 2023)")),(0,i.kt)("p",null,"In addition there will be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A secondary 'real data' evaluation set that will be based on real ecologically-valid recordings and so can highlight the generalizability of the entrants\u2019 approaches beyond the simulations (released 1st February 2023). ",(0,i.kt)("a",{parentName:"li",href:"icassp2023_new_evaluation"},"More information"),".")),(0,i.kt)("h2",{id:"b-the-scene-dataset"},"B. The scene dataset"),(0,i.kt)("p",null,"For the dataset of 10,000 simulated scenes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each scene corresponds to a unique target utterance and unique segment(s) of noise from the interferers. "),(0,i.kt)("li",{parentName:"ul"},"The training, development and evaluation sets are disjoint with respect to the target speakers. "),(0,i.kt)("li",{parentName:"ul"},"Sets are balanced for the gender of the target talker. "),(0,i.kt)("li",{parentName:"ul"},"Entrants must not use the development or evaluation data sets for training. "),(0,i.kt)("li",{parentName:"ul"},"The system submitted should be chosen on the evidence provided by the development set. ")),(0,i.kt)("p",null,"For evaluation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The final ranking will be performed with the (held-out) evaluation sets. "),(0,i.kt)("li",{parentName:"ul"},"Neither evaluation datasets (simulation nor real) have been used in previous Clarity challenges."),(0,i.kt)("li",{parentName:"ul"},"The secondary 'real data' evaluation set will be made using real acoustic mixtures but using loudspeaker playback of target talkers so that the reference speech can be extracted as needed by the objective metrics.")),(0,i.kt)("p",null,"For the training and development set, entrants have access to a diverse range of signals and metadata, with the most important being:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The hearing aid microphone signals"),(0,i.kt)("li",{parentName:"ul"},"The hearing characteristics of the listener (e.g. audiogram)"),(0,i.kt)("li",{parentName:"ul"},"The anechoic target reference and interferer signals.")),(0,i.kt)("p",null,"For training, teams can not use external data but can expand the official training data through automated modifications and remixing, i.e. data augmentation strategies. However, teams that do this must make a second submission using only the official audio files."),(0,i.kt)("p",null,"For evaluation, the data available is more limited, i.e.,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The hearing aid microphone signals"),(0,i.kt)("li",{parentName:"ul"},"The hearing characteristics of the listener (e.g. audiogram)"),(0,i.kt)("li",{parentName:"ul"},"The anechoic target reference signal which will be used by the organisers but not released to entrants.")),(0,i.kt)("p",null,"High-Order Ambisonic Impulse Responses (HOA-IRs) and Head-Related Impulse Response (HRIRs) are used to model how the sound is altered as it propagates through the room and interacts with the head. See the page on ",(0,i.kt)("a",{parentName:"p",href:"/docs/icassp2023/data/icassp2023_scene_generation"},"scene generation")," for more details."),(0,i.kt)("p",null,"Time-domain acoustic signals are generated for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A hearing aid with 3 microphone inputs (front, mid, rear). The hearing aid has a Behind-The-Ear (BTE) form factor; see ",(0,i.kt)("a",{parentName:"li",href:"#fig1"},"Figure 1"),". The distance between microphones is approx. 7.6 mm. The properties of the tube and ear mould are not considered."),(0,i.kt)("li",{parentName:"ul"},"Close to the eardrum."),(0,i.kt)("li",{parentName:"ul"},"The anechoic target reference (front microphone).")),(0,i.kt)("figure",{id:"fig1"},(0,i.kt)("img",{width:"300",src:(0,r.Z)("/img/CEC2/bte_device.png")}),(0,i.kt)("figcaption",null,"Figure 1. Front (Fr), Middle (Mid) and Rear microphones on a BTE hearing aid form.")),(0,i.kt)("p",null,"Head Related Impulse Responses (HRIRs) are used to model how sound is altered as it propagates in a free-field and interacts with the head (i.e., no room is included). These are taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://uol.de/mediphysik/downloads/hearingdevicehrtfs"},"OlHeadHRTF database")," with permission. These include HRIRs for human heads and for three types of head-and-torso simulator/mannekin. The eardrum HRIRs (labelled ",(0,i.kt)("inlineCode",{parentName:"p"},"ED"),") are for a position close to the eardrum of the open ear."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rpf")," files and ",(0,i.kt)("inlineCode",{parentName:"p"},"ac")," files are specification files for the geometric room acoustic model that include a complete description of the room, both in terms of geometry and room materials."),(0,i.kt)("h3",{id:"b1-training-data"},"B.1 Training data"),(0,i.kt)("p",null,"For each scene in the training data the following signals and metadata are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The target and interferer HOA-IRs (4 pairs: front, mid, rear and eardrum for left and right ears)."),(0,i.kt)("li",{parentName:"ul"},"The mono target and interferer signals (pre-convolution)."),(0,i.kt)("li",{parentName:"ul"},"For each hearing aid microphone (channels 1-3 where channel 1 is front, channel 2 is mid and channel 3 is rear) and a position close to the eardrum (channel 0):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The target convolved with the appropriate HOA-IRs and downmixed;"),(0,i.kt)("li",{parentName:"ul"},"The interferers convolved with the appropriate HOA-IRs and downmixed;"),(0,i.kt)("li",{parentName:"ul"},"The sum of the target and interferer convolved with the appropriate HOA-IRs and downmixed; (i.e. the noisy signals that would be received by the hearing aid)"))),(0,i.kt)("li",{parentName:"ul"},"The target convolved with the anechoic HOA-IRs and downmixed for channel 1 for each ear (\u2018target_anechoic\u2019). For use as a reference when computing HASPI scores."),(0,i.kt)("li",{parentName:"ul"},"Metadata describing the scene: a JSON file containing, e.g., the filenames of the sources, the location of the sources, the viewvector of the target source, the location and viewvector of the receiver, the room dimensions (see specification below), and the room number, which corresponds to the RAVEN BRIR, rpf and ac files."),(0,i.kt)("li",{parentName:"ul"},"A signal describing the head rotation (i.e. azimuthal angle at each sample)")),(0,i.kt)("h3",{id:"b2-development-data"},"B.2 Development data"),(0,i.kt)("p",null,"This is made available to allow you to fully examine the performance of your system. Ground truth data (i.e., the premixed target and interferers are available in the development set)"),(0,i.kt)("p",null,"Development data also contains target speaker adaptation sentences, i.e., four utterances from each of the target speakers. These will also be available in the evaluation data. i.e., systems can use these utterances in conjunction with the known target ID to inform their system of the which speaker in the scene should be attended. "),(0,i.kt)("p",null,"Note, that the data available for the evaluation will be much more limited, e.g. it will not contain premixed ground truth signals or scene metadata, (see Section ",(0,i.kt)("a",{parentName:"p",href:"#b3-evaluation-data"},"B.3"),")."),(0,i.kt)("p",null,"When using the development data for evaluation, your hearing aid enhancement model should only be using the types of data available in the evaluation data set (see below)."),(0,i.kt)("h3",{id:"b3-simulated-evaluation-data"},"B.3 Simulated Evaluation data"),(0,i.kt)("p",null,"The following data will only be available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Audio: the sum of the target and interferers for each hearing aid microphone."),(0,i.kt)("li",{parentName:"ul"},"The ID of the listener who will be auditioning the processed scene."),(0,i.kt)("li",{parentName:"ul"},"The listener characterisation data for these listeners."),(0,i.kt)("li",{parentName:"ul"},"ID of target talker and a few examples of clean audio that are not the same as the target utterance."),(0,i.kt)("li",{parentName:"ul"},"The head rotation signal, i.e. as might be recovered from hearing aid motion sensors. (Systems can use this signal but should also be evaluated without using it.)"),(0,i.kt)("li",{parentName:"ul"},"Speaker adaptation sentence - 4 clean utterances for each target speaker.")),(0,i.kt)("p",null,"One challenge will be identifying the target talker from the hearing aid microphone signals. There are two possibilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ID of the target talker is given with examples of clean audio. This would allow an algorithm to learn characteristics of the target talker to then help it identify the voice in the mixture."),(0,i.kt)("li",{parentName:"ul"},"The azimuth of the target and the starting time of the utterance are both roughly known from the scene generation metadata statistics.")),(0,i.kt)("p",null,"These two approaches mimic what is available to human listeners. They might focus on a known voice or they might use visual cues to know roughly where and when someone is talking."),(0,i.kt)("h3",{id:"b4-real-evaluation-data"},"B.4 Real Evaluation data"),(0,i.kt)("p",null,"The following data will only be available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Audio: the sum of the target and interferers for each hearing aid microphone."),(0,i.kt)("li",{parentName:"ul"},"The ID of the listener who will be auditioning the processed scene."),(0,i.kt)("li",{parentName:"ul"},"The listener characterisation data for these listeners."),(0,i.kt)("li",{parentName:"ul"},"ID of target talker and a few examples of clean audio that are not the same as the target utterance."),(0,i.kt)("li",{parentName:"ul"},"Speaker adaptation sentence - 4 clean utterances for each target speaker."),(0,i.kt)("li",{parentName:"ul"},"Further details to be confirmed.")),(0,i.kt)("h2",{id:"c-listener-data"},"C Listener data"),(0,i.kt)("p",null,"We will provide metadata characterising the hearing abilities of the listeners so the audio signals you generate for evaluation can be individualised to the specific listeners who will be hearing them."),(0,i.kt)("p",null,"The same types of data are available for training, development and evaluation."),(0,i.kt)("p",null,"A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear. They will be fluent in British English."),(0,i.kt)("p",null,"The quantification of the listeners\u2019 hearing is done with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Left and right pure tone air-conduction audiograms. These measure the threshold at which people can hear a pure-tone sound."),(0,i.kt)("li",{parentName:"ul"},"Results from the DTT (digit-triplet test, also known as a triple digit test)\u200b")),(0,i.kt)("p",null,"The audiogram is the standard clinical measurement of hearing ability. It\u2019s the pure-tone threshold of hearing in each ear, measured in quiet in a sound booth. The procedure is standardized e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://www.thebsa.org.uk/resources/pure-tone-air-bone-conduction-threshold-audiometry-without-masking/"},"British Society of Audiology Recommended Procedure"),'. Typically it\u2019s measured at octave frequencies and important intermediate frequencies.The values of the audiogram defines how much gain the hearing aid needs to apply, with the calculation typically done by one of a group of "prescription rules", e.g. ',(0,i.kt)("a",{parentName:"p",href:"https://www.psychol.cam.ac.uk/hearing/cam2-cameq2-hf-hearing-aid-fitting-software"},"CAMFIT"),", ",(0,i.kt)("a",{parentName:"p",href:"https://hearworks.com.au/technology/nal-nl2/"},"NAL-NL2")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.dslio.com/?page_id=95"},"DSL")," ","."),(0,i.kt)("p",null,"Note that the scale of an audiogram is in \u201cdB HL\u201d = \u201cdB Hearing Level\u201d. This is not dB SPL; instead, it\u2019s relative to an international standard such that 0-dB is \u201cnormal hearing\u201d at every frequency. For background see ",(0,i.kt)("a",{parentName:"p",href:"https://hearingreview.com/hearing-loss/patient-care/evaluation/why-the-audiogram-is-upside-down"},"Why the Audiogram Is Upside-down | The Hearing Review")," and ",(0,i.kt)("a",{parentName:"p",href:"https://hearingreview.com/resource-center/expert-insight/quest-audiometric-zero"},"The Quest for Audiometric Zero | The Hearing Review")),(0,i.kt)("p",null,"The DTT is an adaptive test of speech-in-noise ability. In each trial a listener hears three spoken digits (e.g. 3-6-1) against a background of noise at a given signal-to-noise-ratio (SNR). The task is to respond on a keypad with those three digits in the order they were presented. If the listener gets all three correct, then the SNR is reduced for the next trial so making it slightly harder. If the listener makes any mistake (i.e., any digit wrong, or the order wrong) then the SNR is increased, so making the next trial slightly easier. The test carries on trial-by-trial. The test asymptotes to the SNR at which the participant is equally likely to get all three correct or not, with a few tens of trials needed to get an acceptable result. DTT tests are now used world-wide to measure hearing as they are easy to make in any local language, to explain to participants and to do, and moreover can be done over the internet or telephone as they measure a relative threshold (signal-to-noise ratio), not an absolute threshold in dB SPL. Listeners are encouraged to set a volume that is comfortable and that does not distort or crackle, but is not too quiet."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/33840339/"},"This paper")," is a recent scoping review of the field. The particular version we used is ",(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/25127323/"},"Vlaming et al.'s high-frequency DTT"),", which uses a high-pass noise as the masker. Ours starts at -14 dB SNR, goes up/down at 2 dB steps per trial, and continues for 40 trials."),(0,i.kt)("p",null,"In the datafile, an average of the SNR for the last 30 trials is provided (labelled 'threshold'). For reference, the SNRs are supplied for each trial as well. The very first trial is practice and is not scored."),(0,i.kt)("h2",{id:"d-data-file-formats-and-naming-conventions"},"D Data file formats and naming conventions"),(0,i.kt)("h3",{id:"d1-abbreviations-used-in-filenames"},"D.1 Abbreviations used in filenames"),(0,i.kt)("p",null,"The following abbreviations are used consistently throughout the filenames and references in the metadata."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R")," \u2013 \u201croom\u201d: e.g., \u201cR02678\u201d # Room ID linking to RAVEN rpf file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"S")," \u2013 \u201cscene\u201d: e.g., S00121 # Scene ID for a particular setup in a room I.e., room + choice of target and interferer signals"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BNC")," \u2013 BNC sentence identifier e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"BNC_A06_01702")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CH")," \u2013",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CH0")," \u2013 eardrum signal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CH1")," \u2013 front signal, hearing aid channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CH2")," \u2013 middle signal, hearing aid channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CH3")," \u2013 rear signal, hearing aid channel"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"I"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"i1")," \u2013 Interferer, i.e., noise or sentence ID for the interferer/masker"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T")," \u2013 talker who produced the target speech sentences"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L")," \u2013 listener"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E")," \u2013 entrant (identifying a team participating in the challenge)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"t")," \u2013 target (used in BRIRs and RAVEN project \u2018rpf\u2019 files)")),(0,i.kt)("h3",{id:"d2-general"},"D.2 General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Audio and HOA-IRs will be 44.1 kHz 32-bit wav files in either mono or stereo as appropriate."),(0,i.kt)("li",{parentName:"ul"},"Where stereo signals are provided the two channels represent the left (0) and right (1) signals of the ear or hearing aid microphones."),(0,i.kt)("li",{parentName:"ul"},"0 dB FS in the audio signals corresponds to 100 dB SPL."),(0,i.kt)("li",{parentName:"ul"},"Metadata will be stored in JSON or csv format as appropriate with the exception of",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Room descriptions are stored as RAVEN project \u2018rpf\u2019 configuration files and \u2018ac\u2019 files. (However, key details are reflected in the scene.json files)"))),(0,i.kt)("li",{parentName:"ul"},"Signals are saved within the Python code as 32-bit floating point by default."),(0,i.kt)("li",{parentName:"ul"},"Output signals for the listening tests will be required to be in 16-bit format.")),(0,i.kt)("h3",{id:"d3-prompt-and-transcription-data"},"D.3 Prompt and transcription data"),(0,i.kt)("p",null,"The following text is available for the target speech:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prompts are the text that was given to the talkers to say."),(0,i.kt)("li",{parentName:"ul"},"\u2018Dot\u2019 transcriptions contain the text as it was spoken in a form more suitable for scoring tools."),(0,i.kt)("li",{parentName:"ul"},"These are stored in the master json metadata file.")),(0,i.kt)("h3",{id:"d4-source-audio-files"},"D.4 Source audio files"),(0,i.kt)("p",null,"Wav files containing the original source materials.\nOriginal target sentence recordings:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<Talker ID>_<BNC sentence identifier>.wav")),(0,i.kt)("h3",{id:"d5-preprocessed-scene-signals"},"D.5 Preprocessed scene signals"),(0,i.kt)("p",null,"Audio files storing the signals picked up by the hearing aid microphone that are ready for processing. Separate signals are generated for each hearing aid microphone pair or \u2018channel\u2019."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_target_<Channel ID>.wav")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_interferer_<Channel ID>.wav")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_mixed_<Channel ID>.wav")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_target_anechoic.wav")," - at hearing device front microphone"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_hr.wav")," - head rotation signal")),(0,i.kt)("p",null,"Scene ID \u2013 S00001 to S10000"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"S followed by 5 digit integer with 0 pre-padding")),(0,i.kt)("p",null,"Channel ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CH0 \u2013 Eardrum signal"),(0,i.kt)("li",{parentName:"ul"},"CH1 \u2013 Hearing aid front microphone"),(0,i.kt)("li",{parentName:"ul"},"CH2 \u2013 Hearing aid middle microphone"),(0,i.kt)("li",{parentName:"ul"},"CH3 \u2013 Hearing aid rear microphone")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"anechoic signal")," is the signal that will be used as the referernce in the HASPI evaluation."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"head rotation")," signal indicates the precise azimuthal angle of the head at each sample. It is stored as a floating point wav file with values between -1 and +1 where the range maps linearly from -180 degrees to +180 degrees. Teams are free to use this signal in their hearing aid algorithms, but if you do so we will ask you to also submit a version of your system that does not use it, so that the benefit of known head motion can be measured."),(0,i.kt)("h3",{id:"d6-enhanced-signals"},"D.6 Enhanced signals"),(0,i.kt)("p",null,"The signals that are output by the baseline enhancement algorithm."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_<Listener ID>_enhanced.wav")," # Enhancement output signal (i.e., as submitted by the challenge entrants)")),(0,i.kt)("p",null,"Listener ID \u2013 ID of the listener panel member, e.g., L001 to L100 for initial \u2018pseudo-listeners\u2019, etc."),(0,i.kt)("h3",{id:"d7-hearing-aid-output-signals"},"D.7 Hearing-aid output signals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Scene ID>_<Listener ID>_HA-output.wav")," # i.e., the enhanced signals after processing with the supplied hearing aid amplification.")),(0,i.kt)("p",null,"Listener ID \u2013 ID of the listener panel member, e.g., L001 to L100 for initial \u2018pseudo-listeners\u2019, etc."),(0,i.kt)("h3",{id:"d8-room-metadata"},"D.8 Room metadata"),(0,i.kt)("p",null,"JSON file containing the description of a room. This is the data from which the ambisonic room impulse response are generated. It stores the fixed room, listener, target and interferer geometry but does not specify the dynamic factors (e.g. signals, SNRs, head movements etc) that are needed to fully define a scene."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n {\n   "name": "R00001", # ID of room linking to RAVEN rpf and ac files\n   "dimensions": "6.9933x3x3" # Room dimensions in metres,\n   "target": { # target positions (x,y,z) and view vectors (look directions, x,y,z)\n     "position": [-0.3, 2.4, 1.2],\n     "view_vector": [0.071, 0.997, 0.0],\n   },\n   "listener": {\n     "position": [-0.1, 5.2, 1.2],\n     "view_vector": [0.071, 0.997, 0.0],\n   },\n   "interferers": [\n     {\n       "position": [0.4, 4.0, 1.2],\n     },\n     { # etc, up to three interferers\n     }\n   ],\n },\n ...\n]\n')),(0,i.kt)("h3",{id:"d9-scene-metadata"},"D.9 Scene metadata"),(0,i.kt)("p",null,"JSON file containing a description of the scene. It is a list of dictionaries with each entry representing a unique scene. A scene can be considered to be a room (see Section ",(0,i.kt)("a",{parentName:"p",href:"#d7-room-metadata"},"D.7"),")  plus the full set of listener, target and interferer details. Note, many scenes can be generated from a single room, i.e. each using different listener, target and interferer settings. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "scene": "S00001",  # the unique scene ID\n    "room":: "R00001", # ID of room linking to rooms.json\n    "target": { \n      "name": "T005_JYD_04274", # target speaker code and BNCid\n      "time_start": 107210, # start time of target in samples\n      "time_end": 217019 # end time of target in samples\n    },\n    "listener": {\n      "rotation": [ # Defines the head motion - list of time, direction pairs\n        {\n          "sample": 88200,\n          "angle": 30  # Azimuth angle in degrees\n        },\n        {\n          "sample": 176400,\n          "angle\u201d: 50 \n        }\n      ],\n      "hrir_filename":  ["VP_N4-ED",\n        "VP_N4-BTE_fr",\n        "VP_N4-BTE_mid",\n        "VP_N4-BTE_rear"] # HRIR filename for each channel to generate\n    },\n    "interferers": [\n      {\n        "position": 1,  # Index of interferer position (See rooms.json)\n        "time_start": 0, # time of interferer onset in samples\n        "time_end": 261119, # time of interferer offset in samples\n        "name": "track_1353255", # interferer name\n        "type": "music", # interferer type: speech, noise or music\n        "offset": 4076256 # index into interferer file at which to extract sample\n      },\n      { # etc, up to three interferers\n      }\n    ],\n    "dataset": "train", # the dataset to which the scene belongs: train, dev or eval\n    "duration": 261119,  # total duration of scene in samples\n    "SNR": 6.89  # targe SNR for the scene\n  },\n  ...\n]\n')),(0,i.kt)("p",null,"There are JSON files containing the scene specifications per dataset, e.g., scenes.train.json.- Note, that the scene ID and room ID might have a one-to-one mapping in the challenge, but are not necessarily the same. Multiple scenes can be made by changing the target and masker choices for a given room. E.g., participants wanting to expand the training data could remix multiple scenes from the same room."),(0,i.kt)("p",null,"The listener ID is not stored in the scene metadata; this information is stored separately in a scenes_listeners.json file which maps scenes to listeners, ie. telling you which listener (or listeners) will be listening to which scenes in the evaluation (see Section ",(0,i.kt)("a",{parentName:"p",href:"#d9-listener-metadata"},"D.9"),")."),(0,i.kt)("p",null,"Noise interferers are labelled with a type \u201cmusic\u201d, \u201cnoise\u201d or \u201cspeech\u201d and then have a unique name identifying the file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"speech"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"<ACCENT_CODE>_<SPEAKER_ID>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"ACCENT_CODE")," is a three letter code identify the accent region and gender of the speaker and ",(0,i.kt)("inlineCode",{parentName:"li"},"SPEAKER_ID"),' is a 5-digit ID specific to an individual speaker. E.g. "mif_02484" is a UK ',(0,i.kt)("strong",{parentName:"li"},"mi"),"dlands accented ",(0,i.kt)("strong",{parentName:"li"},"f"),"emale, speaker 02484. The speech comes from Demirshan et al. ","[",(0,i.kt)("a",{parentName:"li",href:"#references"},"1"),"]"," which provides more details."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"noise"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"CIN_<NOISE_TYPE>_<NOISE_ID>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"NOISE_TYPE")," is one of ",(0,i.kt)("inlineCode",{parentName:"li"},"dishwasher"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fan"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"hairdryer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kettle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"microwave"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vacuum")," (vacuum cleaner) or ",(0,i.kt)("inlineCode",{parentName:"li"},"washing")," (washing machine) and ",(0,i.kt)("inlineCode",{parentName:"li"},"NOISE_ID")," is  a unique 3-digit code for the sample."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"music"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"track_<TRACK_ID>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"TRACK_ID")," is unique 7-digit track identifier taken from the MTG Jamendo database. ","[",(0,i.kt)("a",{parentName:"li",href:"#references"},"2"),"]")),(0,i.kt)("p",null,"Given the type and name, further interferer metadata can be found in the files ",(0,i.kt)("inlineCode",{parentName:"p"},"masker_speech_list.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"masker_noise_list.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"masker_music_list.json")," which are distributed with the challenge."),(0,i.kt)("h3",{id:"d10-listener-metadata"},"D.10 Listener metadata"),(0,i.kt)("p",null,"Audiogram data is stored in a single JSON file with the following format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "L0001": {\n        "name": "L0001",\n        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],\n        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],\n        "audiogram_levels_r": [ \u2026 ],\n    },\n    "L0002": {\n        ...\n    },\n    ...\n}\n')),(0,i.kt)("p",null,"Additional metadata (e.g. digit triple test results) are stored in a csv file. DETAILS"),(0,i.kt)("h3",{id:"d11-scene-listener-map"},"D.11 Scene-Listener map"),(0,i.kt)("p",null,"JSON file named scenes_listeners.json dictates which scenes are to be processed by which listeners."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "S00001": ["L0001", "L0002", "L0003"],\n    "S00002": ["L0003", "L0005", "L0007"],\n    ... \n}\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Demirsahin, Isin and Kjartansson, Oddur and Gutkin, Alexander and Rivera, Clara, "Open-source Multi-speaker Corpora of the English Accents in the British Isles", Proceedings of The 12th Language Resources and Evaluation Conference (LREC), 6532--6541, 2020, ',(0,i.kt)("a",{parentName:"li",href:"https://openslr.org/83/"},"Avialable Online")),(0,i.kt)("li",{parentName:"ol"},'Bogdanov, Dmitry and Won, Minz and Tovstogan, Philip and Porter, Alastair and Serra, Xavier, "The MTG-Jamendo Dataset for Automatic Music Tagging", In Proc. Machine Learning for Music Discovery Workshop, International Conference on Machine Learning (ICML 2019), 2019, Long Beach, CA, United States", ',(0,i.kt)("a",{parentName:"li",href:"https://mtg.github.io/mtg-jamendo-dataset/"},"Available Online"))))}c.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748}}]);