/*
 * @Author: komens
 * @Date: 2023-04-24 09:39:31
 * @LastEditTime: 2023-05-05 15:32:38
 * @LastEditors: komens
 */

export type TBridgeType = keyof typeof import("../constants").EBridgeType;

export type TBridgeCallProps = {
  type: TBridgeType;
  data?: TObjectKey;
  callback?: boolean;
};


export default interface IBridge {
  run: typeof import("../index").bridgeCall;
}

export type IAPProductInfo = {
  price:string
  currency:string
  country:string
}