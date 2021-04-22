(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,c){t.exports={Filter:"Filter_Filter__3LRbC",Filter__label:"Filter_Filter__label__3LxOm",Filter__input:"Filter_Filter__input__3-jW_"}},20:function(t,e,c){t.exports={ContactList__wrap:"ContactList_ContactList__wrap__1awvE",ContactList:"ContactList_ContactList__1HYqd"}},24:function(t,e,c){t.exports={container:"Container_container__10_h7"}},48:function(t,e,c){t.exports={spinner:"Loader_spinner__131yO","sk-circle":"Loader_sk-circle__11JWb","sk-child":"Loader_sk-child__3i8eQ","sk-circleBounceDelay":"Loader_sk-circleBounceDelay__2lybv","sk-circle2":"Loader_sk-circle2__WyPWQ","sk-circle3":"Loader_sk-circle3__BM-G8","sk-circle4":"Loader_sk-circle4__geJnF","sk-circle5":"Loader_sk-circle5__1Vr2-","sk-circle6":"Loader_sk-circle6__3gwYY","sk-circle7":"Loader_sk-circle7__1MSDb","sk-circle8":"Loader_sk-circle8__1cn8x","sk-circle9":"Loader_sk-circle9__2siy2","sk-circle10":"Loader_sk-circle10__2_D1o","sk-circle11":"Loader_sk-circle11__16Fve","sk-circle12":"Loader_sk-circle12__24Tf0","sk-circle1":"Loader_sk-circle1__21fMc"}},52:function(t,e,c){},53:function(t,e,c){"use strict";c.r(e);var n,a=c(1),r=c.n(a),s=c(11),i=c.n(s),o=c(3),l=c(23),_=c(24),b=c.n(_),d=c(0),j=function(t){var e=t.children;return Object(d.jsx)("div",{className:b.a.container,children:e})},u=c(6),m=c(19),O=c(29),C=c(25),k=c.n(C),h=c(7),x=c.n(h),p=c(4),f=c(26),F=c.n(f),v=Object(p.b)("contacts/add",(function(t,e){return{payload:{name:t,id:F.a.generate(),number:e}}})),N=Object(p.b)("contacts/delete"),L=Object(p.b)("contacts/changeFilter"),g=k.a.bind(x.a),y={name:"",number:""},w=function(t){return t.contacts.items},A=function(){var t=Object(o.b)(),e=Object(o.c)(w),c=Object(a.useState)(y),n=Object(O.a)(c,2),r=n[0],s=n[1],i=r.name,l=r.number,_=function(t){var e=t.currentTarget,c=e.name,n=e.value;s((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(u.a)({},c,n))}))},b=g("ContactForm_label","ContactForm_label--name"),j=g("ContactForm_label","ContactForm_label--number");return Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault(),e.some((function(t){return t.name===i}))?alert("".concat(i," is already in contacts")):(t(v(i,l)),s(y))},className:x.a.ContactForm,children:[Object(d.jsxs)("label",{className:b,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",className:x.a.ContactForm__input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:" ",required:!0,value:i,onChange:_})]}),Object(d.jsxs)("label",{className:j,children:["Nubmer",Object(d.jsx)("input",{type:"tel",name:"number",className:x.a.ContactForm__input,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:" ",required:!0,value:l,onChange:_})]}),Object(d.jsx)("button",{type:"submit",className:x.a.ContactForm_button,children:"Add contact"})]})},z=c(8),D=c.n(z),B=function(t){var e=t.id,c=Object(o.c)(function(t){return function(e){return e.contacts.items.find((function(e){return e.id===t}))}}(e)),n=c.name,a=c.number,r=Object(o.b)();return Object(d.jsxs)("li",{className:D.a.Contact__item,children:[Object(d.jsxs)("p",{className:D.a.Contact_text,children:[Object(d.jsx)("span",{className:D.a.Contact__name,children:n}),":",Object(d.jsx)("span",{className:D.a.Contact__number,children:a})]}),Object(d.jsx)("button",{className:D.a.Contact__button,type:"button",onClick:function(){return r(N(e))},children:"Delete"})]})},W=c(20),J=c.n(W),M=function(t){var e=t.contacts;return function(t,e){var c=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(c)}))}(e.items,e.filter)},Z=function(){var t=Object(o.c)(M);return Object(d.jsx)("div",{className:J.a.ContactList__wrap,children:Object(d.jsx)("ul",{className:J.a.ContactList,children:t.map((function(t){var e=t.id;return Object(d.jsx)(B,{id:e},e)}))})})},q=c(14),G=c.n(q),S=function(t){return t.contacts.filter},T=function(){var t=Object(o.c)(S),e=Object(o.b)();return Object(d.jsx)("div",{className:G.a.Filter,children:Object(d.jsxs)("label",{className:G.a.Filter__label,children:["find contacts by name",Object(d.jsx)("input",{value:t,onChange:function(t){return e(L(t.target.value))},className:G.a.Filter__input})]})})},P=function(t){return t.contacts.items},Q=function(){var t=Object(o.c)(P);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(A,{}),t.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(T,{}),Object(d.jsx)(Z,{})]})]})})},Y=(c(48),function(){return Object(d.jsx)("div",{id:"spinner",className:"spinner",children:Object(d.jsxs)("div",{className:"sk-circle",children:[Object(d.jsx)("div",{className:"sk-circle1 sk-child"}),Object(d.jsx)("div",{className:"sk-circle2 sk-child"}),Object(d.jsx)("div",{className:"sk-circle3 sk-child"}),Object(d.jsx)("div",{className:"sk-circle4 sk-child"}),Object(d.jsx)("div",{className:"sk-circle5 sk-child"}),Object(d.jsx)("div",{className:"sk-circle6 sk-child"}),Object(d.jsx)("div",{className:"sk-circle7 sk-child"}),Object(d.jsx)("div",{className:"sk-circle8 sk-child"}),Object(d.jsx)("div",{className:"sk-circle9 sk-child"}),Object(d.jsx)("div",{className:"sk-circle10 sk-child"}),Object(d.jsx)("div",{className:"sk-circle11 sk-child"}),Object(d.jsx)("div",{className:"sk-circle12 sk-child"})]})})}),E=c(13),H=c(27),I=c.n(H),R=c(5),V=c(28),X=c.n(V),$=c(2),K=Object(p.c)([],(n={},Object(u.a)(n,v,(function(t,e){var c=e.payload;return[].concat(Object(E.a)(t),[c])})),Object(u.a)(n,N,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),n)),U=Object(p.c)("",Object(u.a)({},L,(function(t,e){return e.payload}))),tt=Object($.c)({items:K,filter:U}),et=[].concat(Object(E.a)(Object(p.d)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})),[I.a]),ct={key:"contacts",storage:X.a,blacklist:["filter"]},nt=Object(p.a)({reducer:{contacts:Object(R.g)(ct,tt)},middleware:et,devTools:!1}),at={store:nt,persistor:Object(R.h)(nt)};c(51),c(52);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(o.a,{store:at.store,children:Object(d.jsx)(l.a,{loading:Object(d.jsx)(Y,{}),persistor:at.persistor,children:Object(d.jsx)(Q,{})})})}),document.getElementById("root"))},7:function(t,e,c){t.exports={ContactForm:"ContactForm_ContactForm__3CzC6",ContactForm_label:"ContactForm_ContactForm_label__3cGoQ","ContactForm_label--name":"ContactForm_ContactForm_label--name__247Wd","ContactForm_label--number":"ContactForm_ContactForm_label--number__1GWqd",ContactForm_button:"ContactForm_ContactForm_button__3d-Z_",ContactForm__input:"ContactForm_ContactForm__input__1O5dF"}},8:function(t,e,c){t.exports={Contact__item:"Contact_Contact__item__2hF1m",Contact_text:"Contact_Contact_text__LOACB",Contact__name:"Contact_Contact__name__1GgCZ",Contact__number:"Contact_Contact__number__1DXmT",Contact__button:"Contact_Contact__button__jPacz"}}},[[53,1,2]]]);
//# sourceMappingURL=main.c594ccca.chunk.js.map