import { BaseBridge } from './model/BaseBridge';
import BlurrrIosBridge from './model/BlurrrIosBridge';
import BlurrrWebBridge from './model/BlurrrWebBridge';
import { IBridge } from './types/bridge';

class PGBridge {
  static bridgeMap = {
    'blurrr-ios': BlurrrIosBridge,
    'blurrr-web': BlurrrWebBridge,
  };

  static createBridge(app: string, platform: string = this.getPlatform()): IBridge {
    const bridgeKey = `${app}-${platform}` as ObjectKeys<typeof PGBridge.bridgeMap>;
    const bridgeConstructor = PGBridge.bridgeMap[bridgeKey];
    if(!bridgeConstructor) {
      console.error(`未找到${bridgeKey}的Bridge，已使用兜底方案，请进行适配!`)
      return new BaseBridge()
    }
    return new bridgeConstructor();
  }

  static getPlatform() {
    if (window.webkit) {
      // TODO: 这里只能判断是否webkit，等后续有了安卓再判断ios和安卓
      return 'ios';
    }
    return 'web';
  }
}

export default PGBridge;
