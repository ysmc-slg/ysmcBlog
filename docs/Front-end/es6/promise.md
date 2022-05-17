---
description: Promise对象
autoPrev: Iterator
---

# Promise对象

## Promise 的含义
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点。
1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

## 基本用法
ES6规定，`Promise` 对象是一个构造函数，用来生成 `Promise` 实例。

下面代码创造了一个 `Promise` 实例。

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 `JavaScript` 引擎提供，不用自己部署。

`resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”（即从 `pending` 变为 `resolved`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；`reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”（即从 `pending` 变为 `rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

## Promise.prototype.then()

Promise 实例具有 `then` 方法，也就是说，`then` 方法是定义在原型对象 `Promise.prototype`上的。

它的作用是为 `Promise` 实例添加状态改变时的回调函数。前面说过，`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数，它们都是可选的。

`then`方法返回的是一个新的`Promise`实例（注意，不是原来那个`Promise`实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

```js
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
```
上面的代码使用 `then` 方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

采用链式的 `then`，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的是一个 `Promise` 对象（既有异步操作），这时后一个回调函数，就会等带该 `Promise` 对象的状态发生变化，才会被调用。

```js
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});
```

上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。

如果采用箭头函数，上面的代码可以写得更简洁。

```js
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);
```

## Promise.prototype.catch()

`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。
```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

上面代码中，`getJSON()`方法返回一个 `Promise` 对象，如果该对象状态变为`resolved`，则会调用`then()`方法指定的回调函数；如果异步操作抛出错误，状态就会变为`rejected`，就会调用`catch()`方法指定的回调函数，处理这个错误。另外，`then()`方法指定的回调函数，如果运行中抛出错误，也会被`catch()`方法捕获。

## Promise.prototype.finally()
`finally` 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
上面的代码，不管 `promise` 对象最后的状态，在执行完 `then` 或 `catch` 指定的回调函数以后，都会执行 `finally` 方法指定的回调函数。

`finally` 方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 `Promise` 状态到底是 `fulfilled` 还是 `rejected` 。这表明，`finally` 方法里面的操作，应该是与状态无关的，不依赖于 `Promise` 的执行结果。

## Promise.all()

`Promise.all()` 方法用于将多个 promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

上面代码中，`Promise.all()` 方法接收一个数组作为参数，`p1`、`p2`、`p3`都是 Promise 实例，如果不是，就会先调用下面讲到的`Promise.resolve`方法，将参数转为 `Promise` 实例，再进一步处理。另外，`Promise.all()`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。

`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

下面是一个具体的例子。

```js
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});
```
上面代码中，`promises`是包含 6 个 `Promise` 实例的数组，只有这 6 个实例的状态都变成`fulfilled`，或者其中有一个变为`rejected`，才会调用`Promise.all`方法后面的回调函数。

## Promise.resolve() 

有时需要将现有对象转为 Promise 对象，`Promise.resolve()`方法就起到这个作用。

```js
const jsPromise = Promise.resolve($.ajax('/whatever.json'));
```

上面代码将 Query 生成的 `deferred` 对象，转为一个新的 Promise 对象。

`Promise.resolve()` 等价于下面的写法。

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```
`Promise.resolve` 方法的参数分成四种情况。

1. 参数是一个 Promise 实例
   如果参数是一个 Promise 实例，那么 `Promise.resolve` 将不做任何修改、原封不动的返回这个实例。
2. 参数是一个 `thenable` 对象
   `thenable` 对象指的是具有 `then` 方法的对象，比如下面这个对象。
   ```js
   let thenable = {
      then: function(resolve, reject) {
        resolve(42);
      }
   };
   ```
   `Promise.resolve()`方法会将这个对象转为 `Promise` 对象，然后就立即执行`thenable`对象的`then()`方法。

   ```js
   let thenable = {
      then: function(resolve, reject) {
        resolve(42);
      }
    };

    let p1 = Promise.resolve(thenable);
    p1.then(function (value) {
      console.log(value);  // 42
   });
   ```
   上面代码中，`thenable`对象的`then()`方法执行后，对象`p1`的状态就变为`resolved`，从而立即执行最后那个`then()`方法指定的回调函数，输出42。
3. 参数不是具有then()方法的对象，或根本就不是对象
   如果参数是一个原始值，或者是一个不具有`then()`方法的对象，则`Promise.resolve()` 方法返回一个新的 `Promise` 对象，状态为`resolved`。

   ```js
   const p = Promise.resolve('Hello');
   p.then(function (s) {
     console.log(s)
   });
   // Hello
   ```
   上面代码生成一个新的 Promise 对象的实例`p`。由于字符串`Hello`不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是`resolved`，所以回调函数会立即执行。`Promise.resolve()`方法的参数，会同时传给回调函数。
4. 不带有任何参数
   `Promise.resolve()`方法允许调用时不带参数，直接返回一个`resolved`状态的 Promise 对象。

   所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用`Promise.resolve()`方法。
   ```js
   const p = Promise.resolve();

   p.then(function () {
      // ...
   });
   ```

  上面代码的变量`p`就是一个 Promise 对象。

  需要注意的是，立即`resolve()`的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。

  ```js
  setTimeout(function () {
  console.log('three');
  }, 0);

  Promise.resolve().then(function () {
    console.log('two');
  });

  console.log('one');

  // one
  // two
  // three
  ```

  上面代码中，`setTimeout(fn, 0)`在下一轮“事件循环”开始时执行，`Promise.resolve()`在本轮“事件循环”结束时执行，`console.log('one')`则是立即执行，因此最先输出。

4. Promise.reject()
   `Promise.reject(reason)`方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`。

   ```js
   const p = Promise.reject('出错了');
   // 等同于
   const p = new Promise((resolve, reject) => reject('出错了'))

   p.then(null, function (s) {
     console.log(s)
   });
    // 出错了
   ```

   上面代码生成一个 Promise 对象的实例`p`，状态为`rejected`，回调函数会立即执行。

   `Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数。

   ```js
   Promise.reject('出错了')
    .catch(e => {
      console.log(e === '出错了')
    })
   // true
   ```

   上面代码中，`Promise.reject()`方法的参数是一个字符串，后面`catch()`方法的参数`e`就是这个字符串。