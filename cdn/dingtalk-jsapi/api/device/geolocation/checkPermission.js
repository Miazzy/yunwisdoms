"use strict";function checkPermission$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0});var ddSdk_1=require("../../../lib/ddSdk"),apiName="device.geolocation.checkPermission";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.android]={vs:"4.5.0"},_a)),exports.checkPermission$=checkPermission$,exports.default=checkPermission$;