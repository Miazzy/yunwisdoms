(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2602a8d8"],{"0f66":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return l}));var a=n("22b6");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a["a"].post("project/node",{module:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a["a"].post("project/node/allList",{module:t,node:e})}function r(t){return a["a"].post("project/node/save",{list:t})}function l(){return a["a"].post("project/node/clear")}},"408c":function(t,e,n){var a=n("2b3e"),i=function(){return a.Date.now()};t.exports=i},b047c:function(t,e,n){var a=n("1a8c"),i=n("408c"),o=n("b4b0"),r="Expected a function",l=Math.max,s=Math.min;function c(t,e,n){var c,d,u,f,p,h,m=0,v=!1,b=!1,w=!0;if("function"!=typeof t)throw new TypeError(r);function I(e){var n=c,a=d;return c=d=void 0,m=e,f=t.apply(a,n),f}function _(t){return m=t,p=setTimeout(k,e),v?I(t):f}function g(t){var n=t-h,a=t-m,i=e-n;return b?s(i,u-a):i}function C(t){var n=t-h,a=t-m;return void 0===h||n>=e||n<0||b&&a>=u}function k(){var t=i();if(C(t))return x(t);p=setTimeout(k,g(t))}function x(t){return p=void 0,w&&c?I(t):(c=d=void 0,f)}function y(){void 0!==p&&clearTimeout(p),m=0,c=h=d=p=void 0}function M(){return void 0===p?f:x(i())}function F(){var t=i(),n=C(t);if(c=arguments,d=this,h=t,n){if(void 0===p)return _(h);if(b)return p=setTimeout(k,e),I(h)}return void 0===p&&(p=setTimeout(k,e)),f}return e=o(e)||0,a(n)&&(v=!!n.leading,b="maxWait"in n,u=b?l(o(n.maxWait)||0,e):u,w="trailing"in n?!!n.trailing:w),F.cancel=y,F.flush=M,F}t.exports=c},b4b0:function(t,e,n){var a=n("1a8c"),i=n("ffd6"),o=NaN,r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(i(t))return o;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=s.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):l.test(t)?o:+t}t.exports=u},f44b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"admin-menu"},[a("wrapper-content",[a("div",{staticClass:"action"},[a("Button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.rowClick(null,"new")}}},[e._v("添加")])],1),a("Table",{attrs:{columns:e.columns,dataSource:e.dataSource,loading:e.loading,pagination:!1},scopedSlots:e._u([{key:"url",fn:function(t,n,i){return[n.params?a("span",[e._v(e._s(n.url+"/"+n.params))]):a("span",[e._v(e._s(n.url))]),null!==n.values&&""!==n.values?a("span",[e._v("- "+e._s(n.values))]):e._e()]}},{key:"status",fn:function(t,n,i){return[n.status?a("span",{staticClass:"success-color"},[e._v("使用中")]):a("span",[e._v("已禁用")])]}},{key:"action",fn:function(t,n,i){return[a("a",{attrs:{disabled:3==n.dept},on:{click:function(t){return e.rowClick(n,"add")}}},[e._v("添加下级")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.rowClick(n,"edit")}}},[e._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.rowClick(n,"status")}}},[n.status?a("span",[e._v("禁用")]):a("span",[e._v("启用")])]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.rowClick(n,"del")}}},[e._v("删除")])]}}])})],1),a("Modal",{attrs:{width:800,title:e.actionInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.actionInfo.modalStatus,callback:function(t){e.$set(e.actionInfo,"modalStatus",t)},expression:"actionInfo.modalStatus"}},[a("Form",{attrs:{autoFormCreate:function(e){t.form=e}},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{form:e.form,label:"名称",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"title",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入名称"}]},help:"必填，请填写菜单名称（如：系统管理），建议字符不要太长，一般4-6个汉字"}},[a("Input",{attrs:{placeholder:"菜单名称"}})],1)],1),a("a-col",{attrs:{span:12}},[e._v('"符号，不要填写路由地址。"\n          >\n            '),a("Input",{attrs:{placeholder:"路由地址"}})],1),a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"路径",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"file_path",help:"选填，文件路径。默认与地址相同，特殊的文件路径可以在此定义"}},[a("Input",{attrs:{placeholder:"路由地址"}})],1)],1),a("a-col",{attrs:{span:12}},[e._v('"符号。"\n          >\n            '),a("a-select",{attrs:{showSearch:"",placeholder:"请选择权限节点",filterOption:!1,notFoundContent:e.fetching?void 0:null},on:{search:e.fetchNode,change:e.handleChange}},[e.fetching?a("a-spin",{attrs:{slot:"notFoundContent",size:"small"},slot:"notFoundContent"}):e._e(),e._l(e.nodeList,(function(t){return a("a-select-option",{key:t.node},[e._v(e._s(t.node)+" - "+e._s(t.title))])}))],2)],1),a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"排序",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"sort",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入排序"}],initialValue:0},help:"必填，整数。数字越小越靠前，最小值为0。"}},[a("Input",{attrs:{placeholder:"排序"}})],1)],1),a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"参数",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"params",help:"选填，请填写路由的额外参数（如：:id，则路由为：admin/user/index/:id）"}},[a("Input",{attrs:{placeholder:"额外参数"}})],1)],1),a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"数值",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"values",help:"选填，请填写路由的额外参数数值（如路由为 admin/user/index/:id，参数值为 1，则最终的链接会解析成：admin/user/index/1）"}},[a("Input",{attrs:{placeholder:"参数数值"}})],1)],1),a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"图标",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"icon",help:"可选，设置菜单选项前置图标"}},[a("Input",{attrs:{placeholder:"前置图标"}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"侧栏",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"show_slider",fieldDecoratorOptions:{valuePropName:"checked",initialValue:!0},help:"可选，取消勾选，则该页面将不显示侧边菜单栏"}},[a("Checkbox",[e._v("是否显示侧栏")])],1)],1),a("a-col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"内页",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"is_inner",fieldDecoratorOptions:{valuePropName:"checked",initialValue:!1},help:"可选，选中为菜单内页，将不会显示在导航菜单上。用于菜单选中项渲染判断"}},[a("Checkbox",[e._v("是否内页")])],1)],1)],1),a("FormItem",[a("div",{staticClass:"action-btn",staticStyle:{"text-align":"center"}},[a("Button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit",size:"large",loading:e.actionInfo.confirmLoading}},[e._v("保存")]),a("Button",{staticClass:"middle-btn",attrs:{size:"large"},on:{click:function(t){e.actionInfo.modalStatus=!1}}},[e._v("取消")])],1)])],1)],1)],1)},i=[],o=(n("c5f6"),n("55dd"),n("ac6a"),n("1f27")),r=n("2f14"),l=(n("68fe"),n("0f66")),s=n("b047c"),c=n.n(s),d=(Form.Item,[{title:"名称",dataIndex:"title",width:"15%"},{title:"地址",dataIndex:"url",width:"20%",scopedSlots:{customRender:"url"}},{title:"路径",dataIndex:"file_path"},{title:"节点",width:"20%",dataIndex:"node"},{title:"排序",dataIndex:"sort"},{title:"类型",dataIndex:"innerText"},{title:"操作",dataIndex:"id",scopedSlots:{customRender:"action"}}]),u={components:{Table:antd.Table,Button:antd.Button,Divider:antd.Divider,Modal:antd.Modal,Form:antd.Form,FormItem:antd.FormItem,Input:antd.Input,Checkbox:antd.Checkbox},data:function(){return this.lastFetchId=0,this.fetchNode=c()(this.fetchNode,800),{columns:d,data:[],dataSource:[],nodeList:[],loading:!0,fetching:!1,newMenu:null,form:{},actionInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"编辑菜单",okText:"确定",cancelText:"放弃"}}},created:function(){this.init()},methods:{init:function(){var t=this;t.loading=!0,Object(o["d"])().then((function(e){t.loading=!1;var n=e.data;n.forEach((function(t){t.key=t.id,t.dept=1,t.children&&t.children.forEach((function(t){t.key=t.id,t.dept=2,t.children&&t.children.forEach((function(t){t.key=t.id,t.dept=3}))}))})),t.dataSource=n}))},rowClick:function(t,e){var n=this;if(n.newMenu=null,n.nodeList=[],"add"==e||"edit"==e||"new"==e)setTimeout((function(){n.form&&n.form.resetFields()}),0),n.actionInfo.modalStatus=!0,n.actionInfo.modalTitle="添加菜单","edit"==e?setTimeout((function(){n.actionInfo.modalTitle="编辑菜单",n.form.setFieldsValue({title:t.title,file_path:t.file_path,url:t.url,sort:t.sort,node:t.node,params:t.params,values:t.values,icon:t.icon,is_inner:t.is_inner,show_slider:t.show_slider}),n.newMenu=t}),0):"add"==e?(n.newMenu={status:1,dept:parseInt(t.dept)+1},n.newMenu.pid=t.id):n.newMenu={status:1,dept:1,pid:0};else if("status"==e){var a=t.status;t.status=Number(!a),a?Object(o["c"])(t.id,t.status):Object(o["f"])(t.id,t.status)}else if("del"==e)Modal.confirm({title:"确定要删除此菜单?",content:"删除后不可恢复，且子菜单会被同时删除",okText:"确定",okType:"danger",cancelText:"放弃",onOk:function(){return Object(o["a"])(t.id).then((function(e){n.dataSource.forEach((function(e,a){e.id!=t.id?e.children&&e.children.forEach((function(n,a){n.id!=t.id?n.children&&n.children.forEach((function(e,a){e.id!=t.id||n.children.splice(a,1)})):e.children.splice(a,1)})):n.dataSource.splice(a,1)}))})),Promise.resolve()}})},handleSubmit:function(){var t=this;t.form.validateFields((function(e,n){e||t.handleOk()}))},handleOk:function(){var t=this;t.actionInfo.confirmLoading=!0;var e=t.form.getFieldsValue();t.newMenu.id?e.id=t.newMenu.id:Object.assign(e,t.newMenu),Object(o["b"])(e).then((function(n){t.actionInfo.confirmLoading=!1,Object(r["a"])(n)&&(t.newMenu.id?(t.newMenu.title=e.title,t.newMenu.url=e.url,t.newMenu.sort=e.sort,t.newMenu.file_path=e.file_path,t.newMenu.node=e.node,t.newMenu.params=e.params,t.newMenu.values=e.values,t.newMenu.icon=e.icon,t.newMenu.is_inner=!!e.is_inner,t.newMenu.show_slider=!!e.show_slider,t.dataSource.forEach((function(t){t.id!=e.id?t.children&&t.children.forEach((function(t){t.id!=e.id?t.children&&t.children.forEach((function(t){t.id!=e.id||Object.assign(t,e)})):Object.assign(t,e)})):Object.assign(t,e)}))):(e=n.data,e.key=n.data.id,e.is_inner=!!n.data.is_inner,e.show_slider=!!n.data.show_slider,e.dept=t.newMenu.dept,0==t.newMenu.pid?t.dataSource.push(e):t.dataSource.forEach((function(t){t.id!=e.pid?t.children&&t.children.forEach((function(t){t.id!=e.pid?t.children&&t.children.forEach((function(t){t.id!=e.id||(t.children?t.children.push(e):t.children=[e])})):t.children?t.children.push(e):t.children=[e]})):t.children?t.children.push(e):t.children=[e]}))),t.form.resetFields(),t.newMenu=null,t.actionInfo.modalStatus=!1)}))},handleChange:function(t){this.nodeList=[],this.fetching=!1},fetchNode:function(t){var e=this;this.lastFetchId+=1;var n=this.lastFetchId;this.nodeList=[],this.fetching=!0,Object(l["a"])("project",t).then((function(t){n===e.lastFetchId&&(e.fetching=!1,e.nodeList=t.data)}))}}},f=u,p=n("2877"),h=Object(p["a"])(f,a,i,!1,null,null,null);e["default"]=h.exports},ffd6:function(t,e,n){var a=n("3729"),i=n("1310"),o="[object Symbol]";function r(t){return"symbol"==typeof t||i(t)&&a(t)==o}t.exports=r}}]);