---
description: 组件
autoPrev: ref
---

# 组件

## 概念

组件(Component)是Vue.js最强大的功能之一。组件可以扩展HTML元素，封装可重用的代码。根据项目需求，抽象出一些组件，每个组件里包含了展现、功能和样式。每个页面，根据自己所需，使用不同的组件来拼接页面。这种开发模式使前端页面易于扩展，且灵活性高，而且组件之间也实现了解耦。本文将详细介绍Vue组件基础用法

![component](/blogImg/vue/component1.jpg)

## 组件注册

组件大体有两种注册方式，`全局注册` 和 `局部注册`，我们会分别来学习。

### 全局组件

1. 使用 extend 创建组件，然后注册
   ```js
   var com1 = Vue.extend({
    template:'<h3>Hello Component</h3>'
   });
   Vue.component("myCom1",com1);
   ```
2. 不使用中间变量，即把com1的内容直接写在Vue.component里面，如：
   ```js
   Vue.component("mycom1",Vue.extend({
     template:'<h3>这是第一种方式</h3>'
   }));
   ```

3. 不使用 extend
   ```js
   Vue.component("my-com1",{
     template:'<div><h3>这是h3标签</h3><span>这是span标签</span></div>'
   });
   ```
4. 在页面上定义外部 template 元素
   ```js
   Vue.component("mycom1",{
    template:'#temp'
   });
   ```

   ```html
   <template id="temp">
    <h3>这是html中的temp</h3>
   </template>
   ```

### 局部注册

```js
var vm = new Vue({
    el:"#newBrand",
    data:{},
    components:{
        mycom1:{
            template: '<div><h3>这是局部template</h3></div>'
        }
    }
});
```

```js

<template id="temp">
    <div><h3>这是局部template啦</h3></div>
</template>

var vm = new Vue({
    el:"#newBrand",
    data:{},
    components:{
        mycom1:{
            template: '#temp'
        }
    }
});
```

:::danger 注意 

在使用组件时要注意组件名的大小写。

如上面组件名写成 `my-com1` 形式时，在引用是必须写成 `<my-com1></my-com1>`

当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-com1> 和 <myCom1> 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

如果是全小写 (mycom1)，可以直接写成 `<mycom1></mycom1>`

:::

如果实在 `vue-cli` 项目中，全局注册的代码要写到 `main.js` 中。


## 组件中通信

通过上面的案例发现，各个组件都是相对独立的，但是在日常开发中，我们是需要不同的组件之间进行数据互相引用的。至于怎样让不同组件进行数据引用，这就是我们接下来要说的内容。

![component](/blogImg/vue/component2.jpg)

如上图所示App.vue 和 B.vue、B.vue 和 C.vue，D.vue。都是父子关系，C 和 D 是兄弟关系，A 和 C 是隔代关系。

接下来我们来说一下实现组件中传递参数的几种方式。



### 方式二：全局事件总线（$emit/$on）

这种方法通过一个空的 Vue 实例作为全局事件总线，用它来触发事件和监听事件，巧妙而轻量实现了任何组件的通信，包括父子、兄弟、跨级。

可以定义一个空的Vue实例，我这里就是用App的实例作为事件总线。

```js
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
```

在 App.vue 调用`beforeCreate`钩子时，就给它绑定一个变量，值就是App实例。

然后分别创建 `C`、`D` 两个子组件，案例是 `D` 组件传给 `C` 组件数据

```vue
D组件

<template>
	<div class="c">
		<button @click="sendStudentName">把数据发送给C组件</button>
	</div>
</template>

<script>
	export default {
		name:'c',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		methods: {
			sendStudentName(){
				this.$bus.$emit('hello',this.name)
			}
		},
	}
</script>
```
由于我们写了 `Vue.prototype.$bus = this`，所以就能直接通过`this.$bus` 获取到 `全局总线`，也就是 App的实例。然后通过 `$emit` 将数据发送出去，<div style="color:red">注意，$emit 第一个参数是名称，第二个参数才是要传递的数据</div>

```vue
<template>
	<div class="school">
		<h2>C组件：{{}}</h2>
	</div>
</template>

<script>
	export default {
		name:'C',
		data() {
			return {
				mag:''
			}
		},
		mounted() {
			// console.log('School',this)
			this.$bus.$on('hello',(data)=>{
                this.msg = data
				console.log('我是School组件，收到了数据',data)
			})
		},
		beforeDestroy() {
			this.$bus.$off('hello')
		}, 
	}
</script>
```
相同的道理拿到 `App` 实例后，使用 `$on` 监听 `hello`，要和`$emit()`第一个参数相同。因为有时不确定何时会触发，一般会在 `mounted` 或 `created` 钩子中来监听。完成后可以使用`$off` 停止自定义事件，停止后再点击就不执行了。





