/*
 * @Author: komens
 * @Date: 2023-04-05 17:42:21
 * @LastEditTime: 2023-04-13 11:39:23
 * @LastEditors: komens
 */
export class CommonParam {
  public data: TObjectKey = {};

  public constructor(data: TObjectKey) {
    Object.assign(this.data, this.toLowerKey(data));
  }

  toLowerKey(data: TObjectKey) {
    const newData: TObjectKey = {};
    for (let key in data) {
      newData[key.toLocaleLowerCase()] = data[key];
    }
    return newData;
  }
  isAndroid():boolean {
    return this.getPlatform() == "android"
  }
  getPlatform(): string {
    return (this.data['pg-platform'] ? this.data['pg-platform'] : '').toLowerCase();
  }
  getChannel(): string {
    return (this.data['pg-channel'] ? this.data['pg-channel'] : '').toLowerCase();
  }
  isGoogleMarket():boolean {
    return this.getChannel() == "googlemarket"
  }
  isIapChannel() {
    let c = this.getChannel();
    //@TODO 华为渠道
    switch (c) {
      case 'googlemarket':
      case 'appstore':
      case '智汇云（华为）':
        return true;
      default:
        return false;
    }
  }
  getAppVersion() {
    return (this.data['pg-appversion'] ? this.data['pg-appversion'] : '').toLowerCase();
  }
}

export const CommonParamBuilder = (data: TObjectKey): CommonParam => {
  return new CommonParam(data);
};

export default {};
