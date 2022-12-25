---
title: 流程定义与流程实例
autoPrev: flowable-idm
---

# 流程定义与流程实例

* 流程定义：在使用 flowable 的时候，我们首先需要画一个流程图，要在我们的代码中使用流程图，就必须先把流程图部署到项目中。加载到系统中的流程图，就是流程定义：ProcessDefinition。
* 流程实例：我们启动的每一个具体的流程，就是一个流程实例 ProcessInstance。


ProcessDefinition 相当于 Java 中的类，ProcessInstance 则相当于根据这个类创建出来的对象。

## 流程定义（ProcessDefinition）

### 自动部署

在 Spring Boot 中，凡是放在 resources/processes 目录下的流程文件，默认情况下，都会被自动部署。

创建 Spring Boot 项目，添加 flowable 依赖，并配置 application.properties：

```properties
spring.datasource.username=root
spring.datasource.password=123
spring.datasource.url=jdbc:mysql:///flowable_process?serverTimezone=Asia/Shanghai&useSSL=false&nullCatalogMeansCurrent=true

logging.level.org.flowable=debug
```

启动 Spring Boot 项目，启动之后，这个流程就被自动部署了。

`ACT_RE_DEPLOYMENT` 和 `ACT_RE_PROCDEF` 分别保存了流程定义相关的信息。`ACT_GE_BYTEARRAY` 表则保存了刚刚定义的流程的 XML 文件以及根据这个 XML 文件所自动生成的流程图。

三张表的关系：

* `ACT_RE_DEPLOYMENT` 和 `ACT_RE_PROCDEF` 是一对一的关系。
* `ACT_RE_DEPLOYMENT`和`ACT_GE_BYTEARRAY`是一对多的关系，一个流程部署 ID 对应两条ACT_GE_BYTEARRAY表中的记录（默认）。

流程 部署好之后，如果想要修改，可以直接修改，修改之后，流程会自动升级（数据库中的记录会自动更新）。

举个例子：

::: tip

假设我们现在修改了流程定义的名字，然后重新启动 Spring Boot 项目，那么 `ACT_RE_DEPLOYMENT` 表中会增加一条部署记录，同时 `ACT_RE_PROCDEF` 表也会增加一条新的流程定义信息，新的流程信息中，该变的字段会自动变，同时版本号 `VERSION_` 会自增 1。`ACT_GE_BYTEARRAY` 表中也会新增两条记录，和最新的版本号的定义相对应。

:::

**注意：流程图的更新，主要是以流程定义的 id 为依据，如果流程定义的内容发生变化，但是流程 id 没有变，则流程定义升级；如果流程图定义的 id 发生变化，则直接重新部署新的流程。**

Spring Boot 中，关于流程定义的几个重要属性：

```properties

# 是否在项目启动的时候，自动去检查流程定义目录下是否有对应的流程定义文件，如果这个属性为 true（默认即次），就表示去检查，否则不检查（意味着不会自动部署流程）
flowable.check-process-definitions=true
# 设置流程定义文件的位置，默认位置就是 classpath*:/processes/
flowable.process-definition-location-prefix=classpath*:/javaboy/
# 这个是指定流程定义 XML 文件的后缀，默认后缀有两个：**.bpmn20.xml,**.bpmn
flowable.process-definition-location-suffixes=**.bpmn20.xml,**.bpmn

```

### 手动部署

项目启动成功之后，再去部署流程。手动部署其实就是上传 bpmn文件，读取文件中的信息。

读取文件的方式有多种，如下：

![image-20221215221809931](https://img.zxqs.top/image-20221215221809931.png)

这里我们只介绍两种，addBytes 和 addInputStream

```java
@RestController
public class ProcessDeployController {
    /**
     * 这个实体类可以用来操作 act_re_XXX 这种表
     */
    @Autowired
    RepositoryService repositoryService;

    @RequestMapping("/file")
    public RespBean deploy(MultipartFile file) throws IOException {
        DeploymentBuilder deploymentBuilder = repositoryService
                // 开始流程部署的构建
                .createDeployment()
                .name("YSMC 的工作流")      // act_re_deployment 表中的 NAME_字段
                .category("我的流程分类")   // act_re_deployment 表中 CATEGORY_ 字段
                .key("我的自定义工作流的 KEY") // act_re_deployment 表中的 KEY_ 字段
                // 设置文件的输入流程，将通过这个输入流自动读取 XML 文件
                .addInputStream(file.getOriginalFilename(), file.getInputStream());
        // 完成项目的部署
        Deployment deploy = deploymentBuilder.deploy();

        return RespBean.ok("部署成功",deploy.getId());

    }

    @RequestMapping("/file2")
    public RespBean deploy2(MultipartFile file) throws IOException {

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] bytes = new byte[1024];
        InputStream inputStream = file.getInputStream();
        int length;

        while ((length = inputStream.read(bytes)) != -1){
            outputStream.write(bytes,0,length);
        }

        outputStream.close();
        inputStream.close();

        DeploymentBuilder deploymentBuilder = repositoryService
                // 开始流程部署的构建
                .createDeployment()
                .name("YSMC 的工作流")      // act_re_deployment 表中的 NAME_字段
                .category("我的流程分类")   // act_re_deployment 表中 CATEGORY_ 字段
                .key("我的自定义工作流的 KEY") // act_re_deployment 表中的 KEY_ 字段
                // 设置文件的输入流程，将通过这个输入流自动读取 XML 文件
                .addBytes(file.getOriginalFilename(), outputStream.toByteArray());
        // 完成项目的部署
        Deployment deploy = deploymentBuilder.deploy();

        return RespBean.ok("部署成功",deploy.getId());

    }
}
```

### 查询流程定义

查询所有的流程定义：

```java
@SpringBootTest
public class ActReTest {
    @Autowired
    RepositoryService repositoryService;
    private static final Logger logger = LoggerFactory.getLogger(ActReTest.class);

    /**
     * 查询流程定义
     *
     * 对应的 SQL 如下：
     *
     * : ==>  Preparing: SELECT RES.* from ACT_RE_PROCDEF RES order by RES.ID_ asc
     * : ==> Parameters:
     * : <==      Total: 2
     */
    @Test
    void test01() {
        //查询所有定义的流程
        List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().list();
        for (ProcessDefinition pd : list) {
            logger.info("id:{},name:{},version:{},category:{}",pd.getId(),pd.getName(),pd.getVersion(),pd.getCategory());
        }
    }
}
```

流程定义可能会有多个版本，查询所有流程的最新版本代码如下：

```java
/**
    * 查询所有流程的最新版本
    * 
    * 对应的 SQL：
    * 
    * : ==>  Preparing: SELECT RES.* from ACT_RE_PROCDEF RES WHERE RES.VERSION_ = (select max(VERSION_) from ACT_RE_PROCDEF where KEY_ = RES.KEY_ and ( (TENANT_ID_ IS NOT NULL and TENANT_ID_ = RES.TENANT_ID_) or (TENANT_ID_ IS NULL and RES.TENANT_ID_ IS NULL) ) ) order by RES.ID_ asc
    * : ==> Parameters: 
    * : <==      Total: 1
    */
@Test
void test02() {
    List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery()
            //设置查询流程定义的最新版本
            .latestVersion()
            .list();
    for (ProcessDefinition pd : list) {
        logger.info("id:{},name:{},version:{},category:{}",pd.getId(),pd.getName(),pd.getVersion(),pd.getCategory());
    }
}
``

根据流程定义的 key 去查询：

这个 key 就是文件中的 `process` 标签中的 id

```java
/**
    * 根据流程定义的 key 去查询
    *
    * ==>  Preparing: SELECT RES.* from ACT_RE_PROCDEF RES WHERE RES.KEY_ = ? order by RES.VERSION_ desc
    * ==> Parameters: ysmc_submit_an_expense_account(String)
    * <==      Total: 3
    *
    */
@Test
void contextLoads3() {
    List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery()
            .processDefinitionKey("ysmc_submit_an_expense_account")
            //按照版本号排序
            .orderByProcessDefinitionVersion()
            .desc()
            .list();

    for(ProcessDefinition pd : list){
        logger.info("id:{},name:{},version:{},category:{}",pd.getId(),pd.getName(),pd.getVersion(),pd.getCategory());
    }
}
```

自定义查询：

```java
/**
* 自定义查询
*/
@Test
void contextLoads4() {
    List<ProcessDefinition> list = repositoryService.createNativeProcessDefinitionQuery()
            .sql("select * from ACT_RE_PROCDEF RES WHERE RES.KEY_ = #{key} order by RES.VERSION_ desc")
            .parameter("key", "ysmc_submit_an_expense_account")
            .list();

    for(ProcessDefinition pd : list){
        logger.info("id:{},name:{},version:{},category:{}",pd.getId(),pd.getName(),pd.getVersion(),pd.getCategory());
    }
}
```

### 查询流程部署

```java
/**
* 查询流程部署信息，本质上就是查询 ACT_RE_DEPLOYMENT 表
*/
@Test
void contextLoads5() {
    List<Deployment> list = repositoryService.createDeploymentQuery().list();

    for(Deployment deployment : list){
        logger.info("id:{},category:{},,name:{},key:{}",deployment.getId(),deployment.getCategory(),deployment.getName(),deployment.getKey());
    }
}
```

根据流程部署的分类名称去查询：

```java
/**
    * 根据流程部署的分类，去查询流程部署信息
    *
    * : ==>  Preparing: SELECT RES.* from ACT_RE_DEPLOYMENT RES WHERE RES.CATEGORY_ = ? order by RES.ID_ asc
    * : ==> Parameters: 我的流程分类(String)
    * : <==      Total: 2
    *
    */
@Test
void contextLoads6() {
    List<Deployment> list = repositoryService.createDeploymentQuery()
            //根据流程部署的分类去查询
            .deploymentCategory("我的流程分类")
            .list();
    for (Deployment d : list) {
        logger.info("id:{},category:{},,name:{},key:{}",d.getId(),d.getCategory(),d.getName(),d.getKey());
    }
}
```

根据流程部署的 ID 去查询流程定义

```java
@Test
void contextLoads7() {
    List<Deployment> list = repositoryService.createDeploymentQuery().list();
    for (Deployment d : list) {
        List<ProcessDefinition> list1 = repositoryService.createProcessDefinitionQuery().deploymentId(d.getId()).list();
        for (ProcessDefinition pd : list1) {
            logger.info("id:{},name:{},version:{},category:{}", pd.getId(), pd.getName(), pd.getVersion(), pd.getCategory());
        }
    }
}
```

自定义流程部署查询 SQL：

```java
@Test
void contextLoads8() {
    List<Deployment> list = repositoryService.createNativeDeploymentQuery()
            .sql("SELECT RES.* from ACT_RE_DEPLOYMENT RES WHERE RES.CATEGORY_ = #{category} order by RES.ID_ asc")
            .parameter("category","我的流程分类")
            .list();
    for (Deployment d : list) {
        logger.info("id:{},category:{},,name:{},key:{}",d.getId(),d.getCategory(),d.getName(),d.getKey());
    }
}
```

### 流程部署删除

这个删除操作，涉及到流程部署的表，都会被删除（也就是删除一个流程部署，那么相关的`act_re_procdef`、`act_ge_property`中的信息也会被删除）

```java
/**
 * 删除一个流程部署
 */
@Test
void test09() {
    List<Deployment> list = repositoryService.createDeploymentQuery().list();
    for (Deployment deployment : list) {
        repositoryService.deleteDeployment(deployment.getId());
    }
}
```

## 流程实例（Process Instance）

两个概念：
1. 流程实例：ProcessInstance：通过流程定义启动的一个流程，这个启动后的流程就是流程实例，这个表示一个流程从开始到结束的最大流程分支，在一个流程中，只存在一个流程实例（执行实例可能有多个），前面说的流程定义相当于是 Java 类，这里的流程实例相当于是 Java 对象。
2. 执行实例：Execution：简单来说，在一个流程中，开始节点和结束节点是流程实例，其余节点是执行实例。从类的继承关系来说，ProcessInstance 实际上是 Execution 的子类，所以，流程实例可以算是执行实例的一种特殊情况。
     1. 如果一个流程图中，只有一条线，那么一般来说，流程实例和执行实例就不同。
     2. 如果一个流程图中，包含多条线，那么每一条线就是一个执行实例。


### 启动流程实例

启动流程方式如下：

```java
@SpringBootTest
public class ActRuTest {

    //跟流程运行相关的操作，都在这个 Bean 中，在 Spring Boot 中，该 Bean 已经配置好，可以直接使用
    @Autowired
    RuntimeService runtimeService;   // 操作的是 act_ru_execution 表
    @Autowired
    IdentityService identityService;

    @Autowired
    RepositoryService repositoryService;
    @Autowired
    TaskService taskService;    

    private static final Logger logger = LoggerFactory.getLogger(ActRuTest.class);

     /**
     * 开启一个流程
     */
    @Test
    void test1(){
        // 设置流程发起人
        Authentication.setAuthenticatedUserId("wangwu");
        String processDefinitionKey = "leave";
        // 通过流程定义的key启动一个流程实例
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(processDefinitionKey);

        logger.info("definitionId:{},id:{},name:{}",processInstance.getProcessDefinitionId(),processInstance.getId(),processInstance.getName());
    }

    // 也可以通过流程定义的 id 去启动一个流程
    @Test
    void test2(){
        // 设置流程发起人
        identityService.setAuthenticatedUserId("zhaoliu");

        ProcessDefinition leave = repositoryService.createProcessDefinitionQuery().processDefinitionKey("leave").latestVersion().singleResult();
        //也可以通过流程定义的 id 去启动一个流程，但是需要注意，流程定义的 id 需要自己去查询，这个 id 并不是 XML 文件中定义的流程 ID

        ProcessInstance processInstance = runtimeService.startProcessInstanceById(leave.getId());

        logger.info("definitionId:{},id:{},name:{}",processInstance.getProcessDefinitionId(),processInstance.getId(),processInstance.getName());

    }
}
```

当一个流程启动成功后，我们首先去查看 `ACT_RU_EXECUTION` 表，该表中保存了所有的流程执行实例信息，包括启动节点以及其他的任务节点信息都保存在这个表中。同时，如果这个节点，还是一个 `UserTask`，那么这个节点的信息还会保存在 `ACT_RU_TASK` 表中（该表用来保存 UserTask）。

另外还有 `ACT_RU_ACTINST` 表中，会保存流程活动的执行情况。

当然，无论哪张表，只要流程执行结束，`ACT_RU_` 相关的表中的数据都会被删除。

接下来，根据用户名去查询每一个用户需要处理的流程，并处理：

```java
// 查询 wangwu 需要执行的任务，并处理
@Test
void test3(){
    List<Task> tasks = taskService.createTaskQuery().taskAssignee("wangwu").list();

    for(Task task : tasks){
        logger.info("id:{},assignee:{},name:{}",task.getId(),task.getAssignee(),task.getName());
        // 王五完成自己的任务
        taskService.complete(task.getId());
    }

}
```

::: tip

taskService 操作的是 act_ru_task 表

上面代码完成了两个操作

1. 首先去 ACT_RU_TASK 表中添加一条记录，这个新的记录，就是主管审批。
2. 然后从 ACT_RU_TASK 表中删除掉之前的需要 wangwu 完成的记录。

这两个操作是在同一个事务中完成的。

查询对应的SQL 为：

```log
==>  Preparing: SELECT RES.* from ACT_RU_TASK RES WHERE RES.ASSIGNEE_ = ? order by RES.ID_ asc
==> Parameters: wangwu(String)
<==      Total: 1
```

:::


### 查询流程是否结束


```java
@Test
void test04() {
    String processId = "3fbef0ee-6fc2-11ed-b2d2-00ff3bea3f33";
    ProcessInstance pi = runtimeService.createProcessInstanceQuery().processInstanceId(processId).singleResult();
    if (pi == null) {
        logger.info("流程执行结束");
    }else{
        logger.info("流程正在执行中");
    }
}
```

其实就是根据 流程实例id 查找流程实例，如果 ACT_RU_EXECUTION 表中，由于关于这个流程的记录，说明这个流程还在执行中，如果 ACT_RU_EXECUTION 表中，没有关于这个流程的记录，说明这个流程已经执行结束。

**注意，虽然我们是去 ACT_RU_EXECUTION 表中查询，且该表中同一个流程实例 ID 对应了多条记录，但是大家注意，这里查询到的其实还是一个流程实例。**

###  查看运行的活动节点

```java
/**
    * 查看运行活动节点，本质上其实就是查看 ACT_RU_EXECUTION 表
    */
@Test
void test05() {
    List<Execution> list = runtimeService.createExecutionQuery().list();
    for(Execution execution : list){
        //查询某一个执行实例的活动节点
        List<String> activeActivityIds = runtimeService.getActiveActivityIds(execution.getId());

        for(String activeActivityId : activeActivityIds){
            //这里拿到的其实就是 ACT_RU_EXECUTION 表中的 ACT_ID_ 字段
            logger.info("activeActivityId:{}", activeActivityId);
        }
    }
}
```

### 删除流程实例

```java
 /**
    *
    * 删除一个正在执行的流程，注意这个只会删除正在执行的流程实例信息，并不会删除历史流程信息（历史信息被更新）。
    *
    * : ==>  Preparing: delete from ACT_RU_VARIABLE where EXECUTION_ID_ = ?
    * : ==> Parameters: 87df7272-3cad-11ed-9026-acde48001122(String)
    * : <==    Updates: 1
    * : ==>  Preparing: delete from ACT_RU_IDENTITYLINK where PROC_INST_ID_ = ?
    * : ==> Parameters: 87df7272-3cad-11ed-9026-acde48001122(String)
    * : <==    Updates: 2
    * : ==>  Preparing: delete from ACT_RU_TASK where ID_ = ? and REV_ = ?
    * : ==> Parameters: 87e4c9a9-3cad-11ed-9026-acde48001122(String), 1(Integer)
    * : <==    Updates: 1
    * : ==>  Preparing: delete from ACT_RU_TASK where EXECUTION_ID_ = ?
    * : ==> Parameters: 87df7272-3cad-11ed-9026-acde48001122(String)
    * : <==    Updates: 0
    * : ==>  Preparing: delete from ACT_RU_ACTINST where PROC_INST_ID_ = ?
    * : ==> Parameters: 87df7272-3cad-11ed-9026-acde48001122(String)
    * : <==    Updates: 3
    * : ==>  Preparing: delete from ACT_RU_ACTINST where PROC_INST_ID_ = ?
    * : ==> Parameters: 87df7272-3cad-11ed-9026-acde48001122(String)
    * : <==    Updates: 0
    * : ==>  Preparing: delete from ACT_RU_EXECUTION where ID_ = ? and REV_ = ?
    * : ==> Parameters: 87e035c5-3cad-11ed-9026-acde48001122(String), 2(Integer)
    * : <==    Updates: 1
    * : ==>  Preparing: delete from ACT_RU_EXECUTION where ID_ = ? and REV_ = ?
    * : ==> Parameters: 87df7272-3cad-11ed-9026-acde48001122(String), 2(Integer)
    * : <==    Updates: 1
    */
@Test
void test06() {
    String processInstanceId = "3fbef0ee-6fc2-11ed-b2d2-00ff3bea3f33";
    String deleteReason = "想删除了";
    runtimeService.deleteProcessInstance(processInstanceId, deleteReason);
}
```

## 流程的挂起和恢复

### 流程定义的挂起和恢复

**查看流程定义是否被挂起：**

```java
@SpringBootTest
public class ActReTest {

    private static final Logger logger = LoggerFactory.getLogger(ActReTest.class);

    @Autowired
    RuntimeService runtimeService;           // 操作的是 act_ru_execution 表
    @Autowired
    IdentityService identityService;

    @Autowired
    RepositoryService repositoryService;
    @Autowired
    TaskService taskService;

   @Test
    void test7(){
        List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().list();

        for(ProcessDefinition pd : list){
            // 根据流程定义id判断流程定义是否被挂起
            boolean processDefinitionSuspended = repositoryService.isProcessDefinitionSuspended(pd.getId());

            if(processDefinitionSuspended){
                logger.info("流程定义 {} 已经挂起",pd.getName());
            } else {
                logger.info("流程定义 {} 没有挂起",pd.getName());
            }
        }
    }
}
```

**挂起一个流程定义:**

```java
/**
    * 挂起一个流程定义
    *
    *
    * 执行的 SQL 如下：
    *
    *
    : ==>  Preparing: update ACT_RE_PROCDEF SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
    : ==> Parameters: 2(Integer), 2(Integer), leave:1:48375905-43e2-11ed-ba47-acde48001122(String), 1(Integer)
    : <==    Updates: 1
    *
    */
@Test
void test8(){
    List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().list();

    for(ProcessDefinition pd : list){
        repositoryService.suspendProcessDefinitionById(pd.getId());
        logger.info("{} 流程定义已经挂起",pd.getName());
    }
}
```

挂起一个流程定义，本质上，其实就是修改 `ACT_RE_PROCDEF` 表中，对应的记录的 `SUSPENSION_STATE_` 字段的状态值为 2

对于一个已经挂起的流程定义，是无法据此启动一个流程实例的，强行启动，会抛出如下错误：

```java
org.flowable.common.engine.api.FlowableException: Cannot start process instance. Process definition javaboy的请假流程图666 (id = leave:1:48375905-43e2-11ed-ba47-acde48001122) is suspended
```

**激活一个已经挂起的流程定义：**

```java
/**
    * 激活一个已经挂起的流程定义
    *
    * : ==>  Preparing: update ACT_RE_PROCDEF SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
    * : ==> Parameters: 3(Integer), 1(Integer), leave:1:48375905-43e2-11ed-ba47-acde48001122(String), 2(Integer)
    * : <==    Updates: 1
    *
    * 
    *
    */
@Test
void test9(){
    List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().list();

    for(ProcessDefinition pd : list){
        repositoryService.activateProcessDefinitionById(pd.getId());
    }
}
```

激活一个流程定义，本质上，其实就是将 ACT_RE_PROCDEF 表中相应记录的 SUSPENSION_STATE_ 字段的值改为 1

### 流程实例的挂起和恢复

**挂起一个流程实例：**

```java
/**
 * 挂起一个流程实例
 * 
 * : ==>  Preparing: update ACT_RU_EXECUTION SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
 * : ==> Parameters: 2(Integer), 2(Integer), dd7000f0-43e5-11ed-bbdc-acde48001122(String), 1(Integer)
 * : <==    Updates: 1
 * : updating: Execution[ id 'dd709d33-43e5-11ed-bbdc-acde48001122' ] - activity 'sid-2F900F54-E047-40AC-A09C-71181386A6C1' - parent 'dd7000f0-43e5-11ed-bbdc-acde4800112
 * : ==>  Preparing: update ACT_RU_EXECUTION SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
 * : ==> Parameters: 2(Integer), 2(Integer), dd709d33-43e5-11ed-bbdc-acde48001122(String), 1(Integer)
 * : <==    Updates: 1
 * : updating: Task[id=dd746dc7-43e5-11ed-bbdc-acde48001122, name=提交请假申请]
 * : ==>  Preparing: update ACT_RU_TASK SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_= ? and REV_ = ?
 * : ==> Parameters: 2(Integer), 2(Integer), dd746dc7-43e5-11ed-bbdc-acde48001122(String), 1(Integer)
 * : <==    Updates: 1
 * : updating: ProcessDefinitionEntity[leave:1:cc46d851-43e5-11ed-bdc3-acde48001122]
 * : ==>  Preparing: update ACT_RE_PROCDEF SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
 * : ==> Parameters: 2(Integer), 2(Integer), leave:1:cc46d851-43e5-11ed-bdc3-acde48001122(String), 1(Integer)
 * : <==    Updates: 1
 * 
 * 
 *
 */
@Test
void test07() {
    //查询所有的流程定义
    List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().list();
    for (ProcessDefinition pd : list) {
        //1. 流程定义的 ID
        //2. 是否挂起这个流程定义所对应的流程实例
        //3。这是挂起的时间，null 表示立即挂起，也可以给一个具体的时间，表示到期之后才会被挂起。
        repositoryService.suspendProcessDefinitionById(pd.getId(), true, null);
    }
}
```

流程定义和流程实例挂起的方法名是一样的，知识参数不同。

::: tip



对于一个挂起的流程实例，我们是无法执行相应的 Task 的，流程实例的挂起，最终也会挂起流程定义

一个被挂起的流程实例：

1. 流程实例本身被挂起
2. 流程的 Task 被挂起。

所以流程实例的挂起，一共涉及到三张表，分别是 ACT_RU_EXECUTION（流程实例被挂起）、ACT_RU_TASK（流程的 Task 被挂起） 以及 ACT_RE_PROCDEF（流程定义被挂起）

:::

对于一个挂起的流程实例，是无法执行其 Task 的，如果强行执行，报错信息如下：

```java
org.flowable.common.engine.api.FlowableException: Cannot complete a suspended task
```

**激活一个已经挂起的流程：**

```java

/**
 * 激活一个挂起的流程实例
 *
 : ==>  Preparing: update ACT_RE_PROCDEF SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
 : ==> Parameters: 3(Integer), 1(Integer), leave:1:cc46d851-43e5-11ed-bdc3-acde48001122(String), 2(Integer)
 : <==    Updates: 1
 : updating: ProcessInstance[dd7000f0-43e5-11ed-bbdc-acde48001122]
 : ==>  Preparing: update ACT_RU_EXECUTION SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
 : ==> Parameters: 3(Integer), 1(Integer), dd7000f0-43e5-11ed-bbdc-acde48001122(String), 2(Integer)
 : <==    Updates: 1
 : updating: Execution[ id 'dd709d33-43e5-11ed-bbdc-acde48001122' ] - activity 'sid-2F900F54-E047-40AC-A09C-71181386A6C1' - parent 'dd7000f0-43e5-11ed-bbdc-acde48001122'
 : ==>  Preparing: update ACT_RU_EXECUTION SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_ = ? and REV_ = ?
 : ==> Parameters: 3(Integer), 1(Integer), dd709d33-43e5-11ed-bbdc-acde48001122(String), 2(Integer)
 : <==    Updates: 1
 : updating: Task[id=dd746dc7-43e5-11ed-bbdc-acde48001122, name=提交请假申请]
 : ==>  Preparing: update ACT_RU_TASK SET REV_ = ?, SUSPENSION_STATE_ = ? where ID_= ? and REV_ = ?
 : ==> Parameters: 3(Integer), 1(Integer), dd746dc7-43e5-11ed-bbdc-acde48001122(String), 2(Integer)
 : <==    Updates: 1
 *
 */
@Test
void test08() {
    List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().list();
    for (ProcessDefinition pd : list) {
        repositoryService.activateProcessDefinitionById(pd.getId(), true, null);
    }
}
```

 
::: tip

激活就是挂起的一个反向操作：
 
激活，也会涉及到三张表，分别是：ACT_RU_EXECUTION、ACT_RU_TASK 以及 ACT_RE_PROCDEF
 
挂起是将这三张表中的 SUSPENSION_STATE_ 字段，由 1 改为 2

激活就是将这三张表中的 SUSPENSION_STATE_ 由 2 改为 1

:::
  