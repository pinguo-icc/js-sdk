import { EBridgeType } from "./constants";
import BlurrrIosBridge from "./model/BlurrrIosBridge";
import BlurrrWebBridge from "./model/BlurrrWebBridge";
import { IBlurrrBridge } from "./types/blurrrBridge";
import { IBridge } from "./types/bridge";
declare class PGBridge {
    static bridgeMap: {
        "blurrr-ios": typeof BlurrrIosBridge;
        "blurrr-web": typeof BlurrrWebBridge;
    };
    static EBridgeType: typeof EBridgeType;
    static createBridge(app: string, platform?: string): IBridge | IBlurrrBridge;
    static getPlatform(): "android" | "ios" | "web";
}
export default PGBridge;
