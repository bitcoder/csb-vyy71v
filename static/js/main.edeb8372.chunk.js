(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e){e.exports=[{label:"Find Mortgage",value:"FM",resultLabel:"Mortgage"},{label:"Find Montly Payment",value:"FMP",resultLabel:"Montly Payment"},{label:"Find Interest Rate",value:"FIR",resultLabel:"Interest Rate"},{label:"Find Loan Amount",value:"FLA",resultLabel:"Loan Amount"},{label:"Find Number Of Months",value:"FNM"}]},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return App});var _tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_select__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_styles_style_scss__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_styles_style_scss__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_7__),_util_selectOption_json__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5),_util_selectOption_json__WEBPACK_IMPORTED_MODULE_8___namespace=__webpack_require__.t(5,1),_util_controls_json__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10),_util_controls_json__WEBPACK_IMPORTED_MODULE_9___namespace=__webpack_require__.t(10,1),App=function(_React$Component){Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var t;return Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(t=_super.call(this,e)).state={result:0,details:{numberOfMonths:"",interestRate:"",monthlyPaymentAmount:"",loanAmount:"",termLength:""},selectedOption:"FM",error:!1,resultLabel:"Mortgage"},t.onSubmitHandle=t.onSubmitHandle.bind(Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.onChangeHandle=t.onChangeHandle.bind(Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.clearAll=t.clearAll.bind(Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t}return Object(_tmp_deploys_vyy71v_clhhr29ia00ez0ulq2mvyajrc_source_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"onSubmitHandle",value:function(e){e.preventDefault(),this.calculateAndSetResults()}},{key:"clearAll",value:function(){this.setState({error:!1,details:{numberOfMonths:"",interestRate:"",monthlyPaymentAmount:"",loanAmount:"",termLength:""},result:0})}},{key:"setError",value:function(){this.setState({error:!0})}},{key:"setResult",value:function(e){this.setState({result:e})}},{key:"calculateAndSetResults",value:function calculateAndSetResults(){var result=0,loanAmount,interestRate,numberOfMonths,monthlyPaymentAmount;switch(this.state.selectedOption){case"FM":""!==this.state.details.loanAmount.trim()&&""!==this.state.details.interestRate.trim()&&""!==this.state.details.termLength.trim()?(loanAmount=eval(this.state.details.loanAmount),interestRate=eval(this.state.details.interestRate/1200),numberOfMonths=eval(12*this.state.details.termLength),result=eval(loanAmount*interestRate)/(1-Math.pow(1+interestRate,-1*numberOfMonths)).toFixed(2),result="$".concat(result)):this.setError();break;case"FLA":monthlyPaymentAmount=this.state.details.monthlyPaymentAmount,numberOfMonths=this.state.details.numberOfMonths,interestRate=this.state.details.interestRate,""!==monthlyPaymentAmount&&""!==numberOfMonths&&""!==interestRate?(interestRate/=1200,result=eval(monthlyPaymentAmount/interestRate*(1-1/Math.pow(1+interestRate,numberOfMonths))).toFixed(2),result="$".concat(result)):this.setError();break;case"FMP":loanAmount=this.state.details.loanAmount,numberOfMonths=this.state.details.numberOfMonths,interestRate=this.state.details.interestRate,""!==loanAmount&&""!==numberOfMonths&&""!==interestRate?(interestRate/=1200,result=eval(loanAmount*interestRate*Math.pow(1+interestRate,numberOfMonths)/(Math.pow(1+interestRate,numberOfMonths)-1)).toFixed(2),result="$".concat(result)):this.setError();break;case"FIR":if(loanAmount=this.state.details.loanAmount,numberOfMonths=this.state.details.numberOfMonths,monthlyPaymentAmount=this.state.details.monthlyPaymentAmount,""!==monthlyPaymentAmount&&""!==numberOfMonths&&""!==loanAmount){for(var F=function(e){return loanAmount*e*Math.pow(1+e,numberOfMonths)/(Math.pow(1+e,numberOfMonths)-1)-monthlyPaymentAmount},F_prime=function(e){return loanAmount*Math.pow(e+1,numberOfMonths-1)*(e*Math.pow(e+1,numberOfMonths)+Math.pow(e+1,numberOfMonths)-numberOfMonths*e-e-1)/Math.pow(Math.pow(e+1,numberOfMonths)-1,2)},guess=1+(monthlyPaymentAmount*numberOfMonths/loanAmount-1)/12,x=guess;Math.abs(F(x))>1e-6;)x-=F(x)/F_prime(x);x=(12*x*100).toFixed(2),result="".concat(x,"%")}else this.setError();break;case"FNM":loanAmount=this.state.details.loanAmount,monthlyPaymentAmount=this.state.details.monthlyPaymentAmount,interestRate=this.state.details.interestRate,""!==loanAmount&&""!==monthlyPaymentAmount&&""!==interestRate?(interestRate/=1200,result=eval(Math.log(monthlyPaymentAmount/interestRate/(monthlyPaymentAmount/interestRate-loanAmount))/Math.log(1+interestRate)).toFixed(2)):this.setError()}this.setResult(result)}},{key:"onChangeHandle",value:function(e){var t=e.value,_=e.resultLabel;this.clearAll(),this.setState({selectedOption:t,resultLabel:_})}},{key:"onInputChange",value:function(e,t){e.persist(),this.setState(function(_){return _.details[t]=e.target.value.trim()>=0?e.target.value.trim():"",_.result=0,_.error=!1,_})}},{key:"Error",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"errorWrap align-center",style:{display:this.state.error?"flex":"none",color:"red"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em",null,"Please insert vaild inputs!"))}},{key:"Results",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"resultBlock",style:{display:this.state.result?"flex":"none"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"resultIcon"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g",{fill:"none"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path",{fill:"#6DD400",d:"M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9C-.014 4.044 3.992.014 8.949 0H9z"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path",{fill:"#FFF",d:"M13.986 6.52L7.594 12.912 4.014 9.358 5.472 7.926 7.594 10.023 12.528 5.088z"})))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"resultText"},"Result: ",this.state.resultLabel," = ",this.state.result))}},{key:"renderInputControls",value:function(){var e=this,t=_util_controls_json__WEBPACK_IMPORTED_MODULE_9__[this.state.selectedOption];return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,t.map(function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"input-control flex_1",key:t.event},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label",null,t.label),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"number",onChange:function(_){return e.onInputChange(_,t.event)},value:e.state.details[t.event]}))}))}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"wrapper"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"wrapperInner"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2",{className:"heading"},"Simple React Loan & Mortgage Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form",{onSubmit:function(t){return e.onSubmitHandle(t)}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"select-control"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label",null,"Please Select Type"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_6__.a,{options:_util_selectOption_json__WEBPACK_IMPORTED_MODULE_8__,onChange:function(t){return e.onChangeHandle(t)},isSearchable:!1,isClearable:!1,defaultValue:_util_selectOption_json__WEBPACK_IMPORTED_MODULE_8__[0]})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"form__input--control"},this.renderInputControls()),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buttonsControlWrap flex direction-column align-center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{type:"submit",className:"submitBtn ","data-event_tag":"CalculateBtnClick","data-event_action":"UserClick"},"Calculate"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{type:"button",className:"cancelBtn ","data-event_tag":"ClearAllClick","data-event_action":"UserClick",onClick:this.clearAll},"Clear All"))),this.Error(),this.Results()))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)},,,function(e){e.exports={FMP:[{label:"Loan Amount",event:"loanAmount"},{label:"Interest Rate (%)",event:"interestRate"},{label:"Number of Months",event:"numberOfMonths"}],FIR:[{label:"Loan Amount",event:"loanAmount"},{label:"Number of Months",event:"numberOfMonths"},{label:"Monthly Payment",event:"monthlyPaymentAmount"}],FLA:[{label:"Interest Rate (%)",event:"interestRate"},{label:"Number of Months",event:"numberOfMonths"},{label:"Monthly Payment",event:"monthlyPaymentAmount"}],FNM:[{label:"Loan Amount",event:"loanAmount"},{label:"Interest Rate (%)",event:"interestRate"},{label:"Monthly Payment",event:"monthlyPaymentAmount"}],FM:[{label:"Loan Amount",event:"loanAmount"},{label:"Interest Rate (%)",event:"interestRate"},{label:"Term Length (Yrs)",event:"termLength"}]}},,,,function(e,t,_){e.exports=_(15)},function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),l=_(1),r=_.n(l),s=_(7),o=document.getElementById("root");r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,null)),o)},,,,,function(e,t,_){}],[[14,1,2]]]);
//# sourceMappingURL=main.edeb8372.chunk.js.map