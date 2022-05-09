import{e as n}from"./app.7fa656a9.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="springboot-\u6574\u5408web-\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#springboot-\u6574\u5408web-\u5F00\u53D1" aria-hidden="true">#</a> springboot \u6574\u5408web \u5F00\u53D1</h1><h2 id="\u6574\u5408-jackson" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408-jackson" aria-hidden="true">#</a> \u6574\u5408 Jackson</h2><p>SpringBoot \u4E2D\uFF0C\u5DF2\u7ECF\u5BF9 Jackson \u505A\u4E86\u81EA\u52A8\u5316\u914D\u7F6E\uFF0C<code>spring-boot-starter-web</code> \u4E2D\u4E5F\u5305\u542B\u4E86 Jackson \u4F9D\u8D56\uFF0C\u6240\u4EE5\u5728SpringBoot\u4E2D\u4EC0\u4E48\u90FD\u4E0D\u9700\u8981\u914D\u7F6E\u5C31\u53EF\u4EE5\u4F7F\u7528 Jackson\u3002</p><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u8BF4 Jackson \u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565 setter/getter \u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u4E2A User \u7C7B\uFF0C\u548C\u4E00\u4E2A Controller \u5E76\u4E14\u52A0\u4E0A <code>@RestController</code> \u6CE8\u89E3\uFF0C\u5C31\u53EF\u4EE5\u5C06\u5BF9\u8C61\u5E8F\u5217\u5316\u4E3A <code>json</code> \u5B57\u7B26\u4E32\u3002</p><p>\u8FD8\u53EF\u4EE5\u4F7F\u7528\u6CE8\u89E3\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">//@JsonIgnoreProperties({&quot;birthday&quot;,&quot;address&quot;})</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token comment">//@JsonProperty(value = &quot;name&quot;,index = 99)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">,</span>timezone <span class="token operator">=</span> <span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>

    <span class="token comment">//@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@JsonProperty</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">96</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th style="text-align:center;">\u6CE8\u89E3</th><th style="text-align:center;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">@JsonProperty</td><td style="text-align:center;">name\u5C5E\u6027\uFF0C\u6307\u5B9A\u5C5E\u6027\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316 \u65F6\u7684\u540D\u79F0\u3002index \u4EE3\u8868\u6392\u5217\u7684\u987A\u5E8F</td></tr><tr><td style="text-align:center;">@JsonFormat</td><td style="text-align:center;">\u65E5\u671F\u683C\u5F0F\u5316\u3002\u6CE8\u610F\u65F6\u533A\u95EE\u9898</td></tr><tr><td style="text-align:center;">@JsonIgnore</td><td style="text-align:center;">\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u65F6 \u5FFD\u7565\u67D0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5728\u4E00\u4E2A\u5C5E\u6027\u4E0A\u548C @JsonProperty \u53EA\u80FD\u4F7F\u7528\u4E00\u4E2A</td></tr><tr><td style="text-align:center;">@JsonIgnoreProperties</td><td style="text-align:center;">\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316 \u6279\u91CF\u5FFD\u7565\u5B57\u6BB5</td></tr></tbody></table><p>\u5982\u679C\u611F\u89C9\u6BCF\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90FD\u8981\u8BBE\u7F6E \u65E5\u671F \u7684\u683C\u5F0F\u3002\u4E5F\u53EF\u4EE5\u5168\u5C40\u914D\u7F6E\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonConfig</span> <span class="token punctuation">{</span>

    <span class="token class-name">ObjectMapper</span> <span class="token function">objectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ObjectMapper</span> objectMapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;GMT+8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> objectMapper<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
