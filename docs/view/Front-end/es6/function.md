---
title: 函数的扩展
autoPrev: string
---
## 函数默认值
ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
```js
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World
```
上面代码检查函数 `log` 的参数 `y` 有没有赋值，如果没有，则指定默认值为    `World`。这种写法的缺点在于，如果参数 `y` 赋值了，但是对应的布尔值为 `false`，则该赋值不起作用。就像上面代码的最后一行，参数 `y` 等于空字符，结果被改为默认值。

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

```js
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```
可以看到，ES6 的写法比 ES5 简洁许多，而且非常自然。下面是另一个例子。
```js
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const p = new Point();
p // { x: 0, y: 0 }
```
除了简洁，ES6 的写法还有两个好处：首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。