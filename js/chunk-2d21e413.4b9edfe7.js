(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e413"],{d57c:function(e,a,r){"use strict";r.r(a);var l=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"['name', validatorRules.name]"}],attrs:{placeholder:"请输入数据源名称"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源编码"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",e.validatorRules.code],expression:"['code', validatorRules.code]"}],attrs:{placeholder:"请输入数据源编码",disabled:!!e.model.id}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库类型"}},[r("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbType",e.validatorRules.dbType],expression:"['dbType', validatorRules.dbType]"}],attrs:{placeholder:"请选择数据库类型","dict-code":"database_type",triggerChange:""},on:{change:e.handleDbTypeChange}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"驱动类"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbDriver",e.validatorRules.dbDriver],expression:"['dbDriver', validatorRules.dbDriver]"}],attrs:{placeholder:"请输入驱动类"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUrl",e.validatorRules.dbUrl],expression:"['dbUrl', validatorRules.dbUrl]"}],attrs:{placeholder:"请输入数据源地址"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbName",e.validatorRules.dbName],expression:"['dbName', validatorRules.dbName]"}],attrs:{placeholder:"请输入数据库名称"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUsername",e.validatorRules.dbUsername],expression:"['dbUsername', validatorRules.dbUsername]"}],attrs:{placeholder:"请输入用户名"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"密码"}},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:21}},[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbPassword",e.validatorRules.dbPassword],expression:"['dbPassword', validatorRules.dbPassword]"}],attrs:{placeholder:"请输入密码"}})],1),r("a-col",{attrs:{span:3}},[r("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small"},on:{click:e.handleTest}},[e._v("测试")])],1)],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{}],expression:"['remark', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},t=[],o=r("0fea"),s=r("ca00"),i={name:"SysDataSourceModal",components:{},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{code:{validateFirst:!0,rules:[{required:!0,message:"请输入数据源编码!"},{validator:function(a,r,l){var t=/^[a-z|A-Z][a-z|A-Z\d_-]{0,}$/;t.test(r)?Object(s["validateDuplicateValue"])("sys_data_source","code",r,e.model.id,l):l("编码必须以字母开头，可包含数字、下划线、横杠")}}]},name:{rules:[{required:!0,message:"请输入数据源名称!"}]},dbType:{rules:[{required:!0,message:"请选择数据库类型!"}]},dbDriver:{rules:[{required:!0,message:"请输入驱动类!"}]},dbUrl:{rules:[{required:!0,message:"请输入数据源地址!"}]},dbName:{rules:[{required:!0,message:"请输入数据库名称!"}]},dbUsername:{rules:[{required:!0,message:"请输入用户名!"}]},dbPassword:{rules:[{required:!0,message:"请输入密码!"}]}},url:{add:"/sys/dataSource/add",edit:"/sys/dataSource/edit"},dbDriverMap:{1:{dbDriver:"com.mysql.jdbc.Driver"},2:{dbDriver:"oracle.jdbc.OracleDriver"},3:{dbDriver:"com.microsoft.sqlserver.jdbc.SQLServerDriver"}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var a=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(pick(a.model,"code","name","remark","dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(a,r){if(!a){e.confirmLoading=!0;var l=Object.assign(e.model,r),t=e.url.add,s="post";e.model.id&&(t=e.url.edit,s="put",l["code"]=void 0),Object(o["httpAction"])(t,l,s).then((function(a){a.success?(e.$message.success(a.message),e.$emit("ok"),e.close()):e.$message.warning(a.message)})).finally((function(){e.confirmLoading=!1}))}}))},handleCancel:function(){this.close()},handleTest:function(){var e=this,a=["dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"],r=this.form.getFieldsValue(a),l={};a.forEach((function(e){return l[e]={value:r[e],errors:null}})),this.form.setFields(l),this.$nextTick((function(){e.form.validateFields(a,(function(a,l){if(!a){var t=e.$message.loading("连接中……",0);Object(o["postAction"])("/online/cgreport/api/testConnection",r).then((function(a){if(!a.success)throw new Error(a.message);e.$message.success("连接成功")})).catch((function(a){e.$warning({title:"连接失败",content:a.message||a})})).finally((function(){return t()}))}}))}))},handleDbTypeChange:function(e){var a=this.dbDriverMap[e];a&&this.form.setFieldsValue(a)}}},d=i,n=r("2877"),c=Object(n["a"])(d,l,t,!1,null,"648d1a79",null);a["default"]=c.exports}}]);