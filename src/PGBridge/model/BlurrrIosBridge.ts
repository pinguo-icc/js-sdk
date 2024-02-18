import { EBridgeType } from '../constants';
import { IBridge } from '../types/bridge';
import { BaseBridge } from './BaseBridge';

export default class BlurrrIosBridge extends BaseBridge implements IBridge {
  /**
   * # 获取客户端注入的方法
   * @param type EBridgeType
   * @returns Function
   * @remark 一般只需要重构 get 和 execute方法来实现不同平台的兼容
   */
  get(type: EBridgeType) {
    return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[type]?.postMessage;
  }
}
