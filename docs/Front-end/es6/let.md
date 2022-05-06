---
title: let 命令
---

## 基本用法
ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在`let命令所在的代码块内有效`。

```js
{
  let a = 10;
  var b = 1;
}

console.log(b) //Uncaught ReferenceError: a is not defined
console.log(a) // 1
```
上面代码块中，分别用 `let` 和 `var` 声明了两个变量。然后在外面调用这两个变量。从结果可以看到 `let` 声明的变量只在它所在的代码块有效。

## 不存在变量提升
`var` 命令会发生 变量提升 现象，即变量可以在声明之前使用，值为 `undefined`。

为了纠正这种现象，`let` 命令改变了语法行为，他所声明的变量一定要在声明后使用，否则报错

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // Cannot access 'bar' before initialization
let bar = 2;
```

## 不允许重复声明

`let` 不允许在相同的作用域内，重复声明同一个变量。

```js
// 报错
function func() {
  let a = 10;
  var a = 1;
}


// 报错
function func() {
  let a = 10;
  let a = 1;
}
```

因此，不能在函数内部重新声明参数。

```js
function func(arg) {
  let arg;
}
func() // 报错


function func(arg) {
  {
    let arg;
  }
}
func() // 不报错
```

## ES6 块级作用域

`let` 实际上为 JavaScript 新增了块级作用域。
```js
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
上面的函数有两个代码块，都声明了变量n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。

**ES6 允许块级作用域的任意嵌套**。

```js
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};
```
上面代码使用了一个五层的块级作用域，每一层都是一个单独的作用域。第四层作用域无法读取第五层作用域的内部变量。