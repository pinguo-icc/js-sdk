import { EBridgeType, Environment } from '../constants';

/**
 * # 客户端通讯模型接口
 */
export interface IBridge {
  /**
   * # 获取客户端注入的方法
   * @internal
   * @param type EBridgeType
   * @returns Function
   */
  get(type: EBridgeType): Function | undefined;

  /**
   * # 验证并执行客户端注入的方法
   * @internal
   * @param type EBridgeType
   * @param dataStr JSONString
   */
  bridgeCall(type: EBridgeType, data: TJson, config: TBridgeConfigProps): Promise<any>;

  /**
   * # 关闭webview页面
   */
  closePage(): void;

  /**
   * # 获取用户信息
   */
  getUserInfo(): Promise<TJson>;

  /**
   * # 用户登录
   */
  login(): Promise<TJson>;

  /**
   * # 获取客户端的公共参数
   */
  getCommonParams(): Promise<TJson>;

  /**
   * # 通过链接保存文件到本地
   * @param url string
   */
  saveFileByUrl(url: string): Promise<ISaveFileResponse>;

  /**
   * # 通过base64保存文件到本地
   * @param base64 string
   */
  saveFileByBase64(base64: string): Promise<ISaveFileResponse>;

  /**
   * # 扫码
   * @remark QR_CODE_PARSER
   */
  qrCodeOpen(callback: Function): void;

  /**
   * # 关闭扫码
   * @remark QR_CODE_CLOSE
   */
  qrCodeClose(): void;

  /**
   * # 暂停扫码
   * @remark STOP_QR_SCAN
   */
  qrCodeStop(): void;

  /**
   * # 开始扫码
   * @remark START_QR_SCAN
   */
  qrCodeStart(): void;

  /**
   * # 对请求进行签名
   */
  sign(data: TJson): Promise<string>;

  /**
   * # 隐藏客户端的导航
   */
  hideBar(): void;

  /**
   * # 显示客户端的导航
   */
  showBar(): void;

  /**
   * # 调用客户端轻提示
   */
  showToast(text: string): Promise<void>;

  /**
   * # 调用客户端Loading
   */
  showLoading(): void;

  /**
   * # 隐藏客户端Loading
   */
  hideLoading(): void;

  /**
   * # 购买订单
   * @alpha 目前只有camera360实现
   */
  purchase(productId: string, method: 'iap' | 'wechat' | 'alipay'): Promise<TPurchaseResponse>;

  /**
   * # 获取商品信息
   * @alpha 目前只有camera360实现
   */
  getAppProductInfo(productId: string): Promise<IAppProductInfo>;

  /**
   * # 埋点上报
   */
  reportEvent(data: TJson): void;

  /**
   * # 刷新客户端数据
   * @remark 保存的工程和预设，关闭页面返回客户端时需要刷新数据
   */
  refreshApp(): void;

  /**
   * # 获取当前环境
   */
  getEnvironment(): Promise<Environment>;

  getCache(key?: string): Promise<any>;

  setCache(key: string, value: any): void;

  clearCache(): void;

  playVideoByApp(data:IVideoPlayProps): Promise<any>;
}

export type TBridgeConfigProps = {
  hasCallback?: boolean;
  callbackFun?: Function;
};

/**
 * # 保存文件的返回
 * @remarks reason值含义 0:成功 1:失败 2:未知
 */
export interface ISaveFileResponse {
  status: boolean;
  reason: 0 | 1 | 2;
}

export interface IPurchaseResponseAndroid {
  status: boolean;
  orderId: string;
  receipt: string;
  signture: string;
  method: string;
  reason: '0' | '1' | '2';
}

export interface IPurchaseResponseIos {
  status: boolean;
  receipt: string;
  method: string;
  reason: '0' | '1' | '2';
}

export type TPurchaseResponse = IPurchaseResponseAndroid | IPurchaseResponseIos;

export interface IAppProductInfo {
  price: number;
  currency: string;
  country: string;
}

export interface IVideoPlayProps {
  name: string;
  type: 'bundle' | 'sandbox';
  buttonOffset: number;
  buttonRect: {
    top: number;
    left?: number;
    width?: number;
    height?: number;
  };
}
