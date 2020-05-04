(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62087812","chunk-91c89b8a","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"0ae2":function(e,t,a){},"1bc32":function(e,t,a){"use strict";var r=a("a26d"),o=a.n(r);o.a},"2dab":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},o=[],i={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(){return document.body}}},data:function(){var e=this.value;return{decorator:"",momVal:e?moment(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?moment(e,this.dateFormat):null}},methods:{moment:moment,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},s=i,n=a("2877"),l=Object(n["a"])(s,r,o,!1,null,null,null);t["default"]=l.exports},"8a45":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[a("div",[a("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:5}},[e._v("客户名")]),a("a-col",{attrs:{span:5}},[e._v("性别")]),a("a-col",{attrs:{span:5}},[e._v("身份证号码")]),a("a-col",{attrs:{span:5}},[e._v("手机号")]),a("a-col",{attrs:{span:4}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderCustomerList,(function(t,r){return a("a-row",{key:r,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:5}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+r+"].name",{initialValue:t.name,rules:[{required:!0,message:"请输入用户名!"}]}],expression:"['jeecgOrderCustomerList['+index+'].name', {'initialValue':item.name,rules: [{ required: true, message: '请输入用户名!' }]}]"}],attrs:{placeholder:"客户名"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+r+"].sex",{initialValue:t.sex}],expression:"['jeecgOrderCustomerList['+index+'].sex', {'initialValue':item.sex}]"}],attrs:{placeholder:"性别"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+r+"].idcard",{initialValue:t.idcard,rules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"身份证号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].idcard', {'initialValue':item.idcard,rules: [{ pattern: '^\\\\d{6}(18|19|20)?\\\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\\\d|3[01])\\\\d{3}(\\\\d|[xX])$', message: '身份证号格式不对!' }]}]"}],attrs:{placeholder:"身份证号"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+r+"].telphone",{initialValue:t.telphone,rules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"手机号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].telphone', {'initialValue':item.telphone,rules: [{ pattern: '^1(3|4|5|7|8)\\\\d{9}$', message: '手机号格式不对!' }]}]"}],attrs:{placeholder:"手机号"}})],1)],1),a("a-col",{attrs:{span:4}},[a("a-form-item",[a("a-button",{attrs:{icon:"plus"},on:{click:e.addRowCustom}}),e._v(" \n                  "),a("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowCustom(r)}}})],1)],1)],1)}))],2)]),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[a("div",[a("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:6}},[e._v("航班号")]),a("a-col",{attrs:{span:6}},[e._v("航班时间")]),a("a-col",{attrs:{span:6}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderTicketList,(function(t,r){return a("a-row",{key:r,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+r+"].ticketCode",{initialValue:t.ticketCode,rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['jeecgOrderTicketList['+index+'].ticketCode', {'initialValue':item.ticketCode,rules: [{ required: true, message: '请输入航班号!' }]}]"}],attrs:{placeholder:"航班号"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+r+"].tickectDate",{initialValue:t.tickectDate}],expression:"['jeecgOrderTicketList['+index+'].tickectDate', {'initialValue':item.tickectDate}]"}],attrs:{placeholder:"航班时间","trigger-change":!0}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{attrs:{icon:"plus"},on:{click:e.addRowTicket}}),e._v(" \n                  "),a("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowTicket(r)}}})],1)],1)],1)}))],2)])],1)],1)],1)],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("0fea"),n=a("2dab");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"JeecgOrderMainModal",components:{JDate:n["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;if(this.form.resetFields(),this.orderMainModel=Object.assign({},e),this.orderMainModel.jeecgOrderCustomerList=[{}],this.orderMainModel.jeecgOrderTicketList=[{}],console.log(this.orderMainModel.id),this.orderMainModel.id){var a={id:this.orderMainModel.id};Object(s["getAction"])(this.url.orderCustomerList,a).then((function(e){e.success&&(t.orderMainModel.jeecgOrderCustomerList=e.result,t.$forceUpdate())})),Object(s["getAction"])(this.url.orderTicketList,a).then((function(e){e.success&&(t.orderMainModel.jeecgOrderTicketList=e.result,t.$forceUpdate())}))}this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?moment(t.orderMainModel.orderDate):null})})),console.log(this.orderMainModel)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var o="",i="";e.orderMainModel.id?(o+=e.url.edit,i="put"):(o+=e.url.add,i="post");var n=Object.assign(e.orderMainModel,r);n.orderDate=n.orderDate?n.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=c({},n,{jeecgOrderCustomerList:n.jeecgOrderCustomerList,jeecgOrderTicketList:n.jeecgOrderTicketList});console.log(l),Object(s["httpAction"])(o,l,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},addRowCustom:function(){this.orderMainModel.jeecgOrderCustomerList.push({}),this.$forceUpdate()},delRowCustom:function(e){console.log(e),this.orderMainModel.jeecgOrderCustomerList.splice(e,1),this.$forceUpdate()},addRowTicket:function(){this.orderMainModel.jeecgOrderTicketList.push({}),console.log(this.orderMainModel.jeecgOrderTicketList),this.$forceUpdate()},delRowTicket:function(e){console.log(e),this.orderMainModel.jeecgOrderTicketList.splice(e,1),this.$forceUpdate()}}},u=d,m=(a("e8d3"),a("2877")),p=Object(m["a"])(u,r,o,!1,null,"f7d1e05c",null);t["default"]=p.exports},"9b15":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("一对多示例")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("jeecgOrderMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},o=[],i=a("8a45"),s=a("b65a"),n={name:"JeecgOrderMainList",mixins:[s["a"]],components:{JeecgOrderMainModal:i["default"]},data:function(){return{description:"订单管理页面",importExcelUrl:"".concat(window._CONFIG["domianURL"],"/test/jeecgOrderMain/importExcel"),columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e,t,a){var r="";return"1"===e?r="国内订单":"2"===e&&(r="国际订单"),r}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/test/jeecgOrderMain/list",delete:"/test/jeecgOrderMain/delete",deleteBatch:"/test/jeecgOrderMain/deleteBatch",exportXlsUrl:"/test/jeecgOrderMain/exportXls"}}},methods:{}},l=n,c=(a("1bc32"),a("2877")),d=Object(c["a"])(l,r,o,!1,null,"1f16717b",null);t["default"]=d.exports},a26d:function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("8e6e"),a("7f7f");var r=a("bd86"),o=(a("456d"),a("ac6a"),a("ca00")),i=a("0fea"),s=a("9fb0");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(s["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(o["filterObj"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(i["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),o=document.createElement("a");o.style.display="none",o.href=r,o.setAttribute("download",e+".xls"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,o=a.result,i=o.msg,s=o.fileUrl,n=o.fileName,l=window._CONFIG["domianURL"]+s;this.$warning({title:r,content:t("div",[t("span",[" ",i," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:n}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},e8d3:function(e,t,a){"use strict";var r=a("0ae2"),o=a.n(r);o.a}}]);