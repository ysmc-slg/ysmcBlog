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

参数变量是默认声明的，所以不能用 `let` 或 `const` 再次声明。
```js
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
```
### 与解构赋值默认值结合使用
函数默认值可以与解构赋值的默认值，结合起来使用。
```js
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
```
上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成。如果函数foo调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。

```js
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5
```
### 函数的 length 属性
指定了默认值以后，函数的 `length` 属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length` 属性将失真。
```js
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
```
上面代码中，`length`属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了 3 个参数，其中有一个参数 `c` 指定了默认值，因此`length` 属性等于 `3` 减去 `1`，最后得到 `2`。

## rest 参数

ES6 引入 rest 参数（形式为 <font color='red'>`...变量名`</font>），用于获取函数的多余参数，这样就不需要使用 <font color='red'>`arguments` </font>对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
```js
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```
上面代码的<font color='red'>`add`</font>函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

下面是一个 rest 参数代替 `arguments` 变量的例子。
```js
// arguments变量的写法
function sortNumbers() {
  return Array.from(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```
`arguments` 对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用 `Array.from` 先将其转为数组。`rest` 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。下面是一个利用 `rest` 参数改写数组 `push` 方法的例子。

```js
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);  // 1 2 3
  });
}

var a = [];
push(a, 1, 2, 3)
```
**注意**：<font color = 'red'>rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。</font>

```js
// 报错
function f(a, ...b, c) {
  // ...
}
```
函数的 `length` 属性，不包括 rest 参数。
```js
(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1
```
## name 属性
函数的 `name` 属性，返回该函数的函数名。
```js
function foo() {}
foo.name // "foo"
```
这个属性早就被浏览器广泛支持，但是直到 ES6，才将其写入了标准。

需要注意的是，ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5 的 `name` 属性，会返回空字符串，而 ES6 的 `name` 属性会返回实际的函数名。
```js
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"
```
上面代码中，变量f等于一个匿名函数，ES5 和 ES6 的name属性返回的值不一样。

## 箭头函数
ES6 允许使用 '箭头'（ `=>` ）定义函数。
```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```
如果箭头函数 `不需要参数` 或需 `要多个参数` ，就使用一个 `圆括号` 代表参数部分。只有`一个参数`，圆括号可以省略
```js
var f = () => 5;
// 等同于
var f = function () { 
  return 5 
};

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

var y = x => x;
// 等同于
var f = function (x) { 
  return x 
};
```
如果箭头函数的代码块部分 `多于一条语句` ，就要使用大括号将它们括起来，并且使用 `return` 语句返回。
```js
var sum = (num1, num2) => { 
  let s = num1 + num2
  return s; 
}
```
如果箭头函数的代码块部分只有一条语句，大括号可以省略，此时`return` 必须也省略
```js
var sum = (num1, num2) =>  num1 + num2; 

console.log(sum(1,2))   //3
```

由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
```js
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```
箭头函数可以与变量解构结合使用。

```js
let person = {first:'a',last:'z'}
		
const full = ({ first, last }) => first + ' ' + last;
console.log(full(person))

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}
```

**使用注意点：**
::: tip 使用注意点

1. 箭头函数没有自己的 `this` 对象（详见下文）
2. 不可以当作构造函数，也就是说，不可以对箭头函数使用 `new` 命令，否则会抛出一个错误。
3. 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。
4. 不可以使用 `yield` 命令，因此箭头函数不能用作 Generator 函数 

:::

上面四点中，最重要的是第一点。对于普通函数来说，内部的 `this` 指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的 `this` 对象，<font color='red'>内部的 `this` 就是定义时上层作用域中的 `this` <font>。也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。

```js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```
上面代码中，`setTimeout()` 的参数是一个箭头函数，这个箭头函数的定义生效是在 `foo` 函数生成时，而它真正执行要等到 100 毫秒后。如果是普通函数，执行时 `this` 应该指向全局对象 `window`，这时应该输出 `21` 。但是，箭头函数导致 `this` 总是指向外层代码块的 `this`（本例是 `{id:42}`），所以打印出来的是 `42`。

下面例子是回调函数分别为箭头函数和普通函数，对比它们内部的 `this` 指向。

```js
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0
```
上面代码中，`Timer` 函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的 `this` 绑定定义时所在的作用域（即Timer函数），后者的 `this` 指向运行时所在的作用域（即全局对象）。所以，3100 毫秒之后，`timer.s1` 被更新了 3 次，而 `timer.s2` 一次都没更新。

总之，箭头函数根本没有自己的 `this`，导致内部的 `this` 就是外层代码块的 `this`。正是因为它没有 `this`，所以也就不能用作构造函数。

```js
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
```
上面代码中，转换后的 ES5 版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的 `this`。

除了`this`，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：`arguments`、`super`、`new.target`。
```js
function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
  }, 100);
}

foo(2, 4, 6, 8)
// args: [2, 4, 6, 8]
```
上面代码中，箭头函数内部的变量`arguments`，其实是函数`foo`的 `arguments` 变量。

另外，由于箭头函数没有自己的 `this`，所以当然也就不能用`call()`、`apply()`、`bind()` 这些方法去改变this的指向。