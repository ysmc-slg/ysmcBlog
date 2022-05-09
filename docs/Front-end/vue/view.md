---
description: 条件渲染
autoPrev: style
---

# 条件渲染

开发中我们需要，对一些DOM元素进行显示和隐藏，此时就可以用到 `v-if` 和 `v-show`。

## v-if <Badge text="重要" type="error"/>
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<button @click="show">{{isShow == true ? '隐藏' : '显示'}}</button>
			<h2 v-if="isShow">欢迎来到 我的博客</h2>
		</div>
	</body>

	<script type="text/javascript">

		const vm = new Vue({
			el:'#root',
			data:{
				isShow:false
			},
			methods:{
				show(){
					this.isShow = !this.isShow
				}
			}
		})
	</script>
</html>
```
`v-if` 还可以和 `v-else-if`、`v-else`一起使用，但要求必须挨在一起。
```html
<body>
  <div id="root">
    <button @click="n++">切换</button>
    <h2 v-if="n===1">Angular</h2>
    <h2 v-else-if="n===2">React</h2>
    <h2 v-else-if="n===3">Vue</h2>
    <h2 v-else>HTML</h2>
  </div>
</body>

<script type="text/javascript">

  const vm = new Vue({
    el:'#root',
    data:{
      n:0
    }
  })
</script>
```

## v-show <Badge text="重要" type="error"/>
和 `v-if` 类似。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<button @click="show">{{isShow == true ? '隐藏' : '显示'}}</button>
			<h2 v-show="isShow">欢迎来到 我的博客</h2>
		</div>
	</body>

	<script type="text/javascript">

		const vm = new Vue({
			el:'#root',
			data:{
				isShow:false
			},
			methods:{
				show(){
					this.isShow = !this.isShow
				}
			}
		})
	</script>
</html>
```

**v-if和v-show的区别**：

1. 手段：v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏；
2. 编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
3. 编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
4. 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
5. 如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。



