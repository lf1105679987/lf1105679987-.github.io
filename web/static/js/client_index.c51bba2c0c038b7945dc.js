webpackJsonp([1],{"+BTi":function(t,e){},0:function(t,e,a){a("j1ja"),t.exports=a("uIUJ")},CScO:function(t,e,a){t.exports=a.p+"static/img/a2.7c09472.jpg"},GXEp:function(t,e){},I4nB:function(t,e){},Kf7j:function(t,e,a){t.exports=a.p+"static/img/a1.e8f9590.jpg"},P9l9:function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return r});var s=a("mtWM"),i=a.n(s).a.create();i.interceptors.request.use(function(t){return t.headers.Authorization=localStorage.getItem("token"),t});var n="http://47.110.70.236:8080",r={login:n+"/user/login",register:n+"/user/register",addSample:n+"/sample/addSample",sampleList:n+"/sample/search",sampleListManage:n+"/sample/selectCond",sendEmail:n+"/trainResult/sendMail",trainResult:n+"/trainResult/search",forgetPwd:n+"/user/forget",updatePwd:n+"/user/updatePwd",updateUser:n+"/user/update",getUserList:n+"/user/search"}},S0Tp:function(t,e,a){"use strict";var s=a("7+uW"),i=a("fZjL"),n=a.n(i),r=a("gRE1"),o=a.n(r),l=window.location;l.origin||(l.origin=l.protocol+"//"+l.host),void 0===Array.prototype.find&&(Array.prototype.find=function(t){for(var e=this.length,a=0;a<e;a++)if(!0===t(this[a],a))return this[a];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e<0&&(e+=this.length);for(var a=this.length,s=e;s<a;s++)if(t===this[s])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(t){for(var e=this.length,a=0;a<e;a++)if(!0===t(this[a],a))return a;return-1}),void 0===o.a&&(Object.values=function(t){return n()(t).map(function(e){return t[e]})});a("rdV6");var c=a("mvHQ"),u=a.n(c),d=(a("cwe7"),a("+BTi"),a("2X9z")),p=a.n(d),v=(a("GXEp"),a("mtrD")),f=a.n(v),m=(a("X+ky"),a("HJMx")),h=a.n(m),_=a("P9l9");s.default.use(h.a),s.default.use(f.a);var g={name:"Header",data:function(){return{userinfo:{},type:"login",showModal:!1,userName:"",userPwd:"",userPwds:"",userEmail:""}},created:function(){var t=this;t.$bus.$on("openLogin",function(e){t.toLogin()})},mounted:function(){var t=this,e=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=e,t.$nextTick(function(){document.addEventListener("keyup",function(e){27==e.keyCode&&t.close()})})},methods:{forgetPwd:function(){this.type="forgetPwd"},loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type="register"},toLogin:function(){this.showModal=!0,this.type="login"},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type="login"===this.type?"register":"login"},submit:function(){var t=this,e={userName:t.userName||"",password:t.userPwd||""};if("forgetPwd"!==t.type){if(!e.userName.trim())return p.a.error("请输入用户名");if(!e.password.trim())return p.a.error("请输入密码")}if("login"===t.type)_.b.post(_.a.login,e).then(function(a){var s=a.data,i=void 0===s?{}:s,n=i.data||{};if("true"===i.success){var r={userName:e.userName,token:n.token,userId:n.userId};localStorage.setItem("userinfo",u()(r)),localStorage.setItem("token",n.token),t.userinfo=r,t.close(),window.location.reload()}else p.a.error(i.msg||"注册失败！")}).catch(function(){p.a.error("异常错误，请稍后重试！")});else if("register"===t.type){if(e.email=t.userEmail||"",t.userPwd!==t.userPwds)return p.a.error("两次密码不一致，请重新输入！");if(!e.email.trim())return p.a.error("请输入注册邮箱");_.b.post(_.a.register,e).then(function(e){var a=e.data,s=void 0===a?{}:a;"true"===s.success?(p.a.success("注册成功，请登录"),t.changeType()):p.a.error(s.msg||"注册失败！")}).catch(function(){p.a.error("异常错误，请稍后重试！")})}else if("forgetPwd"===t.type){var a=t.userEmail||"";if(!a.trim())return p.a.error("请输入邮箱");_.b.post(_.a.forgetPwd,{email:a}).then(function(e){var a=e.data,s=void 0===a?{}:a;"true"===s.success?(p.a.success("发送成功"),t.changeType()):p.a.error(s.msg||"发送失败")}).catch(function(){p.a.error("异常错误，请稍后重试！")})}}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-wrap"},[a("div",{staticClass:"logo"}),t._v(" "),a("div",{staticClass:"login-box"},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.userinfo.userName,expression:"userinfo.userName"}],staticStyle:{"text-decoration":"underline"},attrs:{href:"./user_center.html"}},[t._v("修改用户信息")]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[t._v("您好，"+t._s(t.userinfo.userName)+"!")]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:t.loginout}},[t._v("退出登录")]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:t.toLogin}},[t._v("请登录")]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:t.toRegister}},[t._v("请注册")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"login-shadow"},[a("div",{staticClass:"login-container",class:{max:"register"===t.type,min:"forgetPwd"===t.type}},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"title"},[t._v("\n          "+t._s("login"===t.type?"请登录":"register"===t.type?"请注册":"发送电子邮件")+"\n          "),a("div",{staticClass:"close",on:{click:t.close}})]),t._v(" "),a("div",{staticClass:"login-inner"},["login"===t.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:t.userPwd,callback:function(e){t.userPwd=e},expression:"userPwd"}})]:t._e(),t._v(" "),"register"===t.type?[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:t.userPwd,callback:function(e){t.userPwd=e},expression:"userPwd"}}),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:t.userPwds,callback:function(e){t.userPwds=e},expression:"userPwds"}}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})]:t._e(),t._v(" "),"forgetPwd"===t.type?[a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})]:t._e(),t._v(" "),a("div",{staticClass:"footer-wrap"},[a("span",{on:{click:t.changeType}},[t._v(t._s("login"===t.type?"立即注册":"返回登录"))]),t._v(" "),"login"===t.type?a("span",{on:{click:t.forgetPwd}},[t._v("忘记密码?")]):t._e()]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s("login"===t.type?"登录":"register"===t.type?"注册":"发送"))])],2)])])])])},staticRenderFns:[]};var A=a("VU/8")(g,C,!1,function(t){a("cg0Q")},null,null).exports,x={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-wrap"},t._l(t.data,function(e,s){return a("div",{key:s,staticClass:"menu-item"},[a("a",{attrs:{href:e.href}},[t._v(t._s(e.text))])])}))},staticRenderFns:[]};var L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright-wrap"},[e("div",{staticClass:"copyright-inner"},[e("div",{staticClass:"line"}),this._v(" "),e("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var H,y,B=[A,a("VU/8")(x,w,!1,function(t){a("Z6R4")},"data-v-478cdbc8",null).exports,a("VU/8")({name:"copyRight"},L,!1,function(t){a("b5Xa")},"data-v-fce46656",null).exports],b={install:function(t,e){B.forEach(function(e){t.component(e.name,e)}),t.mixin({created:function(){}})}};H=s.default,y=new H,H.prototype.$bus={$on:function(){y.$on.apply(y,arguments)},$off:function(){y.$off.apply(y,arguments)},$once:function(){y.$once.apply(y,arguments)},$emit:function(){y.$emit.apply(y,arguments)}},s.default.config.productionTip=!1,s.default.use(b)},"X+ky":function(t,e){},Z6R4:function(t,e){},b5Xa:function(t,e){},cDSy:function(t,e){},cg0Q:function(t,e){},cwe7:function(t,e){},iMWg:function(t,e){},q4k3:function(t,e){},rdV6:function(t,e){},uIUJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=(a("cwe7"),a("+BTi"),a("2X9z")),n=a.n(i),r=(a("GXEp"),a("mtrD")),o=a.n(r),l=(a("I4nB"),a("STLj")),c=a.n(l),u=(a("cDSy"),a("e0Bm")),d=a.n(u),p=JSON.parse('{"A0101":[9,10,11],"A0201":[9,10,11],"A0203":[9,10],"A0204":[9,10,11],"A0207":[9,10,11],"A0301":[9,10,11],"A2402":[9,10,11],"A2902":[9,10],"A3101":[9,10,11],"A6802":[9,10,11],"B3501":[9,10,11],"B4402":[9,10,11],"B4403":[9,10,11],"B5101":[8,9],"B5401":[9,10,11],"B5701":[9,10,11],"A1101":[9,10,11],"A3201":[9],"B0702":[9,10,11],"B1501":[9,10,11],"B4001":[9,10,11],"C0102":[8,9,10],"C0202":[8,9,10],"C0303":[9],"C0304":[8,9,10],"C0401":[8,9,10],"C0501":[8,9,10],"C0602":[9],"C0701":[9],"C0702":[8,9],"C0802":[8,9,10],"C1203":[8,9],"C1402":[8,9,10],"C1502":[8,9],"C1601":[8,9,10],"C1701":[8,9],"A2301":[9,10],"A2501":[9,10],"A2601":[9],"A2901":[9],"A6801":[9,10,11],"B0801":[8,9],"B1402":[9],"B1518":[8,9,10],"B1801":[8,9,10],"B2701":[9,10],"B2705":[9,10,11],"B3503":[9,10,11],"B3508":[9,10],"B3701":[9],"B3801":[9],"B3901":[8,9,10],"B3906":[8,9,10],"B3924":[8,9],"B4002":[9,10,11],"B4101":[9,10],"B4501":[9,10,11],"B4901":[9],"B5001":[9],"B5501":[9],"B5601":[9],"B7301":[9],"A3301":[8,9],"B1302":[9,10],"B1503":[9],"A3303":[9,10,11]}'),v={onLine:{module:"EPIC Online：",context:"Epitope Presenttation Integrated prediCtion, 简称EPIC。基于多肽疫苗的个体化免疫治疗是当今治疗癌症的有效手段，而抗原呈递的准确预测是设计出高效的多肽疫苗的关键，为此我们开发了这款软件。此外，该软件还可以用于其他T细胞表位的预测。EPICv2.0是基于EPICv1.0(原EPIC)的改进，增加了对中国人群常见分型A1101,A3201，B0702,B4402的新抗原预测支持，增加了同时预测多种分型图和多种长度的功能，准确率也比EPICv1.0有所提高。"},citaions:{module:"Citations：",content:{title:"For publicction of results, please cite",paragraph:[{content:["NetMHCpan-4.0:Imporoved Peptide-MHC Class I Interaction Predictions Integrating Eluted Ligand and Peptide Binding Affinity Data","Vanessa Jurtz,Sinu Paul,Massimo Andreatta,Paolo Marcatili,Bjoem Peters adn Morten NieIssen","The Journal of Immunology(2017)ji700893;DOI:10.4049/jimmunol.1700893"],relative:{panle:"",hrefs:[{text:"Full text",href:"#"},{text:"[PDF]",href:"#"}]}},{content:["NetMHCpan-3.0:Imporoved prediction of binding to MHC class I molecules integrating information from multiple receptor and peptide length data sets Morten Nielsen and Massime Andreatta","Genome Medicine(2016):8:33"],relative:{panel:"",hrefs:[{text:"Full text",href:"#"},{text:"[PDF]",href:"#"}]}},{content:["NetMHCpan-3.0:Imporoved prediction of binding to MHC class I molecules integrating information from multiple receptor and peptide length data sets Morten Nielsen and Massime Andreatta","Genome Medicine(2016):8:33"],relative:{panel:"PMID：",hrefs:[{text:"Full text",href:"#"},{text:"[PDF]",href:"#"}]}}]}},help:{module:"Help：",table_list:[{label:"Training data",download:"#"},{label:"Test data",download:"#"},{label:"EPIC data",download:"#"},{label:"Document",download:"#"}],contact:"Contact us: p_XXX@genomics.cn"}},f={name:"TextareaForDropTxt",props:{change:{type:Function,default:function(){}},placeholder:{type:String,default:"输入或拖拽.txt文件至框内"},tips:{type:String,default:"some tips"}},data:function(){return{text:""}},created:function(){var t=this;this.$bus.$on("clearInput",function(e){t.text=""})},mounted:function(){var t=this;window.onload=function(){document.addEventListener("dragover",function(t){t.stopPropagation(),t.preventDefault()},!1),document.addEventListener("drop",function(t){t.stopPropagation(),t.preventDefault()},!1)},t.$nextTick(function(){var e=t.$refs.oDrop;e.addEventListener("dragenter",function(t){t.stopPropagation(),t.preventDefault()},!1),e.addEventListener("dragover",function(t){t.stopPropagation(),t.preventDefault()},!1),e.addEventListener("drop",function(e){e.stopPropagation(),e.preventDefault();var a=e.dataTransfer.files;t.handle("filelist",a)},!1)})},methods:{handle:function(t,e){var a=this;if(e&&e.length){var s=e[0],i=s.name.lastIndexOf("."),r=s.name.length;if("txt"===s.name.substring(i+1,r)){var o=new FileReader;o.readAsText(e[0]),o.onload=function(t){a.text=t.target.result,a.outPutVal()}}else n.a.error("请拖入txt格式文本！")}},outPutVal:function(){this.change(this.text)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drop-wrap"},[a("div",{ref:"oDrop",staticClass:"oDrop"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{refs:"outTextarea",placeholder:t.placeholder},domProps:{value:t.text},on:{change:t.outPutVal,input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"tips",domProps:{textContent:t._s(t.tips)}})])},staticRenderFns:[]};var h=a("VU/8")(f,m,!1,function(t){a("iMWg")},"data-v-4fd89405",null).exports,_=a("P9l9");s.default.use(d.a),s.default.use(c.a),s.default.use(o.a);var g={name:"Main",components:{TextareaForDropTxt:h},data:function(){return{showModal:!1,menu:[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"./client_submission.html"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}],onLine:v.onLine,citaions:v.citaions,help:v.help,placeholder_1:"输入多肽/拖入多肽.txt文件",tips_1:"* 多肽数量应小于1000条",placeholder_2:"输入表达量/拖入表达量.txt文件",tips_2:"* 表达量应跟多肽数量对应",text1:"",text2:"",options_1:(t=[],"HLA-A0101,HLA-A0201,HLA-A0203,HLA-A0204,HLA-A0207,HLA-A0301,HLA-A2402,HLA-A2902,HLA-A3101,HLA-A6802,HLA-B3501,HLA-B4402,HLA-B4403,HLA-B5101,HLA-B5401,HLA-B5701,HLA-A1101,HLA-A3201,HLA-B0702,HLA-B1501,HLA-B4001,HLA-C0102,HLA-C0202,HLA-C0303,HLA-C0304,HLA-C0401,HLA-C0501,HLA-C0602,HLA-C0701,HLA-C0702,HLA-C0802,HLA-C1203,HLA-C1402,HLA-C1502,HLA-C1601,HLA-C1701,HLA-A2301,HLA-A2501,HLA-A2601,HLA-A2901,HLA-A6801,HLA-B0801,HLA-B1402,HLA-B1518,HLA-B1801,HLA-B2701,HLA-B2705,HLA-B3503,HLA-B3508,HLA-B3701,HLA-B3801,HLA-B3901,HLA-B3906,HLA-B3924,HLA-B4002,HLA-B4101,HLA-B4501,HLA-B4901,HLA-B5001,HLA-B5501,HLA-B5601,HLA-B7301,HLA-A3301,HLA-B1302,HLA-B1503,HLA-A3303".split(",").forEach(function(e){var a=e.split("-")[1],s=e.split("-")[0]+"-"+a.substr(0,1)+"*"+a.substr(1,2)+":"+a.substr(3,2)+":("+a.substr(0,3)+")";t.push({label:s,value:a,val:e})}),t),options_2:[],value_1:"",value_2:"",userinfo:{}};var t},created:function(){this.userinfo=JSON.parse(localStorage.getItem("userinfo"))||{}},mounted:function(){var t=this;this.$nextTick(function(){document.addEventListener("keyup",function(e){27==e.keyCode&&t.closeModal()})})},methods:{changeText1:function(t){this.text1=t},changeText2:function(t){this.text2=t},changeAllele:function(t){this.options_2=p[t.split("-")[1]]},Submit:function(){if(!this.userinfo.userId)return this.$bus.$emit("openLogin",{a:1}),!1;if(!this.text1.trim()||!this.text2.trim())return n.a.error("请输入多肽和表达量！"),!1;var t=this.text1.replace(/\n/g,"-"),e=this.text2.replace(/\n/g,"-"),a=t.split("-"),s=e.split("-");if(a.length!==s.length)return n.a.error("请输入多肽数量与表达量数量一致！"),!1;this.showModal=!0},Submits:function(){if(!this.value_1||!this.value_2)return n.a.error("请选择！"),!1;var t=this.text1.replace(/\n/g,"-"),e=this.text2.replace(/\n/g,"-"),a=t.split("-"),s=e.split("-"),i={userId:this.userinfo.userId,allele:this.value_1,length:this.value_2,polypeptides:a,exps:s},r=this;_.b.post(_.a.addSample,i).then(function(t){var e=t.data,a=void 0===e?{}:e;"true"===a.success?(n.a.success("添加成功!"),r.value_1="",r.value_2="",r.$bus.$emit("clearInput",{})):n.a.error(a.msg||"添加失败!"),r.showModal=!1}).catch(function(){n.a.error("异常错误，请稍后重试!")})},closeModal:function(){this.value_1="",this.value_2="",this.options_2=[],this.showModal=!1}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"home"},[a("div",{staticClass:"main"},[a("Header"),t._v(" "),a("Menu",{attrs:{data:t.menu}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"module"},[a("div",{staticClass:"module-title",attrs:{id:"EPIC"}},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.onLine.module))])]),t._v(" "),a("div",{staticClass:"module-content pdlr"},[a("div",{staticClass:"online"},[t._v(t._s(t.onLine.context))])])]),t._v(" "),a("div",{staticClass:"module"},[t._m(0),t._v(" "),a("div",{staticClass:"module-content pdlr"},[a("div",{staticClass:"form-wrap"},[a("div",{staticClass:"textarea-item"},[a("TextareaForDropTxt",{attrs:{change:t.changeText1,tips:t.tips_1,placeholder:t.placeholder_1}})],1),t._v(" "),a("div",{staticClass:"textarea-item"},[a("TextareaForDropTxt",{attrs:{change:t.changeText2,tips:t.tips_2,placeholder:t.placeholder_2}})],1),t._v(" "),a("div",{staticClass:"submit",on:{click:t.Submit}},[t._v("Submit")])])])]),t._v(" "),a("div",{staticClass:"module"},[a("div",{staticClass:"module-title",attrs:{id:"Cltation"}},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.citaions.module))])]),t._v(" "),a("div",{staticClass:"module-content"},[a("div",{staticClass:"ctx-title",domProps:{textContent:t._s(t.citaions.content.title)}}),t._v(" "),a("ul",{staticClass:"ctx-paragraph"},t._l(t.citaions.content.paragraph,function(e,s){return a("li",{key:s,staticClass:"circle"},[t._l(e.content,function(e,s){return a("div",{key:s,domProps:{textContent:t._s(e)}})}),t._v(" "),a("div",{staticClass:"relative-wrap"},[e.relative.panel?a("span",{domProps:{textContent:t._s(e.relative.panel)}}):t._e(),t._v(" "),t._l(e.relative.hrefs,function(e,s){return a("a",{key:s,attrs:{href:e.href},domProps:{textContent:t._s(e.text)}})})],2)],2)}))])]),t._v(" "),a("div",{staticClass:"module"},[a("div",{staticClass:"module-title",attrs:{id:"Help"}},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.help.module))])]),t._v(" "),a("div",{staticClass:"module-content pdlr"},[a("div",{staticClass:"help-wrap"},[a("table",{staticClass:"help-tab"},[a("tbody",t._l(t.help.table_list,function(e,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"label"},[a("div",{staticClass:"circle"},[t._v(t._s(e.label))])])]),t._v(" "),a("td",[a("div",{staticClass:"download"},[a("a",{attrs:{href:e.download}},[t._v("Download")])])])])}))]),t._v(" "),a("div",{staticClass:"contact-wrap"},[t._v(t._s(t.help.contact))])])])]),t._v(" "),t._m(1)]),t._v(" "),a("copyRight")],1)]),t._v(" "),a("div",{staticClass:"shadow",class:{show:t.showModal},on:{click:function(e){return e.stopPropagation(),t.closeModal(e)}}},[a("div",{staticClass:"modal-wrap",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"modal-inner"},[a("div",{staticClass:"modal-title-wrap"}),t._v(" "),a("div",{staticClass:"modal-content-wrap"},[a("div",{staticClass:"select-wrap"},[a("div",{staticClass:"select-all-ele"},[t._v("Select Allele")]),t._v(" "),a("div",{staticClass:"m-select m-select_1"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changeAllele},model:{value:t.value_1,callback:function(e){t.value_1=e},expression:"value_1"}},t._l(t.options_1,function(t){return a("el-option",{key:t.val,attrs:{label:t.label,value:t.val}})}))],1),t._v(" "),a("div",{staticClass:"m-select m-select_2"},[a("el-select",{attrs:{placeholder:"请选择","popper-class":"m-select m-select_2"},model:{value:t.value_2,callback:function(e){t.value_2=e},expression:"value_2"}},t._l(t.options_2,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("div",{staticClass:"submits",on:{click:t.Submits}},[t._v("Submit")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module-title",attrs:{id:"Submission"}},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"title"},[this._v("Submission:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module"},[e("div",{staticClass:"module-title"},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"title"},[this._v("Design by:")])]),this._v(" "),e("div",{staticClass:"module-content pdlr"},[e("div",{staticClass:"design-wrap"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:a("Kf7j"),alt:""}})]),this._v(" "),e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:a("CScO"),alt:""}})])])])])}]};var A=a("VU/8")(g,C,!1,function(t){a("q4k3")},null,null).exports;a("S0Tp");s.default.component(A.name,A),new s.default({el:"#root",template:"<Main></Main>"})}},[0]);