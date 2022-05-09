---
description: 过滤器
autoPrev: tabView
---

# 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：`双花括号插值` 和 `v-bind` 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由`“管道”`符号指示：

首先引入 `dayjs.min.js`，用它来格式化时间
```html
<div id="root">
    <h2>显示格式化后的时间</h2>
    <h3>现在是：{{time | timeFormater}}</h3>
</div>
```

```js
<script type="text/javascript">
    new Vue({
        el:'#root',
        data:{
            time:1621561377603 //时间戳
        },
        //局部过滤器
        filters:{
            timeFormater(value){
                return dayjs(value).format('YYYY年MM月DD日 HH:mm:ss')
            }
        }
    })
</script>
```
过滤器实际上就是一个函数，“{{time | timeFormater}}” 表示将`time` 作为参数传递给 `timeFormater`,返回值覆盖“{{}}”，timeFormater函数的参数可以有多个，但是第一个参数默认是 `管道符（|）` 前面的变量。

下面看一下多个参数的。
```html
<div id="root">
    <h2>显示格式化后的时间</h2>
    <h3>现在是：{{time | timeFormater('YYYY_MM_DD')}}</h3>
</div>
```

```js
<script type="text/javascript">
    new Vue({
        el:'#root',
        data:{
            time:1621561377603 //时间戳
        },
        //局部过滤器
        filters:{
            timeFormater(value,str){
                return dayjs(value).format(str)
            }
        }
    })
</script>
```

上面例子是局部过滤器，还可以创建全局过滤器。

```js
<script type="text/javascript">
    //全局过滤器
    Vue.filter('mySlice',function(value){
        let date =  dayjs(value).format('YYYY年MM月DD日 HH:mm:ss')
        return date.slice(0,4)
    })

    new Vue({
        el:'#root',
        data:{
            time:1621561377603 //时间戳
        }
    })
    
</script>
```

使用方式是一样的

```html
<div id="root">
    <h2>显示格式化后的时间</h2>
    <h3>现在是：{{time | mySlice(time)}}</h3>
</div>
```

过滤器还可以串联

```html
<div id="root">
    <h3>现在是：{{time | timeFormater('YYYY年MM月DD日 HH:mm:ss') | mySlice}}</h3>
</div>
```

```js
new Vue({
    el:'#root',
    data:{
        time:1621561377603
    }
    filters:{
        timeFormater(value,st){
            // console.log('@',value)
            return dayjs(value).format(str)
        },
        mySlice(value){
            return value.slice(0,4)
        }
    }
})
```

`time` 作为参数传递给 `timeFormater` 函数，`timeFormater` 函数的返回值，在作为参数传递给 `mySlice` 最后显示的是 `mySlice`函数的返回值。


