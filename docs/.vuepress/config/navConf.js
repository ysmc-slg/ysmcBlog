

module.exports = [
  {
    text: '首页', 
    link: '/'
  },
  // {
  //   text: '前言',
  //   link: '/preface/'
  // },
  {
    text: '数据库',
    children: [
      { text: 'Redis', link: '/database/redis/' },
      { text: 'Mysql', link: '/database/mysql/',
        children: [
          {
            text: '高级部分',
            link: '/database/mysql/senior/'
          }
        ]
      }
    ]
  },
  {
    text: 'java系',
    children: [
      { text: 'java基础', link: '/java/basics/' },
      { text: 'Java8新特性', link: '/java/jdk8/' },
      { text: 'java反射', link: '/java/reflection/' },
      { text: '序列化', link: '/java/json/' }
    ],
    
  },
  { 
    text: 'MQ',
    children: [
      {
        text: 'rabbitMQ',
        link: '/mq/rabbitmq/'
      },
    ]
  },
  {
    text: '解决方案',
    children: [
      { 
        text: '自定义动态数据源', 
        link: '/solution/dyanmicDataSource/' 
      },
      { 
        text: '自定义日志注解', 
        link: '/solution/log/' 
      },
      { 
        text: '异步管理器', 
        link: '/solution/asyncManager/' 
      },
      { 
        text: '导入多出和上传下载', 
        link: '/solution/excelAndUpload/' 
      }
    ],
    
  },
  {
    text: 'SSM',
    children: [
      { text: 'Spring', link: '/ssm/spring/' },
      { text: 'SpringMVC', link: '/ssm/springmvc/' },
      { text: 'Mybatis', link: '/ssm/mybatis/' },
      { text: 'SSM整合', link: '/ssm/integration/' },
      { 
        text: '高级部分',
        children: [
          {
            text: 'Spring',
            link: '/ssm/ssm-senior/spring/'
          },{
            text: 'SpringMVC',
            link: '/ssm/ssm-senior/springmvc/'
          },
        ]
      }
    ]
  },
  {
    text: 'SpringBoot',link: '/springboot/'
  },

  {
    text: 'SpringSecirity',link: '/springsecurity2/'
  },

  {
    text: '前端',
    children: [
      { text: 'ES6新特性', link: '/Front-end/es6/' },
      { text: 'VueJS', link: '/Front-end/vue/' }
    ]
  },

  {
    text: '常用文档',
    children: [
      { text: 'elementUI', link: 'https://element.eleme.cn/#/zh-CN/component/table', icon: ':tada:'},
      { text: 'Vue文档', link: 'https://cn.vuejs.org/v2/guide/' },
      { text: 'momentjs', link: 'http://momentjs.cn/docs/', icon: ':tada:'},
      { text: 'EasyPoi文档', link: 'http://easypoi.mydoc.io/'}
    ]
  },
  {
    text: '开发工具类',
    children: [
      { text: 'StringUtils', link: '/utils/stringutils/' }
    ]
  }
];