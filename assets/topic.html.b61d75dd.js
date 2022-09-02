import{c as a,o as t,F as o,a as n,b as s}from"./app.c18bbf36.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";var e="/blogImg/rabbitmq/image-20191127121900255.png",p="/blogImg/rabbitmq/topic2.png",l="/blogImg/rabbitmq/topic3.png";const u={},i=n("h1",{id:"topci\u6A21\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#topci\u6A21\u5F0F","aria-hidden":"true"},"#"),s(" topci\u6A21\u5F0F")],-1),k=n("h2",{id:"\u524D\u8A00",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),s(" \u524D\u8A00")],-1),r=n("p",null,[n("code",null,"Topic"),s("\u7C7B\u578B\u7684"),n("code",null,"Exchange"),s("\u4E0E"),n("code",null,"Direct"),s("\u76F8\u6BD4\uFF0C\u90FD\u662F\u53EF\u4EE5\u6839\u636E"),n("code",null,"RoutingKey"),s("\u628A\u6D88\u606F\u8DEF\u7531\u5230\u4E0D\u540C\u7684\u961F\u5217\u3002\u53EA\u4E0D\u8FC7"),n("code",null,"Topic"),s("\u7C7B\u578B"),n("code",null,"Exchange"),s("\u53EF\u4EE5\u8BA9\u961F\u5217\u5728\u7ED1\u5B9A"),n("code",null,"Routing key"),s(" \u7684\u65F6\u5019\u4F7F\u7528\u901A\u914D\u7B26\uFF01\u8FD9\u79CD\u6A21\u578B"),n("code",null,"Routingkey"),s(" \u4E00\u822C\u90FD\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5355\u8BCD\u7EC4\u6210\uFF0C\u591A\u4E2A\u5355\u8BCD\u4E4B\u95F4\u4EE5\u201D.\u201D\u5206\u5272\uFF0C\u4F8B\u5982\uFF1A "),n("code",null,"item.insert"),s("\u3002")],-1),d=n("p",null,[n("img",{src:e,alt:"topic"})],-1),m=n("p",null,[n("strong",null,"\u7EDF\u914D\u7B26")],-1),g=n("pre",null,[n("code",null,`	*     \u5339\u914D\u4E0D\u591A\u4E0D\u5C11\u6070\u597D1\u4E2A\u8BCD

	#     \u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A\u8BCD
`)],-1),h=n("p",null,[n("strong",null,"\u5982")],-1),_=n("pre",null,[n("code",null,`audit.#    \u5339\u914Daudit.irs.corporate\u6216\u8005 audit.irs \u7B49

audit.*   \u53EA\u80FD\u5339\u914D audit.irs
`)],-1),b=n("h2",{id:"\u64CD\u4F5C\u4EE3\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u64CD\u4F5C\u4EE3\u7801","aria-hidden":"true"},"#"),s(" \u64CD\u4F5C\u4EE3\u7801")],-1),y=n("h3",{id:"\u751F\u4EA7\u8005",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u751F\u4EA7\u8005","aria-hidden":"true"},"#"),s(" \u751F\u4EA7\u8005")],-1),f=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"EmitLogTopic"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" EXCHANGE_NAME "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"topic_logs"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Exception"),s(),n("span",{class:"token punctuation"},"{"),s(`

      `),n("span",{class:"token class-name"},"Channel"),s(" channel "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"RabbitMqUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getChannel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exchangeDeclare"),n("span",{class:"token punctuation"},"("),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"BuiltinExchangeType"),n("span",{class:"token punctuation"},"."),s("TOPIC"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token class-name"},"Scanner"),s(" scanner "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Scanner"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("in"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("scanner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasNext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token class-name"},"String"),s(" message "),n("span",{class:"token operator"},"="),s(" scanner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token comment"},"// \u53D1\u9001\u4FE1\u606F"),s(`
          channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"basicPublish"),n("span",{class:"token punctuation"},"("),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"mq.orange.rabbit"'),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"UTF-8"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

          `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u751F\u4EA7\u8005\u53D1\u51FA\u6D88\u606F"'),s(),n("span",{class:"token operator"},"+"),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),E=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u8981\u5C06"),n("code",null,"exchange"),s("\u7C7B\u578B\u8BBE\u7F6E\u4E3A "),n("code",null,"topic")])],-1),w=n("h3",{id:"\u6D88\u8D39\u8005c1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6D88\u8D39\u8005c1","aria-hidden":"true"},"#"),s(" \u6D88\u8D39\u8005C1")],-1),v=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ReceiveLogsTopic01"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" EXCHANGE_NAME "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"topic_logs"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Exception"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token class-name"},"Channel"),s(" channel "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"RabbitMqUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getChannel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// \u58F0\u660E\u4EA4\u6362\u673A"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exchangeDeclare"),n("span",{class:"token punctuation"},"("),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"BuiltinExchangeType"),n("span",{class:"token punctuation"},"."),s("TOPIC"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token class-name"},"String"),s(" queueName"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"C1"'),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u58F0\u660E\u961F\u5217"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"queueDeclare"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"queueBind"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"*.orange.*"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token class-name"},"DeliverCallback"),s(" deliverCallback "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("consumerTag"),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBody"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"UTF-8"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u6D88\u8D39\u8005C1\u7ED1\u5B9A\u952E\uFF1A"'),n("span",{class:"token operator"},"+"),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getEnvelope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getRoutingKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u63A5\u6536\u6D88\u606F"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"basicConsume"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s("deliverCallback"),n("span",{class:"token punctuation"},","),s("consumerTag "),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),C=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[n("code",null,"Routing Key"),s("\u4E3A "),n("code",null,"*.orange.*"),s("\u3002\u5339\u914D orange\u524D\u540E\u5404\u4E00\u4E2A\u5B57\u7B26")])],-1),N=n("h3",{id:"\u6D88\u8D39\u8005c2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6D88\u8D39\u8005c2","aria-hidden":"true"},"#"),s(" \u6D88\u8D39\u8005C2")],-1),x=n("div",{class:"language-java ext-java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ReceiveLogsTopic02"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(" EXCHANGE_NAME "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"topic_logs"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Exception"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token class-name"},"Channel"),s(" channel "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"RabbitMqUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getChannel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// \u58F0\u660E\u4EA4\u6362\u673A"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exchangeDeclare"),n("span",{class:"token punctuation"},"("),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"BuiltinExchangeType"),n("span",{class:"token punctuation"},"."),s("TOPIC"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token class-name"},"String"),s(" queueName"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"C2"'),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u58F0\u660E\u961F\u5217"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"queueDeclare"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"queueBind"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"*.*.rabbit"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"queueBind"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),s("EXCHANGE_NAME"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"lazy.#"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token class-name"},"DeliverCallback"),s(" deliverCallback "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("consumerTag"),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBody"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"UTF-8"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u6D88\u8D39\u8005C2\u7ED1\u5B9A\u952E\uFF1A"'),n("span",{class:"token operator"},"+"),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getEnvelope"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getRoutingKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u63A5\u6536\u6D88\u606F"),s(`
      channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"basicConsume"),n("span",{class:"token punctuation"},"("),s("queueName"),n("span",{class:"token punctuation"},","),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s("deliverCallback"),n("span",{class:"token punctuation"},","),s("consumerTag "),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),q=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[n("code",null,"Routing Key"),s("\u4E3A "),n("code",null,"*.*.rabbit"),s("\uFF0C"),n("code",null,"lazy.#")])],-1),T=n("p",null,[n("strong",null,"\u6D4B\u8BD5Routing Key\u4E2D\u4F7F\u7528 * \u901A\u914D\u7B26\u65B9\u5F0F"),s("\uFF1ARouting Key\u4E3A"),n("code",null,"mq.orange.rabbit")],-1),A=n("p",null,[n("img",{src:p,alt:"topic"})],-1),S=n("p",null,[n("strong",null,"\u6D4B\u8BD5Routing Key\u4E2D\u4F7F\u7528 # \u901A\u914D\u7B26\u65B9\u5F0F"),s("\uFF1A")],-1),R=n("p",null,[n("img",{src:l,alt:"topic"})],-1);function M(B,j){return t(),a(o,null,[i,k,r,d,m,g,h,_,b,y,f,E,w,v,C,N,x,q,T,A,S,R],64)}var X=c(u,[["render",M]]);export{X as default};