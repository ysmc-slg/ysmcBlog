---
description: Router
autoPrev: Vuex
---

# Router

## 介绍
Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：

* 嵌套路由映射
* 动态路由选择
* 模块化、基于组件的路由配置
* 路由参数、查询、通配符
* 展示由 Vue.js 的过渡系统提供的过渡效果
* 细致的导航控制
* 自动激活 CSS 类的链接
* HTML5 history 模式或 hash 模式
* 可定制的滚动行为
* URL 的正确编码

## 安装和使用

1. 首先使用命令安装 `Router`

    ```vue
    npm i vue-router@3
    ```
    这里有一个需要注意的地方，从2022年2月7日开始，`vue-router` 的默认版本为4，`vue-router4` 只能在 `vue3` 中使用，否则会报错。而本文使用的是 `vue2` 所以要是用 `vue-router3`。

2. 编写router配置项

    ```js
    // 该文件专门用于创建整个应用的路由器
    import VueRouter from 'vue-router'
    //应用插件
    Vue.use(VueRouter)
    //引入组件
    import About from '../components/About'
    import Home from '../components/Home'

    //创建并暴露一个路由器
    export default new VueRouter({
        routes:[
            {
                path:'/about',
                component:About
            },
            {
                path:'/home',
                component:Home
            }
        ]
    })

    ```

    `About` 和 `Home` 组件这里就不写了

3. 在 `main.js` 中引入上面的 router 配置文件

    ```js
    //引入Vue
    import Vue from 'vue'
    //引入App
    import App from './App.vue'
    //引入路由器
    import router from './router'

    //关闭Vue的生产提示
    Vue.config.productionTip = false

    //创建vm
    new Vue({
        el:'#app',
        render: h => h(App),
        router
    })
    ```

4. 使用 `<router-link>` 标签，实现切换路由

    ```vue
    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
    ```

    `to` 中对应的就是，路由配置项中的 `path`

5. 使用 `<router-view>` 指定符合路由配置项组件的位置

    ```vue
    <router-view></router-view>
    ```

