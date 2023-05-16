/*
 * @Author: komens
 * @Date: 2023-04-02 21:34:33
 * @LastEditTime: 2023-05-16 11:10:10
 * @LastEditors: komens
 */
import typescript from "rollup-plugin-typescript2"; // 转换TS
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel"; // 转换低版本js
import delFile from "rollup-plugin-delete"; // 清理文件
import visualizer from "rollup-plugin-visualizer"; // 模块占用分析
import { terser } from "rollup-plugin-terser"; // 代码压缩
import progress from "rollup-plugin-progress"; // 打包进度条
import serve from "rollup-plugin-serve"; // 本地开发服务器
import livereload from "rollup-plugin-livereload"; // 自动刷新浏览器插件
import copy from "rollup-plugin-copy";

const TOOL_NAME = "js-sdk";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `lib/${TOOL_NAME}.umd.js`,
      format: "umd",
      name: TOOL_NAME,
      plugins: [terser()],
    },
    {
      file: `lib/${TOOL_NAME}.esm.js`,
      format: "esm",
      name: TOOL_NAME,
      plugins: [terser()],
    },
    {
      file: `lib/${TOOL_NAME}.common.js`,
      format: "cjs",
      name: TOOL_NAME,
      plugins: [terser()],
    },
  ],
  plugins: [
    delFile({ targets: "lib/*" }),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "tsconfig.json",
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
      clean: true,
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      bundled: "auto",
    }),
    copy({
      targets: [
        {
          src: "src/assets/fonts/**",
          dest: "lib/assets/fonts",
        },
        {
          src: "public/**",
          dest: "lib",
        },
      ],
    }),
    visualizer({
      filename: `lib/${TOOL_NAME}-stats.html`,
    }),
    progress({
      format: "[:bar] :percent (:current/:total)",
    }),
    serve({
      // 服务器启动的文件夹,访问此路径下的index.html文件
      contentBase: "lib",
      port: 8081,
    }),
    // watch dist目录，当目录中的文件发生变化时，刷新页面
    livereload("lib")
  ],
};
