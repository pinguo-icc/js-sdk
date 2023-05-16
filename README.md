# 介绍

## JS-SDK 是什么

JS-SDK 是一个前端团队在日常开发中所总结提炼而出的一套通用工具包，你可以把他当成定制化的 lodash ，我们针对日常使用习惯，将可以再项目中通用的逻辑进行封装，并将之提取到 JS-SDK 中，方便其他项目更新使用。

JS-SDK 使用 TypeScript 进行编写，采用 Rollup 进行打包，您可以在所有的 JavaScript 项目中使用它。

## 安装

yarn | npm

```bash
# yarn 安装
yarn add git+https://github.com/pinguo-icc/js-sdk

# npm 安装
npm i git+https://github.com/pinguo-icc/js-sdk
```

## 使用

全量使用（此方法会引入完整的 JS-SDK 包）

```javascript
import js_sdk from "js-sdk";

// 使用 bridge 工具包
js_sdk.bridge.run({
  type: "CLOSE",
});
```

按需导入（如果只需要 JS-SDK 中的部分能力推荐使用此方案导入，降低打包文件体积。）

```javascript
import { PGBridge } from "js-sdk";

// 使用 bridge 工具包
PGBridge.run({
  type: "CLOSE",
});
```
