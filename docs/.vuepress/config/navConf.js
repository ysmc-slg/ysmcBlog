// module.exports = [
//   { text: '首页', link: '/' },
//   { text: '先看', link: '/pre-reading.html' },
//   { text: '计算机', link: '/computer/' },
//   { text: '基石', children: [
//     { text: '数学', link: '/cornerstone/math/' },
//   ]},
//   { text: '系统', children: [
//     { text: 'Linux', link: '/os/linux/' },
//     { text: 'Arch', link: '/os/arch/' },
//     { text: 'Manjaro', link: '/os/manjaro/' },
//     { text: 'Ubuntu', link: '/os/ubuntu/' },
//     { text: 'CentOS', link: '/os/centos/' },
//     { text: 'Kubernetes', link: '/os/kubernetes/' },
//   ]},
//   { text: '前端', children: [
//     { text: 'Web', link: '/frontend/web/' },
//     { text: 'JavaScript', link: '/frontend/javascript/' },
//     { text: 'TypeScript', link: '/frontend/typescript/' },
//     { text: 'CSS', link: '/frontend/css/' },
//     { text: 'Canvas', link: '/frontend/canvas/' },
//     { text: 'Vue', link: '/frontend/vue/' },
//     { text: 'Vite', link: '/frontend/vite/' },
//     { text: 'NuxtJS', link: '/frontend/nuxtjs/' },
//     { text: 'Webpack', link: '/frontend/webpack/' },
//     { text: 'Flutter', link: '/frontend/flutter/' },
//     { text: 'D3', link: '/frontend/d3js/' },
//     { text: 'Jest', link: '/frontend/jest/' },
//     { text: 'WeApp', link: '/frontend/weapp/' },
//     { text: 'Utils', link: '/frontend/utils/' },
//   ]},
//   { text: '后端', children: [
//     { text: 'Nodejs', link: '/backend/nodejs/' },
//     { text: 'Nestjs', link: '/backend/nestjs/' },
//     { text: 'Golang', link: '/backend/golang/' },
//     { text: 'Nginx', link: '/backend/nginx/' },
//     { text: 'Traefik', link: '/backend/traefik/' },
//     { text: 'MySQL', link: '/backend/mysql/' },
//     { text: 'MongoDB', link: '/backend/mongodb/' },
//     { text: 'Redis', link: '/backend/redis/' },
//     { text: 'Docker', link: '/backend/docker/' },
//   ]},
//   { text: '算法', link: '/algorithms/' },
//   { text: '设计', children: [
//     { text: '像素风', link: '/design/pixel/' },
//   ]},
//   { text: '开发工具', children: [
//     { text: 'Git', link: '/tools/git/' },
//     { text: 'Github', link: '/tools/github/' },
//     { text: 'VSCode', link: '/tools/vscode/' },
//     { text: 'Chrome', link: '/tools/chrome/' },
//     { text: 'Google', link: '/tools/google/' },
//     { text: 'Bookmark scripts', link: '/tools/bookmark-scripts/' },
//   ]},
//   { text: '更多', children: [
//     { text: '导航 🎉', link: '/more/navigation.html' },
//     { text: 'VuePress 侧边栏插件', link: 'https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/' },
//     { text: 'VuePress 官网', link: 'https://vuepress.vuejs.org/zh/' },
//   ]},
//   { text: '🚇 开往', link: 'https://travellings.link' },
// ];

module.exports = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '前言',
    link: '/preface/'
  },
  {
    text: '数据库',
    items: [
      { text: 'Redis', link: '/database/redis/' },
      { text: 'Mysql', link: '/database/mysql/' },
    ]
  }
  // {
  //   text: 'java系',
  //   items: [
  //     { text: 'java基础', link: '/java/basics/' },
  //     { text: 'Java8新特性', link: '/java/jdk8/' },
  //     { text: 'java反射', link: '/java/reflection/' },
  //     { 
  //       text: 'MQ',
  //       items: [
  //         {
  //           text: 'rabbitMQ',
  //           link: '/mq/rabbitmq/'
  //         },
  //       ]
  //     }
  //   ],
    
  // },
  // {
  //   text: '解决方案',
  //   items: [
  //     { text: '自定义注解实现添加操作日志', link: '/solution/aop/' }
  //   ],
    
  // },
  // {
  //   text: 'SSM',
  //   items: [
  //     { text: 'Spring', link: '/ssm/spring/' },
  //     { text: 'SpringMVC', link: '/ssm/springmvc/' },
  //     { text: 'Mybatis', link: '/ssm/mybatis/' },
  //     { text: 'SSM整合', link: '/ssm/integration/' },
  //     { 
  //       text: '高级部分',
  //       items: [
  //         {
  //           text: 'Spring',
  //           link: '/ssm/ssm-senior/spring/'
  //         },{
  //           text: 'SpringMVC',
  //           link: '/ssm/ssm-senior/springmvc/'
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: 'SpringBoot',link: '/springboot/'
  // },

  // {
  //   text: '前端',
  //   items: [
  //     { text: 'ES6新特性', link: '/Front-end/es6/' },
  //     { text: 'VueJS', link: '/Front-end/vue/' }
  //   ]
  // },

  // {
  //   text: '常用工具',
  //   items: [
  //     { text: 'elementUI', link: 'https://element.eleme.cn/#/zh-CN/component/table', icon: ':tada:'},
  //     { text: 'Vue文档', link: 'https://cn.vuejs.org/v2/guide/' },
  //     { text: 'momentjs', link: 'http://momentjs.cn/docs/', icon: ':tada:'},
  //     { text: 'EasyPoi文档', link: 'http://easypoi.mydoc.io/'}
  //   ]
  // }
];