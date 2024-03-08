import { EBridgeType, Environment } from "../constants";
import { callQRParser, IBridge, IVideoPlayProps, TBridgeConfigProps } from "../types/bridge";
/**
 * # 客户端通讯 基础Model
 */
export declare class BaseBridge implements IBridge {
    /**
     * # 获取客户端注入的方法
     * @param type EBridgeType
     * @returns Function
     * @remark 一般只需要重构 get 和 execute 方法来实现不同平台的兼容
     */
    get(type: EBridgeType): any;
    /**
     * # 执行客户端注入的方法
     * @param type EBridgeType
     * @param type string
     * @remark 一般只需要重构 get 和 execute 方法来实现不同平台的兼容
     */
    execute(type: EBridgeType, dataStr: string): any;
    /**
     * ID递增的索引
     */
    private IDIndex;
    /**
     * # 获取Bridge中的唯一ID
     * @return string
     */
    getUniqueID(): string;
    /**
     * # 执行客户端注入的方法
     * @param type EBridgeType
     * @param dataStr JSONString
     * @returns
     */
    bridgeCall(type: EBridgeType, data?: TJson, config?: TBridgeConfigProps): Promise<any>;
    /**
     * ---------------------------------------
     * 以下为具体方法的实现
     * ---------------------------------------
     */
    /**
     * # 关闭webview页面
     */
    closePage(): void;
    /**
     * # 获取用户信息
     */
    getUserInfo(): Promise<any>;
    /**
     * # 用户登录
     */
    login(): Promise<any>;
    /**
     * # 获取客户端的公共参数
     */
    getCommonParams(defaultParams?: TObjectKey): Promise<TJson>;
    /**
     * # 通过链接保存文件到本地
     * @param url string
     */
    saveFileByUrl(url: string): Promise<any>;
    /**
     * # 通过base64保存文件到本地
     * @param base64 string
     */
    saveFileByBase64(base64: string): Promise<any>;
    /**
     * # 扫码
     * @remark QR_CODE_PARSER
     */
    qrCodeOpen(callback: Function, scene?: callQRParser): Promise<any>;
    /**
     * # 关闭扫码
     * @remark QR_CODE_CLOSE
     */
    qrCodeClose(): Promise<any>;
    /**
     * # 暂停扫码
     * @remark STOP_QR_SCAN
     */
    qrCodeStop(): Promise<any>;
    /**
     * # 开始扫码
     * @remark START_QR_SCAN
     */
    qrCodeStart(): Promise<any>;
    /**
     * # 对请求进行签名
     */
    sign(data: TJson): Promise<any>;
    /**
     * # 隐藏客户端的导航
     */
    hideBar(): Promise<any>;
    /**
     * # 显示客户端的导航
     */
    showBar(): Promise<any>;
    /**
     * # 调用客户端轻提示
     */
    showToast(text: string): Promise<any>;
    /**
     * # 调用客户端Loading
     */
    showLoading(): Promise<any>;
    /**
     * # 隐藏客户端Loading
     */
    hideLoading(): Promise<any>;
    /**
     * # 购买订单
     * @alpha 目前只有camera360实现
     */
    purchase(productId: string, method: "iap" | "wechat" | "alipay"): Promise<any>;
    /**
     * # 获取商品信息
     * @alpha 目前只有camera360实现
     */
    getAppProductInfo(productId: string): Promise<any>;
    /**
     * # 埋点上报
     */
    reportEvent(data: TJson): Promise<any>;
    /**
     * # 刷新客户端数据
     * @remark 保存的工程和预设，关闭页面返回客户端时需要刷新数据
     */
    refreshApp(): Promise<any>;
    /**
     * # 获取当前环境
     */
    getEnvironment(): Promise<Environment>;
    /**
     * # 获取H5的缓存
     * @param key 变量key
     * @returns 变量存储的值
     */
    getCache(key?: string): Promise<any>;
    /**
     * # 设置H5的缓存
     * @param key 变量key
     * @param value 变量值
     * @returns
     */
    setCache(key: string, value: any): Promise<any>;
    /**
     * # 清空H5缓存
     * @returns
     */
    clearCache(): Promise<any>;
    /**
     * # 唤起客户端的视频播放
     */
    playVideoByApp(data: IVideoPlayProps): Promise<any>;
}
