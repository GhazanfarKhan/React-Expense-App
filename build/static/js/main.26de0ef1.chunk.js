(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){e.exports=n(209)},131:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=n(17),s=(n(131),n(13)),u=n(23),l=function(e){e.dispatch;var t=e.id,n=e.description,a=e.amount,o=e.createdAt;return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/edit/".concat(t)},r.a.createElement("h3",null,n)),r.a.createElement("p",null,a," - ",o))},d=n(2),p=n.n(d),E=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t=p()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),c=!o||o.isSameOrAfter(t,"day"),i=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&i}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:1})},m=Object(i.b)(function(e){return{expenses:E(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,e.expenses.map(function(e){return r.a.createElement(l,Object.assign({key:e.id},e))}))}),h=n(46),f=n(47),v=n(50),D=n(48),g=n(51),O=function(e){return{type:"SET_START_DATE",startDate:e}},b=function(e){return{type:"SET_END_DATE",endDate:e}},x=n(49),S=(n(111),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={focused:null},n.onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.dispatch(O(t)),n.props.dispatch(b(a))},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.props.filters.text,onChange:function(t){e.props.dispatch(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t.target.value))}}),r.a.createElement("select",{value:this.props.filters.sortBy,onChange:function(t){console.log(t.target.value),"amount"===t.target.value?e.props.dispatch({type:"SORT_BY_AMOUNT"}):"date"===t.target.value&&e.props.dispatch({type:"SORT_BY_DATE"})}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")),r.a.createElement(x.DateRangePicker,{startDate:this.props.filters.startDate,startDateId:"startDate",endDate:this.props.filters.endDate,endDateId:"endDate",onDatesChange:this.onDatesChange,focusedInput:this.state.focused,onFocusChange:function(t){return e.setState({focused:t})},numberOfMonths:1,isOutsideRange:function(){return!1},showClearDates:!0}))}}]),t}(r.a.Component)),_=Object(i.b)(function(e){return{filters:e.filters}})(S),A=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(m,null))},T=(n(193),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(v.a)(this,Object(D.a)(t).call(this,e))).onDesciptionChange=function(e){var t=e.target.value;n.setState({description:t})},n.onNoteChange=function(e){var t=e.target.value;n.setState({note:t})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState({amount:t})},n.onCreatedAtChange=function(e){e&&n.setState({createdAt:e})},n.onSubmit=function(e){e.preventDefault(),n.state.description&&n.state.amount?(n.setState({error:""}),n.props.onSubmit({description:n.state.description,amount:100*parseFloat(n.state.amount,10),createdAt:p()(n.state.createdAt).valueOf(),note:n.state.note})):n.setState({error:"Please provide description and amount"})},n.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?(e.expense.amount/100).toString():"",createdAt:e.expense?p()(e.expense.createdAt):p()(),focused:!1,error:""},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Description",autoFocus:!0,value:this.state.description,onChange:this.onDesciptionChange}),r.a.createElement("input",{type:"number",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(x.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onCreatedAtChange,focused:this.state.focused,onFocusChange:function(t){var n=t.focused;return e.setState({focused:n})},id:"createdAt",numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"Add a note for your expense (optional)",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("button",null,this.props.expense?"Edit":"Add"," Expense")))}}]),t}(r.a.Component)),y=n(120),C=n.n(y),j=Object(i.b)()(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Expense"),r.a.createElement(T,{onSubmit:function(t){console.log("add",t),e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,a=e.note,r=void 0===a?"":a,o=e.amount,c=void 0===o?0:o,i=e.createdAt,s=void 0===i?0:i;return{type:"ADD_EXPENSE",expense:{id:C()(),description:n,note:r,amount:c,createdAt:s}}}(t)),e.history.push("/")}}))}),w=Object(i.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("h1",null,"Edit Expense"),r.a.createElement(T,{expense:e.expense,onSubmit:function(t){console.log("updated",t),e.dispatch({type:"EDIT_EXPENSE",id:e.expense.id,updates:t}),e.history.push("/")}}),r.a.createElement("button",{onClick:function(){e.dispatch({type:"REMOVE_EXPENSE",id:e.expense.id}),e.history.push("/")}},"Remove"))}),N=function(){return r.a.createElement("div",null,"This is  help page")},R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not found"),r.a.createElement(s.b,{to:"/"}))},B=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Expensify"),r.a.createElement(s.c,{to:"/",activeClassName:"is-active",exact:!0},"Dashboard"),r.a.createElement(s.c,{to:"/create",activeClassName:"is-active"},"Create Expense"),r.a.createElement(s.c,{to:"/edit",activeClassName:"is-active"},"Edit Expense"),r.a.createElement(s.c,{to:"/help",activeClassName:"is-active"},"Help"))},X=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:A,exact:!0}),r.a.createElement(u.a,{path:"/create",component:j}),r.a.createElement(u.a,{path:"/edit/:id",component:w}),r.a.createElement(u.a,{path:"/help",component:N}),r.a.createElement(u.a,{component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(38),I=n(19),P=n(121),F=[],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(P.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(I.a)({},e,t.updates):e});default:return e}},M={text:"",sortBy:"amount",startDate:p()().startOf("month"),endDate:p()().endOf("month")},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(I.a)({},e,{text:t.text});case"SORT_BY_AMOUNT":return Object(I.a)({},e,{sortBy:"amount"});case"SORT_BY_DATE":return Object(I.a)({},e,{sortBy:"date"});case"SET_START_DATE":return Object(I.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(I.a)({},e,{endDate:t.endDate});default:return e}},V=Object(k.c)(Object(k.b)({expenses:L,filters:U}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Y=r.a.createElement(i.a,{store:V},r.a.createElement(X,null));c.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,1,2]]]);
//# sourceMappingURL=main.26de0ef1.chunk.js.map