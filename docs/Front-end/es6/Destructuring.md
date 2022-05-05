---
title: 解构赋值
autoPrev: const
---
## 数组的解构赋值

### 基本用法

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

以前，为变量赋值，只能直接指定值。

```js
let a = 1;
let b = 2;
let c = 3;
```
ES6 允许写成下面这样。
```js
let [a,b,c] = [1,2,3]
```
上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

本质上，这种写法属于 `模式匹配`，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

```js
{
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo) // 1
    console.log(bar) // 2
    console.log(baz) // 3
}


{
    let [ , , third] = ["foo", "bar", "baz"];
    console.log(third) // "baz"
}

{
    let [x, , y] = [1, 2, 3];
    console.log(x) // 1
    console.log(y) // 3
}

{
    let [head, ...tail] = [1, 2, 3, 4];
    console.log(head) // 1
    console.log(tail) // [2, 3, 4]
}

{
    let [x, y, ...z] = ['a'];
    console.log(x) // "a"
    console.log(y) // undefined
    console.log(z) // []
}

```
如果解构不成功，变量的值就等于`undefined`。

另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
```js
{
  let [x, y] = [1, 2, 3];
  console.log(x) // 1
  console.log(y) // 2
}

{
  let [a, [b], d] = [1, [2, 3], 4];
  console.log(a) // 1
  console.log(b) // 2
  console.log(d) // 4
}
```

如果等号的右边不是数组（或者严格的说，不是可遍历的结构，那么将会报错）。

```js
// xx is not iterable
let [foo] = 1;
let [foo1] = false;
let [foo2] = NaN;
let [foo3] = undefined;
let [foo4] = null;
let [foo5] = {};
```

对于 Set 结构，也可以使用数组的解构赋值。

```js
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x) // "a"
console.log(y) // b
console.log(z) // c
```

### 默认值

解构赋值允许指定默认值。
```js
let [foo = true] = [];
console.log(foo) // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [m, q = 'b'] = ['a', undefined]; // m='a', q='b'
let [w, e = 'b'] = ['a', 'c']; // w='a', e='c'

let [r = 1] = [undefined];  // r=1
let [t = 1] = [null];       // t=null
```

**注意**

ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于 `undefined`，默认值才会生效。

向上面 `r` 对应的值是 `undefined` 所以默认值生效，而 `t` 对应的值是 `null` 默认值不生效，因为 `null` 不等于 `undefined`。

默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
```js
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
```

上面最后一个表达式之所以会报错，是因为 `x` 用 `y` 做默认值时，`y` 还没有声明。

## 对象的解构赋值
### 简介
结构不仅可以用于数组，还可以用于对象。
```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
condole.log(foo) // "aaa"
console.log(bar) // "bbb"
```
:::tip

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性名相同，才能取到正确的值。

如果解构失败，变量的值等于 `undefined`。
```js
let {foo} = {bar: 'baz'};
console.log(foo) // undefined
```

:::

如果变量名与属性名不一致，必须写成下面这样。

```js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz) // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f) // 'hello'
console.log(l) // 'world'
```
也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

上面代码中，`foo` 是匹配的模式，`baz` 才是变量。真正被赋值的是变量`baz`，而不是模式`foo`。

如果变量名和属性相同，可以简写为 `let {foot}`


### 默认值

对象的解构也可以指定默认值。
```js
{
    var {x = 3} = {};
    console.log(x) // 3
}

{
    var {x, y = 5} = {x: 1};
    console.log(x) // 1
    console.log(y) // 5
}

{
    var {x: y = 3} = {};
    console.log(y) // 3
}

{
    var {x: y = 3} = {x: 5};
    console.log(y) // 5
}

{
    var { message: msg = 'Something went wrong' } = {};
    console.log(msg) // "Something went wrong"
}
```

默认值生效的条件是，对象的属性值严格等于undefined。

```js
var {x = 3} = {x: undefined};
condole.log(x) // 3

var {y = 3} = {x: null};
console.log(y) // null
```
上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。

### 注意点
(1) 如果要将一个已经声明的变量用于解构赋值，必须非常小心。

```js
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error
```

上面代码的写法会报错，因为 JavaScript 引擎会将 `{x}` 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

```js
// 正确的写法
let x;
({x} = {x: 1});
```
上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。

(2) 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。
```js
({} = [true, false]);
({} = 'abc');
({} = []);
```
上面的表达式虽然毫无意义，但是语法是合法的，可以执行。

(3) 由于数组本质是特殊的对象，因此可以对数组进行 对象属性的解构
```js
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
console.log(first) // 1
console.log(last) // 3
```

## 字符串的解构赋值
字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的 对象。
```js
const [a, b, c, d, e] = 'hello';
console.log(a) // "h"
console.log(b) // "e"
console.log(c) // "l"
console.log(d) // "l"
console.log(e) // "o"
```
类似数组的对象都有一个 `length` 属性，因此还可以对这个属性解构赋值。

```js
let {length : len} = 'hello';
console.log(len) // 5
```

## 数值和布尔值的解构赋值 
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```js
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```
上面代码中，数值和布尔值的包装对象都有 `toString` 属性，因此变量 `s` 都能取到值。

解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于  `undefined` 和 `null` 无法转为对象，所以对它们进行解构赋值，都会报错。
```js
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

## 函数参数的解构赋值

函数的参数也可以使用解构赋值
```js
function add([x, y]){
    return x + y;
}

let arr = [1, 2];

console.log(add(arr)); // 3
```
上面代码中，函数 `add` 的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量 `x` 和 `y`。对于函数内部的代码来说，它们能感受到的参数就是 `x` 和 `y`。

函数参数的解构也可以使用默认值。
```js
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

console.log(move({x: 3, y: 8})); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```
上面代码中，函数 `move` 的参数是一个对象，通过对这个对象进行解构，得到变量 `x` 和 `y` 的值。调用 `mv` 函数传递的参数赋值给 `{}` 。如果解构失败，`x` 和 `y` 等于默认值。

注意，下面的写法会得到不一样的结果。

```js
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```
上面代码是为函数 `move` 的参数指定默认值，而不是为变量 `x` 和 `y` 指定默认值，所以会得到与前一种写法不同的结果。

## 圆括号问题
解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。

### 不能使用圆括号的情况
(1) 变量声明语句
```js
// 全部报错
let [(a)] = [1];

let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};

let { o: ({ p: p }) } = { o: { p: 2 } };
```
上面 6 个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。

(2) 函数参数
函数参数也属于变量声明，因此不能带有圆括号。
```js
// 报错
function f([(z)]) { return z; }
// 报错
function f([z,(x)]) { return x; }
```
(3) 赋值语句的模式
```js
// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
```
上面代码将整个模式放在圆括号之中，导致报错。

## 可以使用圆括号的情况
可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
```js
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
```
上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是 `p` ，而不是 `d` ；第三行语句与第一行语句的性质一致。

## 用途
变量的解构赋值用途很多。
(1) 交换变量的值
```js
let x = 1;
let y = 2;

console.log(x);  // 2
console.log(y);  // 1
```
上面代码交换变量 `x` 和 `y` 的值，这样的写法不仅简洁，而且易读，语义非常清晰。

(2) 从函数返回多个值

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或者对象里返回。有了解构赋值，取出这些值就非常方便。
```js
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();


// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

(3) 函数参数的定义

解构赋值可以方便地将一组参数与变量名对应起来。
```js
// 参数是一组有次序的值
function f([x, y, z]) { 
    console.log(x)  // 1
}
f([1, 2, 3]);


// 参数是一组无次序的值
function g({x, y, z}) { 
    console.log(y)  // 2
}
g({z: 3, y: 2, x: 1});
```

(4) 提取 JSON 数据

解构赋值对提取 JSON 对象中的数据，尤其有用。
```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```
(5) 函数参数的默认值

```js
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
```
指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

（6）遍历 Map 结构
任何部署了 Iterator 接口的对象，都可以用 `for...of` 循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
```js
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```
如果只想获取键名，或者只想获取键值，可以写成下面这样。

```js
// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```