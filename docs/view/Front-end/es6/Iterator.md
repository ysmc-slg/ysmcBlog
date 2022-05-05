---
title: Iterator和for...of循环
autoPrev: setMap
---

## Iterator（遍历器）的概念

JavaScript 原有的表示“集合”的数据结构，主要是数组（`Array`）和对象（`Object`），ES6 又添加了 `Map` 和 `Set`。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是 `Map` ，`Map` 的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令 `for...of` 循环，Iterator 接口主要供 `for...of` 消费。

Iterator 的遍历过程是这样的：
1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
2. 第一次调用指针对象的 `next` 方法，可以将指针指向数据结构的第一个成员。
3. 第二次调用指针对象的 `next` 方法，指针就指向数据结构的第二个成员。
4. 不断调用指针对象的 `next` 方法，直到它指向数据结构的结束位置。

每一次调用 `next` 方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含 `value` 和 `done` 两个属性的对象。其中，`value` 属性是当前成员的值，`done` 属性是一个布尔值，表示遍历是否结束。

下面是一个模拟 `next` 方法返回值的例子。

```js
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}
```

上面代码定义了一个 `makeIterator` 函数，它是一个遍历器生成函数，作用就是返回一个遍历器对象。对数组 `['a', 'b']` 执行这个函数，就会返回该数组的遍历器对象（即指针对象）`it`。

指针对象的 `next` 方法，用来移动指针。开始时，指针指向数组的开始位置。然后，每次调用 `next` 方法，指针就会指向数组的下一个成员。第一次调用，指向 `a`；第二次调用，指向`b` 。

`next` 方法返回一个对象，表示当前数据成员的信息。这个对象具有 `value` 和 `done` 两个属性，`value` 属性返回当前位置的成员，`done` 属性是一个布尔值，表示遍历是否结束，即是否还有必要再一次调用 `next` 方法。

总之，调用指针对象的 `next` 方法，就可以遍历事先给定的数据结构。

对于遍历器对象来说，`done: false` 和 `value: undefined` 属性都是可以省略的，因此上面的makeIterator函数可以简写成下面的形式。
```js
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++]} :
        {done: true};
    }
  };
}
```

## 默认 Iterator 接口
Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即`for...of` 循环。当使用 `for...of` 循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。

ES6 规定，默认的 Iterator 接口部署在数据结构的 `Symbol.iterator` 属性，或者说，一个数据结构只要具有 `Symbol.iterator` 属性，就可以认为是“可遍历的”（iterable）。`Symbol.iterator` 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名 `Symbol.iterator`，它是一个表达式，返回 `Symbol` 对象的 `iterator` 属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内。
```js
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
```
上面代码中，对象 `obj` 是可遍历的（iterable），因为具有 `Symbol.iterator` 属性。执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有 `next` 方法。每次调用 `next` 方法，都会返回一个代表当前成员的信息对象，具有 `value` 和 `done` 两个属性。

ES6 的有些数据结构原生具备 Iterator 接口（比如数组），即不用任何处理，就可以被`for...of` 循环遍历。原因在于，这些数据结构原生部署了 `Symbol.iterator` 属性，另外一些数据结构没有（比如对象）。凡是部署了 `Symbol.iterator` 属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。

原生具备 Iterator 接口的数据结构如下。

* Array
* Map
* Set
* String
* TypedArray
* 函数的 arguments 对象
* NodeList 对象

下面的例子是数组的 `Symbol.iterator` 属性。
```js
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
```
上面代码中，变量 `arr` 是一个数组，原生就具有遍历器接口，部署在 `arr` 的 `Symbol.iterator` 属性上面。所以，调用这个属性，就得到遍历器对象。

对于原生部署 Iterator 接口的数据结构，不用自己写遍历器生成函数，`for...of` 循环会自动遍历它们。除此之外，其他数据结构（主要是对象）的 Iterator 接口，都需要自己在 `Symbol.iterator` 属性上面部署，这样才会被 `for...of` 循环遍历。

对象（Object）之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。不过，严格地说，对象部署遍历器接口并不是很必要，因为这时对象实际上被当作 Map 结构使用，ES5 没有 Map 结构，而 ES6 原生提供了。

一个对象如果要具备可被 `for...of` 循环调用的 Iterator 接口，就必须在 `Symbol.iterator` 的属性上部署遍历器生成方法。

```js
class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    }
    return {done: true, value: undefined};
  }
}



function range(start, stop) {
  return new RangeIterator(start, stop);
}


// 遍历
for (var value of range(0, 3)) {
  console.log(value); // 0, 1, 2
}
```

上面代码是一个类部署 Iterator 接口的写法。`Symbol.iterator` 属性对应一个函数，执行后返回当前对象的遍历器对象。

下面是另一个为对象添加 Iterator 接口的例子。
```js
let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
```

## 调用 Iterator 接口的场合
有一些场合会默认调用 Iterator 接口（即 `Symbol.iterator` 方法），除了下文会介绍的 `for...of` 循环，还有几个别的场合。

（1）解构赋值
对数组和 Set 结构进行解构赋值时，会默认调用 `Symbol.iterator` 方法。
```js
let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
// x='a'; y='b'

let [first, ...rest] = set;
// first='a'; rest=['b','c'];
```
（2）扩展运算符
扩展运算符（`...`）也会调用默认的 Iterator 接口。
```js
// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']
```

上面代码的扩展运算符内部就调用 Iterator 接口。

实际上，这提供了一种简便机制，可以将任何部署了 Iterator 接口的数据结构，转为数组。也就是说，<font color = 'red'>只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组</font>。

```js
let arr = [...iterable];
```
## 字符串的 Iterator 接口
字符串是一个类似数组的对象，也原生具有 Iterator 接口。

```js
var someString = "hi";
typeof someString[Symbol.iterator]
// "function"

var iterator = someString[Symbol.iterator]();

iterator.next()  // { value: "h", done: false }
iterator.next()  // { value: "i", done: false }
iterator.next()  // { value: undefined, done: true }
```
上面代码中，调用 `Symbol.iterator` 方法返回一个遍历器对象，在这个遍历器上可以调用 `next` 方法，实现对于字符串的遍历。

## for...of 循环
ES6 借鉴 C++、Java、C# 和 Python 语言，引入了 `for...of` 循环，作为遍历所有数据结构的统一的方法。

一个数据结构只要部署了 `Symbol.iterator` 属性，就被视为具有 iterator 接口，就可以用 `for...of` 循环遍历它的成员。也就是说，`for...of` 循环内部调用的是数据结构的 `Symbol.iterator` 方法。

`for...of` 循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如 `arguments` 对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。

### 数组
数组原生具备 `iterator` 接口（即默认部署了`Symbol.iterator`属性）， `for...of` 循环本质上就是调用这个接口产生的遍历器，可以用下面的代码证明。
```js
const arr = ['red', 'green', 'blue'];

for(let v of arr) {
  console.log(v); // red green blue
}


const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj) {
  console.log(v); // red green blue
}
```
上面代码中，空对象 `obj` 部署了数组 `arr` 的 `Symbol.iterator` 属性，结果`obj` 的 `for...of` 循环，产生了与 `arr` 完全一样的结果。

`for...of` 循环可以代替数组实例的 `forEach` 方法。
```js
const arr = ['red', 'green', 'blue'];

arr.forEach(function (element, index) {
  console.log(element); // red green blue
  console.log(index);   // 0 1 2
});
```
JavaScript 原有的 `for...in` 循环，只能获得对象的键名，不能直接获取键值。ES6 提供 `for...of` 循环，允许遍历获得键值。

```js
var arr = ['a', 'b', 'c', 'd'];

for (let a in arr) {
  console.log(a); // 0 1 2 3
}

for (let a of arr) {
  console.log(a); // a b c d
}
```
上面代码表明，`for...in` 循环读取键名，`for...of` 循环读取键值。如果要通过`for...of` 循环，获取数组的索引，可以借助数组实例的 `entries` 方法和 `keys` 方法。

`for...of` 循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟 `for...in` 循环也不一样。

```js
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); //  "3", "5", "7"
}
```
上面代码中，`for...of` 循环不会返回数组 `arr` 的 `foo` 属性。

### Set 和 Map 结构

Set 和 Map 结构也原生具有 Iterator 接口，可以直接使用`for...of` 循环。
```js
var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
  console.log(e);
}
// Gecko
// Trident
// Webkit

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262
```

### 对象
对于普通的对象，`for...of` 结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，`for...in` 循环依然可以用来遍历键名。
```js
let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (let e in es6) {
  console.log(e);
}
// edition
// committee
// standard

for (let e of es6) {
  console.log(e);
}
// TypeError: es6[Symbol.iterator] is not a function
```
上面代码表示，对于普通的对象，`for...in` 循环可以遍历键名，`for...of` 循环会报错。

一种解决方法是，使用 `Object.keys` 方法将对象的键名生成一个数组，然后遍历这个数组。

```js
let someObject = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (var key of Object.keys(someObject)) {
  console.log(key + ': ' + someObject[key]);
}
```

### 与其他遍历语法的比较
以数组为例，JavaScript 提供多种遍历语法。最原始的写法就是 `for` 循环。
```js
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
```

这种写法比较麻烦，因此数组提供内置的 `forEach` 方法。
```js
myArray.forEach(function (value) {
  console.log(value);
});
```

这种写法的问题在于，无法中途跳出 `forEach` 循环，`break` 命令或 `return` 命令都不能奏效。

`for...in` 循环可以遍历数组的键名。
```js
for (var index in myArray) {
  console.log(myArray[index]);
}
```
for...in循环有几个缺点。

* 数组的键名是数字，但是 `for...in` 循环是以字符串作为键名“0”、“1”、“2”等等。
* `for...in` 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
* 某些情况下，`for...in` 循环会以任意顺序遍历键名。

总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

`for...of` 循环相比上面几种做法，有一些显著的优点。

```js
for (let value of myArray) {
  console.log(value);
}
```
* 有着同 `for...in` 一样的简洁语法，但是没有 `for...in` 那些缺点。
* 不同于 `forEach` 方法，它可以与 `break`、`continue` 和 `return` 配合使用。
* 提供了遍历所有数据结构的统一操作接口。

下面是一个使用 break 语句，跳出 `for...of` 循环的例子。
```js
for (var n of fibonacci) {
  if (n > 1000)
    break;
  console.log(n);
}
```

上面的例子，会输出斐波纳契数列小于等于 1000 的项。如果当前项大于 1000，就会使用break语句跳出for...of循环。