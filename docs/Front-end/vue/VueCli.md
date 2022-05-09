---
description: 脚手架（Vue-CLI）
autoPrev: declarationPeriod
---
# 脚手架（Vue-CLI）

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

### env

::: tip

.env.development：添加下根目录下，开发环境下的配置

.env.production：添加下根目录下，生产环境下的配置

.env.staging：添加下根目录下，测试环境下的配置
:::

比如我们在开发环境下项目访问路径前面加上 `/dev-api`，生产环境访问路径加上 `/prod-api`。我们就可以用到上面的两个文件。

分别在 `.env.development` 和 `.env.production` 
```js
VUE_APP_BASE_API = '/dev-api'
```

```js
VUE_APP_BASE_API = '/prod-api'
```

在文件中使用 `process.env.VUE_APP_BASE_API` 就能读到两个文件设置的内容。

如果使用 `npm run serve` 就会自动读取 `.env.development` 中的内容，使用 `npm run build:prod` 就会在`.env.production` 中读取数据，前提是要在 `package.json` 进行添加。

```json
"scripts": {
    "dev": "vue-cli-service serve",
    "build:prod": "vue-cli-service build"
  }
```

### vue.config.js

`vue.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 `package.json` 中的 `vue` 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

请参考官方文档：[官方文档](https://cli.vuejs.org/zh/config/)


