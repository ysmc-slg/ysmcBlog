import{c as t,o as a,F as o,a as n,b as s}from"./app.14e7beae.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";var p="/blogImg/vue/router.jpg";const c={},l=n("h1",{id:"router",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#router","aria-hidden":"true"},"#"),s(" Router")],-1),u=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"demo\u5730\u5740\uFF1Ahttps://github.com/ysmc-slg/vue_cli")],-1),r=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),k=n("p",null,"Vue Router \u662F Vue.js \u7684\u5B98\u65B9\u8DEF\u7531\u3002\u5B83\u4E0E Vue.js \u6838\u5FC3\u6DF1\u5EA6\u96C6\u6210\uFF0C\u8BA9\u7528 Vue.js \u6784\u5EFA\u5355\u9875\u5E94\u7528\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u529F\u80FD\u5305\u62EC\uFF1A",-1),i=n("ul",null,[n("li",null,"\u5D4C\u5957\u8DEF\u7531\u6620\u5C04"),n("li",null,"\u52A8\u6001\u8DEF\u7531\u9009\u62E9"),n("li",null,"\u6A21\u5757\u5316\u3001\u57FA\u4E8E\u7EC4\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E"),n("li",null,"\u8DEF\u7531\u53C2\u6570\u3001\u67E5\u8BE2\u3001\u901A\u914D\u7B26"),n("li",null,"\u5C55\u793A\u7531 Vue.js \u7684\u8FC7\u6E21\u7CFB\u7EDF\u63D0\u4F9B\u7684\u8FC7\u6E21\u6548\u679C"),n("li",null,"\u7EC6\u81F4\u7684\u5BFC\u822A\u63A7\u5236"),n("li",null,"\u81EA\u52A8\u6FC0\u6D3B CSS \u7C7B\u7684\u94FE\u63A5"),n("li",null,"HTML5 history \u6A21\u5F0F\u6216 hash \u6A21\u5F0F"),n("li",null,"\u53EF\u5B9A\u5236\u7684\u6EDA\u52A8\u884C\u4E3A"),n("li",null,"URL \u7684\u6B63\u786E\u7F16\u7801")],-1),d=n("h2",{id:"\u5B89\u88C5\u548C\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5\u548C\u4F7F\u7528","aria-hidden":"true"},"#"),s(" \u5B89\u88C5\u548C\u4F7F\u7528")],-1),g=n("ol",null,[n("li",null,[n("p",null,[s("\u9996\u5148\u4F7F\u7528\u547D\u4EE4\u5B89\u88C5 "),n("code",null,"Router")]),n("div",{class:"language-vue ext-vue"},[n("pre",{class:"language-vue"},[n("code",null,`npm i vue-router@3
`)])]),n("p",null,[s("\u8FD9\u91CC\u6709\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u4ECE2022\u5E742\u67087\u65E5\u5F00\u59CB\uFF0C"),n("code",null,"vue-router"),s(" \u7684\u9ED8\u8BA4\u7248\u672C\u4E3A4\uFF0C"),n("code",null,"vue-router4"),s(" \u53EA\u80FD\u5728 "),n("code",null,"vue3"),s(" \u4E2D\u4F7F\u7528\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002\u800C\u672C\u6587\u4F7F\u7528\u7684\u662F "),n("code",null,"vue2"),s(" \u6240\u4EE5\u8981\u662F\u7528 "),n("code",null,"vue-router3"),s("\u3002")])]),n("li",null,[n("p",null,"\u7F16\u5199router\u914D\u7F6E\u9879"),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u8BE5\u6587\u4EF6\u4E13\u95E8\u7528\u4E8E\u521B\u5EFA\u6574\u4E2A\u5E94\u7528\u7684\u8DEF\u7531\u5668"),s(`
`),n("span",{class:"token keyword"},"import"),s(" VueRouter "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token comment"},"//\u5E94\u7528\u63D2\u4EF6"),s(`
Vue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("VueRouter"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"//\u5F15\u5165\u7EC4\u4EF6"),s(`
`),n("span",{class:"token keyword"},"import"),s(" About "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../components/About'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Home "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../components/Home'"),s(`

`),n("span",{class:"token comment"},"//\u521B\u5EFA\u5E76\u66B4\u9732\u4E00\u4E2A\u8DEF\u7531\u5668"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/about'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(`About
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(`Home
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])])]),n("p",null,[n("code",null,"About"),s(" \u548C "),n("code",null,"Home"),s(" \u7EC4\u4EF6\u8FD9\u91CC\u5C31\u4E0D\u5199\u4E86")])]),n("li",null,[n("p",null,[s("\u5728 "),n("code",null,"main.js"),s(" \u4E2D\u5F15\u5165\u4E0A\u9762\u7684 router \u914D\u7F6E\u6587\u4EF6")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//\u5F15\u5165Vue"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"//\u5F15\u5165App"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),s(`
`),n("span",{class:"token comment"},"//\u5F15\u5165\u8DEF\u7531\u5668"),s(`
`),n("span",{class:"token keyword"},"import"),s(" router "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./router'"),s(`

`),n("span",{class:"token comment"},"//\u5173\u95EDVue\u7684\u751F\u4EA7\u63D0\u793A"),s(`
Vue`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("productionTip "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`

`),n("span",{class:"token comment"},"//\u521B\u5EFAvm"),s(`
`),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    el`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"h"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    router
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])])]),n("li",null,[n("p",null,[s("\u4F7F\u7528 "),n("code",null,"<router-link>"),s(" \u6807\u7B7E\uFF0C\u5B9E\u73B0\u5207\u6362\u8DEF\u7531")]),n("div",{class:"language-vue ext-vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("router-link")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("list-group-item"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("active"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/about"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("About"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("router-link")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("router-link")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("list-group-item"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("active"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/home"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("router-link")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])]),n("p",null,[n("code",null,"to"),s(" \u4E2D\u5BF9\u5E94\u7684\u5C31\u662F\uFF0C\u8DEF\u7531\u914D\u7F6E\u9879\u4E2D\u7684 "),n("code",null,"path")])]),n("li",null,[n("p",null,[s("\u4F7F\u7528 "),n("code",null,"<router-view>"),s(" \u6307\u5B9A\u7B26\u5408\u8DEF\u7531\u914D\u7F6E\u9879\u7EC4\u4EF6\u7684\u4F4D\u7F6E")]),n("div",{class:"language-vue ext-vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("router-view")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("router-view")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])])])],-1),m=n("p",null,[n("strong",null,"\u6CE8\u610F"),s("\uFF1A")],-1),h=n("ol",null,[n("li",null,"\u901A\u8FC7\u5207\u6362\uFF0C\u201C\u9690\u85CF\u201D\u4E86\u7684\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u88AB\u9500\u6BC1\u6389\u7684\uFF0C\u9700\u8981\u7684\u65F6\u5019\u518D\u53BB\u6302\u8F7D\u3002"),n("li",null,[s("\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u81EA\u5DF1\u7684 "),n("code",null,"$route"),s(" \u5C5E\u6027\uFF0C\u91CC\u9762\u5B58\u50A8\u7740\u81EA\u5DF1\u7684\u8DEF\u7531\u4FE1\u606F\u3002")]),n("li",null,[s("\u6574\u4E2A\u5E94\u7528\u53EA\u6709\u4E00\u4E2A "),n("code",null,"router"),s(" \uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u7684 "),n("code",null,"$router"),s(" \u5C5E\u6027\u83B7\u53D6\u5230\u3002")])],-1),v=n("h2",{id:"\u8DEF\u7531\u5D4C\u5957",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8DEF\u7531\u5D4C\u5957","aria-hidden":"true"},"#"),s(" \u8DEF\u7531\u5D4C\u5957")],-1),y=n("p",null,"\u8FD9\u91CC\u53EA\u5C55\u793A\u914D\u7F6E\u8DEF\u7531\u7684\u89C4\u5219\uFF0C\u5177\u4F53\u7684\u4EE3\u7801\u53EF\u4EE5\u770Bgithub\u6848\u4F8B",-1),_=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/about'"),n("span",{class:"token punctuation"},","),s(`
			component`),n("span",{class:"token operator"},":"),s(`About
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),s(`
			component`),n("span",{class:"token operator"},":"),s("Home"),n("span",{class:"token punctuation"},","),s(`
			children`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'news'"),n("span",{class:"token punctuation"},","),s(`
					component`),n("span",{class:"token operator"},":"),s("News"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),s(`
					component`),n("span",{class:"token operator"},":"),s("Message"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),w=n("p",null,[s("\u53EA\u9700\u8981\u5728 "),n("code",null,"VueRouter"),s(" \u7684\u53C2\u6570\u4E2D\u4F7F\u7528 "),n("code",null,"children"),s(" \u914D\u7F6E\uFF0C\u6B64\u65F6\u5C31\u7ED9 "),n("code",null,"/home"),s(" \u8DEF\u7531\u6DFB\u52A0\u4E86\u4E24\u4E2A\u5B50\u8DEF\u7531\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5B50\u8DEF\u7531\u7684 "),n("code",null,"path"),s(" \u4E0D\u9700\u8981 "),n("code",null,"/")],-1),j=n("p",null,[s("\u7136\u540E\u8FD8\u662F\u4F7F\u7528 "),n("code",null,"<router-link>"),s(" \u6807\u7B7E\u6765\u8FDB\u884C\u8DEF\u7531\u7684\u8DF3\u8F6C\uFF0C\u4F46\u662F\u8DEF\u5F84\u8981\u5199\u5168\uFF0C\u5982\u4E0B\uFF1A")],-1),f=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("router-link")]),s(),n("span",{class:"token attr-name"},"to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/home/news"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("News"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("router-link")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),b=n("h2",{id:"\u547D\u540D\u8DEF\u7531",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u547D\u540D\u8DEF\u7531","aria-hidden":"true"},"#"),s(" \u547D\u540D\u8DEF\u7531")],-1),x=n("p",null,"\u6709\u65F6\u5019\uFF0C\u901A\u8FC7\u4E00\u4E2A\u540D\u79F0\u6765\u6807\u8BC6\u4E00\u4E2A\u8DEF\u7531\u663E\u5F97\u66F4\u65B9\u4FBF\u4E00\u4E9B\uFF0C\u7279\u522B\u662F\u5728\u94FE\u63A5\u4E00\u4E2A\u8DEF\u7531\uFF0C\u6216\u8005\u662F\u6267\u884C\u4E00\u4E9B\u8DF3\u8F6C\u7684\u65F6\u5019\u3002\u4F60\u53EF\u4EE5\u5728\u521B\u5EFA Router \u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5728 routes \u914D\u7F6E\u4E2D\u7ED9\u67D0\u4E2A\u8DEF\u7531\u8BBE\u7F6E\u540D\u79F0\u3002",-1),$=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'guanyu'"),n("span",{class:"token punctuation"},","),s(`
			path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/about'"),n("span",{class:"token punctuation"},","),s(`
			component`),n("span",{class:"token operator"},":"),s(`About
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),q=n("p",null,[s("\u53EA\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A"),n("code",null,"name"),s(" \u5C5E\u6027\u5C31\u53EF\u4EE5\u4E86\u3002")],-1),H=n("p",null,[s("\u6B64\u65F6\u5728\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"<router-link>"),s(" \u7684 "),n("code",null,"name"),s(" \u5C5E\u6027\u3002")],-1),V=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("router-link")]),s(),n("span",{class:"token attr-name"},":to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{name: "),n("span",{class:"token punctuation"},"'"),s("guanyu"),n("span",{class:"token punctuation"},"'"),s("}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("router-link")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),A=n("h2",{id:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7F16\u7A0B\u5F0F\u5BFC\u822A","aria-hidden":"true"},"#"),s(" \u7F16\u7A0B\u5F0F\u5BFC\u822A")],-1),R=n("p",null,[s("\u4E0A\u9762\u7684\u6848\u4F8B\u90FD\u662F\u4F7F\u7528 "),n("code",null,"<router-link>"),s(" \u6807\u7B7E\u6765\u5B8C\u6210\u7684\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u4F46\u662F\u5728\u5F00\u53D1\u4E2D\u4E0D\u53EF\u80FD\u90FD\u662F\u901A\u8FC7\u70B9\u51FB\u6765\u8FDB\u884C\u8DEF\u7531\u7684\u8DF3\u8F6C\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u7F16\u5199\u4EE3\u7801\u6765\u5B9E\u73B0\u8DEF\u7531\u7684\u8DF3\u8F6C\u3002")],-1),L=n("p",null,"\u901A\u8FC7\u7F16\u7801\u5B9E\u73B0\u8DEF\u7531\u8DF3\u8F6C\u6709\u4E24\u79CD\u65B9\u5F0F\u3002",-1),D=n("ol",null,[n("li",null,[n("p",null,"router.push"),n("p",null,[s("\u5728 "),n("code",null,"Vue"),s(" \u5B9E\u4F8B\u5185\u90E8\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"$route"),s(" \u8BBF\u95EE\u8DEF\u7531\u5B9E\u4F8B\uFF0C\u8C03\u7528\u5B83\u91CC\u9762\u7684 "),n("code",null,"push"),s(" \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u58F0\u660E\u5F0F"),n("th",null,"\u7F16\u7A0B\u5F0F")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,'<router-link :to="...">')]),n("td",null,[n("code",null,"router.push(...)")])])])]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/about'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'guanyu'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u5C31\u662F path \u7684\u5F62\u5F0F"),s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/about"'),n("span",{class:"token punctuation"},")"),s(`
`)])])]),n("p",null,[s("\u4F7F\u7528 "),n("code",null,"router.push"),s(" \uFF0C\u4F1A\u5411 history \u6808\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8BB0\u5F55\uFF0C\u6240\u4EE5\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u6D4F\u89C8\u5668\u56DE\u9000\u6309\u94AE\u65F6\uFF0C\u5219\u8FD4\u56DE\u4E4B\u524D\u7684URL")]),n("p",null,[s("\u5F53\u4F60\u70B9\u51FB "),n("code",null,"<router-link>"),s(" \u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5728\u5185\u90E8\u8C03\u7528\uFF0C\u6240\u4EE5\u8BF4\uFF0C\u70B9\u51FB "),n("code",null,'<router-link :to="...">'),s(" \u7B49\u540C\u4E8E\u8C03\u7528 router.push(...)\u3002")])]),n("li",null,[n("p",null,"router.replace"),n("p",null,"\u8DDF router.push \u5F88\u50CF\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u5C31\u662F\uFF0C\u5B83\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55\uFF0C\u800C\u662F\u8DDF\u5B83\u7684\u65B9\u6CD5\u540D\u4E00\u6837 \u2014\u2014 \u66FF\u6362\u6389\u5F53\u524D\u7684 history \u8BB0\u5F55\u3002"),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u58F0\u660E\u5F0F"),n("th",null,"\u7F16\u7A0B\u5F0F")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,'<router-link :to="..." replace>')]),n("td",null,[n("code",null,"router.replace(...)")])])])]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/about'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'guanyu'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u5C31\u662F path \u7684\u5F62\u5F0F"),s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/about"'),n("span",{class:"token punctuation"},")"),s(`
`)])])])]),n("li",null,[n("p",null,"router.go(n)"),n("p",null,"\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u610F\u601D\u662F\u5728 history \u8BB0\u5F55\u4E2D\u5411\u524D\u6216\u8005\u540E\u9000\u591A\u5C11\u6B65\uFF0C\u7C7B\u4F3C window.history.go(n)\u3002"),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u5728\u6D4F\u89C8\u5668\u8BB0\u5F55\u4E2D\u524D\u8FDB\u4E00\u6B65\uFF0C\u7B49\u540C\u4E8E history.forward()"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u540E\u9000\u4E00\u6B65\u8BB0\u5F55\uFF0C\u7B49\u540C\u4E8E history.back()"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u524D\u8FDB 3 \u6B65\u8BB0\u5F55"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u5982\u679C history \u8BB0\u5F55\u4E0D\u591F\u7528\uFF0C\u90A3\u5C31\u9ED8\u9ED8\u5730\u5931\u8D25\u5457"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),s(`
`)])])])])],-1),M=n("h2",{id:"\u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2","aria-hidden":"true"},"#"),s(" \u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2")],-1),E=n("p",null,"\u4E0A\u9762\u6240\u6709\u7684\u6848\u4F8B\u6545\u610F\u6CA1\u8BB2\u5230\u4F20\u53C2\uFF0C\u8FD9\u91CC\u6211\u4EEC\u540C\u610F\u6765\u8BF4\u4E00\u4E0B\u3002\u4F20\u53C2\u7684\u65B9\u5F0F\u4E3B\u8981\u6709\u4E09\u79CD\uFF1A",-1),N=n("h3",{id:"query\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#query\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" query\u65B9\u5F0F")],-1),T=n("p",null,[s("query\u65B9\u5F0F\u53C8\u5305\u542B\u4E24\u79CD\uFF0C "),n("code",null,"<router-link>"),s(" \u6807\u7B7E\u548C \u5BFC\u822A\u5F0F\u7F16\u7A0B\u3002")],-1),B=n("ul",null,[n("li",null,[n("p",null,[s("1 "),n("code",null,"<router-link>"),s(" \u6807\u7B7E\u65B9\u5F0F")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// Message \u7EC4\u4EF6"),s(`
`),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        messageList`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'001'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F001'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'002'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F002'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'003'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F003'"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])]),n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`
`),n("span",{class:"token operator"},"<"),s("li v-for"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m in messageList"'),s(" :key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m.id"'),n("span",{class:"token operator"},">"),s(`
    //\u8DF3\u8F6C\u8DEF\u7531\u5E76\u643A\u5E26query\u53C2\u6570\uFF0Cto\u7684\u5B57\u7B26\u4E32\u5199\u6CD5
    `),n("span",{class:"token operator"},"<"),s("router-link :to"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),s("/home/message/detail?id"),n("span",{class:"token operator"},"="),s("$"),n("span",{class:"token punctuation"},"{"),s("m.id"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"&"),n("span",{class:"token assign-left variable"},"title"),n("span",{class:"token operator"},"="),s("$"),n("span",{class:"token punctuation"},"{"),s("m.title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token variable"},"`")]),s('"')]),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m.title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),s("/router-link"),n("span",{class:"token operator"},">"),s(`
    

    //\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5BF9\u8C61\u7684\u65B9\u5F0F\u4F20\u9012\u53C2\u6570
    `),n("span",{class:"token operator"},"<"),s("router-link :to"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},`"{
        path:'/home/message/detail',
        query:{
            id:m.id,
            title:m.title
        }
    }"`),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m.title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token operator"},"<"),s("/router-link"),n("span",{class:"token operator"},">"),s(`


    // \u4F7F\u7528\u547D\u540D\u8DEF\u7531
    `),n("span",{class:"token operator"},"<"),s("router-link :to"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},`"{
        name:'detail',
        query:{
            id:m.id,
            title:m.title
        }
    }"`),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m.title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token operator"},"<"),s("/router-link"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("/li"),n("span",{class:"token operator"},">"),s(`
`)])])]),n("p",null,"\u4E09\u79CD\u65B9\u5F0F\u4EFB\u9009"),n("p",null,"\u7ED3\u679C\uFF1A"),n("p",null,[n("img",{src:p,alt:"query"})])]),n("li",null,[n("p",null,"2 \u7F16\u7A0B\u5F0F\u5BFC\u822A\u65B9\u5F0F"),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token operator"},"<"),s("li v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m in messageList"'),s(),n("span",{class:"token operator"},":"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m.id"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("a @click"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"clickEvent(m.id,m.title)"'),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
`)])])]),n("p",null,[s("\u7ED9"),n("code",null,"a"),s(" \u6807\u7B7E\u7ED1\u5B9A\u4E8B\u4EF6")]),n("p",null,[s("\u4F7F\u7528 "),n("code",null,"this.$router.push"),s(" \u6216 "),n("code",null,"this.$router.replace")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Message'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
			messageList`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'001'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F001'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'002'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F002'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'003'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F003'"),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	methods`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"clickEvent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("id"),n("span",{class:"token punctuation"},","),s("title")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// this.$router.push({path:'/home/message/detail',query:{"),s(`
			`),n("span",{class:"token comment"},"// 		id,"),s(`
			`),n("span",{class:"token comment"},"// 		title"),s(`
			`),n("span",{class:"token comment"},"// }})"),s(`


			`),n("span",{class:"token comment"},"// this.$router.push({name:'Detail',query:{"),s(`
			`),n("span",{class:"token comment"},"// 		id:id,"),s(`
			`),n("span",{class:"token comment"},"// 		title:title"),s(`
			`),n("span",{class:"token comment"},"// }})"),s(`

			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("path"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home/message/detail'"),n("span",{class:"token punctuation"},","),s("query"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
					id`),n("span",{class:"token operator"},":"),s("id"),n("span",{class:"token punctuation"},","),s(`
					title`),n("span",{class:"token operator"},":"),s(`title
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`


			`),n("span",{class:"token comment"},"// this.$router.replace({name:'Detail',query:{"),s(`
			`),n("span",{class:"token comment"},"// 		id:id,"),s(`
			`),n("span",{class:"token comment"},"// 		title:title"),s(`
			`),n("span",{class:"token comment"},"// }})"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])])])],-1),F=n("p",null,"\u83B7\u53D6\u53C2\u6570\u90FD\u662F\u4E00\u6837\u7684",-1),I=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("$route"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s(`id
$route`),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s(`title
`)])])],-1),S=n("h3",{id:"params\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#params\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" params\u65B9\u5F0F")],-1),U=n("p",null,[n("code",null,"params"),s(" \u65B9\u5F0F\u548C "),n("code",null,"query"),s(" \u7C7B\u4F3C\uFF0C\u4E5F\u5305\u542B\u4E24\u79CD\u65B9\u5F0F\uFF1A"),n("code",null,"<router-link>"),s(" \u548C \u7F16\u7A0B\u5F0F\u5BFC\u822A\u3002")],-1),C=n("p",null,[s("\u9996\u5148\u8981\u5728\u8DEF\u7531\u914D\u7F6E\u4E2D\u4F7F\u7528\u5360\u4F4D\u7B26 "),n("code",null,":"),s(" \u63A5\u6536params\u53C2\u6570")],-1),P=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
			path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),s(`
			component`),n("span",{class:"token operator"},":"),s("Home"),n("span",{class:"token punctuation"},","),s(`
			children`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'news'"),n("span",{class:"token punctuation"},","),s(`
					component`),n("span",{class:"token operator"},":"),s("News"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),s(`
					component`),n("span",{class:"token operator"},":"),s("Message"),n("span",{class:"token punctuation"},","),s(`
					children`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Detail'"),n("span",{class:"token punctuation"},","),s(`
							path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'detail/:id/:title'"),n("span",{class:"token punctuation"},","),s(`
							component`),n("span",{class:"token operator"},":"),s("Detail"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),z=n("ol",null,[n("li",null,[n("p",null,[n("code",null,"<router-link>"),s(" \u65B9\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token operator"},"<"),s("li v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m in messageList"'),s(),n("span",{class:"token operator"},":"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m.id"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token comment"},"// \u76F4\u63A5\u5728\u8DEF\u5F84\u540E\u9762\u5199\u53C2\u6570\uFF0C\u5206\u522B\u4F1A\u5C06 m.id\u3001m.title\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9detail\u7EC4\u4EF6"),s(`
    `),n("span",{class:"token operator"},"<"),s("router"),n("span",{class:"token operator"},"-"),s("link "),n("span",{class:"token operator"},":"),s("to"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"`/home/message/detail/${m.id}/${m.title}`"'),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("router"),n("span",{class:"token operator"},"-"),s("link"),n("span",{class:"token operator"},">"),s(`

    `),n("span",{class:"token comment"},"// to \u7684\u5BF9\u8C61\u5199\u6CD5"),s(`
    `),n("span",{class:"token operator"},"<"),s("router"),n("span",{class:"token operator"},"-"),s("link "),n("span",{class:"token operator"},":"),s("to"),n("span",{class:"token operator"},"="),s('"'),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Detail'"),n("span",{class:"token punctuation"},","),s(`
        params`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s("m"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},","),s(`
            title`),n("span",{class:"token operator"},":"),s("m"),n("span",{class:"token punctuation"},"."),s(`title
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s('"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("router"),n("span",{class:"token operator"},"-"),s("link"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token comment"},"// \u5728 detail \u7EC4\u4EF6\u4E2D\u4F7F\u7528 this.$route.params.id \u83B7\u53D6\u6570\u636E"),s(`
`)])])]),n("p",null,[n("strong",null,[n("div",{style:{color:"red"}},"\u6CE8\u610F\uFF1A")])]),n("p",null,[s("\u8FD9\u91CC\u548C "),n("code",null,"query"),s(" \u6709\u533A\u522B\uFF0C"),n("code",null,"query"),s(" \u4F20\u9012\u53C2\u6570\uFF0C\u4F7F\u7528to\u7684\u5BF9\u8C61\u5199\u6CD5\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"path"),s(" \u4E5F\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"name"),s("\u3002")]),n("p",null,[s("\u4F46\u662F\u5728\u4F7F\u7528 "),n("code",null,"params"),s(" \u4F20\u9012\u65B9\u5F0F\uFF0C\u4F7F\u7528 "),n("code",null,"to"),s(" \u5C5E\u6027\u7684\u5BF9\u8C61\u5199\u6CD5\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528 "),n("code",null,"name"),s(" \u4E0D\u80FD\u4F7F\u7528 "),n("code",null,"path"),s(" \u5426\u5219\u4E0D\u751F\u6548\u3002\u540C\u6837\u7684\u89C4\u5219\u4E5F\u9002\u7528\u4E8E "),n("code",null,"\u7F16\u7A0B\u5F0F\u5BFC\u822A"),s("\u3002")])]),n("li",null,[n("p",null,"\u7F16\u7A0B\u5F0F\u5BFC\u822A\u65B9\u5F0F\uFF1A"),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("id"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"666"),s(`
title`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"\u4F60\u597D"'),s(`
`),n("span",{class:"token comment"},"// \u76F4\u63A5\u5728\u8DEF\u5F84\u540E\u9762\u5199\u53C2\u6570\uFF0C\u4F1A\u5C06 666\u4F20\u9012\u7ED9id\uFF0C\u4F60\u597D\u4F20\u9012\u7ED9 title"),s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$route"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("path"),n("span",{class:"token operator"},":"),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/home/message/detail/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$route"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("path"),n("span",{class:"token operator"},":"),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/home/message/detail/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])]),n("p",null,[n("code",null,"<router-link>"),s(" \u6807\u7B7E\u7684 "),n("code",null,"to"),s(" \u5C5E\u6027\u7684\u5BF9\u8C61\u5199\u6CD5\u89C4\u5219\uFF0C\u5728\u7F16\u7A0B\u5F0F\u5BFC\u822A\u4E2D\u4E00\u6837\u9002\u7528")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token operator"},"<"),s("li v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m in messageList"'),s(),n("span",{class:"token operator"},":"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"m.id"'),n("span",{class:"token operator"},">"),s(`		
    `),n("span",{class:"token operator"},"<"),s("a @click"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"clickEvent(m.id,m.title)"'),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("m"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`


`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Message'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
			messageList`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'001'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F001'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'002'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F002'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s("id"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'003'"),n("span",{class:"token punctuation"},","),s("title"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u6D88\u606F003'"),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	methods`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"clickEvent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("id"),n("span",{class:"token punctuation"},","),s("title")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
					name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Detail'"),n("span",{class:"token punctuation"},","),s(`
					params`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
						id`),n("span",{class:"token operator"},":"),s("id"),n("span",{class:"token punctuation"},","),s(`
						title`),n("span",{class:"token operator"},":"),s(`title
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`


			`),n("span",{class:"token comment"},"// this.$router.replace({"),s(`
			`),n("span",{class:"token comment"},"// 		name:'Detail',"),s(`
			`),n("span",{class:"token comment"},"// 		params:{"),s(`
			`),n("span",{class:"token comment"},"// 			id:id,"),s(`
			`),n("span",{class:"token comment"},"// 			title:title"),s(`
			`),n("span",{class:"token comment"},"// 		}"),s(`
			`),n("span",{class:"token comment"},"// 	})"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])])])],-1),G=n("p",null,"\u83B7\u53D6\u53C2\u6570\u7684\u65B9\u6CD5\u90FD\u662F\u4E00\u6837\u7684\uFF1A",-1),J=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$route"),n("span",{class:"token punctuation"},"."),s("params"),n("span",{class:"token punctuation"},"."),s(`id
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$route"),n("span",{class:"token punctuation"},"."),s("params"),n("span",{class:"token punctuation"},"."),s(`title
`)])])],-1),K=n("h3",{id:"props-\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#props-\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" props \u65B9\u5F0F")],-1),O=n("p",null,"\u4E3B\u8981\u6709\u4E09\u79CD\u5199\u6CD5\uFF0C\u6211\u4EEC\u4E00\u4E2A\u4E2A\u6765\u8FDB\u884C\u5206\u6790",-1),Q=n("ol",null,[n("li",null,[n("p",null,"props\u503C\u4E3A\u5BF9\u8C61"),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'About'"),n("span",{class:"token punctuation"},","),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/about'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(`About
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s("Home"),n("span",{class:"token punctuation"},","),s(`
            props`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s("a"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"900"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])]),n("p",null,[s("props\u503C\u4E3A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E2D\u6240\u6709\u7684key-value\u7684\u7EC4\u5408\u6700\u7EC8\u90FD\u4F1A\u901A\u8FC7 "),n("code",null,"props"),s(" \u4F20\u7ED9 "),n("code",null,"Home"),s(" \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u5728\u7EC4\u4EF6\u4E2D\u58F0\u660E "),n("code",null,"props"),s(" \u5373\u53EF")]),n("div",{class:"language-vue ext-vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token comment"},"<!-- Home -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("{{a}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
        props`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])]),n("p",null,"\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u592A\u7075\u6D3B\uFF0C\u5C06\u4F20\u9012\u7684\u6570\u636E\u5199\u6B7B\u4E86\uFF0C\u6240\u4EE5\u4E00\u822C\u4E0D\u7528\u8FD9\u79CD\u65B9\u5F0F")]),n("li",null,[n("p",null,"props\u503C\u4E3A\u5E03\u5C14\u503C"),n("p",null,[n("code",null,"props"),s(" \u503C\u5982\u679C\u4E3A true\uFF0C\u5219\u628A\u8DEF\u7531\u6536\u5230\u7684\u6240\u6709 "),n("code",null,"params"),s(" \u53C2\u6570\u901A\u8FC7 "),n("code",null,"props"),s(" \u4F20\u7ED9 "),n("code",null,"Home"),s(" \u7EC4\u4EF6\u3002")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'About'"),n("span",{class:"token punctuation"},","),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/about'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(`About
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home/:id/:title'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s("Home"),n("span",{class:"token punctuation"},","),s(`
            props`),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])]),n("p",null,"\u53C2\u6570\u4F20\u9012\uFF1A"),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// App "),s(`
`),n("span",{class:"token operator"},"<"),s("router"),n("span",{class:"token operator"},"-"),s(`link 
    `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"list-group-item"'),s(` 
    active`),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"active"'),s(` 
    `),n("span",{class:"token operator"},":"),s("to"),n("span",{class:"token operator"},"="),s('"'),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
        params`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'props:true'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s('"'),n("span",{class:"token operator"},">"),s("Home"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("router"),n("span",{class:"token operator"},"-"),s("link"),n("span",{class:"token operator"},">"),s(`
`)])])]),n("p",null,[n("code",null,"Home"),s(" \u7EC4\u4EF6\u63A5\u6536\u53C2\u6570\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u4F7F\u7528 "),n("code",null,"this.$route.params.xxx"),s(" \u4E86\u3002")]),n("div",{class:"language-vue ext-vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token comment"},"<!-- Home -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("{{id}}----{{title}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
        props`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])]),n("p",null,[s("\u8FD9\u79CD\u5199\u6CD5\u76F8\u5BF9\u6BD4\u4E0A\u4E00\u79CD\u4F20\u53C2\u66F4\u4E3A\u7B80\u4ECB\u7075\u6D3B "),n("div",{style:{color:"red"}},[s("\u4F46\u662F\u53EA\u80FD\u4F5C\u7528\u4E8E"),n("code",null,"params"),s("\u7C7B\u578B\u7684\u4F20\u53C2 \u65E0\u6CD5\u5BF9"),n("code",null,"query"),s("\u7C7B\u578B\u7684\u4F20\u53C2\u8D77\u4F5C\u7528")])])]),n("li",null,[n("p",null,"props\u503C\u4E3A\u51FD\u6570"),n("p",null,[s("\u5982\u679C "),n("code",null,"props"),s(" \u4E3A\u51FD\u6570\uFF0C\u90A3\u4E48\u8BE5\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u6BCF\u4E00\u7EC4 "),n("code",null,"key-value"),s(" \u90FD\u4F1A\u901A\u8FC7props\u4F20\u7ED9Home\u7EC4\u4EF6")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    routes`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'About'"),n("span",{class:"token punctuation"},","),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/about'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(`About
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
            path`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'/home/:id/:title'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s("Home"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token function"},"props"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"$route"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s("$route"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},","),s(`
                    title`),n("span",{class:"token operator"},":"),s("$route"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token comment"},"// \u8FD8\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E9B\u522B\u7684\u6570\u636E"),s(`
                    a`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                    b`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'hello'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])]),n("p",null,[s("props\u51FD\u6570\u4F1A\u81EA\u52A8\u8C03\u7528\u5E76\u63D0\u4F9B\u4E00\u4E2A "),n("code",null,"$route"),s(" \u53C2\u6570 \u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"$route"),s(" \u6765\u83B7\u53D6\u60F3\u8981\u7684\u6570\u636E\u4F20\u9012\u7ED9\u7EC4\u4EF6\u3002")]),n("p",null,[s("\u4F7F\u7528 "),n("code",null,"query"),s(" \u65B9\u5F0F\u4F20\u9012\u53C2\u6570:")]),n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// App"),s(`
`),n("span",{class:"token operator"},"<"),s("router"),n("span",{class:"token operator"},"-"),s(`link 
    `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"list-group-item"'),s(` 
    active`),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"active"'),s(` 
    `),n("span",{class:"token operator"},":"),s("to"),n("span",{class:"token operator"},"="),s('"'),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
        query`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'props\u4E3A\u51FD\u6570'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s('"'),n("span",{class:"token operator"},">"),s(`Home
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("router"),n("span",{class:"token operator"},"-"),s("link"),n("span",{class:"token operator"},">"),s(`
`)])])]),n("p",null,"\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528props\u63A5\u6536\u53C2\u6570"),n("div",{class:"language-vue ext-vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token comment"},"<!-- Home -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("{{id}}----{{title}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(`
        props`),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])]),n("p",null,[s("\u8FD9\u79CD\u65B9\u5F0F\u4F20\u9012\u6570\u636E\u66F4\u4E3A\u7075\u6D3B \u901A\u8FC7\u51FD\u6570\u7684 "),n("code",null,"$route"),s(" \u53C2\u6570\u6765\u83B7\u53D6\u9700\u8981\u7684\u6570\u636E\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u53E6\u5916\u8FD8\u53EF\u4EE5\u643A\u5E26\u4E00\u4E9B\u5176\u4ED6\u6570\u636E\u3002\u901A\u8FC7 "),n("code",null,"$route"),s(" \u53EF\u4EE5\u83B7\u53D6 "),n("code",null,"params"),s(" \u548C "),n("code",null,"query"),s(" \u4E24\u79CD\u5F62\u5F0F\u7684\u53C2\u6570\uFF0C\u76F8\u5BF9\u524D\u4E24\u79CD\u65B9\u5F0F\u6765\u8BF4\u529F\u80FD\u66F4\u52A0\u7684\u5F3A\u5927")])])],-1);function W(X,Y){return a(),t(o,null,[l,u,r,k,i,d,g,m,h,v,y,_,w,j,f,b,x,$,q,H,V,A,R,L,D,M,E,N,T,B,F,I,S,U,C,P,z,G,J,K,O,Q],64)}var sn=e(c,[["render",W]]);export{sn as default};
