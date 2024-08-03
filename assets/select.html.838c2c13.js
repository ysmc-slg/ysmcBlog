import{c as a,o as t,F as e,a as n,b as s}from"./app.7e2e1522.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";var c="/blogImg/ssm/mybatis-4-1.png";const p={},l=n("h1",{id:"\u589E\u5220\u6539\u67E5\u4E0E\u57FA\u672C\u67B6\u6784\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u589E\u5220\u6539\u67E5\u4E0E\u57FA\u672C\u67B6\u6784\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u589E\u5220\u6539\u67E5\u4E0E\u57FA\u672C\u67B6\u6784\u4ECB\u7ECD")],-1),u=n("p",null,"\u524D\u9762\u7684 HelloWorld \uFF0C\u6211\u4EEC\u505A\u4E86\u4E00\u4E2A\u67E5\u8BE2\u7684 Demo\uFF0C\u8FD9\u91CC\u6211\u4EEC\u6765\u770B\u53E6\u5916\u56DB\u79CD\u5E38\u89C1\u7684\u64CD\u4F5C\u3002",-1),i=n("h2",{id:"\u589E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u589E","aria-hidden":"true"},"#"),s(" \u589E")],-1),k=n("p",null,"\u6DFB\u52A0\u8BB0\u5F55\uFF0Cid\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u4E00\u79CD\u5C31\u662F\u81EA\u589E\u957F\uFF0C\u53E6\u4E00\u79CD\u5219\u662F Java \u4EE3\u7801\u4F20\u4E00\u4E2A ID \u8FDB\u6765\uFF0C\u4F20\u4E00\u4E2A ID \u8FDB\u6765\uFF0C\u8FD9\u4E2A ID \u53EF\u4EE5\u662F\u4E00\u4E2A UUID\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u7684\u81EA\u5B9A\u4E49\u7684 ID\u3002\u5728 MyBatis \u4E2D\uFF0C\u5BF9\u8FD9\u4E24\u79CD\u65B9\u5F0F\u90FD\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u652F\u6301\u3002",-1),r=n("h3",{id:"\u4E3B\u952E\u81EA\u589E\u957F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E3B\u952E\u81EA\u589E\u957F","aria-hidden":"true"},"#"),s(" \u4E3B\u952E\u81EA\u589E\u957F")],-1),d=n("p",null,"\u9996\u5148\u6211\u4EEC\u5728 Mapper \u4E2D\uFF0C\u6DFB\u52A0 SQL \u63D2\u5165\u8BED\u53E5\uFF1A",-1),m=n("div",{class:"language-xml ext-xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("insert")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("addUser"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top.zxqs.model.User"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    insert into user (username,address) values (#{username},#{address});
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("insert")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),_=n("p",null,[s("\u8FD9\u91CC\u6709\u4E00\u4E2A "),n("code",null,"parameterType"),s(" \u8868\u793A\u4F20\u5165\u7684\u53C2\u6570\u7C7B\u578B\u3002\u53C2\u6570\u90FD\u662F\u901A\u8FC7 "),n("code",null,"#"),s(" \u6765\u5F15\u7528\u3002")],-1),h=n("p",null,"\u7136\u540E\uFF0C\u5728 Java \u4EE3\u7801\u4E2D\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF1A",-1),y=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Main"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"SqlSessionFactory"),s(" factory "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"SqlSessionFactoryUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"SqlSession"),s(" sqlSession "),n("span",{class:"token operator"},"="),s(" factory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openSession"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"User"),s(" user "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"User"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUsername"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u8D75\u516D"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAddress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u5317\u4EAC"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" insert "),n("span",{class:"token operator"},"="),s(" sqlSession"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"top.zxqs.mapper.UserMapper.addUser"'),n("span",{class:"token punctuation"},","),s(" user"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),s("insert"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        sqlSession`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        sqlSession`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=n("p",null,"\u6CE8\u610F\uFF0CSQL \u63D2\u5165\u5B8C\u6210\u540E\uFF0C\u4E00\u5B9A\u8981\u63D0\u4EA4\uFF0C\u5373 sqlSession.commit()",-1),q=n("h3",{id:"\u4F7F\u7528-uuid-\u505A\u4E3B\u952E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-uuid-\u505A\u4E3B\u952E","aria-hidden":"true"},"#"),s(" \u4F7F\u7528 UUID \u505A\u4E3B\u952E")],-1),v=n("p",null,"\u4E5F\u53EF\u4EE5\u4F7F\u7528 UUID \u505A\u4E3B\u952E\uFF0C\u4F7F\u7528 UUID \u505A\u4E3B\u952E\uFF0C\u53C8\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u601D\u8DEF\uFF0C\u7B2C\u4E00\u79CD\u601D\u8DEF\uFF0C\u5C31\u662F\u5728 Java \u4EE3\u7801\u4E2D\u751F\u6210 UUID\uFF0C\u76F4\u63A5\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u5230 SQL \u4E2D\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5C31\u548C\u4F20\u9012\u666E\u901A\u53C2\u6570\u4E00\u6837\uFF0C\u53E6\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5C31\u662F\u4F7F\u7528 MySQL \u81EA\u5E26\u7684 UUID \u51FD\u6570\u6765\u751F\u6210 UUID\u3002",-1),U=n("p",null,"\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u79CD\u65B9\u5F0F\u6CA1\u6709\u6280\u672F\u542B\u91CF\uFF08\u81EA\u5DF1\u7EC3\u4E60\uFF09\u3002\u4F7F\u7528 MySQL \u81EA\u5E26\u7684 UUID \u51FD\u6570\uFF0C\u6574\u4F53\u601D\u8DEF\u662F\u8FD9\u6837\uFF1A\u9996\u5148\u8C03\u7528 MySQL \u4E2D\u7684 UUID \u51FD\u6570\uFF0C\u83B7\u53D6\u5230\u4E00\u4E2A UUID\uFF0C\u7136\u540E\uFF0C\u5C06\u8FD9\u4E2A UUID \u8D4B\u503C\u7ED9 User \u5BF9\u8C61\u7684 ID \u5C5E\u6027\uFF0C\u7136\u540E\u518D\u53BB\u6267\u884C SQL \u63D2\u5165\u64CD\u4F5C\uFF0C\u518D\u63D2\u5165\u65F6\u4F7F\u7528\u8FD9\u4E2A UUID\u3002",-1),f=n("div",{style:{color:"red"}},"**\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u5B9E\u9A8C\u9700\u8981\u5148\u5C06\u6570\u636E\u7684 ID \u7C7B\u578B\u6539\u4E3A varchar\uFF0C\u540C\u65F6\u5B9E\u4F53\u7C7Bid\u4E5F\u8981\u6539\u6210String\uFF0C\u6D4B\u8BD5\u5B8C\u6210\u540E\u590D\u539F**",-1),S=n("div",{class:"language-xml ext-xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("insert")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("addUser"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top.zxqs.model.User"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("selectKey")]),s(),n("span",{class:"token attr-name"},"resultType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("java.lang.String"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"keyProperty"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("id"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("BEFORE"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        select uuid();
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("selectKey")]),n("span",{class:"token punctuation"},">")]),s(`
    insert into user (id,username,address) values (#{id},#{username},#{address});
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("insert")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),x=n("ul",null,[n("li",null,"selectKey \u8868\u793A\u67E5\u8BE2 key"),n("li",null,"keyProperty \u5C5E\u6027\u8868\u793A\u5C06\u67E5\u8BE2\u7684\u7ED3\u679C\u8D4B\u503C\u7ED9\u4F20\u9012\u8FDB\u6765\u7684 User \u5BF9\u8C61\u7684 id \u5C5E\u6027"),n("li",null,"resultType \u8868\u793A\u67E5\u8BE2\u7ED3\u679C\u7684\u8FD4\u56DE\u7C7B\u578B"),n("li",null,"order \u8868\u793A\u8FD9\u4E2A\u67E5\u8BE2\u64CD\u4F5C\u7684\u6267\u884C\u65F6\u673A\uFF0CBEFORE \u8868\u793A\u8FD9\u4E2A\u67E5\u8BE2\u64CD\u4F5C\u5728 insert \u4E4B\u524D\u6267\u884C\uFF0CAFTER\u5C31\u8868\u793A\u4E4B\u540E\u6267\u884C"),n("li",null,"\u5728 selectKey \u8282\u70B9\u7684\u5916\u9762\u5B9A\u4E49 insert \u64CD\u4F5C")],-1),b=n("p",null,"\u6700\u540E\uFF0C\u5728Java\u4EE3\u7801\u4E2D\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5",-1),w=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"SqlSession"),s(" sqlSession"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token annotation punctuation"},"@Before"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"before"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    sqlSession `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"SqlSessionFactoryUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openSession"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token annotation punctuation"},"@Test"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addUser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"User"),s(" user "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"User"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUsername"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ysmc"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAddress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"www.zxqs.top"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" insert "),n("span",{class:"token operator"},"="),s(" sqlSession"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"top.zxqs.mapper.UserMapper.addUser"'),n("span",{class:"token punctuation"},","),s(" user"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"insert = "'),s(),n("span",{class:"token operator"},"+"),s(" insert"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    sqlSession`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token annotation punctuation"},"@After"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"after"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    sqlSession`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=n("h2",{id:"\u5220",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5220","aria-hidden":"true"},"#"),s(" \u5220")],-1),I=n("p",null,"\u5220\u9664\u64CD\u4F5C\u6BD4\u8F83\u5BB9\u6613\uFF0C\u9996\u5148\u5728UserMapper\u4E2D\u5B9A\u4E49\u5220\u9664sql",-1),M=n("div",{class:"language-xml ext-xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("delete")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deleteUserById"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("java.lang.Long"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    delete from user where id=#{id}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("delete")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),D=n("p",null,"\u7136\u540E\uFF0C\u5728 Java \u4EE3\u7801\u4E2D\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF1A",-1),B=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Test"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteUserById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" delete "),n("span",{class:"token operator"},"="),s(" sqlSession"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"top.zxqs.mapper.UserMapper.deleteUserById"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6L"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    sqlSession`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"delete = "'),s(),n("span",{class:"token operator"},"+"),s(" delete"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),T=n("p",null,"\u8FD9\u91CC\u7684\u8FD4\u56DE\u503C\u4E3A\u8BE5 SQL \u6267\u884C\u540E\uFF0C\u6570\u636E\u5E93\u53D7\u5F71\u54CD\u7684\u884C\u6570\u3002",-1),L=n("h2",{id:"\u6539",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6539","aria-hidden":"true"},"#"),s(" \u6539")],-1),E=n("p",null,"\u4FEE\u6539\u64CD\u4F5C\uFF0C\u4E5F\u662F\u5148\u5B9A\u4E49SQL\uFF1A",-1),F=n("div",{class:"language-xml ext-xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("update")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("updateUserById"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top.zxqs.model.User"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    update user set username = #{username} where id=#{id};
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("update")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Q=n("p",null,"\u6700\u540E\u5728 Java \u4EE3\u7801\u4E2D\u8C03\u7528",-1),z=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Test"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"updateUserById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"User"),s(" user "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"User"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5L"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUsername"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u674E\u56DB222"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" update "),n("span",{class:"token operator"},"="),s(" sqlSession"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"top.zxqs.model.User.updateUserById"'),n("span",{class:"token punctuation"},","),s(" user"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    sqlSession`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"update = "'),s(),n("span",{class:"token operator"},"+"),s(" update"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),J=n("p",null,"\u67E5\u8BE2\u5728\u4E0A\u4E00\u8282 Hello World \u4E2D\u5DF2\u7ECF\u5199\u4E86\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u91CD\u590D\u4E86",-1),H=n("h2",{id:"mybatis-\u67B6\u6784\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mybatis-\u67B6\u6784\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" MyBatis \u67B6\u6784\u4ECB\u7ECD")],-1),A=n("p",null,"\u770B\u5B8C\u524D\u9762\u7684 HelloWorld\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u4E00\u5F20\u7F51\u7EDC\u56FE\u7247\u6765\u770B\u4E0B MyBatis \u67B6\u6784\uFF1A",-1),K=n("p",null,[n("img",{src:c,alt:"\u67B6\u6784\u56FE"})],-1),X=n("ol",null,[n("li",null,[n("p",null,[s("mybatis \u914D\u7F6E:"),n("code",null,"mybatis-config.xml"),s("\uFF0C\u6B64\u6587\u4EF6\u4F5C\u4E3A mybatis \u7684"),n("code",null,"\u5168\u5C40\u914D\u7F6E\u6587\u4EF6"),s("\uFF0C\u914D\u7F6E\u4E86 mybatis \u7684\u8FD0\u884C\u73AF\u5883\u7B49\u4FE1\u606F\u3002\u53E6\u4E00\u4E2A "),n("code",null,"mapper.xml"),s(" \u6587\u4EF6\u5373 sql \u6620\u5C04\u6587\u4EF6\uFF0C\u6587\u4EF6\u4E2D\u914D\u7F6E\u4E86\u64CD\u4F5C\u6570\u636E\u5E93\u7684 sql \u8BED\u53E5\u3002\u6B64\u6587\u4EF6\u9700\u8981\u5728 mybatis-config.xml \u4E2D\u52A0\u8F7D\u3002")])]),n("li",null,[n("p",null,"\u901A\u8FC7 mybatis \u73AF\u5883\u7B49\u914D\u7F6E\u4FE1\u606F\u6784\u9020 SqlSessionFactory \u5373\u4F1A\u8BDD\u5DE5\u5382")]),n("li",null,[n("p",null,"\u7531\u4F1A\u8BDD\u5DE5\u5382\u521B\u5EFA sqlSession \u5373\u4F1A\u8BDD\uFF0C\u64CD\u4F5C\u6570\u636E\u5E93\u9700\u8981\u901A\u8FC7 sqlSession \u8FDB\u884C\u3002")]),n("li",null,[n("p",null,"mybatis \u5E95\u5C42\u81EA\u5B9A\u4E49\u4E86 Executor \u6267\u884C\u5668\u63A5\u53E3\u64CD\u4F5C\u6570\u636E\u5E93\uFF0CExecutor \u63A5\u53E3\u6709\u4E24\u4E2A\u5B9E\u73B0\uFF0C\u4E00\u4E2A\u662F\u57FA\u672C\u6267\u884C\u5668\u3001\u4E00\u4E2A\u662F\u7F13\u5B58\u6267\u884C\u5668\u3002")]),n("li",null,[n("p",null,"Mapped Statement \u4E5F\u662F mybatis \u4E00\u4E2A\u5E95\u5C42\u5C01\u88C5\u5BF9\u8C61\uFF0C\u5B83\u5305\u88C5\u4E86 mybatis \u914D\u7F6E\u4FE1\u606F\u53CA sql \u6620\u5C04\u4FE1\u606F\u7B49\u3002mapper.xml \u6587\u4EF6\u4E2D\u4E00\u4E2A sql \u5BF9\u5E94\u4E00\u4E2A Mapped Statement \u5BF9\u8C61\uFF0Csql \u7684 id \u5373\u662FMapped statement \u7684 id\u3002")]),n("li",null,[n("p",null,"Mapped Statement \u5BF9 sql \u6267\u884C\u8F93\u5165\u53C2\u6570\u8FDB\u884C\u5B9A\u4E49\uFF0C\u5305\u62EC HashMap\u3001\u57FA\u672C\u7C7B\u578B\u3001pojo\uFF0CExecutor \u901A\u8FC7 Mapped Statement \u5728\u6267\u884C sql \u524D\u5C06\u8F93\u5165\u7684 java \u5BF9\u8C61\u6620\u5C04\u81F3 sql \u4E2D\uFF0C\u8F93\u5165\u53C2\u6570\u6620\u5C04\u5C31\u662F jdbc \u7F16\u7A0B\u4E2D\u5BF9 preparedStatement \u8BBE\u7F6E\u53C2\u6570\u3002")]),n("li",null,[n("p",null,"Mapped Statement \u5BF9 sql \u6267\u884C\u8F93\u51FA\u7ED3\u679C\u8FDB\u884C\u5B9A\u4E49\uFF0C\u5305\u62EC HashMap\u3001\u57FA\u672C\u7C7B\u578B\u3001pojo\uFF0CExecutor \u901A\u8FC7 Mapped Statement \u5728\u6267\u884C sql \u540E\u5C06\u8F93\u51FA\u7ED3\u679C\u6620\u5C04\u81F3 java \u5BF9\u8C61\u4E2D\uFF0C\u8F93\u51FA\u7ED3\u679C\u6620\u5C04\u8FC7\u7A0B\u76F8\u5F53\u4E8E jdbc \u7F16\u7A0B\u4E2D\u5BF9\u7ED3\u679C\u7684\u89E3\u6790\u5904\u7406\u8FC7\u7A0B\u3002")])],-1),R=n("h2",{id:"mybatis-\u6240\u89E3\u51B3\u7684-jdbc-\u4E2D\u5B58\u5728\u7684\u95EE\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mybatis-\u6240\u89E3\u51B3\u7684-jdbc-\u4E2D\u5B58\u5728\u7684\u95EE\u9898","aria-hidden":"true"},"#"),s(" MyBatis \u6240\u89E3\u51B3\u7684 JDBC \u4E2D\u5B58\u5728\u7684\u95EE\u9898")],-1),W=n("ol",null,[n("li",null,[n("p",null,"\u6570\u636E\u5E93\u94FE\u63A5\u521B\u5EFA\u3001\u91CA\u653E\u9891\u7E41\u9020\u6210\u7CFB\u7EDF\u8D44\u6E90\u6D6A\u8D39\u4ECE\u800C\u5F71\u54CD\u7CFB\u7EDF\u6027\u80FD\uFF0C\u5982\u679C\u4F7F\u7528\u6570\u636E\u5E93\u94FE\u63A5\u6C60\u53EF\u89E3\u51B3\u6B64\u95EE\u9898\u3002\u89E3\u51B3\uFF1A\u5728 mybatis-config.xml \u4E2D\u914D\u7F6E\u6570\u636E\u94FE\u63A5\u6C60\uFF0C\u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u6570\u636E\u5E93\u94FE\u63A5\u3002")]),n("li",null,[n("p",null,"Sql\u8BED\u53E5\u5199\u5728\u4EE3\u7801\u4E2D\u9020\u6210\u4EE3\u7801\u4E0D\u6613\u7EF4\u62A4\uFF0C\u5B9E\u9645\u5E94\u7528 sql \u53D8\u5316\u7684\u53EF\u80FD\u8F83\u5927\uFF0Csql \u53D8\u52A8\u9700\u8981\u6539\u53D8 java \u4EE3\u7801\u3002\u89E3\u51B3\uFF1A\u5C06 Sql \u8BED\u53E5\u914D\u7F6E\u5728 XXXXmapper.xml \u6587\u4EF6\u4E2D\u4E0E java \u4EE3\u7801\u5206\u79BB\u3002")]),n("li",null,[n("p",null,"\u5411 sql \u8BED\u53E5\u4F20\u53C2\u6570\u9EBB\u70E6\uFF0C\u56E0\u4E3A sql \u8BED\u53E5\u7684 where \u6761\u4EF6\u4E0D\u4E00\u5B9A\uFF0C\u53EF\u80FD\u591A\u4E5F\u53EF\u80FD\u5C11\uFF0C\u5360\u4F4D\u7B26\u9700\u8981\u548C\u53C2\u6570\u4E00\u4E00\u5BF9\u5E94\u3002\u89E3\u51B3\uFF1AMybatis \u81EA\u52A8\u5C06 java \u5BF9\u8C61\u6620\u5C04\u81F3 sql \u8BED\u53E5\uFF0C\u901A\u8FC7 statement \u4E2D\u7684 parameterType \u5B9A\u4E49\u8F93\u5165\u53C2\u6570\u7684\u7C7B\u578B\u3002")]),n("li",null,[n("p",null,"\u5BF9\u7ED3\u679C\u96C6\u89E3\u6790\u9EBB\u70E6\uFF0Csql \u53D8\u5316\u5BFC\u81F4\u89E3\u6790\u4EE3\u7801\u53D8\u5316\uFF0C\u4E14\u89E3\u6790\u524D\u9700\u8981\u904D\u5386\uFF0C\u5982\u679C\u80FD\u5C06\u6570\u636E\u5E93\u8BB0\u5F55\u5C01\u88C5\u6210 pojo \u5BF9\u8C61\u89E3\u6790\u6BD4\u8F83\u65B9\u4FBF\u3002\u89E3\u51B3\uFF1AMybatis \u81EA\u52A8\u5C06 sql \u6267\u884C\u7ED3\u679C\u6620\u5C04\u81F3 java \u5BF9\u8C61\uFF0C\u901A\u8FC7 statement \u4E2D\u7684 resultType \u5B9A\u4E49\u8F93\u51FA\u7ED3\u679C\u7684\u7C7B\u578B\u3002")])],-1);function N(O,P){return t(),a(e,null,[l,u,i,k,r,d,m,_,h,y,g,q,v,U,f,S,x,b,w,j,I,M,D,B,T,L,E,F,Q,z,J,H,A,K,X,R,W],64)}var G=o(p,[["render",N]]);export{G as default};