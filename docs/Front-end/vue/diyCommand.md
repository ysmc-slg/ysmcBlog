---
title: 自定义指令
autoPrev: computed
---

除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，Vue 也允许注册自定义指令。

## 钩子函数
在正式开始之前新介绍一下自定义指令声明周期的 `钩子函数`。

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

* `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化
* `inserted`：被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)。
* `update`：组件更新时调用。
* `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
* `unbind`：只调用一次，指令与元素解绑时调用。

介绍完了`钩子函数`，接下来看一下钩子函数需要的参数：

### 钩子函数的参数

指令钩子函数会被传入以下参数：

* `el`：指令所绑定的元素，可以用来直接操作DOM，位置必须是第一个参数。
* `binding`：一个对象，包含一下属性。

  * `name`：指令名，不包含 `v-` 前缀
  * `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  * `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  * `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  * `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  * `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar`中，修饰符对象为 `{ foo: true, bar: true }`。

* `vnode`：Vue 编译生成的虚拟节点。
* `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

::: tip 注意

除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。

:::

## 注册自定义指令

先做一个案例，页面加载时，让元素获取焦点，点击按钮后让数字 `+1`

```html
<div id="root">
  <input type="text" v-fbind:value="n">
  <button @click="n++">点我n+1</button>
</div>
```

```js
<script type="text/javascript">

  new Vue({
    el:'#root',
    data:{
      name:'尚硅谷',
      n:1
    },
    directives:{
      fbind:{
        //指令与元素成功绑定时（一上来）
        bind(element,binding){
          console.log('bind')
          element.value = binding.value
        },
        //指令所在元素被插入页面时
        inserted(element,binding){
          console.log('inserted')
          element.focus()
        },
        //指令所在的模板被重新解析时
        update(element,binding){
          console.log('update')
          element.value = binding.value
        },

        componentUpdated(element,binding){
          console.log('componentUpdated')
          element.value = binding.value
        },
        unbind(element,binding){
          console.log('unbind')
          element.value = binding.value
        }
      }
    }
  })
  
</script>
```

以上是局部指令的注册方式，也可以对指令进行全局注册。只需要修改js代码即可

```js
Vue.directive('fbind', {
  //指令与元素成功绑定时（一上来）
  bind(element,binding){
    console.log('bind')
    element.value = binding.value
  },
  //指令所在元素被插入页面时
  inserted(element,binding){
    console.log('inserted')
    element.focus()
  },
  //指令所在的模板被重新解析时
  update(element,binding){
    console.log('update')
    element.value = binding.value
  },

  componentUpdated(element,binding){
    console.log('componentUpdated')
    element.value = binding.value
  },
  unbind(element,binding){
    console.log('unbind')
    element.value = binding.value
  }
})
```

狗子函数还是不变的。

## 函数简写

在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子。比如上面案例，可以修改为

```js
Vue.directive('fbind',(element,binding) => {
  console.log('inserted/update')
  element.value = binding.value
})

或

new Vue({
  el:'#root',
  data:{
    name:'尚硅谷',
    n:1
  },
  directives:{
    fbind(element,binding){
      console.log('inserted/update')
      element.value = binding.value
    }
  }
})
```

## 对象字面量


如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```

```js
Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})
```
