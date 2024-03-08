import { EBridgeType } from "../constants";
import { IBlurrrBridge } from "../types/blurrrBridge";
import { BaseBridge } from "./BaseBridge";
export default class BlurrrIosBridge extends BaseBridge implements IBlurrrBridge {
    /**
     * # 获取客户端注入的方法
     * @param type EBridgeType
     * @returns Function
     * @remark 一般只需要重构 get 和 execute方法来实现不同平台的兼容
     */
    get(type: EBridgeType): any;
    /**
     * # 客户端识别 By 关键词
     * @param callback
     * @param keyword
     * @param page
     */
    doScanWithKeyWord(keyword: string, page?: string): Promise<any>;
    /**
     * # 客户端识别 By 二维码信息
     * @param callback
     * @param keyword
     * @param page
     */
    doScanWithQRInfo(QRInfo: string, page?: string): Promise<any>;
    /**
     * # 保存用户资源
     * @param callback
     * @param type
     * @param id
     */
    saveResource(type: string, id: string): Promise<any>;
    /**
     * # 应用用户资源
     * @param callback
     * @param type
     * @param id
     */
    applyResource(type: string, id: string): Promise<any>;
    /**
     * # 资源缓存(图片|视频)
     * @param url
     * @param key
     */
    doLocalCache(url: string[], key: string): Promise<any>;
    /**
     * # iOS顶部刘海颜色设置
     * @param style
     */
    setStatusBarStyle(style: string): Promise<any>;
    /**
     * # 显示客户端销售页
     */
    showSalesPage(): Promise<any>;
    /**
     * #网络变化通知
     * @param notifyType
     */
    registerNotify(notifyType?: string): Promise<any>;
    /**
     * # 调用客户端分享
     * @param text
     */
    doShare(text: string): Promise<any>;
    /**
     * # 显示客户端的TabBar
     */
    showHomeTabBar(): void;
    /**
     * # 隐藏客户端的TabBar
     */
    hideHomeTabBar(): void;
}
