"use strict";function start$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0});var ddSdk_1=require("../../../lib/ddSdk"),apiName="device.geolocation.start";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"3.4.7"},_a[ddSdk_1.ENV_ENUM.android]={vs:"3.4.7"},_a)),exports.start$=start$,exports.default=start$;