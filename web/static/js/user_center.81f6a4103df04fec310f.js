webpackJsonp([7],{"+BTi":function(e,t){},"7ce2":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),n=r("mvHQ"),a=r.n(n),i=(r("cwe7"),r("+BTi"),r("2X9z")),o=r.n(i),u=(r("GXEp"),r("mtrD")),l=r.n(u),c=(r("X+ky"),r("HJMx")),d=r.n(c),f=r("P9l9"),p=r("162o"),m=r("oAV5");s.default.use(d.a),s.default.use(l.a);var v={name:"Main",data:function(){return{userPwd:"",userPwds:"",userEmail:"",userinfo:{}}},created:function(){this.userinfo=Object(m.c)()},methods:{submit:function(){var e=this;return e.userPwd.trim()?e.userPwds.trim()?e.userPwd!==e.userPwds?o.a.error("两次输入密码不一致！"):e.userEmail.trim()?void f.b.post(f.a.updateUser,{userId:e.userinfo.userId,password:e.userPwd,email:e.userEmail}).then(function(t){var r=t.data,s=void 0===r?{}:r;if("true"===s.success){o.a.success("Successful !");var n={userId:e.userinfo.userId,userName:e.userinfo.userName,token:e.userinfo.token,email:e.userEmail};localStorage.setItem("userinfo",a()(n)),Object(p.setTimeout)(function(){window.history.back()},1e3)}else o.a.error(s.msg||"Failed !")}).catch(function(){o.a.error("System error, Please try again later!")}):o.a.error("请输入邮箱！"):o.a.error("请再次输入密码！"):o.a.error("请输入密码！")}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"box"},[r("div",{staticClass:"inner"},[r("el-input",{attrs:{type:"password",placeholder:"Enter your new password",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"Enter your new password again",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),r("el-input",{attrs:{placeholder:"Enter your email",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("Submit")])],1)])])},staticRenderFns:[]};var g=r("VU/8")(v,h,!1,function(e){r("RBpa")},null,null).exports;r("S0Tp");s.default.component(g.name,g),new s.default({el:"#root",template:"<Main></Main>"})},8:function(e,t,r){r("j1ja"),e.exports=r("7ce2")},GXEp:function(e,t){},P9l9:function(e,t,r){"use strict";r.d(t,"b",function(){return p}),r.d(t,"a",function(){return v}),r.d(t,"c",function(){return g});var s=r("cwe7"),n=(r.n(s),r("+BTi")),a=(r.n(n),r("2X9z")),i=r.n(a),o=r("//Fk"),u=r.n(o),l=r("mtWM"),c=r.n(l),d=r("oAV5"),f=r("7+uW"),p=c.a.create();p.interceptors.request.use(function(e){var t=d.a.get("my_token");return e.headers.Authorization=t,e},function(e){return u.a.reject(e)});var m=globalConfig.proxy,v={login:m+"/user/login",register:m+"/user/register",addSample:m+"/sample/addSample",sampleList:m+"/sample/search",sampleListManage:m+"/sample/selectCond",sendEmail:m+"/trainResult/sendMail",downLoadResult:m+"/trainResult/download",trainResult:m+"/trainResult/search",forgetPwd:m+"/user/forget",updatePwd:m+"/user/updatePwd",updateUser:m+"/user/update",getUserList:m+"/user/search"},h=c.a.create();h.interceptors.request.use(function(e){var t=d.a.get("my_token");return t?(e.headers.Authorization=t,e):u.a.reject(new Error("un_login"))},function(e){return u.a.reject(e)});var g=function(e,t){return new u.a(function(r,s){h.post(e,t).then(function(e){r(e)}).catch(function(e){"un_login"===e.message?f.default.prototype.$bus.$emit("openLogin"):i.a.error("System error, Please try again later!"),s(e)})})}},RBpa:function(e,t){},S0Tp:function(e,t,r){"use strict";var s=r("7+uW"),n=r("fZjL"),a=r.n(n),i=r("gRE1"),o=r.n(i),u=window.location;u.origin||(u.origin=u.protocol+"//"+u.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,r=0;r<t;r++)if(!0===e(this[r],r))return this[r];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var r=this.length,s=t;s<r;s++)if(e===this[s])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,r=0;r<t;r++)if(!0===e(this[r],r))return r;return-1}),void 0===o.a&&(Object.values=function(e){return a()(e).map(function(t){return e[t]})});r("rdV6");var l=r("mvHQ"),c=r.n(l),d=(r("cwe7"),r("+BTi"),r("2X9z")),f=r.n(d),p=(r("GXEp"),r("mtrD")),m=r.n(p),v=(r("X+ky"),r("HJMx")),h=r.n(v),g=r("P9l9"),w=r("oAV5");s.default.use(h.a),s.default.use(m.a);var y={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=Object(w.c)();this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),w.a.unset("my_token"),w.a.unset("userinfo"),this.userinfo={},window.location.reload()},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if("forgetPwd"!==e.type){if(!t.userName.trim())return f.a.error("Please enter user name");if(!t.password.trim())return f.a.error("Please enter user password")}if("login"===e.type)g.b.post(g.a.login,t).then(function(r){var s=r.data,n=void 0===s?{}:s,a=n.data||{};if("true"===n.success){var i={userName:t.userName,userId:a.userId,my_token:a.token};w.a.set("my_token",a.token,a.valid-36e5),w.a.set("userinfo",c()(i)),localStorage.setItem("userinfo",c()(i)),e.userinfo=i,e.close(),window.location.reload()}else f.a.error(n.msg||"failed !")}).catch(function(){f.a.error("System error, Please try again later!")});else if("register"===e.type){if(t.email=e.userEmail||"",e.userPwd!==e.userPwds)return f.a.error("The passwords are inconsistent twice, please re-enter!");if(!t.email.trim())return f.a.error("Please enter your email address");g.b.post(g.a.register,t).then(function(t){var r=t.data,s=void 0===r?{}:r;"true"===s.success?(f.a.success("Successful !"),e.changeType()):f.a.error(s.msg||"failed !")}).catch(function(){f.a.error("System error, Please try again later!")})}else if("forgetPwd"===e.type){var r=e.userEmail||"";if(!r.trim())return f.a.error("Please enter your email address");g.b.post(g.a.forgetPwd,{email:r}).then(function(t){var r=t.data,s=void 0===r?{}:r;"true"===s.success?(f.a.success("Successful !"),e.changeType()):f.a.error(s.msg||"failed !")}).catch(function(){f.a.error("System error, Please try again later!")})}}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrap"},[e._m(0),e._v(" "),r("div",{staticClass:"login-box"},[r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[e._v("User Information")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("Hello, "+e._s(e.userinfo.userName)+"!")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("Sign out")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("Sign in")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("Register")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow"},[r("div",{staticClass:"login-container",class:{max:"register"===e.type,min:"forgetPwd"===e.type}},[r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"title"},[e._v("\n          "+e._s("login"===e.type?"Sign in":"register"===e.type?"Register":"Send Email")+"\n          "),r("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),r("div",{staticClass:"login-inner"},["login"===e.type?[r("el-input",{attrs:{placeholder:"Enter user name",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"Enter user password",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}})]:e._e(),e._v(" "),"register"===e.type?[r("el-input",{attrs:{placeholder:"Enter user name",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"Enter user password",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"Enter user password again",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),r("el-input",{attrs:{placeholder:"Enter email",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),"forgetPwd"===e.type?[r("el-input",{attrs:{placeholder:"Enter email",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),r("div",{staticClass:"footer-wrap"},[r("span",{on:{click:e.changeType}},[e._v(e._s("login"===e.type?"Register":"Sign in"))]),e._v(" "),"login"===e.type?r("span",{on:{click:e.forgetPwd}},[e._v("Forget password ?")]):e._e()]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s("login"===e.type?"Sign in":"register"===e.type?"Register":"Send"))])],2)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("div",{staticClass:"logo-img"}),this._v(" "),t("div",{staticClass:"logo-text"},[this._v("EPIP")])])}]};var P=r("VU/8")(y,_,!1,function(e){r("mQGe")},null,null).exports,b={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,s){return r("div",{key:s,staticClass:"menu-item"},[r("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var x,C,N=[P,r("VU/8")(b,E,!1,function(e){r("Z6R4")},"data-v-478cdbc8",null).exports,r("VU/8")({name:"copyRight"},k,!1,function(e){r("b5Xa")},"data-v-fce46656",null).exports],R={install:function(e,t){N.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};x=s.default,C=new x,x.prototype.$bus={$on:function(){C.$on.apply(C,arguments)},$off:function(){C.$off.apply(C,arguments)},$once:function(){C.$once.apply(C,arguments)},$emit:function(){C.$emit.apply(C,arguments)}},s.default.config.productionTip=!1,s.default.use(R)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},mQGe:function(e,t){},oAV5:function(e,t,r){"use strict";r.d(t,"b",function(){return s}),r.d(t,"a",function(){return n}),r.d(t,"c",function(){return a});var s=function(){var e=location.href.split("?")[1];if(e){var t={};return e.split("&").forEach(function(e){var r=e.split("=")[0],s=e.split("=")[1];t[r]=s}),t}return{}},n={set:function(e,t,r,s,n,a){var i="";i+=encodeURIComponent(e)+"="+encodeURIComponent(t),r instanceof Date&&(i+="; expires="+r.toGMTString()),n&&(i+="; path="+n),s&&(i+="; domain="+s),a&&(i+="; secure"),document.cookie=i},get:function(e){var t=encodeURIComponent(e)+"=",r=document.cookie.indexOf(t),s="";if(r>-1){var n=document.cookie.indexOf(";",r);-1==n&&(n=document.cookie.length),s=decodeURIComponent(document.cookie.substring(r+t.length,n))}return s},unset:function(e,t,r,s){this.set(e,"",Date(0),t,r,s)}},a=function(){var e={};try{e=JSON.parse(n.get("userinfo"))||{}}catch(t){e={}}return e}},rdV6:function(e,t){}},[8]);