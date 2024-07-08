"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[7037],{28450:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=i(74848),s=i(28453);const t={id:"cec1_data",title:"CEC1 Data",sidebar_label:"CEC1 Specification",sidebar_position:5},r=void 0,l={id:"cec1/data/cec1_data",title:"CEC1 Data",description:"To obtain the data and baseline code, please see the download page.",source:"@site/docs/cec1/data/cec1_data.mdx",sourceDirName:"cec1/data",slug:"/cec1/data/cec1_data",permalink:"/docs/cec1/data/cec1_data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"cec1_data",title:"CEC1 Data",sidebar_label:"CEC1 Specification",sidebar_position:5},sidebar:"tutorialSidebar_cec1",previous:{title:"The Scenario",permalink:"/docs/cec1/data/cec1_scenario"},next:{title:"Software",permalink:"/docs/category/software"}},o={},d=[{value:"A. Training, development, evaluation data",id:"a-training-development-evaluation-data",level:2},{value:"B. The scene dataset",id:"b-the-scene-dataset",level:2},{value:"B.1 Training data",id:"b1-training-data",level:3},{value:"B.2 Development data",id:"b2-development-data",level:3},{value:"B.3 Evaluation scene data",id:"b3-evaluation-scene-data",level:3},{value:"C Listener data",id:"c-listener-data",level:2},{value:"C.1 Training and development data",id:"c1-training-and-development-data",level:3},{value:"C.2 Evaluation data",id:"c2-evaluation-data",level:3},{value:"D Data file formats and naming conventions",id:"d-data-file-formats-and-naming-conventions",level:2},{value:"D.1 Abbreviations in Filenames",id:"d1-abbreviations-in-filenames",level:3},{value:"D.2 General",id:"d2-general",level:3},{value:"D.3 Prompt and transcription data",id:"d3-prompt-and-transcription-data",level:3},{value:"D.4 Source audio files",id:"d4-source-audio-files",level:3},{value:"D.5 Preprocessed scene signals",id:"d5-preprocessed-scene-signals",level:3},{value:"D.6 Enhanced signals",id:"d6-enhanced-signals",level:3},{value:"D.7 Enhanced signals processed by the hearing loss model",id:"d7-enhanced-signals-processed-by-the-hearing-loss-model",level:3},{value:"D.8 Scene metadata",id:"d8-scene-metadata",level:3},{value:"D.9 Listener metadata",id:"d9-listener-metadata",level:3},{value:"D.10 Scene-Listener map",id:"d10-scene-listener-map",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"To obtain the data and baseline code, please see the download page."}),"\n",(0,a.jsx)(n.h2,{id:"a-training-development-evaluation-data",children:"A. Training, development, evaluation data"}),"\n",(0,a.jsxs)(n.p,{children:["The dataset is split into these three subsets: training (",(0,a.jsx)(n.code,{children:"train"}),"), development (",(0,a.jsx)(n.code,{children:"dev"}),") and evaluation (",(0,a.jsx)(n.code,{children:"eval"}),")."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You should only train on the training set."}),"\n",(0,a.jsx)(n.li,{children:"The system submitted should be chosen on the evidence provided by the development set."}),"\n",(0,a.jsx)(n.li,{children:"The final listening and ranking will be performed with the (held-out) evaluation set."}),"\n",(0,a.jsx)(n.li,{children:"For more information on supplementing the training data, please see the rules. The evaluation dataset will be made available one month before the challenge submission deadline."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"b-the-scene-dataset",children:"B. The scene dataset"}),"\n",(0,a.jsx)(n.p,{children:"The complete dataset is composed of 10,000 scenes split into the following sets:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Training (6000 scenes, 24 speakers);"}),"\n",(0,a.jsx)(n.li,{children:"Development (2500 scenes, 10 speakers);"}),"\n",(0,a.jsx)(n.li,{children:"Evaluation (1500 scenes, 6 speakers)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Each scene corresponds to a unique target utterance and a unique segment of noise from an interferer. The training, development and evaluation sets are disjoint for target speaker. The three sets are balanced for target speaker gender."}),"\n",(0,a.jsx)(n.p,{children:"Binaural Room Impulse Responses (BRIRs) are used to model how the sound is altered as it propagates through the room and interacts with the head. The audio signals for the scenes are generated by convolving source signals with the BRIRs and summing. See the page on modelling the scenario for more details. Randomised room dimensions, target and interferer locations are used."}),"\n",(0,a.jsx)(n.p,{children:"The BRIRs are generated for:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A hearing aid with 3 microphone inputs (front, mid, rear). The hearing aid has a Behind-The-Ear (BTE) form factor; see Figure 1. The distance between microphones is approx. 7.6 mm. The properties of the tube and ear mould are not considered."}),"\n",(0,a.jsx)(n.li,{children:"Close to the eardrum."}),"\n",(0,a.jsx)(n.li,{children:"The anechoic target reference (front microphone)."}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/img/tutorial/BTE-e1606144768702.png",width:"200"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Figure 1. Front (Fr), Middle (Mid) and Rear microphones on a BTE hearing aid form."})}),"\n",(0,a.jsx)(n.p,{children:"Head Related Impulse Responses (HRIRs) are used to model how sound is altered as it propagates in a free-field and interacts with the head (i.e., no room is included). These are taken from the OlHeadHRTF database with permission. These include HRIRs for human heads and for three types of head-and-torso simulator/mannekin. The eardrum HRIRs (labelled ED) are for a position close to the eardrum of the open ear."}),"\n",(0,a.jsx)(n.p,{children:"rpf files are specification files for the geometric room acoustic model that include a complete description of the room."}),"\n",(0,a.jsx)(n.h3,{id:"b1-training-data",children:"B.1 Training data"}),"\n",(0,a.jsx)(n.p,{children:"For each scene in the training data the following signals and metadata are available:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The target and interferer BRIRs (4 pairs: front, mid, rear and eardrum for left and right ears)."}),"\n",(0,a.jsx)(n.li,{children:"HRIRs including those corresponding to the target azimuth."}),"\n",(0,a.jsx)(n.li,{children:"The mono target and interferer signals (pre-convolution)."}),"\n",(0,a.jsxs)(n.li,{children:["For each hearing aid microphone (channels 1-3 where channel 1 is front, channel 2 is mid and channel 3 is rear) and a position close to the eardrum (channel 0):","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The target convolved with the appropriate BRIR;"}),"\n",(0,a.jsx)(n.li,{children:"The interferer convolved with the appropriate BRIR;"}),"\n",(0,a.jsx)(n.li,{children:"The sum of the target and interferer convolved."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"The target convolved with the anechoic BRIR (channel 1) for each ear (\u2018target_anechoic\u2019)."}),"\n",(0,a.jsx)(n.li,{children:"Metadata describing the scene: a JSON file containing, e.g., the filenames of the sources, the location of the sources, the viewvector of the target source, the location and viewvector of the receiver, the room dimensions (see specification below), and the room number, which corresponds to the RAVEN BRIR, rpf and ac files."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Software for generating more training data is also available."}),"\n",(0,a.jsx)(n.h3,{id:"b2-development-data",children:"B.2 Development data"}),"\n",(0,a.jsx)(n.p,{children:"The same data as for the training will be made available to allow you to fully examine the performance of your system. Note, that the data available for the evaluation will be much more limited (see B.3)."}),"\n",(0,a.jsx)(n.p,{children:"For each scene, during development, your hearing aid enhancement model must only use the following input signals/data:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The sum of the target and interferer \u2013 mixed at the SNR specified in the scene metadata \u2013 at one or more hearing aid microphones (CH1, CH2 and/or CH3)."}),"\n",(0,a.jsx)(n.li,{children:"The IDs of the listeners assigned to the scene in the metadata provided."}),"\n",(0,a.jsx)(n.li,{children:"The audiograms of these listeners."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"b3-evaluation-scene-data",children:"B.3 Evaluation scene data"}),"\n",(0,a.jsx)(n.p,{children:"For each scene in the evaluation data only the following will be available:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The sum of the target and interferer for each hearing aid microphone."}),"\n",(0,a.jsx)(n.li,{children:"The ID of the evaluation panel members/listeners who will be listening to the processed scene."}),"\n",(0,a.jsx)(n.li,{children:"The audiograms of these listeners."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"c-listener-data",children:"C Listener data"}),"\n",(0,a.jsx)(n.h3,{id:"c1-training-and-development-data",children:"C.1 Training and development data"}),"\n",(0,a.jsx)(n.p,{children:"A sample of pure tone air-conduction audiograms that characterise the hearing impairment of potential listeners, split into training and development sets."}),"\n",(0,a.jsx)(n.h3,{id:"c2-evaluation-data",children:"C.2 Evaluation data"}),"\n",(0,a.jsx)(n.p,{children:"You will be given the left and right pure tone air-conduction audiograms for the listening panel, so the signals you generate for evaluation can be individualised to the listeners."}),"\n",(0,a.jsx)(n.p,{children:"A panel of 50 hearing-aided listeners will be recruited for the evaluation panel. We plan that they will be experienced bilateral hearing-aid users (they use two hearing aids but the hearing loss may be asymmetrical) with an averaged hearing loss as measured by pure tone air-conduction of between 25 and about 60 dB in the better ear, with fluent speaking of (and listening to) British English."}),"\n",(0,a.jsx)(n.h2,{id:"d-data-file-formats-and-naming-conventions",children:"D Data file formats and naming conventions"}),"\n",(0,a.jsx)(n.h3,{id:"d1-abbreviations-in-filenames",children:"D.1 Abbreviations in Filenames"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"R"})," \u2013 \u201croom\u201d:  e.g., \u201cR02678\u201d   # Room ID linking to RAVEN rpf file"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"S"})," \u2013  \u201cscene\u201d:  e.g., S00121  # Scene ID for a particular setup in a room I.e., room + choice of target and interferer signals"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"BNC"})," \u2013 BNC sentence identifier  e.g. BNC_A06_01702"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH"})," \u2013","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH0"})," \u2013 eardrum signal"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH1"})," \u2013 front signal, hearing aid channel"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH2"})," \u2013 middle signal, hearing aid channel"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH3"})," \u2013 rear signal, hearing aid channel"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"I"}),"/",(0,a.jsx)(n.code,{children:"i1"})," \u2013 Interferer, i.e., noise or sentence ID for the interferer/masker"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"T"})," \u2013 talker who produced the target speech sentences"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"L"})," \u2013 listener"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"E"})," \u2013 entrant (identifying a team participating in the challenge)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"t"})," \u2013 target (used in BRIRs and RAVEN project \u2018rpf\u2019 files)"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d2-general",children:"D.2 General"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Audio and BRIRs will be 44.1 kHz 32 bit wav files in either mono or stereo as appropriate."}),"\n",(0,a.jsx)(n.li,{children:"Where stereo signals are provided the two channels represent the left and right signals of the ear or hearing aid microphones."}),"\n",(0,a.jsx)(n.li,{children:"HRIRs have a sampling rate of 48 kHz."}),"\n",(0,a.jsx)(n.li,{children:"Metadata will be stored in JSON format wherever possible."}),"\n",(0,a.jsx)(n.li,{children:"Room descriptions are stored as RAVEN project \u2018rpf\u2019 configuration files."}),"\n",(0,a.jsx)(n.li,{children:"Signals are saved within the Python code as 32-bit floating point by default."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d3-prompt-and-transcription-data",children:"D.3 Prompt and transcription data"}),"\n",(0,a.jsx)(n.p,{children:"The following text is available for the target speech:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Prompts are the text that was supposed to be spoken as presented to the readers."}),"\n",(0,a.jsx)(n.li,{children:"\u2018Dot\u2019 transcriptions contain the text as it was spoken in a form more suitable for scoring tools."}),"\n",(0,a.jsx)(n.li,{children:"These are stored in the master json metadata file."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d4-source-audio-files",children:"D.4 Source audio files"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Wav files containing the original source materials."}),"\n",(0,a.jsx)(n.li,{children:"Original target sentence recordings:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"  <Talker ID>_<BNC sentence identifier>.wav\n"})}),"\n",(0,a.jsx)(n.h3,{id:"d5-preprocessed-scene-signals",children:"D.5 Preprocessed scene signals"}),"\n",(0,a.jsx)(n.p,{children:"Audio files storing the signals picked up by the hearing aid microphone ready for processing. Separate signals are generated for each hearing aid microphone pair or \u2018channel\u2019."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"<Scene ID>_target_<Channel ID>.wav\n<Scene ID>_interferer_<Channel ID>.wav\n<Scene ID>_mixed_<Channel ID>.wav\n<Scene ID>_target_anechoic.wav\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Scene ID"})," \u2013  S00001  to S10000"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"S"})," followed by 5 digit integer with 0 pre-padding"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Channel ID"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH0"})," \u2013 Eardrum signal"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH1"})," \u2013 Hearing aid front microphone"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH2"})," \u2013 Hearing aid middle microphone"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CH3"})," \u2013 Hearing aid rear microphone"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d6-enhanced-signals",children:"D.6 Enhanced signals"}),"\n",(0,a.jsx)(n.p,{children:"The signals that are output by the enhancement (hearing aid) model."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_HA-output.wav"})," #HA output signal (i.e., as submitted by the challenge entrants)"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Listener ID"}),"  \u2013 ID of the listener panel member,  e.g., L001 to L100 for initial \u2018pseudo-listeners\u2019, etc.  We are no longer providing the script for post-processing signals in preparation for the listener panel."]}),"\n",(0,a.jsx)(n.h3,{id:"d7-enhanced-signals-processed-by-the-hearing-loss-model",children:"D.7 Enhanced signals processed by the hearing loss model"}),"\n",(0,a.jsx)(n.p,{children:"The signals that are produced by the hearing loss (HL) model."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_HL-output.wav"})," HL output signal"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_HL-mixoutput.wav"}),"  HL-processed CH0 signal, bypassing HA processing, for comparison"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_flat0dB_HL-output"})," HL-output for flat 0 dB audiogram processed signal for comparison"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_HLddf-output"})," unit impulse signal output by HL model for time-alignment of signals before processing by the baseline speech intelligibility model"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d8-scene-metadata",children:"D.8 Scene metadata"}),"\n",(0,a.jsx)(n.p,{children:"JSON file containing a description of the scene and assigns the scene to a specific member of the listening panel. It is a hierarchical dictionary, with the top level being scenes indexed by unique scene ID, and each scene described by a second-level dictionary. Here, viewvector indicates the direction vector or line of sight."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="scenes.json"',children:'[\n   {\n     "scene": "S00001", \n     "room": {\n       "name": "R00001",\n       "dimensions": "5.9x3.4186x2.9" // Room dimensions in metres\n     },\n     "SNR": 3.8356,\n     "hrirfilename": "VP_N5-ED", // HRIR filename\n     "target": { // target positions (x,y,z) and view vectors (look directions, x,y,z)\n       "Positions": [ \n         -0.5,\n         3.4,\n         1.2\n       ],\n       "ViewVectors": [\n         0.291,\n         -0.957,\n         0\n       ],\n       "name": "T022_HCS_00002", // target speaker code and BNCid\n       "nsamples": 153468, // length of target speech in samples\n     },\n     "listener": {\n       "Positions": [\n         0.2,\n         1.1,\n         1.2\n       ],\n       "ViewVectors": [\n         -0.414,\n         0.91,\n         0\n       ]\n     },\n     "interferer": {\n       "Positions": [\n         0.4,\n         3.2,\n         1.2\n       ],\n       "name": "CIN_dishwasher_012", // interferer name\n       "nsamples": 1190700, // interferer length in samples\n       "duration": 27, // interferer duration in seconds\n       "type": "noise", // interferer type: noise or speech\n       "offset": 182115, // interferer segment starts at n samples from beginning of recording\n       },\n     "azimuth_target_listener": -7.55, // angle azimuth in degrees of target for receiver\n     "azimuth_interferer_listener": -29.92, // angle azimuth in degrees of interferer for receiver\n     "dataset": "train", // dataset: train, dev or eval/test\n     "pre_samples": 88200, // number of samples of interferer before target onset\n     "post_samples": 44100 // number of samples of interferer after target offset\n   },\n   {\n    // etc.\n   }\n ]\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"There are JSON files containing the scene specifications per dataset, e.g., scenes.train.json.- Note, that the scene ID and room ID might have a one-to-one mapping in the challenge, but are not necessarily the same. Multiple scenes can be made by changing the target and masker choices for a given room. E.g., participants wanting to expand the training data could remix multiple scenes from the same room."}),"\n",(0,a.jsx)(n.li,{children:"A scene is completely described by the room ID and target and interferer source IDs, as all other information, e.g., source + target geometry are already in the RAVEN project rpf files. Only the room ID is needed to identify the BRIR files."}),"\n",(0,a.jsxs)(n.li,{children:["The listener ID is not stored in the scene metadata; this information is stored separately in a ",(0,a.jsx)(n.code,{children:"scenes_listeners.json"})," file."]}),"\n",(0,a.jsxs)(n.li,{children:["Non-speech interferers are labelled ",(0,a.jsx)(n.code,{children:"CIN_<noise type>_XXX"}),", while speech interferers are labelled ",(0,a.jsx)(n.code,{children:"<three letter code including dialect and talker gender>_XXXXX"})," ."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d9-listener-metadata",children:"D.9 Listener metadata"}),"\n",(0,a.jsx)(n.p,{children:"Listener data stored in a single JSON file with the following format."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="listeners.json"',children:'{  \n    "L0001": {\n        "name": "L0001",\n        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],\n        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],\n        "audiogram_levels_r": [ 10, 15, 25, 40, 50, 65, 65, 70 ],\n        },\n    "L0002": {\n        // ... etc\n    },\n// ... etc\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"d10-scene-listener-map",children:"D.10 Scene-Listener map"}),"\n",(0,a.jsx)(n.p,{children:"JSON file named scenes_listeners.json dictates which scenes are to be processed by which listeners."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="scenes_listeners.json"',children:'{\n    "S00001": ["L0001", "L0002", "L0003"],\n    "S00002": ["L0003". "L0005", "L0007"],\n// etc\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var a=i(96540);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);