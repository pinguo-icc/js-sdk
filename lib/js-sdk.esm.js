var t,e;!function(t){t.CLOSE="closeWebView",t.GET_USER_INFO="getUserInfo",t.LOGIN="doLogin",t.GET_COMMON_PARAMS="getCommonParams",t.SAVE_FILE="saveImageToAlbum",t.QR_CODE_PARSER="callQRParser",t.SIGN="sign",t.SET_BAR_STATUS="setNativeBarStatus",t.SHOW_TOAST="showHint",t.QR_CODE_CLOSE="closeQRParser",t.SET_LOADING="setLoadingStatus",t.CALL_PHOTO_PICKER="callPhotoPicker",t.PURCHASE="purchase",t.GET_APP_PRODUCT_INFO="getIAPProductInfo",t.REPORT_EVENT="reportEvent",t.START_QR_SCAN="startQRScan",t.STOP_QR_SCAN="stopQRScan",t.REFRESH_CLIENT_DATA="refreshUserProjectsAndPresets",t.GET_CURRENT_ENV="getCurrentEnv",t.GET_H5_CACHE="getH5Cache",t.SET_H5_CACHE="setH5Cache",t.PLAY_VIDEO="playVideo"}(t||(t={})),function(t){t.Prod="release",t.QA="qa",t.Dev="dev",t.Pre="operation"}(e||(e={}));var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)};function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};function i(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function c(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}u((n=n.apply(t,e||[])).next())}))}function a(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(t){c=[6,t],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function c(t){try{return JSON.parse(t)}catch(e){return t}}function u(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(t){return""}}var s=function(){function e(){this.IDIndex=0}return e.prototype.get=function(t){var e;return window.webkit&&window.webkit.messageHandlers&&(null===(e=window.webkit.messageHandlers[t])||void 0===e?void 0:e.postMessage)},e.prototype.execute=function(t,e){return window.webkit.messageHandlers[t].postMessage(e)},e.prototype.getUniqueID=function(){return"callback_".concat(this.IDIndex++)},e.prototype.bridgeCall=function(t,e,r){var n=this;return void 0===e&&(e={}),void 0===r&&(r={}),"function"!=typeof this.get(t)?(console.error(new Error("不存在type为".concat(t,"的方法可供调用！"))),Promise.reject({message:"invalid ".concat(t," method")})):new Promise((function(i,a){try{var s=o({},e),l=r.hasCallback,p=void 0===l||l,f=r.callbackFun,d=void 0;if(p){var h=n.getUniqueID();s.callback=h,d="function"!=typeof f?function(t){var e=c(t);return i(e),window[h]=null,e}:f,window[h]=d}var g=u(s);n.execute(t,g),"function"==typeof f&&i({})}catch(t){a(t)}}))},e.prototype.closePage=function(){this.bridgeCall(t.CLOSE,{},{hasCallback:!1})},e.prototype.getUserInfo=function(){return this.bridgeCall(t.GET_USER_INFO)},e.prototype.login=function(){return this.bridgeCall(t.LOGIN)},e.prototype.getCommonParams=function(){return this.bridgeCall(t.GET_COMMON_PARAMS)},e.prototype.saveFileByUrl=function(e){return this.bridgeCall(t.SAVE_FILE,{type:"url",data:e})},e.prototype.saveFileByBase64=function(e){return this.bridgeCall(t.SAVE_FILE,{type:"base64",data:e})},e.prototype.qrCodeOpen=function(e){return this.bridgeCall(t.QR_CODE_PARSER,{},{callbackFun:e})},e.prototype.qrCodeClose=function(){return this.bridgeCall(t.QR_CODE_CLOSE)},e.prototype.qrCodeStop=function(){return this.bridgeCall(t.STOP_QR_SCAN)},e.prototype.qrCodeStart=function(){return this.bridgeCall(t.START_QR_SCAN)},e.prototype.sign=function(e){return this.bridgeCall(t.SIGN,e)},e.prototype.hideBar=function(){return this.bridgeCall(t.SET_BAR_STATUS,{status:!1},{hasCallback:!1})},e.prototype.showBar=function(){return this.bridgeCall(t.SET_BAR_STATUS,{status:!0},{hasCallback:!1})},e.prototype.showToast=function(e){return this.bridgeCall(t.SHOW_TOAST,{text:e})},e.prototype.showLoading=function(){return this.bridgeCall(t.SET_LOADING,{status:!0})},e.prototype.hideLoading=function(){return this.bridgeCall(t.SET_LOADING,{status:!1})},e.prototype.purchase=function(e,r){return this.bridgeCall(t.PURCHASE,{productId:e,method:r})},e.prototype.getAppProductInfo=function(e){return this.bridgeCall(t.GET_APP_PRODUCT_INFO,{productId:e})},e.prototype.reportEvent=function(e){return this.bridgeCall(t.REPORT_EVENT,e,{hasCallback:!1})},e.prototype.refreshApp=function(){return this.bridgeCall(t.REFRESH_CLIENT_DATA,{},{hasCallback:!1})},e.prototype.getEnvironment=function(){return this.bridgeCall(t.GET_CURRENT_ENV)},e.prototype.getCache=function(e){try{return this.bridgeCall(t.GET_H5_CACHE).then((function(t){var r=c(t||"{}")||{};return Promise.resolve(e?r[e]:r)}))}catch(t){return console.error(t),Promise.reject(t)}},e.prototype.setCache=function(e,r){var n=this;return this.getCache().then((function(o){var i,a=Object.assign({},o,((i={})[e]=r,i));return n.bridgeCall(t.SET_H5_CACHE,{body:u(a)})}))},e.prototype.clearCache=function(){return this.bridgeCall(t.SET_H5_CACHE,{body:u({})})},e.prototype.playVideoByApp=function(e){return i(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.bridgeCall(t.PLAY_VIDEO,{data:e})]}))}))},e}(),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.get=function(t){var e;return window.webkit&&window.webkit.messageHandlers&&(null===(e=window.webkit.messageHandlers[t])||void 0===e?void 0:e.postMessage)},e}(s),p=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n(r,t),r.prototype.get=function(t){return function(){}},r.prototype.execute=function(t,e){console.warn("H5模式下，不支持".concat(t,"方法的调用！"))},r.prototype.getUserInfo=function(){return Promise.resolve({vip:"no",hasFreeTicketToReceive:!0,collectedFreeTicketsCount:0,freeTicketCountConfig:888,balanceInvite:0,isLogin:!0,isVip:!0,isBindApple:!1,userId:"6501190edd88ea45697c59c5",vipExpireTime:"0",avater:"http://cloudcdn.c360dn.com/b02c799359294fb3fe054fa3baa7b38a-200",presetTotalIncome:9,presetCount:96,nickname:"文闪",balanceJuice:28,userToken:"V1RSRldueUpGV3lkTnAwR0lleDJtL2V5RUY1ZHlSeUJVNWphQWFESWtqWEVsL3BtVU9DVk1oU3M5c1pWR0UzOUhTZEhYOXA2SW95a09uZ0ZwY2p4cGVGWWl0T21TZktodzdpSE1FMzVnRXFpZVFTbmE1cVhxbHFRUWFpMVdWTmpHcGVKN2p2TEFWbW50NXg0QXRzVUhxN1UxelNHUlN5Tw=="})},r.prototype.login=function(){return this.getUserInfo()},r.prototype.getCommonParams=function(){return i(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return[4,this.getEnvironment()];case 1:return t=e.sent(),[2,Promise.resolve({"PG-AppID":"VideoBeats","PG-AppVersion":"1.9.00","PG-Channel":"toolchain","PG-DataEnv":t,"PG-Debug":"1","PG-EID":"d241c0694472aebc739d509eb740d52e3d6fc2021f9d71e0c6371fe91afbf51f96db1c91453b376a60f0d0e702cff2ab","PG-ENCB":"0","PG-ENCH":"1","PG-FA":"6f97129290a3e4c7c340154b9c30c431","PG-InitStamp":"1700039392","PG-Language":"zh-Hans","PG-Locale":"zh_CN","PG-Model":"iPad11,3","PG-Network":"WIFI","PG-OSVersion":"15.4.1","PG-Platform":"iOS","PG-ScreenSize":"834.0*1112.0","PG-Time":"1702620070","PG-UpgradeStamp":"1702547225","PG-UserID":"6501190edd88ea45697c59c5","PG-UserToken":"V1RSRldueUpGV3lkTnAwR0lleDJtL2V5RUY1ZHlSeUJVNWphQWFESWtqWEVsL3BtVU9DVk1oU3M5c1pWR0UzOUhTZEhYOXA2SW95a09uZ0ZwY2p4cGVGWWl0T21TZktodzdpSE1FMzVnRXFpZVFTbmE1cVhxbHFRUWFpMVdWTmpHcGVKN2p2TEFWbW50NXg0QXRzVUhxN1UxelNHUlN5Tw==","PG-UtcOffset":"28800"})]}}))}))},r.prototype.sign=function(t){return Promise.resolve("56610f9fce1cdd07098cd81d")},r.prototype.showToast=function(t){return alert(t),Promise.resolve()},r.prototype.getEnvironment=function(){var t,r=location.hostname;return t=r.includes("-dev")||r.startsWith("local")||r.startsWith("1")?e.Dev:r.includes("-qa")?e.QA:e.Prod,Promise.resolve(t)},r.prototype.getCache=function(t){try{var e=localStorage.getItem("BRIDGE_WEB_CACHE");if(!e)return Promise.resolve();var r=c(e);return Promise.resolve(t?r[t]:r)}catch(t){return Promise.reject(t)}},r.prototype.setCache=function(t,e){return this.getCache().then((function(r){var n,o=Object.assign({},r,((n={})[t]=e,n));return localStorage.setItem("BRIDGE_WEB_CACHE",u(o)),e}))},r.prototype.clearCache=function(){return localStorage.removeItem("BRIDGE_WEB_CACHE"),Promise.resolve()},r}(s),f=function(){function e(){}return e.createBridge=function(t,r){void 0===r&&(r=this.getPlatform());var n="".concat(t,"-").concat(r),o=e.bridgeMap[n];return o?new o:(console.error("未找到".concat(n,"的Bridge，已使用兜底方案，请进行适配!")),new s)},e.getPlatform=function(){return window.webkit?"ios":"web"},e.bridgeMap={"blurrr-ios":l,"blurrr-web":p},e.EBridgeType=t,e}(),d=f,h={bridge:f};export{d as PGBridge,h as default};
//# sourceMappingURL=js-sdk.esm.js.map