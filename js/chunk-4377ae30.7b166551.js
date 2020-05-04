(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4377ae30"],{"5df3":function(e,t,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=i(t,a),this._i+=e.length,{value:e,done:!1})}))},9655:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleName",e.validatorRules.ruleName],expression:"['ruleName', validatorRules.ruleName]"}],attrs:{placeholder:"请输入规则名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则Code"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleCode",e.validatorRules.ruleCode],expression:"['ruleCode', validatorRules.ruleCode]"}],attrs:{placeholder:"请输入规则Code"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleDescription",{}],expression:"['ruleDescription', {}]"}],attrs:{placeholder:"请输入规则描述"}})],1)],1),a("a-tabs",{model:{value:e.tabs.activeKey,callback:function(t){e.$set(e.tabs,"activeKey",t)},expression:"tabs.activeKey"}},[a("a-tab-pane",{key:e.tabs.design.key,attrs:{tab:"局部规则",forceRender:""}},[a("a-alert",{attrs:{type:"info",showIcon:"",message:"局部规则按照你输入的位数有序的校验。"}}),a("j-editable-table",{ref:"designTable",staticStyle:{"margin-top":"8px"},attrs:{dragSort:"",rowNumber:"",maxHeight:240,columns:e.tabs.design.columns,dataSource:e.tabs.design.dataSource},scopedSlots:e._u([{key:"action",fn:function(e){return[a("my-action-button",{attrs:{rowEvent:e}})]}}])})],1),a("a-tab-pane",{key:e.tabs.global.key,attrs:{tab:"全局规则",forceRender:""}},[a("j-editable-table",{ref:"globalTable",attrs:{dragSort:"",rowNumber:"",actionButton:"",maxHeight:240,columns:e.tabs.global.columns,dataSource:e.tabs.global.dataSource},scopedSlots:e._u([{key:"actionButtonAfter",fn:function(){return[a("a-alert",{staticStyle:{"margin-bottom":"8px"},attrs:{type:"info",showIcon:"",message:"全局规则可校验用户输入的所有字符；全局规则的优先级比局部规则的要高。"}})]},proxy:!0},{key:"action",fn:function(e){return[a("my-action-button",{attrs:{rowEvent:e,allowEmpty:""}})]}}])})],1)],1)],1)],1)},r=[],s=a("768b"),n=(a("5df3"),a("ac6a"),a("3b2b"),a("0fea")),o=a("ca00"),l=a("e2e0"),c=a("7550"),d={name:"SysCheckRuleModal",components:{JEditableTable:c["default"],"my-action-button":{props:{rowEvent:Object,allowEmpty:Boolean},methods:{confirmIsShow:function(){var e=this.rowEvent,t=e.index,a=e.allValues.inputValues,i=a[t];return i.digits||i.pattern},handleLineAdd:function(){var e=this.rowEvent.target;e.add()},handleLineDelete:function(){var e=this.rowEvent,t=e.rowId,a=e.target;a.removeRows(t)},renderDeleteButton:function(){var e=this.$createElement;return this.allowEmpty||this.rowEvent.index>0?this.confirmIsShow()?e("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:this.handleLineDelete}},[e("a-button",{attrs:{icon:"minus"}})]):e("a-button",{attrs:{icon:"minus"},on:{click:this.handleLineDelete}}):""}},render:function(){var e=arguments[0];return e("div",[e("a-button",{on:{click:this.handleLineAdd},attrs:{icon:"plus"}})," ",this.renderDeleteButton()])}}},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{ruleName:{rules:[{required:!0,message:"请输入规则名称!"}]},ruleCode:{rules:[{required:!0,message:"请输入规则Code!"},{validator:function(t,a,i){return Object(o["validateDuplicateValue"])("sys_check_rule","rule_code",a,e.model.id,i)}}]}},tabs:{activeKey:"design",global:{key:"global",columns:[{title:"优先级",key:"priority",width:"15%",type:l["a"].select,defaultValue:"1",options:[{title:"优先运行",value:"1"},{title:"最后运行",value:"0"}],validateRules:[]},{title:"规则（正则表达式）",key:"pattern",width:"50%",type:l["a"].input,validateRules:[{required:!0,message:"规则不能为空"},{handler:this.validatePatternHandler}]},{title:"提示文本",key:"message",width:"20%",type:l["a"].input,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"操作",key:"action",width:"15%",slotName:"action",type:l["a"].slot}],dataSource:[]},design:{key:"design",columns:[{title:"位数",key:"digits",width:"15%",type:l["a"].inputNumber,validateRules:[{required:!0,message:"${title}不能为空"},{pattern:/^[1-9]\d*$/,message:"请输入零以上的正整数"}]},{title:"规则（正则表达式）",key:"pattern",width:"50%",type:l["a"].input,validateRules:[{required:!0,message:"规则不能为空"},{handler:this.validatePatternHandler}]},{title:"提示文本",key:"message",width:"20%",type:l["a"].input,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"操作",key:"action",width:"15%",slotName:"action",type:l["a"].slot}],dataSource:[]}},url:{add:"/sys/checkRule/add",edit:"/sys/checkRule/edit"}}},created:function(){},methods:{validatePatternHandler:function(e,t,a,i,r,s){if("blur"===e||"getValues"===e)try{new RegExp(t),r(!0)}catch(n){r(!1,"请输入正确的正则表达式")}else r(!0)},add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.tabs.activeKey=this.tabs.design.key,this.tabs.global.dataSource=[],this.tabs.design.dataSource=[{digits:"",pattern:"",message:""}],this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"ruleName","ruleCode","ruleDescription"));var e=t.model.ruleJson;if(e){var a=JSON.parse(e),i=[],r=[],s="1";a.forEach((function(e){"*"===e.digits?i.push(Object.assign(e,{priority:s})):(s="0",r.push(e))})),t.tabs.global.dataSource=i,t.tabs.design.dataSource=r}}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;Promise.all([Object(o["alwaysResolve"])(new Promise((function(t,a){e.form.validateFields((function(e,i){return e?a(e):t(i)}))}))),Object(o["alwaysResolve"])(this.$refs.designTable.getValuesPromise),Object(o["alwaysResolve"])(this.$refs.globalTable.getValuesPromise)]).then((function(t){var a=Object(s["a"])(t,3),i=a[0],r=a[1],l=a[2];if(i.type===o["failedSymbol"])return Promise.reject("主表校验未通过");if(r.type===o["failedSymbol"])return e.tabs.activeKey=e.tabs.design.key,Promise.reject("局部规则子表校验未通过");if(l.type===o["failedSymbol"])return e.tabs.activeKey=e.tabs.global.key,Promise.reject("全局规则子表校验未通过");var c=i.data,d=l.data,u=r.data,m=[],p=[];d.forEach((function(e){e.digits="*","1"===e.priority?m.push(e):p.push(e)}));var b=m.concat(u).concat(p),h=b.map((function(e){return pick(e,"digits","pattern","message")})),f=JSON.stringify(h),g=Object.assign(e.model,c,{ruleJson:f}),v="post",y=e.url.add;return e.model.id&&(v="put",y=e.url.edit),e.confirmLoading=!0,Object(n["httpAction"])(y,g,v)})).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok"),e.close()):e.$message.warning(t.message)})).catch((function(e){console.error(e)})).finally((function(){e.confirmLoading=!1}))},handleCancel:function(){this.close()}}},u=d,m=a("2877"),p=Object(m["a"])(u,i,r,!1,null,"551b8e36",null);t["default"]=p.exports}}]);