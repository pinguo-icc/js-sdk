/*
 * @Author: komens
 * @Date: 2023-05-05 17:22:14
 * @LastEditTime: 2023-06-13 16:31:09
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
  base: "/js-sdk-docs/",
  themeConfig: {
    repo: "pinguo-icc/js-sdk",
    docsBranch: "main",
    docsDir: "/docs/",
    editLinks: true,
    smoothScroll: true,
    selectText: "选择语言",
    lastUpdated: "上次更新",
    editLinkText: "在 GitHub 上编辑此页",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "运营配置", link: "/ops/blurrr" },
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
      "/ops/": [
        {
          title: "blurrr字段配置",
          collapsable: false,
          children: ["blurrr"],
        }
      ],
    },
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleString();
        }
      }
    ]
  ]
};
