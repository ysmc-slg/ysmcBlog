---
title: 插槽
autoPrev: cache
---

插槽就是子组件中提供给父组件使用的一个 `占位符`，用 <slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的 <slot></slot> 标签。

插槽又分为 `默认插槽`，`具名插槽`，`作用域插槽`。我们会分别学习。

## 默认插槽

![slot1](/blogImg/vue/slot1.jpg)

如上图，只定义一个组件，但是三个里面显示的内容不同，此时就要使用插槽。

在子组件中放一个占位符

```vue
子组件
<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
```

在父组件中给这个占位符填充内容

```vue
父组件
<template>
	<div class="container">
		<Category title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>

		<Category title="游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Category>

		<Category title="电影">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
			}
		},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
```
此时展示效果为：

![slot1](/blogImg/vue/slot2.jpg)

## 具名插槽

具名插槽其实就是给插槽取个名字。一个子组件可以放多个插槽，而且可以放在不同的地方，而父组件填充内容时，可以根据这个名字把内容填充到对应插槽中。代码如下：

子组件的代码，设置了两个插槽(center 和 footer)
```vue
<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot name="center"></slot>
		<slot name="footer"></slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
```

父组件填充内容

```vue
<template>
	<div class="container">
		<Category title="美食" >
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>

		<Category title="游戏" >
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">单机游戏</a>
				<a href="http://www.atguigu.com">网络游戏</a>
			</div>
		</Category>

		<Category title="电影">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.atguigu.com">经典</a>
					<a href="http://www.atguigu.com">热门</a>
					<a href="http://www.atguigu.com">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
			}
		},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
```

如果填充的是一个 `div` 需要加上 `slot = 'xxx'` 属性，也可以使用 `template` 标签代替 `div`，但是要在标签内加上`v-slot:[name]`。

## 作用域插槽

上面的案例我们添加的数据都是在父组件内，怎样让数组在子组件内呢？此时就得使用 `作用域插槽` 了。

给子组件绑定参数
```vue
子组件
<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot :games="games">我是默认的一些内容</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title'],
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			}
		},
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
```
在父组件中使用 `v-slot:[name] = xxx` 的方式赋值
```vue
<template>
	<div class="container">

		<Category title="游戏">
			<template v-slot:default = props>
				<ul>
					<li v-for="(g,index) in props.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template v-slot:default="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<v-slot:default v-slot:default="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>

```

::: tip 注意

1. 作用域插槽必须使用 `template` 标签。
2. 自 2.6.0 起有所更新。已废弃的使用 slot-scope，改用 `v-slot:[name]` 如果 `slot标签` 没有name，需要写成 v-slot:default
3. `v-slot:default = props` props是一个数组，里面可能有多个参数，如果在`slot标签` 中传两个参数(game/hello)，props就会有这两个值

:::

