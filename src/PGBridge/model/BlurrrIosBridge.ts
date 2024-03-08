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
  get(type: EBridgeType) {
    return (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers[type]?.postMessage
    );
  }

  /**
   * # 客户端识别 By 关键词
   * @param callback
   * @param keyword
   * @param page
   */
  doScanWithKeyWord(callback: Function, keyword: string, page?: string) {
    return this.bridgeCall(EBridgeType.DO_SCAN, {
      callback,
      keyword,
      page,
    });
  }

  /**
   * # 客户端识别 By 二维码信息
   * @param callback
   * @param keyword
   * @param page
   */
  doScanWithQRInfo(callback: Function, QRInfo: string, page?: string) {
    return this.bridgeCall(EBridgeType.DO_SCAN, {
      callback,
      QRInfo,
      page,
    });
  }

  /**
   * # 保存用户资源
   * @param callback
   * @param type
   * @param id
   */
  saveResource(type: string, id: string) {
    return this.bridgeCall(EBridgeType.SAVE_RESOURCE, {
      type,
      id,
    });
  }

  /**
   * # 应用用户资源
   * @param callback
   * @param type
   * @param id
   */
  applyResource(type: string, id: string) {
    return this.bridgeCall(EBridgeType.APPLY_RESOURCE, {
      type,
      id,
    });
  }

  /**
   * # 资源缓存(图片|视频)
   * @param url
   * @param key
   */
  doLocalCache(url: string[], key: string) {
    return this.bridgeCall(EBridgeType.DO_LOCAL_CACHE, {
      url,
      key,
    });
  }

  /**
   * # iOS顶部刘海颜色设置
   * @param style
   */
  setStatusBarStyle(style: string) {
    return this.bridgeCall(EBridgeType.SET_STATUS_BAR_STYLE, {
      style,
    });
  }

  /**
   * # 显示客户端销售页
   */

  showSalesPage() {
    return this.bridgeCall(EBridgeType.SHOW_SALES_PAGE, {});
  }

  /**
   * #网络变化通知
   * @param notifyType
   */
  registerNotify(notifyType = "network") {
    return this.bridgeCall(EBridgeType.REGISTER_NOTIFY, {
      notifyType,
    });
  }

  /**
   * # 调用客户端分享
   * @param text
   */

  doShare(text: string) {
    return this.bridgeCall(EBridgeType.DO_SHARE, {
      text,
    });
  }

  /**
   * # 显示客户端的TabBar
   */
  showHomeTabBar() {
    this.bridgeCall(EBridgeType.SET_HOME_TAB_BAR, {
      hidden: false,
    });
  }

  /**
   * # 隐藏客户端的TabBar
   */
  hideHomeTabBar() {
    this.bridgeCall(EBridgeType.SET_HOME_TAB_BAR, {
      hidden: true,
    });
  }
}
