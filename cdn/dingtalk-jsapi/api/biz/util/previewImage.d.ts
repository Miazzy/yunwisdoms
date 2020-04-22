/**
 * 弹窗alert 请求参数定义
 * @apiName biz.util.previewImage
 */
export interface IBizUtilPreviewImageParams {
    /** 图片地址列表 */
    urls: string[];
    /** 当前显示的图片链接 */
    current: string;
}
/**
 * 弹窗alert 返回结果定义
 * @apiName biz.util.previewImage
 */
export interface IBizUtilPreviewImageResult {
    [key: string]: any;
}
/**
 * 弹窗alert
 * @description 调用此api，将显示一个图片浏览器
 * @apiName biz.util.previewImage
 * @supportVersion  pc: 2.7.0 ios: 2.4.0 android: 2.4.0
 */
export declare function previewImage$(params: IBizUtilPreviewImageParams): Promise<IBizUtilPreviewImageResult>;
export default previewImage$;
