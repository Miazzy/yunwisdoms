(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2059ec2e"],{"5df3":function(e,t,a){"use strict";var r=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=r(t,a),this._i+=e.length,{value:e,done:!1})}))},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,l="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",o="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function f(e,t){var a=-1,r=e?e.length:0,l=Array(r);while(++a<r)l[a]=t(e[a],a,e);return l}function b(e,t){var a=-1,r=t.length,l=e.length;while(++a<r)e[l+a]=t[a];return e}var h=Object.prototype,p=h.hasOwnProperty,m=h.toString,g=u.Symbol,v=h.propertyIsEnumerable,y=g?g.isConcatSpreadable:void 0,w=Math.max;function O(e,t,a,r,l){var n=-1,i=e.length;a||(a=D),l||(l=[]);while(++n<i){var o=e[n];t>0&&a(o)?t>1?O(o,t-1,a,r,l):b(l,o):r||(l[l.length]=o)}return l}function j(e,t){return e=Object(e),C(e,t,(function(t,a){return a in e}))}function C(e,t,a){var r=-1,l=t.length,n={};while(++r<l){var i=t[r],o=e[i];a(o,i)&&(n[i]=o)}return n}function k(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,l=w(a.length-t,0),n=Array(l);while(++r<l)n[r]=a[t+r];r=-1;var i=Array(t+1);while(++r<t)i[r]=a[r];return i[t]=n,d(e,this,i)}}function D(e){return $(e)||S(e)||!!(y&&e&&e[y])}function T(e){if("string"==typeof e||V(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function S(e){return M(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||m.call(e)==l)}var $=Array.isArray;function x(e){return null!=e&&L(e.length)&&!A(e)}function M(e){return q(e)&&x(e)}function A(e){var t=F(e)?m.call(e):"";return t==n||t==i}function L(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return!!e&&"object"==typeof e}function V(e){return"symbol"==typeof e||q(e)&&m.call(e)==o}var P=k((function(e,t){return null==e?{}:j(e,f(O(t,1),T))}));e.exports=P}).call(this,a("24aa"))},b8ad3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{staticClass:"form-row",attrs:{gutter:0}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请选择订单类型"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],staticStyle:{width:"100%"},attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:0}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入订单金额"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1),a("a-tabs",{on:{change:e.handleChangeTabs},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息",forceRender:!0}},[a("j-editable-table",{ref:"editableTable1",attrs:{loading:e.table1.loading,columns:e.table1.columns,dataSource:e.table1.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:!0}},[a("j-editable-table",{ref:"editableTable2",attrs:{loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1)],1)],1)],1)},l=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("6b54"),a("ac6a"),a("5df3"),a("7550")),o=a("e2e0"),c=a("0fea"),s=a("2dab"),u=a("88bc"),d=a.n(u),f=a("c1df"),b=a.n(f);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={name:"JeecgOrderModalForJEditableTable",components:{JDate:s["default"],JEditableTable:i["default"]},data:function(){return{title:"操作",visible:!1,form:this.$form.createForm(this),confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},activeKey:"1",table1:{loading:!1,dataSource:[],columns:[{title:"客户名",key:"name",width:"24%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"性别",key:"sex",width:"18%",type:o["a"].select,options:[{title:"男",value:"1"},{title:"女",value:"2"}],defaultValue:"",placeholder:"请选择${title}"},{title:"身份证号",key:"idcard",width:"24%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"${title}格式不正确"}]},{title:"手机号",key:"telphone",width:"24%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"${title}格式不正确"}]}]},table2:{loading:!1,dataSource:[],columns:[{title:"航班号",key:"ticketCode",width:"40%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"航班时间",key:"tickectDate",width:"30%",type:o["a"].date,placeholder:"请选择${title}",defaultValue:""}]},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{getAllTable:function(){return Promise.all([Object(o["c"])(this,"editableTable1"),Object(o["c"])(this,"editableTable2")])},add:function(){this.getAllTable().then((function(e){e[0].add(),e[1].add()})),this.edit({})},edit:function(e){var t=this;if(this.visible=!0,this.activeKey="1",this.form.resetFields(),this.model=Object.assign({},e),this.$nextTick((function(){t.form.setFieldsValue(d()(t.model,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.model.orderDate?b()(t.model.orderDate):null})})),this.model.id){var a={id:this.model.id};this.requestTableData(this.url.orderCustomerList,a,this.table1),this.requestTableData(this.url.orderTicketList,a,this.table2)}},close:function(){this.visible=!1,this.getAllTable().then((function(e){e[0].initialize(),e[1].initialize()})),this.$emit("close")},requestTableData:function(e,t,a){a.loading=!0,Object(c["getAction"])(e,t).then((function(e){a.dataSource=e.result||[]})).finally((function(){a.loading=!1}))},handleOk:function(){this.validateFields()},handleCancel:function(){this.close()},handleChangeTabs:function(e){Object(o["c"])(this,"editableTable".concat(e)).then((function(e){e.resetScrollTop()}))},validateFields:function(){var e=this;this.getAllTable().then((function(t){return Object(o["d"])(e.form,t)})).then((function(t){var a=e.classifyIntoFormData(t);return e.requestAddOrEdit(a)})).catch((function(t){t.error===o["b"]?e.activeKey=null==t.index?e.activeKey:(t.index+1).toString():console.error(t)}))},classifyIntoFormData:function(e){var t=Object.assign(this.model,e.formValue);return t.orderDate=t.orderDate?t.orderDate.format("YYYY-MM-DD HH:mm:ss"):null,p({},t,{jeecgOrderCustomerList:e.tablesValue[0].values,jeecgOrderTicketList:e.tablesValue[1].values})},requestAddOrEdit:function(e){var t=this,a=this.url.add,r="post";this.model.id&&(a=this.url.edit,r="put"),this.confirmLoading=!0,Object(c["httpAction"])(a,e,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.close()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}},g=m,v=a("2877"),y=Object(v["a"])(g,r,l,!1,null,"69b37a74",null);t["default"]=y.exports}}]);