webpackJsonp([2],{"+BTi":function(e,t){},4:function(e,t,a){a("j1ja"),e.exports=a("ofq5")},Dte2:function(e,t){},GXEp:function(e,t){},P9l9:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return n});var r=a("mtWM"),s=a.n(r).a.create();s.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e});var i=globalConfig.proxy,n={login:i+"/user/login",register:i+"/user/register",addSample:i+"/sample/addSample",sampleList:i+"/sample/search",sampleListManage:i+"/sample/selectCond",sendEmail:i+"/trainResult/sendMail",trainResult:i+"/trainResult/search",forgetPwd:i+"/user/forget",updatePwd:i+"/user/updatePwd",updateUser:i+"/user/update",getUserList:i+"/user/search"}},S0Tp:function(e,t,a){"use strict";var r=a("7+uW"),s=a("fZjL"),i=a.n(s),n=a("gRE1"),o=a.n(n),l=window.location;l.origin||(l.origin=l.protocol+"//"+l.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return this[a];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var a=this.length,r=t;r<a;r++)if(e===this[r])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return a;return-1}),void 0===o.a&&(Object.values=function(e){return i()(e).map(function(t){return e[t]})});a("rdV6");var u=a("mvHQ"),c=a.n(u),d=(a("cwe7"),a("+BTi"),a("2X9z")),p=a.n(d),f=(a("GXEp"),a("mtrD")),m=a.n(f),v=(a("X+ky"),a("HJMx")),h=a.n(v),g=a("P9l9");r.default.use(h.a),r.default.use(m.a);var w={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if("forgetPwd"!==e.type){if(!t.userName.trim())return p.a.error("请输入用户名");if(!t.password.trim())return p.a.error("请输入密码")}if("login"===e.type)g.b.post(g.a.login,t).then(function(a){var r=a.data,s=void 0===r?{}:r,i=s.data||{};if("true"===s.success){var n={userName:t.userName,token:i.token,userId:i.userId};localStorage.setItem("userinfo",c()(n)),localStorage.setItem("token",i.token),e.userinfo=n,e.close(),window.location.reload()}else p.a.error(s.msg||"注册失败！")}).catch(function(){p.a.error("异常错误，请稍后重试！")});else if("register"===e.type){if(t.email=e.userEmail||"",e.userPwd!==e.userPwds)return p.a.error("两次密码不一致，请重新输入！");if(!t.email.trim())return p.a.error("请输入注册邮箱");g.b.post(g.a.register,t).then(function(t){var a=t.data,r=void 0===a?{}:a;"true"===r.success?(p.a.success("注册成功，请登录"),e.changeType()):p.a.error(r.msg||"注册失败！")}).catch(function(){p.a.error("异常错误，请稍后重试！")})}else if("forgetPwd"===e.type){var a=e.userEmail||"";if(!a.trim())return p.a.error("请输入邮箱");g.b.post(g.a.forgetPwd,{email:a}).then(function(t){var a=t.data,r=void 0===a?{}:a;"true"===r.success?(p.a.success("发送成功"),e.changeType()):p.a.error(r.msg||"发送失败")}).catch(function(){p.a.error("异常错误，请稍后重试！")})}}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("div",{staticClass:"logo"}),e._v(" "),a("div",{staticClass:"login-box"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[e._v("修改用户信息")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow"},[a("div",{staticClass:"login-container",class:{max:"register"===e.type,min:"forgetPwd"===e.type}},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"title"},[e._v("\n          "+e._s("login"===e.type?"请登录":"register"===e.type?"请注册":"发送电子邮件")+"\n          "),a("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"login-inner"},["login"===e.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}})]:e._e(),e._v(" "),"register"===e.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),"forgetPwd"===e.type?[a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),a("div",{staticClass:"footer-wrap"},[a("span",{on:{click:e.changeType}},[e._v(e._s("login"===e.type?"立即注册":"返回登录"))]),e._v(" "),"login"===e.type?a("span",{on:{click:e.forgetPwd}},[e._v("忘记密码?")]):e._e()]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s("login"===e.type?"登录":"register"===e.type?"注册":"发送"))])],2)])])])])},staticRenderFns:[]};var _=a("VU/8")(w,y,!1,function(e){a("cg0Q")},null,null).exports,b={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,r){return a("div",{key:r,staticClass:"menu-item"},[a("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var x,k,N=[_,a("VU/8")(b,C,!1,function(e){a("Z6R4")},"data-v-478cdbc8",null).exports,a("VU/8")({name:"copyRight"},P,!1,function(e){a("b5Xa")},"data-v-fce46656",null).exports],E={install:function(e,t){N.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};x=r.default,k=new x,x.prototype.$bus={$on:function(){k.$on.apply(k,arguments)},$off:function(){k.$off.apply(k,arguments)},$once:function(){k.$once.apply(k,arguments)},$emit:function(){k.$emit.apply(k,arguments)}},r.default.config.productionTip=!1,r.default.use(E)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cg0Q:function(e,t){},cwe7:function(e,t){},isE6:function(e,t){},oAV5:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(){var e=location.href.split("?")[1];if(e){var t={};return e.split("&").forEach(function(e){var a=e.split("=")[0],r=e.split("=")[1];t[a]=r}),t}return{}}},ofq5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),s=(a("cwe7"),a("+BTi"),a("2X9z")),i=a.n(s),n=(a("ylrw"),a("6oiW")),o=a.n(n),l=(a("Dte2"),a("q4le")),u=a.n(l),c=(a("isE6"),a("LR6y")),d=a.n(c),p=(a("X+ky"),a("HJMx")),f=a.n(p),m=a("P9l9"),v=a("oAV5");r.default.use(f.a),r.default.use(d.a),r.default.use(u.a),r.default.use(o.a);var h={name:"Main",data:function(){return{currentPage:1,menu:[{text:"Submission",href:"./manage_submission.html"}],tableData:[],total:0,pageSize:20,userinfo:{},activeRow:{},email:""}},created:function(){this.userinfo=JSON.parse(localStorage.getItem("userinfo"))||{},this.option=Object(v.a)()},mounted:function(){this.getData()},methods:{downLoad:function(){if(""===this.email.trim())return!1;this.activeRow&&this.activeRow.sampleId?i.a.error("暂无下载接口！"):i.a.error("请选择要下载的结果！")},sendEmail:function(){if(""===this.email.trim())return!1;this.activeRow&&this.activeRow.sampleId?m.b.post(m.a.sendEmail,{email:this.email,sampleId:this.activeRow.sampleId}).then(function(e){"true"===e.data.success?i.a.success("发送成功！"):i.a.error("发送失败！")}).catch(function(){i.a.error("异常错误,请稍后重试！")}):i.a.error("请选择要发送的结果！")},rowClick:function(e,t,a){this.activeRow=e},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},getData:function(){var e=this,t={sampleId:this.option.sampleId,page:this.currentPage,pageSize:this.pageSize};m.b.post(m.a.trainResult,t).then(function(t){var a=t.data,r=void 0===a?{}:a;if("true"===r.success){var s=r.data||{};e.total=Number(s.totalRows||0),e.tableData=s.records||[]}else i.a.error(r.msg||"异常错误，请稍后重试！")}).catch(function(){i.a.error("异常错误，请稍后重试！")})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"home"},[a("div",{staticClass:"main"},[a("Header"),e._v(" "),a("Menu",{attrs:{data:e.menu}}),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"top"},[a("span",[e._v("Result")]),e._v(" "),a("div",{staticClass:"oprate-wrap"},[a("div",{staticClass:"email"},[a("el-input",{attrs:{size:"mini",placeholder:"Enter E-Mail",clearable:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("span",{staticClass:"oprate-btn",class:{disabled:""===e.email.trim()},on:{click:e.sendEmail}},[e._v("Send")]),e._v(" "),a("span",{staticClass:"oprate-btn",class:{disabled:""===e.email.trim()},on:{click:e.downLoad}},[e._v("Download")])])]),e._v(" "),a("div",{staticClass:"table-wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:""},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{align:"center",prop:"peptide",label:"Polypeptide"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"present",label:"Typeing"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"score",label:"Score"}})],1),e._v(" "),a("div",{staticClass:"pagenation-wrap"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("copyRight")],1)])])},staticRenderFns:[]},w=a("VU/8")(h,g,!1,null,null,null).exports;a("S0Tp");r.default.component(w.name,w),new r.default({el:"#root",template:"<Main></Main>"})},rdV6:function(e,t){},ylrw:function(e,t){}},[4]);