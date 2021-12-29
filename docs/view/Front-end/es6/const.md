---
title: const 命令
autoPrev: let
---
## 基本用法
`const` 声明一个只读的常量。一旦声明，常量的值就不能改变。
```js
const PI = 3.1415;

PI = 3; //Assignment to constant variable.
```
上面代码表明改变常量的值会报错。

`const` 声明的变量不得改变值，这意味着，`const` 一旦声明变量，就必须立即初始化，不能留到以后赋值。

`const` 只声明不赋值，就会报错。

const的作用域与let命令相同：只在声明所在的块级作用域内有效。
```js
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
```

## ES6 声明变量的六种方法

1. let
2. const
3. var
4. function
5. import
6. class