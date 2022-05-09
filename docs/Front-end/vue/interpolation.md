---
description: 基础语法
autoPrev: README
---
# 基础语法

首先需要安装 `VueJS`，我这里直接引用 vuejs 的文件。如果想用其他方法，请访问官网：[安装VueJS](https://cn.vuejs.org/v2/guide/installation.html)

## 使用 Vue

接下来我们使用一下 Vue。
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>初识Vue</title>
  <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
  <div id="root">
    <h1>hello {{name}}</h1>
    <h1>hello {{student.name}}</h1>
  </div>

  <script type="text/javascript">
    
    new Vue({
      el:'#root',
      data:{
        name:'vue',
        student:{
          name:'tom',
          age:18
        }
      }
    })
  </script>
</body>
</html>
```

::: tip 详解

`new Vue({})`：Vue 创建实例。

`el`：挂载的 div

`data`：用于数据存储，只能在el指定的容器中使用

{{xxx}}：插值表达式，能直接获取data中的数据，同时 `xxx` 必须得是 js表达式

:::

## 数据绑定
Vue 中有 2 种数据绑定方式，`单相绑定（v-bind）` 和 `双向绑定（v-mode）`。分别看一下具体用法。
### 单向绑定
```html
<body>
  <div id="root">
    <input type="text" v-bind:value="name">
    <h1 v-bind:x="name">hello</h1>
  </div>

  <script type="text/javascript">
    new Vue({
      el:'#root',
      data:{
        name:'余生慢尝'
      }
    })
  </script>
</body>
```
`v-bind` 是单向绑定的表达式，单向绑定数据只能从 `data` 流向页面，也就是说页面中修改`value` 的值并不会影响 `data` 中 `name` 的值。

`v-bind` 可以简写成 `:` 如下：
```js
<input type="text" :value="name">
<h1 :x="name">hello</h1>
```

### 双向绑定
```html
<body>
  <div id="root">
    <input type="text" v-model:value="name">
  </div>

  <script type="text/javascript">
    new Vue({
      el:'#root',
      data:{
        name:'余生慢尝'
      }
    })
  </script>
</body>
```
`v-mode` 是双向绑定的表达式，双向绑定数据不仅能从 `data` 流向页面，还可以从页面流向`data`。在页面中修改 `value` 的值，`data` 中的 `name` 也跟着改变。

**注意：**

双向绑定一般应用在表单类元素上（如：input、select等）

`v-mode:value` 可以简写成 `v-mode`，因为 `v-mode` 默认收集的就是 value 值

```html
<div id="root">
  <input type="text" v-model="name">
</div>
```

## 事件处理
js 中使用 `v-on:xxx` 来绑定一个事件。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件的基本使用</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<button v-on:click="showInfo">点我提示信息</button>
		</div>
	</body>

	<script type="text/javascript">

		const vm = new Vue({
			el:'#root',
			data:{
				
			},
			methods:{
				showInfo(event){
					console.log(event.target.innerText)
				}
			}
		})
	</script>
</html>
```
使用 `v-on:click` 来绑定一个点击事件，执行事件时不传递参数，会默认有一个参数 `PointerEvent`。

有参数传递时，`PointerEvent` 就不会传递。如果还需要 `PointerEvent`，传递方式如下：
```html
<div id="root">
  <button v-on:click="showInfo($event,number)">点我提示信息</button>
</div>

<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				
			},
			methods:{
				showInfo2(event,number){
					console.log(event.target.innerText)
          console.log(number)
				}
			}
		})
	</script>
</html>
```
`v-on:xxx` 也可以缩写成 `@xxx`。如下：
```html
<div id="root">
  <button @click="showInfo($event,number)">点我提示信息</button>
</div>
```

## 事件修饰符
Vue 中的事件修饰符：
* prevent：阻止默认事件（常用）
* stop：阻止事件冒泡（常用）
* once：事件只触发一次（常用）
* self：只有event.target是当前操作的元素时才触发事件；
* capture：使用事件的捕获模式；
* passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

接下来分别举例说明

1. prevent
   ```html
   <div id="root">
     	<a href="http://blog.zxqs.top" @click="showInfo">点我提示信息</a>
   </div>

   	<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{},
			methods:{
				showInfo(e){
					alert('同学你好！')
				}
			}
		})
	</script>
   ```
   `a` 标签的默认事件是网页跳转，但执行完 `alert` 之后进行网页跳转，如果不想让它跳转，就得使用 `prevent`。在 `@click` 后面加上 `prevent` 即可。
   ```html
   	<a href="http://blog.zxqs.top" @click.prevent="showInfo">点我提示信息</a>
   ```
2. stop
  
   ```html
   <div id="root">
      <div class="demo1" @click="showInfo">
        <button @click="showInfo">点我提示信息</button>
      </div>
    </div>

    <!-- showInfo 和上面一样，这里就省略了 -->
   ```
   可以看到 `button` 和 `div` 都绑定了事件，点击 `button` 同时也会触发 `div` 绑定的事件。只需在 `button` 的 `@click` 后加上 `stop`。
   ```html
   <div id="root">
    <div class="demo1" @click="showInfo">
        <button @click.stop="showInfo">点我提示信息</button>
    </div>
   </div>
   ```

   修饰符也可以连续写
   ```html
   <div class="demo1" @click="showInfo">
      <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a>
   </div>
   ```
   此时不会冒泡，也不会指定默认事件

3. once
   ```html
   <div id="root">
     <button @click.once="showInfo">点我提示信息</button>
   </div>
   ```
   只在第一次点击的时候执行。

## 键盘事件
键盘事件也是前端比较常用的，比如，在`input`标签中回车触发查询条件。vue中为我们封装了一些常用的`按键别名`

 别名 |  按键 
:----:|:----:
 .enter &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|  Enter 
 .tab | Tab 
.delete| delete（删除）/BackSpace（退格） 
 .esc | Esc(退出) 
 .space | Space(空格键)  
 .left | Left(左箭头) 
 .up | Up(上箭头) 
.down| Down(下箭头)
.ctrl| Ctrl
.alt| Alt 
.shift| Shift 
.meta|(window系统下是window键，<br>mac下是command键)

### 使用vue键盘事件
```html
<body>
  <script src="../js/vue.js"></script>
  <div id="root">
    <h2>欢迎学习{{name}}</h2>
    <input type="text" placeholder="按下回车输入" @keyup.enter="showView">
  </div>
  
  <script>
    new Vue({
      el:'#root',
      data:{
        name:'vue'
      },
      methods:{
        showView(){
          console.log('执行了方法')
        }
      }
    })
  </script>
</body>
```
vue中使用`keyup` 和 `keydown`，来触发键盘事件。`keyup`是键盘按下抬起，`keydown` 是键盘按下。

上面表格中的别名，tab、ctrl、alt、shift、meta，有点特殊，他们本身就系统修饰功能，比如 tab 它本身功能就是切换焦点，所以如果用`keyup`的话事件并不会触发。

ctrl、alt、shift、meta有两种解决方法：

1. 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
2. 配合keydown使用：正常触发事件。

Vue还支持自定义键名，比如我想按下 `A` 触发事件，但是官方又没定义。此时就可以自定义键名。

`Vue.config.keyCodes.自定义键名 = 键码`

键码可以去网上查询：[查询地址](http://www.mamicode.com/info-detail-882180.html)

```html
<div id="root">
  <h2>欢迎学习{{name}}</h2>
  <input type="text" placeholder="按下回车输入" @keyup.a="showView">
</div>

<script>
  Vue.config.keyCodes.a = 65
  
  new Vue({
    el:'#root',
    data:{
      name:'vue'
    },
    methods:{
      showView(){
        console.log('执行了方法')
      }
    }
  })
</script>
```
### 使用js原生方法

```html
<div id="root">
  <h2>欢迎学习{{name}}</h2>
  <input type="text" placeholder="按下回车输入" @keyup="showView">
</div>

<script>
  
  new Vue({
    el:'#root',
    data:{
      name:'vue'
    },
    methods:{
      showView(e){
        if(e.keyCode !== 13) return
				console.log(e.target.value)
      }
    }
  })
</script>
```
回车显示出入的数据

