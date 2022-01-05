---
title: Set 和 Map 数据结构
autoPrev: symbol
---
## Set
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构。
```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
上面代码通过 `add()` 方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

`Set` 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
```js
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56

// 类似于
const set = new Set();
document
 .querySelectorAll('div')
 .forEach(div => set.add(div));
set.size // 56
```
上面代码中，例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。

上面代码也展示了一种去除数组重复成员的方法。
```js
// 去除数组的重复成员
[...new Set(array)]
```
上面的方法也可以用于，去除字符串里面的重复字符。
```js
[...new Set('ababbc')].join('')
// "abc"
```
向 Set 加入值的时候，不会发生类型转换，所以 `5` 和 `"5"` 是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（`===`），主要的区别是向 Set 加入值时认为 `NaN` 等于自身，而精确相等运算符认为``NaN` 不等于自身。
```js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
console.log(set) // Set {NaN}
```
上面代码向 Set 实例添加了两次 `NaN`，但是只会加入一个。这表明，在 Set 内部，两个 `NaN` 是相等的。

另外，两个对象总是不相等的。
```js
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```
上面代码表示，由于两个空对象不相等，所以它们被视为两个值。

### Set实例的属性和方法
set 结构的实例有以下属性。
* `Set.prototype.constructor`：构造函数，默认就是`Se`t函数。
* `Set.prototype.size`：返回Set实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

* Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
* Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
* Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
* Set.prototype.clear()：清除所有成员，没有返回值。

```js
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```
下面是一个对比，看看在判断是否包括一个键上面，`Object`结构和`Set`结构的写法不同。

```js
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
  // do something
}
```
`Array.from` 方法可以将 Set 结构转为数组。
```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```
## 遍历操作
Set 结构的实例有四个遍历方法，可以用于遍历成员。
* `Set.prototype.keys()`：返回键名的遍历器
* `Set.prototype.values()`：返回键值的遍历器
* `Set.prototype.entries()`：返回键值对的遍历器
* `Set.prototype.forEach()`：使用回调函数遍历每个成员

需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

（1）`keys()`，`values()`，`entries()`

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys` 方法和 `values` 方法的行为完全一致。
```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```
上面代码中，`entries` 方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`values`方法。

这意味着，可以省略 `values` 方法，直接用 `for...of` 循环遍历 Set。
```js
let set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}
// red
// green
// blue
```
（2）`forEach()`

Set 结构的实例与数组一样，也拥有 `forEach` 方法，用于对每个成员执行某种操作，没有返回值。
```js
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```
上面代码说明，`forEach` 方法的参数就是一个处理函数。该函数的参数与数组的`forEach` 一致，依次为键值、键名、集合本身（上例省略了该参数）。这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。

另外，`forEach` 方法还可以有第二个参数，表示绑定处理函数内部的`this`对象。

## Map
### 含义和用法
JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
```js
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"
```
上面代码原意是将一个 DOM 节点作为对象 `data` 的键，但是由于对象只接受字符串作为键名，所以 `element` 被自动转为字符串 `[object HTMLDivElement]`。

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```
上面代码使用 Map 结构的 `set` 方法，将对象o当作m的一个键，然后又使用get方法读取这个键，接着使用 `delete` 方法删除了这个键。

上面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
```js
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```
上面代码在新建 Map 实例时，就指定了两个键 `name` 和 `title`。

### 实例的属性和操作方法
Map 结构的实例有以下属性和操作方法。

（1）size 属性

`size` 属性返回 Map 结构的成员总数
```js
const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
```
（2）Map.prototype.set(key, value)

`set` 方法设置键名 `key` 对应的键值为value，然后返回整个 Map 结构。如果 `key` 已经有值，则键值会被更新，否则就新生成该键。

```js
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined
```
（3）Map.prototype.get(key)

`get` 方法读取 `key` 对应的键值，如果找不到 `key`，返回 `undefined`。
```js
const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello)  // Hello ES6!
```
（4）Map.prototype.has(key)

`has` 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
```js
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
```

（5）Map.prototype.delete(key)

`delete` 方法删除某个键，返回 `true`。如果删除失败，返回 `false`。
```js
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
```

（6）Map.prototype.clear()

`clear` 方法清除所有成员，没有返回值。

```js
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0
```

### 遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

* `Map.prototype.keys()` ：返回键名的遍历器。
* `Map.prototype.values()` ：返回键值的遍历器。
* `Map.prototype.entries()` ：返回所有成员的遍历器。
* `Map.prototype.forEach()`：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。

```js
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```
Map 结构转为数组结构，比较快速的方法是使用扩展运算符 `（...）`。

```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```
结合数组的 `map` 方法、`filter` 方法，可以实现 Map 的遍历和过滤（Map 本身没有 `map` 和 `filter` 方法）。
```js
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
```

此外，Map 还有一个 `forEach` 方法，与数组的 `forEach` 方法类似，也可以实现遍历。

```js
map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
```

### 与其他数据结构的互相转换
1. Map 转为数组
前面已经提过，Map 转为数组最方便的方法，就是使用扩展运算符（`...`）。

```js
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);

[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```
2. 数组 转为 Map
将数组传入 Map 构造函数，就可以转为 Map。
```js
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
```

3. Map 转为对象

如果所有 Map 的键都是字符串，它可以无损地转为对象。

```js
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```

4. 对象转为 Map
对象转为 Map 可以通过 `Object.entries()`。

```js
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));
```

5. Map 转为 JSON
Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
```js
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'
```

另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。

```js
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'
```
6. JSON 转为 Map

JSON 转为 Map，正常情况下，所有键名都是字符串。

```js
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}
```

但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

```js
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}
```