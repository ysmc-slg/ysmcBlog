---
description: Symbo;
autoPrev: function
---

# Symbo

## 概述
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 `Symbol` 的原因。

ES6 引入了一种新的原始数据类型 `Symbol` ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是： `undefined` 、 `null` 、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

Symbol 值通过 `Symbol` 函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
```js
let s = Symbol();

typeof s
// "symbol"
```
上面代码中，变量 `s` 就是一个独一无二的值。`typeof` 运算符的结果，表明变量 `s` 是Symbol 数据类型，而不是字符串之类的其他类型。

注意，`Symbol` 函数前不能使用 `new` 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

`Symbol` 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');

console.log(s1) // Symbol(foo)
console.log(s2) // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```
上面代码中，`s1` 和 `s2` 是两个 Symbol 值。如果不加参数，它们在控制台的输出都是`Symbol()`，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值.

如果 Symbol 的参数是一个对象，就会调用该对象的 `toString` 方法，将其转为字符串，然后才生成一个 Symbol 值。
```js
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)
```

注意，`Symbol` 函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```
上面代码中，s1和s2都是Symbol函数的返回值，而且参数相同，但是它们是不相等的。

:::tip 注意

Symbol 值不能与其他类型的值进行运算，会报错。
```js
let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string
```
但是，Symbol 值可以显式转为字符串。

```js
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

另外，Symbol 值也可以转为布尔值，但是不能转为数值。

```js
let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError
```

:::

## Symbol.prototype.description
创建 Symbol 的时候，可以添加一个描述。
```js
const sym = Symbol('foo');
```
上面代码中，`sym` 的描述就是字符串 `foo`。

但是，读取这个描述需要将 Symbol 显式转为字符串，即下面的写法。
```js
const sym = Symbol('foo');

String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"
```
上面的用法不是很方便。ES2019 提供了一个实例属性 `description`，直接返回 Symbol 的描述。
```js
const sym = Symbol('foo');

sym.description // "foo"
```

## 作为属性名的 Symbol
由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
上面代码通过方括号结构和 `Object.defineProperty`，将对象的属性名指定为一个 Symbol 值。

注意，Symbol 值作为对象属性名时，不能用点运算符。
```js
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```
上面代码中，因为点运算符后面总是字符串，所以不会读取 `mySymbol` 作为标识名所指代的那个值，导致 `a` 的属性名实际上是一个字符串，而不是一个 Symbol 值。

同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
```js
let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};

obj[s](123);
```
上面代码中，如果 `s` 不放在方括号中，该属性的键名就是字符串 `s` ，而不是s所代表的那个 Symbol 值。

## 属性名的遍历
`Symbol` 作为属性名，遍历对象的时候，该属性不会出现在 `for...in` 、`for...of` 循环中，也不会被 `Object.keys()` 、`Object.getOwnPropertyNames()` 、`JSON.stringify()` 返回。

但是，它也不是私有属性，有一个 `Object.getOwnPropertySymbols()` 方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

```js
let a = Symbol('a');
let b = Symbol('b');

const obj = {
  [a] : 'Hello',
  [b] : 'World'
}

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols)
// [Symbol(a), Symbol(b)]
```
上面代码是 `Object.getOwnPropertySymbols()` 方法的示例，可以获取所有 Symbol 属性名。

下面是另一个例子，`Object.getOwnPropertySymbols()` 方法与 `for...in` 循环、`Object.getOwnPropertyNames` 方法进行对比的例子。
```js
const obj = {};
const foo = Symbol('foo');

obj[foo] = 'bar';

for (let i in obj) {
  console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [Symbol(foo)]
```
上面代码中，使用 `for...in` 循环和 `Object.getOwnPropertyNames()` 方法都得不到 Symbol 键名，需要使用 `Object.getOwnPropertySymbols()` 方法。

另一个新的 API，`Reflect.ownKeys()` 方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
```js
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```

