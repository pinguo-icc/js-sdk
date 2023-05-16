/*
 * @Author: komens
 * @Date: 2023-04-24 09:44:26
 * @LastEditTime: 2023-04-24 09:44:27
 * @LastEditors: komens
 */
/**
 * 将字符串序列化
 * @param data
 * @returns
 */
export function JSONParse(data: string) {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

/**
 * 将json数据字符串化
 * @param data
 * @returns
 */
export function JSONStringify(data: string | object) {
  if (typeof data === "string") {
    return data;
  }
  try {
    return JSON.stringify(data);
  } catch {
    return "";
  }
}

export default {
  parse: JSONParse,
  stringify: JSONStringify,
};
