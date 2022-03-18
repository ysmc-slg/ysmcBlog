---
title: Vuex
autoPrev: slot
---
## 概念
Vuex 是一个专为 Vue.js 应用程序开发的<font color="red">状态管理模式</font>。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能

## 工作流程
Vuex有5个重要的属性：

1. state        存放状态
2. mutations    成员操作
3. getters      加工state成员给外界
4. actions      异步操作
5. modules      模块化状态管理

![vuex1](/blogImg/vue/vuex1.jpg)

如图所示，首先 `Vue` 组件如果调用某个 `VueX` 的方法过程中需要向后端请求时或者说出现异步操作时，需要 `dispatch`  `VueX` 中 `actions` 的方法，以保证数据的同步。可以说，`action` 的存在就是为了让 `mutations` 中的方法能在异步操作中起作用。

如果 `actions` 方法中没有任何操作，可以直接在组件内使用`commit` 来调用 `mutations` 中的方法。

## 使用Vuex（简单案例）
在使用之前首先要安装 `Vuex`，需要注意的是，本文案例使用的是vue2，目前`npm install vuex` 默认安装的是Vuex4，Vuex4在vue2中不能用。所以我们需要安装 `Veux3`

```js
npm i vuex@3
```

创建一个`store`文件夹，文件夹下创建一个 `index.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//准备state——用于存储数据
const state = {
	count: 0
},
const mutations = {
  increment (state) {
      state.count++
  }
}
//创建并暴露store
export default new Vuex.Store({
	mutations,
	state,
})
```

::: tip 注意

1. Vue.use(Vuex)    使用Vuex插件
2. new Vuex.Store   创建一个store

:::

然后再 `main.js` 中引入 `index.js`，并注入到 `Vue实例` 中。
```js
import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

new Vue({
	el:'#app',
	render: h => h(App),
	store
})
```

此时在组件模板中可以使用 `$store.state` 来获取状态对象，以及通过 `$store.commit` 方法触发状态变更：

```html
<template>
	<div>
		<h1>{{$store.state.count}}</h1>
	</div>
</template>
```
```js
computed: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
```

::: danger 注意

不能直接改变 `store` 中的状态（虽然能改），改变 `store` 中的状态的唯一途径就是显示地 `提交(commit) mutation`。这样使得我们可以方便追踪每一个状态的变化。 

:::

接下来我们具体来说一下 Vuex 中的各种属性

## State(单一状态树)

`state` 就是Vuex中的公共的状态，和组件中的 `data` 类似，用于保存所有组件的公共数据。

```js
//main.js
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const store = new Vuex.Store({
  state:{ 
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

### mapState 辅助函数

当一个组件需要获取多个状态的时候，将这些状态都声明计算属性会有些重复和冗余。
```js
computed: {
  count() {
    this.$store.state.count
  },
  count2() {
    this.$store.state.count2
  },
  count2() {
    this.$store.state.count2
  }
}
```

为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性。首先要引用 `mapstate`

```js
import { mapState } from 'vuex'

export default {

  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count2 + this.localCount
    }
  })
}
```

当计算属性的名称与 `state` 的子节点名称相同时，我们也可以给 `mapState` 传一个字符串数组。

```js
computed: mapState(['count','count2'])

// 等同于
computed: mapState({
  count: state => state.count
  count2: state => state.count2
}}
```

计算属性（computed）是一个对象，`mapState` 返回的也是一个对象，上面案例我们将`mapState`作为计算属性的返回值，此时计算属性中不能再写其他方法。我们如何将它与局部计算属性混合使用呢？

此时就要使用到 `es6` 中的，`对象展开运算符`了。

```js
computed:{
  // 相当于将mapState返回值对象中的属性，拿出来放到 computed对象中
  ...mapState({
      count: state => state.count
      count2: state => state.count2
  }},

  //其他方法
  computed1(){
    return "hello"
  }
}
```
## Getter

getter 和组件中的计算属性（computed）类似，有时候我们需要从 `store` 中派生出一些状态，例如对列表进行过滤并计数：

```js
computed: {
  doneTodosCount () {
    return this.$store.state.todos.filter(todo => todo.done).length
  }
}
```
如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。

Vuex 允许我们在 `store` 中定义 `getter`（可以认为是 `store` 的计算属性）。就像计算属性一样，`getter` 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

`Getter` 可以接受两个参数。

1. 第一个参数为 state
2. 接受其他 `getter` 作为第二个参数，将getters下的其他getter拿来用

```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state,getters) => {
     return getters.doneTodos.length
    }
  }
})
```
我们可以很容易地在任何组件中使用它：

```js
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```

### mapGetters辅助函数

和mapState一样。如果获取多个 getter 都声明计算属性会有些重复和冗余。此时就可以使用`mapState`。

```js
import {mapGetters} from 'vuex'

export default {

  computed:{
    ...mapGetters(['doneTodos','doneTodosCount'])

    // 等价于
    ...mapGetters({
      doneTodos:(state) => this.$store.getters.doneTodos,

      doneTodosCount:(state,getters) => this.$store.getters.doneTodosCount
    })
  }
}
```

如果你想将一个 getter 属性另取一个名字，使用对象形式：

```js
...mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```
## Mutations
**更改 Vuex 的 store 中的状态的唯一方法是提交 mutation**。Vuex 中的 `mutation` 非常类似于事件：每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。会接受 `state` 作为第一个参数

在开发中我们一般使用常量作为事件类型。

```js
const store = new Vuex.Store({
    state:{
        counter: 1000
    },
    mutations: {
        INCERMRNT(state){
            state.counter++
        }
    },
})
```
在组件中使用 `$store.commit` 调用 `INCERMRNT`

```js
this.$store.commit('INCERMRNT')
```

### 提交载荷（Payload）
就是在使用`this.$store.commit`同时传入额外的参数。即 mutation 的 **载荷（payload）**

```js
const store = new Vuex.Store({
    state:{
        counter: 1000
    },
    mutations: {
        INCERMRNT(state,n){
            state.counter += n
        }
    },
})
```

```js
methods: {
    add(){
      this.$store.commit('INCERMRNT',5)
    }
}
```
在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：

```js
// ...
mutations: {
  INCERMRNT (state, payload) {
    state.count += payload.amount
  }
}
```

```js
this.$store.commit('INCERMRNT', {
  amount: 10
})
```

### mapMutations 
你可以在组件中使用 `this.$store.commit('xxx')` 提交 `mutation`，或者使用 `mapMutations` 辅助函数将组件中的 `methods` 映射为 `store.commit` 调用（需要在根节点注入 store）。
```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```