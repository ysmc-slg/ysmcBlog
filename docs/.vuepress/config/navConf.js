module.exports = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '前言',
    link: '/view/preface/'
  },
  {
    text: '数据库',
    items: [
      { text: 'Redis', link: '/view/database/redis/' },
      { text: 'Mysql', link: '/view/database/mysql/' },
    ]
  },
  {
    text: 'java系',
    items: [
      { text: 'java基础', link: '/view/java/basics/' },
      { text: 'Java8新特性', link: '/view/java/jdk8/' },
      { 
        text: 'MQ',
        items: [
          {
            text: 'rabbitMQ',
            link: '/view/mq/rabbitmq/'
          },
        ]
      }
    ],
    
  },
  {
    text: 'SpringBoot',link: '/view/springboot/'
  },
  {
    text: '常用工具',
    items: [
      { text: 'elementUI', link: 'https://element.eleme.cn/#/zh-CN/component/table', icon: ':tada:'},
      { text: 'Vue文档', link: 'https://cn.vuejs.org/v2/guide/' },
      { text: 'momentjs', link: 'http://momentjs.cn/docs/', icon: ':tada:'},
      { text: 'EasyPoi文档', link: 'http://easypoi.mydoc.io/'}
    ]
  }
]