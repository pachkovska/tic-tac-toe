(this["webpackJsonpredux-setup"]=this["webpackJsonpredux-setup"]||[]).push([[0],{24:function(e,n,a){e.exports=a(44)},29:function(e,n,a){},31:function(e,n,a){},44:function(e,n,a){"use strict";a.r(n);var l=a(0),r=a.n(l),t=a(8),o=a.n(t),i=(a(29),a(30),a(31),a(10)),c=a(7),u=a(49),s=a(46),m=a(47),p=a(48);var y=Object(c.b)((function(e){return{player1Icon:e.player1Icon,player2Icon:e.player2Icon}}),(function(e){return{handleEmoji:function(n){return e(function(e){return{type:"CHOOSE_EMOJI",payload:e}}(n))}}}))((function(e){var n=e.className,a=e.nameSaved,t=e.setNameSaved,o=Object(l.useState)(!1),c=Object(i.a)(o,2),y=c[0],f=c[1],E=function(){f(!y)},d=function(n){if(n===e.player1Icon||n===e.player2Icon)return alert("Sorry, this one has been taken! Please choose different icon!");e.handleEmoji(n),f(!1)};return Object(l.useEffect)((function(){a&&(E(),t(!1))}),[a,t,E]),r.a.createElement("div",null,r.a.createElement(u.a,{size:"lg",isOpen:y,modalTransition:{timeout:200},backdropTransition:{timeout:500},toggle:E,className:n},r.a.createElement(s.a,{toggle:E},"Select your player's icon"),r.a.createElement(m.a,null,r.a.createElement("div",{className:"emoji-list"},r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F469")}},"\ud83d\udc69"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F64E")}},"\ud83d\ude4e"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F441")}},"\ud83d\udc41"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F4A3")}},"\ud83d\udca3"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F49A")}},"\ud83d\udc9a"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F499")}},"\ud83d\udc99"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F648")}},"\ud83d\ude48"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F638")}},"\ud83d\ude38"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F916")}},"\ud83e\udd16"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F4A9")}},"\ud83d\udca9"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F608")}},"\ud83d\ude08"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F913")}},"\ud83e\udd13"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F920")}},"\ud83e\udd20"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F604")}},"\ud83d\ude04"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F47B")}},"\ud83d\udc7b"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F47D")}},"\ud83d\udc7d"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F9E0")}},"\ud83e\udde0"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F9DA")}},"\ud83e\uddda"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F9DC")}},"\ud83e\udddc"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F483")}},"\ud83d\udc83"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F46F")}},"\ud83d\udc6f"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F496")}},"\ud83d\udc96"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F64B")}},"\ud83d\ude4b"),r.a.createElement("span",{role:"img","aria-label":"",onClick:function(){return d("1F9DE")}},"\ud83e\uddde"))),r.a.createElement(p.a,null)))}));var f=Object(c.b)((function(e){return{player1:e.player1,player2:e.player2,winner:e.winner}}),(function(e){return{saveName:function(n){return e(function(e){return{type:"SAVE_NAME",payload:e}}(n))},restartGame:function(n){return e({type:"RESTART_GAME",payload:n})}}}))((function(e){var n=Object(l.useState)(""),a=Object(i.a)(n,2),t=a[0],o=a[1],c=Object(l.useState)(!1),u=Object(i.a)(c,2),s=u[0],m=u[1];return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Welcome to the coolest Tic-Tac-Toe ever."),""!==e.player1&&""!==e.player2?null===e.winner&&r.a.createElement("h3",null,e.player1," and ",e.player2," enjoy the game!"):r.a.createElement("div",{className:"nameInputs"},r.a.createElement("h3",null,"Please enter name of the ",""===e.player1?"first":"second"," player ",e.player1&&"to get started"),r.a.createElement("input",{className:"inputField",type:"text",value:t,onChange:function(e){return o(e.target.value)},placeholder:"Player's name"}),r.a.createElement("button",{className:"submitName-btn",onClick:function(){return function(n){e.saveName(n),m(!0),o("")}(t)}},"submit")),r.a.createElement(y,{nameSaved:s,setNameSaved:m}),e.winner&&r.a.createElement("div",{className:"gameOver"},"tie"===e.winner?r.a.createElement("h1",null," It's a tie! "):r.a.createElement("h1",null,e.winner," has won. Congratulations!"),r.a.createElement("button",{className:"restart-btn",onClick:function(){return e.restartGame(e.winner)}},"Restart Game")))}));var E=function(e,n,a){if(3===a.length&&"tie"!==a){var l={row0:[[0,0],[0,1],[0,2]],row1:[[1,0],[1,1],[1,2]],row2:[[2,0],[2,1],[2,2]],column0:[[0,0],[1,0],[2,0]],column1:[[0,1],[1,1],[2,1]],column2:[[0,2],[1,2],[2,2]],diagonal0:[[0,0],[1,1],[2,2]],diagonal2:[[0,2],[1,1],[2,0]]};if(d(e,n,a)&&(JSON.stringify(a)===JSON.stringify(l.row0)||JSON.stringify(a)===JSON.stringify(l.row1)||JSON.stringify(a)===JSON.stringify(l.row2)))return console.log("cell in wincombo works: ",d(e,n,a)),console.log("json.stringify comparison works: ",JSON.stringify(a)===JSON.stringify(l.row0)),"win-row";if(d(e,n,a)&&(JSON.stringify(a)===JSON.stringify(l.column0)||JSON.stringify(a)===JSON.stringify(l.column1)||JSON.stringify(a)===JSON.stringify(l.column2)))return"win-column";if(d(e,n,a)&&JSON.stringify(a)===JSON.stringify(l.diagonal0))return"win-diagonal-right";if(d(e,n,a)&&JSON.stringify(a)===JSON.stringify(l.diagonal2))return"win-diagonal-left"}return null},d=function(e,n,a){for(var l=0;l<3;l++)if(a[l][0]===e&&a[l][1]===n)return!0;return!1},b=Object(c.b)((function(e){return{player1:e.player1,player2:e.player2,player1Icon:e.player1Icon,player2Icon:e.player2Icon,field:e.field,winCombo:e.winCombo}}),(function(e){return{makeMove:function(n,a){return e(function(e,n){return{type:"MOVE",payload:{rowIndex:e,cellIndex:n}}}(n,a))}}}))((function(e){return r.a.createElement("div",{className:"gameContainer"},r.a.createElement("div",{className:"gameBoard"},e.player1&&e.player2&&e.field.map((function(n,a){return r.a.createElement("div",{className:"row"},n.map((function(n,l){return r.a.createElement("div",{className:"cell",onClick:function(){return function(n,a){e.makeMove(n,a)}(a,l)}},"X"===n?null!==e.player1Icon&&String.fromCodePoint(parseInt(e.player1Icon,16)):"O"===n?null!==e.player1Icon&&String.fromCodePoint(parseInt(e.player2Icon,16)):null,r.a.createElement("span",{className:3===e.winCombo.length&&"tie"!==e.winCombo&&"".concat(E(a,l,e.winCombo))}))})))}))))}));var g=Object(c.b)((function(e){return{player1:e.player1,player2:e.player2,player1Icon:e.player1Icon,player2Icon:e.player2Icon,score:e.score}}),(function(e){return{resetAll:function(){return e({type:"RESET_ALL"})}}}))((function(e){return r.a.createElement("div",{className:"scoreContainer"},e.player1&&e.player2&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"showScore"},r.a.createElement("h4",null,"Score"),r.a.createElement("div",null,r.a.createElement("span",{className:"scoreBoard-emoji"},e.player1Icon&&String.fromCodePoint(parseInt(e.player1Icon.toString(),16))),e.player1),r.a.createElement("span",null,e.score.player1),r.a.createElement("div",null,r.a.createElement("span",{className:"scoreBoard-emoji"},e.player2Icon&&String.fromCodePoint(parseInt(e.player2Icon.toString(),16))),e.player2),r.a.createElement("span",null,e.score.player2)),r.a.createElement("button",{className:"resetAll-btn",onClick:function(){e.resetAll()}},"Reset All")))}));var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},r.a.createElement(f,null),r.a.createElement("div",{className:"boards-container"},r.a.createElement(b,null),r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(12),v=a(6),C=a(14),I={player1:"",player2:"",player1Icon:null,player2Icon:null,field:[[null,null,null],[null,null,null],[null,null,null]],currentPlayer:1,winner:null,score:{player1:0,player2:0},winCombo:[]},N=function(e,n){if(e[1][1]===n){if(e[0][0]===n&&e[2][2]===n)return[[0,0],[1,1],[2,2]];if(e[0][2]===n&&e[2][0]===n)return[[0,2],[1,1],[2,0]]}for(var a=function(a){return e[a].every((function(e){return e===n}))?{v:[[a,0],[a,1],[a,2]]}:e.every((function(e){return e[a]===n}))?{v:[[0,a],[1,a],[2,a]]}:void 0},l=0;l<3;l++){var r=a(l);if("object"===typeof r)return r.v}return!!e.every((function(e){return e.every((function(e){return e}))}))&&"tie"},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MOVE":var a=Object(C.a)(e.field);return 1===e.currentPlayer&&null===a[n.payload.rowIndex][n.payload.cellIndex]?(a[n.payload.rowIndex][n.payload.cellIndex]="X",Object(v.a)({},e,{field:Object(C.a)(a),winner:"tie"===N(a,"X")?"tie":N(a,"X")?e.player1:null,currentPlayer:2,winCombo:"tie"!==N(a,"X")&&N(a,"X")?N(a,"X"):[]})):2===e.currentPlayer&&null===a[n.payload.rowIndex][n.payload.cellIndex]?(a[n.payload.rowIndex][n.payload.cellIndex]="O",Object(v.a)({},e,{field:Object(C.a)(a),winner:"tie"===N(a,"O")?"tie":N(a,"O")?e.player2:null,currentPlayer:1,winCombo:"tie"!==N(a,"O")&&N(a,"O")?N(a,"O"):[]})):e;case"SAVE_NAME":return e.player1?e.player2?e:Object(v.a)({},e,{player2:n.payload}):Object(v.a)({},e,{player1:n.payload});case"CHOOSE_EMOJI":return e.player1&&!e.player1Icon?Object(v.a)({},e,{player1Icon:n.payload}):e.player2&&!e.player2Icon?Object(v.a)({},e,{player2Icon:n.payload}):e;case"RESTART_GAME":if(e.winner===e.player1){var l=e.score.player1+1;return Object(v.a)({},e,{field:[[null,null,null],[null,null,null],[null,null,null]],currentPlayer:1,winner:null,score:Object(v.a)({},e.score,{player1:l}),winCombo:[]})}if(e.winner===e.player2){var r=e.score.player2+1;return Object(v.a)({},e,{field:[[null,null,null],[null,null,null],[null,null,null]],currentPlayer:1,winner:null,score:Object(v.a)({},e.score,{player2:r}),winCombo:[]})}return Object(v.a)({},e,{field:[[null,null,null],[null,null,null],[null,null,null]],currentPlayer:1,winner:null,winCombo:[]});case"RESET_ALL":return{player1:"",player2:"",player1Icon:null,player2Icon:null,field:[[null,null,null],[null,null,null],[null,null,null]],currentPlayer:1,winner:null,score:{player1:0,player2:0},winCombo:[]};default:return e}},k=Object(w.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:k},r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b956ae3b.chunk.js.map