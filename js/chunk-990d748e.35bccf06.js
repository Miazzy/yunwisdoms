(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-990d748e","chunk-6dc38350","chunk-2d21dfe7","chunk-2d0b1e33"],{2285:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,s){return a("a-col",{key:"dr"+s,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},r=[],l=(a("28a5"),a("290c")),i=a("da05"),o=a("0fea"),n={name:"RoleDataruleModal",components:{ACol:i["b"],ARow:l["a"]},data:function(){return{functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/role/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(o["h"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.roleId)).then((function(t){if(console.log(t),t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};console.log("保存数据权限",t),Object(o["q"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.roleId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=n,d=a("2877"),u=Object(d["a"])(c,s,r,!1,null,"5fa38486",null);t["default"]=u.exports},"24b9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"部门角色名称"}},[a("a-input",{attrs:{placeholder:"请输入部门角色"},model:{value:e.queryParam.roleName,callback:function(t){e.$set(e.queryParam,"roleName",t)},expression:"queryParam.roleName"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("部门角色录入")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v("\n        "+e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("删除")])])],1),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(s)}}},[e._v("详情")])]),a("a-menu-item",[a("a",{on:{click:function(t){return e.handlePerssion(s)}}},[e._v("授权")])])],1)],1)],1)}}])})],1),a("sys-depart-role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("dept-role-auth-modal",{ref:"modalDeptRole"})],1)},r=[],l=a("b65a"),i=a("0fea"),o=a("a119"),n=a("dc4b"),c={name:"DeptRoleInfo",components:{DeptRoleAuthModal:n["default"],SysDepartRoleModal:o["default"]},mixins:[l["a"]],data:function(){return{description:"部门角色信息",currentDeptId:"",columns:[{title:"部门角色名称",align:"center",dataIndex:"roleName"},{title:"部门角色编码",align:"center",dataIndex:"roleCode"},{title:"部门",align:"center",dataIndex:"departId_dictText"},{title:"备注",align:"center",dataIndex:"description"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:170}],url:{list:"/sys/sysDepartRole/list",delete:"/sys/sysDepartRole/delete",deleteBatch:"/sys/sysDepartRole/deleteBatch"}}},created:function(){},methods:{searchReset:function(){this.queryParam={},this.currentDeptId="",this.loadData(1),this.$emit("clearSelectedDepartKeys")},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.deptId=this.currentDeptId,Object(i["h"])(this.url.list,a).then((function(e){e.success&&e.result&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))}else this.$message.error("请设置url.list属性!")},open:function(e){this.currentDeptId=e.id,this.loadData(1)},clearList:function(){this.currentDeptId="",this.dataSource=[]},hasSelectDept:function(){return""!=this.currentDeptId||(this.$message.error("请选择一个部门!"),!1)},handleEdit:function(e){this.$refs.modalForm.title="编辑",this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit(e,e.departId)},handleAdd:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.add(this.currentDeptId),this.$refs.modalForm.title="新增")},handlePerssion:function(e){this.$refs.modalDeptRole.show(e.id,e.departId)}}},d=c,u=a("2877"),h=Object(u["a"])(d,s,r,!1,null,"d28057ce",null);t["default"]=h.exports},"5a4b":function(e,t,a){"use strict";var s=a("c959"),r=a.n(s);r.a},a119:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"部门角色名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleName",e.validatorRules.roleName],expression:"['roleName', validatorRules.roleName]"}],attrs:{placeholder:"请输入部门角色名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"部门角色编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleCode",e.validatorRules.roleCode],expression:"['roleCode', validatorRules.roleCode]"}],attrs:{placeholder:"请输入部门角色编码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",e.validatorRules.description],expression:"['description', validatorRules.description]"}],attrs:{placeholder:"请输入描述"}})],1)],1)],1)],1)},r=[],l=a("0fea"),i=a("88bc"),o=a.n(i),n=a("4ec3"),c={name:"SysDepartRoleModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{roleName:{rules:[{required:!0,message:"请输入部门角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}]},roleCode:{rules:[{required:!0,message:"请输入部门角色编码!"},{min:0,max:64,message:"长度不超过 64 个字符",trigger:"blur"},{validator:this.validateRoleCode}]},description:{rules:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]}},url:{add:"/sys/sysDepartRole/add",edit:"/sys/sysDepartRole/edit"}}},created:function(){},methods:{add:function(e){this.edit({},e)},edit:function(e,t){var a=this;this.departId=t,this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(o()(a.model,"roleName","roleCode","description"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0;var r="",i="";e.model.id?(r+=e.url.edit,i="put"):(r+=e.url.add,i="post");var o=Object.assign(e.model,s);o.departId=e.departId,Object(l["m"])(r,o,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateRoleCode:function(e,t,a){if(/[\u4E00-\u9FA5]/g.test(t))a("部门角色编码不可输入汉字!");else{var s={tableName:"sys_depart_role",fieldName:"role_code",fieldVal:t,dataId:this.model.id};Object(n["m"])(s).then((function(e){e.success?a():a(e.message)}))}}}},d=c,u=a("2877"),h=Object(u["a"])(d,s,r,!1,null,"814d02b0",null);t["default"]=h.exports},c959:function(e,t,a){},d456:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,s){return a("a-col",{key:"dr"+s,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},r=[],l=(a("28a5"),a("290c")),i=a("da05"),o=a("0fea"),n={name:"DeptRoleDataruleModal",components:{ACol:i["b"],ARow:l["a"]},data:function(){return{departId:"",functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartRole/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(o["h"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId,"/").concat(this.roleId)).then((function(t){if(console.log(t),t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};console.log("保存数据权限",t),Object(o["q"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t,a){this.onReset(),this.departId=t,this.functionId=e,this.roleId=a,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=n,d=a("2877"),u=Object(d["a"])(c,s,r,!1,null,"776b339a",null);t["default"]=u.exports},dc4b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的部门权限"}},[e.treeData.length>0?a("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var s=t.slotTitle,r=t.ruleFlag;return a("span",{},[e._v("\n          "+e._s(s)),r?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,2869785871)}):a("div",[a("h3",[e._v("无可配置部门权限!")])])],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),a("dept-role-datarule-modal",{ref:"datarule"})],1)},r=[],l=(a("ac4d"),a("8a81"),a("ac6a"),a("75fc")),i=a("4ec3"),o=a("2285"),n=a("d456"),c={name:"DeptRoleAuthModal",components:{DeptRoleDataruleModal:n["default"],RoleDataruleModal:o["default"]},data:function(){return{departId:"",roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId,this.roleId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e,t){this.departId=t,this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,a=this,s=[].concat(Object(l["a"])(a.checkedKeys),Object(l["a"])(a.halfCheckedKeys)),r=s.join(","),o={roleId:a.roleId,permissionIds:r,lastpermissionIds:a.defaultCheckedKeys.join(",")};a.loading=!0,console.log("请求参数：",o),Object(i["saveDeptRolePermission"])(o).then((function(s){s.success?(a.$message.success(s.message),a.loading=!1,e&&a.close()):(a.$message.error(s.message),a.loading=!1,e&&a.close()),t.loadData()}))},convertTreeListToKeyLeafPairs:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=!0,s=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var o=l.value,n=o.key,c=o.isLeaf,d=o.children;t.push({key:n,isLeaf:c}),d&&d.length>0&&this.convertTreeListToKeyLeafPairs(d,t)}}catch(u){s=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return t},loadData:function(){var e=this;Object(i["queryTreeListForDeptRole"])({departId:this.departId}).then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(i["queryDeptRolePermission"])({roleId:e.roleId}).then((function(t){var s=Object(l["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),r=Object(l["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=Object(l["a"])(s),e.halfCheckedKeys=Object(l["a"])(r),e.defaultCheckedKeys=[].concat(Object(l["a"])(r),Object(l["a"])(s)),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},d=c,u=(a("5a4b"),a("2877")),h=Object(u["a"])(d,s,r,!1,null,"3e6ff246",null);t["default"]=h.exports}}]);