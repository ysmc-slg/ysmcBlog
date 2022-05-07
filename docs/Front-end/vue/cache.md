---
description: 浏览器缓存
autoPrev: plugin
---
# 浏览器缓存

这篇文章我们来了解一下浏览器的缓存，主要是 `localStorage` 和 `sessionStorage`。

## localStorage

::: tip 特点

* 保存的数据长期存在（知道清除浏览器的缓存），下一次访问该网站的时候，网页可以直接读取以前保存的数据。
* 大小为 5M 左右
* 尽在客户端使用，不和服务端进行通信
* 接口封装较好

:::

具体的读写操作：

```js
localStorage.setItem(key,value)  //保存数据
localStorage.getItem(key)        //获取数据
localStorage.removeItem(key)     //删除数据
localStorage.clear();            //删除全部数据
```

## sessionStorage

sessionStorage保存的数据用于浏览器的一次会话，当会话结束（通常是该窗口关闭），数据被清空；sessionStorage 特别的一点在于，即便是相同域名下的两个页面，只要它们不在同一个浏览器窗口中打开，那么它们的 sessionStorage 内容便无法共享；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。除了保存期限的长短不同，SessionStorage的属性和方法与LocalStorage完全一样

读写操作：

```js
sessionStorage.setItem(key,value)  //保存数据
sessionStorage.getItem(key)        //获取数据
sessionStorage.removeItem(key)     //删除数据
sessionStorage.clear();            //删除全部数据
```

