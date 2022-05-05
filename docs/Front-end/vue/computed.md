---
title: computed(计算属性)
autoPrev: interpolation
---
计算属性就是当其依赖属性值发生变化时，这个属性的值会自动更新，与之相关的DOM部分也会同步更新。

通过下面案例来了解一下计算属性的使用。

## 标准方式
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_计算属性实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			},
			methods: {
				demo(){
					
				}
			},
			computed:{
				fullName:{
					get(){
						console.log('get被调用了')
						return this.firstName + '-' + this.lastName
					},
					set(value){
						console.log('set',value)
						const arr = value.split('-')
						this.firstName = arr[0]
						this.lastName = arr[1]
					}
				}
			}
		})
	</script>
</html>
```
有人读取fullName时，get就会被调用，且返回值就作为fullName的值。

get什么时候调用？
1. 初次读取fullName时。
2. 所依赖的数据发生变化时。

什么时候调用 `set` 方法呢？

当fullName的值改变时会调用 `set` 方法。在浏览器`Console` 中修改 fullName值，vm.fullName = '李-四'。

## 简写方式

如果只是获取 `fullName` 的返回值，不需要修改，可以使用简写方式：
```html
<script type="text/javascript">
  const vm = new Vue({
    el:'#root',
    data:{
      firstName:'张',
      lastName:'三'
    },
    methods: {
      demo(){
        
      }
    },
    computed:{
      fullName(){
        console.log('get被调用了')
        return this.firstName + '-' + this.lastName
      }
    }
  })
</script>
```

