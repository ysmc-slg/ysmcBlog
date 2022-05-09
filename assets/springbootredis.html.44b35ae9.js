import{c as a,o as t,F as e,a as n,b as s}from"./app.ddb81edc.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";var c="/blogImg/redis/Snipaste_2021-12-24_15-06-55.png";const p={},l=n("h1",{id:"springboot-redis-\u5B9E\u73B0\u7F13\u5B58",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#springboot-redis-\u5B9E\u73B0\u7F13\u5B58","aria-hidden":"true"},"#"),s(" SpringBoot + Redis \u5B9E\u73B0\u7F13\u5B58")],-1),u=n("p",null,"\u4E0A\u9762\u6211\u4EEC\u90FD\u662F\u8BB2\u7684 redis \u57FA\u672C\u547D\u4EE4\u548C\u914D\u7F6E\uFF0C\u6211\u4EEC\u5728\u5F00\u53D1\u4E2D\u5E76\u4E0D\u662F\u76F4\u63A5\u53BB\u4F7F\u7528 redis \u547D\u4EE4\u8FDB\u884C\u64CD\u4F5C\u7684\uFF0C\u800C\u662F\u901A\u8FC7 java \u4EE3\u7801\u53BB\u64CD\u4F5Credis\u8FDB\u884C\u5177\u4F53\u7684\u64CD\u4F5C\u3002",-1),k=n("h2",{id:"\u6DFB\u52A0\u4F9D\u8D56",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u4F9D\u8D56","aria-hidden":"true"},"#"),s(" \u6DFB\u52A0\u4F9D\u8D56")],-1),i=n("p",null,"\u9996\u5148\u521B\u5EFA\u4E00\u4E2A SpringBoot \u9879\u76EE\uFF0C\u7136\u540E\u6DFB\u52A0\u4EE5\u4E0B\u4F9D\u8D56\uFF1A",-1),r=n("div",{class:"language-xml ext-xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependencies")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- redis \u7F13\u5B58\u64CD\u4F5C -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("org.springframework.boot"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("spring-boot-starter-data-redis"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token comment"},"<!-- pool \u5BF9\u8C61\u6C60 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("org.apache.commons"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("commons-pool2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token comment"},"<!-- \u963F\u91CCJSON\u89E3\u6790\u5668 -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("com.alibaba"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("fastjson"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("version")]),n("span",{class:"token punctuation"},">")]),s("1.2.79"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("version")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependencies")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),m=n("h2",{id:"application-yml-\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#application-yml-\u914D\u7F6E","aria-hidden":"true"},"#"),s(" application.yml \u914D\u7F6E")],-1),d=n("div",{class:"language-yaml ext-yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# \u5730\u5740"),s(`
    `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` localhost
    `),n("span",{class:"token comment"},"# \u7AEF\u53E3 \u9ED8\u8BA4\u4E3A6379"),s(`
    `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"6379"),s(`
    `),n("span",{class:"token comment"},"# \u6570\u636E\u5E93\u7D22\u5F15"),s(`
    `),n("span",{class:"token key atrule"},"database"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token comment"},"# \u5BC6\u7801"),s(`
    `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4"),s(`
    `),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(` 10s
    `),n("span",{class:"token key atrule"},"lettuce"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"pool"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"# \u8FDE\u63A5\u6C60\u4E2D\u7684\u6700\u5C0F\u7A7A\u95F2\u8FDE\u63A5"),s(`
        `),n("span",{class:"token key atrule"},"min-idle"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token comment"},"# \u8FDE\u63A5\u6C60\u4E2D\u7684\u6700\u5927\u7A7A\u95F2\u8FDE\u63A5"),s(`
        `),n("span",{class:"token key atrule"},"max-idle"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"8"),s(`
        `),n("span",{class:"token comment"},"# \u8FDE\u63A5\u6C60\u7684\u6700\u5927\u6570\u636E\u5E93\u8FDE\u63A5\u6570"),s(`
        `),n("span",{class:"token key atrule"},"max-active"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"8"),s(`
        `),n("span",{class:"token comment"},"# \u8FDE\u63A5\u6C60\u6700\u5927\u963B\u585E\u7B49\u5F85\u65F6\u95F4\uFF08\u4F7F\u7528\u8D1F\u503C\u8868\u793A\u6CA1\u6709\u9650\u5236\uFF09"),s(`
        `),n("span",{class:"token key atrule"},"max-wait"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"-"),s(`1ms
`)])])],-1),y=n("h2",{id:"\u521B\u5EFA-redis-\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521B\u5EFA-redis-\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u521B\u5EFA Redis \u914D\u7F6E")],-1),g=n("p",null,"\u4E3Aredis\u5BA2\u6237\u7AEF\u67E5\u770B\u64CD\u4F5C\u6570\u636E, redisTemplate\u9700\u8981\u8FDB\u884C\u5E8F\u5217\u5316\u8BBE\u7F6E, \u9ED8\u8BA4\u914D\u7F6E\u7684jdk\u5E8F\u5217\u5316\u4F1A\u5BFC\u81F4\u5728\u5BA2\u6237\u7AEF\u67E5\u770B\u4E0D\u4E86\u6570\u636E(\u4ECD\u53EF\u4F7F\u7528\u5185\u5728\u51FD\u6570\u5B58\u53D6\u4FEE\u6539, \u53EA\u662F\u67E5\u770B\u4E0D\u4E86), \u4E3A\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u53D1\u751F, \u4F7F\u7528StringRedisTemplate\u6216\u81EA\u884C\u914D\u7F6E\u5E8F\u5217\u5316\u3002",-1),w=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Configuration"),s(`
`),n("span",{class:"token annotation punctuation"},"@EnableCaching"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RedisConfig"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"CachingConfigurerSupport"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token annotation punctuation"},"@Bean"),s(`
  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"RedisTemplate"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"redisTemplate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"RedisConnectionFactory"),s(" connectionFactory"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token class-name"},"RedisTemplate"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},">")]),s(" template "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"RedisTemplate"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      template`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setConnectionFactory"),n("span",{class:"token punctuation"},"("),s("connectionFactory"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"//\u5B9A\u4E49value\u7684\u5E8F\u5217\u5316\u65B9\u5F0F"),s(`
      `),n("span",{class:"token class-name"},"FastJson2JsonRedisSerializer"),s(" serializer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FastJson2JsonRedisSerializer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token class-name"},"ObjectMapper"),s(" mapper "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ObjectMapper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      mapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setVisibility"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"PropertyAccessor"),n("span",{class:"token punctuation"},"."),s("ALL"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[s("JsonAutoDetect"),n("span",{class:"token punctuation"},"."),s("Visibility")]),n("span",{class:"token punctuation"},"."),s("ANY"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      mapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"activateDefaultTyping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"LaissezFaireSubTypeValidator"),n("span",{class:"token punctuation"},"."),s("instance"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[s("ObjectMapper"),n("span",{class:"token punctuation"},"."),s("DefaultTyping")]),n("span",{class:"token punctuation"},"."),s("NON_FINAL"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[s("JsonTypeInfo"),n("span",{class:"token punctuation"},"."),s("As")]),n("span",{class:"token punctuation"},"."),s("PROPERTY"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      serializer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setObjectMapper"),n("span",{class:"token punctuation"},"("),s("mapper"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      
      `),n("span",{class:"token comment"},"// \u8BBE\u7F6E value \u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 FastJson2JsonRedisSerializer"),s(`
      template`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setValueSerializer"),n("span",{class:"token punctuation"},"("),s("serializer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u4F7F\u7528StringRedisSerializer\u6765\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316redis\u7684key\u503C"),s(`
      template`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setKeySerializer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"StringRedisSerializer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      template`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"afterPropertiesSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" template"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),f=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"FastJson2JsonRedisSerializer"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"RedisSerializer"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@SuppressWarnings"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"unused"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"ObjectMapper"),s(" objectMapper "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ObjectMapper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Charset"),s(" DEFAULT_CHARSET "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Charset"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"UTF-8"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" clazz"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"static"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ParserConfig"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getGlobalInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAutoTypeSupport"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"FastJson2JsonRedisSerializer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" clazz"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("clazz "),n("span",{class:"token operator"},"="),s(" clazz"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token function"},"serialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"T"),s(" t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SerializationException"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toJSONString"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[s("SerializerFeature"),n("span",{class:"token punctuation"},"."),s("WriteClassName")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBytes"),n("span",{class:"token punctuation"},"("),s("DEFAULT_CHARSET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token function"},"deserialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" bytes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SerializationException"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bytes "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" bytes"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"String"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"("),s("bytes"),n("span",{class:"token punctuation"},","),s(" DEFAULT_CHARSET"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseObject"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},","),s(" clazz"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setObjectMapper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ObjectMapper"),s(" objectMapper"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Assert"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notNull"),n("span",{class:"token punctuation"},"("),s("objectMapper"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},`"'objectMapper' must not be null"`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("objectMapper "),n("span",{class:"token operator"},"="),s(" objectMapper"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},"JavaType"),s(),n("span",{class:"token function"},"getJavaType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},">")]),s(" clazz"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"TypeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"defaultInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"constructType"),n("span",{class:"token punctuation"},"("),s("clazz"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),h=n("p",null,"\u8FD9\u6837\u5176\u5B9E\u5DF2\u7ECF\u8BBE\u7F6E\u5B8C\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u7F13\u5B58\u6216\u8005\u83B7\u53D6\u7684\u6570\u636E\u7C7B\u578B\u548C\u4E2A\u6570\uFF0C\u6709\u65F6\u5019\u662F\u4E0D\u540C\u7684\uFF0C\u8C03\u7528redisTemplate\u4E2D\u7684\u65B9\u6CD5\u4E5F\u662F\u4E0D\u540C\u7684\u3002",-1),b=n("p",null,"\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u5728\u5DE5\u5177\u7C7B\u4E2D\u8FDB\u884C\u7F13\u5B58\u6570\u636E\u548C\u83B7\u53D6\u6570\u636E",-1),T=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Component"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RedisCache"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"RedisTemplate"),s(" redisTemplate"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u7F13\u5B58\u57FA\u672C\u7684\u5BF9\u8C61\uFF0CInteger\u3001String\u3001\u5B9E\u4F53\u7C7B\u7B49
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` \u7F13\u5B58\u7684\u952E\u503C
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"value"),s(` \u7F13\u5B58\u7684\u503C
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setCacheObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"T"),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        redisTemplate`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u7F13\u5B58\u57FA\u672C\u7684\u5BF9\u8C61\uFF0CInteger\u3001String\u3001\u5B9E\u4F53\u7C7B\u7B49
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` \u7F13\u5B58\u7684\u952E\u503C
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"value"),s(` \u7F13\u5B58\u7684\u503C
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"timeout"),s(` \u65F6\u95F4
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"timeUnit"),s(` \u65F6\u95F4\u9897\u7C92\u5EA6
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setCacheObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"T"),s(" value"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Integer"),s(" timeout"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"TimeUnit"),s(" timeUnit"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        redisTemplate`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token punctuation"},","),s(" timeUnit"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u8BBE\u7F6E\u6709\u6548\u65F6\u95F4
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` Redis\u952E
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"timeout"),s(` \u8D85\u65F6\u65F6\u95F4
     * `),n("span",{class:"token keyword"},"@return"),s(` true=\u8BBE\u7F6E\u6210\u529F\uFF1Bfalse=\u8BBE\u7F6E\u5931\u8D25
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"expire"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token keyword"},"long"),s(" timeout"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"expire"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TimeUnit"),n("span",{class:"token punctuation"},"."),s("SECONDS"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u8BBE\u7F6E\u6709\u6548\u65F6\u95F4
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` Redis\u952E
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"timeout"),s(` \u8D85\u65F6\u65F6\u95F4
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"unit"),s(` \u65F6\u95F4\u5355\u4F4D
     * `),n("span",{class:"token keyword"},"@return"),s(` true=\u8BBE\u7F6E\u6210\u529F\uFF1Bfalse=\u8BBE\u7F6E\u5931\u8D25
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"expire"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token keyword"},"long"),s(" timeout"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"TimeUnit"),s(" unit"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"expire"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token punctuation"},","),s(" unit"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u5F97\u7F13\u5B58\u7684\u57FA\u672C\u5BF9\u8C61\u3002
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` \u7F13\u5B58\u952E\u503C
     * `),n("span",{class:"token keyword"},"@return"),s(` \u7F13\u5B58\u952E\u503C\u5BF9\u5E94\u7684\u6570\u636E
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token function"},"getCacheObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"ValueOperations"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" operation "),n("span",{class:"token operator"},"="),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" operation"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u5220\u9664\u5355\u4E2A\u5BF9\u8C61
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"deleteObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u5220\u9664\u96C6\u5408\u5BF9\u8C61
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"collection"),s(` \u591A\u4E2A\u5BF9\u8C61
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"long"),s(),n("span",{class:"token function"},"deleteObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Collection"),s(" collection"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),s("collection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u7F13\u5B58List\u6570\u636E
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` \u7F13\u5B58\u7684\u952E\u503C
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"dataList"),s(` \u5F85\u7F13\u5B58\u7684List\u6570\u636E
     * `),n("span",{class:"token keyword"},"@return"),s(` \u7F13\u5B58\u7684\u5BF9\u8C61
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"long"),s(),n("span",{class:"token function"},"setCacheList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" dataList"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Long"),s(" count "),n("span",{class:"token operator"},"="),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rightPushAll"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" dataList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" count "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(" count"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u5F97\u7F13\u5B58\u7684list\u5BF9\u8C61
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` \u7F13\u5B58\u7684\u952E\u503C
     * `),n("span",{class:"token keyword"},"@return"),s(` \u7F13\u5B58\u952E\u503C\u5BF9\u5E94\u7684\u6570\u636E
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getCacheList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u7F13\u5B58Set
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` \u7F13\u5B58\u952E\u503C
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"dataSet"),s(` \u7F13\u5B58\u7684\u6570\u636E
     * `),n("span",{class:"token keyword"},"@return"),s(` \u7F13\u5B58\u6570\u636E\u7684\u5BF9\u8C61
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"BoundSetOperations"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"setCacheSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" dataSet"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"BoundSetOperations"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" setOperation "),n("span",{class:"token operator"},"="),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"boundSetOps"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"Iterator"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" it "),n("span",{class:"token operator"},"="),s(" dataSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"iterator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("it"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasNext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            setOperation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("it"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" setOperation"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u5F97\u7F13\u5B58\u7684set
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getCacheSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"members"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u7F13\u5B58Map
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(`
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"dataMap"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setCacheMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" dataMap"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dataMap "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            redisTemplate`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForHash"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"putAll"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" dataMap"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u5F97\u7F13\u5B58\u7684Map
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getCacheMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForHash"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u5F80Hash\u4E2D\u5B58\u5165\u6570\u636E
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` Redis\u952E
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"hKey"),s(` Hash\u952E
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"value"),s(` \u503C
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setCacheMapValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" hKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"T"),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        redisTemplate`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForHash"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" hKey"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u53D6Hash\u4E2D\u7684\u6570\u636E
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` Redis\u952E
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"hKey"),s(` Hash\u952E
     * `),n("span",{class:"token keyword"},"@return"),s(` Hash\u4E2D\u7684\u5BF9\u8C61
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token function"},"getCacheMapValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" hKey"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"HashOperations"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(" opsForHash "),n("span",{class:"token operator"},"="),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForHash"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" opsForHash"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" hKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u53D6\u591A\u4E2AHash\u4E2D\u7684\u6570\u636E
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"key"),s(` Redis\u952E
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"hKeys"),s(` Hash\u952E\u96C6\u5408
     * `),n("span",{class:"token keyword"},"@return"),s(` Hash\u5BF9\u8C61\u96C6\u5408
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getMultiCacheMapValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Collection"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},">")]),s(" hKeys"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"opsForHash"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"multiGet"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" hKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * \u83B7\u5F97\u7F13\u5B58\u7684\u57FA\u672C\u5BF9\u8C61\u5217\u8868
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"pattern"),s(` \u5B57\u7B26\u4E32\u524D\u7F00
     * `),n("span",{class:"token keyword"},"@return"),s(` \u5BF9\u8C61\u5217\u8868
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Collection"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" pattern"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" redisTemplate"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),s("pattern"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),S=n("h2",{id:"\u6D4B\u8BD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6D4B\u8BD5","aria-hidden":"true"},"#"),s(" \u6D4B\u8BD5")],-1),_=n("p",null,"\u5B8C\u6210\u6240\u6709\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u6765\u8FDB\u884C\u6D4B\u8BD5",-1),v=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@SpringBootTest"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SpringbootredisApplicationTests"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"RedisCache"),s(" redisCache"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Test"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"contextLoads"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        redisCache`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCacheObject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"TimeUnit"),n("span",{class:"token punctuation"},"."),s("SECONDS"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=n("p",null,[s("\u4F7F\u7528 redis \u56FE\u5F62\u5316\u5BA2\u6237\u7AEF\u53EF\u4EE5\u770B\u5230\uFF0C\u7F13\u5B58\u4E2D\u591A\u4E86\u4E00\u4E2A "),n("code",null,"hello"),s("\uFF0C\u5E76\u4E14 30\u79D2 \u4E4B\u540E\u81EA\u52A8\u5220\u9664\u3002")],-1),C=n("p",null,[n("img",{src:c,alt:"redis23"})],-1);function O(z,x){return t(),a(e,null,[l,u,k,i,r,m,d,y,g,w,f,h,b,T,S,_,v,j,C],64)}var M=o(p,[["render",O]]);export{M as default};
