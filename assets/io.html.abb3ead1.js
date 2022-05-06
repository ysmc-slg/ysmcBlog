import{c as a,o as t,F as o,a as n,b as s}from"./app.45f69cb8.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";var c="/blogImg/java/io.jpg";const p={},l=n("h1",{id:"io\u6D41",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#io\u6D41","aria-hidden":"true"},"#"),s(" IO\u6D41")],-1),u=n("p",null,"IO\u662F\u6307\u5BF9\u6570\u636E\u6D41\u7684\u8F93\u5165\u548C\u8F93\u51FA\uFF0C\u4E5F\u79F0\u4E3AIO\u6D41\uFF0CIO\u6D41\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41\u3002\u5B57\u8282\u6D41\u53EF\u4EE5\u5904\u7406\u4EFB\u4F55\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5982\u56FE\u7247\uFF0C\u89C6\u9891\u7B49\uFF0C\u5B57\u7B26\u6D41\u53EA\u80FD\u5904\u7406\u5B57\u7B26\u7C7B\u578B\u7684\u6570\u636E\u3002",-1),k=n("p",null,"IO\u6D41\u7684\u672C\u8D28\u662F\u6570\u636E\u4F20\u8F93\uFF0C\u5E76\u4E14\u6D41\u662F\u5355\u5411\u7684\u3002",-1),i=n("p",null,"\u5E38\u7528\u7684\u5B57\u8282\u6D41FileInputStream\u3001FileOutputStream\u3001ObjectInputStream\u3001ObjectOutputStream\u3002",-1),r=n("h2",{id:"java\u6D41\u64CD\u4F5C\u7684\u76F8\u5173\u7C7B\u6216\u63A5\u53E3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java\u6D41\u64CD\u4F5C\u7684\u76F8\u5173\u7C7B\u6216\u63A5\u53E3","aria-hidden":"true"},"#"),s(" Java\u6D41\u64CD\u4F5C\u7684\u76F8\u5173\u7C7B\u6216\u63A5\u53E3")],-1),d=n("p",null,"File -- \u6587\u4EF6\u7C7B",-1),f=n("p",null,"RandomAccessFile -- \u968F\u673A\u5B58\u50A8\u6587\u4EF6\u7C7B",-1),w=n("p",null,"InputStream -- \u5B57\u8282\u8F93\u5165\u6D41",-1),y=n("p",null,"OutputStream -- \u5B57\u8282\u8F93\u51FA\u6D41",-1),m=n("p",null,"Reader -- \u5B57\u7B26\u8F93\u5165\u6D41",-1),h=n("p",null,"Writer -- \u5B57\u7B26\u8F93\u51FA\u6D41",-1),_=n("p",null,[n("img",{src:c,alt:"io"})],-1),b=n("h2",{id:"\u64CD\u4F5C\u5B57\u7B26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u64CD\u4F5C\u5B57\u7B26","aria-hidden":"true"},"#"),s(" \u64CD\u4F5C\u5B57\u7B26")],-1),F=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"FileReaderWriterTest"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token comment"},"// \u4F7F\u7528\u5E26\u53C2\u6570\u7684read,\u8FD4\u56DE\u7684\u662F\u6BCF\u6B21\u8BFB\u5165cbuff\u6570\u7EC4\u4E2D\u7684\u5B57\u7B26\u7684\u4E2A\u6570\uFF0C\u8BFB\u5230\u6700\u540E\u8FD4\u56DE -1"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Test"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"test2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"File"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"File"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hi.txt"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"FileReader"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" cbuff "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" len"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
            reader `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("len "),n("span",{class:"token operator"},"="),s(" reader"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"read"),n("span",{class:"token punctuation"},"("),s("cbuff"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" len"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"print"),n("span",{class:"token punctuation"},"("),s("cbuff"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"finally"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("reader "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u4ECE\u5185\u5B58\u4E2D\u5199\u51FA\u6570\u636E\u5230\u786C\u76D8\u7684\u6587\u4EF6\u91CC\u3002
     *
     *     \u8BF4\u660E\uFF1A
     *     1. \u8F93\u51FA\u64CD\u4F5C\uFF0C\u5BF9\u5E94\u7684File\u53EF\u4EE5\u4E0D\u5B58\u5728\u7684\u3002\u5E76\u4E0D\u4F1A\u62A5\u5F02\u5E38
     *     2.
     *          File\u5BF9\u5E94\u7684\u786C\u76D8\u4E2D\u7684\u6587\u4EF6\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5728\u8F93\u51FA\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA\u6B64\u6587\u4EF6\u3002
     *          File\u5BF9\u5E94\u7684\u786C\u76D8\u4E2D\u7684\u6587\u4EF6\u5982\u679C\u5B58\u5728\uFF1A
     *                 \u5982\u679C\u6D41\u4F7F\u7528\u7684\u6784\u9020\u5668\u662F\uFF1AFileWriter(file,false) / FileWriter(file):\u5BF9\u539F\u6709\u6587\u4EF6\u7684\u8986\u76D6
     *                 \u5982\u679C\u6D41\u4F7F\u7528\u7684\u6784\u9020\u5668\u662F\uFF1AFileWriter(file,true):\u4E0D\u4F1A\u5BF9\u539F\u6709\u6587\u4EF6\u8986\u76D6\uFF0C\u800C\u662F\u5728\u539F\u6709\u6587\u4EF6\u57FA\u7840\u4E0A\u8FFD\u52A0\u5185\u5BB9
     *
     * FileWriter \u4E0D\u5173\u95ED\u6570\u636E\u662F\u5199\u4E0D\u8FDB\u53BB\u7684
     * `),n("span",{class:"token keyword"},"@throws"),s(),n("span",{class:"token reference"},[n("span",{class:"token class-name"},"IOException")]),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Test"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"test3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"File"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"File"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello.txt"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"FileWriter"),s(" fw "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
            fw `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileWriter"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            fw`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i hava dream"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"finally"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("fw "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
                    fw`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     *write(int args)\uFF1A\u5199\u5165\u6570\u5B57\uFF0C\u5229\u7528 ASCII \u7801\u8868 \u6216\u8005 Unicode \u8868\u8F6C\u5316
     * write(String str)\uFF1A\u5199\u5165\u5B57\u7B26\u4E32
     * write(String str,int offset,int count)\uFF1A\u5199\u5165\u5B57\u7B26\u4E32\u4E2D\u5F00\u59CB\u4E3Aoffset\u957F\u5EA6\u4E3Alen\u7684\u67D0\u4E00\u90E8\u5206\u3002
     * write(char[] array)\uFF1A\u5199\u5165\u5B57\u7B26\u6570\u7EC4
     * write(char[] array,int offset,int count)\uFF1A\u5199\u5165\u5B57\u7B26\u6570\u7EC4\u4E2D\u5F00\u59CB\u4E3Aoffset\u957F\u5EA6\u4E3Alen\u7684\u67D0\u4E00\u90E8\u5206\u3002
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Test"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"test4"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"File"),s(" file1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"File"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hi.txt"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"File"),s(" file2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"File"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello2.txt"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"FileReader"),s(" fileReader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"FileWriter"),s(" fileWriter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" len"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" cbuff "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`

            fileReader `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),s("file1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            fileWriter `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileWriter"),n("span",{class:"token punctuation"},"("),s("file2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("len "),n("span",{class:"token operator"},"="),s(" fileReader"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"read"),n("span",{class:"token punctuation"},"("),s("cbuff"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                fileWriter`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"("),s("cbuff"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s("len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"int"),s(" length "),n("span",{class:"token operator"},"="),s(" cbuff"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"finally"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fileReader "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s("fileReader"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                fileWriter`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),S=n("h2",{id:"\u64CD\u4F5C\u5B57\u8282",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u64CD\u4F5C\u5B57\u8282","aria-hidden":"true"},"#"),s(" \u64CD\u4F5C\u5B57\u8282")],-1),g=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"FileInputOutputStreamTest"),s(),n("span",{class:"token punctuation"},"{"),s(`
 
    `),n("span",{class:"token annotation punctuation"},"@Test"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"test1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"File"),s(" file1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"File"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test1.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"File"),s(" file2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"File"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test2.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"FileInputStream"),s(" fileInputStream "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"FileOutputStream"),s(" fileOutputStream "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" len"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" cbuff "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`

            fileInputStream `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileInputStream"),n("span",{class:"token punctuation"},"("),s("file1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            fileOutputStream `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileOutputStream"),n("span",{class:"token punctuation"},"("),s("file2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("len "),n("span",{class:"token operator"},"="),s(" fileInputStream"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"read"),n("span",{class:"token punctuation"},"("),s("cbuff"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                fileOutputStream`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"("),s("cbuff"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s("len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"int"),s(" length "),n("span",{class:"token operator"},"="),s(" cbuff"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"finally"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fileInputStream "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s("fileInputStream"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                fileOutputStream`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`



    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1);function I(O,x){return t(),a(o,null,[l,u,k,i,r,d,f,w,y,m,h,_,b,F,S,g],64)}var j=e(p,[["render",I]]);export{j as default};
