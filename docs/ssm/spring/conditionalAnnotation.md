---
description: 条件注解
autoPrev: authConfigure
---

# 条件注解

## 条件注解
条件注解就是在满足某一个条件的情况下，生效的配置。

我们来看一下怎样使用套件注解。

我现在希望当系统运行在`Windows` 上时，自动打印出 `Windows` 上的目录展示命令（dir），`Linux` 运行时，则自动展示 `Linux` 上的目录展示命令（ls）。

首先定义一个显示文件夹目录的接口。

```java
public interface ShowCmd {
  String showCmd();
}
```
然后，分别实现 `Windows` 下的实例和 `Linux` 下的实例：

```java
publi class WinShowCmd implements ShowCmd {
  @Override
  public String showCmd() {
    return "dir";
  }
}
```

```java
publi class LinuxShowCmd implements ShowCmd {
  @Override
  public String showCmd() {
    return "ls";
  }
}
```

接下来，定义连个条件，一个是 `Windows` 下的条件，一个是 `Linux` 下的条件。

```java
public class WindosCondition implements Condition {
    public boolean matches(ConditionContext conditionContext, AnnotatedTypeMetadata annotatedTypeMetadata) {
        
        return conditionContext.getEnvironment().getProperty("os.name").toLowerCase().contains("windows");
    }
}
```
```java
public class LinuxCondition implements Condition {
    public boolean matches(ConditionContext conditionContext, AnnotatedTypeMetadata annotatedTypeMetadata) {
        return conditionContext.getEnvironment().getProperty("os.name").toLowerCase().contains("linux");
    }
}
```
有两个参数，`conditionContext`是本地环境信息，`annotatedTypeMetadata`是spring中的信息。

注意 `Condition` 要导入 spring 中的。

接下来，在定义 `Bean` 的时候，就可以配置条件注解了。
```java
@Configuration
public class JavaConfig {
  @Bean("showCmd)
  @Conditional(WindosCondition.class)
  ShowCmd winCmd() {
    return new WinShowCmd();
  }

  @Bean("showCmd)
  @Conditional(LinuxCondition.class)
  ShowCmd winCmd() {
    return new LinuxShowCmd();
  }

}
```
`@Conditional` 它的作用是按照一定的条件进行判断，满足条件给容器注册bean。

同时，一定要给两个 `Bean` 取相同的名字，这样在调用时，才可以自动匹配。然后，给每一个 `Bean` 加上条件注解（`@Conditional`） 当条件中的 `matches` 方法返回 `true` 的时候，这个 `Bean` 的定义就会生效。

```java
public class JavaMain {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(JavaConfig.class);

        ShowCmd showCmd = (ShowCmd) context.getBean("showCmd);

        System.out.println(showCmd.showCmd());
    }

}
```

条件注解有一个非常典型的使用场景，就是多环境切换。

## 多环境切换
开发中，如何在 `开发/生产/测试` 环境之间进行快速切换？spring 中提供了 `profile` 来解决这个问题，`profile` 的底层就是条件注解。这个从 `@profile` 注解的定义就可以看出来：

```java
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Conditional(ProfileCondition.class)
public @interface Profile {

	/**
	 * The set of profiles for which the annotated component should be registered.
	 */
	String[] value();

}
```

```java
class ProfileCondition implements Condition {

	@Override
	public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
		MultiValueMap<String, Object> attrs = metadata.getAllAnnotationAttributes(Profile.class.getName());
		if (attrs != null) {
			for (Object value : attrs.get("value")) {
				if (context.getEnvironment().acceptsProfiles(Profiles.of((String[]) value))) {
					return true;
				}
			}
			return false;
		}
		return true;
	}

}

```
我们定义一个 DataSource
```java
public class DataSource {
    private String url;
    private String username;
    private String password;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "DataSource{" +
                "url='" + url + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

```

然后，在配置 `Bean` 时，通过 `@Profile` 注解指定不同的环境：
```java
@Configuration
public class JavaConfig {

    @Bean("ds")
    @Profile("dev")
    DataSource devDataSource() {
        DataSource dataSource = new DataSource();
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/dev");
        dataSource.setUsername("root");
        dataSource.setPassword("111");
        return dataSource;
    }


    @Bean("ds")
    @Profile("prod")
    DataSource prodDataSource() {
        DataSource dataSource = new DataSource();
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/prod");
        dataSource.setUsername("root");
        dataSource.setPassword("333");
        return dataSource;
    }
}
```

最后，在加载配置类，注意，<div style="color:red">需要先设置当前环境，然后再去加载配置类</div>

```java
public class JavaMain {
  public static void main(String[] args) {
      AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
      ctx.getEnvironment().setActiveProfiles("dev");
      ctx.register(JavaConfig.class);
      ctx.refresh();

      DataSource ds = (DataSource)ctx.getBean("ds");
      System.out.println(ds);
  }
}
```

此时，拿到的就是 `dev` 环境的数据源。

环境的切换除了上面使用注解，也可以在 `XML` 文件中配置。如下配置在 `XML` 文件中，必须放在其他节点后面。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <beans profile="dev">
        <bean class="top.zxqs.DataSource" id="dataSource">
            <property name="url" value="jdbc:mysql://127.0.0.1:3306/dev"/>
            <property name="password" value="111"/>
            <property name="username" value="root"/>
        </bean>
    </beans>

    <beans profile="prod">
        <bean class="top.zxqs.DataSource" id="dataSource">
            <property name="url" value="jdbc:mysql://111.0.0.1:3306/prod"/>
            <property name="password" value="dsfdasfdas"/>
            <property name="username" value="root"/>
        </bean>
    </beans>
</beans>
```

启动类中设置当前环境并加载配置：

```java
public class JavaMain {
  public static void main(String[] args) {
      ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext();
      ctx.getEnvironment().setActiveProfiles("prod");
      ctx.setConfigLocation("applicationContext.xml");
      ctx.refresh();

      DataSource ds = (DataSource)ctx.getBean("dataSource");
      System.out.println(ds);
  }
}
```