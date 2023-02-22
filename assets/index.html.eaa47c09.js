import{e as n}from"./app.443befc9.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<p>\u521B\u5EFA\u4E00\u4E2A<code>springboot</code>\u9879\u76EE\u7136\u540E\u5F15\u5165\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u9A8C\u8BC1\u6CE8\u89E3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-validation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F53\u7C7B\u5E76\u52A0\u4E0A\u54CD\u5E94\u7684\u6CE8\u89E3\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Channel</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * $column.columnComment
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> channelId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E20\u9053\u540D\u79F0
     */</span>
    <span class="token annotation punctuation">@NotEmpty</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> channelName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E20\u9053\u72B6\u6001 0\u542F\u52A8 1\u505C\u6B62
     */</span>
    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Max</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u72B6\u6001\u6700\u5927\u4E3A1&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Min</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u72B6\u6001\u6700\u5C0F\u4E3A0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> status<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E20\u9053\u7C7B\u578B 1\u7EBF\u4E0A\u6E20\u9053\uFF0C2\u7EBF\u4E0B\u6E20\u9053
     */</span>
    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Max</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u7C7B\u578B\u6700\u5927\u4E3A2&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Min</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u7C7B\u578B\u6700\u5C0F\u4E3A1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> type<span class="token punctuation">;</span>

  <span class="token comment">// ... \u7701\u7565 setter/getter\u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u521B\u5EFA\u6D4B\u8BD5\u7C7B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Channel</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Validated</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Channel</span> channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> channel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u5C31\u53EF\u4EE5\u8FDB\u884C\u6D4B\u8BD5\u4E86\uFF0C\u5F53\u6570\u636E\u4E0D\u7B26\u5408\u6761\u4EF6\u662F\uFF0C\u7A0B\u5E8F\u5C31\u4E0D\u4F1A\u5F80\u4E0B\u6267\u884C\uFF0C\u5982\u679C\u60F3\u5C06\u62A5\u9519\u4FE1\u606F\u8FD4\u56DE\u5230\u524D\u7AEF\u53EF\u518D\u521B\u5EFA\u4E00\u4E2A <code>\u5168\u5C40\u5F02\u5E38\u5904\u7406\u5668</code>\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@RestControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">GlobalExceptionHandler</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5F02\u5E38
     */</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">BindException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleBindException</span><span class="token punctuation">(</span><span class="token class-name">BindException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getAllErrors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5F02\u5E38
     */</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">MethodArgumentNotValidException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleMethodArgumentNotValidException</span><span class="token punctuation">(</span><span class="token class-name">MethodArgumentNotValidException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getBindingResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFieldError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
