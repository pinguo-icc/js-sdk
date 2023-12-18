import { JSONParse, JSONStringify } from '../common/tool';
import { EBridgeType, Environment } from '../constants';
import { IBridge } from '../types/bridge';
import { BaseBridge } from './BaseBridge';

export default class BlurrrWebBridge extends BaseBridge implements IBridge {
  get(type: EBridgeType) {
    return () => {};
  }

  execute(type: EBridgeType, dataStr: string) {
    console.warn(`H5模式下，不支持${type}方法的调用！`);
  }

  getUserInfo() {
    return Promise.resolve({
      'vip': 'no',
      'hasFreeTicketToReceive': true,
      'collectedFreeTicketsCount': 0,
      'freeTicketCountConfig': 888,
      'balanceInvite': 0,
      'isLogin': true,
      'isVip': true,
      'isBindApple': false,
      'userId': '6501190edd88ea45697c59c5',
      'vipExpireTime': '0',
      'avater': 'http://cloudcdn.c360dn.com/b02c799359294fb3fe054fa3baa7b38a-200',
      'presetTotalIncome': 9,
      'presetCount': 96,
      'nickname': '文闪',
      'balanceJuice': 28,
      'userToken':
        'V1RSRldueUpGV3lkTnAwR0lleDJtL2V5RUY1ZHlSeUJVNWphQWFESWtqWEVsL3BtVU9DVk1oU3M5c1pWR0UzOUhTZEhYOXA2SW95a09uZ0ZwY2p4cGVGWWl0T21TZktodzdpSE1FMzVnRXFpZVFTbmE1cVhxbHFRUWFpMVdWTmpHcGVKN2p2TEFWbW50NXg0QXRzVUhxN1UxelNHUlN5Tw==',
    });
  }

  login() {
    return this.getUserInfo();
  }

  async getCommonParams() {
    const env = await this.getEnvironment();
    return Promise.resolve({
      'PG-AppID': 'VideoBeats',
      'PG-AppVersion': '1.9.00',
      'PG-Channel': 'toolchain',
      'PG-DataEnv': env,
      'PG-Debug': '1',
      'PG-EID': 'd241c0694472aebc739d509eb740d52e3d6fc2021f9d71e0c6371fe91afbf51f96db1c91453b376a60f0d0e702cff2ab',
      'PG-ENCB': '0',
      'PG-ENCH': '1',
      'PG-FA': '6f97129290a3e4c7c340154b9c30c431',
      'PG-InitStamp': '1700039392',
      'PG-Language': 'zh-Hans',
      'PG-Locale': 'zh_CN',
      'PG-Model': 'iPad11,3',
      'PG-Network': 'WIFI',
      'PG-OSVersion': '15.4.1',
      'PG-Platform': 'iOS',
      'PG-ScreenSize': '834.0*1112.0',
      'PG-Time': '1702620070',
      'PG-UpgradeStamp': '1702547225',
      'PG-UserID': '6501190edd88ea45697c59c5',
      'PG-UserToken':
        'V1RSRldueUpGV3lkTnAwR0lleDJtL2V5RUY1ZHlSeUJVNWphQWFESWtqWEVsL3BtVU9DVk1oU3M5c1pWR0UzOUhTZEhYOXA2SW95a09uZ0ZwY2p4cGVGWWl0T21TZktodzdpSE1FMzVnRXFpZVFTbmE1cVhxbHFRUWFpMVdWTmpHcGVKN2p2TEFWbW50NXg0QXRzVUhxN1UxelNHUlN5Tw==',
      'PG-UtcOffset': '28800',
    });
  }

  sign(data: TJson) {
    return Promise.resolve('56610f9fce1cdd07098cd81d');
  }

  showToast(text: string) {
    alert(text);
    return Promise.resolve();
  }

  getEnvironment() {
    const hostname = location.hostname;
    let env;
    if (hostname.includes('-dev') || hostname.startsWith('local') || hostname.startsWith('1')) {
      env = Environment.Dev;
    } else if (hostname.includes('-qa')) {
      env = Environment.QA;
    } else {
      env = Environment.Prod;
    }
    return Promise.resolve(env);
  }

  getCache(key?: string) {
    try {
      const str = localStorage.getItem('BRIDGE_WEB_CACHE');
      if (!str) {
        return Promise.resolve();
      }
      const data = JSONParse(str);
      return Promise.resolve(key ? data[key] : data);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  setCache(key: string, value: any) {
    return this.getCache().then((cache) => {
      const newCache = Object.assign({}, cache, { [key]: value });
      localStorage.setItem('BRIDGE_WEB_CACHE', JSONStringify(newCache));
      return value;
    });
  }

  clearCache() {
    localStorage.removeItem('BRIDGE_WEB_CACHE');
    return Promise.resolve();
  }
}
