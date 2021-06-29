
const headConf = require("./config/headConf")
const pluginsConf = require('./config/pluginsConf')
const sidebarConf = require('./config/sidebarConf')
const navConf = require('./config/navConf')
const nav = require('./nav')


module.exports = {
  title: "余生慢尝",
  description: '余生慢尝的笔记',
  head: headConf,
  plugins: pluginsConf,

  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    sidebar: sidebarConf,
    nav: nav
  }
}