webpackJsonp([7],{"+BTi":function(e,t){},"7ce2":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),a=r("mvHQ"),n=r.n(a),i=(r("cwe7"),r("+BTi"),r("2X9z")),o=r.n(i),u=(r("GXEp"),r("mtrD")),l=r.n(u),c=(r("X+ky"),r("HJMx")),d=r.n(c),f=r("P9l9"),p=r("162o");s.default.use(d.a),s.default.use(l.a);var m={name:"Main",data:function(){return{userName:"",userPwd:"",userPwds:"",userEmail:"",userinfo:{}}},created:function(){this.userinfo=JSON.parse(localStorage.getItem("userinfo"))||{}},methods:{submit:function(){var e=this;return e.userName.trim()?e.userPwd.trim()?e.userPwds.trim()?e.userPwd!==e.userPwds?o.a.error("两次输入密码不一致！"):e.userEmail.trim()?void f.b.post(f.a.updatePwd,{userId:e.userinfo.userId,userName:e.userName,password:e.userPwd,email:e.userEmail}).then(function(t){var r=t.data,s=void 0===r?{}:r;if("true"===s.success){o.a.success("修改成功！");var a={userId:e.userinfo.userId,userName:e.userName,email:e.userEmail,token:e.userinfo.token};localStorage.setItem("userinfo",n()(a)),Object(p.setTimeout)(function(){window.history.back()},1e3)}else o.a.error(s.msg||"修改失败！")}).catch(function(){o.a.error("异常错误，请稍后重试！")}):o.a.error("请输入邮箱！"):o.a.error("请再次输入密码！"):o.a.error("请输入密码！"):o.a.error("请输入用户名！")}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"box"},[r("div",{staticClass:"inner"},[r("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请输入新密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请再次输入新密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),r("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交修改")])],1)])])},staticRenderFns:[]};var h=r("VU/8")(m,v,!1,function(e){r("GDi4")},null,null).exports;r("S0Tp");s.default.component(h.name,h),new s.default({el:"#root",template:"<Main></Main>"})},8:function(e,t,r){r("j1ja"),e.exports=r("7ce2")},GDi4:function(e,t){},GXEp:function(e,t){},P9l9:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i});var s=r("mtWM"),a=r.n(s).a.create();a.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e});var n="http://47.110.70.236:8010",i={login:n+"/user/login",register:n+"/user/register",addSample:n+"/sample/addSample",sampleList:n+"/sample/search",sampleListManage:n+"/sample/selectCond",sendEmail:n+"/trainResult/sendMail",trainResult:n+"/trainResult/search",forgetPwd:n+"/user/forget",updatePwd:n+"/user/updatePwd",updateUser:n+"/user/update",getUserList:n+"/user/search"}},S0Tp:function(e,t,r){"use strict";var s=r("7+uW"),a=r("fZjL"),n=r.n(a),i=r("gRE1"),o=r.n(i),u=window.location;u.origin||(u.origin=u.protocol+"//"+u.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,r=0;r<t;r++)if(!0===e(this[r],r))return this[r];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var r=this.length,s=t;s<r;s++)if(e===this[s])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,r=0;r<t;r++)if(!0===e(this[r],r))return r;return-1}),void 0===o.a&&(Object.values=function(e){return n()(e).map(function(t){return e[t]})});r("rdV6");var l=r("mvHQ"),c=r.n(l),d=(r("cwe7"),r("+BTi"),r("2X9z")),f=r.n(d),p=(r("GXEp"),r("mtrD")),m=r.n(p),v=(r("X+ky"),r("HJMx")),h=r.n(v),w=r("P9l9");s.default.use(h.a),s.default.use(m.a);var g={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if("forgetPwd"!==e.type){if(!t.userName.trim())return f.a.error("请输入用户名");if(!t.password.trim())return f.a.error("请输入密码")}if("login"===e.type)w.b.post(w.a.login,t).then(function(r){var s=r.data,a=void 0===s?{}:s,n=a.data||{};if("true"===a.success){var i={userName:t.userName,token:n.token,userId:n.userId};localStorage.setItem("userinfo",c()(i)),localStorage.setItem("token",n.token),e.userinfo=i,e.close(),window.location.reload()}else f.a.error(a.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")});else if("register"===e.type){if(t.email=e.userEmail||"",e.userPwd!==e.userPwds)return f.a.error("两次密码不一致，请重新输入！");if(!t.email.trim())return f.a.error("请输入注册邮箱");w.b.post(w.a.register,t).then(function(t){var r=t.data,s=void 0===r?{}:r;"true"===s.success?(f.a.success("注册成功，请登录"),e.changeType()):f.a.error(s.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}else if("forgetPwd"===e.type){var r=e.userEmail||"";if(!r.trim())return f.a.error("请输入邮箱");w.b.post(w.a.forgetPwd,{email:r}).then(function(t){var r=t.data,s=void 0===r?{}:r;"true"===s.success?(f.a.success("发送成功"),e.changeType()):f.a.error(s.msg||"发送失败")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}}}},y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrap"},[r("div",{staticClass:"logo"}),e._v(" "),r("div",{staticClass:"login-box"},[r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[e._v("修改用户信息")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[r("div",{staticClass:"login-container",class:{max:"register"===e.type,min:"forgetPwd"===e.type}},[r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"title"},[e._v("\n          "+e._s("login"===e.type?"请登录":"register"===e.type?"请注册":"发送电子邮件")+"\n          "),r("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),r("div",{staticClass:"login-inner"},["login"===e.type?[r("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}})]:e._e(),e._v(" "),"register"===e.type?[r("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),r("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),"forgetPwd"===e.type?[r("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),r("div",{staticClass:"footer-wrap"},[r("span",{on:{click:e.changeType}},[e._v(e._s("login"===e.type?"立即注册":"返回登录"))]),e._v(" "),"login"===e.type?r("span",{on:{click:e.forgetPwd}},[e._v("忘记密码?")]):e._e()]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s("login"===e.type?"登录":"register"===e.type?"注册":"发送"))])],2)])])])])},staticRenderFns:[]};var _=r("VU/8")(g,y,!1,function(e){r("wFPb")},null,null).exports,P={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},b={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,s){return r("div",{key:s,staticClass:"menu-item"},[r("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var x,k,E=[_,r("VU/8")(P,b,!1,function(e){r("Z6R4")},"data-v-478cdbc8",null).exports,r("VU/8")({name:"copyRight"},N,!1,function(e){r("b5Xa")},"data-v-fce46656",null).exports],C={install:function(e,t){E.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};x=s.default,k=new x,x.prototype.$bus={$on:function(){k.$on.apply(k,arguments)},$off:function(){k.$off.apply(k,arguments)},$once:function(){k.$once.apply(k,arguments)},$emit:function(){k.$emit.apply(k,arguments)}},s.default.config.productionTip=!1,s.default.use(C)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},rdV6:function(e,t){},wFPb:function(e,t){}},[8]);