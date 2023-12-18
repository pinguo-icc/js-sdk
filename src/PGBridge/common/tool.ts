/**
 * # 将字符串序列化
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
 * # 将json数据字符串化
 * @param data
 * @returns
 */
export function JSONStringify(data: string | object) {
  if (typeof data === 'string') {
    return data;
  }
  try {
    return JSON.stringify(data);
  } catch {
    return '';
  }
}
