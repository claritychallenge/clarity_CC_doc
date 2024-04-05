"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[2659],{59195:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(74848),s=i(28453),a=i(86025),r=i(41622);const o={id:"cpc1_data",title:"CPC1 Data",sidebar_label:"Data Specification",sidebar_position:4},l=void 0,d={id:"cpc1/data/cpc1_data",title:"CPC1 Data",description:"To obtain the data and baseline code, please visit the download page.",source:"@site/docs/cpc1/data/cpc1_data.mdx",sourceDirName:"cpc1/data",slug:"/cpc1/data/cpc1_data",permalink:"/docs/cpc1/data/cpc1_data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"cpc1_data",title:"CPC1 Data",sidebar_label:"Data Specification",sidebar_position:4},sidebar:"tutorialSidebar_cpc1",previous:{title:"The Scenario",permalink:"/docs/cpc1/data/cpc1_scenario"},next:{title:"Software",permalink:"/docs/category/software-2"}},h={},c=[{value:"A. Training, development, evaluation data",id:"a-training-development-evaluation-data",level:2},{value:"B. The scene dataset",id:"b-the-scene-dataset",level:2},{value:"B.1 Training/development data",id:"b1-trainingdevelopment-data",level:3},{value:"B.2 Evaluation scene data",id:"b2-evaluation-scene-data",level:3},{value:"C Listener data",id:"c-listener-data",level:2},{value:"SSQ12 - Speech, Spatial, &amp; Qualities of Hearing questionnaire, 12-question version",id:"ssq12---speech-spatial--qualities-of-hearing-questionnaire-12-question-version",level:4},{value:"GHAPB - Glasgow hearing-aid benefit profile questionnaire",id:"ghapb---glasgow-hearing-aid-benefit-profile-questionnaire",level:4},{value:"DTT (digit-triplet test, also known as a triple digit test)",id:"dtt-digit-triplet-test-also-known-as-a-triple-digit-test",level:4},{value:"D Data file formats and naming conventions",id:"d-data-file-formats-and-naming-conventions",level:2},{value:"D.1 Abbreviations in Filenames",id:"d1-abbreviations-in-filenames",level:3},{value:"D.2 General",id:"d2-general",level:3},{value:"D.3 Prompt and transcription data",id:"d3-prompt-and-transcription-data",level:3},{value:"D.4 Timing in audio files",id:"d4-timing-in-audio-files",level:3},{value:"D.5 Source audio files",id:"d5-source-audio-files",level:3},{value:"D.6 Preprocessed scene signals",id:"d6-preprocessed-scene-signals",level:3},{value:"D.7 Enhanced signals",id:"d7-enhanced-signals",level:3},{value:"D.8 Scene metadata",id:"d8-scene-metadata",level:3},{value:"D.9 Listener metadata",id:"d9-listener-metadata",level:3},{value:"D.10 Listener intelligibility data",id:"d10-listener-intelligibility-data",level:3},{value:"E. Reproduction Levels",id:"e-reproduction-levels",level:2},{value:"References",id:"references",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To obtain the data and baseline code, please visit the ",(0,t.jsx)(n.a,{href:"../cpc1_download",children:"download"})," page."]}),"\n",(0,t.jsx)(n.h2,{id:"a-training-development-evaluation-data",children:"A. Training, development, evaluation data"}),"\n",(0,t.jsxs)(n.p,{children:["The dataset is split into these two subsets: training/development (",(0,t.jsx)(n.code,{children:"train"}),") and evaluation (",(0,t.jsx)(n.code,{children:"eval"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You are responsible for splitting the training/development dataset into data for training and development, e.g., using k-fold cross validation."}),"\n",(0,t.jsx)(n.li,{children:"The final evaluation and ranking will be performed with the (held-out) evaluation set."}),"\n",(0,t.jsxs)(n.li,{children:["For more information on supplementing the training data, please see the ",(0,t.jsx)(n.a,{href:"../taking_part/cpc1_rules",children:"rules"}),", and also the ",(0,t.jsx)(n.a,{href:"../taking_part/cpc1_faq#data",children:"FAQ"}),". The evaluation dataset will be made available one month before the challenge submission deadline."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"b-the-scene-dataset",children:"B. The scene dataset"}),"\n",(0,t.jsx)(n.p,{children:"The complete dataset is composed of a large number of scenes associated with 6 talkers, 10 hearing aid systems and around 25 listeners."}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.strong,{children:"scene"})," corresponds to a unique target utterance and a unique segment of noise from an interferer. The training/development and evaluation sets are disjoint for system and listener."]}),"\n",(0,t.jsxs)(n.p,{children:["Binaural Room Impulse Responses (BRIRs) are used to model how the sound is altered as it propagates through the room and interacts with the head. The audio signals for the scenes are generated by convolving source signals with the BRIRs and summing. See the page on ",(0,t.jsx)(n.a,{href:"cpc1_scenario",children:"modelling the scenario"})," for more details. Randomised room dimensions, target and interferer locations are used. RAVEN is the geometric room acoustic model used to create the BRIR."]}),"\n",(0,t.jsx)(n.h3,{id:"b1-trainingdevelopment-data",children:"B.1 Training/development data"}),"\n",(0,t.jsx)(n.p,{children:"This contains all the information about how the signals processed by the hearing aids were created. For the prediction challenge, some of the data can be ignored (but is included because some may find it useful)."}),"\n",(0,t.jsx)(n.p,{children:"Data and metadata most useful for the prediction challenge:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The output of the hearing aid processor."}),"\n",(0,t.jsx)(n.li,{children:"The target convolved with the anechoic Binaural Room Impulse Response (BRIR) (channel 1) for each ear (\u2018target_anechoic\u2019)."}),"\n",(0,t.jsx)(n.li,{children:"The mono target and interferer signals (pre-convolution)."}),"\n",(0,t.jsx)(n.li,{children:"Prompts of the utterances (what the actors were told to say)"}),"\n",(0,t.jsx)(n.li,{children:"Metadata describing the scene: a JSON file containing, e.g., the filenames of the sources, the location of the sources, the viewvector of the target source, the location and viewvector of the receiver, the room dimensions (see specification below), and the room number, which corresponds to the RAVEN BRIR, rpf and ac files."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For evaluation not all of the data is available, see below."})}),"\n",(0,t.jsxs)(r.A,{summary:"Other information also provided, click me to expand",children:[(0,t.jsx)(n.p,{children:"Data used to create inputs to hearing aids, etc:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The target and interferer BRIRs (4 pairs: front, mid, rear and eardrum for left and right ears)."}),"\n",(0,t.jsx)(n.li,{children:"Head Related Impulse Responses (HRIRs) including those corresponding to the target azimuth."}),"\n",(0,t.jsxs)(n.li,{children:["For each hearing aid microphone (channels 1-3 where channel 1 is front, channel 2 is mid and channel 3 is rear) and a position close to the eardrum (channel 0):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The target convolved with the appropriate BRIR;"}),"\n",(0,t.jsx)(n.li,{children:"The interferer convolved with the appropriate BRIR;"}),"\n",(0,t.jsx)(n.li,{children:"The sum of the target and interferer convolved with the appropriate BRIRs."}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:"The BRIRs are generated for:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A hearing aid with 3 microphone inputs (front, mid, rear). The hearing aid has a Behind-The-Ear (BTE) form factor; see Figure 1. The distance between microphones is approx. 7.6 mm. The properties of the tube and ear mould are not considered."}),"\n",(0,t.jsx)(n.li,{children:"Close to the eardrum."}),"\n",(0,t.jsx)(n.li,{children:"The anechoic target reference (front microphone; the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d)."}),"\n"]}),(0,t.jsxs)("figure",{id:"fig1",children:[(0,t.jsx)("img",{width:"200",src:(0,a.A)("/img/tutorial/BTE-e1606144768702.png")}),(0,t.jsx)("figcaption",{children:"Figure 1. Front (Fr), Middle (Mid) and Rear microphones on a BTE hearing aid form."})]}),(0,t.jsx)(n.p,{children:"(HRIRs) are used to model how sound is altered as it propagates in a free-field and interacts with the head (i.e., no room is included). These are taken from the OlHeadHRTF database with permission. These include HRIRs for human heads and for three types of head-and-torso simulator/mannekin. The eardrum HRIRs (labelled ED) are for a position close to the eardrum of the open ear."}),(0,t.jsx)(n.p,{children:'The RAVEN project files - termed "rpf" - are specification files for the geometric room acoustic model that include a complete description of the room.'})]}),"\n",(0,t.jsx)(n.h3,{id:"b2-evaluation-scene-data",children:"B.2 Evaluation scene data"}),"\n",(0,t.jsx)(n.p,{children:"For each scene in the evaluation data only the following will be available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The output of the hearing aid processor."}),"\n",(0,t.jsx)(n.li,{children:"The target convolved with the anechoic BRIR (channel 1) for each ear (\u2018target_anechoic\u2019)."}),"\n",(0,t.jsx)(n.li,{children:"The IDs of the listeners assigned to the scene/hearing aid system in the metadata provided."}),"\n",(0,t.jsx)(n.li,{children:"The listener metadata."}),"\n",(0,t.jsx)(n.li,{children:"The prompt for the utterances (the text the actors were given to read)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"c-listener-data",children:"C Listener data"}),"\n",(0,t.jsx)(n.p,{children:"We will provide metadata characterising the hearing abilities of our listening panel. The listening panel data will be split, so that the listeners in the held back evaluation data are different from those provided in the training and development data. The listening panel are experienced bilateral hearing-aid users (they use two hearing aids but the hearing loss may be asymmetrical) with an averaged hearing loss as measured by pure tone air-conduction of between 25 and about 60 dB in the better ear, with fluent speaking of (and listening to) British English."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"every"})," listener, you will be given the left and right pure tone air-conduction audiograms. These measure the threshold at which people can hear a pure-tone sound."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"some"})," listeners you will be provided with additional characterisation of their hearing. Consequently, if you wish to exploit this additional data, you will need to deal with the missing data. See the ",(0,t.jsx)(n.a,{href:"../taking_part/cpc1_faq#missing-data",children:"FAQ"})," for more on missing data. Below is a description of each measure."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ssq12---speech-spatial--qualities-of-hearing-questionnaire-12-question-version",children:"SSQ12 - Speech, Spatial, & Qualities of Hearing questionnaire, 12-question version"}),"\n",(0,t.jsxs)(n.p,{children:["This is a popular self-assessment questionnaire of hearing disability. Each item asks about listening situations typical of real life and asks how well a listener would do in it. The SSQ assesses ability to make successful use of one\u2019s hearing (i.e. hearing disability, or activity limitation). This is an intermediate link between the audiological measurement of someone's hearing loss (i.e. their impairment) and a patient's assessment of how that hearing loss impacts their wider life (i.e. their handicap, or participation restriction). ",(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/23651462/",children:"The 12 questions are given in table 1 of this paper"})," and FYI ",(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/33375840/",children:"a recent paper that used it is here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'Responses to each question are on a scale from 0 to 10, with 0 representing "not at all" (or "jumbled"/"concentrate hard" for #11 & #12), and 10 representing "perfect" (or "not jumbled"/"no need to concentrate"). We programmed this as a visual-analog slider, which the participant could set to any position from 0 to 10. The SSQ12 data supplied are the responses to each question, from 0-10 at 1 decimal place resolution, along with the mean of all 12 questions.'}),"\n",(0,t.jsx)(n.h4,{id:"ghapb---glasgow-hearing-aid-benefit-profile-questionnaire",children:"GHAPB - Glasgow hearing-aid benefit profile questionnaire"}),"\n",(0,t.jsxs)(n.p,{children:["This is designed to assess the efficacy and effectiveness of someone's hearing aid(s) in different scenarios. It asks respondents to consider four scenarios involving speech and to rate on a five-point scale their perceived initial (i.e. unaided) hearing disability, initial handicap, aided benefit, aided handicap, hearing aid use, and hearing aid satisfaction. The listening panel are experienced hearing-aid users, so some of the rating would be about their normal hearing aid. ",(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/24484267/",children:"This paper"})," describes the GHABP and provides some normative data."]}),"\n",(0,t.jsx)(n.p,{children:"For each scenario, the participant is asked a primary question about if a situation happens to them (relatable). If they answer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No, it moves onto to the next scenario."}),"\n",(0,t.jsxs)(n.li,{children:["Yes, then a list of six secondary questions are asked (see figure below)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If one of the secondary questions is not relatable to the participant, they\'re asked to respond "N/A" for not applicable.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("figure",{id:"fig2",children:[(0,t.jsx)("img",{width:"300",src:(0,a.A)("/img/GHAPB.png")}),(0,t.jsx)("figcaption",{children:"Figure 2. The GHAPB questionnaire."})]}),"\n",(0,t.jsx)(n.p,{children:"There are four scenarios:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"listening to the television when the volume is adjusted for others."}),"\n",(0,t.jsx)(n.li,{children:"Having a conversation with one person in quiet."}),"\n",(0,t.jsx)(n.li,{children:"Having a conversation on a busy street or in a shop."}),"\n",(0,t.jsx)(n.li,{children:"Having a conversation with several people in a group."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the datafile, the question numbers are coded as x.y where x is the scenario number and y the secondary question number."}),"\n",(0,t.jsx)(n.p,{children:"If the answer to primary questions is No, then all the secondary questions are coded as 0."}),"\n",(0,t.jsx)(n.p,{children:"If the answer to primary questions is Yes, then each subsequent question is scored as\r\n0. = N/A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'= first option in the list (eg "no difficulty")'}),"\n",(0,t.jsx)(n.li,{children:"= second"}),"\n",(0,t.jsx)(n.li,{children:"= third"}),"\n",(0,t.jsx)(n.li,{children:"= fourth"}),"\n",(0,t.jsx)(n.li,{children:'= fifth (e.g. "cannot manage at all")'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There is no global score for the GHABP. The six secondary questions ask about different things and so should not be averaged across questions, though it is fairly common to average within-question across scenario."}),"\n",(0,t.jsx)(n.h4,{id:"dtt-digit-triplet-test-also-known-as-a-triple-digit-test",children:"DTT (digit-triplet test, also known as a triple digit test)"}),"\n",(0,t.jsx)(n.p,{children:"This is an adaptive test of speech-in-noise ability. In each trial a listener hears three spoken digits (e.g. 3-6-1) against a background of noise at a given signal-to-noise-ratio (SNR). The task is to respond on a keypad with those three digits in the order they were presented. If the listener gets all three correct, then the SNR is reduced for the next trial so making it slightly harder. If the listener makes any mistake (i.e., any digit wrong, or the order wrong) then the SNR is increased, so making the next trial slightly easier. The test carries on trial-by-trial. The test asymptotes to the SNR at which the participant is equally likely to get all three correct or not, with a few tens of trials needed to get an acceptable result. DTT tests are now used world-wide to measure hearing as they are easy to make in any local language, to explain to participants and to do, and moreover can be done over the internet or telephone as they measure a relative threshold (signal-to-noise ratio), not an absolute threshold in dB SPL. Listeners are encouraged to set a volume that is comfortable and that does not distort or crackle, but is not too quiet."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/33840339/",children:"This paper"})," is a recent scoping review of the field. The particular version we used is ",(0,t.jsxs)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/25127323/",children:["Vlaming et al's ",(0,t.jsx)(n.em,{children:"high-frequency DTT"})]}),", which uses a high-pass noise as the masker. Ours starts at -14 dB SNR, goes up/down at 2 dB steps per trial, and continues for 40 trials."]}),"\n",(0,t.jsx)(n.p,{children:"In the datafile, an average of the SNR for the last 30 trials is provided (labelled 'threshold'). For reference, the SNRs are supplied for each trial as well. The very first trial is practice and is not scored."}),"\n",(0,t.jsx)(n.h2,{id:"d-data-file-formats-and-naming-conventions",children:"D Data file formats and naming conventions"}),"\n",(0,t.jsx)(n.h3,{id:"d1-abbreviations-in-filenames",children:"D.1 Abbreviations in Filenames"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"R"})," \u2013 \u201croom\u201d:  e.g., \u201cR02678\u201d   # Room ID linking to RAVEN rpf file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"S"})," \u2013  \u201cscene\u201d:  e.g., S00121  # Scene ID for a particular setup in a room I.e., room + choice of target and interferer signals"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BNC"})," \u2013 BNC sentence identifier  e.g. BNC_A06_01702"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH"})," \u2013","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH0"})," \u2013 eardrum signal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH1"})," \u2013 front signal, hearing aid channel"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH2"})," \u2013 middle signal, hearing aid channel"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH3"})," \u2013 rear signal, hearing aid channel"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"I"}),"/",(0,t.jsx)(n.code,{children:"i1"})," \u2013 Interferer, i.e., noise or sentence ID for the interferer/masker"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"T"})," \u2013 talker who produced the target speech sentences"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"L"})," \u2013 listener"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"E"})," \u2013 entrant (identifying a team participating in the challenge)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"t"})," \u2013 target (used in BRIRs and RAVEN project \u2018rpf\u2019 files)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d2-general",children:"D.2 General"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Audio and BRIRs will be 44.1 kHz 32 bit wav files in either mono or stereo as appropriate."}),"\n",(0,t.jsx)(n.li,{children:"Where stereo signals are provided, the two channels represent the left and right signals of the ear or hearing aid microphones."}),"\n",(0,t.jsx)(n.li,{children:"HRIRs have a sampling rate of 48 kHz."}),"\n",(0,t.jsx)(n.li,{children:"Metadata will be stored in JSON format wherever possible."}),"\n",(0,t.jsx)(n.li,{children:"Room descriptions are stored as RAVEN project \u2018rpf\u2019 configuration files."}),"\n",(0,t.jsx)(n.li,{children:"Signals are saved within the Python code as 32-bit floating point by default."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d3-prompt-and-transcription-data",children:"D.3 Prompt and transcription data"}),"\n",(0,t.jsx)(n.p,{children:"The following text is available for the target speech:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prompts are the text that was supposed to be spoken as presented to the readers."}),"\n",(0,t.jsx)(n.li,{children:"\u2018Dot\u2019 transcriptions contain the text as it was spoken in a form more suitable for scoring tools."}),"\n",(0,t.jsx)(n.li,{children:"These are stored in the master json metadata file."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d4-timing-in-audio-files",children:"D.4 Timing in audio files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The target sound starts 2 seconds after the start of the interferer. This is so the target is clear and unambiguously identifiable for listening tests. This also gives the hearing aid algorithms some time to adjust to the background noise."}),"\n",(0,t.jsx)(n.li,{children:"The interferer continues 1 second after the target has finished, so that all words in the target utterance can be masked."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d5-source-audio-files",children:"D.5 Source audio files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Wav files containing the original source materials."}),"\n",(0,t.jsx)(n.li,{children:"Could be used as the clean speech reference in an intrusive (double-ended) prediction model"}),"\n",(0,t.jsx)(n.li,{children:"Original target sentence recordings:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  <Talker ID>_<BNC sentence identifier>.wav\n"})}),"\n",(0,t.jsx)(n.h3,{id:"d6-preprocessed-scene-signals",children:"D.6 Preprocessed scene signals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Audio files storing the signals picked up by the hearing aid microphone ready for processing."}),"\n",(0,t.jsx)(n.li,{children:"Target_anechoic could be used as the clean speech reference in an intrusive (double-ended) prediction model."}),"\n",(0,t.jsx)(n.li,{children:"Separate signals are generated for each hearing aid microphone pair or \u2018channel\u2019."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<Scene ID>_target_<Channel ID>.wav\r\n<Scene ID>_interferer_<Channel ID>.wav\r\n<Scene ID>_mixed_<Channel ID>.wav\r\n<Scene ID>_target_anechoic.wav\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Scene ID"})," \u2013  S00001  to S10000"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"S"})," followed by 5 digit integer with 0 pre-padding"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Channel ID"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH0"})," \u2013 Eardrum signal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH1"})," \u2013 Hearing aid front microphone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH2"})," \u2013 Hearing aid middle microphone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CH3"})," \u2013 Hearing aid rear microphone"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d7-enhanced-signals",children:"D.7 Enhanced signals"}),"\n",(0,t.jsx)(n.p,{children:"These are the audio signals that the listeners heard during the speech intelligibility testing. The signals that are output by a given enhancement (hearing aid) model or system."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<Entrant ID>_<Scene ID>_<Listener ID>_HA-output.wav"})," # HA output signal (i.e., as submitted by the challenge entrants)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Listener ID"}),"  \u2013 ID of the listener panel member,  e.g., L200 to L244."]}),"\n","\n",(0,t.jsx)(n.h3,{id:"d8-scene-metadata",children:"D.8 Scene metadata"}),"\n",(0,t.jsxs)(n.p,{children:["A JSON file called ",(0,t.jsx)(n.code,{children:"scenes.CPC1_train.json"})," containing a description of each scene that is used in the listening experiments. It is a hierarchical dictionary, with the top level being scenes indexed by unique scene ID, and each scene described by a second-level dictionary. Here, viewvector indicates the direction vector or line of sight."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="scenes.json"',children:'[\r\n   {\r\n     "scene": "S00001", \r\n     "room": {\r\n       "name": "R00001",\r\n       "dimensions": "5.9x3.4186x2.9" // Room dimensions in metres\r\n     },\r\n     "SNR": 3.8356,\r\n     "hrirfilename": "VP_N5-ED", // HRIR filename\r\n     "target": { // target positions (x,y,z) and view vectors (look directions, x,y,z)\r\n       "Positions": [ \r\n         -0.5,\r\n         3.4,\r\n         1.2\r\n       ],\r\n       "ViewVectors": [\r\n         0.291,\r\n         -0.957,\r\n         0\r\n       ],\r\n       "name": "T022_HCS_00002", // target speaker code and BNCid\r\n       "nsamples": 153468, // length of target speech in samples\r\n     },\r\n     "listener": {\r\n       "Positions": [\r\n         0.2,\r\n         1.1,\r\n         1.2\r\n       ],\r\n       "ViewVectors": [\r\n         -0.414,\r\n         0.91,\r\n         0\r\n       ]\r\n     },\r\n     "interferer": {\r\n       "Positions": [\r\n         0.4,\r\n         3.2,\r\n         1.2\r\n       ],\r\n       "name": "CIN_dishwasher_012", // interferer name\r\n       "nsamples": 1190700, // interferer length in samples\r\n       "duration": 27, // interferer duration in seconds\r\n       "type": "noise", // interferer type: noise or speech\r\n       "offset": 182115, // interferer segment starts at n samples from beginning of recording\r\n       },\r\n     "azimuth_target_listener": -7.55, // angle azimuth in degrees of target for receiver\r\n     "azimuth_interferer_listener": -29.92, // angle azimuth in degrees of interferer for receiver\r\n     "dataset": "train", // dataset: train, dev or eval/test\r\n     "pre_samples": 88200, // number of samples of interferer before target onset\r\n     "post_samples": 44100 // number of samples of interferer after target offset\r\n   },\r\n   {\r\n    // ... etc.\r\n   }\r\n ]\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There are JSON files containing the scene specifications per dataset, e.g., scenes.train.json."}),"\n",(0,t.jsx)(n.li,{children:"Note that the scene ID and room ID might have a one-to-one mapping in the challenge, but are not necessarily the same."}),"\n",(0,t.jsx)(n.li,{children:"A scene is completely described by the room ID and target and interferer source IDs, as all other information, e.g., source + target geometry are already in the RAVEN project rpf files. Only the room ID is needed to identify the BRIR files."}),"\n",(0,t.jsxs)(n.li,{children:["The listener ID is not stored in the scene metadata; this information is stored separately in a ",(0,t.jsx)(n.code,{children:"scenes_listeners.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Non-speech interferers are labelled ",(0,t.jsx)(n.code,{children:"CIN_<noise type>_XXX"}),", while speech interferers are labelled ",(0,t.jsx)(n.code,{children:"<three letter code including dialect and talker gender>_XXXXX"})," ."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d9-listener-metadata",children:"D.9 Listener metadata"}),"\n",(0,t.jsxs)(n.p,{children:["Listener audiogram data stored in a single JSON file called ",(0,t.jsx)(n.code,{children:"listeners.CPC1_train.json"})," with the following format."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="listeners.json"',children:'{\r\n    "L0001": {\r\n      "name": "L0001",\r\n      "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],\r\n      "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],\r\n      "audiogram_levels_r": [10, 15, 25, 40, 50, 65, 65, 70 ],\r\n    },\r\n    "L0002": {\r\n        // ... etc.\r\n    },\r\n// ... etc.\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)("b",{children:"spreadsheet"})," named ",(0,t.jsx)(n.code,{children:"listener_data.CPC1_train.xlsx"})," containing the ",(0,t.jsx)(n.a,{href:"#c-listener-data",children:"SSQ12, GHAPB, DTT data"})," for each listener where it is available."]}),"\n",(0,t.jsx)(n.h3,{id:"d10-listener-intelligibility-data",children:"D.10 Listener intelligibility data"}),"\n",(0,t.jsxs)(n.p,{children:["JSON files ",(0,t.jsx)(n.code,{children:"CPC1.train.json"})," (for Track 1) and ",(0,t.jsx)(n.code,{children:"CPC1.train_indep.json"})," (for Track 2) which provides the responses made by the listeners when presented with a particular scene processed by a particular system. The data is a simple list of dictionaries with one entry for each listener response"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="CPC1.tran.json"',children:'[\r\n  {\r\n    "scene":"S08510",     // The identity of the scene\r\n    "listener":"L0239",   // The identity of the listener\r\n    "system":"E001",      // The identify of the HA system\r\n    "prompt":"i suppose you wouldn\'t be free for dinner this evening", // The target sentence (prompt)\r\n    "response":"freeze evening", // The listeners response (transcript)\r\n    "n_words":10,  // Number of words in the target sentence\r\n    "hits":1,      // Number of words recognised correctly\r\n    "correctness":10.0,            // The percentage of words recognised correctly\r\n    "signal":"S08510_L0239_E001"   // The name of the file containing the signal listened to.\r\n  },\r\n  {\r\n    // ... etc.\r\n  },\r\n  // ... etc.\r\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"e-reproduction-levels",children:"E. Reproduction Levels"}),"\n",(0,t.jsx)(n.p,{children:"The graph gives the SPL from one of our headsets based on the volume level of the tablet. The input signal was ICRA speech-shaped noise [1], unmodulated in time, and scaled to an RMS of 0.3."}),"\n",(0,t.jsxs)("figure",{id:"fig3",children:[(0,t.jsx)("img",{width:"500",src:(0,a.A)("/img/volume_vs_dB.jpg")}),(0,t.jsx)("figcaption",{children:"Figure 3. Headset SPL by tablet volume level."})]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.p,{children:["[1] ICRA standard noises, ",(0,t.jsx)(n.a,{href:"https://icra-audiology.org/Repository/icra-noise",children:"https://icra-audiology.org/Repository/icra-noise"}),". We used track #1."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},41622:(e,n,i)=>{i.d(n,{A:()=>m});var t=i(96540),s=i(18215),a=i(15066),r=i(63427),o=i(92303),l=i(41422);const d={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var h=i(74848);function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function u(e){let{summary:n,children:i,...s}=e;(0,r.A)().collectAnchor(s.id);const u=(0,o.A)(),g=(0,t.useRef)(null),{collapsed:f,setCollapsed:m}=(0,l.u)({initialState:!s.open}),[x,j]=(0,t.useState)(s.open),v=t.isValidElement(n)?n:(0,h.jsx)("summary",{children:n??"Details"});return(0,h.jsxs)("details",{...s,ref:g,open:x,"data-collapsed":f,className:(0,a.A)(d.details,u&&d.isBrowser,s.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;c(n)&&p(n,g.current)&&(e.preventDefault(),f?(m(!1),j(!0)):m(!0))},children:[v,(0,h.jsx)(l.N,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),j(!e)},children:(0,h.jsx)("div",{className:d.collapsibleContent,children:i})})]})}const g={details:"details_b_Ee"},f="alert alert--info";function m(e){let{...n}=e;return(0,h.jsx)(u,{...n,className:(0,s.A)(f,g.details,n.className)})}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);