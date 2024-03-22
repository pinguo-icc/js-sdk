import { EBridgeType } from "./constants";
import { BaseBridge } from "./model/BaseBridge";
import BlurrrIosBridge from "./model/BlurrrIosBridge";
import BlurrrWebBridge from "./model/BlurrrWebBridge";
import { TBridge } from "./types";
import { IBlurrrBridge } from "./types/blurrrBridge";

class PGBridge {

  static version = '__VERSION__';

  static bridgeMap = {
    "blurrr-ios": BlurrrIosBridge,
    "blurrr-web": BlurrrWebBridge,
  };

  static EBridgeType = EBridgeType;

  /**
   * # 实例化 Bridge 的工厂函数
   * @param app 产品名称
   * @param platform 平台
   * @returns
   */
  static createBridge(app: string, platform: string = this.getPlatform()): TBridge {
    setTimeout(() => {
      console.log(`app: ${app}, platform: ${platform}`);
    }, 500);
    const bridgeKey = `${app}-${platform}` as ObjectKeys<typeof PGBridge.bridgeMap>;
    const bridgeConstructor = PGBridge.bridgeMap[bridgeKey];
    if (!bridgeConstructor) {
      console.error(`未找到${bridgeKey}的Bridge，已使用兜底方案，请进行适配!`);
      return new BaseBridge();
    }
    return new bridgeConstructor();
  }

  /**
   * # 针对blurrr的创建函数
   * @returns
   */
  static createBlurrrBridge() {
    return this.createBridge("blurrr") as IBlurrrBridge;
  }

  static getPlatform() {
    const ua = window.navigator.userAgent.toLowerCase();
    setTimeout(() => {
      console.log(`ua: ${ua}`);
    }, 500);
    // 这里判断是否在内部APP容器中
    if (window.webkit && /pinguo/.test(ua)) {
      if (/android/.test(ua)) {
        return "android";
      } else if (/iphone|ipad|ipod|mac/.test(ua)) {
        return "ios";
      }
    } // 如果不是统一按照web处理
    return "web";
  }
}

export default PGBridge;
