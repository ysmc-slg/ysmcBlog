# 全面的 NestJS

> while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - **Architecture**.

正如 `Nest` 所称，它是为了解决架构问题，所以会提供一些良好的实践。

## CLI

`Nest CLI` 可以更好的帮助管理项目，这是一开始就需要知道的事情。

```bash
npm i @nestjs/cli -g
```

### 工作流程

一切从查看帮助开始：

```bash
nest -h
```

创建项目：

```bash
nest new user-crud
```

三连：

```bash
# 模块
nest g mo user
# 控制器
nest g co user
# 服务
nest g s user
```

比三连更强的 `res`：

```bash
# 附加 dto 及 entities
nest g res user
```

## 参考资料

1. [Nestjs](https://docs.nestjs.com/)
2. [快速 CRUD](https://github.com/nestjsx/crud)
