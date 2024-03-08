import { EBridgeType } from "./constants";
import { BaseBridge } from "./model/BaseBridge";
import BlurrrIosBridge from "./model/BlurrrIosBridge";
import BlurrrWebBridge from "./model/BlurrrWebBridge";
declare class PGBridge {
    static bridgeMap: {
        "blurrr-ios": typeof BlurrrIosBridge;
        "blurrr-web": typeof BlurrrWebBridge;
    };
    static EBridgeType: typeof EBridgeType;
    static createBridge(app: string, platform?: string): BaseBridge | BlurrrWebBridge;
    static getPlatform(): "android" | "ios" | "web";
}
export default PGBridge;
