(this["webpackJsonpredux-setup"]=this["webpackJsonpredux-setup"]||[]).push([[0],{12:function(e,a,n){e.exports=n(24)},17:function(e,a,n){},24:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(2),c=n.n(l),o=(n(17),n(5),n(11)),u=n(1);var i=Object(u.b)((function(e){return{player1:e.player1,player2:e.player2}}),(function(e){return{saveName:function(a){return e(function(e){return{type:"SAVE_NAME",payload:e}}(a))}}}))((function(e){var a=Object(t.useState)(""),n=Object(o.a)(a,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Welcome to the coolest Tic-Tac-Toe ever."),""!==e.player1&&""!==e.player2?r.a.createElement("h3",null,e.player1," and ",e.player2," enjoy the game!"):r.a.createElement("div",null,r.a.createElement("h3",null,"Please enter name of the ",""===e.player1?"first":"second"," player ",e.player1&&"to get started"),r.a.createElement("input",{type:"text",value:l,onChange:function(e){return c(e.target.value)},placeholder:"Player's name"}),r.a.createElement("button",{onClick:function(){return function(a){e.saveName(a),c("")}(l)}},"submit")))}));var s=Object(u.b)((function(e){return{player1:e.player1,player2:e.player2,field:e.field,currentPlayer:e.currentPlayer}}))((function(e){return r.a.createElement("div",{className:"gameBoard"},e.field.map((function(e){return r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement("div",{className:"cell"},e," - ")})))})))}));var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=n(3),y=n(4),d={player1:"",player2:"",field:[[null,null,null],[null,null,null],[null,null,null]],currentPlayer:1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"MOVE":if(1===e.currentPlayer)return Object(y.a)({},e,{numberChange:e.numberChange+1});case"SAVE_NAME":if(!e.player1)return console.log(a.payload),Object(y.a)({},e,{player1:a.payload});if(!e.player2)return console.log(a.payload),Object(y.a)({},e,{player2:a.payload});default:return e}},E=Object(m.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:E},r.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0657d034.chunk.js.map