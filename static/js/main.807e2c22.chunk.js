(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),a=t(13),u=t.n(a),o=t(6),i=t.n(o),s=t(17),b=t(10),j=t(4),f=t(2),p=t(3);function d(){var e=Object(f.a)(["\n  height: 100%;\n  width: 25%;\n  border: 1px solid #2c3e50;\n  font-size: 1.5rem;\n  color: #34495e;\n  border-radius: 4px;\n  outline: none;\n  background-color: #fff;\n"]);return d=function(){return e},e}function h(){var e=Object(f.a)(["\n  height: 100%;\n  width: 100%;\n  margin-right: .25rem;\n  font-size: 1.5rem;\n  color: #34495e;\n  outline: none;\n  border: 1px solid #2c3e50;\n  border-radius: 4px;\n  padding: .25rem;\n"]);return h=function(){return e},e}function O(){var e=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return O=function(){return e},e}var x=p.a.div(O()),l=p.a.input(h()),v=p.a.select(d());var g=function(e){var n=e.currencyOption,t=e.selectedCurrency,c=e.changeCurrency,a=e.changeAmount,u=e.amount;return Object(r.jsxs)(x,{children:[Object(r.jsx)(l,{type:"number",value:u,onChange:a}),Object(r.jsx)(v,{value:t,onChange:c,children:n.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})]})};function m(){var e=Object(f.a)(["\n  font-weight: 700;\n  padding: 10px 0;\n"]);return m=function(){return e},e}function y(){var e=Object(f.a)(["\n  font-size: 3rem;\n  color: #34495e;\n"]);return y=function(){return e},e}function w(){var e=Object(f.a)(["\n  width: 400px;\n  height: 250px;\n  text-align: center;\n  border-radius: 20px;\n  background-color: #ecf0f1;\n  box-shadow: 25px 15px 3px #bdc3c7;\n"]);return w=function(){return e},e}var C=p.a.div(w()),k=p.a.span(y()),S=Object(p.a)(k)(m()),z="https://api.exchangeratesapi.io/latest";var A=function(){var e,n,t=Object(c.useState)([]),a=Object(j.a)(t,2),u=a[0],o=a[1],f=Object(c.useState)(),p=Object(j.a)(f,2),d=p[0],h=p[1],O=Object(c.useState)(),x=Object(j.a)(O,2),l=x[0],v=x[1],m=Object(c.useState)(1),y=Object(j.a)(m,2),w=y[0],A=y[1],E=Object(c.useState)(!0),J=Object(j.a)(E,2),q=J[0],B=J[1],D=Object(c.useState)(1),F=Object(j.a)(D,2),G=F[0],H=F[1];return q?(n=G,e=G*w):(e=G,n=G/w),Object(c.useEffect)(Object(b.a)(i.a.mark((function e(){var n,t,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(z);case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,r=Object.keys(t.rates),c=r[0],o([t.base].concat(Object(s.a)(r))),h(t.base),v(c),A(t.rates[c]);case 12:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)(Object(b.a)(i.a.mark((function e(){var n,t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d||!l){e.next=9;break}return n="".concat(z,"?base=").concat(d,"&symbols=").concat(l),e.next=4,fetch(n);case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,A(r.rates[l]);case 9:case"end":return e.stop()}}),e)}))),[d,l]),Object(r.jsxs)(C,{children:[Object(r.jsx)(S,{children:"Convert"}),Object(r.jsx)(g,{currencyOption:u,selectedCurrency:d,changeCurrency:function(e){return h(e.target.value)},amount:n,changeAmount:function(e){H(e.target.value),B(!0)}}),Object(r.jsx)(k,{children:"="}),Object(r.jsx)(g,{currencyOption:u,selectedCurrency:l,changeCurrency:function(e){return v(e.target.value)},amount:e,changeAmount:function(e){H(e.target.value),B(!1)}})]})};t(26);u.a.render(Object(r.jsx)(A,{}),document.querySelector("#app"))}},[[27,1,2]]]);
//# sourceMappingURL=main.807e2c22.chunk.js.map