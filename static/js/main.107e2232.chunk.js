(this["webpackJsonpwether-test-task"]=this["webpackJsonpwether-test-task"]||[]).push([[0],{194:function(e,t,a){e.exports=a(331)},196:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);a(195),a(196);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),i=a(28),u=a(34),l=a(44),s=a(19),p=a(37),d=a(16),m=a(88),h=a.n(m),E=a(345),b=a(343),v=a(341),f=a(336),O=a(340),y=a(344),g=a(339);var j=function(e){var t=e.header,a=void 0===t?"header":t,n=e.description,c=void 0===n?"description,":n;return r.a.createElement(g.a.Item,{size:"large"},r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,a),r.a.createElement(g.a.Description,null,c)))},w=a(3),_=a.n(w);_.a.shape({lon:_.a.number,lat:_.a.number}),_.a.arrayOf(_.a.shape({id:_.a.number,main:_.a.string,description:_.a.string,icon:_.a.string})),_.a.string,_.a.shape({temp:_.a.number,pressure:_.a.number,humidity:_.a.number,temp_min:_.a.number,temp_max:_.a.number}),_.a.number,_.a.shape({speed:_.a.number,deg:_.a.number}),_.a.shape({all:_.a.number}),_.a.number,_.a.shape({type:_.a.number,id:_.a.number,message:_.a.number,sunrise:_.a.number,sunset:_.a.number,country:_.a.string}),_.a.number,_.a.string,_.a.number;var C=function(e){var t=e.wether,a=t.main,n=t.wind,c=t.name;return r.a.createElement(b.a,null,r.a.createElement(y.a,null,c),r.a.createElement(g.a,{divided:!0},r.a.createElement(j,{header:"temperature",description:"".concat(a.temp," \xb0 F")}),r.a.createElement(j,{header:"max temperature",description:"".concat(a.temp_max," \xb0 F")}),r.a.createElement(j,{header:"min temperature",description:"".concat(a.temp_min," \xb0 F")}),r.a.createElement(j,{header:"pressure",description:"".concat(a.pressure," atm")}),r.a.createElement(j,{header:"wind speed",description:"".concat(n.speed," m/s")}),r.a.createElement(j,{header:"wind degree",description:"".concat(n.deg," \xb0")})))},T=a(63),A={enableHighAccuracy:!1,timeout:1/0,maximumAge:0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,a=Object(n.useState)(null),r=Object(T.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(null),u=Object(T.a)(i,2),l=u[0],s=u[1],p=function(e){var t=e.coords,a=e.timestamp;o({latitude:t.latitude,longitude:t.longitude,accuracy:t.accuracy,timestamp:a})},d=function(e){s(e.message)};return Object(n.useEffect)((function(){if(navigator&&navigator.geolocation){var a=null;return e?a=navigator.geolocation.watchPosition(p,d,t):navigator.geolocation.getCurrentPosition(p,d,t),function(){return a&&navigator.geolocation.clearWatch(a)}}s("Geolocation is not supported")}),[t.enableHighAccuracy,t.timeout,t.maximumAge,t,e]),{position:c,error:l}};function R(e){var t=e.data,a=e.state,n=e.LoadingComponent,c=e.ErrorComponent,o=void 0===c?null:c,i=e.DataComponent;return r.a.createElement(r.a.Fragment,null,t&&"loaded"===a&&i,!t&&"loading"===a&&n,"error"===a&&o)}R.propTypes={data:_.a.any,state:_.a.oneOf(["error","loaded","loading"]).isRequired,LoadingComponent:_.a.node.isRequired,ErrorComponent:_.a.node.isRequired,DataComponent:_.a.node.isRequired},R.defaultProps={data:null};var S=R;function x(e){var t=e.wetherState,a=e.wetherError,c=e.wether,o=e.onGetWether,i=e.onGoBack,u=e.location,l=P(!1).position,s=u.search,p=h.a.parse(s.slice(1)).city;return Object(n.useEffect)((function(){var e=l||{},t=e.latitude,a=e.longitude;o(p?{city:p}:{lat:t,lon:a})}),[o,p,l]),r.a.createElement(E.a,{as:"main",verticalAlign:"middle",padded:!0,centered:!0},r.a.createElement(E.a.Row,null,r.a.createElement(b.a,{basic:!0},r.a.createElement(v.a,{labelPosition:"left",onClick:i,icon:"left chevron",content:"Back"}))),r.a.createElement(E.a.Row,null,r.a.createElement(S,{data:c,state:t,LoadingComponent:r.a.createElement(f.a,{active:!0}),DataComponent:r.a.createElement(C,{wether:c}),ErrorComponent:r.a.createElement(O.a,{negative:!0},r.a.createElement(O.a.Header,null,"Something happened wrong!"),r.a.createElement("p",null,a))})))}x.defaultProps={wetherState:null,wetherError:null,wether:null};var W=x,k=a(61),U=a(21),G=a(337),H={state:null,error:null,data:null};var D=function(e){var t,a=e.requestActionType,n=e.successActionType,r=e.failureActionType,c=Object(U.a)({},H);return Object(G.a)((t={},Object(k.a)(t,a,(function(e){return Object(U.a)(Object(U.a)({},e),{},{state:"loading",error:null})})),Object(k.a)(t,n,(function(e,t){var a=t.payload;return Object(U.a)(Object(U.a)({},e),{},{state:"loaded",data:a})})),Object(k.a)(t,r,(function(e,t){var a=t.payload;return Object(U.a)(Object(U.a)({},e),{},{state:"error",error:a})})),t),c)}({requestActionType:"GET_WETHER_REQUEST",successActionType:"GET_WETHER_SUCCESS",failureActionType:"GET_WETHER_FAIL"}),q=function(e){return e.wether.current},L=Object(p.a)(q,(function(e){return e.state})),I=Object(p.a)(q,(function(e){return e.error})),B=Object(p.a)(q,(function(e){return e.data})),F=a(41),K=a.n(F),M=a(69),J=a(346),N=a(171),Q=a(172),X=a(173),z=a.n(X),V=function(){function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.apiUrl,r=void 0===n?"http://localhost:3000/":n,c=a.prefix,o=void 0===c?"api/v1":c,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(N.a)(this,e),this.queryObject=i,this.prefix=o,this.apiUrl=r,this.token="",["get","post","patch","delete"].forEach((function(e){t[e]=function(){var a=Object(M.a)(K.a.mark((function a(n,r,c){return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",t.request({method:e.toUpperCase(),body:r,url:n,params:c}));case 1:case"end":return a.stop()}}),a)})));return function(e,t,n){return a.apply(this,arguments)}}()}))}return Object(Q.a)(e,[{key:"request",value:function(){var e=Object(M.a)(K.a.mark((function e(t){var a,n,r,c,o,i,u,l,s,p;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=t.body,c=t.params,i=o=void 0===c?{}:c,this.queryObject&&(i=Object(U.a)(Object(U.a)({},this.queryObject),o)),u="?".concat(z.a.stringify(i)),l="".concat(this.apiUrl,"/").concat(this.prefix).concat(a).concat(u),e.next=7,fetch(l,{method:n,withCredentials:!0,crossDomain:!0,body:"GET"!==n?JSON.stringify(r):void 0});case 7:return s=e.sent,e.next=10,s.json();case 10:if(200===+(p=e.sent).cod){e.next=13;break}throw p.message;case 13:return e.abrupt("return",p);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Y=Object({NODE_ENV:"production",PUBLIC_URL:"/wether-test-task",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"https://api.openweathermap.org",REACT_APP_PREFIX:"data/2.5",REACT_APP_APP_ID:"a57bae3a1ee62cc1d67d655a0eafcdbf"}),Z={common:{publicUrl:"/wether-test-task"},openWeatherMap:{apiUrl:Y.REACT_APP_API_URL,prefix:Y.REACT_APP_PREFIX,appid:Y.REACT_APP_APP_ID}},$=new V({apiUrl:Z.openWeatherMap.apiUrl,prefix:Z.openWeatherMap.prefix},{appid:Z.openWeatherMap.appid}),ee=function(e){return $.get("/weather",null,e)},te=Object(J.a)("GET_WETHER_REQUEST"),ae=Object(J.a)("GET_WETHER_SUCCESS"),ne=Object(J.a)("GET_WETHER_FAIL");function re(e){var t=e.lat,a=void 0===t?35:t,n=e.lon,r=void 0===n?139:n,c=e.city,o=void 0===c?"Kyiv":c;return function(){var e=Object(M.a)(K.a.mark((function e(t){var n,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(n={lat:a,lon:r,q:o})),e.prev=2,e.next=5,ee(n);case 5:return c=e.sent,t(ae(c)),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(2),t(ne(e.t0)),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}var ce=Object(p.b)({wetherState:L,wetherError:I,wether:B}),oe=Object(s.e)(Object(u.c)(ce,(function(e){return{onGetWether:function(t){var a=t.lat,n=t.lon,r=t.city;return e(re({lat:a,lon:n,city:r}))},onOpenWetherByCity:function(t){var a=t.city;return e(Object(d.e)("/?city=".concat(a)))},onGoBack:function(){return e(Object(d.c)())}}}))(W)),ie=a(338),ue=[{value:"Kyiv",text:"Kyiv"},{value:"Lviv",text:"Lviv"},{value:"Odesa",text:"Odesa"},{value:"Kharkiv",text:"Kharkiv"}];function le(e){var t=e.wetherState,a=e.wetherError,c=e.wether,o=e.onGetWether,i=e.onOpenWetherByCity,u=e.location,l=P(!1).position,s=Object(n.useState)(null),p=Object(T.a)(s,2),d=p[0],m=p[1],g=Object(n.useState)(!0),j=Object(T.a)(g,2),w=j[0],_=j[1],A=h.a.parse(u.search.slice(1)).city;Object(n.useEffect)((function(){var e=l||{},t=e.latitude,a=e.longitude;o(A?{city:A}:{lat:t,lon:a})}),[o,A,l]);return r.a.createElement(E.a,{as:"main",verticalAlign:"middle",padded:!0,centered:!0},r.a.createElement(E.a.Row,null,l?r.a.createElement(S,{data:c,state:t,LoadingComponent:r.a.createElement(f.a,{active:!0}),DataComponent:r.a.createElement(C,{wether:c}),ErrorComponent:r.a.createElement(O.a,{negative:!0},r.a.createElement(O.a.Header,null,"Something happened wrong!"),r.a.createElement("p",null,a))}):w&&r.a.createElement(O.a,{onDismiss:function(){return _(!1)},warning:!0},r.a.createElement(O.a.Header,null,"Please enable geolocation!"))),r.a.createElement(E.a.Row,null,r.a.createElement(b.a,null,r.a.createElement(y.a,null,"Watch wether by city"),r.a.createElement(ie.a,{onChange:function(e,t){var a=t.value;return m(a)},options:ue,placeholder:"Choose an option",selection:!0,value:d}),r.a.createElement(v.a,{disabled:!d,onClick:function(){return d&&i({city:d})}},"Watch"))))}le.defaultProps={wetherState:null,wetherError:null,wether:null};var se=le,pe=Object(p.b)({wetherState:L,wetherError:I,wether:B}),de=Object(s.e)(Object(u.c)(pe,(function(e){return{onGetWether:function(t){var a=t.lat,n=t.lon,r=t.city;return e(re({lat:a,lon:n,city:r}))},onOpenWetherByCity:function(t){var a=t.city;return e(Object(d.e)("/wether?city=".concat(a)))}}}))(se));var me=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/wether",component:oe}),r.a.createElement(s.a,{path:"/",component:de}))};var he=function(e){var t=e.history,a=e.store;return r.a.createElement(u.a,{store:a},r.a.createElement(l.a,{history:t},r.a.createElement(me,null)))},Ee=a(24),be=a(182),ve=a(165),fe=Object(Ee.c)({current:D});var Oe=Object(i.a)(),ye=function(e){var t=e.history,a=[be.a];t&&a.push(Object(ve.a)(t));var n=function(e){var t=e.history;return Object(Ee.c)({router:Object(l.b)(t),wether:fe})}({history:t});return Object(Ee.e)(n,void 0,Object(Ee.d)(Ee.a.apply(void 0,a)))}({history:Oe});o.a.render(r.a.createElement(he,{store:ye,history:Oe}),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.107e2232.chunk.js.map