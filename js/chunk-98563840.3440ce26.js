(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98563840"],{"798d":function(e,t,s){"use strict";var i=s("7b0c"),a=s.n(i);a.a},"7b0c":function(e,t,s){},8034:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"600",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[s("a-spin",{attrs:{spinning:e.confirmLoading}},[e.designNameOption.length>0?s("a-form",{attrs:{form:e.form}},[s("a-form-item",{attrs:{label:""}},[s("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[s("a-card",{style:{marginTop:"12px",height:"auto"}},[s("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.designNameChange},model:{value:e.designNameValue,callback:function(t){e.designNameValue=t},expression:"designNameValue"}},[s("a-row",[e._l(e.designNameOption,(function(t){return[s("a-col",{attrs:{span:6}},[s("a-checkbox",{attrs:{value:t.value}},[e._v(e._s(t.text))])],1)]}))],2)],1)],1)],1)],1)],1):s("div",[s("h3",[e._v("无可配置角色!")])])],1),s("div",{staticClass:"drawer-bootom-button"},[s("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",{key:"1",on:{click:e.checkALL}},[e._v("全部勾选")]),s("a-menu-item",{key:"2",on:{click:e.cancelCheckALL}},[e._v("取消全选")])],1),s("a-button",[e._v("\n        操作 "),s("a-icon",{attrs:{type:"up"}})],1)],1),s("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[s("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),s("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存")])],1)],1)},a=[],n=(s("ac4d"),s("8a81"),s("ac6a"),s("0fea")),o=s("d579"),l=(s("89f2"),{name:"DeptRoleUserModal",components:{JEllipsis:o["default"]},data:function(){return{currentDeptId:"",title:"部门角色分配",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/sys/sysDepartRole/deptRoleUserAdd",getDeptRoleList:"/sys/sysDepartRole/getDeptRoleList",getDeptRoleByUserId:"/sys/sysDepartRole/getDeptRoleByUserId"},designNameOption:[],userId:"",newRoleId:"",oldRoleId:"",designNameValue:[],desformList:[]}},created:function(){},methods:{add:function(e,t){this.userId=e.id,this.currentDeptId=t,this.loadDesformList(),this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,Object(n["h"])(this.url.getDeptRoleByUserId,{userId:this.userId}).then((function(e){if(e.success){var s=[],i=!0,a=!1,n=void 0;try{for(var o,l=e.result[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var r=o.value;s.push(r.droleId)}}catch(c){a=!0,n=c}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}t.oldRoleId=s.join(","),t.designNameValue=s,t.newRoleId=s.join(",")}}))},close:function(){this.$emit("close"),this.visible=!1},handleSubmit:function(){var e=this;e.confirmLoading=!0;var t=this.url.add,s="post",i=Object.assign(this.model,{});i.userId=this.userId,i.newRoleId=this.newRoleId,i.oldRoleId=this.oldRoleId,Object(n["m"])(t,i,s).then((function(t){t.success?(e.$message.success(t.message),e.$emit("reload"),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.designNameOption=[],this.designNameValue=[],this.close()},designNameChange:function(e){this.newRoleId=e.join(",")},checkALL:function(){var e=[],t=!0,s=!1,i=void 0;try{for(var a,n=this.desformList[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var o=a.value;e.push(o.id)}}catch(l){s=!0,i=l}finally{try{t||null==n.return||n.return()}finally{if(s)throw i}}this.designNameValue=e,this.newRoleId=e.join(",")},cancelCheckALL:function(){this.designNameValue=[],this.newRoleId=""},loadDesformList:function(){var e=this;Object(n["h"])(this.url.getDeptRoleList,{departId:this.currentDeptId}).then((function(t){if(t.success){e.desformList=t.result;var s=[],i=!0,a=!1,n=void 0;try{for(var o,l=e.desformList[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var r=o.value;s.push({value:r.id,text:r.roleName})}}catch(c){a=!0,n=c}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}e.designNameOption=s}}))}}}),r=l,c=(s("798d"),s("2877")),d=Object(c["a"])(r,i,a,!1,null,"3eab4717",null);t["default"]=d.exports},d579:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-tooltip",{attrs:{placement:"topLeft"}},[s("template",{slot:"title"},[s("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},a=[],n=(s("c5f6"),{name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}}),o=n,l=s("2877"),r=Object(l["a"])(o,i,a,!1,null,"4de15389",null);t["default"]=r.exports}}]);