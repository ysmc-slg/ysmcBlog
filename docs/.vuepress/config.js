
const headConf = require("./config/headConf")
const pluginsConf = require('./config/pluginsConf')
const sidebarConf = require('./config/sidebarConf')
const navConf = require('./config/navConf')


module.exports = {
  title: "余生慢尝",
  description: '余生慢尝的笔记',
  head: headConf,
  plugins: pluginsConf,

  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    sidebar: sidebarConf,
    nav: navConf,
  },

  markdown:{
    // 代码块显示行号
    lineNumbers: true
  },

   // 作者
   author: '余生慢尝',
   // 备案号
   record: '鲁ICP备19060158号-1',
   // 项目开始时间
   startYear: '2021',
   //git地址
   //repo: 'zpj80231/znote',

}