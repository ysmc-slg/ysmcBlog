---
description: 自定义导入导出和文件下载
---

# 自定义导入导出和文件下载

项目地址：https://github.com/ysmc-slg/excel-poi

## Excel导入导出

在需要导出的实体类上加上 `@Excel` 注解，注解有多个属性，下面做一下具体说明：

```java
// 导出到Excel中的名字
public String name() default "";

// 日期格式 如: yyyy/MM/dd
public String dateFormat() default "";             

// 读取内容表达式 (如: 0=男,1=女,2=未知)，下载时会将数字转成字符，上传将字符转成数字
public String readConverterExp() default "";       

/**
* 文字后缀,如% 90 变成90%
*/
public String suffix() default "";

/**
* 当值为空时,字段的默认值
*/
public String defaultValue() default "";

/**
* 鼠标放上去的提示信息
*/
public String prompt() default "";

/**
* 设置只能选择不能输入的列内容.下拉框，格式为："xxx,xxx"
*/
public String[] combo() default {};

/**
* 是否导出数据,应对需求:有时我们需要导出一份模板,这是标题需要但内容需要用户手工填写.
*/
public boolean isExport() default true;

/**
* 另一个类中的属性名称,支持多级获取,以小数点隔开
*/
public String targetAttr() default "";

/**
* 是否自动统计数据,在最后追加一行统计数据总和
*/
public boolean isStatistics() default false;



/**
* 导出字体颜色
*/
public IndexedColors color() default IndexedColors.BLACK;

/**
* 导出字段对齐方式
*/
public HorizontalAlignment align() default HorizontalAlignment.CENTER;

/**
* 分隔符，读取字符串组内容
*/
public String separator() default ",";

/**
* BigDecimal 精度 默认:-1(默认不开启BigDecimal格式化)
*/
public int scale() default -1;

/**
* BigDecimal 舍入规则 默认:BigDecimal.ROUND_HALF_EVEN
*/
public int roundingMode() default BigDecimal.ROUND_HALF_EVEN;

/**
* 导出时在excel中每个列的高度 单位为字符
*/
public double height() default 14;

/**
* 导出时在excel中每个列的宽 单位为字符
*/
public double width() default 16;


/**
* 字段类型（0：导出导入；1：仅导出；2：仅导入）
*/
Type type() default Type.ALL;

public enum Type {
    ALL(0), EXPORT(1), IMPORT(2);
    private final int value;

    Type(int value) {
        this.value = value;
    }

    public int value() {
        return this.value;
    }
}

/**
* 导出单元格类型（0数字 1字符串 2图片）
*/
public ColumnType cellType() default ColumnType.STRING;

public enum ColumnType {
    NUMERIC(0), STRING(1), IMAGE(2);
    private final int value;

    ColumnType(int value) {
        this.value = value;
    }

    public int value() {
        return this.value;
    }
}

```

具体用法如下：

首先在实体类中加入注解：

```java
public class TienchinChannel{
    private Long channelId;

    @Excel(name = "渠道名称")
    private String channelName;


    @Excel(name = "渠道状态",prompt="请选择",combo="正常,禁用",readConverterExp="0=禁用,1=正常")
    private String status;

    
    @Excel(name = "渠道类型",prompt="请选择",combo="线上渠道,线下渠道",readConverterExp="1=线上渠道,2=线下渠道")
    private Integer type;

    @Excel(name = "创建时间",dateFormat = "yyyy/MM/dd",type=Type.EXPORT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:ss:mm")
    private Date createTime;

    // ... 省略setter/getter 方法
}
```

导出方法：

```java
@PostMapping("/export")
public void export(HttpServletResponse response, TienchinChannel user) {
    // 查询要导出的数据
    List<TienchinChannel> list = channelService.selectTienchinChannelList(user);
    ExcelUtil<TienchinChannel> util = new ExcelUtil<TienchinChannel>(TienchinChannel.class);
    util.exportExcel(response, list, "渠道数据");
}
```

![image-20230112095846290](https://img.zxqs.top/20230112095854.png)

导入方法：

导入首先要导出模板

```java
/**
导出模板
*/
@PostMapping("/importTemplate")
public void importTemplate(HttpServletResponse response) {
    ExcelUtil<TienchinChannel> util = new ExcelUtil<TienchinChannel>(TienchinChannel.class);
    util.importTemplateExcel(response, "渠道数据");
}
```

导入方法：

其中 updateSupport 参数是已存在的数据要不要修改，这里的业务逻辑需要自己去写

```java
@PostMapping("/importData")
public String importData(MultipartFile file, boolean updateSupport) throws Exception {
    ExcelUtil<TienchinChannel> util = new ExcelUtil<TienchinChannel>(TienchinChannel.class);
    List<TienchinChannel> userList = util.importExcel(file.getInputStream());
//        String operName = getUsername();
//        String message = userService.importUser(userList, updateSupport, operName);
    return "df";
}
```

## 文件上传下载

首先要说的是此工具是将文件上传到本地。

配置文件保存的路径

```yml
demo:
  # 文件路径 示例（ Windows配置D:/demo/uploadPath，Linux配置 /home/demo/uploadPath）
  profile: D:/demo/uploadPath
```

然后通过通用的请求处理进行上传下载：

```java
/**
 * 通用请求处理
 *
 * @author tienchin
 */
@RestController
@RequestMapping("/common")
public class CommonController {
    private static final Logger log = LoggerFactory.getLogger(CommonController.class);

    private static final String FILE_DELIMETER = ",";

    /**
     * 通用上传请求（单个）
     */
    @PostMapping("/upload")
    public String uploadFile(MultipartFile file) throws Exception {
        try {
            // 上传文件路径
            String filePath = ExcelConfig.getUploadPath();
            // 上传并返回新文件名称
            String fileName = FileUploadUtils.upload(filePath, file);
            String url = getUrl() + fileName;
//            AjaxResult ajax = AjaxResult.success();
//            ajax.put("url", url);
//            ajax.put("fileName", fileName);
//            ajax.put("newFileName", FileUtils.getName(fileName));
//            ajax.put("originalFilename", file.getOriginalFilename());
            return url;
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * 通用上传请求（多个）
     */
    @PostMapping("/uploads")
    public String uploadFiles(List<MultipartFile> files) throws Exception {
        try {
            // 上传文件路径
            String filePath = ExcelConfig.getUploadPath();
            List<String> urls = new ArrayList<String>();
            List<String> fileNames = new ArrayList<String>();
            List<String> newFileNames = new ArrayList<String>();
            List<String> originalFilenames = new ArrayList<String>();
            for (MultipartFile file : files) {
                // 上传并返回新文件名称
                String fileName = FileUploadUtils.upload(filePath, file);
                String url = getUrl() + fileName;
                urls.add(url);
                fileNames.add(fileName);
                newFileNames.add(FileUtils.getName(fileName));
                originalFilenames.add(file.getOriginalFilename());
            }
//            AjaxResult ajax = AjaxResult.success();
//            ajax.put("urls", StringUtils.join(urls, FILE_DELIMETER));
//            ajax.put("fileNames", StringUtils.join(fileNames, FILE_DELIMETER));
//            ajax.put("newFileNames", StringUtils.join(newFileNames, FILE_DELIMETER));
//            ajax.put("originalFilenames", StringUtils.join(originalFilenames, FILE_DELIMETER));
            return "成功";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * 本地资源通用下载
     */
    @GetMapping("/download/resource")
    public void resourceDownload(String resource, HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        try {
            if (!FileUtils.checkAllowDownload(resource)) {
                throw new Exception(String.format("资源(%s)非法，不允许下载。",resource));
            }
            // 本地资源路径
            String localPath = ExcelConfig.getProfile();
            // 数据库资源地址
            String downloadPath = localPath + StringUtils.substringAfter(resource, "/profile");
            // 下载名称
            String downloadName = StringUtils.substringAfterLast(downloadPath, "/");
            response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
            FileUtils.setAttachmentResponseHeader(response, downloadName);
            FileUtils.writeBytes(downloadPath, response.getOutputStream());
        } catch (Exception e) {
            log.error("下载文件失败", e);
        }
    }

    /**
     * 通用下载请求
     *
     * @param fileName 文件名称
     * @param delete   是否删除
     */
    @GetMapping("/download")
    public void fileDownload(String fileName, Boolean delete, HttpServletResponse response, HttpServletRequest request) {
        try {
            if (!FileUtils.checkAllowDownload(fileName)) {
                throw new Exception(String.format("文件名称(%s)非法，不允许下载。",fileName));
            }
            String realFileName = System.currentTimeMillis() + fileName.substring(fileName.indexOf("_") + 1);
            String filePath = ExcelConfig.getDownloadPath() + fileName;

            response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
            FileUtils.setAttachmentResponseHeader(response, realFileName);
            FileUtils.writeBytes(filePath, response.getOutputStream());
            if (delete) {
                FileUtils.deleteFile(filePath);
            }
        } catch (Exception e) {
            log.error("下载文件失败", e);
        }
    }

    /**
     * 获取完整的请求路径，包括：域名，端口，上下文访问路径
     *
     * @return 服务地址
     */
    public String getUrl() {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        return getDomain(request);
    }

    public static String getDomain(HttpServletRequest request) {
        StringBuffer url = request.getRequestURL();
        String contextPath = request.getServletContext().getContextPath();
        return url.delete(url.length() - request.getRequestURI().length(), url.length()).append(contextPath).toString();
    }
}
```

需要注意的是，上传文件返回的路径前缀是 `/profile`，如保存文件路径是 `D:\demo\uploadPath\upload\2023\01\11\xxx.jpg`而方法 `upload` 返回路径是 `\profile\upload\2023\01\11\xxx.jpg`，最后在拼接完整的请求路径`http://localhost:8080/profile/upload/2023/01/12/xxx.jpg` 也就是保存到数据库中的。加上前缀的原因是，要对文件进行匹配映射，如下：

```java
@Configuration
public class ResourcesConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        /** 路径匹配映射 */
        registry.addResourceHandler("/profile" + "/**")
                .addResourceLocations("file:" + ExcelConfig.getProfile() + "/");

    }
}
```

拦截 `/profile` 路径，映射到本地目录，最后的 `/` 必须加，所有系统都这样写。





