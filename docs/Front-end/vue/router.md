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

**注意**：

1. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
2. 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息。
3. 整个应用只有一个 `router` ，可以通过组件的 `$router` 属性获取到。

## 路由嵌套

这里只展示配置路由的规则，具体的代码可以看github案例

```js
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
				}
			]
		}
	]
})
```

只需要在 `VueRouter` 的参数中使用 `children` 配置，此时就给 `/home` 路由添加了两个子路由，需要注意的是子路由的 `path` 不需要 `/`

然后还是使用 `<router-link>` 标签来进行路由的跳转，但是路径要写全，如下：

```html
 <router-link to="/home/news">News</router-link>
```

## 命名路由

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。

```js
export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About
		}
	]
})
```
只需要添加一个`name` 属性就可以了。

此时在进行路由跳转的时候可以使用 `<router-link>` 的 `name` 属性。

```html
<router-link :to="{name: 'guanyu'}"></router-link>
```

## 编程式导航

上面的案例都是使用 `<router-link>` 标签来完成的路由跳转，但是在开发中不可能都是通过点击来进行路由的跳转。我们还可以通过编写代码来实现路由的跳转。

通过编码实现路由跳转有两种方式。

1. router.push

    在 `Vue` 实例内部，我们可以通过 `$route` 访问路由实例，调用它里面的 `push` 进行路由跳转。

    |  声明式   | 编程式  |
    |  ----  | ----  |
    | `<router-link :to="...">`  | `router.push(...)` |

    ```js

    this.$router.router.push({ path: '/about' })

    this.$router.router.push({ name: 'guanyu'})
    // 默认就是 path 的形式
    this.$router.router.push("/about")
    ```

    使用 `router.push` ，会向 history 栈中添加一个新的记录，所以，当用户点击浏览器回退按钮时，则返回之前的URL

    当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 router.push(...)。
2. router.replace

    跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

    
    |  声明式   | 编程式  |
    |  ----  | ----  |
    | `<router-link :to="..." replace>`  | `router.replace(...)` |

    ```js

    this.$router.router.replace({ path: '/about' })

    this.$router.router.replace({ name: 'guanyu'})
    // 默认就是 path 的形式
    this.$router.router.replace("/about")
    ```

3. router.go(n)

    这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。

    ```js
    // 在浏览器记录中前进一步，等同于 history.forward()
    router.go(1)

    // 后退一步记录，等同于 history.back()
    router.go(-1)

    // 前进 3 步记录
    router.go(3)

    // 如果 history 记录不够用，那就默默地失败呗
    router.go(-100)
    router.go(100)
    ```

## 路由组件传参

上面所有的案例故意没讲到传参，这里我们同意来说一下。传参的方式主要有三种：

1. query
    `<router-link>` 标签和 导航式编程都可以。

    * 1.1 <router-link> 标签方式
    
        ```js
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'}
                ]
            }
        }
        ```
        ```bash
        
        <li v-for="m in messageList" :key="m.id">
            //跳转路由并携带query参数，to的字符串写法
            <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
            

            //也可以使用对象的方式传递参数
            <router-link :to="{
                path:'/home/message/detail',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
            {{m.title}}

            </router-link>


            // 使用路命名
            <router-link :to="{
                name:'detail',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
            {{m.title}}
            </router-link>
        </li>
        ```
        三种方式任选

    * 1.2 编程式导航
        ```js
        //带查询参数，变成 /home/message/detail?id='001&title='消息001'
        this.$route.push({paht:'/home/message/detail',query:{
            id:m.id,
            title:m.title
        }})


        this.$route.push({name:'detail',query:{
            id:m.id,
            title:m.title
        }})

        this.$route.replace({paht:'/home/message/detail',query:{
            id:m.id,
            title:m.title
        }})


        this.$route.replace({name:'detail',query:{
            id:m.id,
            title:m.title
        }})
        ```

    获取参数都是一样的

     ```js
    $route.query.id
    $route.query.title
     ```

