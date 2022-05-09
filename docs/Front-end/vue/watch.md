---
description: watch(监听)
autoPrev: computed
---
# watch(监听)

## 监视属性
通过 watch 来响应数据的变化。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_监视属性</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
		</div>
	</body>

	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
			watch:{
				isHot:{
					immediate:true, 
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}
			}
		})
	</script>
</html>
```
当 `isHot` 发生改变了，会调用 `handler` 方法。会有两个参数，第一个是修改后的参数，第二个是修改前的参数。

immediate：true 的含义是，在初始化的时候就调用一次 `handler`

**注意：**

1. 当被监视的属性变化时, 回调函数自动调用, 进行相关操作。
2. 监视的属性必须存在，才能进行监控。

使用 vm.$watch 也能进行监听

```html
<!DOCTYPE html>
<html>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			}
		})
		// 写在 vue 实例外面
		vm.$watch('isHot',{
			immediate:true,
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		})
	</script>
</html>
```

## 深度监视
Vue中的 `watch` 默认不检测对象内部值的改变，如下：

```html
<!DOCTYPE html>
<html>
	<body>
		<div id="root">
			<h3>a的值是:{{numbers.a}}</h3>
      <button @click="numbers.a++">点我让a+1</button>
		</div>
	</body>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
				numbers:{
					a:1,
					b:1,
					c:{
						d:{
							e:100
						}
					}
				}
			},
			watch:{
				 //监视多级结构中某个属性的变化
				 numbers:{
				 	handler(){
				 		console.log('a被改变了')
				 	}
				 }
			}
		})

	</script>
</html>
```

点击按钮，只会让 a 的值 +1，并不会触发`handler`。

此时如果想要，在点击按钮时触发 `handler` 就要使用到，深度监视

```html
<!DOCTYPE html>
<html>
	<body>
		<div id="root">
			<h3>a的值是:{{numbers.a}}</h3>
      <button @click="numbers.a++">点我让a+1</button>
		</div>
	</body>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
				numbers:{
					a:1,
					b:1,
					c:{
						d:{
							e:100
						}
					}
				}
			},
			watch:{
				 //监视多级结构中某个属性的变化
				  numbers:{
				 	deep:true,
				 	handler(){
				 		console.log('numbers改变了')
				 	}
				 }
			}
		})
	</script>
</html>
```
只需要添加 `deep` 配置项即可，此时再点击按钮就能调用 `handler`。

## 简写方式
如果监视的属性，不需要 `immediate` 和 `deep` 等配置项的话，可以简写为：

```js
watch:{
  isHot(newValue,oldValue){
    console.log('isHot被修改了',newValue,oldValue,this)
  } 
}
```

`vm.$watch` 方式也可以简写为
```js
vm.$watch('isHot',(newValue,oldValue)=>{
  console.log('isHot被修改了',newValue,oldValue,this)
}) 
```

