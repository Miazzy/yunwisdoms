"use strict";exports.__esModule=!0;var env_1=require("../env"),eapp_1=require("./eapp"),webviewInMiniApp_1=require("./webviewInMiniApp"),h5Ios_1=require("./h5Ios"),weex_1=require("./weex"),h5Android_1=require("./h5Android"),weex_2=require("./weex"),h5Pc_1=require("./h5Pc"),env=env_1.getENV();exports.getUniBridge=function(){switch(env.platform){case env_1.ENV_ENUM.ios:return env.appType===env_1.APP_TYPE.MINI_APP?Promise.resolve(eapp_1.default):env.appType===env_1.APP_TYPE.WEBVIEW_IN_MINIAPP?Promise.resolve(webviewInMiniApp_1.default):env.appType===env_1.APP_TYPE.WEEX?weex_1.iosWeexBridge():h5Ios_1.h5IosBridgeInit().then(function(){return h5Ios_1.default});case env_1.ENV_ENUM.android:return env.appType===env_1.APP_TYPE.MINI_APP?Promise.resolve(eapp_1.default):env.appType===env_1.APP_TYPE.WEBVIEW_IN_MINIAPP?Promise.resolve(webviewInMiniApp_1.default):env.appType===env_1.APP_TYPE.WEEX?weex_2.androidWeexBridge():h5Android_1.h5AndroidbridgeInit().then(function(){return h5Android_1.default});case env_1.ENV_ENUM.pc:switch(env.appType){case env_1.APP_TYPE.MINI_APP:return Promise.resolve(eapp_1.default);default:return Promise.resolve(h5Pc_1.default)}default:return Promise.reject("Not in DingTalk runtime")}};var uniBridge=function(e,r){return exports.getUniBridge().then(function(n){return n(e,r)})};exports.default=uniBridge;