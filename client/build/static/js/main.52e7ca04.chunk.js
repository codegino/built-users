(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports={container:"LoadingMask_container__1XgIA",logo:"LoadingMask_logo__BHgH9",rotateClockwise:"LoadingMask_rotateClockwise__1L5uq"}},38:function(e,t,a){e.exports=a(75)},6:function(e,t,a){e.exports={picture:"Profile_picture__wPoh5",container:"Profile_container__VnGu0",face:"Profile_face__Rz_rX",faceFront:"Profile_faceFront__OZvVd",faceBack:"Profile_faceBack__1qmZB"}},7:function(e,t,a){e.exports={container:"Home_container__1nxNb",inputWrapper:"Home_inputWrapper__1u4Ar",slideInFromLeft:"Home_slideInFromLeft__SpO1Y",label:"Home_label__2n5dw",slideInFromRight:"Home_slideInFromRight__3Pn_F",header:"Home_header__3Rc8-",slideInFromTop:"Home_slideInFromTop__1GyaI",input:"Home_input__2MXcv",button:"Home_button__e8IJf",usersWrapper:"Home_usersWrapper__3Iuxx"}},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=a(10),s=a.n(l),i=a(78),u=a(77),p=a(11),m=a(12),_=a(16),d=a(13),f=a(17),h=a(15),E=a(20),v=a.n(E),b=a(33),g=function(e){return{type:"FETCH_USER_SUCCESS",users:e}},O=a(21),N=a.n(O),k=function(){return r.a.createElement("div",{className:N.a.container},r.a.createElement("p",{className:N.a.logo},"..."))},w=a(6),y=a.n(w),H=function(e){function t(){return Object(p.a)(this,t),Object(_.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.details,t=e.location,a=e.name,n=e.picture,c=e.cell,o=e.gender,l=e.phone,s=e.email;return r.a.createElement("div",{className:y.a.container},r.a.createElement("div",{className:"".concat(y.a.face," ").concat(y.a.faceFront)},r.a.createElement("img",{src:n.large,alt:"profile",className:y.a.picture}),r.a.createElement("div",{className:y.a.details},r.a.createElement("p",null,"Name: ",a.first," ",a.last),r.a.createElement("p",null,"City: ",t.city),r.a.createElement("p",null,"State: ",t.state))),r.a.createElement("div",{className:"".concat(y.a.face," ").concat(y.a.faceBack)},r.a.createElement("p",null,"Phone: ",l),r.a.createElement("p",null,"Email: ",s),r.a.createElement("p",null,"Cell: ",c),r.a.createElement("p",null,"Gender: ",o)))}}]),t}(r.a.PureComponent),j=a(7),C=a.n(j),F=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={count:1},a._onFetchUserHandler=function(){var e=a.state.count;a.props.fetchUsers(e||1)},a._onCountChangeHandler=function(e){a.setState({count:e.target.value})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._onFetchUserHandler()}},{key:"render",value:function(){var e=this.props.users.map(function(e){return r.a.createElement(H,{key:e.email,details:e})});return r.a.createElement("div",{className:C.a.container},this.props.loading?r.a.createElement(k,null):null,r.a.createElement("h1",{className:C.a.header},"Test Users"),r.a.createElement("p",{className:C.a.label},"Enter number of person to display"),r.a.createElement("div",{className:C.a.inputWrapper},r.a.createElement("input",{type:"number",min:"1",value:this.state.count,onChange:this._onCountChangeHandler,className:C.a.input}),r.a.createElement("button",{className:C.a.button,onClick:this._onFetchUserHandler},"Update")),r.a.createElement("div",{className:C.a.usersWrapper},e))}}]),t}(r.a.PureComponent),I=Object(h.b)(function(e){return{users:e.user.users,loading:e.ui.loading}},function(e){return{fetchUsers:function(t){return e(function(e){return function(){var t=Object(b.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"ON_LOADING_START"}),t.prev=1,t.next=4,s.a.get("https://built-users.herokuapp.com/users",{params:{count:e}});case 4:n=t.sent,a(g(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"FETCH_USER_FAIL"});case 11:a({type:"ON_LOADING_END"});case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(F),S=function(){return r.a.createElement("main",null,r.a.createElement(i.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:I}),r.a.createElement(u.a,{path:"/resume",component:I})))};a(71),a(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(76),L=a(8),x=a(36),A=a(9),P={users:[]},R={loading:!1},T=Object(L.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":return Object(A.a)({},e,{users:Object(x.a)(t.users)});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;switch((arguments.length>1?arguments[1]:void 0).type){case"ON_LOADING_START":return Object(A.a)({},e,{loading:!0});case"ON_LOADING_END":return Object(A.a)({},e,{loading:!1});default:return e}}}),W=a(35),B=Object(L.d)(T,Object(L.a)(W.a));s.a.defaults.baseURL="https://built-users.herokuapp.com/",o.a.render(r.a.createElement(U.a,null,r.a.createElement(h.a,{store:B},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.52e7ca04.chunk.js.map