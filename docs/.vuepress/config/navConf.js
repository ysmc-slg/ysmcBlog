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
      { text: 'Java8新特性', link: '/view/java/jdk8/' },
      { 
        text: 'MQ',
        items: [
          {
            text: 'rabbitMQ',
            link: '/view/mq/rabbitmq/'
          },
          // {
          //   text: 'MQ',
          //   items: [
          //     {
          //       text: 'rabbitMQ',
          //       link: '/view/mq/rabbitmq/'
          //     }
          //   ]
          // },
        ]
      }
    ],
    
  }
]