/**
 * # 客户端通讯支持的事件类型
 */
export declare enum EBridgeType {
    CLOSE = "closeWebView",
    GET_USER_INFO = "getUserInfo",
    LOGIN = "doLogin",
    GET_COMMON_PARAMS = "getCommonParams",
    SAVE_FILE = "saveImageToAlbum",
    QR_CODE_PARSER = "callQRParser",
    SIGN = "sign",
    SET_BAR_STATUS = "setNativeBarStatus",
    SHOW_TOAST = "showHint",
    QR_CODE_CLOSE = "closeQRParser",
    SET_LOADING = "setLoadingStatus",
    CALL_PHOTO_PICKER = "callPhotoPicker",
    PURCHASE = "purchase",
    GET_APP_PRODUCT_INFO = "getIAPProductInfo",
    REPORT_EVENT = "reportEvent",
    START_QR_SCAN = "startQRScan",
    STOP_QR_SCAN = "stopQRScan",
    REFRESH_CLIENT_DATA = "refreshUserProjectsAndPresets",
    GET_CURRENT_ENV = "getCurrentEnv",
    GET_H5_CACHE = "getH5Cache",
    SET_H5_CACHE = "setH5Cache",
    PLAY_VIDEO = "playVideo",
    DO_SCAN = "doScan",
    SAVE_RESOURCE = "saveResource",
    APPLY_RESOURCE = "applyResource",
    DO_LOCAL_CACHE = "doLocalCache",
    SET_STATUS_BAR_STYLE = "setStatusBarStyle",
    SHOW_SALES_PAGE = "showSalesPage",
    REGISTER_NOTIFY = "registerNotify",
    DO_SHARE = "doShare",
    SET_HOME_TAB_BAR = "setHomeTabbarStatus"
}
export declare enum Environment {
    Prod = "release",
    QA = "qa",
    Dev = "dev",
    Pre = "operation"
}
