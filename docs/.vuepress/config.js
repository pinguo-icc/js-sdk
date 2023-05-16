/*
 * @Author: komens
 * @Date: 2023-05-05 17:22:14
 * @LastEditTime: 2023-05-16 11:13:31
 * @LastEditors: komens
 */
module.exports = {
  title: "前端工具库",
  description: "JS-SDK",
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/docs/assets",
      },
    },
  },
  themeConfig: {
    repo: "https://github.com/pinguo-icc/js-sdk",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "指南",
          collapsable: false,
          children: [""],
        },
        {
          title: "能力模块",
          collapsable: false,
          children: ["bridge"],
        },
      ],
    },
  },
};
