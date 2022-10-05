import{e as n}from"./app.19b4a03f.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},p=n(`<p>\u73B0\u5728\u8BF4\u4E00\u4E0B\uFF0C\u901A\u8FC7 Java \u4EE3\u7801\u5C06 Bean \u6CE8\u518C\u5230 Spring \u5BB9\u5668\u4E2D\u3002</p><p>java \u914D\u7F6E\u8FD9\u79CD\u65B9\u6CD5\u5728 <code>Spring Boot</code> \u51FA\u73B0\u4E4B\u524D\uFF0C\u5176\u5B9E\u5F88\u5C11\u4F7F\u7528\uFF0C\u81EA\u4ECE\u6709\u4E86<code>Spring boot</code>\uFF0CJava\u914D\u7F6E\u5F00\u53D1\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5728 <code>Spring Boot</code> \u4E2D\uFF0C\u4E0D\u4F7F\u7528\u4E00\u884C <code>XML</code> \u914D\u7F6E\u3002</p><p>\u5047\u5982\u6211\u6709\u5982\u4E0B\u4E00\u4E2A <code>Bean</code>:</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SayHello</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 Java \u914D\u7F6E\u4E2D\uFF0C\u6211\u4EEC\u7528\u4E00\u4E2A Java \u914D\u7F6E\u7C7B\u53BB\u4EE3\u66FF\u4E4B\u524D\u7684 <code>applicationContext.xml</code> \u6587\u4EF6</p><p>\u9996\u5148\u5728\u914D\u7F6E\u7C7B\u4E0A\u6DFB\u52A0\u4E00\u4E2A <code>@Configuration</code> \u6CE8\u89E3\uFF0C\u8FD9\u4E2A\u6CE8\u89E3\u8868\u793A\u8FD9\u4E2A\u7C7B\u4E0D\u662F\u4E00\u4E2A\u666E\u901A\u7C7B\uFF0C\u800C\u662F\u4E00\u4E2A\u914D\u7F6E\u7C7B\uFF0C\u5B83\u7684\u4F5C\u7528\u76F8\u5F53\u4E8E <code>applicationContext.xml</code>\u3002\u7136\u540E\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u65B9\u6CD5\u4E0A\u6DFB\u52A0 <code>@Bean</code> \u6CE8\u89E3\uFF0C\u8868\u793A\u5C06\u8FD9\u4E2A\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u6CE8\u5165\u5230 <code>Spring</code> \u5BB9\u5668\u4E2D\u53BB\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>@Bean</code> \u6240\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u5C31\u76F8\u5F53\u4E8E<code>applicationContext.xml</code> \u4E2D\u7684 <code>bean</code> \u8282\u70B9\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">SayHello</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u65E2\u7136\u662F\u914D\u7F6E\u7C7B\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u9879\u76EE\u542F\u52A8\u65F6\u52A0\u8F7D\u914D\u7F6E\u7C7B\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestJavaConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">JavaConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SayHello</span> hello <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span> <span class="token class-name">SayHello</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">&quot;ysmc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u914D\u7F6E\u7684\u52A0\u8F7D\uFF0C\u662F\u4F7F\u7528<code>AnnotationConfigApplicationContext</code> \u6765\u5B9E\u73B0\u3002</p><p>\u5173\u4E8E Java \u914D\u7F6E\uFF0C\u8FD9\u91CC\u6709\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898\uFF1ABean \u7684\u540D\u5B57\u662F\u4EC0\u4E48\uFF1F</p><p>Bean \u7684\u9ED8\u8BA4\u540D\u79F0\u662F\u65B9\u6CD5\u540D\u3002\u4EE5\u4E0A\u9762\u7684\u6848\u4F8B\u4E3A\u4F8B\uFF0CBean \u7684\u540D\u5B57\u662F <code>sayHello</code>\u3002\u5982\u679C\u5F00\u53D1\u8005\u60F3\u81EA\u5B9A\u4E49<code>Bean</code> \u7684\u540D\u5B57\uFF0C\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u76F4\u63A5\u5728 <code>Bean</code> \u6CE8\u89E3\u4E2D\u8FDB\u884C\u914D\u7F6E\u3002\u5982\u4E0B\u914D\u7F6E\u8868\u793A\u4FEE\u6539 <code>Bean</code> \u7684\u540D\u5B57\u4E3A javaboy</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;javaboy&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">SayHello</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></div>`,10);function o(t,e){return p}var u=a(s,[["render",o]]);export{u as default};