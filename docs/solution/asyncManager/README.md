---
description: 异步管理器
---

# 异步管理器

如果系统每一步的日志记录都是伴随着业务一起执行的，那么当系统访问量增加的时候，就会大大降低系统的响应速度。这时我们就可以使用异步管理器去保存日志信息。

## 创建异步管理器

```java
public class AsyncManager {
    /**
     * 操作延迟10毫秒
     */
    private final int OPERATE_DELAY_TIME = 10;

    /**
     * 异步操作任务调度线程池
     */
    private ScheduledExecutorService executor = SpringUtils.getBean("scheduledExecutorService");

    /**
     * 单例模式
     */
    private AsyncManager() {
    }

    private static AsyncManager me = new AsyncManager();

    public static AsyncManager me() {
        return me;
    }

    /**
     * 执行任务
     *
     * @param task 任务
     */
    public void execute(TimerTask task) {
        executor.schedule(task, OPERATE_DELAY_TIME, TimeUnit.MILLISECONDS);
    }

    /**
     * 停止任务线程池
     */
    public void shutdown() {
        Threads.shutdownAndAwaitTermination(executor);
    }
}
```

通过 `SpringUtils.getBean("scheduledExecutorService")` 从Spring 中获取 `scheduledExecutorService`，这个 `Bean` 用来创建一个调度线程池执行器。

## 线程池配置

```java
@Configuration
public class ThreadPoolConfig {
    // 核心线程池大小
    private int corePoolSize = 50;

    // 最大可创建的线程数
    private int maxPoolSize = 200;

    // 队列最大长度
    private int queueCapacity = 1000;

    // 线程池维护线程所允许的空闲时间
    private int keepAliveSeconds = 300;

    @Bean(name = "threadPoolTaskExecutor")
    public ThreadPoolTaskExecutor threadPoolTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setMaxPoolSize(maxPoolSize);
        executor.setCorePoolSize(corePoolSize);
        executor.setQueueCapacity(queueCapacity);
        executor.setKeepAliveSeconds(keepAliveSeconds);
        // 线程池对拒绝任务(无线程可用)的处理策略
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        return executor;
    }

    /**
     * 执行周期性或定时任务
     */
    @Bean(name = "scheduledExecutorService")
    protected ScheduledExecutorService scheduledExecutorService() {
        return new ScheduledThreadPoolExecutor(corePoolSize,
                new BasicThreadFactory.Builder().namingPattern("schedule-pool-%d").daemon(true).build()) {
            @Override
            protected void afterExecute(Runnable r, Throwable t) {
                super.afterExecute(r, t);
                Threads.printException(r, t);
            }
        };
    }
}
```

`threadPoolTaskExecutor` 初始化 `ThreadPoolTaskExecutor` 线程池任务执行器

`scheduledExecutorService` Bean 实例是用来创建一个调度线程池执行器，并需重写 `afterExecute()` 方法，去处理执行任务过程中产生的异常或执行完成后的下一步操作流程，主要是用于 `执行周期性或定时任务` ，后面会用到它去异步执行记录登录日志任务。

## 异步任务工厂

设计这个类主要是用来产生 TimerTask 的，比如用户访问登录页面，登录判断的同时，还需记录下用户登录的日志情况，是登录成功了呢？还是失败了！退出登录也可以记录到日志表中，并且完全不用担心后端处理不过来的问题，因为它是放在异步操作任务调度线程池当中。


这个类是生产 `TimerTask` ，所以直接 new 一个 `TimerTask` 返回就可以了，至于里面的操作，就要看实际业务了。

```java
public class AsyncFactory {
    private static final Logger sys_user_logger = LoggerFactory.getLogger("sys-user");

    /**
     * 操作日志记录
     *
     * @param operLog 操作日志信息
     * @return 任务task
     */
    public static TimerTask recordOper(final SysOperLog operLog) {
        return new TimerTask() {
            @Override
            public void run() {
                // 远程查询操作地点
                operLog.setOperLocation("xxx");
                SpringUtils.getBean(ISysOperLogService.class).insertOperlog(operLog);
            }
        };
    }
}
```
