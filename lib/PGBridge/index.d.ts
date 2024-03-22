import { EBridgeType } from "./constants";
import BlurrrIosBridge from "./model/BlurrrIosBridge";
import BlurrrWebBridge from "./model/BlurrrWebBridge";
import { TBridge } from "./types";
import { IBlurrrBridge } from "./types/blurrrBridge";
declare class PGBridge {
    static version: string;
    static bridgeMap: {
        "blurrr-ios": typeof BlurrrIosBridge;
        "blurrr-web": typeof BlurrrWebBridge;
    };
    static EBridgeType: typeof EBridgeType;
    /**
     * # 实例化 Bridge 的工厂函数
     * @param app 产品名称
     * @param platform 平台
     * @returns
     */
    static createBridge(app: string, platform?: string): TBridge;
    /**
     * # 针对blurrr的创建函数
     * @returns
     */
    static createBlurrrBridge(): IBlurrrBridge;
    static getPlatform(): "android" | "ios" | "web";
}
export default PGBridge;
