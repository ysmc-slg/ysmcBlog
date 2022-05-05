---
title: ref属性
autoPrev: render
---

`ref` 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：

通过案例来理解上面的内容：

```vue
<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
	</div>
</template>

<script>

	export default {
		name:'App',
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
			}
		},
	}
</script>
```

结果：

```html
<h1>欢迎学习Vue！</h1>
<button>点我输出上方的DOM元素</button>
```

也可以用在组件上，此时引用就指向组件实例(vueComponent)

组件`School`：
```vue
<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'北京大学',
				address:'北京'
			}
		},
	}
</script>
```

```vue
<template>
	<div>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		methods: {
			showDOM(){
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vueComponent）
			}
		},
	}
</script>
```