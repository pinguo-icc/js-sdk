/**
 * # 客户端通讯支持的事件类型
 */
export enum EBridgeType {
  CLOSE = 'closeWebView', // 关闭H5
  GET_USER_INFO = 'getUserInfo', // 获取用户信息
  LOGIN = 'doLogin', // 登录
  GET_COMMON_PARAMS = 'getCommonParams', // 获取公共参数
  SAVE_FILE = 'saveImageToAlbum', // 保存文件(到相册)
  QR_CODE_PARSER = 'callQRParser', // 二维码解析
  SIGN = 'sign', // 签名
  SET_BAR_STATUS = 'setNativeBarStatus', // 设置app状态栏是否显示
  SHOW_TOAST = 'showHint', // 客户端toast提示信息
  QR_CODE_CLOSE = 'closeQRParser', // 关闭二维码扫描
  SET_LOADING = 'setLoadingStatus', // 设置相册loading效果显示状态
  CALL_PHOTO_PICKER = 'callPhotoPicker', // 调起Blurrr图片/视频选中页面 //! DELETE
  PURCHASE = 'purchase', // 购买订单
  GET_APP_PRODUCT_INFO = 'getIAPProductInfo', // 查询应用内购买商品信息
  REPORT_EVENT = 'reportEvent', // 埋点上报
  START_QR_SCAN = 'startQRScan', // 开始扫描
  STOP_QR_SCAN = 'stopQRScan', // 暂停扫描
  REFRESH_CLIENT_DATA = 'refreshUserProjectsAndPresets', // 刷新客户端数据
  GET_CURRENT_ENV = 'getCurrentEnv', //获取当前环境
  GET_H5_CACHE = 'getH5Cache', //获取H5缓存
  SET_H5_CACHE = 'setH5Cache', //设置H5缓存
  PLAY_VIDEO = 'playVideo',
}


export enum Environment {
  Prod = "release",
  QA = "qa",
  Dev = "dev",
  Pre = "operation",
}