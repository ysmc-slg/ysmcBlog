
const headConf = require("./config/headConf")
const pluginsConf = require('./config/pluginsConf')
const sidebarConf = require('./config/sidebarConf')
const navConf = require('./config/navConf')


module.exports = {
  base: "/docs/",
  title: "余生慢尝",
  description: '余生慢尝的笔记',
  head: headConf,
  plugins: pluginsConf,

  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    // sidebar: [
    //   '/',
    //   '/about',
    //   '/about1',
    // {
    //   title: '美丽的css',   // 必要的
    //   path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: false, // 可选的, 默认值是 true,
    //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   children: [
    //     '/css/c-aaa',
    //     '/css/c-bbb',
    //     '/css/c-ccc'
    //   ]
    // },
    // {
    //   title: '美丽的javascript',   // 必要的
    //   path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: false, // 可选的, 默认值是 true,
    //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   children: [
    //     '/javascript/j-aaa',
    //     '/javascript/j-bbb',
    //     '/javascript/j-ccc'
    //   ]
    // }

    // ],
    sidebar: sidebarConf,
    nav: navConf
  }
}