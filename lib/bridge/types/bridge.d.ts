export type TBridgeType = keyof typeof import("../constants").EBridgeType;
export type TBridgeCallProps = {
    type: TBridgeType;
    data?: TObjectKey;
    callback?: boolean;
};
export default interface IBridge {
    run: typeof import("../index").bridgeCall;
}
