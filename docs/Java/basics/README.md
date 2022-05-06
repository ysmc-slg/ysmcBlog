---
description: File类常用方法及实例
---

# File类常用方法及实例

Java文件类以抽象的方式代表文件名和目录路径名。该类主要用于文件和目录的创建、文件的查找和文件的删除等。

File对象代表磁盘中实际存在的文件和目录。通过以下构造方法创建一个File对象。

```java
File file = new File("hello.txt");

// 在parent目录下创建一个目录或文件
File file2 = new File("D:\\IDEAworkspace\\javatest\\enum","hello.txt");
```

## File常用方法

|           方法                | 返回值  |            说明              |
|:----------------------------:|:-------:|:----------------------------:|
|          mkdir()             |  boolean| 在指定位置创建一个单级文件夹。文件夹已存在或上层文件夹不存在返回false|
|          mkdirs()            |  boolean| 创建文件目录，如果上层文件不存在，一并创建 |
|          renameTo(File dest) |  boolean| 如果目标文件与源文件是在同一个路径下，那么renameTo的作用是重命名，<br> 如果目标文件与源文件不是同一个路径下，那么renameTo的作用就是剪切，而且还不能操作文件夹。|
|          getAbsolutePath()   |  String  |获取文件的绝对路径，与文件是否存在没关系  |
|          getName()           |  String |获取文件或文件夹的名称，不包含上级路径，与文件是否存在没关系    |
|          getParent()         |  String |返回此抽象路径名父目录的路径名字符串；如果此路径名没有指定父目录，则返回null。 |
|          length()            |  String |获取文件的大小（字节数），如果文件不存在则返回0，如果是文件夹也返回0。        |
|          lastModified()      |  String |获取最后一次被修改的时间。   |
|          list()              |  String[]| 返回目录下的文件或者目录名，包含隐藏文件。前提是file路径得存在。|
|          listFiles()         |  File[] |  返回目录下的文件或者目录对象(绝对路径)，前提是file路径得存在|
|   list(FilenameFilter filter)|  String[] | 返回指定当前目录中符合过滤条件的子文件或子目录。 |
|  listFiles(FilenameFilter filter)| file[] | 返回指定当前目录中符合过滤条件的子文件或子目录 |
|  exists()                    | boolean | 文件或文件夹是否存在。 |
|  isFile()  | boolean | 是否是一个文件，如果不存在，则始终为false。 |
|  isDirectory()| boolean | 是否是一个目录，如果不存在，则始终为false。|
| isHidden() | boolean | 是否是一个隐藏的文件或是否是隐藏的目录。 |
| canExecute()| boolean | 判断文件是否可执行 |
| canRead() | boolean | 判断文件是否可读 |
| canWrite() | boolean | 判断文件是否可写 |

 