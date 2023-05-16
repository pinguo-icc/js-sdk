/*
 * @Author: komens
 * @Date: 2023-04-24 17:50:35
 * @LastEditTime: 2023-04-24 17:50:36
 * @LastEditors: komens
 */
type TObjectKey = {
  [key: string]: any;
};

interface Window {
  webkit: {
    messageHandlers: TObjectKey;
    [key: string]: any;
  };
  [key: string]: any;
}
