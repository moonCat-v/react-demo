(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,o){t.exports=o(22)},19:function(t,e,o){},20:function(t,e,o){},21:function(t,e,o){},22:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),a=o(3),l=o.n(a),c=o(9),u=o(2),i=o(8),m=o(7),f={obj:{},list:[],num:0,string:""};var s=function(t,e){return f},d=Object(u.compose)(Object(u.applyMiddleware)(i.a)),w=Object(u.createStore)(s,Object(m.composeWithDevTools)(d)),p=o(10),v=o(1),g=(o(19),[{id:"1",text:"\u5e8f\u52171"},{id:"2",text:"\u5e8f\u52172"},{id:"3",text:"\u5e8f\u52173"},{id:"4",text:"\u5e8f\u52174"},{id:"5",text:"\u5e8f\u52175"}]);function b(){var t=Object(r.useState)(g),e=Object(v.a)(t,2),o=e[0],a=e[1],l=Object(r.useState)([]),c=Object(v.a)(l,2),u=c[0],i=c[1],m=Object(r.useRef)(null);m.current={left:{callback:a,list:o},right:{callback:i,list:u}};var f=function(t){return t.preventDefault()},s=function(t,e){return function(o){var r=o.target,n=r.dataset.id;r.classList.remove("over");var l=JSON.parse(o.dataTransfer.getData("itemData"));t(function(t){var e=JSON.parse(JSON.stringify(t)).filter(function(t){return t.id!==l.id});if(!n)return[].concat(Object(p.a)(e),[l]);var o=e.findIndex(function(t){return t.id===n});return e.splice(o,0,l),e}),"left"===e?i(function(t){return t.filter(function(t){return t.id!==l.id})}):a(function(t){return t.filter(function(t){return t.id!==l.id})})}},d=function(t){return t.target.classList.add("over")},w=function(t){return t.target.classList.remove("over")};return n.a.createElement("div",{className:"dragEvent-wrap"},Object.entries(m.current).map(function(t){var e=Object(v.a)(t,2),o=e[0],r=e[1],a=r.callback,l=r.list;return n.a.createElement("div",{key:o,className:"content-wrap",onDragOver:f,onDragEnter:d,onDragLeave:w,onDrop:s(a,o)},l.map(function(t){return n.a.createElement("div",{className:"item-text",key:t.id,"data-id":t.id,draggable:!0,onDragStart:(e=t,function(t){return t.dataTransfer.setData("itemData",JSON.stringify(e))})},t.text);var e}))}))}var O={theme1:{layout:{row:1,column:1},grids:[{left:0,top:0,row:1,column:1}]},theme2:{layout:{row:1,column:2},grids:[{left:0,top:0,row:1,column:1},{left:1,top:0,row:1,column:1}]},theme3:{layout:{row:2,column:1},grids:[{left:0,top:0,row:1,column:1},{left:0,top:1,row:1,column:1}]},theme4:{layout:{row:2,column:2},grids:[{left:0,top:0,row:2,column:1},{left:1,top:0,row:1,column:1},{left:1,top:1,row:1,column:1}]},theme5:{layout:{row:2,column:2},grids:[{left:0,top:0,row:1,column:1},{left:0,top:1,row:1,column:1},{left:1,top:0,row:2,column:1}]},theme6:{layout:{row:2,column:2},grids:[{left:0,top:0,row:1,column:2},{left:0,top:1,row:1,column:1},{left:1,top:1,row:1,column:1}]},theme7:{layout:{row:2,column:2},grids:[{left:0,top:0,row:1,column:1},{left:1,top:0,row:1,column:1},{left:0,top:1,row:1,column:2}]},theme8:{layout:{row:2,column:2},grids:[{left:0,top:0,row:1,column:1},{left:1,top:0,row:1,column:1},{left:0,top:1,row:1,column:1},{left:1,top:1,row:1,column:1}]},theme9:{layout:{row:3,column:2},grids:[{left:0,top:0,row:3,column:1},{left:1,top:0,row:1,column:1},{left:1,top:1,row:1,column:1},{left:1,top:2,row:1,column:1}]}};o(20);var h={DragEvent:b,Multiview:function(){var t=Object(r.useState)("theme1"),e=Object(v.a)(t,2),o=e[0],a=e[1],l=Object(r.useMemo)(function(){return O[o]},[o]),c=(l.layout,l.grids),u=void 0===c?[]:c;return console.log(u,"grids"),n.a.createElement("div",{className:"view-wrap"},n.a.createElement("div",{className:"view-button-wrap"},["theme1","theme2","theme3","theme4","theme8"].map(function(t){return n.a.createElement("button",{onClick:function(){a(t)},key:t},t)})),n.a.createElement("div",{className:"view-content-wrap"}))}};function E(){var t=window.location.href.split("?")[1],e=h[t]||b;return n.a.createElement("div",null,n.a.createElement(e,null))}o(21);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,{store:w},n.a.createElement(y,null))),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b7d04541.chunk.js.map