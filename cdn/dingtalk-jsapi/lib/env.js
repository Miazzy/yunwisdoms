"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var sdk_1=require("./sdk"),sdk_2=require("./sdk");exports.ENV_ENUM=sdk_2.ENV_ENUM,exports.APP_TYPE=sdk_2.APP_TYPE,exports.ENV_ENUM_SUB=sdk_2.ENV_ENUM_SUB;var dingtalk_javascript_env_1=require("./packages/dingtalk-javascript-env"),EDdWeexEnv;!function(e){e.singlePage="singlePage",e.miniApp="miniApp",e.miniWidget="miniWidget"}(EDdWeexEnv||(EDdWeexEnv={})),exports.getUA=function(){var e="";try{"undefined"!=typeof navigator&&(e=navigator&&(navigator.userAgent||navigator.swuserAgent)||"")}catch(i){e=""}return e},exports.getENV=function(){var e=exports.getUA(),i=/iPhone|iPad|iPod|iOS/i.test(e),a=/Android/i.test(e),t=/Nebula/i.test(e),n=/DingTalk/i.test(e),d=/dd-web/i.test(e),s="object"==typeof nuva,_="object"==typeof dd&&"function"==typeof dd.dtBridge,r=_&&i||s&&i,E=n||dingtalk_javascript_env_1.default.isDingTalk,o=i&&E||dingtalk_javascript_env_1.default.isWeexiOS||r,v=a&&E||dingtalk_javascript_env_1.default.isWeexAndroid,g=t&&E||_,l=d,p=sdk_1.APP_TYPE.WEB;if(l)p=sdk_1.APP_TYPE.WEBVIEW_IN_MINIAPP;else if(g)p=sdk_1.APP_TYPE.MINI_APP;else if(dingtalk_javascript_env_1.default.isWeexiOS||dingtalk_javascript_env_1.default.isWeexAndroid)try{var P=weex.config.ddWeexEnv;p=P===EDdWeexEnv.miniWidget?sdk_1.APP_TYPE.WEEX_WIDGET:sdk_1.APP_TYPE.WEEX}catch(e){p=sdk_1.APP_TYPE.WEEX}var k,c="*",u=e.match(/AliApp\(\w+\/([a-zA-Z0-9.-]+)\)/);null===u&&(u=e.match(/DingTalk\/([a-zA-Z0-9.-]+)/));var f;u&&u[1]&&(f=u[1]);var N="";if("undefined"!=typeof name&&(N=name),N)try{var A=JSON.parse(N);A.hostVersion&&(f=A.hostVersion),c=A.language||navigator.language||"*",k=A.containerId}catch(e){}var W=!!k;W&&!f&&(u=e.match(/DingTalk\(([a-zA-Z0-9\.-]+)\)/))&&u[1]&&(f=u[1]);var x,U=sdk_1.ENV_ENUM_SUB.noSub;if(o)x=sdk_1.ENV_ENUM.ios;else if(v)x=sdk_1.ENV_ENUM.android;else if(W){var M=e.indexOf("Macintosh; Intel Mac OS")>-1;U=M?sdk_1.ENV_ENUM_SUB.mac:sdk_1.ENV_ENUM_SUB.win,x=sdk_1.ENV_ENUM.pc}else x=sdk_1.ENV_ENUM.notInDingTalk;return{platform:x,platformSub:U,version:f,appType:p,language:c}};