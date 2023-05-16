import { TBridgeCallProps } from "./types/bridge";
/**
 * 获取客户端注入的方法
 * @param type EBridgeType
 * @returns boolean
 */
export declare function getClientInjectMethod(type: string): any;
export declare function bridgeCall({ type, data, callback }: TBridgeCallProps): Promise<unknown>;
declare const _default: {
    run: typeof bridgeCall;
};
export default _default;
