(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"030f":function(r,e,t){"use strict";var i=t("a04b"),o=t.n(i);o.a},"04b3":function(r,e,t){"use strict";t.r(e);var i=t("825a"),o=t.n(i);for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);e["default"]=o.a},"09cd":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-410f7c5e]{padding:%?20?%}.content[data-v-410f7c5e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-410f7c5e]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-410f7c5e]{width:%?180?%}.avator[data-v-410f7c5e]{width:%?150?%;height:%?60?%}.right-input[data-v-410f7c5e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-410f7c5e]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-410f7c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-410f7c5e]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-410f7c5e]{border:0}.cu-form-group uni-input[data-v-410f7c5e]{padding:0 %?30?%}.uni-input[data-v-410f7c5e]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-410f7c5e]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-410f7c5e]::after{line-height:%?88?%}.select .uni-input[data-v-410f7c5e]{line-height:%?88?%}.input .right-input[data-v-410f7c5e]{line-height:%?88?%}',""]),r.exports=e},"6e35":function(r,e,t){"use strict";t.r(e);var i=t("9fc5"),o=t("04b3");for(var n in o)"default"!==n&&function(r){t.d(e,r,(function(){return o[r]}))}(n);t("030f");var a,u=t("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"410f7c5e",null,!1,i["a"],a);e["default"]=l.exports},"825a":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var o=i(t("3b8d")),n=i(t("e2b1")),a={data:function(){return{ruleForm:{yonghuming:"",mima:"",xingming:"",nianling:"",shouji:"",youxiang:"",touxiang:"",money:""},user:{},ro:{yonghuming:!1,mima:!1,xingming:!1,nianling:!1,shouji:!1,youxiang:!1,touxiang:!1,money:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(e){var t,i,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid),!e.id){r.next=13;break}return this.ruleForm.id=e.id,r.next=11,this.$api.info("yonghu",this.ruleForm.id);case 11:i=r.sent,this.ruleForm=i.data;case 13:if(!e.cross){r.next=52;break}o=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(o);case 16:if((r.t1=r.t0()).done){r.next=52;break}if(n=r.t1.value,"yonghuming"!=n){r.next=22;break}return this.ruleForm.yonghuming=o[n],this.ro.yonghuming=!0,r.abrupt("continue",16);case 22:if("mima"!=n){r.next=26;break}return this.ruleForm.mima=o[n],this.ro.mima=!0,r.abrupt("continue",16);case 26:if("xingming"!=n){r.next=30;break}return this.ruleForm.xingming=o[n],this.ro.xingming=!0,r.abrupt("continue",16);case 30:if("nianling"!=n){r.next=34;break}return this.ruleForm.nianling=o[n],this.ro.nianling=!0,r.abrupt("continue",16);case 34:if("shouji"!=n){r.next=38;break}return this.ruleForm.shouji=o[n],this.ro.shouji=!0,r.abrupt("continue",16);case 38:if("youxiang"!=n){r.next=42;break}return this.ruleForm.youxiang=o[n],this.ro.youxiang=!0,r.abrupt("continue",16);case 42:if("touxiang"!=n){r.next=46;break}return this.ruleForm.touxiang=o[n],this.ro.touxiang=!0,r.abrupt("continue",16);case 46:if("money"!=n){r.next=50;break}return this.ruleForm.money=o[n],this.ro.money=!0,r.abrupt("continue",16);case 50:r.next=16;break;case 52:this.styleChange();case 53:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.yonghuming){r.next=3;break}return this.$utils.msg("用户名不能为空"),r.abrupt("return");case 3:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=6;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 6:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){r.next=9;break}return this.$utils.msg("余额应输入数字"),r.abrupt("return");case 9:if(!this.ruleForm.id){r.next=14;break}return r.next=12,this.$api.update("yonghu",this.ruleForm);case 12:r.next=16;break;case 14:return r.next=16,this.$api.add("yonghu",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,o=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(r){this.$refs[r].show()}}};e.default=a},"9fc5":function(r,e,t){"use strict";var i,o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("用户名")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.yonghuming,placeholder:"用户名"},model:{value:r.ruleForm.yonghuming,callback:function(e){r.$set(r.ruleForm,"yonghuming",e)},expression:"ruleForm.yonghuming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("年龄")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("邮箱")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.youxiang,placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 10rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("头像")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.touxiang,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(204, 153, 204, 1)",margin:"0 0 20rpx 0",borderWidth:"4rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(204, 153, 204, 1)",textAlign:"left"}},[r._v("余额")]),t("v-uni-input",{style:{boxShadow:"0 0 10rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.money,placeholder:"余额"},model:{value:r.ruleForm.money,callback:function(e){r.$set(r.ruleForm,"money",e)},expression:"ruleForm.money"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(204, 153, 204, 1)",borderColor:"rgba(204, 153, 204, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}))},a04b:function(r,e,t){var i=t("09cd");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var o=t("4f06").default;o("238c6f9f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);