"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[904],{79406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=a(74848),r=a(28453),s=a(11470),i=a(19365),o=a(41662),l=a(86025);const d={id:"cec3_task2_data",title:"Task 2 Data",sidebar_label:"Data",sidebar_position:20},h=void 0,c={id:"cec3/task_2/cec3_task2_data",title:"Task 2 Data",description:"The Task 2 data consists of real acoustic scenes that have been recorded over hearing aid shells, each with three channels (front, middle, back). The scenes are based on the domestic environments used in previous Clarity challenges consisting of a target sentence and either two or three interferers. The interferers can be speech, music or noise from domestic appliances in any combination. Data has been split into two sets: 6,000 scenes for training and a 2,500 scene development set. A further 1,500 scenes were recorded and have been set aside for evaluation.",source:"@site/docs/cec3/task_2/task2_data.mdx",sourceDirName:"cec3/task_2",slug:"/cec3/task_2/cec3_task2_data",permalink:"/docs/cec3/task_2/cec3_task2_data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"cec3_task2_data",title:"Task 2 Data",sidebar_label:"Data",sidebar_position:20},sidebar:"tutorialSidebar_cec3",previous:{title:"Overview",permalink:"/docs/cec3/task_2/cec3_task2_overview"},next:{title:"Rules",permalink:"/docs/cec3/task_2/cec3_task2_rules"}},u={},p=[{value:"Recording setup",id:"recording-setup",level:2},{value:"Audio and Headtracking Data format",id:"audio-and-headtracking-data-format",level:2},{value:"Speaker adaptation data",id:"speaker-adaptation-data",level:2},{value:"Metadata Formats",id:"metadata-formats",level:2},{value:"The Room Metadata",id:"the-room-metadata",level:3},{value:"The Scene Metadata",id:"the-scene-metadata",level:3}];function f(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Task 2 data consists of real acoustic scenes that have been recorded over hearing aid shells, each with three channels (front, middle, back). The scenes are based on the domestic environments used in previous Clarity challenges consisting of a target sentence and either two or three interferers. The interferers can be speech, music or noise from domestic appliances in any combination. Data has been split into two sets: 6,000 scenes for training and a 2,500 scene development set. A further 1,500 scenes were recorded and have been set aside for evaluation."}),"\n",(0,n.jsxs)(t.p,{children:["The data is organised into the following directories, and can be obtained from the ",(0,n.jsx)(t.a,{href:"./../cec3_download",children:"download page"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"clarity_CEC3_data\n|\u2500\u2500 manifest\n|\u2500\u2500 task1\n|\u2500\u2500 task2\n|   \u2514\u2500\u2500 clarity_data\n|       |\u2500\u2500 metadata  - metadata for each scene\n|       |\u2500\u2500 train\n|       |   |\u2500\u2500 scenes  - audio and headtracking data for training scenes\n|       |   |\u2500\u2500 interferers - complete set of interferer signals available for training\n|       |   \u2514\u2500\u2500 targets - complete set of target signals available for training\n|       \u2514\u2500\u2500 dev\n|           |\u2500\u2500 scenes\n|           |\u2500\u2500 interferers\n|           |\u2500\u2500 targets\n|           \u2514\u2500\u2500 speaker_adapt - speaker adaptation utterances (see below)\n\u2514\u2500\u2500 task3\n"})}),"\n",(0,n.jsx)(t.p,{children:"The sections below describe the recording setup, the format of the audio and headtracking data, and the metadata provided for each scene."}),"\n",(0,n.jsx)(t.h2,{id:"recording-setup",children:"Recording setup"}),"\n",(0,n.jsx)(t.p,{children:"The scenes were recorded over the period of two weeks in a recording room at the University of Sheffield. The target and interferer signals were played using a set of 13 loudspeakers arranged around a listener. The listener was wearing hearing aid shells with three microphones (front, middle, back) and a pair of glasses with reflective markers that were tracked with a Vicon motion capture system. Nine loudspeakers were placed in front of the listener arranged at semi-randomly selected locations on a polar grid (the grid has distances of 2 m to 4 m spaced at 0.5 m and angles from -60 degrees to 60 degrees spaced at 7.5 degrees). The remaining four loudspeakers were placed in a line behind the listener. For each scene, one of the front loudspeakers was chosen to play the target utterances, and two or three of the 12 remaining speakers (front and back) were chosen to play the interferers."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"scene",label:"Recording Room",children:(0,n.jsxs)("figure",{id:"fig1a",children:[(0,n.jsx)("img",{width:"700",src:(0,l.A)("/img/CEC3/recording1.jpeg")}),(0,n.jsxs)("figcaption",{children:["Figure 1a. A view of the recording room with a B&K HATS in the listener position. ",(0,n.jsx)("br",{})," (The four rear loudspeakers are not visible in this in this view.)"]})]})}),(0,n.jsx)(i.A,{value:"scene2",label:"...another view",children:(0,n.jsxs)("figure",{id:"fig1b",children:[(0,n.jsx)("img",{width:"700",src:(0,l.A)("/img/CEC3/recording2.jpeg")}),(0,n.jsx)("figcaption",{children:"Figure 1b. Recording room with the front loudspeakers in a typical arrangement and with their labels attached."})]})}),(0,n.jsx)(i.A,{value:"scene3",label:"... and another.",children:(0,n.jsxs)("figure",{id:"fig1c",children:[(0,n.jsx)("img",{width:"700",src:(0,l.A)("/img/CEC3/recording3.jpeg")}),(0,n.jsx)("figcaption",{children:"Figure 1c. Recording room with the front loudspeakers at their maximum distances (being photobombed by a B&K HATS!)."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Scenes were recording in blocks of 125 where each block had the same target speaker and the same speaker locations. The front speakers were labelled 1 to 9 so that they could be easily identified by the listener. For each scene one of the 9 front speakers, other than the target speaker, was chosen as the initial look direction speaker. Before the scene is played, the look-direction speaker plays it's number and the listener is instructed to turn to face it. Then after a short pause the multisource scene plays. Within the scene, the target speaker starts about two seconds after the interfering noise sources. The listener is asked to attend to the target speech source and turn to face it when it starts, and also to note down the speaker number. This process is repeated 125 times with a short pause between scenes. The entire block recording lasts about 20 minutes and once recording is complete the audio and headtracking data is segmented into individual scenes."}),"\n",(0,n.jsx)(t.p,{children:"After each recording block the front speakers are moved to a new set of locations on the grid. Each of the 80 blocks has its own unique speaker layout. The speaker locations were randomised such there was only ever one loudspeaker along each radial direction and that the loudspeaker were spread across the full range of angles. Some examples are shown below.\nThe precise locations of the speakers are provided in the metadata for each scene."}),"\n",(0,n.jsxs)("figure",{id:"fig2",children:[(0,n.jsx)(o.Ay,{container:!0,spacing:3,children:[1,2,3,4,5,6].map((e=>(0,n.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,n.jsx)(t.img,{src:(0,l.A)(`/img/CEC3/cec3_speaker_pos.0${e}.svg`),alt:`speaker layout ${e}`,loading:"lazy",style:{width:"100%"}})},e)))}),(0,n.jsx)("figcaption",{children:"Figure 2. Six of the 80 different speaker layouts that were used."})]}),"\n",(0,n.jsx)(t.p,{children:"Following CEC2, the scenes were designed to produce a large range of SNRs for the target. This was set to be between -12 dB and 6 dB in the condition that all the loudspeaker signals are instantaneously added. Note, the actual SNRs recorded at the microphones will vary further depending on the rooms acoustics and the listeners head rotation etc, e.g., SNRs will be higher than that recording in the meta data if the target is closer to the listener than the interferers, and lower if the target is further away. (We plan to release estimates of the SNRs at the microphones in the future.)"}),"\n",(0,n.jsx)(t.p,{children:"The signals were recorded using hearing aid shell with three microphones (front, middle and back). The figure below shows how these are positions when the shell are being worn. The microphones are each about 1 cm apart and form an approximately horizontal line when the head it level. Click on the image to enlarge."}),"\n",(0,n.jsxs)("figure",{id:"fig3",children:[(0,n.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,n.jsx)(o.Ay,{item:!0,xs:12,sm:4,md:4,children:(0,n.jsx)("img",{height:"240",src:(0,l.A)("/img/CEC3/ear.png")})},1),(0,n.jsx)(o.Ay,{item:!0,xs:12,sm:8,md:8,children:(0,n.jsx)("img",{height:"240",src:(0,l.A)("/img/CEC3/glasses.png")})},2)]}),(0,n.jsx)("figcaption",{children:"Figure 3. (left) the locations of the three hearing aid microphone; (right) the glasses worn to track the head"})]}),"\n",(0,n.jsx)(t.h2,{id:"audio-and-headtracking-data-format",children:"Audio and Headtracking Data format"}),"\n",(0,n.jsx)(t.p,{children:"All audio data is provided in 16-bit PCM format at a sample rate of 48000 kHz. File names have been designed to be compatible with previous Clarity challenges. For each scene the following audio files are provided:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"- <SCENE_ID>_mix_CH1.wav - the left and right stereo pair from the front microphone.\n- <SCENE_ID>_mix_CH2.wav - the left and right stereo pair from the middle microphone.\n- <SCENE_ID>_mix_CH3.wav - the left and right stereo pair from the back microphone.\n- <SCENE_ID>_target.wav - the target speech signal.\n- <SCENE_ID>_interferer.wav - the interferer signals stored as either 2 or 3 channel audio files.\n- <SCENE_ID>_reference.wav - the signal to be used as the reference for HASPI evaluation.\n"})}),"\n",(0,n.jsx)(t.p,{children:"These signals are provided for both the training and development data set. When the evaluation data is released only the mix files will be provided."}),"\n",(0,n.jsx)(t.p,{children:"The headtracking data is provided in a CSV file with a frame rate of 250 Hz,"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"- <SCENE_ID>_hr.csv - the audio-aligned 6 DOF head track\n"})}),"\n",(0,n.jsx)(t.p,{children:"The headtracking has been carefully aligned with the audio recordings. The csv files have six columns: TX, TY, TZ, RX, RY and RZ. (TX, TY, TZ) are the locations of the head with respect to the tracker origin. (RX, RY, RZ) is the rotation of the head with respect to a level, forward facing head. The angles are stored in radians in `helical' form, i.e. they represent a vector which whose direction is the axis of rotation and whose magnitude is the size of the rotation in radian. The figure below plots the raw RX, RY and RZ data for three different scenes. Note, the helical representation makes interpretation a little difficult, but broadly speaking RY is the head turning left to right, RX is the head tipping up and down and RZ is the head tilting."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"scene",label:"Head rotation example",children:(0,n.jsxs)("figure",{id:"fig4a",children:[(0,n.jsx)("img",{width:"850",src:(0,l.A)("/img/CEC3/headtrack_300.png")}),(0,n.jsx)("figcaption",{children:"Figure 4a. Typical head trajectory with head turning from left to right (red) and tipping down (green) at the end of the scene. The tilt (blue) occurs naturally as the head turns.)"})]})}),(0,n.jsx)(i.A,{value:"scene2",label:"...and another",children:(0,n.jsxs)("figure",{id:"fig4b",children:[(0,n.jsx)("img",{width:"850",src:(0,l.A)("/img/CEC3/headtrack_400.png")}),(0,n.jsx)("figcaption",{children:"Figure 4b. An example where the listener has initially turned in the wrong direction and is struggling to identify the target"})]})}),(0,n.jsx)(i.A,{value:"scene3",label:"... and another.",children:(0,n.jsxs)("figure",{id:"fig4c",children:[(0,n.jsx)("img",{width:"850",src:(0,l.A)("/img/CEC3/headtrack_700.png")}),(0,n.jsx)("figcaption",{children:"Figure 4c. An example where the listener only need a small rotation."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"The headtracking data is provided for both the training and development data set and will be provided for optional use during evaluation as well."}),"\n",(0,n.jsx)(t.h2,{id:"speaker-adaptation-data",children:"Speaker adaptation data"}),"\n",(0,n.jsx)(t.p,{children:"The scenes that you have been asked to enhance often contain speech signals as interferers. This means that the task of enhancing the target speaker is ambiguous unless you are told which of the speaker to use as target. In this task, we follow the approach used in CEC2 and provide a small set of clean target speaker example utterances. So, for each scene, the ID of the target speaker is provided in the metadata, and systems can then use the examples and select the target as the one that has the matching voice."}),"\n",(0,n.jsx)(t.p,{children:"Note, these same utterances will be used in the final subjective listening tests, i.e. the listeners will be presented with the examples before listening to the processed signal and told that these are examples of the target speaker that they are meant to be listening to."}),"\n",(0,n.jsx)(t.h2,{id:"metadata-formats",children:"Metadata Formats"}),"\n",(0,n.jsx)(t.p,{children:"The following metadata files are provided"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"# The description of the scenes\n- scenes.[train|dev].json - metadata for the training/dev scenes\n- rooms.[train|dev].json - metadata for the training/dev rooms\n\n# Listener information\n- scenes_listeners.dev.json - the listeners/scene pairings to for the standard development set\n- listeners.json - the audiograms of the listeners\n\n# Materials used to make up the scenes\n- masker_music_list.json - the list of music interferers\n- masker_nonspeech_list.json - the list of non-speech interferers\n- masker_speech_list.json - the list of speech interferers\n- target_speech_list.json - the list target utterances\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Most of these files follow the same format as in CEC2. The most important are the ",(0,n.jsx)(t.code,{children:"scenes.json"})," and ",(0,n.jsx)(t.code,{children:"rooms.json"})," files and these are described below."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"room"})," describes the locations of the 13 loudspeaker and the listener. There are 80 different 'rooms' corresponding to the 80 different recording sessions, each of which had their own speaker layout. The 'scenes' are represented by a 'room' (i.e., a loudspeaker configuration) and a description of the target and interferers and which of the loudspeakers they were played from. Note, there is a one-to-many relationship between rooms and scenes, i.e., each room is used to record 125 different scenes. However, different subsets of the loudspeakers are used for each scene, so few scenes will have the target and maskers in the same location."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"room' and"}),"scene' metadata files are described in more detail below."]}),"\n",(0,n.jsx)(t.h3,{id:"the-room-metadata",children:"The Room Metadata"}),"\n",(0,n.jsx)(t.p,{children:"The room metadata is stored in a JSON file as a list of dictionaries, with one dictionary representing each room. The format is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "name": "R001",  // The Room identifier (R001 to R080)\n    "dimensions": "6.0x6.0x3.0",  // Approximate room dimensions (fixed)\n    "sources": [ // A list of the 13 loudspeaker locations\n      {\n        "position": [   \n          -2.5981, // In x,y,z coordinate but map onto the polar grid\n          1.5, \n          1.4 // This is the approximate height of the loudspeakers and is fixed\n        ],\n        "view_vector": [ // Loudspeakers all directed towards listener\n          2.5981,   \n          -1.5,\n          0.0\n        ]\n      },\n      // etc,  13 source positions in total \n    ]\n    "listener": [\n      {\n        "position": [ // Note the origin is at the listener location\n          0.0,\n          0.0,\n          1.4\n        ],\n        "view_vector": [ // For compatibility with CEC2 but replace with headtracking data\n          0.0,\n          1.0,\n          0.0\n        ]\n      }\n    ]\n  },\n  ... //  more rooms \n]\n'})}),"\n",(0,n.jsx)(t.h3,{id:"the-scene-metadata",children:"The Scene Metadata"}),"\n",(0,n.jsx)(t.p,{children:"The scene metadata is stored in a JSON file as a list of dictionaries with one dictionary for each scene. There are 6000 scenes in the training set and 2500 in the development set. A further 1500 have been retained for the final evaluation."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "scene": "S00508",  // The Scene ID  (S00001 to S10000)\n    "target": {  // The target description\n      "name": "T001_FRD_00503",  // The utterance ID which starts with the talker ID (T001 to T040)\n      "time_start": 77020, // The sample at which the target starts\n      "time_end": 176245, // The sample at which the target ends\n      "position": 7,  // The loudspeaker number (indexed 1 to 13). The location is in the rooms metadata.\n      "dataset": "train"  // Can be train, dev or eval\n    },\n    "interferers": [  // The list of interferers. Either two or three.\n      {\n        "name": "scm_08421",  // The interferer ID\n        "time_start": 0,  // The sample at which the interferer starts (always 0)\n        "time_end": 220345, // The sample at which the interferer ends (always the end of the scene)\n        "position": 3, // The loudspeaker number (indexed 1 to 13). The location is in the rooms metadata.\n        "dataset": "train",  // Can be train, dev or eval\n        "type": "speech", // The type of interferer (speech, music, noise)\n        "offset": 10306318 // The offset of the interferer in the complete audio file\n      },\n      {\n        "name": "nom_03397",\n        "time_start": 0,\n        "time_end": 220345,\n        "position": 10,\n        "dataset": "train",\n        "type": "speech",\n        "offset": 15349869\n      }\n    ],\n    "listener": {  // The listener information\n      "ID": "L001", // The listener ID (always L001)\n      "initial_head_orientation": 3 // The initial look direction (1 to 9)\n    },\n    "room": "R001",  // The Room ID (R001 to R080) which provides the loudspeaker locations\n    "SNR": -1.1145819681656075,  // The SNR of the target signal (-12 to 6 dB)\n    "duration": 220345,  // The duration of the scene in samples\n    "dataset": "train" // Can be train, dev or eval\n  },\n'})}),"\n",(0,n.jsx)(t.p,{children:"Some important points to note are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The timing of events is recorded in samples at 44100 Hz"}),". This was the sampling rate at which all the audio target and interferer materials are stored and so was used for scene construction. ",(0,n.jsx)(t.strong,{children:"However"}),", signals were then upsampled to ",(0,n.jsx)(t.strong,{children:"48 kHz"})," to meet the specification of the recording and playback hardware in the recording room. So take care to convert the sample numbers to the correct rate if you are using them to analyse the audio, e.g. to endpoint the target speech."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The SNR"})," is not the SNR at the microphones. It is the SNR that would be obtained if the signals delivered to the loudspeakers were summed instantaneously (i.e. without any room acoustic effects). They can be used as a rough guide. We plan to produce estimates of the true SNRs later in the challenge to allow for more accurate performance evaluation. The SNR is computed over the duration of the target signal and using a speech weighted filter. The signal generation code will be made available in the GitHub repository."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(34164),s=a(23104),i=a(56347),o=a(205),l=a(57485),d=a(31682),h=a(89466);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,c]=f({queryString:a,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,h.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(d(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:c,onClick:h,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,w.jsx)(v,{...t,...e}),(0,w.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,w.jsx)(k,{...e,children:c(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);