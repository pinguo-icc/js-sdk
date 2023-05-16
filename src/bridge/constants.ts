/*
 * @Author: komens
 * @Date: 2023-04-24 09:40:08
 * @LastEditTime: 2023-04-24 09:40:09
 * @LastEditors: komens
 */
export enum EBridgeType {
  CLOSE = "closeWebView", // 关闭H5
  GET_USER_INFO = "getUserInfo", // 获取用户信息
  LOGIN = "doLogin", // 登录
  GET_COMMON_PARAMS = "getCommonParams", // 获取公共参数
  SAVE_FILE = "saveImageToAlbum", // 保存文件(到相册)
  QR_CODE_PARSER = "callQRParser", // 二维码解析
  SIGN = "sign", // 签名
  SET_BAR_STATUS = "setNativeBarStatus", // 设置app状态栏是否显示
  SHOW_TOAST = "showHint", // 客户端toast提示信息
  QR_CODE_CLOSE = "closeQRParser", // 关闭二维码扫描
  SET_LOADING = "setLoadingStatus", // 设置相册loading效果显示状态
  CALL_PHOTO_PICKER = "callPhotoPicker", // 调起Blurrr图片/视频选中页面
  REPORT_EVENT = "reportEvent", // 埋点上报
  PURCHASE = "purchase", // 购买订单
  GET_APP_PRODUCT_INFO = "getIAPProductInfo", // 查询应用内购买商品信息
  PURCHASE_COMPLETE = "completePurchase", // 可消耗商品完成处理
  SET_STORAGE = "setH5Cache", // 设置应用内缓存
  GET_STORAGE = "getH5Cache", // 获取应用内缓存
  SET_INPUT_FILE_ATTRIBUTES = "setInputFileAttributes", // 设置文件上传属性
}
