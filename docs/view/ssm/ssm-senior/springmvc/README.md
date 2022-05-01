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

## flashMap
在重定向时，如果需要传递参数，但是又不想放在地址栏中，我们就可以通过 flashMap 来传递参数。

首先我们定义一个简单的页面，里边就一个 post 请求提交按钮，如下：
```xml
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/order" method="post">
    <input type="submit" value="提交">
</form>
</body>
</html>
```
然后在服务端接收该请求，并完成重定向：
```java
@Controller
public class OrderController {
    @PostMapping("/order")
    public String order(HttpServletRequest req) {
        FlashMap flashMap = (FlashMap) req.getAttribute(DispatcherServlet.OUTPUT_FLASH_MAP_ATTRIBUTE);
        flashMap.put("name", "这是一个订单");
        return "redirect:/orderlist";
    }

    @GetMapping("/orderlist")
    @ResponseBody
    public String orderList(Model model) {
        System.out.println(model.getAttribute("name"));
        return (String) model.getAttribute("name");
    }
}
```

首先在 order 接口中，获取到 flashMap 属性，然后存入需要传递的参数，这些参数最终会被 SpringMVC 自动放入重定向接口的 Model 中，这样我们在 orderlist 接口中，就可以获取到该属性了。

当然，这是一个比较粗糙的写法，我们还可以通过 RedirectAttributes 来简化这一步骤：
```java
@Controller
public class OrderController {
    @PostMapping("/order")
    public String order(RedirectAttributes attr) {
        attr.addFlashAttribute("id", "123");
        attr.addAttribute("name", "这是一个订单");
        return "redirect:/orderlist";
    }

    @GetMapping("/orderlist")
    @ResponseBody
    public String orderList(Model model) {
        return (String) model.getAttribute("site");
    }
}
```
`RedirectAttributes` 中有两种添加参数的方式：
* addFlashAttribute：将参数放到 `flashMap` 中。
* addAttribute：将参数放到 URL 地址中。

经过前面的讲解，现在小伙伴们应该大致明白了 flashMap 的作用了，就是在你进行重定向的时候，不通过地址栏传递参数。