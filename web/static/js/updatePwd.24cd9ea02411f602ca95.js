webpackJsonp([8],{"+BTi":function(e,t){},7:function(e,t,r){r("j1ja"),e.exports=r("myXt")},GXEp:function(e,t){},P9l9:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return u});var n=r("mtWM"),s=r.n(n),a=r("oAV5"),i=s.a.create();i.interceptors.request.use(function(e){var t=a.a.get("my_token");return e.headers.Authorization=t,e});var o=globalConfig.proxy,u={login:o+"/user/login",register:o+"/user/register",addSample:o+"/sample/addSample",sampleList:o+"/sample/search",sampleListManage:o+"/sample/selectCond",sendEmail:o+"/trainResult/sendMail",trainResult:o+"/trainResult/search",forgetPwd:o+"/user/forget",updatePwd:o+"/user/updatePwd",updateUser:o+"/user/update",getUserList:o+"/user/search"}},S0Tp:function(e,t,r){"use strict";var n=r("7+uW"),s=r("fZjL"),a=r.n(s),i=r("gRE1"),o=r.n(i),u=window.location;u.origin||(u.origin=u.protocol+"//"+u.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,r=0;r<t;r++)if(!0===e(this[r],r))return this[r];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var r=this.length,n=t;n<r;n++)if(e===this[n])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,r=0;r<t;r++)if(!0===e(this[r],r))return r;return-1}),void 0===o.a&&(Object.values=function(e){return a()(e).map(function(t){return e[t]})});r("rdV6");var c=r("mvHQ"),l=r.n(c),d=(r("cwe7"),r("+BTi"),r("2X9z")),f=r.n(d),p=(r("GXEp"),r("mtrD")),v=r.n(p),m=(r("X+ky"),r("HJMx")),h=r.n(m),w=r("P9l9"),g=r("oAV5");n.default.use(h.a),n.default.use(v.a);var y={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=Object(g.c)();this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),g.a.unset("my_token"),g.a.unset("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if("forgetPwd"!==e.type){if(!t.userName.trim())return f.a.error("请输入用户名");if(!t.password.trim())return f.a.error("请输入密码")}if("login"===e.type)w.b.post(w.a.login,t).then(function(r){var n=r.data,s=void 0===n?{}:n,a=s.data||{};if("true"===s.success){var i={userName:t.userName,userId:a.userId};g.a.set("my_token",a.token,a.valid-36e5),g.a.set("userinfo",l()(i)),localStorage.setItem("userinfo",l()(i)),e.userinfo=i,e.close(),window.location.reload()}else f.a.error(s.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")});else if("register"===e.type){if(t.email=e.userEmail||"",e.userPwd!==e.userPwds)return f.a.error("两次密码不一致，请重新输入！");if(!t.email.trim())return f.a.error("请输入注册邮箱");w.b.post(w.a.register,t).then(function(t){var r=t.data,n=void 0===r?{}:r;"true"===n.success?(f.a.success("注册成功，请登录"),e.changeType()):f.a.error(n.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}else if("forgetPwd"===e.type){var r=e.userEmail||"";if(!r.trim())return f.a.error("请输入邮箱");w.b.post(w.a.forgetPwd,{email:r}).then(function(t){var r=t.data,n=void 0===r?{}:r;"true"===n.success?(f.a.success("发送成功"),e.changeType()):f.a.error(n.msg||"发送失败")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrap"},[r("div",{staticClass:"logo"}),e._v(" "),r("div",{staticClass:"login-box"},[r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[e._v("修改用户信息")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow"},[r("div",{staticClass:"login-container",class:{max:"register"===e.type,min:"forgetPwd"===e.type}},[r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"title"},[e._v("\n          "+e._s("login"===e.type?"请登录":"register"===e.type?"请注册":"发送电子邮件")+"\n          "),r("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),r("div",{staticClass:"login-inner"},["login"===e.type?[r("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}})]:e._e(),e._v(" "),"register"===e.type?[r("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),r("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),"forgetPwd"===e.type?[r("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),r("div",{staticClass:"footer-wrap"},[r("span",{on:{click:e.changeType}},[e._v(e._s("login"===e.type?"立即注册":"返回登录"))]),e._v(" "),"login"===e.type?r("span",{on:{click:e.forgetPwd}},[e._v("忘记密码?")]):e._e()]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s("login"===e.type?"登录":"register"===e.type?"注册":"发送"))])],2)])])])])},staticRenderFns:[]};var b=r("VU/8")(y,_,!1,function(e){r("vuYp")},null,null).exports,P={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,n){return r("div",{key:n,staticClass:"menu-item"},[r("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var C,N,E=[b,r("VU/8")(P,x,!1,function(e){r("Z6R4")},"data-v-478cdbc8",null).exports,r("VU/8")({name:"copyRight"},k,!1,function(e){r("b5Xa")},"data-v-fce46656",null).exports],R={install:function(e,t){E.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};C=n.default,N=new C,C.prototype.$bus={$on:function(){N.$on.apply(N,arguments)},$off:function(){N.$off.apply(N,arguments)},$once:function(){N.$once.apply(N,arguments)},$emit:function(){N.$emit.apply(N,arguments)}},n.default.config.productionTip=!1,n.default.use(R)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},gUzz:function(e,t){},myXt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),s=(r("cwe7"),r("+BTi"),r("2X9z")),a=r.n(s),i=(r("GXEp"),r("mtrD")),o=r.n(i),u=(r("X+ky"),r("HJMx")),c=r.n(u),l=r("P9l9"),d=r("oAV5"),f=r("162o");n.default.use(c.a),n.default.use(o.a);var p={name:"Main",data:function(){return{userPwd:"",userPwds:"",option:{}}},created:function(){this.option=Object(d.b)()},methods:{submit:function(){var e=this;return e.userPwd.trim()?e.userPwds.trim()?e.userPwd!==e.userPwds?a.a.error("两次输入密码不一致！"):void l.b.post(l.a.updatePwd,{userId:e.option.userId,password:e.userPwd,identifier:e.option.identifier}).then(function(e){var t=e.data,r=void 0===t?{}:t;"true"===r.success?(a.a.success("修改成功！"),Object(f.setTimeout)(function(){window.close()},1e3)):a.a.error(r.msg||"修改失败！")}).catch(function(){a.a.error("异常错误，请稍后重试！")}):a.a.error("请再次输入新密码！"):a.a.error("请输入新密码！")}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"box"},[r("div",{staticClass:"inner"},[r("el-input",{attrs:{type:"password",placeholder:"请输入新密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请再次输入新密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交修改")])],1)])])},staticRenderFns:[]};var m=r("VU/8")(p,v,!1,function(e){r("gUzz")},null,null).exports;r("S0Tp");n.default.component(m.name,m),new n.default({el:"#root",template:"<Main></Main>"})},oAV5:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return a});var n=function(){var e=location.href.split("?")[1];if(e){var t={};return e.split("&").forEach(function(e){var r=e.split("=")[0],n=e.split("=")[1];t[r]=n}),t}return{}},s={set:function(e,t,r,n,s,a){var i="";i+=encodeURIComponent(e)+"="+encodeURIComponent(t),r instanceof Date&&(i+="; expires="+r.toGMTString()),s&&(i+="; path="+s),n&&(i+="; domain="+n),a&&(i+="; secure"),document.cookie=i},get:function(e){var t=encodeURIComponent(e)+"=",r=document.cookie.indexOf(t),n="";if(r>-1){var s=document.cookie.indexOf(";",r);-1==s&&(s=document.cookie.length),n=decodeURIComponent(document.cookie.substring(r+t.length,s))}return n},unset:function(e,t,r,n){this.set(e,"",Date(0),t,r,n)}},a=function(){var e={};try{e=JSON.parse(s.get("userinfo"))||{}}catch(t){e={}}return e}},rdV6:function(e,t){},vuYp:function(e,t){}},[7]);