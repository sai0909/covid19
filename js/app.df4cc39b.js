(function(t){function a(a){for(var r,o,i=a[0],c=a[1],l=a[2],d=0,v=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(a);while(v.length)v.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(r=!1)}r&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},n={app:0},s=[];function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/covid19/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("8a23"),n=e.n(r);n.a},"073b":function(t,a,e){"use strict";var r=e("57c5"),n=e.n(r);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:t.darkHeader,dark:""}},[r("v-img",{attrs:{"max-height":"40","max-width":"40",contain:"",src:e("9b19")}}),r("v-toolbar-title",{staticClass:"ml-2"},[t._v(" Covid-19 ")])],1),r("v-content",[r("Dashboard")],1)],1)},s=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("Global"),e("MapCharts")],1)},i=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t.isLoading?e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-three-line"}}):e("v-card",{staticClass:"mx-auto"},[e("v-card-text",[e("v-list-item",{staticClass:"grow"},[e("v-list-item-content",[e("v-list-item-title",[e("h3",[t._v("Infected")])]),e("h3",{staticClass:"mt-3"},[t._v(t._s(t.stats.cases.total))])],1),e("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:"https://image.flaticon.com/icons/svg/1256/1256650.svg"}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t.isLoading?e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-three-line"}}):e("v-card",{staticClass:"mx-auto"},[e("v-card-text",[e("v-list-item",{staticClass:"grow"},[e("v-list-item-content",[e("v-list-item-title",[e("h3",[t._v("Active")])]),e("h3",{staticClass:"mt-3"},[t._v(t._s(t.stats.cases.active))])],1),e("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:"https://image.flaticon.com/icons/svg/2741/2741121.svg"}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t.isLoading?e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-three-line"}}):e("v-card",{staticClass:"mx-auto"},[e("v-card-text",[e("v-list-item",{staticClass:"grow"},[e("v-list-item-content",[e("v-list-item-title",[e("h3",[t._v("Recovered")])]),e("h3",{staticClass:"mt-3"},[t._v(t._s(t.stats.cases.recovered))])],1),e("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:"https://image.flaticon.com/icons/svg/1513/1513378.svg"}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t.isLoading?e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-three-line"}}):e("v-card",{staticClass:"mx-auto"},[e("v-card-text",[e("v-list-item",{staticClass:"grow"},[e("v-list-item-content",[e("v-list-item-title",[e("h3",[t._v("Deaths")])]),e("h3",{staticClass:"mt-3"},[t._v(t._s(t.stats.deaths.total))])],1),e("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:"https://image.flaticon.com/icons/svg/2641/2641036.svg"}})],1)],1)],1)],1)],1)],1)},l=[],u=(e("d3b7"),e("96cf"),e("1da1")),d={name:"Global",data:function(){return{stats:"",isLoading:!1}},methods:{fetchData:function(){var t=this;this.isLoading=!0,fetch("https://covid-193.p.rapidapi.com/statistics?country=All",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"3373e32af3msh61e6e6d153a68e5p1a446cjsn5396e3efe808"}}).then(function(){var a=Object(u["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:r=a.sent,t.stats=r.response[0],t.isLoading=!1,console.log(t.stats);case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}},created:function(){this.fetchData()}},v=d,p=e("2877"),m=e("6544"),f=e.n(m),h=e("b0af"),g=e("99d9"),b=e("62ad"),C=e("adda"),y=e("da13"),x=e("8270"),w=e("5d23"),_=e("0fd9"),k=e("3129"),j=Object(p["a"])(v,c,l,!1,null,null,null),O=j.exports;f()(j,{VCard:h["a"],VCardText:g["a"],VCol:b["a"],VImg:C["a"],VListItem:y["a"],VListItemAvatar:x["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VRow:_["a"],VSkeletonLoader:k["a"]});var V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("MapChart",{attrs:{countryData:t.mapData,highColor:"#84142d",lowColor:"#bb4f53ea",countryStrokeColor:"#909090",defaultCountryFillColor:"#f0f0f0",legendHeaderBackgroundColor:"#000",legendContentBackgroundColor:"#888"}})],1)],1)},L=[],D=(e("13d5"),e("ade3")),I=e("5530"),M=e("450d"),T={name:"MapCharts",components:{MapChart:M["a"]},data:function(){return{locations:"",isLoading:!1,mapData:{}}},methods:{fetchData:function(){var t=this;this.isLoading=!0,fetch("https://covid19-data.p.rapidapi.com/all",{method:"GET",headers:{"x-rapidapi-host":"covid19-data.p.rapidapi.com","x-rapidapi-key":"3373e32af3msh61e6e6d153a68e5p1a446cjsn5396e3efe808"}}).then(function(){var a=Object(u["a"])(regeneratorRuntime.mark((function a(e){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:r=a.sent,n=r.reduce((function(t,a){return Object(I["a"])({},t,Object(D["a"])({},a.countrycode,a.active))}),{}),t.isLoading=!1,t.mapData=n;case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}},created:function(){this.fetchData()}},S=T,P=(e("073b"),Object(p["a"])(S,V,L,!1,null,null,null)),R=P.exports;f()(P,{VCol:b["a"],VRow:_["a"]});var A={name:"Dashboard",components:{Global:O,MapCharts:R},data:function(){return{}}},E=A,G=e("a523"),$=Object(p["a"])(E,o,i,!1,null,null,null),B=$.exports;f()($,{VContainer:G["a"]});var H={name:"App",components:{Dashboard:B},data:function(){return{darkHeader:"#212121"}}},J=H,F=(e("034f"),e("7496")),U=e("40dc"),q=e("a75b"),z=e("2a7f"),K=Object(p["a"])(J,n,s,!1,null,null,null),N=K.exports;f()(K,{VApp:F["a"],VAppBar:U["a"],VContent:q["a"],VImg:C["a"],VToolbarTitle:z["a"]});var Q=e("2f62");r["a"].use(Q["a"]);var W=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=e("f309");r["a"].use(X["a"]);var Y=new X["a"]({theme:{dark:!0}}),Z=e("e11e");e("6cc5");delete Z["Icon"].Default.prototype._getIconUrl,r["a"].config.productionTip=!1,new r["a"]({store:W,vuetify:Y,render:function(t){return t(N)}}).$mount("#app")},"57c5":function(t,a,e){},"8a23":function(t,a,e){},"9b19":function(t,a,e){t.exports=e.p+"img/logo.07f379e7.svg"}});
//# sourceMappingURL=app.df4cc39b.js.map