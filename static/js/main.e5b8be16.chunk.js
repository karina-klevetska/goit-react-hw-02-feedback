(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(4),o=c.n(i),s=(c(13),c(5)),l=c(6),r=c(2),d=c(8),b=c(7),u=(c(14),c(0)),j=function(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)("h1",{children:t}),c]})},k=(c(16),function(e){var t=e.good,c=e.neutral,a=e.bad,n=e.total,i=e.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Statistics"}),Object(u.jsxs)("ul",{className:"list",children:[Object(u.jsxs)("li",{className:"list__item",children:["Good: ",t]}),Object(u.jsxs)("li",{className:"list__item",children:["Neutral: ",c]}),Object(u.jsxs)("li",{className:"list__item",children:["Bad: ",a]}),Object(u.jsxs)("li",{className:"list__item",children:["Total: ",n]}),Object(u.jsxs)("li",{className:"list__item list__item--positive__total",children:["Positive feedback: ",i,"%"]})]})]})}),h=(c(17),function(e){var t=e.clickGoodFeedback,c=e.clickNeutralFeedback,a=e.clickBadFeedback;return Object(u.jsxs)("div",{className:"feedback-options",children:[Object(u.jsx)("button",{type:"button",className:"button button__good",onClick:t,children:"Good:"}),Object(u.jsx)("button",{type:"button",className:"button button__neutral",onClick:c,children:"Neutral"}),Object(u.jsx)("button",{type:"button",className:"button button__bad",onClick:a,children:"Bad"})]})}),f=(c(18),function(e){var t=e.message;return Object(u.jsx)("p",{children:t})}),O=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.clickGoodFeedback=function(){e.setState((function(e){return{good:e.good+1}}))},e.clickNeutralFeedback=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.clickBadFeedback=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.totalFeedbackAmount=function(){var t=e.state;return t.good+t.neutral+t.bad},e.positiveFeedbackPercentage=function(){var t=Object(r.a)(e).totalFeedbackAmount;return Math.floor(100*e.state.good/t())},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.clickGoodFeedback,t=this.clickNeutralFeedback,c=this.clickBadFeedback,a=this.totalFeedbackAmount,n=this.positiveFeedbackPercentage,i=this.state,o=i.good,s=i.neutral,l=i.bad;return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(j,{title:"Please leave feedback",children:[Object(u.jsx)(h,{clickGoodFeedback:e,clickNeutralFeedback:t,clickBadFeedback:c}),a()>0?Object(u.jsx)(k,{good:o,neutral:s,bad:l,total:a(),positivePercentage:n()}):Object(u.jsx)(f,{message:"No feedback given"})]})})}}]),c}(a.Component),m=O;o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e5b8be16.chunk.js.map