---
title: 请求参数传递
---
::: tip

本文引用至：http://itboyhub.com/2021/03/03/springmvc-flashmap/

:::

## 缘起
在一个电商项目中，有一个提交订单的请求，这个请求是一个 post 请求，请求参数都在请求体重。当用户提交成功后，为了防止用户刷新浏览器页面造成订单请求重复提交，我们一般会将用户重定向到一个显示订单的页面，这样即使用户刷新页面，也不会造成订单请求重复提交。

代码如下：
```java
@Controller
public class TestController {
    @PostMapping("/order")
    public String order(OrderInfo orderInfo) {
        //其他处理逻辑
        return "redirect:/orderlist";
    }
}
```

如果是服务器跳转，我们可以将参数放在 request 对象中，跳转完成后还能拿到参数，但是如果是客户端跳转，我们只能将参数放在地址栏中了，向上面这个方法的返回值我们可以写成：`return "redirect:/orderlist?xxx=xxx";`，这种传参方式有两个缺陷：

* 地址栏的长度是有限的，也就意味着能够放在地址栏中的参数是有限的。
* 不想将一些特殊的参数放在地址栏中。

那该怎么办？还有办法传递参数吗？

有！这就是今天松哥要和大家介绍的 flashMap，专门用来解决重定向时参数的传递问题。