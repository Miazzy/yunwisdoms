(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b14b17d4","chunk-0919fa7b"],{"0139":function(e,t,a){"use strict";var r=a("f79d"),i=a.n(r);i.a},"33e6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-settings-info-view"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{md:24,lg:16}},[a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:"真实姓名"}},[a("a-input",{attrs:{placeholder:e.userinfo.realname,readonly:""},model:{value:e.fdata.realname,callback:function(t){e.$set(e.fdata,"realname",t)},expression:"fdata.realname"}})],1),a("a-form-item",{attrs:{label:"昵称",required:!0}},[a("a-input",{attrs:{placeholder:e.userinfo.nickname},model:{value:e.fdata.nickname,callback:function(t){e.$set(e.fdata,"nickname",t)},expression:"fdata.nickname"}})],1),a("a-form-item",{attrs:{label:"头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-upload",{staticClass:"avatar-uploader",attrs:{listType:"picture-card",showUploadList:!1,action:e.uploadAction,data:{isup:1},headers:e.headers,beforeUpload:e.beforeUpload},on:{change:e.handleChange}},[e.picUrl?a("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView(),alt:"头像"}}):a("div",[a("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("上传")])],1)])],1),a("a-form-item",{attrs:{label:"签名",required:!0}},[a("a-textarea",{attrs:{rows:"4",placeholder:e.userinfo.bio},model:{value:e.fdata.bio,callback:function(t){e.$set(e.fdata,"bio",t)},expression:"fdata.bio"}})],1),a("a-form-item",{attrs:{label:"手机",required:!0}},[a("a-input",{attrs:{placeholder:e.userinfo.phone},model:{value:e.fdata.phone,callback:function(t){e.$set(e.fdata,"phone",t)},expression:"fdata.phone"}})],1),a("a-form-item",{attrs:{label:"邮件 (格式example@xxx.xxx)",required:!0}},[a("a-input",{attrs:{placeholder:e.userinfo.email},model:{value:e.fdata.email,callback:function(t){e.$set(e.fdata,"email",t)},expression:"fdata.email"}})],1),a("a-form-item",{attrs:{label:"生日 (格式yyyy-MM-dd)",required:!0}},[a("a-input",{attrs:{placeholder:e.userinfo.birthday},model:{value:e.fdata.birthday,callback:function(t){e.$set(e.fdata,"birthday",t)},expression:"fdata.birthday"}})],1),a("a-form-item",{attrs:{label:"地址 (当前所在地址)",required:!0}},[a("a-input",{attrs:{placeholder:e.userinfo.address},model:{value:e.fdata.address,callback:function(t){e.$set(e.fdata,"address",t)},expression:"fdata.address"}})],1),a("a-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"身份证号",required:!0}},[a("a-input",{attrs:{placeholder:e.userinfo.idcard},model:{value:e.fdata.idcard,callback:function(t){e.$set(e.fdata,"idcard",t)},expression:"fdata.idcard"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.postUserInfo()}}},[e._v("提交")])],1)],1)],1),a("a-col",{style:{minHeight:"180px"},attrs:{md:24,lg:8}},[a("div",{staticClass:"ant-upload-preview"},[a("img",{attrs:{src:e.avatar}})])])],1),a("avatar-modal",{ref:"modal"})],1)},i=[],s=(a("96cf"),a("3b8d")),n=a("8d90"),o=a("9fb0"),u=a("0fea"),l=a("ca00"),c=a("5d2d"),d={components:{AvatarModal:n["default"]},data:function(){return{preview:{},option:{img:"",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},avatar:"",userinfo:{},fdata:{},model:{},uploadLoading:!1,confirmLoading:!1,picUrl:"",url:{fileUpload:l["deNull"](window._CONFIG["uploadURL"])+"/sys/common/upload",imgerver:window._CONFIG["uploadURL"],userWithDepart:"".concat(window._CONFIG["domain"],"/sys/user/userDepartList"),userId:"".concat(window._CONFIG["domain"],"/sys/user/generateUserId"),syncUserByUserName:"".concat(window._CONFIG["domain"],"/jeecg-boot/process/extActProcess/doSyncUserByUserName")}}},computed:{userInfo:function(){return this.$store.getters.userInfo},uploadAction:function(){return this.url.fileUpload}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Vue.ls.get(o["ACCESS_TOKEN"]),this.headers={"X-Access-Token":t},e.next=4,this.loadData();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c["clearStore"]("system_v_user_info@username$".concat(this.userInfo.username)),e.next=3,u["queryUserInfoByView"](this.userInfo.username);case 3:return this.v_user=e.sent,this.avatar=this.option.img=window._CONFIG["uploadURL"]+"/"+this.v_user[0]["avatar"],this.userinfo.id=this.v_user[0]["id"],this.userinfo.realname=this.v_user[0]["realname"],this.userinfo.nickname=this.v_user[0]["nickname"],this.userinfo.bio=this.v_user[0]["bio"],this.userinfo.phone=this.v_user[0]["phone"],this.userinfo.email=this.v_user[0]["email"],this.userinfo.address=this.v_user[0]["address"],this.userinfo.idcard=this.v_user[0]["idcard"],this.userinfo.avatar=this.model.avatar,this.userinfo.birthday=l["formatDate"](this.v_user[0]["birthday"],"yyyy-MM-dd"),e.next=17,this.cloneData(this.fdata,this.userinfo);case 17:this.fdata=e.sent;case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cloneData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:a.id,nickname:l["deNull"](t.nickname,a.nickname),bio:l["deNull"](t.bio,a.bio),phone:l["deNull"](t.phone,a.phone),email:l["deNull"](t.email,a.email),birthday:l["deNull"](t.birthday,a.birthday),address:l["deNull"](t.address,a.address),avatar:l["deNull"](t.avatar,a.avatar),idcard:l["deNull"](t.idcard,a.idcard)},e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}(),postUserInfo:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.userinfo.avatar=this.model.avatar,e.next=4,this.cloneData(this.fdata,this.userinfo);case 4:return this.fdata=e.sent,e.next=7,u["patchTableData"]("sys_user",this.userinfo.id,this.fdata);case 7:return e.next=9,u["queryUserInfoByView"](this.userInfo.username);case 9:this.v_user=e.sent,this.v_user[0]=Object.assign({},this.v_user[0],this.fdata),c["setStore"]("system_v_user_info@username$".concat(this.userInfo.username),this.v_user,86400),console.log("user info :"+JSON.stringify(this.v_user[0])),this.$message.success("保存信息成功！"),this.$emit("ok"),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])})));function t(){return e.apply(this,arguments)}return t}(),getAvatarView:function(){return this.url.imgerver+"/"+this.model.avatar},beforeUpload:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.type,!(a.indexOf("image")<0)){e.next=4;break}return this.$message.warning("请上传图片"),e.abrupt("return",!1);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleChange:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.picUrl="","uploading"!==t.file.status){e.next=4;break}return this.uploadLoading=!0,e.abrupt("return");case 4:if("done"!==t.file.status){e.next=17;break}if(a=t.file.response,this.uploadLoading=!1,console.log("上传后头像返回信息："+JSON.stringify(a)),!a.success){e.next=16;break}return this.model.avatar=a.message,this.avatar=this.option.img=window._CONFIG["uploadURL"]+"/"+a.message,e.next=13,this.postUserInfo();case 13:this.picUrl="Has no pic url yet",e.next=17;break;case 16:this.$message.warning(a.message);case 17:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},f=d,p=(a("bf7c"),a("2877")),h=Object(p["a"])(f,r,i,!1,null,"103b5ab5",null);t["default"]=h.exports},"4f22":function(e,t,a){},"8d90":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"修改头像",maskClosable:!1,confirmLoading:e.confirmLoading,width:800}},[a("a-row",[a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,autoCrop:e.options.autoCrop,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,fixedBox:e.options.fixedBox},on:{realTime:e.realTime}})],1),a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("div",{staticClass:"avatar-upload-preview"},[a("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.cancelHandel}},[e._v("取消")]),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.okHandel}},[e._v("保存")])],1)],2)},i=[],s={components:{},data:function(){return{visible:!1,id:null,confirmLoading:!1,options:{img:"/avatar2.jpg",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(e){this.visible=!0,this.id=e},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},okHandel:function(){var e=this;e.confirmLoading=!0,setTimeout((function(){e.confirmLoading=!1,e.close(),e.$message.success("上传头像成功")}),2e3)},realTime:function(e){this.previews=e}}},n=s,o=(a("0139"),a("2877")),u=Object(o["a"])(n,r,i,!1,null,"6704fd58",null);t["default"]=u.exports},bf7c:function(e,t,a){"use strict";var r=a("4f22"),i=a.n(r);i.a},f79d:function(e,t,a){}}]);