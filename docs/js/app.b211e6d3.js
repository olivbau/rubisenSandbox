(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)a=s[l],o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);v&&v(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1383eeaa"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e),i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var v=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1:function(e,t){},"3f52":function(e,t,n){"use strict";var r=n("d0dd"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/giiker"}},[e._v("Giiker")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/socket"}},[e._v("Socket")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/collect"}},[e._v("Collect")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,o,i,!1,null,null,null),u=c.exports,l=n("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},b=p,g=(n("3f52"),Object(a["a"])(b,f,d,!1,null,"0a39cc74",null)),m=g.exports,_={name:"home",components:{HelloWorld:m}},k=_,j=Object(a["a"])(k,v,h,!1,null,null,null),w=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"giiker"},[n("button",{on:{click:e.connect}},[e._v("Connect")]),n("h1",[e._v(e._s(e.lastMoveId))])])},S=[],y=n("5d73"),C=n.n(y),x=(n("96cf"),n("3b8d")),E=function(){this.listeners=[]},q=console.info?console.log.bind(console):console.info.bind(console);E.prototype={UUIDs:{cubeService:"0000aadb-0000-1000-8000-00805f9b34fb",cubeCharacteristic:"0000aadc-0000-1000-8000-00805f9b34fb"},connect:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Attempting to pair."),e.next=3,navigator.bluetooth.requestDevice({filters:[{namePrefix:"Gi"}],optionalServices:["00001530-1212-efde-1523-785feabcd123","0000aaaa-0000-1000-8000-00805f9b34fb","0000aadb-0000-1000-8000-00805f9b34fb","0000180f-0000-1000-8000-00805f9b34fb","0000180a-0000-1000-8000-00805f9b34fb"]});case 3:return this.device=e.sent,console.log("Device:",this.device),e.next=7,this.device.gatt.connect();case 7:return this.server=e.sent,console.log("Server:",this.server),e.next=11,this.server.getPrimaryService(this.UUIDs.cubeService);case 11:return this.cubeService=e.sent,console.log("Service:",this.cubeService),e.next=15,this.cubeService.getCharacteristic(this.UUIDs.cubeCharacteristic);case 15:return this.cubeCharacteristic=e.sent,console.log(this.cubeCharacteristic),e.next=19,this.cubeCharacteristic.startNotifications();case 19:return e.next=21,this.cubeCharacteristic.readValue();case 21:this._originalValue=e.sent,q("Original value:",this._originalValue),this.cubeCharacteristic.addEventListener("characteristicvaluechanged",this.onCubeCharacteristicChanged.bind(this));case 24:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),giikerMoveToAlgMove:function(e,t){return 9==t&&(console.err("Encountered 9",e,t),t=2),{type:"move",base:["?","B","D","L","U","R","F"][e],amount:[0,1,2,-1][t],id:["?","B","D","L","U","R","F"][e]+["","","","'"][t]}},onCubeCharacteristicChanged:function(e){var t=e.target.value;if(this._originalValue){q("Comparing against original value.");for(var n=!0,r=0;r<20;r++)if(this._originalValue.getUint8(r)!=t.getUint8(r)){q("Different at index ",r),n=!1;break}if(this._originalValue=null,n)return void q("Skipping extra first event.")}console.log(e);var o=[];for(r=0;r<20;r++)o.push(Math.floor(t.getUint8(r)/16)),o.push(t.getUint8(r)%16);var i="";i+=o.slice(0,8).join("."),i+="\n",i+=o.slice(8,16).join("."),i+="\n",i+=o.slice(16,28).join("."),i+="\n",i+=o.slice(28,32).join("."),i+="\n",i+=o.slice(32,40).join("."),console.log(i);var a=!0,s=!1,c=void 0;try{for(var u,l=C()(this.listeners);!(a=(u=l.next()).done);a=!0){var v=u.value;v({latestMove:this.giikerMoveToAlgMove(o[32],o[33]),timeStamp:e.timeStamp,stateStr:i})}}catch(h){s=!0,c=h}finally{try{a||null==l.return||l.return()}finally{if(s)throw c}}},addEventListener:function(e){this.listeners.push(e)}};var O=E,U={name:"giiker",data:function(){return{cube:new O,lastMove:null}},methods:{connect:function(){console.log(this),this.cube.connect(),this.cube.addEventListener(this.updateMove)},updateMove:function(e){this.lastMove=e.latestMove}},computed:{lastMoveId:function(){return this.lastMove?this.lastMove.id:null}}},R=U,L=Object(a["a"])(R,M,S,!1,null,null,null),P=L.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"giiker"},[n("button",{on:{click:e.connect}},[e._v("Connect")]),n("button",{on:{click:e.download}},[e._v("Download")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"text"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),n("p",[e._v("Entries: "+e._s(e.entries))]),n("p",[e._v("Reset: R R'")]),n("h1",[e._v("Sequence: "+e._s(e.sequenceStr))]),n("h1",[e._v(e._s(e.currentSequenceStr))]),n("p",[e._v(e._s(e.datas))])])},D=[],I=n("0a0d"),V=n.n(I),A=n("2ef0"),T={name:"giiker",data:function(){return{cube:new O,user:"user",lastMove:null,sequence:["L'","U","R","U'","L","U","R'","U'"],currentSequence:[],data:[],datas:[]}},methods:{connect:function(){console.log(this),this.cube.connect(),this.cube.addEventListener(this.updateMove)},updateMove:function(e){this.lastMove=e.latestMove,this.currentSequence.push(e.latestMove.id),this.data.push(V()()),this.checkReset(),this.checkValid()},checkValid:function(){A.isEqual(this.currentSequence,this.sequence)&&this.valid()},checkReset:function(){A.isEqual(this.currentSequence.slice(-2),["R","R'"])&&this.reset()},reset:function(){this.currentSequence=[],this.data=[]},valid:function(){this.normalize(),this.datas.push(this.data),this.reset()},normalize:function(){for(var e=this.data[0],t=0;t<this.data.length;t+=1)this.data[t]-=e;for(var n=this.data.length-1;n>0;n-=1)this.data[n]-=this.data[n-1];this.data.unshift(this.user)},download:function(){var e=this.datas,t="data:text/csv;charset=utf-8,";e.forEach(function(e){var n=e.join(",");t+="".concat(n,"\r\n")});var n=encodeURI(t),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download","rubisen.csv"),document.body.appendChild(r),r.click()}},computed:{currentSequenceStr:function(){return this.currentSequence.join(" ")},sequenceStr:function(){return this.sequence.join(" ")},entries:function(){return this.datas.length}}},F=T,H=Object(a["a"])(F,$,D,!1,null,null,null),W=H.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"socket"},[n("button",{on:{click:e.connect}},[e._v("Cube Connect")]),n("h1",[e._v(e._s(e.lastMoveId))])])},N=[],B=n("8055"),G=n.n(B),J={name:"socket",data:function(){return{cube:new O,lastMove:null,socket:null}},mounted:function(){this.socket=G()("localhost:3000")},methods:{connect:function(){this.cube.connect(),this.cube.addEventListener(this.updateMove)},updateMove:function(e){this.lastMove=e.latestMove,this.socket.emit("move",e.latestMove)}},computed:{lastMoveId:function(){return this.lastMove?this.lastMove.id:null}}},Y=J,K=Object(a["a"])(Y,z,N,!1,null,null,null),Q=K.exports;r["a"].use(l["a"]);var X=new l["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/giiker",name:"giiker",component:P},{path:"/socket",name:"socket",component:Q},{path:"/collect",name:"collect",component:W},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Z=n("2f62");r["a"].use(Z["a"]);var ee=new Z["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:X,store:ee,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d0dd:function(e,t,n){}});
//# sourceMappingURL=app.b211e6d3.js.map