webpackJsonp([3],{"+BTi":function(e,t){},5:function(e,t,a){a("j1ja"),e.exports=a("Fu1l")},Dte2:function(e,t){},Fu1l:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=(a("cwe7"),a("+BTi"),a("2X9z")),s=a.n(r),i=(a("GXEp"),a("mtrD")),o=a.n(i),u=(a("ylrw"),a("6oiW")),l=a.n(u),c=(a("Dte2"),a("q4le")),d=a.n(c),f=(a("isE6"),a("LR6y")),p=a.n(f),m=(a("X+ky"),a("HJMx")),v=a.n(m),h=a("P9l9"),g=a("oAV5");n.default.use(v.a),n.default.use(p.a),n.default.use(d.a),n.default.use(l.a),n.default.use(o.a);var w={name:"Main",data:function(){return{currentPage:1,menu:[],tableData:[],total:0,pageSize:20,userinfo:{}}},filters:{filterStatus:function(e){return{0:"processing",1:"success","-1":"failed"}[e]}},created:function(){this.userinfo=Object(g.c)()},mounted:function(){this.getData()},methods:{LookAt:function(e){location.href="./manage_result.html?sampleId="+e.sampleId},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},getData:function(){var e=this,t={userId:this.userinfo.userId,userName:this.userinfo.userName,page:this.currentPage,pageSize:this.pageSize};h.b.post(h.a.sampleListManage,t).then(function(t){var a=t.data,n=void 0===a?{}:a;if("true"===n.success){var r=n.data||{};e.total=Number(r.totalRows||0),e.tableData=r.records||[]}else s.a.error(n.msg||"异常错误，请稍后重试！")}).catch(function(){s.a.error("异常错误，请稍后重试！")})}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"home"},[a("div",{staticClass:"main"},[a("Header"),e._v(" "),a("Menu",{attrs:{data:e.menu}}),e._v(" "),a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("div",{staticClass:"table-wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{align:"center",label:"IP"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("暂无ip字段")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sampleName",label:"SampleName"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"allele",label:"Allele"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Length"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.length)+" mer peptides")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",label:"Status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("filterStatus")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"createTime",width:"180",label:"Createtime"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"Detail"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){e.LookAt(t.row)}}},[e._v("detail")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagenation-wrap"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("copyRight")],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("Submission")])])}]},y=a("VU/8")(w,_,!1,null,null,null).exports;a("S0Tp");n.default.component(y.name,y),new n.default({el:"#root",template:"<Main></Main>"})},GXEp:function(e,t){},P9l9:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return u});var n=a("mtWM"),r=a.n(n),s=a("oAV5"),i=r.a.create();i.interceptors.request.use(function(e){var t=s.a.get("my_token");return e.headers.Authorization=t,e});var o=globalConfig.proxy,u={login:o+"/user/login",register:o+"/user/register",addSample:o+"/sample/addSample",sampleList:o+"/sample/search",sampleListManage:o+"/sample/selectCond",sendEmail:o+"/trainResult/sendMail",trainResult:o+"/trainResult/search",forgetPwd:o+"/user/forget",updatePwd:o+"/user/updatePwd",updateUser:o+"/user/update",getUserList:o+"/user/search"}},S0Tp:function(e,t,a){"use strict";var n=a("7+uW"),r=a("fZjL"),s=a.n(r),i=a("gRE1"),o=a.n(i),u=window.location;u.origin||(u.origin=u.protocol+"//"+u.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return this[a];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var a=this.length,n=t;n<a;n++)if(e===this[n])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return a;return-1}),void 0===o.a&&(Object.values=function(e){return s()(e).map(function(t){return e[t]})});a("rdV6");var l=a("mvHQ"),c=a.n(l),d=(a("cwe7"),a("+BTi"),a("2X9z")),f=a.n(d),p=(a("GXEp"),a("mtrD")),m=a.n(p),v=(a("X+ky"),a("HJMx")),h=a.n(v),g=a("P9l9"),w=a("oAV5");n.default.use(h.a),n.default.use(m.a);var _={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=Object(w.c)();this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),w.a.unset("my_token"),w.a.unset("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if("forgetPwd"!==e.type){if(!t.userName.trim())return f.a.error("请输入用户名");if(!t.password.trim())return f.a.error("请输入密码")}if("login"===e.type)g.b.post(g.a.login,t).then(function(a){var n=a.data,r=void 0===n?{}:n,s=r.data||{};if("true"===r.success){var i={userName:t.userName,userId:s.userId};w.a.set("my_token",s.token,s.valid-36e5),w.a.set("userinfo",c()(i)),localStorage.setItem("userinfo",c()(i)),e.userinfo=i,e.close(),window.location.reload()}else f.a.error(r.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")});else if("register"===e.type){if(t.email=e.userEmail||"",e.userPwd!==e.userPwds)return f.a.error("两次密码不一致，请重新输入！");if(!t.email.trim())return f.a.error("请输入注册邮箱");g.b.post(g.a.register,t).then(function(t){var a=t.data,n=void 0===a?{}:a;"true"===n.success?(f.a.success("注册成功，请登录"),e.changeType()):f.a.error(n.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}else if("forgetPwd"===e.type){var a=e.userEmail||"";if(!a.trim())return f.a.error("请输入邮箱");g.b.post(g.a.forgetPwd,{email:a}).then(function(t){var a=t.data,n=void 0===a?{}:a;"true"===n.success?(f.a.success("发送成功"),e.changeType()):f.a.error(n.msg||"发送失败")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("div",{staticClass:"logo"}),e._v(" "),a("div",{staticClass:"login-box"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[e._v("修改用户信息")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow"},[a("div",{staticClass:"login-container",class:{max:"register"===e.type,min:"forgetPwd"===e.type}},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"title"},[e._v("\n          "+e._s("login"===e.type?"请登录":"register"===e.type?"请注册":"发送电子邮件")+"\n          "),a("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"login-inner"},["login"===e.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}})]:e._e(),e._v(" "),"register"===e.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.userPwds,callback:function(t){e.userPwds=t},expression:"userPwds"}}),e._v(" "),a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),"forgetPwd"===e.type?[a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})]:e._e(),e._v(" "),a("div",{staticClass:"footer-wrap"},[a("span",{on:{click:e.changeType}},[e._v(e._s("login"===e.type?"立即注册":"返回登录"))]),e._v(" "),"login"===e.type?a("span",{on:{click:e.forgetPwd}},[e._v("忘记密码?")]):e._e()]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s("login"===e.type?"登录":"register"===e.type?"注册":"发送"))])],2)])])])])},staticRenderFns:[]};var b=a("VU/8")(_,y,!1,function(e){a("vuYp")},null,null).exports,C={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,n){return a("div",{key:n,staticClass:"menu-item"},[a("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var P,N,E=[b,a("VU/8")(C,k,!1,function(e){a("Z6R4")},"data-v-478cdbc8",null).exports,a("VU/8")({name:"copyRight"},x,!1,function(e){a("b5Xa")},"data-v-fce46656",null).exports],S={install:function(e,t){E.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};P=n.default,N=new P,P.prototype.$bus={$on:function(){N.$on.apply(N,arguments)},$off:function(){N.$off.apply(N,arguments)},$once:function(){N.$once.apply(N,arguments)},$emit:function(){N.$emit.apply(N,arguments)}},n.default.config.productionTip=!1,n.default.use(S)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},isE6:function(e,t){},oAV5:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return s});var n=function(){var e=location.href.split("?")[1];if(e){var t={};return e.split("&").forEach(function(e){var a=e.split("=")[0],n=e.split("=")[1];t[a]=n}),t}return{}},r={set:function(e,t,a,n,r,s){var i="";i+=encodeURIComponent(e)+"="+encodeURIComponent(t),a instanceof Date&&(i+="; expires="+a.toGMTString()),r&&(i+="; path="+r),n&&(i+="; domain="+n),s&&(i+="; secure"),document.cookie=i},get:function(e){var t=encodeURIComponent(e)+"=",a=document.cookie.indexOf(t),n="";if(a>-1){var r=document.cookie.indexOf(";",a);-1==r&&(r=document.cookie.length),n=decodeURIComponent(document.cookie.substring(a+t.length,r))}return n},unset:function(e,t,a,n){this.set(e,"",Date(0),t,a,n)}},s=function(){var e={};try{e=JSON.parse(r.get("userinfo"))||{}}catch(t){e={}}return e}},rdV6:function(e,t){},vuYp:function(e,t){},ylrw:function(e,t){}},[5]);