(window["webpackJsonpmy-react-project"]=window["webpackJsonpmy-react-project"]||[]).push([[0],{25:function(e,t,a){e.exports=a(46)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),l=a.n(r),c=(a(30),a(18)),o=a(9),s=a(10),m=a(12),u=a(11),d=a(1),g=a(13),h=a(2),p=a(7),E=(a(31),function(e){var t=e.image;return i.a.createElement("header",{className:"header"},"My Health Log ",i.a.createElement("img",{alt:"website logo",src:t,className:"heartLogo"}))}),v=(a(32),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",null," \xa9 2019 / ",i.a.createElement("a",{className:"footer_link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/laurapareja/"},"Laura Pareja"),"/ Licencia"))}),f=(a(33),function(){return i.a.createElement("div",{className:"homeMain"},i.a.createElement("img",{src:"https://laurapareja.github.io/My-Health-Log/images/wallpaper.png",alt:"homewallpaper",className:"homepage_img"}))}),N=(a(34),function(e){var t=e;return i.a.createElement("div",{className:"settings"},i.a.createElement("i",{className:"fas fa-cog iconSettings",samesite:"none"}),i.a.createElement("h2",{className:"settings_title"},"Settings"),i.a.createElement("h3",{className:"settings_title"},"Medication Registered"),function(e){return e.medicationRegistered.map(function(e){return i.a.createElement("div",{className:"medicationContainer"},i.a.createElement("div",{className:"color ".concat(e.color)}),i.a.createElement("h4",null,e.name))})}(t))}),b=function(e){var t=e.classButton,a=e.nameButton,n=e.actionButton,r=e.disabled;return i.a.createElement("button",{className:"button ".concat(t),onClick:n,disabled:r},a)},y=function(e){var t=e.classImage,a=e.image,n=e.titlePage;return i.a.createElement("div",{className:"main"},void 0,i.a.createElement("img",{src:a,alt:"pill",className:t}),i.a.createElement("h2",{className:"main_title"},n),i.a.createElement("h3",{className:"main_subtitle"},"Here you can register and see your flare-ups treatment"),i.a.createElement("div",{className:"treatmentPage_button--container"},i.a.createElement(h.b,{to:"/My-Health-Log/treatmentList"},i.a.createElement(b,{nameButton:"TREATMENT LIST",classButton:"treatmentPage_button"})),i.a.createElement(h.b,{to:"/My-Health-Log/treatment/register"},i.a.createElement(b,{nameButton:"REGISTER",classButton:"treatmentPage_button"}))))},M=(a(40),function(e){var t=e.flareTreatment,a=e.titlePage,n=e.image,r=e.classImage;e.medicationName;return i.a.createElement("div",{className:"main"},i.a.createElement("img",{src:n,alt:"pill",className:"treatmentPageListImp ".concat(r)}),i.a.createElement("h2",{className:"main_title"},a),i.a.createElement("div",null,function(e,t){e.sort(function(e,t){return e.date<t.date?1:e.date>t.date?-1:0});var a=[];return e.map(function(e,t){if(!1===a.includes(e.date)){a.push(e.date);var n=function(e){var t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+n}(new Date(e.date));return i.a.createElement("div",{className:"medication_dose--container",key:t},i.a.createElement("h3",{className:"dateListItem"},n),i.a.createElement("div",{className:"pillContainer"},i.a.createElement("h4",{className:"doseTime"},e.treatment[0].time," "),i.a.createElement("div",{className:"pill yellow"})," ",i.a.createElement("p",{className:"pillName"},e.treatment[0].pill)))}return i.a.createElement("div",{className:"medication_dose--container",key:t},i.a.createElement("div",{className:"pillContainer"},i.a.createElement("h4",{className:"doseTime"},e.treatment[0].time," "),i.a.createElement("div",{className:"pill yellow"})," ",i.a.createElement("p",{className:"pillName"},e.treatment[0].pill)))})}(t)),i.a.createElement(h.b,{to:"/My-Health-Log/treatment"},i.a.createElement(b,{nameButton:"Back",classButton:"treatmentPage_button"})),i.a.createElement(v,null))}),S=(a(41),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={newMedication:!1,date:"",time:"",medicationName:"",buttonClickable:!0,errorMessage:!0},a.renderMedicationSelector=a.renderMedicationSelector.bind(Object(d.a)(a)),a.handleNewMedication=a.handleNewMedication.bind(Object(d.a)(a)),a.regirterNewMedication=a.regirterNewMedication.bind(Object(d.a)(a)),a.handleDeleteNewMedication=a.handleDeleteNewMedication.bind(Object(d.a)(a)),a.handleSaveMedication=a.handleSaveMedication.bind(Object(d.a)(a)),a.handleClassButton=a.handleClassButton.bind(Object(d.a)(a)),a.renderErrorMessage=a.renderErrorMessage.bind(Object(d.a)(a)),a.actionSaveButton=a.actionSaveButton.bind(Object(d.a)(a)),a.renderNewMedicationName=a.renderNewMedicationName.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"renderMedicationSelector",value:function(e){if(""!==e)return e.map(function(e,t){return i.a.createElement("option",{key:t,name:e.name,value:e.name},e.name)})}},{key:"handleNewMedication",value:function(e){if("newMedication"===e.currentTarget.value)return this.setState({newMedication:!0})}},{key:"renderNewMedicationName",value:function(e){return this.setState({medicationName:e.currentTarget.value})}},{key:"regirterNewMedication",value:function(){if(!0===this.state.newMedication)return i.a.createElement("div",null,i.a.createElement("div",{className:"inputMedicationTreatment_container "},i.a.createElement("label",{htmlFor:"medicationTreatment",className:"treatmentLabel"},"Register new medication"),i.a.createElement("div",{className:"inputContainerMedication"},i.a.createElement("input",{type:"text",id:"medicationTreatment",className:"inputTreatment",onChange:this.renderNewMedicationName}),i.a.createElement("i",{className:"far fa-trash-alt iconInput iconInput_trash",onClick:this.handleDeleteNewMedication}))))}},{key:"handleSaveMedication",value:function(e){if("date"===e.target.type){var t=new Date,a=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();t=i+"-"+n+"-"+a,e.target.value<=t?this.setState({date:e.target.value}):(alert("future dates are not available"),e.target.value="")}else"time"===e.target.type?this.setState({time:e.target.value}):this.setState({medicationName:e.target.value,errorMessage:!1,buttonClickable:!1})}},{key:"handleClassButton",value:function(){return""===this.state.date||void 0===this.state.date||""===this.state.time||""===this.state.medicationName?"treatmentRegister_button--disable":"treatmentRegister_button--able"}},{key:"renderErrorMessage",value:function(){if(!0===this.state.errorMessage)return i.a.createElement("div",null,"Please complete all options")}},{key:"handleDeleteNewMedication",value:function(){this.setState({newMedication:!1})}},{key:"actionSaveButton",value:function(e,t){if(!1===this.state.buttonClickable)return e(t)}},{key:"render",value:function(){var e=this.props,t=e.image,a=e.classImage,n=e.medicationName,r=e.includeNewTreatment;return i.a.createElement("div",{className:"main"},i.a.createElement("img",{src:t,alt:"pill",className:"treatmentPageListImp ".concat(a)}),i.a.createElement("h2",{className:"main_title"},"New Treatment"),i.a.createElement("form",{className:"form",onChange:this.handleSaveMedication},i.a.createElement("div",{className:"inputDateTreatment_container"},i.a.createElement("label",{htmlFor:"dateTreatment",className:"treatmentLabel"},"Date"),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("i",{className:"far fa-calendar-plus iconInput"}),i.a.createElement("input",{type:"date",id:"dateTreatment",className:"inputTreatment"}))),i.a.createElement("div",{className:"inputDateTreatment_container"},i.a.createElement("label",{htmlFor:"timeTreatment",className:"treatmentLabel"},"Time"),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("i",{className:"far fa-clock iconInput"}),i.a.createElement("input",{type:"time",id:"timeTreatment",className:"inputTreatment inputTreatment_Time"}))),i.a.createElement("div",{className:"inputDateTreatment_container"},i.a.createElement("label",{htmlFor:"selectMedication",className:"treatmentLabel"},"Medication"),i.a.createElement("div",{className:"inputContainer"},i.a.createElement("i",{className:"fas fa-tablets iconInput"}),i.a.createElement("select",{name:"selectMedication",id:"selectMedication",className:"inputTreatment",onChange:this.handleNewMedication},i.a.createElement("option",{name:"",value:""}),this.renderMedicationSelector(n),i.a.createElement("option",{name:"newMedication",value:"newMedication"},"new medication")))),this.regirterNewMedication()),this.renderErrorMessage(),i.a.createElement(h.b,{to:"/My-Health-Log/treatment"},i.a.createElement(b,{nameButton:"Save",classButton:this.handleClassButton(),actionButton:this.actionSaveButton(r,this.state),disabled:this.state.buttonClickable})),i.a.createElement(h.b,{to:"/My-Health-Log/treatment"},i.a.createElement(b,{nameButton:"Back",classButton:"treatmentPage_button"})),i.a.createElement(v,null))}}]),t}(i.a.Component)),w=function(e){var t=e.classImage,a=e.image,n=e.titlePage;return i.a.createElement("div",{className:"main"},i.a.createElement("img",{src:a,alt:"pill",className:t}),i.a.createElement("h2",{className:"main_title"},n),i.a.createElement("h3",{className:"main_subtitle"},"Here you can register and see your doctor appointments"),i.a.createElement("div",{className:"treatmentPage_button--container"},i.a.createElement(h.b,{to:"/My-Health-Log/appointmentsList"},i.a.createElement(b,{nameButton:"APPOINTMENT LIST",classButton:"treatmentPage_button"})),i.a.createElement(b,{nameButton:"REGISTER",classButton:"treatmentPage_button"})))},I=(a(42),function(e){var t=e.renderMonthName,a=e.classImage,n=e.image,r=e.titlePage;return i.a.createElement("div",{className:"main appointments"},i.a.createElement("img",{src:n,alt:"appointment",className:"treatmentPageListImp ".concat(a)}),i.a.createElement("h2",{className:"main_title"},r),t,i.a.createElement("ul",null,i.a.createElement("li",null,"Monday 21 October"),i.a.createElement("li",null,"Tuesday 22 October"),i.a.createElement("li",null,"Wednesday 23 October"),i.a.createElement("li",null,"Thursday 24 October")),i.a.createElement(h.b,{to:"/My-Health-Log/appointments"},i.a.createElement(b,{nameButton:"Back",classButton:"treatmentPage_button buttonAppointment"})))}),k=a(24),T=function(e){var t=e.image;return i.a.createElement("header",{className:"headerCalculator"},i.a.createElement("img",{className:"calculator_picture",src:t}),i.a.createElement("h2",{className:"main_title"},"Doses Calculator"))},D=function(e){var t=e.medicationName;return i.a.createElement("main",{className:"medicationName"},i.a.createElement("label",{className:"inputContent",htmlFor:"medicationName"},"Medication Name"),i.a.createElement("input",{type:"text",id:"medicationName",placeholder:"Name",onChange:function(t){e.getInfoState(t,"medicationName")},value:t}))},_=function(e){var t=e.colorSelected;return i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",{className:"inputContent",htmlFor:"medicationColor"},"Select a color"),i.a.createElement("select",{name:"colors",id:"medicationColor",onChange:function(t){e.getInfoState(t,"colorSelected")},className:"".concat(t," colorselector"),value:t},i.a.createElement("option",{value:"blue",className:"blue colorselector"}),i.a.createElement("option",{value:"yellow",className:"yellow colorselector"}),i.a.createElement("option",{value:"orange",className:"orange colorselector"}),i.a.createElement("option",{value:"purple",className:"purple colorselector"}),i.a.createElement("option",{value:"green",className:"green colorselector"}),i.a.createElement("option",{value:"red",className:"red colorselector"})))},C=function(e){var t=e.medicationInstruction;return i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",{htmlFor:"medicationInstruction",className:"inputContent"},"each"),i.a.createElement("select",{name:"guidelineDose",id:"guidelineDose",onChange:function(t){e.getInfoState(t,"medicationInstruction")},value:t},i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"12"},"12"),i.a.createElement("option",{value:"24"},"24")),i.a.createElement("label",{htmlFor:"medicationInstruction"},"    hours"))},j=function(e){for(var t=e.firstDose,a=[],n=0;n<=24;n++)a.push(n);return i.a.createElement("div",{className:"inputContainer"},i.a.createElement("label",{className:"inputContent",htmlFor:"startTiming"},"First Dose"),i.a.createElement("select",{name:"startTiming",id:"startTiming",onChange:function(t){e.getInfoState(t,"firstDose")},value:t},a.map(function(e,t){var a="".concat(e);return e<10&&(a="0".concat(e)),i.a.createElement("option",{key:t,value:e},a,":00")})))},L=function(e){var t=e.info,a=e.color,n=e.medicationName;return i.a.createElement("div",null,i.a.createElement("div",{className:"example__container"},void 0!==t?t.map(function(e,t){return e<10?i.a.createElement("div",{key:t,className:"example__time--container"},i.a.createElement("h4",null,"0",e,":00 "),i.a.createElement("div",{className:"hour ".concat(a)}),n):i.a.createElement("div",{key:t,className:"example__time--container"},i.a.createElement("h4",null,e,":00 "),i.a.createElement("div",{className:"hour ".concat(a)}),n)}):void 0===t?i.a.createElement("div",null,"No content"):void 0))},O=(a(43),function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getData();return a.state=null===n?a._getInitialState():n,a.saveData=a.saveData.bind(Object(d.a)(a)),a.getDays=a.getDays.bind(Object(d.a)(a)),a.getHoursMedication=a.getHoursMedication.bind(Object(d.a)(a)),a.getInfoState=a.getInfoState.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getDays(),this.saveData()}},{key:"getData",value:function(){return JSON.parse(localStorage.getItem("infoMedication"))}},{key:"saveData",value:function(){localStorage.setItem("infoMedication",JSON.stringify(this.state))}},{key:"_getInitialState",value:function(){return{dayHours:[],dayHoursMedication:[],medicationName:"",firstDose:"",medicationInstruction:"",colorSelected:""}}},{key:"getDays",value:function(){for(var e=[],t=1;t<24;t++)e.push(t);return this.setState({dayHours:e},this.saveData)}},{key:"getHoursMedication",value:function(){if(""!==this.state.firstDose&&""!==this.state.medicationInstruction){for(var e=parseInt(this.state.firstDose),t=parseInt(this.state.medicationInstruction),a=24/t,n=[],i=0;i<a;i++)n.push(i);var r=e,l=[];return n.forEach(function(e){if(0===e)l.push(r);else{var a=r+=t;if(a>24){var n=a-24;l.push(n)}else l.push(a)}}),l}}},{key:"getInfoState",value:function(e,t){this.setState(Object(k.a)({},t,e.currentTarget.value),this.saveData)}},{key:"render",value:function(){var e=this.props.image,t=this.getHoursMedication(),a=this.state.colorSelected,n=this.state.medicationName;return this.props.actionColorSelector(a,n),i.a.createElement("div",{className:"mainCalculator"},i.a.createElement(T,{image:e}),i.a.createElement("div",{className:"mainCalculator_content"},i.a.createElement(D,{getInfoState:this.getInfoState,medicationName:this.state.medicationName}),i.a.createElement(_,{getInfoState:this.getInfoState,colorSelected:this.state.colorSelected}),i.a.createElement(j,{getInfoState:this.getInfoState,firstDose:this.state.firstDose}),i.a.createElement(C,{getInfoState:this.getInfoState,medicationInstruction:this.state.medicationInstruction}),i.a.createElement(L,{info:t,color:this.state.colorSelected,medicationName:this.state.medicationName})))}}]),t}(i.a.Component)),H=(a(44),function(){return i.a.createElement("div",{className:"navigator"},i.a.createElement(h.b,{className:"navigator_link",to:"/My-Health-Log/"},i.a.createElement("i",{className:"fas fa-home icon",samesite:"none"}),"Home"),i.a.createElement(h.b,{className:"navigator_link",to:"/My-Health-Log/treatment"},i.a.createElement("i",{className:"fas fa-pills icon",samesite:"none"}),"Treatment"),i.a.createElement(h.b,{className:"navigator_link",to:"/My-Health-Log/appointments"},i.a.createElement("i",{className:"fas fa-calendar-check icon",samesite:"none"}),"Appointments"),i.a.createElement(h.b,{className:"navigator_link",to:"/My-Health-Log/calculator"},i.a.createElement("i",{className:"fas fa-clock icon",samesite:"none"}),"Doses Calculator"))}),B=(a(45),function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getData();return a.state=null===n?{flareTreatment:[],colorSelected:"",medicationRegistered:[{name:"paracetamol",color:"blue"},{name:"ibuprofeno",color:"yellow"}]}:n,a.saveData=a.saveData.bind(Object(d.a)(a)),a.actionColorSelector=a.actionColorSelector.bind(Object(d.a)(a)),a.includeNewTreatment=a.includeNewTreatment.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.saveData()}},{key:"getData",value:function(){return JSON.parse(localStorage.getItem("infoMyHealthRegister"))}},{key:"saveData",value:function(){localStorage.setItem("infoMyHealthRegister",JSON.stringify(this.state))}},{key:"actionColorSelector",value:function(e,t){this.state.colorSelected!==e&&this.setState({colorSelected:e},this.saveData);var a=t.toLowerCase();this.state.medicationName!==a&&this.setState({medicationName:a},this.saveData)}},{key:"includeNewTreatment",value:function(e){var t=this;return function(a){var n=e.date,i=e.time,r=e.medicationName;if(void 0===t.state.medicationRegistered.map(function(e){return e.name}).find(function(e){return e===r})){var l=Object(c.a)(t.state.medicationRegistered),o={name:r,color:"yellow"};return l.push(o),t.setState({medicationRegistered:l},t.saveData)}var s={date:n,treatment:[{time:i,pill:r}]},m=Object(c.a)(t.state.flareTreatment);return m.push(s),t.setState({flareTreatment:m},t.saveData)}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"body"},i.a.createElement(E,{image:"https://laurapareja.github.io/My-Health-Log/images/heart.png"}),i.a.createElement(h.a,null,i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/",render:function(){return i.a.createElement(f,null)}}),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/settings",render:function(){return i.a.createElement(N,{medicationRegistered:e.state.medicationRegistered})}}),i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/treatment",render:function(){return i.a.createElement(y,{titlePage:"Treatment",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/pills.png"})}}),i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/treatmentList",render:function(){return i.a.createElement(M,{flareTreatment:e.state.flareTreatment,titlePage:"Treatment",classImage:"page_image",medicationName:e.state.medicationRegistered,image:"https://laurapareja.github.io/My-Health-Log/images/pills.png"})}}),i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/treatment/register",render:function(){return i.a.createElement(S,{titlePage:"Treatment",classImage:"page_image",includeNewTreatment:e.includeNewTreatment,medicationName:e.state.medicationRegistered,image:"https://laurapareja.github.io/My-Health-Log/images/pills.png"})}}),i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/appointments",render:function(){return i.a.createElement(w,{titlePage:"Appointments",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/doctorDates.png"})}}),i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/appointmentsList",render:function(){return i.a.createElement(I,{titlePage:"Appointments",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/doctorDates.png"})}}),i.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/calculator",render:function(){return i.a.createElement(O,{actionColorSelector:e.actionColorSelector,image:"https://laurapareja.github.io/My-Health-Log/images/alarm.png"})}})),i.a.createElement(H,null),i.a.createElement(v,null)))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.9a28f158.chunk.js.map