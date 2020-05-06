(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012f8230"],{"00b9":function(e,t,i){"use strict";var a=i("0d21"),s=i.n(a);s.a},"0d21":function(e,t,i){},"39a5":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[e.editStatus?i("a-spin",{attrs:{spinning:e.confirmLoading}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户姓名",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入客户姓名!"}]}],expression:"['name', {rules: [{ required: true, message: '请输入客户姓名!' }]}]"}],attrs:{placeholder:"请输入客户姓名",readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"性别",hasFeedback:""}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{}],expression:"['sex', {}]"}],attrs:{placeholder:"请选择性别"}},[i("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),i("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证号码",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idcard",e.validatorRules.idcard],expression:"['idcard', validatorRules.idcard]"}],attrs:{placeholder:"请输入身份证号码",readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证扫描件",hasFeedback:""}},[i("j-image-upload",{attrs:{text:"上传",isMultiple:!0},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系方式",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telphone",e.validatorRules.telphone],expression:"[ 'telphone', validatorRules.telphone]"}],attrs:{readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1)],1)],1):e._e()],1)},s=[],l=(i("3b2b"),i("0fea")),r=i("9fb0"),n=i("e610"),d={name:"JeecgOrderCustomerModal",components:{JImageUpload:n["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"客户名",align:"center",dataIndex:"name"},{title:"性别",align:"center",dataIndex:"sex"},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"身份证扫描件",align:"center",dataIndex:"idcardPic"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"订单号码",dataIndex:"orderId",align:"center"},{title:"创建人",dataIndex:"createBy",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"更新时间",dataIndex:"updateBy",align:"center"},{title:"更新人",dataIndex:"updateTime",align:"center"}],fileList:[],disableSubmit:!1,selectedRowKeys:[],orderId:"",hiding:!1,headers:{},picUrl:"",picArray:[],previewVisible:!1,previewImage:"",addStatus:!1,editStatus:!1,confirmLoading:!1,form:this.$form.createForm(this),url:{add:"/test/order/addCustomer",edit:"/test/order/editCustomer",fileUpload:window._CONFIG["uploadURL"]+"/sys/common/upload",imgerver:window._CONFIG["staticDomainURL"],getOrderCustomerList:"/test/order/listOrderCustomerByMainId"},validatorRules:{telphone:{rules:[{validator:this.validateMobile}]},idcard:{rules:[{validator:this.validateIdCard}]}}}},computed:{uploadAction:function(){return this.url.fileUpload}},created:function(){var e=Vue.ls.get(r["ACCESS_TOKEN"]);this.headers={"X-Access-Token":e}},methods:{add:function(e){this.hiding=!0,e?(this.orderId=e,this.edit({orderId:e},"")):this.$message.warning("请选择一个客户信息")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var i=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),e.id?(this.hiding=!1,this.addStatus=!1,this.editStatus=!0,this.$nextTick((function(){i.form.setFieldsValue(pick(i.model,"id","name","sex","idcard","telphone","orderId","createBy","createTime","updateBy","updateTime"))})),setTimeout((function(){i.fileList=e.idcardPic}),5)):(this.addStatus=!1,this.editStatus=!0),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.picUrl="",this.fileList=[]},handleOk:function(){var e=this,t=this;this.form.validateFields((function(i,a){if(!i){t.confirmLoading=!0;var s="",r="";e.model.id?(s+=e.url.edit,r="put"):(s+=e.url.add,r="post");var n=Object.assign(e.model,a);console.log(n),n.orderId=e.orderId,n.idcardPic=e.fileList,Object(l["httpAction"])(s,n,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,i){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?i():i("您的手机号码格式不正确!")},validateIdCard:function(e,t,i){!t||new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(t)?i():i("您的身份证号码格式不正确!")},handleChange:function(e){if(this.fileList=e.fileList,"uploading"!==e.file.status&&"done"===e.file.status){var t=e.file.response;t.success||this.$message.warning(t.message)}},handlePicCancel:function(){this.previewVisible=!1,this.previewImage=""},handlePicView:function(e){this.previewImage=this.url.imgerver+"/"+e,this.previewVisible=!0},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getIdCardView:function(e){return this.url.imgerver+"/"+e}}},o=d,c=(i("00b9"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,"0947e1dc",null);t["default"]=u.exports},e610:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-upload",{attrs:{name:"file",listType:"picture-card",multiple:e.isMultiple,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,isMultiple:e.isMultiple,showUploadList:e.isMultiple},on:{change:e.handleChange,preview:e.handlePreview}},[!e.isMultiple&&e.picUrl?i("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView()}}):i("div",[i("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handleCancel()}}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},s=[],l=(i("7f7f"),i("28a5"),i("a481"),i("3b2b"),i("9fb0")),r=i("0fea"),n=function(){return"-"+parseInt(1e4*Math.random()+1,10)},d=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},o={name:"JImageUpload",data:function(){return{uploadAction:window._CONFIG["uploadURL"]+"/sys/common/upload",urlView:window._CONFIG["staticDomainURL"],uploadLoading:!1,picUrl:!1,headers:{},fileList:[],previewImage:"",previewVisible:!1}},props:{text:{type:String,required:!1,default:"上传"},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},isMultiple:{type:Boolean,required:!1,default:!1}},watch:{value:function(e){e instanceof Array?this.initFileList(e.join(",")):this.initFileList(e)}},created:function(){try{var e=Vue.ls.get(l["ACCESS_TOKEN"]);this.headers={"X-Access-Token":e}}catch(t){console.error(t)}},methods:{initFileList:function(e){if(e&&0!=e.length){this.picUrl=!0;for(var t=[],i=e.split(","),a=0;a<i.length;a++){var s=Object(r["getFileAccessHttpUrl"])(i[a],this.urlView,"http");t.push({uid:n(),name:d(i[a]),status:"done",url:s,response:{status:"history",message:i[a]}})}this.fileList=t}else this.fileList=[]},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},handleChange:function(e){this.picUrl=!1;var t=e.fileList;"done"===e.file.status?e.file.response.success&&(this.picUrl=!0,t=t.map((function(e){return e.response&&(e.url=e.response.message),e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"!==e.file.status&&"removed"!==e.file.status||this.handlePathChange()},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getAvatarView:function(){if(this.fileList.length>0){var e=this.fileList[0].url;return Object(r["getFileAccessHttpUrl"])(e,this.urlView,"http")}},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");var i=[];if(this.isMultiple)for(var a=0;a<e.length;a++)i.push(e[a].response.message);else i.push(e[e.length-1].response.message);i.length>0&&(t=i.join(",")),this.$emit("change",t)},handleDelete:function(e){console.log(e)},handleCancel:function(){this.close(),this.previewVisible=!1},close:function(){}},model:{prop:"value",event:"change"}},c=o,u=i("2877"),p=Object(u["a"])(c,a,s,!1,null,"46b1a830",null);t["default"]=p.exports}}]);