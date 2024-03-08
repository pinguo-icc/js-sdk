import { EBridgeType } from "./constants";
import { BaseBridge } from "./model/BaseBridge";
import BlurrrIosBridge from "./model/BlurrrIosBridge";
import BlurrrWebBridge from "./model/BlurrrWebBridge";
import { TBridge } from "./types";

class PGBridge {
  static bridgeMap = {
    "blurrr-ios": BlurrrIosBridge,
    "blurrr-web": BlurrrWebBridge,
  };

  static EBridgeType = EBridgeType;

  static createBridge(app: string, platform: string = this.getPlatform()): TBridge {
    const bridgeKey = `${app}-${platform}` as ObjectKeys<typeof PGBridge.bridgeMap>;
    const bridgeConstructor = PGBridge.bridgeMap[bridgeKey];
    if (!bridgeConstructor) {
      console.error(`未找到${bridgeKey}的Bridge，已使用兜底方案，请进行适配!`);
      return new BaseBridge();
    }
    return new bridgeConstructor();
  }

  static getPlatform() {
    const ua = window.navigator.userAgent.toLowerCase();
    // 这里判断是否在内部APP容器中
    if (window.webkit && /pinguo/.test(ua)) {
      if (/android/.test(ua)) {
        return "android";
      } else if (/iphone|ipad|ipod/.test(ua)) {
        return "ios";
      }
    } // 如果不是统一按照web处理
    return "web";
  }
}

export default PGBridge;
