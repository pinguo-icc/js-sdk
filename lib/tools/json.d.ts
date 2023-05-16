/**
 * 将字符串序列化
 * @param data
 * @returns
 */
export declare function JSONParse(data: string): any;
/**
 * 将json数据字符串化
 * @param data
 * @returns
 */
export declare function JSONStringify(data: string | object): string;
declare const _default: {
    parse: typeof JSONParse;
    stringify: typeof JSONStringify;
};
export default _default;
