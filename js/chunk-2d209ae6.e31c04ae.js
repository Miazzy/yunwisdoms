(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209ae6"],{a9a9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return a("a-list-item",{key:s},[a("a-list-item-meta",[a("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("span",{attrs:{slot:"description"},slot:"description"},[a("span",{staticClass:"security-list-description"},[t._v(t._s(e.description))]),e.value?a("span",[t._v(":")]):t._e(),a("span",{staticClass:"security-list-value"},[t._v(t._s(e.value))])])]),e.actions?[a("a",{attrs:{slot:"actions"},on:{click:e.actions.callback},slot:"actions"},[t._v(t._s(e.actions.title))])]:t._e()],2)}}])}),a("a-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:16}},[a("a-col",{attrs:{md:24,lg:16}},[a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:"手机",required:!0}},[a("a-input",{attrs:{placeholder:t.userinfo.phone},model:{value:t.fdata.phone,callback:function(e){t.$set(t.fdata,"phone",e)},expression:"fdata.phone"}})],1),a("a-form-item",{attrs:{label:"邮件 (格式example@xxx.xxx)",required:!0}},[a("a-input",{attrs:{placeholder:t.userinfo.email},model:{value:t.fdata.email,callback:function(e){t.$set(t.fdata,"email",e)},expression:"fdata.email"}})],1),a("a-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"身份证号",required:!0}},[a("a-input",{attrs:{placeholder:t.userinfo.idcard},model:{value:t.fdata.idcard,callback:function(e){t.$set(t.fdata,"idcard",e)},expression:"fdata.idcard"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.postUserInfo()}}},[t._v("提交")])],1)],1)],1)],1)],1)},r=[],i=(a("96cf"),a("3b8d")),n=a("0fea"),o=a("5d2d"),u={data:function(){return{data:[],fdata:{},userinfo:{}}},computed:{userInfo:function(){return this.$store.getters.userInfo}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadData();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{loadData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o["clearStore"]("system_v_user_info@username$".concat(this.userInfo.username)),t.next=3,n["queryUserInfoByView"](this.userInfo.username);case 3:this.v_user=t.sent,this.userinfo.phone=this.v_user[0]["phone"],this.userinfo.email=this.v_user[0]["email"],this.userinfo.idcard=this.v_user[0]["idcard"],this.fdata=Object.assign({},this.userinfo),this.data=[{title:"账户密码",description:"当前密码强度",value:"强"},{title:"密保手机",description:"已绑定手机",value:this.userinfo.phone},{title:"密保邮箱",description:"已绑定邮箱",value:this.userinfo.email},{title:"身份证号",description:"已绑定身份证号码",value:this.userinfo.idcard},{title:"密保问题",description:"未设置密保问题，密保问题可有效保护账户安全",value:""}];case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),postUserInfo:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n["patchTableData"]("sys_user",this.userinfo.id,this.fdata);case 3:return t.next=5,n["queryUserInfoByView"](this.userInfo.username);case 5:this.v_user=t.sent,this.v_user[0]=Object.assign({},this.v_user[0],this.fdata),o["setStore"]("system_v_user_info@username$".concat(this.userInfo.username),this.v_user,86400),console.log("user info :"+JSON.stringify(this.v_user[0])),this.$message.success("保存信息成功！"),this.$emit("ok"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(){return t.apply(this,arguments)}return e}()}},c=u,l=a("2877"),d=Object(l["a"])(c,s,r,!1,null,"298c3541",null);e["default"]=d.exports}}]);