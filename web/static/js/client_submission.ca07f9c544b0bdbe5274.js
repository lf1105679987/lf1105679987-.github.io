webpackJsonp([6],{"+BTi":function(e,t){},3:function(e,t,a){a("j1ja"),e.exports=a("X9xD")},Dte2:function(e,t){},GXEp:function(e,t){},P9l9:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var r=a("mtWM"),n=a.n(r).a.create();n.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e});var s="http://47.110.70.236:8010",i={login:s+"/user/login",register:s+"/user/register",addSample:s+"/sample/addSample",sampleList:s+"/sample/search",sampleListManage:s+"/sample/selectCond",sendEmail:s+"/trainResult/sendMail",trainResult:s+"/trainResult/search",forgetPwd:s+"/user/forget",updatePwd:s+"/user/updatePwd",updateUser:s+"/user/update",getUserList:s+"/user/search"}},S0Tp:function(e,t,a){"use strict";var r=a("7+uW"),n=a("fZjL"),s=a.n(n),i=a("gRE1"),o=a.n(i),l=window.location;l.origin||(l.origin=l.protocol+"//"+l.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return this[a];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var a=this.length,r=t;r<a;r++)if(e===this[r])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return a;return-1}),void 0===o.a&&(Object.values=function(e){return s()(e).map(function(t){return e[t]})});a("rdV6");var u=a("mvHQ"),c=a.n(u),d=(a("cwe7"),a("+BTi"),a("2X9z")),f=a.n(d),p=(a("GXEp"),a("mtrD")),h=a.n(p),m=(a("X+ky"),a("HJMx")),v=a.n(m),g=a("P9l9");r.default.use(v.a),r.default.use(h.a);var w={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if("forgetPwd"!==e.type){if(!t.userName.trim())return f.a.error("请输入用户名");if(!t.password.trim())return f.a.error("请输入密码")}if("login"===e.type)g.b.post(g.a.login,t).then(function(a){var r=a.data,n=void 0===r?{}:r,s=n.data||{};if("true"===n.success){var i={userName:t.userName,token:s.token,userId:s.userId};localStorage.setItem("userinfo",c()(i)),localStorage.setItem("token",s.token),e.userinfo=i,e.close(),window.location.reload()}else f.a.error(n.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")});else if("register"===e.type){if(t.email=e.userEmail||"",e.userPwd!==e.userPwds)return f.a.error("两次密码不一致，请重新输入！");if(!t.email.trim())return f.a.error("请输入注册邮箱");g.b.post(g.a.register,t).then(function(t){var a=t.data,r=void 0===a?{}:a;"true"===r.success?(f.a.success("注册成功，请登录"),e.changeType()):f.a.error(r.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}else if("forgetPwd"===e.type){var a=e.userEmail||"";if(!a.trim())return f.a.error("请输入邮箱");g.b.post(g.a.forgetPwd,{email:a}).then(function(t){var a=t.data,r=void 0===a?{}:a;"true"===r.success?(f.a.success("发送成功"),e.changeType()):f.a.error(r.msg||"发送失败")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("div",{staticClass:"logo"}),e._v(" "),a("div",{staticClass:"login-box"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[e._v("修改用户信息")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[a("div",{staticClass:"login-container",class:{max:"register"===e.type,min:"forgetPwd"===e.type}},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"title"},[e._v("\n          "+e._s("login"===e.type?"请登录":"register"===e.type?"请注册":"发送电子邮件")+"\n          "),a("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"login-inner"},["login"===e.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}})]:e._e(),e._v(" "),"register"===e.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),"forgetPwd"===e.type?[a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),a("div",{staticClass:"footer-wrap"},[a("span",{on:{click:e.changeType}},[e._v(e._s("login"===e.type?"立即注册":"返回登录"))]),e._v(" "),"login"===e.type?a("span",{on:{click:e.forgetPwd}},[e._v("忘记密码?")]):e._e()]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s("login"===e.type?"登录":"register"===e.type?"注册":"发送"))])],2)])])])])},staticRenderFns:[]};var y=a("VU/8")(w,_,!1,function(e){a("wFPb")},null,null).exports,b={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,r){return a("div",{key:r,staticClass:"menu-item"},[a("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var C,N,k=[y,a("VU/8")(b,P,!1,function(e){a("Z6R4")},"data-v-478cdbc8",null).exports,a("VU/8")({name:"copyRight"},x,!1,function(e){a("b5Xa")},"data-v-fce46656",null).exports],S={install:function(e,t){k.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};C=r.default,N=new C,C.prototype.$bus={$on:function(){N.$on.apply(N,arguments)},$off:function(){N.$off.apply(N,arguments)},$once:function(){N.$once.apply(N,arguments)},$emit:function(){N.$emit.apply(N,arguments)}},r.default.config.productionTip=!1,r.default.use(S)},"X+ky":function(e,t){},X9xD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n=(a("cwe7"),a("+BTi"),a("2X9z")),s=a.n(n),i=(a("GXEp"),a("mtrD")),o=a.n(i),l=(a("ylrw"),a("6oiW")),u=a.n(l),c=(a("Dte2"),a("q4le")),d=a.n(c),f=(a("isE6"),a("LR6y")),p=a.n(f),h=(a("X+ky"),a("HJMx")),m=a.n(h),v=a("P9l9");r.default.use(m.a),r.default.use(p.a),r.default.use(d.a),r.default.use(u.a),r.default.use(o.a);var g={name:"Main",data:function(){return{currentPage:1,menu:[{text:"EPIC",href:"#"},{text:"Cltation",href:"#"},{text:"Help",href:"#"}],tableData:[],total:0,pageSize:20,userinfo:{}}},filters:{filterStatus:function(e){return{0:"训练中",1:"成功","-1":"失败"}[e]}},created:function(){this.userinfo=JSON.parse(localStorage.getItem("userinfo"))||{}},mounted:function(){this.getData()},methods:{LookAt:function(e){location.href="./client_result.html?sampleId="+e.sampleId},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},getData:function(){var e=this,t={userId:this.userinfo.userId,page:this.currentPage,pageSize:this.pageSize};v.b.post(v.a.sampleList,t).then(function(t){var a=t.data,r=void 0===a?{}:a;if("true"===r.success){var n=r.data||{};e.total=Number(n.totalRows||0),e.tableData=n.records||[]}}).catch(function(){s.a.error("异常错误，请稍后重试！")})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"home"},[a("div",{staticClass:"main"},[a("Header"),e._v(" "),a("Menu",{attrs:{data:e.menu}}),e._v(" "),a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("div",{staticClass:"table-wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{align:"center",prop:"sampleName",label:"SampleName"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"allele",label:"Allele"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Length"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.length)+" mer peptides")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("filterStatus")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"Createtime"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"Detail"},scopedSlots:e._u([{key:"default",fn:function(t){return["-1"===t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.LookAt(t.row)}}},[e._v("查看结果")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagenation-wrap"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("copyRight")],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("Submission")])])}]},_=a("VU/8")(g,w,!1,null,null,null).exports;a("S0Tp");r.default.component(_.name,_),new r.default({el:"#root",template:"<Main></Main>"})},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},isE6:function(e,t){},rdV6:function(e,t){},wFPb:function(e,t){},ylrw:function(e,t){}},[3]);