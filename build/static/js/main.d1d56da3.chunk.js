(this["webpackJsonpreact-35-module-1"]=this["webpackJsonpreact-35-module-1"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),o=(n(14),n(4)),i=n(5),l=n(6),d=n(9),u=n(8),b=(n(15),n(0));function j(t){var e=t.title,n=t.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:e}),n]})}var h=n(7),p=n.n(h);function O(t){var e=t.options,n=t.handleClick;return Object(b.jsx)(b.Fragment,{children:e.map((function(t,e){return Object(b.jsx)("button",{type:"button",name:t,onClick:n,className:p.a.button,children:t},e)}))})}function g(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,r=t.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["good:",e]}),Object(b.jsxs)("p",{children:["neutral:",n]}),Object(b.jsxs)("p",{children:["bad:",c]}),Object(b.jsxs)("p",{children:["total:",a]}),Object(b.jsxs)("p",{children:["positive feedback:",r,"%"]})]})}function f(t){var e=t.message;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{children:e})})}var v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleClick=function(e){var n=e.target.name;console.log(n),t.setState((function(t){return Object(o.a)({},n,t[n]+1)})),console.log(t.state[n])},t.feedbacksCounter=function(){var e=t.state;return e.good+e.neutral+e.bad},t.positivePercentageCalculator=function(){var e=t.feedbacksCounter(),n=100*t.state.good/e;return Math.round(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=Object.keys(this.state),e=this.feedbacksCounter(),n=this.positivePercentageCalculator();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{title:"Feedback:",children:Object(b.jsx)(O,{options:t,handleClick:this.handleClick})}),0===e?Object(b.jsx)(f,{message:"No feedback given"}):Object(b.jsx)(j,{title:"Statistics",children:Object(b.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:n})})]})}}]),n}(c.Component);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={button:"FeedbackOptions_button__1P21H"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d1d56da3.chunk.js.map