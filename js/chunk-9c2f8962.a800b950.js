(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c2f8962","chunk-2d0b2f37"],{"25fd":function(t,e,a){"use strict";a.r(e);var r=a("94f0");a.d(e,"ArticlePage",(function(){return r["default"]}));var n=a("4901");a.d(e,"ArticleListContent",(function(){return n["default"]}))},"2e44":function(t,e,a){},d77c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{avatar:t.avatar}},[a("div",{staticStyle:{height:"60px",position:"relative"},attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title",staticStyle:{"font-size":"14px"}},[a("span",{staticClass:"welcome-text",style:t.welcomeStyle},[t._v(t._s(t.welcome))])]),a("div",{style:t.postStyle},[t._v("初级博主 | 总博文数 0 | 博文排名 10 | 访问总数 2000")])]),a("div",[a("a-row",{attrs:{gutter:24}},[a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:4,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-top":"0px"},attrs:{loading:t.loading,title:"文档管理",bordered:!1}},[a("div",{staticClass:"members"},[a("a-row",t._l(t.manage,(function(e,r){return a("a-col",{key:r,attrs:{span:24}},[a("a",{attrs:{href:e.href}},[a("a-avatar",{attrs:{size:"small",src:e.avatar}}),a("span",{staticClass:"member",on:{click:e.click}},[t._v(t._s(e.name))])],1)])})),1)],1)])],1),a("a-col",{attrs:{xl:20,lg:24,md:24,sm:24,xs:24}},[a("a-card",{attrs:{loading:t.loading,title:"",bordered:!1}},[a("article-page")],1)],1)],1)],1)])},n=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("6b54"),a("75fc")),i=a("bd86"),o=(a("7f7f"),a("96cf"),a("3b8d")),c=a("ca00"),u=a("25fd"),l=a("b445"),p=a("0fea");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"DocManage",components:{PageLayout:l["default"],ArticlePage:u["ArticlePage"]},data:function(){var t=this;return{timeFix:Object(c["timeFix"])(),welcome:Object(c["welcome"])(),postName:"",departName:"",avatar:"",user:{},welcomeStyle:{},postStyle:{"margin-top":"-5px","margin-left":"-113px",flex:"auto",position:"absolute",left:"90px",transform:"scale(0.8)"},projects:[],loading:!0,radarLoading:!0,activities:[],nodelist:[],teams:[],article:{id:"-1",dynamicTags:[],title:"",mdContent:"",cid:""},manage:[{name:"文档中心",avatar:"/images/内容_文档.png",click:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push("/document/center");case 1:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},{name:"我的文档",avatar:"/images/个人中心.png",click:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push("/document/mine");case 1:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},{name:"创建文档",avatar:"/images/导航.png",click:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push("/document/publish");case 1:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},{name:"热门文档",avatar:"/images/等级.png",href:"/blog/hot"},{name:"文档排行",avatar:"/images/icon-rank-01.svg",href:"/blog/rank"}],axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[],radarData:[],pageTitle:"",pageType:"Y",pageScope:1,pageColumn:"社会聚焦",tags:[],tagInputVisible:!1,tagInputValue:""}},computed:{userInfo:function(){return this.$store.getters.userInfo}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.user=this.userInfo,console.log("this.avatar :"+this.avatar);try{p["getRoleList"]().then((function(t){console.log("workplace -> call manageAPI.getRoleList()",t)}))}catch(e){console.log(e)}try{p["getServiceList"]().then((function(t){console.log("workplace -> call manageAPI.getServiceList()",t)}))}catch(e){console.log(e)}return this.handlePostStyle(),t.prev=5,t.next=8,p["queryUserInfoByView"](this.user.username);case 8:this.v_user=t.sent,this.postName=this.v_user[0]["post"],this.departName=this.v_user[0]["name"],this.address=this.v_user[0]["address"],this.bio=this.v_user[0]["bio"],this.avatar=window._CONFIG["uploadURL"]+"/"+this.v_user[0]["avatar"],t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),console.log("工作台设置员工岗位信息/部门信息异常："+t.t0);case 19:return t.prev=19,t.next=22,p["queryDynamic"]();case 22:this.nodelist=t.sent,t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](19),console.log(t.t1);case 28:return t.prev=28,t.next=31,p["queryBlogInfoNew"](0,5);case 31:this.news=t.sent,t.next=37;break;case 34:t.prev=34,t.t2=t["catch"](28),console.error(t.t2);case 37:console.log("动态信息："+JSON.stringify(this.nodelist));case 38:case"end":return t.stop()}}),t,this,[[5,16],[19,25],[28,34]])})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar(),this.handlePostStyle()},methods:h({},Vuex.mapGetters(["nickname","welcome"]),{getProjects:function(){var t=this;this.$http.get("/api/list/search/projects").then((function(e){t.projects=e.result&&e.result.data,t.loading=!1}))},getActivity:function(){var t=this;this.$http.get("/api/workplace/activity").then((function(e){t.activities=e.result}))},getTeams:function(){var t=this;this.$http.get("/api/workplace/teams").then((function(e){t.teams=e.result}))},handlePostStyle:function(){this.welcome.length>76&&(this.postStyle={display:"none"}),this.welcome.length>200&&(this.welcomeStyle={"font-size":"13px"}),this.welcome.length>250&&(this.welcomeStyle={"font-size":"12px"}),this.welcome.length>270&&(this.welcomeStyle={"font-size":"12px"},this.welcome=this.welcome.substring(0,270)+"...")},handleTagClose:function(){var t=this.tags;console.log(t),this.tags=t},handleShowTagInput:function(){this.tagInputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleTagInputChange:function(t){this.tagInputValue=t.target.value},handleTagInputConfirm:function(){var t=this.tagInputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(s["a"])(e),[t])),console.log(e),Object.assign(this,{tags:e,tagInputVisible:!1,tagInputValue:""})},handleSubmitBlog:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e={},!c["isNull"](this.pageTitle)){t.next=5;break}return this.$message.error("请输入博文标题！"),t.abrupt("return","");case 5:if(!c["isNull"](this.article.mdContent)){t.next=8;break}return this.$message.error("请输入博文内容！"),t.abrupt("return","");case 8:if(!c["isNull"](this.tags.toString())){t.next=11;break}return this.$message.error("请输入文章标签！"),t.abrupt("return","");case 11:return a=(new Date).getTime(),e.id=c["queryUniqueID"](),e.blog_title=this.pageTitle,e.content=this.article.mdContent,e.create_by=this.userInfo.username,e.create_time=c["formatDate"](a,"yyyy-MM-dd hh:mm:ss"),e.page_tags=this.tags.toString(),e.page_column=this.pageColumn,e.page_type=this.pageType,e.page_scope=this.pageScope,e.bpm_status=1,e.flag="N",t.next=25,p["postTableData"]("bs_blog",e);case 25:r=t.sent,this.$message.warning("提交博文成功！"),this.pageTitle="",this.article.mdContent="",this.tags=[],t.next=36;break;case 32:t.prev=32,t.t0=t["catch"](0),console.log(t.t0),this.$message.warning("提交博文异常，请稍后重试！");case 36:return t.abrupt("return",r);case 37:case"end":return t.stop()}}),t,this,[[0,32]])})));function e(){return t.apply(this,arguments)}return e}(),handleBlogView:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=c["deNull"](e.tags),this.$router.push("/blog/view?id=".concat(e.id,"&author=").concat(e.create_by,"&tags=").concat(a))}catch(r){console.log("$router go to error :"+r)}case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleSubmitDraft:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e={},!c["isNull"](this.pageTitle)){t.next=5;break}return this.$message.error("请输入博文标题！"),t.abrupt("return","");case 5:if(!c["isNull"](this.article.mdContent)){t.next=8;break}return this.$message.error("请输入博文内容！"),t.abrupt("return","");case 8:if(!c["isNull"](this.tags.toString())){t.next=11;break}return this.$message.error("请输入文章标签！"),t.abrupt("return","");case 11:return a=(new Date).getTime(),e.id=c["queryUniqueID"](),e.blog_title=this.pageTitle,e.content=this.article.mdContent,e.create_by=this.userInfo.username,e.create_time=c["formatDate"](a,"yyyy-MM-dd hh:mm:ss"),e.page_tags=this.tags.toString(),e.page_column=this.pageColumn,e.page_type=this.pageType,e.page_scope=this.pageScope,e.bpm_status=1,e.flag="Y",t.next=25,p["postTableData"]("bs_blog",e);case 25:r=t.sent,this.$message.warning("保存草稿成功！"),this.pageTitle="",this.article.mdContent="",this.tags=[],t.next=36;break;case 32:t.prev=32,t.t0=t["catch"](0),console.log(t.t0),this.$message.warning("提交草稿异常，请稍后重试！");case 36:return t.abrupt("return",r);case 37:case"end":return t.stop()}}),t,this,[[0,32]])})));function e(){return t.apply(this,arguments)}return e}()})},f=m,d=(a("fa96"),a("2877")),b=Object(d["a"])(f,r,n,!1,null,"aa127980",null);e["default"]=b.exports},fa96:function(t,e,a){"use strict";var r=a("2e44"),n=a.n(r);n.a}}]);