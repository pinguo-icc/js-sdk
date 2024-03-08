import { JSONParse, JSONStringify } from "../common/tool";
import { EBridgeType, Environment } from "../constants";
import { callQRParser, IBridge, IVideoPlayProps, TBridgeConfigProps } from "../types/bridge";

/**
 * # 客户端通讯 基础Model
 */
export class BaseBridge implements IBridge {
  /**
   * # 获取客户端注入的方法
   * @param type EBridgeType
   * @returns Function
   * @remark 一般只需要重构 get 和 execute 方法来实现不同平台的兼容
   */
  get(type: EBridgeType) {
    return (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers[type]?.postMessage
    );
  }

  /**
   * # 执行客户端注入的方法
   * @param type EBridgeType
   * @param type string
   * @remark 一般只需要重构 get 和 execute 方法来实现不同平台的兼容
   */
  execute(type: EBridgeType, dataStr: string) {
    return window.webkit.messageHandlers[type].postMessage(dataStr);
  }

  /**
   * ID递增的索引
   */
  private IDIndex = 0;
  /**
   * # 获取Bridge中的唯一ID
   * @return string
   */
  getUniqueID() {
    return `callback_${this.IDIndex++}`;
  }

  /**
   * # 执行客户端注入的方法
   * @param type EBridgeType
   * @param dataStr JSONString
   * @returns
   */
  bridgeCall(type: EBridgeType, data: TJson = {}, config: TBridgeConfigProps = {}): Promise<any> {
    if (typeof this.get(type) !== "function") {
      console.error(new Error(`不存在type为${type}的方法可供调用！`));
      return Promise.reject({ message: `invalid ${type} method` });
    }
    return new Promise((resolve, reject) => {
      try {
        let newPayload = {
          ...data,
        };
        const { hasCallback = true, callbackFun: defaultFun } = config;
        let callbackFun;
        if (hasCallback) {
          const callbackName: string = this.getUniqueID();
          newPayload.callback = callbackName;
          if (typeof defaultFun != "function") {
            callbackFun = (data: any) => {
              // 回调完成后删除全局注入的callback
              const res = JSONParse(data);
              resolve(res);
              window[callbackName] = null;
              return res;
            };
          } else {
            callbackFun = defaultFun;
          }
          window[callbackName] = callbackFun;
        }
        let payloadStr = JSONStringify(newPayload);
        this.execute(type, payloadStr);
        if (typeof defaultFun == "function") {
          resolve({});
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * ---------------------------------------
   * 以下为具体方法的实现
   * ---------------------------------------
   */

  /**
   * # 关闭webview页面
   */
  closePage() {
    this.bridgeCall(EBridgeType.CLOSE, {}, { hasCallback: false });
  }

  /**
   * # 获取用户信息
   */
  getUserInfo() {
    return this.bridgeCall(EBridgeType.GET_USER_INFO);
  }

  /**
   * # 用户登录
   */
  login() {
    return this.bridgeCall(EBridgeType.LOGIN);
  }

  /**
   * # 获取客户端的公共参数
   */
  getCommonParams(defaultParams?: TObjectKey): Promise<TJson> {
    return this.bridgeCall(EBridgeType.GET_COMMON_PARAMS);
  }

  /**
   * # 通过链接保存文件到本地
   * @param url string
   */
  saveFileByUrl(url: string) {
    return this.bridgeCall(EBridgeType.SAVE_FILE, {
      type: "url",
      data: url,
    });
  }

  /**
   * # 通过base64保存文件到本地
   * @param base64 string
   */
  saveFileByBase64(base64: string) {
    return this.bridgeCall(EBridgeType.SAVE_FILE, {
      type: "base64",
      data: base64,
    });
  }

  /**
   * # 扫码
   * @remark QR_CODE_PARSER
   */
  qrCodeOpen(callback: Function, scene: callQRParser = "album") {
    return this.bridgeCall(
      EBridgeType.QR_CODE_PARSER,
      { scene },
      {
        callbackFun: callback,
      }
    );
  }

  /**
   * # 关闭扫码
   * @remark QR_CODE_CLOSE
   */
  qrCodeClose() {
    return this.bridgeCall(EBridgeType.QR_CODE_CLOSE);
  }

  /**
   * # 暂停扫码
   * @remark STOP_QR_SCAN
   */
  qrCodeStop() {
    return this.bridgeCall(EBridgeType.STOP_QR_SCAN);
  }

  /**
   * # 开始扫码
   * @remark START_QR_SCAN
   */
  qrCodeStart() {
    return this.bridgeCall(EBridgeType.START_QR_SCAN);
  }

  /**
   * # 对请求进行签名
   */
  sign(data: TJson) {
    return this.bridgeCall(EBridgeType.SIGN, data);
  }

  /**
   * # 隐藏客户端的导航
   */
  hideBar() {
    return this.bridgeCall(
      EBridgeType.SET_BAR_STATUS,
      {
        status: false,
      },
      {
        hasCallback: false,
      }
    );
  }

  /**
   * # 显示客户端的导航
   */
  showBar() {
    return this.bridgeCall(
      EBridgeType.SET_BAR_STATUS,
      {
        status: true,
      },
      {
        hasCallback: false,
      }
    );
  }

  /**
   * # 调用客户端轻提示
   */
  showToast(text: string) {
    return this.bridgeCall(EBridgeType.SHOW_TOAST, {
      text,
    });
  }

  /**
   * # 调用客户端Loading
   */
  showLoading() {
    return this.bridgeCall(EBridgeType.SET_LOADING, {
      status: true,
    });
  }

  /**
   * # 隐藏客户端Loading
   */
  hideLoading() {
    return this.bridgeCall(EBridgeType.SET_LOADING, {
      status: false,
    });
  }

  /**
   * # 购买订单
   * @alpha 目前只有camera360实现
   */
  purchase(productId: string, method: "iap" | "wechat" | "alipay") {
    return this.bridgeCall(EBridgeType.PURCHASE, {
      productId,
      method,
    });
  }

  /**
   * # 获取商品信息
   * @alpha 目前只有camera360实现
   */
  getAppProductInfo(productId: string) {
    return this.bridgeCall(EBridgeType.GET_APP_PRODUCT_INFO, {
      productId,
    });
  }

  /**
   * # 埋点上报
   */
  reportEvent(data: TJson) {
    return this.bridgeCall(EBridgeType.REPORT_EVENT, data, {
      hasCallback: false,
    });
  }

  /**
   * # 刷新客户端数据
   * @remark 保存的工程和预设，关闭页面返回客户端时需要刷新数据
   */
  refreshApp() {
    return this.bridgeCall(
      EBridgeType.REFRESH_CLIENT_DATA,
      {},
      {
        hasCallback: false,
      }
    );
  }

  /**
   * # 获取当前环境
   */
  getEnvironment() {
    return this.bridgeCall(EBridgeType.GET_CURRENT_ENV) as Promise<Environment>;
  }

  /**
   * # 获取H5的缓存
   * @param key 变量key
   * @returns 变量存储的值
   */
  getCache(key?: string) {
    try {
      return this.bridgeCall(EBridgeType.GET_H5_CACHE).then((res) => {
        const cache = JSONParse(res || "{}") || {};
        return Promise.resolve(key ? cache[key] : cache);
      });
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  }

  /**
   * # 设置H5的缓存
   * @param key 变量key
   * @param value 变量值
   * @returns
   */
  setCache(key: string, value: any) {
    return this.getCache().then((cache) => {
      const newCache = Object.assign({}, cache, { [key]: value });
      return this.bridgeCall(EBridgeType.SET_H5_CACHE, {
        body: JSONStringify(newCache),
      });
    });
  }

  /**
   * # 清空H5缓存
   * @returns
   */
  clearCache() {
    return this.bridgeCall(EBridgeType.SET_H5_CACHE, {
      body: JSONStringify({}),
    });
  }

  /**
   * # 唤起客户端的视频播放
   */
  async playVideoByApp(data: IVideoPlayProps) {
    return this.bridgeCall(EBridgeType.PLAY_VIDEO, { data });
  }
}
