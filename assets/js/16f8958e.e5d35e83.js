"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[7835],{49703:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"icassp2023/data/icassp2023_data","title":"ICASSP 2023 Data","description":"To obtain the data and baseline code, please see the download page.","source":"@site/docs/icassp2023/data/icassp2023_data.mdx","sourceDirName":"icassp2023/data","slug":"/icassp2023/data/icassp2023_data","permalink":"/docs/icassp2023/data/icassp2023_data","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"icassp2023_data","title":"ICASSP 2023 Data","sidebar_label":"Data Specification","sidebar_position":6},"sidebar":"tutorialSidebar_icassp2023","previous":{"title":"Scene Generation","permalink":"/docs/icassp2023/data/icassp2023_scene_generation"},"next":{"title":"New evaluation set","permalink":"/docs/icassp2023/data/icassp2023_new_evaluation"}}');var t=i(74848),s=i(28453),r=i(86025);const o={id:"icassp2023_data",title:"ICASSP 2023 Data",sidebar_label:"Data Specification",sidebar_position:6},l=void 0,d={},h=[{value:"A. Training, development and evaluation data",id:"a-training-development-and-evaluation-data",level:2},{value:"B. The scene dataset",id:"b-the-scene-dataset",level:2},{value:"B.1 Training data",id:"b1-training-data",level:3},{value:"B.2 Development data",id:"b2-development-data",level:3},{value:"B.3 Simulated Evaluation data  (<code>eval1</code>)",id:"b3-simulated-evaluation-data--eval1",level:3},{value:"B.4 Real Evaluation data (<code>eval2</code>)",id:"b4-real-evaluation-data-eval2",level:3},{value:"C Listener data",id:"c-listener-data",level:2},{value:"D Data file formats and naming conventions",id:"d-data-file-formats-and-naming-conventions",level:2},{value:"D.1 Abbreviations used in filenames",id:"d1-abbreviations-used-in-filenames",level:3},{value:"D.2 General",id:"d2-general",level:3},{value:"D.3 Prompt and transcription data",id:"d3-prompt-and-transcription-data",level:3},{value:"D.4 Source audio files",id:"d4-source-audio-files",level:3},{value:"D.5 Preprocessed scene signals",id:"d5-preprocessed-scene-signals",level:3},{value:"D.6 Enhanced signals",id:"d6-enhanced-signals",level:3},{value:"D.7 Hearing-aid output signals",id:"d7-hearing-aid-output-signals",level:3},{value:"D.8 Room metadata",id:"d8-room-metadata",level:3},{value:"D.9 Scene metadata",id:"d9-scene-metadata",level:3},{value:"D.10 Listener metadata",id:"d10-listener-metadata",level:3},{value:"D.11 Scene-Listener map",id:"d11-scene-listener-map",level:3},{value:"References",id:"references",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To obtain the data and baseline code, please see the ",(0,t.jsx)(n.a,{href:"../icassp2023_download",children:"download page"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"a-training-development-and-evaluation-data",children:"A. Training, development and evaluation data"}),"\n",(0,t.jsx)(n.p,{children:"The dataset of 10,000 simulated scenes is split into three sets:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"6000 training scenes (available now)"}),"\n",(0,t.jsx)(n.li,{children:"2500 development scenes (available now)"}),"\n",(0,t.jsx)(n.li,{children:"1500 evaluation scenes (released 1st Feb. 2023)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In addition there will be:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A secondary 'real data' evaluation set that will be based on real ecologically-valid recordings and so can highlight the generalizability of the entrants\u2019 approaches beyond the simulations (released 1st February 2023). ",(0,t.jsx)(n.a,{href:"icassp2023_new_evaluation",children:"More information"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"b-the-scene-dataset",children:"B. The scene dataset"}),"\n",(0,t.jsx)(n.p,{children:"For the dataset of 10,000 simulated scenes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each scene corresponds to a unique target utterance and unique segment(s) of noise from the interferers."}),"\n",(0,t.jsx)(n.li,{children:"The training, development and evaluation sets are disjoint with respect to the target speakers."}),"\n",(0,t.jsx)(n.li,{children:"Sets are balanced for the gender of the target talker."}),"\n",(0,t.jsx)(n.li,{children:"Entrants must not use the development or evaluation data sets for training."}),"\n",(0,t.jsx)(n.li,{children:"The system submitted should be chosen on the evidence provided by the development set."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For evaluation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The final ranking will be performed with the (held-out) evaluation sets."}),"\n",(0,t.jsx)(n.li,{children:"Neither evaluation datasets (simulation nor real) have been used in previous Clarity challenges."}),"\n"]}),"\n","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The secondary 'real data' evaluation set will be made using real acoustic mixtures but using loudspeaker playback of target talkers so that the reference speech can be extracted as needed by the objective metrics."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For the training and development set, entrants have access to a diverse range of signals and metadata, with the most important being:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The hearing aid microphone signals"}),"\n",(0,t.jsx)(n.li,{children:"The hearing characteristics of the listener (e.g. audiogram)"}),"\n",(0,t.jsx)(n.li,{children:"The anechoic target reference and interferer signals."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For training, teams can not use external data but can expand the official training data through automated modifications and remixing, i.e. data augmentation strategies. However, teams that do this must make a second submission using only the official audio files."}),"\n",(0,t.jsx)(n.p,{children:"For evaluation, the data available is more limited, i.e.,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The hearing aid microphone signals"}),"\n",(0,t.jsx)(n.li,{children:"The hearing characteristics of the listener (e.g. audiogram)"}),"\n",(0,t.jsx)(n.li,{children:"The anechoic target reference signal which will be used by the organisers but not released to entrants."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["High-Order Ambisonic Impulse Responses (HOA-IRs) and Head-Related Impulse Response (HRIRs) are used to model how the sound is altered as it propagates through the room and interacts with the head. See the page on ",(0,t.jsx)(n.a,{href:"icassp2023_scene_generation",children:"scene generation"})," for more details."]}),"\n",(0,t.jsx)(n.p,{children:"Time-domain acoustic signals are generated for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A hearing aid with 3 microphone inputs (front, mid, rear). The hearing aid has a Behind-The-Ear (BTE) form factor; see ",(0,t.jsx)(n.a,{href:"#fig1",children:"Figure 1"}),". The distance between microphones is approx. 7.6 mm. The properties of the tube and ear mould are not considered."]}),"\n",(0,t.jsx)(n.li,{children:"Close to the eardrum."}),"\n",(0,t.jsx)(n.li,{children:"The anechoic target reference (front microphone)."}),"\n"]}),"\n",(0,t.jsxs)("figure",{id:"fig1",children:[(0,t.jsx)("img",{width:"300",src:(0,r.Ay)("/img/CEC2/bte_device.png")}),(0,t.jsx)("figcaption",{children:"Figure 1. Front (Fr), Middle (Mid) and Rear microphones on a BTE hearing aid form."})]}),"\n",(0,t.jsxs)(n.p,{children:["Head Related Impulse Responses (HRIRs) are used to model how sound is altered as it propagates in a free-field and interacts with the head (i.e., no room is included). These are taken from the ",(0,t.jsx)(n.a,{href:"https://uol.de/mediphysik/downloads/hearingdevicehrtfs",children:"OlHeadHRTF database"})," with permission. These include HRIRs for human heads and for three types of head-and-torso simulator/mannekin. The eardrum HRIRs (labelled ",(0,t.jsx)(n.code,{children:"ED"}),") are for a position close to the eardrum of the open ear."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"rpf"})," files and ",(0,t.jsx)(n.code,{children:"ac"})," files are specification files for the geometric room acoustic model that include a complete description of the room, both in terms of geometry and room materials."]}),"\n",(0,t.jsx)(n.h3,{id:"b1-training-data",children:"B.1 Training data"}),"\n",(0,t.jsx)(n.p,{children:"For each scene in the training data the following signals and metadata are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The target and interferer HOA-IRs (4 pairs: front, mid, rear and eardrum for left and right ears)."}),"\n",(0,t.jsx)(n.li,{children:"The mono target and interferer signals (pre-convolution)."}),"\n",(0,t.jsxs)(n.li,{children:["For each hearing aid microphone (channels 1-3 where channel 1 is front, channel 2 is mid and channel 3 is rear) and a position close to the eardrum (channel 0):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The target convolved with the appropriate HOA-IRs and downmixed;"}),"\n",(0,t.jsx)(n.li,{children:"The interferers convolved with the appropriate HOA-IRs and downmixed;"}),"\n",(0,t.jsx)(n.li,{children:"The sum of the target and interferer convolved with the appropriate HOA-IRs and downmixed; (i.e. the noisy signals that would be received by the hearing aid)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The target convolved with the anechoic HOA-IRs and downmixed for channel 1 for each ear (\u2018target_anechoic\u2019). For use as a reference when computing HASPI scores."}),"\n",(0,t.jsx)(n.li,{children:"Metadata describing the scene: a JSON file containing, e.g., the filenames of the sources, the location of the sources, the viewvector of the target source, the location and viewvector of the receiver, the room dimensions (see specification below), and the room number, which corresponds to the RAVEN BRIR, rpf and ac files."}),"\n",(0,t.jsx)(n.li,{children:"A signal describing the head rotation (i.e. azimuthal angle at each sample)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"b2-development-data",children:"B.2 Development data"}),"\n",(0,t.jsx)(n.p,{children:"This is made available to allow you to fully examine the performance of your system. Ground truth data (i.e., the premixed target and interferers are available in the development set)"}),"\n",(0,t.jsx)(n.p,{children:"Development data also contains target speaker adaptation sentences, i.e., four utterances from each of the target speakers. These will also be available in the evaluation data. i.e., systems can use these utterances in conjunction with the known target ID to inform their system of the which speaker in the scene should be attended."}),"\n",(0,t.jsxs)(n.p,{children:["Note, that the data available for the evaluation will be much more limited, e.g. it will not contain premixed ground truth signals or scene metadata, (see Section ",(0,t.jsx)(n.a,{href:"#b3-evaluation-data",children:"B.3"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"When using the development data for evaluation, your hearing aid enhancement model should only be using the types of data available in the evaluation data set (see below)."}),"\n",(0,t.jsxs)(n.h3,{id:"b3-simulated-evaluation-data--eval1",children:["B.3 Simulated Evaluation data  (",(0,t.jsx)(n.code,{children:"eval1"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The following data will only be available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Audio: the sum of the target and interferers for each hearing aid microphone."}),"\n",(0,t.jsx)(n.li,{children:"The ID of the listener who will be auditioning the processed scene."}),"\n",(0,t.jsx)(n.li,{children:"The listener characterisation data for these listeners."}),"\n",(0,t.jsx)(n.li,{children:"ID of target talker and a few examples of clean audio that are not the same as the target utterance."}),"\n",(0,t.jsx)(n.li,{children:"The head rotation signal, i.e. as might be recovered from hearing aid motion sensors. (Systems can use this signal but should also be evaluated without using it.)"}),"\n",(0,t.jsx)(n.li,{children:"Speaker adaptation sentence - 4 clean utterances for each target speaker."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"One challenge will be identifying the target talker from the hearing aid microphone signals. There are two possibilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The ID of the target talker is given with examples of clean audio. This would allow an algorithm to learn characteristics of the target talker to then help it identify the voice in the mixture."}),"\n",(0,t.jsx)(n.li,{children:"The azimuth of the target and the starting time of the utterance are both roughly known from the scene generation metadata statistics."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These two approaches mimic what is available to human listeners. They might focus on a known voice or they might use visual cues to know roughly where and when someone is talking."}),"\n",(0,t.jsxs)(n.h3,{id:"b4-real-evaluation-data-eval2",children:["B.4 Real Evaluation data (",(0,t.jsx)(n.code,{children:"eval2"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The following data will only be available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Audio: the sum of the target and interferers for each hearing aid microphone."}),"\n",(0,t.jsx)(n.li,{children:"The ID of the listener who will be auditioning the processed scene."}),"\n",(0,t.jsx)(n.li,{children:"The listener characterisation data for these listeners."}),"\n",(0,t.jsx)(n.li,{children:"ID of target talker and a few examples of clean audio that are not the same as the target utterance."}),"\n",(0,t.jsx)(n.li,{children:"Speaker adaptation sentence - 4 clean utterances for each target speaker."}),"\n",(0,t.jsx)(n.li,{children:"Further details to be confirmed."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"c-listener-data",children:"C Listener data"}),"\n",(0,t.jsx)(n.p,{children:"We will provide metadata characterising the hearing abilities of the listeners so the audio signals you generate for evaluation can be individualised to the specific listeners who will be hearing them."}),"\n",(0,t.jsx)(n.p,{children:"The same types of data are available for training, development and evaluation."}),"\n",(0,t.jsx)(n.p,{children:"A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear. They will be fluent in British English."}),"\n",(0,t.jsx)(n.p,{children:"The quantification of the listeners\u2019 hearing is done with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Left and right pure tone air-conduction audiograms. These measure the threshold at which people can hear a pure-tone sound."}),"\n",(0,t.jsx)(n.li,{children:"Results from the DTT (digit-triplet test, also known as a triple digit test)\u200b"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The audiogram is the standard clinical measurement of hearing ability. It\u2019s the pure-tone threshold of hearing in each ear, measured in quiet in a sound booth. The procedure is standardized e.g., ",(0,t.jsx)(n.a,{href:"https://www.thebsa.org.uk/resources/pure-tone-air-bone-conduction-threshold-audiometry-without-masking/",children:"British Society of Audiology Recommended Procedure"}),'. Typically it\u2019s measured at octave frequencies and important intermediate frequencies.The values of the audiogram defines how much gain the hearing aid needs to apply, with the calculation typically done by one of a group of "prescription rules", e.g. ',(0,t.jsx)(n.a,{href:"https://www.psychol.cam.ac.uk/hearing/cam2-cameq2-hf-hearing-aid-fitting-software",children:"CAMFIT"}),", ",(0,t.jsx)(n.a,{href:"https://hearworks.com.au/technology/nal-nl2/",children:"NAL-NL2"})," or ",(0,t.jsx)(n.a,{href:"https://www.dslio.com/?page_id=95",children:"DSL"})," ","."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that the scale of an audiogram is in \u201cdB HL\u201d = \u201cdB Hearing Level\u201d. This is not dB SPL; instead, it\u2019s relative to an international standard such that 0-dB is \u201cnormal hearing\u201d at every frequency. For background see ",(0,t.jsx)(n.a,{href:"https://hearingreview.com/hearing-loss/patient-care/evaluation/why-the-audiogram-is-upside-down",children:"Why the Audiogram Is Upside-down | The Hearing Review"})," and ",(0,t.jsx)(n.a,{href:"https://hearingreview.com/resource-center/expert-insight/quest-audiometric-zero",children:"The Quest for Audiometric Zero | The Hearing Review"})]}),"\n",(0,t.jsx)(n.p,{children:"The DTT is an adaptive test of speech-in-noise ability. In each trial a listener hears three spoken digits (e.g. 3-6-1) against a background of noise at a given signal-to-noise-ratio (SNR). The task is to respond on a keypad with those three digits in the order they were presented. If the listener gets all three correct, then the SNR is reduced for the next trial so making it slightly harder. If the listener makes any mistake (i.e., any digit wrong, or the order wrong) then the SNR is increased, so making the next trial slightly easier. The test carries on trial-by-trial. The test asymptotes to the SNR at which the participant is equally likely to get all three correct or not, with a few tens of trials needed to get an acceptable result. DTT tests are now used world-wide to measure hearing as they are easy to make in any local language, to explain to participants and to do, and moreover can be done over the internet or telephone as they measure a relative threshold (signal-to-noise ratio), not an absolute threshold in dB SPL. Listeners are encouraged to set a volume that is comfortable and that does not distort or crackle, but is not too quiet."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/33840339/",children:"This paper"})," is a recent scoping review of the field. The particular version we used is ",(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/25127323/",children:"Vlaming et al.'s high-frequency DTT"}),", which uses a high-pass noise as the masker. Ours starts at -14 dB SNR, goes up/down at 2 dB steps per trial, and continues for 40 trials."]}),"\n",(0,t.jsx)(n.p,{children:"In the datafile, an average of the SNR for the last 30 trials is provided (labelled 'threshold'). For reference, the SNRs are supplied for each trial as well. The very first trial is practice and is not scored."}),"\n",(0,t.jsx)(n.h2,{id:"d-data-file-formats-and-naming-conventions",children:"D Data file formats and naming conventions"}),"\n",(0,t.jsx)(n.h3,{id:"d1-abbreviations-used-in-filenames",children:"D.1 Abbreviations used in filenames"}),"\n",(0,t.jsx)(n.p,{children:"The following abbreviations are used consistently throughout the filenames and references in the metadata."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"R"})," \u2013 \u201croom\u201d: e.g., \u201cR02678\u201d # Room ID linking to RAVEN rpf file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"S"})," \u2013 \u201cscene\u201d: e.g., S00121 # Scene ID for a particular setup in a room I.e., room + choice of target and interferer signals"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BNC"})," \u2013 BNC sentence identifier e.g. ",(0,t.jsx)(n.code,{children:"BNC_A06_01702"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH"})," \u2013","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH0"})," \u2013 eardrum signal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH1"})," \u2013 front signal, hearing aid channel"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH2"})," \u2013 middle signal, hearing aid channel"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH3"})," \u2013 rear signal, hearing aid channel"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"I"}),"/",(0,t.jsx)(n.code,{children:"i1"})," \u2013 Interferer, i.e., noise or sentence ID for the interferer/masker"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"T"})," \u2013 talker who produced the target speech sentences"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"L"})," \u2013 listener"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"E"})," \u2013 entrant (identifying a team participating in the challenge)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"t"})," \u2013 target (used in BRIRs and RAVEN project \u2018rpf\u2019 files)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d2-general",children:"D.2 General"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Audio and HOA-IRs will be 44.1 kHz 32-bit wav files in either mono or stereo as appropriate."}),"\n",(0,t.jsx)(n.li,{children:"Where stereo signals are provided the two channels represent the left (0) and right (1) signals of the ear or hearing aid microphones."}),"\n",(0,t.jsx)(n.li,{children:"0 dB FS in the audio signals corresponds to 100 dB SPL."}),"\n",(0,t.jsxs)(n.li,{children:["Metadata will be stored in JSON or csv format as appropriate with the exception of","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Room descriptions are stored as RAVEN project \u2018rpf\u2019 configuration files and \u2018ac\u2019 files. (However, key details are reflected in the scene.json files)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Signals are saved within the Python code as 32-bit floating point by default."}),"\n",(0,t.jsx)(n.li,{children:"Output signals for the listening tests will be required to be in 16-bit format."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d3-prompt-and-transcription-data",children:"D.3 Prompt and transcription data"}),"\n",(0,t.jsx)(n.p,{children:"The following text is available for the target speech:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prompts are the text that was given to the talkers to say."}),"\n",(0,t.jsx)(n.li,{children:"\u2018Dot\u2019 transcriptions contain the text as it was spoken in a form more suitable for scoring tools."}),"\n",(0,t.jsx)(n.li,{children:"These are stored in the master json metadata file."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d4-source-audio-files",children:"D.4 Source audio files"}),"\n",(0,t.jsx)(n.p,{children:"Wav files containing the original source materials.\nOriginal target sentence recordings:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"<Talker ID>_<BNC sentence identifier>.wav"})}),"\n",(0,t.jsx)(n.h3,{id:"d5-preprocessed-scene-signals",children:"D.5 Preprocessed scene signals"}),"\n",(0,t.jsx)(n.p,{children:"Audio files storing the signals picked up by the hearing aid microphone that are ready for processing. Separate signals are generated for each hearing aid microphone pair or \u2018channel\u2019."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"<Scene ID>_target_<Channel ID>.wav"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"<Scene ID>_interferer_<Channel ID>.wav"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"<Scene ID>_mixed_<Channel ID>.wav"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Scene ID>_target_anechoic.wav"})," - at hearing device front microphone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Scene ID>_hr.wav"})," - head rotation signal"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Scene ID \u2013 S00001 to S10000"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"S followed by 5 digit integer with 0 pre-padding"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Channel ID"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CH0 \u2013 Eardrum signal"}),"\n",(0,t.jsx)(n.li,{children:"CH1 \u2013 Hearing aid front microphone"}),"\n",(0,t.jsx)(n.li,{children:"CH2 \u2013 Hearing aid middle microphone"}),"\n",(0,t.jsx)(n.li,{children:"CH3 \u2013 Hearing aid rear microphone"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"anechoic signal"})," is the signal that will be used as the referernce in the HASPI evaluation."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"head rotation"})," signal indicates the precise azimuthal angle of the head at each sample. It is stored as a floating point wav file with values between -1 and +1 where the range maps linearly from -180 degrees to +180 degrees. Teams are free to use this signal in their hearing aid algorithms, but if you do so we will ask you to also submit a version of your system that does not use it, so that the benefit of known head motion can be measured."]}),"\n",(0,t.jsx)(n.h3,{id:"d6-enhanced-signals",children:"D.6 Enhanced signals"}),"\n",(0,t.jsx)(n.p,{children:"The signals that are output by the baseline enhancement algorithm."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_enhanced.wav"})," # Enhancement output signal (i.e., as submitted by the challenge entrants)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Listener ID \u2013 ID of the listener panel member, e.g., L001 to L100 for initial \u2018pseudo-listeners\u2019, etc."}),"\n",(0,t.jsx)(n.h3,{id:"d7-hearing-aid-output-signals",children:"D.7 Hearing-aid output signals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Scene ID>_<Listener ID>_HA-output.wav"})," # i.e., the enhanced signals after processing with the supplied hearing aid amplification."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Listener ID \u2013 ID of the listener panel member, e.g., L001 to L100 for initial \u2018pseudo-listeners\u2019, etc."}),"\n",(0,t.jsx)(n.h3,{id:"d8-room-metadata",children:"D.8 Room metadata"}),"\n",(0,t.jsx)(n.p,{children:"JSON file containing the description of a room. This is the data from which the ambisonic room impulse response are generated. It stores the fixed room, listener, target and interferer geometry but does not specify the dynamic factors (e.g. signals, SNRs, head movements etc) that are needed to fully define a scene."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="rooms.json"',children:'[\n  {\n    "name": "R00001", // ID of room linking to RAVEN rpf and ac files\n    "dimensions": "6.9933x3x3", // Room dimensions in metres\n    "target": { // target positions (x,y,z) and view vectors (look directions, x,y,z)\n      "position": [-0.3, 2.4, 1.2],\n      "view_vector": [0.071, 0.997, 0.0],\n    },\n    "listener": {\n      "position": [-0.1, 5.2, 1.2],\n      "view_vector": [0.071, 0.997, 0.0],\n    },\n    "interferers": [\n      {\n        "position": [0.4, 4.0, 1.2],\n      },\n      { // etc, up to three interferers\n      }\n    ],\n  },\n  ...\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"d9-scene-metadata",children:"D.9 Scene metadata"}),"\n",(0,t.jsxs)(n.p,{children:["JSON file containing a description of the scene. It is a list of dictionaries with each entry representing a unique scene. A scene can be considered to be a room (see Section ",(0,t.jsx)(n.a,{href:"#d7-room-metadata",children:"D.7"}),")  plus the full set of listener, target and interferer details. Note, many scenes can be generated from a single room, i.e. each using different listener, target and interferer settings."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="scenes.json"',children:'[\n  {\n    "scene": "S00001",  // the unique scene ID\n    "room":: "R00001", // ID of room linking to rooms.json\n    "target": { \n      "name": "T005_JYD_04274", // target speaker code and BNCid\n      "time_start": 107210, // start time of target in samples\n      "time_end": 217019 // end time of target in samples\n    },\n    "listener": {\n      "rotation": [ // Defines the head motion - list of time, direction pairs\n        {\n          "sample": 88200,\n          "angle": 30  // Azimuth angle in degrees\n        },\n        {\n          "sample": 176400,\n          "angle\u201d: 50 \n        }\n      ],\n      "hrir_filename":  \n        ["VP_N4-ED",\n        "VP_N4-BTE_fr",\n        "VP_N4-BTE_mid",\n        "VP_N4-BTE_rear"] // HRIR filename for each channel to generate\n    },\n    "interferers": [\n      {\n        "position": 1,  // Index of interferer position (See rooms.json)\n        "time_start": 0, // time of interferer onset in samples\n        "time_end": 261119, // time of interferer offset in samples\n        "name": "track_1353255", // interferer name\n        "type": "music", // interferer type: speech, noise or music\n        "offset": 4076256 // index into interferer file at which to extract sample\n      },\n      { // etc, up to three interferers\n      }\n    ],\n    "dataset": "train", // the dataset to which the scene belongs: train, dev or eval\n    "duration": 261119,  // total duration of scene in samples\n    "SNR": 6.89  // targe SNR for the scene\n  },\n  ...\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"There are JSON files containing the scene specifications per dataset, e.g., scenes.train.json.- Note, that the scene ID and room ID might have a one-to-one mapping in the challenge, but are not necessarily the same. Multiple scenes can be made by changing the target and masker choices for a given room. E.g., participants wanting to expand the training data could remix multiple scenes from the same room."}),"\n",(0,t.jsxs)(n.p,{children:["The listener ID is not stored in the scene metadata; this information is stored separately in a scenes_listeners.json file which maps scenes to listeners, ie. telling you which listener (or listeners) will be listening to which scenes in the evaluation (see Section ",(0,t.jsx)(n.a,{href:"#d9-listener-metadata",children:"D.9"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Noise interferers are labelled with a type \u201cmusic\u201d, \u201cnoise\u201d or \u201cspeech\u201d and then have a unique name identifying the file."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.strong,{children:"speech"}),": ",(0,t.jsx)(n.code,{children:"<ACCENT_CODE>_<SPEAKER_ID>"})," where ",(0,t.jsx)(n.code,{children:"ACCENT_CODE"})," is a three letter code identify the accent region and gender of the speaker and ",(0,t.jsx)(n.code,{children:"SPEAKER_ID"}),' is a 5-digit ID specific to an individual speaker. E.g. "mif_02484" is a UK ',(0,t.jsx)(n.strong,{children:"mi"}),"dlands accented ",(0,t.jsx)(n.strong,{children:"f"}),"emale, speaker 02484. The speech comes from Demirshan et al. [",(0,t.jsx)(n.a,{href:"#references",children:"1"}),"] which provides more details."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.strong,{children:"noise"}),": ",(0,t.jsx)(n.code,{children:"CIN_<NOISE_TYPE>_<NOISE_ID>"})," where ",(0,t.jsx)(n.code,{children:"NOISE_TYPE"})," is one of ",(0,t.jsx)(n.code,{children:"dishwasher"}),", ",(0,t.jsx)(n.code,{children:"fan"}),", ",(0,t.jsx)(n.code,{children:"hairdryer"}),", ",(0,t.jsx)(n.code,{children:"kettle"}),", ",(0,t.jsx)(n.code,{children:"microwave"}),", ",(0,t.jsx)(n.code,{children:"vacuum"})," (vacuum cleaner) or ",(0,t.jsx)(n.code,{children:"washing"})," (washing machine) and ",(0,t.jsx)(n.code,{children:"NOISE_ID"})," is  a unique 3-digit code for the sample."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.strong,{children:"music"}),": ",(0,t.jsx)(n.code,{children:"track_<TRACK_ID>"})," where ",(0,t.jsx)(n.code,{children:"TRACK_ID"})," is unique 7-digit track identifier taken from the MTG Jamendo database. [",(0,t.jsx)(n.a,{href:"#references",children:"2"}),"]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Given the type and name, further interferer metadata can be found in the files ",(0,t.jsx)(n.code,{children:"masker_speech_list.json"}),", ",(0,t.jsx)(n.code,{children:"masker_noise_list.json"})," and ",(0,t.jsx)(n.code,{children:"masker_music_list.json"})," which are distributed with the challenge."]}),"\n",(0,t.jsx)(n.h3,{id:"d10-listener-metadata",children:"D.10 Listener metadata"}),"\n",(0,t.jsx)(n.p,{children:"Audiogram data is stored in a single JSON file with the following format."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="listeners.json"',children:'{\n    "L0001": {\n        "name": "L0001",\n        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],\n        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],\n        "audiogram_levels_r": [ \u2026 ],\n    },\n    "L0002": {\n        // ... etc\n    },\n    // ... etc\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Additional metadata (e.g. digit triple test results) are stored in a csv file. DETAILS"}),"\n",(0,t.jsx)(n.h3,{id:"d11-scene-listener-map",children:"D.11 Scene-Listener map"}),"\n",(0,t.jsx)(n.p,{children:"JSON file named scenes_listeners.json dictates which scenes are to be processed by which listeners."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="scenes_listeners.json"',children:'{\n    "S00001": ["L0001", "L0002", "L0003"],\n    "S00002": ["L0003", "L0005", "L0007"],\n    // ... etc\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:['Demirsahin, Isin and Kjartansson, Oddur and Gutkin, Alexander and Rivera, Clara, "Open-source Multi-speaker Corpora of the English Accents in the British Isles", Proceedings of The 12th Language Resources and Evaluation Conference (LREC), 6532--6541, 2020, ',(0,t.jsx)(n.a,{href:"https://openslr.org/83/",children:"Avialable Online"})]}),"\n",(0,t.jsxs)(n.li,{children:['Bogdanov, Dmitry and Won, Minz and Tovstogan, Philip and Porter, Alastair and Serra, Xavier, "The MTG-Jamendo Dataset for Automatic Music Tagging", In Proc. Machine Learning for Music Discovery Workshop, International Conference on Machine Learning (ICML 2019), 2019, Long Beach, CA, United States", ',(0,t.jsx)(n.a,{href:"https://mtg.github.io/mtg-jamendo-dataset/",children:"Available Online"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(96540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);