(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7508b5bc","chunk-529faa7e","chunk-2d221f48"],{"0673":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exception"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.config[t.type].img}})]),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.config[t.type].title))]),s("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},n=[],c=s("cd0a"),i={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:c["default"]}},created:function(){var t=this;this.$message.warning("您没有当前页面权限，即将跳转到系统首页..."),setTimeout((function(){t.handleToHome()}),3e3)},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},o=i,r=(s("1da4"),s("2877")),l=Object(r["a"])(o,a,n,!1,null,"b93d5972",null);e["default"]=l.exports},"1da4":function(t,e,s){"use strict";var a=s("f96d"),n=s.n(a);n.a},cd0a:function(t,e,s){"use strict";s.r(e);var a={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};e["default"]=a},e409:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("exception-page",{attrs:{type:"403"}})},n=[],c=s("0673"),i={components:{ExceptionPage:c["default"]}},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,"e1fa96e6",null);e["default"]=l.exports},f96d:function(t,e,s){}}]);