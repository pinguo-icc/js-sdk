/*
 * @Author: komens
 * @Date: 2023-04-02 20:54:44
 * @LastEditTime: 2023-05-16 11:09:57
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

const TOOL_NAME = "js-sdk";
export default {
  input: "src/index.ts",
  output: [
    {
      file: `lib/${TOOL_NAME}.umd.js`,
      format: "umd",
      name: TOOL_NAME,
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: `lib/${TOOL_NAME}.esm.js`,
      format: "esm",
      name: TOOL_NAME,
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: `lib/${TOOL_NAME}.common.js`,
      format: "cjs",
      name: TOOL_NAME,
      sourcemap: true,
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
    visualizer({
      filename: `lib/${TOOL_NAME}-stats.html`,
    }),
    progress({
      format: "[:bar] :percent (:current/:total)",
    }),
  ],
  external: ["lodash"],
};
