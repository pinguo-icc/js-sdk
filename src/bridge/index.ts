/*
 * @Author: komens
 * @Date: 2023-04-24 09:38:40
 * @LastEditTime: 2023-05-08 11:37:15
 * @LastEditors: komens
 */

import Json, { JSONParse, JSONStringify } from "../tools/json";
import _ from "lodash";
import { IAPProductInfo, TBridgeCallProps, TBridgeType } from "./types/bridge";
import { EBridgeType } from "./constants";
import { CommonParam, CommonParamBuilder } from "./models/global";

/**
 * 获取客户端注入的方法
 * @param type EBridgeType
 * @returns boolean
 */
export function getClientInjectMethod(type: string) {
  try {
    if (window.PG_CONSTANTS.platform === "ios") {
      return (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers[type]?.postMessage
      );
    }
    return window.androidClient && window.androidClient[type];
  } catch {
    return false;
  }
}

/**
 * 执行客户端注入的方法
 * @param type EBridgeType
 * @param dataStr JSONString
 * @returns JSONString
 */
function executeClientMethod(type: string, dataStr: string) {
  try {
    if (window.PG_CONSTANTS.platform === "ios") {
      // 如果是ios先拿ios的数据
      if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers[type]?.postMessage
      ) {
        return (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers[type]?.postMessage(dataStr)
        );
      } else if (window._debug) {
        // 如果没有且是debug模式则拿模拟数据
        return (
          window.androidClient && window.androidClient[type] && window.androidClient[type](dataStr)
        );
      }
    }
    return (
      window.androidClient && window.androidClient[type] && window.androidClient[type](dataStr)
    );
  } catch {}
}

//! window.webkit.messageHandlers[type]?.postMessage 不可简写，一定要一级一级写全
/**
 * 调用bridge与客户端通讯
 * @param type<string>
 * @param data<Object>
 * @param callback<boolean>
 * @returns Promise
 */
export function bridgeCall({ type, data = {}, callback = true }: TBridgeCallProps) {
  const realType = EBridgeType[type] as string;
  // @TODO 有可能有问题，如果放在这的话整个页面都进不去，客户看不到效果图
  if (typeof getClientInjectMethod(realType) !== "function" && !window._debug) {
    console.error(new Error(`不存在type为${realType}的方法可供调用！`));
    return Promise.reject();
  }
  // 针对callback的处理
  return new Promise((resolve, reject) => {
    try {
      let newData;
      newData = {
        ...data,
      };
      if (callback) {
        const callbackName: string = _.uniqueId("callback_");
        newData.callback = callbackName;
        const callbackFun = (data: any) => {
          // 回调完成后删除全局注入的callback
          window[callbackName] = null;

          //android 回调由于是函数名拼接字符串，转化过程中有问题，所以android统一使用object作为参数
          if (typeof data == "string") {
            data = Json.parse(data);
          }
          resolve(data);
          return data;
        };
        window[callbackName] = callbackFun;
      }
      let payloadStr = Json.stringify(newData);
      executeClientMethod(realType, payloadStr);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * ----------------------------------------------------------------
 * 以下是基于 bridgeCall 的二次封装
 * ----------------------------------------------------------------
 */

export function toast(msg: string) {
  return bridgeCall({
    type: "SHOW_TOAST",
    data: { text: msg },
  });
}

//Google返回的价格和currency在一起，这里统一格式化到两个字段
const formatIAPProductInfo = function (res: IAPProductInfo) {
  if (!res.currency) {
    res.currency = "";
  }
  if (!res.country) {
    res.country = "";
  }
  let price = res.price;
  if (res.currency == "") {
    res.currency = price.replace(/[0-9\.]/gi, "");
  }
  if (res.currency != "") {
    res.price = price.replace(/[^0-9\.]/gi, "");
  }
};

export type InputFileAttribute = {
  isAllowCompress: boolean; //是否允许客户端对图片进行压缩
  accept: string; //允许的文件类型
};

export function setInputFileAttributes(params: InputFileAttribute) {
  getCommonParams().then((res) => {
    if (res.isAndroid()) {
      bridgeCall({
        type: "SET_INPUT_FILE_ATTRIBUTES",
        data: params,
      });
    }
  });
}

export function getProductInfo(productId: string) {
  return new Promise<IAPProductInfo>((resolve, reject) => {
    bridgeCall({
      type: "GET_APP_PRODUCT_INFO",
      data: { productId: productId },
    })
      .then((res: any) => {
        getCommonParams()
          .then((params) => {
            formatIAPProductInfo(res);
            if (resolve) {
              resolve(res as IAPProductInfo);
            }
          })
          .catch((ex) => {
            if (reject) {
              reject(ex);
            }
          });
      })
      .catch((ex) => {
        if (reject) {
          reject(ex);
        }
      });
  });
}

export function getCommonParams(): Promise<CommonParam> {
  return new Promise((resolve, reject) => {
    bridgeCall({
      type: "GET_COMMON_PARAMS",
      data: {},
    }).then((res) => {
      if (resolve) {
        resolve(CommonParamBuilder(res as TObjectKey));
      }
    });
  });
}
export function purchase(productId: string, method: string) {
  return bridgeCall({
    type: "PURCHASE",
    data: {
      productId: productId,
      method: method,
    },
  });
}

export async function getAppStorage(key: string) {
  const data = (await bridgeCall({
    type: "GET_STORAGE",
  })) as TObjectKey;
  if (data) {
    return data[key];
  }
  return null;
}

export async function setAppStorage(key: string, value: any) {
  const data =
    (await bridgeCall({
      type: "GET_STORAGE",
    })) || "";
  bridgeCall({
    type: "SET_STORAGE",
    data: {
      data: JSONStringify({
        ...JSONParse(data),
        [key]: value,
      }),
    },
  });
}

export default {
  run: bridgeCall,
  toast: toast,
  setInputFileAttributes: setInputFileAttributes,
  getProductInfo: getProductInfo,
  getCommonParams: getCommonParams,
  purchase: purchase,
  getAppStorage: getAppStorage,
  setAppStorage: setAppStorage,
};
