(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a98029f"],{23083:function(e,t,n){"use strict";var o=n("c1a6"),i=n.n(o);i.a},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function i(){o.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var a=0,r=o.length;a<r;a++)o[a].fn!==t&&o[a].fn._!==t&&i.push(o[a]);return i.length?n[e]=i:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var o=n(3),i=n(4);function a(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return r(e,t,n);if(o.nodeList(e))return s(e,t,n);if(o.string(e))return c(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function s(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function c(e,t,n){return i(document.body,e,t,n)}e.exports=a},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,n){var o=n(5);function i(e,t,n,o,i){var a=r.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}function a(e,t,n,o,a){return"function"===typeof e.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,o,a)})))}function r(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=a},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=i},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t){s(this,e),this.resolveOptions(t),this.initSelection()}return r(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=c,u=n(1),d=n.n(u),f=n(2),h=n.n(f),y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(e,n){m(this,t);var o=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return b(t,e),p(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===y(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=h()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return w("action",e)}},{key:"defaultTarget",value:function(e){var t=w("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return w("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(d.a);function w(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t["default"]=v}])["default"]}))},b71a:function(e,t,n){"use strict";var o=n("dd28"),i=n.n(o);i.a},c1a6:function(e,t,n){},dd28:function(e,t,n){},e3a7:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("a-form-item",{attrs:{label:"表名"}},[n("a-input",{attrs:{placeholder:"请输入表名"},model:{value:e.queryParam.tableName,callback:function(t){e.$set(e.queryParam,"tableName",t)},expression:"queryParam.tableName"}})],1)],1),n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("a-form-item",{attrs:{label:"表类型"}},[n("j-dict-select-tag",{attrs:{dictCode:"cgform_table_type"},model:{value:e.queryParam.tableType,callback:function(t){e.$set(e.queryParam,"tableType",t)},expression:"queryParam.tableType"}})],1)],1),n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("a-form-item",{attrs:{label:"表描述"}},[n("a-input",{attrs:{placeholder:"请输入表描述"},model:{value:e.queryParam.tableTxt,callback:function(t){e.$set(e.queryParam,"tableTxt",t)},expression:"queryParam.tableTxt"}})],1)],1),n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),n("a-button",{attrs:{type:"primary",icon:"highlight"},on:{click:e.doCgformButton}},[e._v("自定义按钮")]),n("a-button",{attrs:{type:"primary",icon:"strikethrough"},on:{click:e.doEnhanceJs}},[e._v("JS增强")]),n("a-button",{attrs:{type:"primary",icon:"filter"},on:{click:e.doEnhanceSql}},[e._v("SQL增强")]),n("a-button",{attrs:{type:"primary",icon:"tool"},on:{click:e.doEnhanceJava}},[e._v("Java增强")]),n("a-button",{attrs:{type:"primary",icon:"database"},on:{click:e.importOnlineForm}},[e._v("从数据库导入表单")]),n("a-button",{attrs:{type:"primary",icon:"database"},on:{click:e.goGenerateCode}},[e._v("代码生成")]),e.selectedRowKeys.length>0?n("a-dropdown",[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:e.batchDel}},[n("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),n("a-button",[e._v(" 批量操作\n        "),n("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),n("div",[n("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[n("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("\n      已选择\n      "),n("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("\n      项\n      "),n("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),n("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,o){return[n("a",{on:{click:function(t){return e.handleEdit(o)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[e._v("更多\n            "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},["Y"!=o.isDbSynch?n("a-menu-item",[n("a",{on:{click:function(t){return e.openSyncModal(o.id)}}},[e._v("同步数据库")])]):e._e(),"Y"==o.isDbSynch&&3!==o.tableType?[n("a-menu-item",[n("a",{on:{click:function(t){return e.goPageOnline(o)}}},[e._v("功能测试")])]),n("a-menu-item",[n("a",{on:{click:function(t){return e.handleOnlineUrlShow(o)}}},[e._v("配置地址")])])]:e._e(),n("a-menu-item",[n("a",{on:{click:function(t){return e.copyConfig(o.id)}}},[e._v("复制视图")])]),1==o.hascopy?n("a-menu-item",[n("a",{on:{click:function(t){return e.showMyCopyInfo(o.id)}}},[e._v("配置视图")])]):e._e(),n("a-menu-item",[n("a",{on:{click:function(t){return e.handleRemoveRecord(o.id)}}},[e._v("移除")])]),n("a-menu-item",[n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(o.id)}}},[n("a",[e._v("删除")])])],1)],2)],1)]}},{key:"dbsync",fn:function(t){return["Y"===t?n("span",{staticStyle:{color:"limegreen"}},[e._v("已同步")]):e._e(),"N"===t?n("span",{staticStyle:{color:"red"}},[e._v("未同步")]):e._e()]}}])})],1),n("onl-cgform-head-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),n("a-modal",{staticStyle:{top:"5%",height:"95%"},attrs:{width:500,height:300,title:"同步数据库",visible:e.syncModalVisible},on:{cancel:e.handleCancleDbSync}},[n("template",{slot:"footer"},[n("a-button",{on:{click:e.handleCancleDbSync}},[e._v("关闭")]),n("a-button",{attrs:{type:"primary",loading:e.syncLoading},on:{click:e.handleDbSync}},[e._v("\n        确定\n      ")])],1),n("a-radio-group",{model:{value:e.synMethod,callback:function(t){e.synMethod=t},expression:"synMethod"}},[n("a-radio",{staticStyle:{display:"block",width:"30px",height:"30px"},attrs:{value:"normal"}},[e._v("普通同步(保留表数据)")]),n("a-radio",{staticStyle:{display:"block",width:"30px",height:"30px"},attrs:{value:"force"}},[e._v("强制同步(删除表,重新生成)")])],1)],2),n("a-modal",{attrs:{title:e.onlineUrlTitle,visible:e.onlineUrlVisible},on:{cancel:e.handleOnlineUrlClose}},[n("template",{slot:"footer"},[n("a-button",{on:{click:e.handleOnlineUrlClose}},[e._v("关闭")]),n("a-button",{staticClass:"copy-this-text",attrs:{type:"primary","data-clipboard-text":e.onlineUrl},on:{click:e.onCopyUrl}},[e._v("复制")])],1),n("p",[e._v(e._s(e.onlineUrl))])],2),n("enhance-js",{ref:"ehjs"}),n("enhance-sql",{ref:"ehsql"}),n("enhance-java",{ref:"ehjava"}),n("trans-db2-online",{ref:"transd2o",on:{ok:e.transOk}}),n("code-generator",{ref:"cg"}),n("onl-cgform-button-list",{ref:"btnList"})],1)},i=[],a=n("89f2"),r=n("0fea"),s=n("7b16"),c=n("b65a"),l=n("b311"),u=n.n(l),d=n("ca00"),f={name:"OnlCgformHeadList",mixins:[c["a"]],components:{JDictSelectTag:s["default"]},data:function(){var e=this;return{description:"Online表单开发管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,n){return parseInt(n)+1}},{title:"表类型",align:"center",dataIndex:"tableType",customRender:function(t,n){var o=Object(a["a"])(e.tableTypeDictOptions,"".concat(t));return"Y"===n.isTree&&(o+="(树)"),o}},{title:"表名",align:"center",dataIndex:"tableName"},{title:"表描述",align:"center",dataIndex:"tableTxt"},{title:"版本",align:"center",dataIndex:"tableVersion"},{title:"同步数据库状态",align:"center",dataIndex:"isDbSynch",scopedSlots:{customRender:"dbsync"}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/online/cgform/head/list",delete:"/online/cgform/head/delete",deleteBatch:"/online/cgform/head/deleteBatch",doDbSynch:"/online/cgform/api/doDbSynch/",removeRecord:"/online/cgform/head/removeRecord",copyOnline:"/online/cgform/head/copyOnline"},tableTypeDictOptions:[],sexDictOptions:[],syncModalVisible:!1,syncFormId:"",synMethod:"normal",syncLoading:!1,onlineUrlTitle:"",onlineUrlVisible:!1,onlineUrl:"",selectedRowKeys:[],selectedRows:[]}},created:function(){var e=this;Object(a["c"])("cgform_table_type").then((function(t){t.success&&(e.tableTypeDictOptions=t.result)}))},methods:{doDbSynch:function(e){var t=this;Object(r["postAction"])(this.url.doDbSynch+e,{synMethod:"1"}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter,this.filters);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,e.copyType=0,Object(d["h"])(e)},handleCancleDbSync:function(){this.syncModalVisible=!1},handleDbSync:function(){var e=this;this.syncLoading=!0,Object(r["postAction"])(this.url.doDbSynch+this.syncFormId+"/"+this.synMethod).then((function(t){e.syncModalVisible=!1,e.syncLoading=!1,t.success?(e.$message.success(t.message),e.loadData()):e.$message.warning(t.message)})),setTimeout((function(){e.syncLoading&&(e.syncModalVisible=!1,e.syncLoading=!1,e.$message.success("网络延迟,已自动刷新!"),e.loadData())}),1e4)},openSyncModal:function(e){this.syncModalVisible=!0,this.syncLoading=!1,this.syncFormId=e},goPageOnline:function(e){"erp"===e.themeTemplate?this.$router.push({path:"/online/cgformErpList/"+e.id}):"Y"==e.isTree?this.$router.push({path:"/online/cgformTreeList/"+e.id}):this.$router.push({path:"/online/cgformList/"+e.id})},handleOnlineUrlClose:function(){this.onlineUrlTitle="",this.onlineUrlVisible=!1},handleOnlineUrlShow:function(e){"Y"==e.isTree?this.onlineUrl="/online/cgformTreeList/".concat(e.id):this.onlineUrl="/online/cgformList/".concat(e.id),this.onlineUrlVisible=!0,this.onlineUrlTitle="菜单链接["+e.tableTxt+"]"},handleRemoveRecord:function(e){var t=this;this.$confirm({title:"确认要移除此记录?",onOk:function(){Object(r["deleteAction"])(t.url.removeRecord,{id:e}).then((function(e){e.success?(t.$message.success("移除成功"),t.loadData()):t.$message.warning(e.message)}))},onCancel:function(){}})},doEnhanceJs:function(){this.selectedRowKeys&&1==this.selectedRowKeys.length?this.$refs.ehjs.show(this.selectedRowKeys[0]):this.$message.warning("请先选中一条记录")},doEnhanceSql:function(){this.selectedRowKeys&&1==this.selectedRowKeys.length?this.$refs.ehsql.show(this.selectedRowKeys[0]):this.$message.warning("请先选中一条记录")},doEnhanceJava:function(){this.selectedRowKeys&&1==this.selectedRowKeys.length?this.$refs.ehjava.show(this.selectedRowKeys[0]):this.$message.warning("请先选中一条记录")},doCgformButton:function(){this.selectedRowKeys&&1==this.selectedRowKeys.length?this.$refs.btnList.show(this.selectedRowKeys[0]):this.$message.warning("请先选中一条记录")},importOnlineForm:function(){this.$refs.transd2o.show()},transOk:function(){this.loadData()},goGenerateCode:function(){if(this.selectedRowKeys&&1==this.selectedRowKeys.length){var e=this.selectedRows[0];e.isDbSynch&&"N"!=e.isDbSynch?3!=e.tableType?this.$refs.cg.show(this.selectedRowKeys[0]):this.$message.warning("请选中该表对应的主表生成代码"):this.$message.warning("请先同步数据库!")}else this.$message.warning("请先选中一条记录")},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},onCopyUrl:function(){var e=this,t=new u.a(".copy-this-text");t.on("success",(function(){t.destroy(),e.$message.success("复制成功"),e.handleOnlineUrlClose()})),t.on("error",(function(){e.$message.error("该浏览器不支持自动复制"),t.destroy()}))},showMyCopyInfo:function(e){this.$router.push({path:"/online/copyform/"+e})},copyConfig:function(e){var t=this;Object(r["postAction"])("".concat(this.url.copyOnline,"?code=").concat(e)).then((function(e){e.success?(t.$message.success("复制成功"),t.loadData()):t.$message.error("复制失败>>"+e.message)}))}}},h=f,y=(n("b71a"),n("23083"),n("2877")),p=Object(y["a"])(h,o,i,!1,null,"1fedd417",null);t["default"]=p.exports}}]);