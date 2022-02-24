---
title: render函数
autoPrev: VueCli
---

## 基础

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用`渲染函数`（render），它比模板更接近编译器。

拿官网的案例来说，我们想要实现根据不同的 `level` 来渲染 h 标签的大小。根据前面的知识首先想到的是这样做：

先创建一个组件 `AnchoredHeading`，详细了解组件请移步[Vue组件](./component.html#概念)

```vue
<template>
  <div>
    <h1 v-if="level ===1">HelloWorld</h1>
    <h2 v-if="level ===2">HelloWorld</h2>
    <h3 v-if="level ===3">HelloWorld</h3>
    <h4 v-if="level ===4">HelloWorld</h4>
    <h5 v-if="level ===5">HelloWorld</h5>
    <h6 v-if="level ===6">HelloWorld</h6>
  </div>
</template>
<script>
  export default {
    name: "AnchoredHeading",
    props:{
      level: Number
    }
  }
</script>
```
组件需要接收一个 `level` 参数，根据 `level` 的值，判断需要渲染那个 h 标签

然后在其他组件中，使用这个组件

```vue
<template>
  <div id="app">
    <anchored-heading :level="1"></anchored-heading>
    <anchored-heading :level="2"></anchored-heading>
    <anchored-heading :level="3"></anchored-heading>
    <anchored-heading :level="4"></anchored-heading>
    <anchored-heading :level="5"></anchored-heading>
    <anchored-heading :level="6"></anchored-heading>
  </div>
</template>

<script>
import AnchoredHeading from './components/AnchoredHeading.vue'

export default {
  name: 'App',
  components: {
    AnchoredHeading
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

结果如下：

![render1](/blogImg/vue/render1.jpg)

这样写虽然能实现效果，但是代码过于冗长，而且还有重复代码。这里在使用模板就不合适了，此时我们可以使用 `render` 函数重写 `AnchoredHeading` 组件：

```vue
<script>
  export default {
    name: "AnchoredHeading",
    props:{
      level: Number
    },
    render(createElement){
      return createElement('h' + this.level,'HelloWorld')
    }
  }
</script>
```

结果和之前的一样，但是看起来简单多了！代码也精简了很多

## 虚拟 DOM
Vue 通过建立一个 `虚拟DONM` 来追踪自己要如何改变真实DOM。请仔细看这行代码：
```js
return createElement('h1', this.blogTitle)
```
`createElement` 到底会返回什么呢？它返回的其实不是一个实际的DOM元素。它更准确的名字可能是 `createNodeDescription`，因为它所包含的信息会告诉 vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述称为 `虚拟节点(virtual node)`，也常简写它为 `VNode`。

`虚拟DOM` 是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

## createElement 参数

`createElement` 函数需要可以接受三个参数，如下：

```js
// @returns {VNode}
createElement(
  // 类型：{String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  'div',

  // 类型：{Object}
  // 一个与模板中 attribute 对应的数据对象。可选。
  // 有多个对象
  // class           
  // style
  // attrs
  // domProps
  // props
  // on
  // nativeOn
  // directives
  // scopedSlots
  // slot
  // key
  // ref
  {
    // 组件传递的参数
    props:{
      level: Number
    },
    class: {
      foo: true,
      baz: false
    },
    style: {
      height: '34px',
      background: 'orange',
      fontSize: '16px'
    },
    //正常的html特性(除了class和style)
    attrs: {
      id: 'foo',
      title: 'baz'
    },
    //用来写原生的DOM属性
    domProps: {
      innerHTML: '<span style="color:blue;font-size:24px">江心比心</span>'
    }
  },

  // 类型：{String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```

## 使用 JavaScript 代替模板功能

### v-if 和 v-for

只要在原生的 JavaScript 中可以轻松完成的操作，Vue 的渲染函数就不会提供专有的替代方法。比如，在模板中使用的 `v-if` 和 `v-for`。

```js
<ul v-if="items.length">
  <li v-for="item in items">{{ item.name }}</li>
</ul>
<p v-else>No items found.</p>
```

这些都可以在渲染函数中用 JavaScript 的 `if` / `else` 和 `map` 来重写

```vue
<script>
  export default {
    name: "Heading",
    data(){
      return {
        people: ['张三','李四','王五']
      }
    },
    render(createElement){
      if(this.people.length){
        return createElement('ul',this.people.map(name => {
          return createElement('li',name)
        }))
      } else {
        return createElement('p','NO People found')
      }
    }
  }
</script>
```

只需要在其他组件中使用就可以。

```vue
<template>
  <div id="app">
    <Heading></Heading>
  </div>
</template>

<script>
import Heading from './components/Heading.vue'

export default {
  name: 'App',
  components: {
    Heading,
  }
}
</script>

<style>
</style>
```

### v-model
渲染函数中没有与 `v-model` 的直接对应，需要自己实现相应的逻辑
```vue

<script>
  export default {
    props: ['value'],
    render: function (createElement) {
      var self = this
      return createElement('input', {
        domProps: {
          value: self.value
        },
        on: {
          input: function (event) {
            self.$emit('input', event.target.value)
          }
        }
      })
    }
  }
```
和上面的一样，只需要在其他组件中使用就行

```vue
<template>
  <div id="app">
    <Heading :value="1"></Heading>
  </div>
</template>

<script>
import Heading from './components/Heading.vue'

export default {
  name: 'App',
  components: {
    Heading,
  }
}
</script>

<style>
</style>
```

## JSX

使用 JSX 可以在 js 代码中写 HTML 标签，可以精简render代码。

我们想在页面显示一个 `h1` 标签，使用 render函数 写法如下：

```vue
<script>
 export default {
    name: "Jsx",
    render(createElement) {
        return createElement('h1','HelloJSX')
    },
 }
</script>
```

也可以使用 JSX，写法更简单

```vue
<script>
 export default {
    name: "Jsx",
    render() {
        return (<h1>HelloJSX</h1>)
    },
 }
</script>
```

这种写法更直观，它可以让我们回到更接近于模板的语法上。

