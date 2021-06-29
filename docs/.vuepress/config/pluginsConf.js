const moment = require('moment')

moment.locale("zh-cn")
module.exports = {
  '@vuepress/last-updated':{
      transformer: (timestamp) => {moment(timestamp).format('lll');}
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'ysmc-slg',
      repo: 'docs',
      clientId: 'dac3887952b01939c190',
      clientSecret: '04045836314d98a2a91cf9aa5533c7339a2ae21a',
      autoCreateIssue: true
    },
    '@vuepress/back-to-top': true,
    "vuepress-plugin-auto-sidebar": {}
}