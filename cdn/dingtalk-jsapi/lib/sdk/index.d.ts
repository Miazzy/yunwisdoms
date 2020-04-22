import { IErrorMessage, ICallbackOption, ICommonAPI, IJSBridge, IInvokeAPIConfigMap, IAPIConfig, IJSBridgeMap, IInvokeAPIConfigMapByMethod, IUNCore, ILogFn, ILog, IConfigCoreMap, IENV, APP_TYPE, IPlatformConfig, LogLevel, isFunction, compareVersion, ENV_ENUM, ENV_ENUM_SUB } from './sdkLib';
export { IErrorMessage, ICallbackOption, ICommonAPI, IJSBridge, ENV_ENUM, ENV_ENUM_SUB, IENV, compareVersion, isFunction, APP_TYPE, ILogFn, IUNCore, LogLevel, ILog, IInvokeAPIConfigMap, IAPIConfig, IJSBridgeMap, IInvokeAPIConfigMapByMethod };
export declare class Sdk {
    bridgeInitFn: () => Promise<IJSBridge>;
    private customLogInstance;
    private bridgeInitFnPromise;
    private exportSdk;
    private configJsApiList;
    private hadConfig;
    private isReady;
    private p;
    private config$;
    private logQueue;
    private devConfig;
    private platformConfigMap;
    private env;
    private invokeAPIConfigMapByMethod;
    private isBridgeDrity;
    constructor(env: IENV, logFn: ILogFn);
    getExportSdk: () => IUNCore;
    setAPI: (method: string, config: IInvokeAPIConfigMap) => void;
    setPlatform: (core: IPlatformConfig) => void;
    getPlatformConfigMap: () => IConfigCoreMap;
    deleteApiConfig: (method: string, platform: string) => void;
    invokeAPI: (method: string, params?: any, isAuthApi?: boolean) => Promise<any>;
    private customLog;
    private clearLogQueue;
}
