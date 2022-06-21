import{c as a,o as t,F as o,a as n,b as s}from"./app.e6e0fd51.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";var c="/blogImg/springsecurity/\u9ED8\u8BA4\u767B\u5F55\u9875\u9762.jpg";const p={},l=n("h1",{id:"\u8BA4\u8BC1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BA4\u8BC1","aria-hidden":"true"},"#"),s(" \u8BA4\u8BC1")],-1),u=n("p",null,"\u5728 Spring Security \u4E2D\uFF0C\u5BF9\u8BA4\u8BC1\u529F\u80FD\u505A\u4E86\u5927\u91CF\u7684\u5C01\u88C5\uFF0C\u4EE5\u81F3\u4E8E\u5F00\u53D1\u8005\u53EA\u9700\u8981\u7A0D\u5FAE\u914D\u7F6E\u4E00\u4E0B\u5C31\u80FD\u4F7F\u7528\u8BA4\u8BC1\u529F\u80FD\uFF0C\u7136\u800C\u8981\u6DF1\u523B\u7406\u89E3\u5176\u6E90\u7801\u5E76\u975E\u6613\u4E8B\uFF0C\u672C\u6587\u5E26\u9886\u6211\u4EEC\u4ECE\u6700\u57FA\u672C\u7684\u7528\u6CD5\u5F00\u59CB\u8BB2\u89E3\uFF0C\u6700\u7EC8\u518D\u6269\u5C55\u5230\u5BF9\u6E90\u7801\u7684\u7406\u89E3\u3002",-1),i=n("h2",{id:"spring-security-\u57FA\u672C\u8BA4\u8BC1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-security-\u57FA\u672C\u8BA4\u8BC1","aria-hidden":"true"},"#"),s(" Spring Security \u57FA\u672C\u8BA4\u8BC1")],-1),r=n("p",null,"\u5728 Spring Boot \u9879\u76EE\u4E2D\u4F7F\u7528 Spring Security \u975E\u5E38\u65B9\u4FBF\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Spring Boot \u9879\u76EE\uFF0C\u53EA\u9700\u8981\u5F15\u5165 Web \u548C Spring Security \u4F9D\u8D56\u5373\u53EF\uFF1A",-1),k=n("div",{class:"language-xml ext-xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("org.springframework.boot"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("spring-boot-starter-security"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("org.springframework.boot"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("spring-boot-starter-web"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),g=n("p",null,[s("\u7136\u540E\u5728\u9879\u76EE\u4E2D\u63D0\u4F9B\u4E00\u4E2A\u7528\u4E8E\u6D4B\u8BD5\u7684 "),n("code",null,"/hello"),s(" \u63A5\u53E3\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A")],-1),d=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@RestController"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HelloController"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@GetMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/hello"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token function"},"hello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_=n("p",null,[s("\u63A5\u4E0B\u6765\u542F\u52A8\u9879\u76EE\uFF0C"),n("code",null,"/hello"),s(" \u63A5\u53E3\u5C31\u5DF2\u7ECF\u88AB\u4FDD\u62A4\u8D77\u6765\u4E86\u3002\u5F53\u7528\u6237\u8BBF\u95EE "),n("code",null,"/hello"),s(" \u63A5\u53E3\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\uFF0C")],-1),h=n("p",null,[n("img",{src:c,alt:"\u9ED8\u8BA4\u767B\u5F55\u9875\u9762"})],-1);function m(f,y){return t(),a(o,null,[l,u,i,r,k,g,d,_,h],64)}var S=e(p,[["render",m]]);export{S as default};
