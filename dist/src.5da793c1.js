parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DALD":[function(require,module,exports) {
"use strict";function o(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function n(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function t(o,t,e){return t&&n(o.prototype,t),e&&n(o,e),o}function e(o,n,t){return n in o?Object.defineProperty(o,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[n]=t,o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Room=void 0;var r=function(){return Math.floor(255*Math.random())},i=function(){return"rgb(".concat(r(),", ").concat(r(),", ").concat(r(),")")},a=function(){function n(t){var r=t.name,a=t.height,c=void 0===a?1:a,u=t.width,s=void 0===u?1:u,h=t.xPos,f=void 0===h?0:h,l=t.yPos,d=void 0===l?0:l;o(this,n),e(this,"roomConnections",[]),this.name=r,this.height=c,this.width=s,this.xPos=f,this.yPos=d,this.color=i()}return t(n,[{key:"addConnection",value:function(o,n){this.roomConnections.push({room:o,validator:n})}}]),n}();exports.Room=a;
},{}],"hHUJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawMap=exports.erasePlayer=exports.drawPlayer=exports.drawRoom=void 0;var r="map",o=150,e=.1,t=document.getElementById(r),a=t.getContext("2d"),l=function(r){a.fillStyle=r.color,a.fillRect(r.xPos*o,r.yPos*o,r.width*o,r.height*o)};exports.drawRoom=l;var c=function(r){a.fillStyle="rgb(255, 165, 0)";var t=(r.currentRoom.xPos+r.currentRoom.width/2)*o,l=(r.currentRoom.yPos+r.currentRoom.height/2)*o;a.beginPath(),a.arc(t,l,e*o,0,2*Math.PI,!0),a.fill()};exports.drawPlayer=c;var n=function(r){a.fillStyle=r.currentRoom.color,a.strokeStyle=r.currentRoom.color;var t=(r.currentRoom.xPos+r.currentRoom.width/2)*o,l=(r.currentRoom.yPos+r.currentRoom.height/2)*o;a.beginPath(),a.arc(t,l,e*o,0,2*Math.PI,!0),a.fill(),a.stroke()};exports.erasePlayer=n;var s=function(r){r.rooms.forEach(l),c(r.player)};exports.drawMap=s;
},{}],"vYOb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Player=void 0;var r=require("./Room"),e=require("../Interface/Map");function o(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function t(r,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function n(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}var a=function(){function r(e,t){o(this,r),this.currentRoom=e,this.name=t}return n(r,[{key:"move",value:function(r){var o=this.currentRoom.roomConnections.find(function(e){return e.room===r});if(void 0===o)throw"The room you want is not in the good range";try{var t=o.validator();return(0,e.erasePlayer)(this),this.currentRoom=o.room,(0,e.drawPlayer)(this),t}catch(n){return n}}}]),r}();exports.Player=a;
},{"./Room":"DALD","../Interface/Map":"hHUJ"}],"PDzX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.World=void 0;var e=require("./Player"),r=require("./Room"),o=require("../Interface/Map");function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function a(e,r,o){return r&&n(e.prototype,r),o&&n(e,o),e}function i(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var u=function(){function n(e){t(this,n),i(this,"rooms",[]),i(this,"player",void 0),this.name=e}return a(n,[{key:"createRoom",value:function(e){var t=new r.Room(e);return this.rooms.push(t),(0,o.drawRoom)(t),t}},{key:"createPlayer",value:function(r){if(0===this.rooms.length)throw new Error("The world needs to have at least one room for the player to start");var t=new e.Player(this.rooms[0],r);return this.player=t,(0,o.drawPlayer)(t),t}}]),n}();exports.World=u;
},{"./Player":"vYOb","./Room":"DALD","../Interface/Map":"hHUJ"}],"gRyZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.say=void 0;var e="text",t=document.getElementById(e),o=function(e){t.innerHTML=e};exports.say=o;
},{}],"Focm":[function(require,module,exports) {
"use strict";var o=require("./Game/World"),e=require("./Interface/Text");function n(){var n=new o.World("World"),r=n.createRoom({name:"room1",height:2}),t=n.createRoom({name:"room2",xPos:1,height:2}),a=n.createPlayer("John Doe");r.addConnection(t,function(){return"".concat(a.name," moved to room 2 from room 1")}),t.addConnection(r,function(){return"".concat(a.name," moved to room 1 from room 2")}),setTimeout(function(){(0,e.say)("Hi ".concat(a.name)),setInterval(function(){(0,e.say)(a.move(a.currentRoom===r?t:r))},1500)},500)}n();
},{"./Game/World":"PDzX","./Interface/Text":"gRyZ"}]},{},["Focm"], null)
//# sourceMappingURL=/src.5da793c1.js.map