# 客户端通讯能力

bridge 作为与 APP 段通讯所提供的能力模块，为开发者提供了以下能力：

- 关闭 webView `CLOSE`
- 获取用户信息 `GET_USER_INFO`
- 调用登陆 `LOGIN`
- 获取公共参数 `GET_COMMON_PARAMS`
- 保存图片到相册 `SAVE_IMAGE`
- 参数签名 `SIGN`
- 展示提示 `SHOW_TOAST`
- 原生返回按钮控制 `SET_BAR_STATUS`
- 二维码解析 `QR_CODE_PARSER`
- 关闭二维码解析 `QR_CODE_CLOSE`
- 设置 Loading 状态 `SET_LOADING`
- 调起 Blurrr 图片/视频选中页面 `CALL_PHOTO_PICKER`
- 埋点上报 `REPORT_EVENT`
- 查询应用内购买商品信息 `GET_APP_PRODUCT_INFO`
- 购买订单 `PURCHASE`
- 可消耗商品完成处理 `PURCHASE_COMPLETE`
- 设置应用内缓存 `SET_STORAGE`
- 获取应用内缓存 `GET_STORAGE`
- 设置是否对选择的图片进行处理 `SET_INPUT_FILE_ATTRIBUTES`

## 方法

### run({ type, data, callback })

- **参数**：
  - {EBridgeType} type 事件类型
  - {json} data 传递的数据
  - {boolean} callback 是否返回 promise 回调

### toast(msg)

- **参数**：
  - {string} msg 需要显示的文本
