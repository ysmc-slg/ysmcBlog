---
title: 脚手架（Vue-CLI）
autoPrev: declarationPeriod
---
首先安装 `vue-cli` ，然后使用 `vue-cli` 创建一个vue项目。这里就演示怎样创建了，请自行搜索。

## 文件结构

	├── node_modules 
	├── public
	│   ├── favicon.ico: 页签图标
	│   └── index.html: 主页面
	├── src
	│   ├── assets: 存放静态资源
	│   │   └── logo.png
	│   │── component: 存放组件
	│   │   └── HelloWorld.vue
	│   │── App.vue: 汇总所有组件
	│   │── main.js: 入口文件
	├── .gitignore: git版本管制忽略的配置
	├── babel.config.js: babel的配置文件
	├── package.json: 应用包配置文件 
	├── README.md: 应用描述文件
	├── package-lock.json：包版本控制文件

上面是使用`vue-cli` 创建的项目结构，不同版本的`vue-cli` 生成的结构可以会不同，我使用的版本是`4.5.11`。

开发中我们可能还会添加一些其他的文件，如下：

::: tip

.env.development：添加下根目录下，开发环境下的配置

.env.production：添加下根目录下，生产环境下的配置

.env.staging：添加下根目录下，测试环境下的配置
:::

比如我们在开发环境下项目访问路径前面加上 `/dev-api`，生产环境访问路径加上 `/prod-api`。我们就可以用到上面的两个文件。

分别在 `.env.development` 和 `.env.production` 
```
```