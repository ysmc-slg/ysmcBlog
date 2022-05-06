---
description: IO流
autoPrev: README
---
# IO流

IO是指对数据流的输入和输出，也称为IO流，IO流主要分为两大类，字节流和字符流。字节流可以处理任何类型的数据，如图片，视频等，字符流只能处理字符类型的数据。

IO流的本质是数据传输，并且流是单向的。

常用的字节流FileInputStream、FileOutputStream、ObjectInputStream、ObjectOutputStream。

## Java流操作的相关类或接口

File -- 文件类

RandomAccessFile -- 随机存储文件类

InputStream -- 字节输入流

OutputStream -- 字节输出流

Reader -- 字符输入流

Writer -- 字符输出流

![io](/blogImg/java/io.jpg)

## 操作字符

```java
public class FileReaderWriterTest {

    // 使用带参数的read,返回的是每次读入cbuff数组中的字符的个数，读到最后返回 -1
    @Test
    public void test2(){
        File file = new File("hi.txt");
        FileReader reader = null;

        char[] cbuff = new char[5];
        int len;
        try {
            reader = new FileReader(file);
            while ((len = reader.read(cbuff)) != -1) {
                for(int i=0; i < len; i++){
                    System.out.print(cbuff[i]);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null){
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * 从内存中写出数据到硬盘的文件里。
     *
     *     说明：
     *     1. 输出操作，对应的File可以不存在的。并不会报异常
     *     2.
     *          File对应的硬盘中的文件如果不存在，在输出的过程中，会自动创建此文件。
     *          File对应的硬盘中的文件如果存在：
     *                 如果流使用的构造器是：FileWriter(file,false) / FileWriter(file):对原有文件的覆盖
     *                 如果流使用的构造器是：FileWriter(file,true):不会对原有文件覆盖，而是在原有文件基础上追加内容
     *
     * FileWriter 不关闭数据是写不进去的
     * @throws IOException
     */
    @Test
    public void test3() {
        File file = new File("hello.txt");

        FileWriter fw = null;

        try {
            fw = new FileWriter(file,false);

            fw.write("i hava dream");
        } catch (IOException e) {
            e.printStackTrace();
        }
        finally {
            try {
                if(fw != null){
                    fw.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     *write(int args)：写入数字，利用 ASCII 码表 或者 Unicode 表转化
     * write(String str)：写入字符串
     * write(String str,int offset,int count)：写入字符串中开始为offset长度为len的某一部分。
     * write(char[] array)：写入字符数组
     * write(char[] array,int offset,int count)：写入字符数组中开始为offset长度为len的某一部分。
     */
    @Test
    public void test4(){
        File file1 = new File("hi.txt");
        File file2 = new File("hello2.txt");

        FileReader fileReader = null;
        FileWriter fileWriter = null;
        int len;

        char[] cbuff = new char[5];

        try {

            fileReader = new FileReader(file1);
            fileWriter = new FileWriter(file2);

            while ((len = fileReader.read(cbuff)) != -1) {
                fileWriter.write(cbuff,0,len);
            }

            int length = cbuff.length;

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (fileReader != null){fileReader.close();}
            } catch (IOException e) {
                e.printStackTrace();
            }

            try {
                fileWriter.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}
```

## 操作字节

```java
public class FileInputOutputStreamTest {
 
    @Test
    public void test1(){
        File file1 = new File("test1.png");
        File file2 = new File("test2.png");

        FileInputStream fileInputStream = null;
        FileOutputStream fileOutputStream = null;
        int len;

        byte[] cbuff = new byte[5];

        try {

            fileInputStream = new FileInputStream(file1);
            fileOutputStream = new FileOutputStream(file2);

            while ((len = fileInputStream.read(cbuff)) != -1) {
                fileOutputStream.write(cbuff,0,len);
            }

            int length = cbuff.length;

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (fileInputStream != null){fileInputStream.close();}
            } catch (IOException e) {
                e.printStackTrace();
            }

            try {
                fileOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }



    }
}
```