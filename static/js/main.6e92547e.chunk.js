(this["webpackJsonpreact-shopping-cart-api"]=this["webpackJsonpreact-shopping-cart-api"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),u=n.n(c),i=(n(17),n(9)),l=n(6),o=n(3),d=(n(18),function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"number",value:e.value,onChange:e.changed}),r.a.createElement("button",{onClick:e.incHandler},"+"),r.a.createElement("button",{onClick:e.decHandler},"-"),r.a.createElement("button",{onClick:e.delateHandler},"X"))}),p=n(10),s=function(e){return r.a.createElement("div",{style:{marginBottom:"40px",marginTop:"20px"}},r.a.createElement(p.a,{icon:"shopping-cart"}),r.a.createElement("span",null,"The total items:"),r.a.createElement("input",{type:"number",onChange:e.changed,value:e.value}))},v=n(2),E=n(11);v.b.add(E.a);var m=[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}],f=function(e,t){switch(t.type){case"INCREMENT":return e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{value:e.value+1}):e}));case"DECREMENT":return e.map((function(e){return e.id===t.id&&e.value>0?Object(o.a)(Object(o.a)({},e),{},{value:e.value-1}):e}));case"DELATE":return e.filter((function(e){return e.id!==t.id}));case"RESET":return m;default:return e}};var h=function(){var e=Object(a.useReducer)(f,m),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(m),o=Object(l.a)(u,1)[0],p=function(e){o({value:e.target.value})},v=[],E=function(e){var t,n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.value>0&&v.push(a),a.value<0&&v.pop(a)}}catch(r){n.e(r)}finally{n.f()}return v};return E(n),r.a.createElement("div",{className:"App"},r.a.createElement(s,{changed:E,value:v.length}),r.a.createElement("div",null,n.map((function(e){return r.a.createElement(d,{value:e.value,key:e.id,changed:p,incHandler:function(){return c({type:"INCREMENT",id:e.id})},decHandler:function(){return c({type:"DECREMENT",id:e.id})},delateHandler:function(){return c({type:"DELATE",id:e.id})}})}))),r.a.createElement("button",{onClick:function(){return c({type:"RESET"})},style:{marginTop:"40px"}},"Reset"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.6e92547e.chunk.js.map