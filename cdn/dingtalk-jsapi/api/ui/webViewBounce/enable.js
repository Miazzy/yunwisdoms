"use strict";function enable$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0});var ddSdk_1=require("../../../lib/ddSdk"),apiName="ui.webViewBounce.enable";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.4.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.4.0"},_a)),exports.enable$=enable$,exports.default=enable$;