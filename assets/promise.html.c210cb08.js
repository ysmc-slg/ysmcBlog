import{e as n}from"./app.5249b835.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n(`<h1 id="promise\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#promise\u5BF9\u8C61" aria-hidden="true">#</a> Promise\u5BF9\u8C61</h1><h2 id="promise-\u7684\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#promise-\u7684\u542B\u4E49" aria-hidden="true">#</a> Promise \u7684\u542B\u4E49</h2><p>\u6240\u8C13Promise\uFF0C\u7B80\u5355\u8BF4\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u91CC\u9762\u4FDD\u5B58\u7740\u67D0\u4E2A\u672A\u6765\u624D\u4F1A\u7ED3\u675F\u7684\u4E8B\u4EF6\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF09\u7684\u7ED3\u679C\u3002\u4ECE\u8BED\u6CD5\u4E0A\u8BF4\uFF0CPromise \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4ECE\u5B83\u53EF\u4EE5\u83B7\u53D6\u5F02\u6B65\u64CD\u4F5C\u7684\u6D88\u606F\u3002Promise \u63D0\u4F9B\u7EDF\u4E00\u7684 API\uFF0C\u5404\u79CD\u5F02\u6B65\u64CD\u4F5C\u90FD\u53EF\u4EE5\u7528\u540C\u6837\u7684\u65B9\u6CD5\u8FDB\u884C\u5904\u7406\u3002</p><p>Promise\u5BF9\u8C61\u6709\u4EE5\u4E0B\u4E24\u4E2A\u7279\u70B9\u3002</p><ol><li>\u5BF9\u8C61\u7684\u72B6\u6001\u4E0D\u53D7\u5916\u754C\u5F71\u54CD\u3002Promise\u5BF9\u8C61\u4EE3\u8868\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u6709\u4E09\u79CD\u72B6\u6001\uFF1Apending\uFF08\u8FDB\u884C\u4E2D\uFF09\u3001fulfilled\uFF08\u5DF2\u6210\u529F\uFF09\u548Crejected\uFF08\u5DF2\u5931\u8D25\uFF09\u3002\u53EA\u6709\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u5F53\u524D\u662F\u54EA\u4E00\u79CD\u72B6\u6001\uFF0C\u4EFB\u4F55\u5176\u4ED6\u64CD\u4F5C\u90FD\u65E0\u6CD5\u6539\u53D8\u8FD9\u4E2A\u72B6\u6001\u3002\u8FD9\u4E5F\u662FPromise\u8FD9\u4E2A\u540D\u5B57\u7684\u7531\u6765\uFF0C\u5B83\u7684\u82F1\u8BED\u610F\u601D\u5C31\u662F\u201C\u627F\u8BFA\u201D\uFF0C\u8868\u793A\u5176\u4ED6\u624B\u6BB5\u65E0\u6CD5\u6539\u53D8\u3002</li><li>\u4E00\u65E6\u72B6\u6001\u6539\u53D8\uFF0C\u5C31\u4E0D\u4F1A\u518D\u53D8\uFF0C\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u5F97\u5230\u8FD9\u4E2A\u7ED3\u679C\u3002Promise\u5BF9\u8C61\u7684\u72B6\u6001\u6539\u53D8\uFF0C\u53EA\u6709\u4E24\u79CD\u53EF\u80FD\uFF1A\u4ECEpending\u53D8\u4E3Afulfilled\u548C\u4ECEpending\u53D8\u4E3Arejected\u3002\u53EA\u8981\u8FD9\u4E24\u79CD\u60C5\u51B5\u53D1\u751F\uFF0C\u72B6\u6001\u5C31\u51DD\u56FA\u4E86\uFF0C\u4E0D\u4F1A\u518D\u53D8\u4E86\uFF0C\u4F1A\u4E00\u76F4\u4FDD\u6301\u8FD9\u4E2A\u7ED3\u679C\uFF0C\u8FD9\u65F6\u5C31\u79F0\u4E3A resolved\uFF08\u5DF2\u5B9A\u578B\uFF09\u3002\u5982\u679C\u6539\u53D8\u5DF2\u7ECF\u53D1\u751F\u4E86\uFF0C\u4F60\u518D\u5BF9Promise\u5BF9\u8C61\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570\uFF0C\u4E5F\u4F1A\u7ACB\u5373\u5F97\u5230\u8FD9\u4E2A\u7ED3\u679C\u3002\u8FD9\u4E0E\u4E8B\u4EF6\uFF08Event\uFF09\u5B8C\u5168\u4E0D\u540C\uFF0C\u4E8B\u4EF6\u7684\u7279\u70B9\u662F\uFF0C\u5982\u679C\u4F60\u9519\u8FC7\u4E86\u5B83\uFF0C\u518D\u53BB\u76D1\u542C\uFF0C\u662F\u5F97\u4E0D\u5230\u7ED3\u679C\u7684\u3002</li></ol><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p>ES6\u89C4\u5B9A\uFF0C<code>Promise</code> \u5BF9\u8C61\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u7528\u6765\u751F\u6210 <code>Promise</code> \u5B9E\u4F8B\u3002</p><p>\u4E0B\u9762\u4EE3\u7801\u521B\u9020\u4E86\u4E00\u4E2A <code>Promise</code> \u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... some code</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* \u5F02\u6B65\u64CD\u4F5C\u6210\u529F */</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>Promise</code>\u6784\u9020\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u4E24\u4E2A\u53C2\u6570\u5206\u522B\u662F<code>resolve</code>\u548C<code>reject</code>\u3002\u5B83\u4EEC\u662F\u4E24\u4E2A\u51FD\u6570\uFF0C\u7531 <code>JavaScript</code> \u5F15\u64CE\u63D0\u4F9B\uFF0C\u4E0D\u7528\u81EA\u5DF1\u90E8\u7F72\u3002</p><p><code>resolve</code>\u51FD\u6570\u7684\u4F5C\u7528\u662F\uFF0C\u5C06<code>Promise</code>\u5BF9\u8C61\u7684\u72B6\u6001\u4ECE\u201C\u672A\u5B8C\u6210\u201D\u53D8\u4E3A\u201C\u6210\u529F\u201D\uFF08\u5373\u4ECE <code>pending</code> \u53D8\u4E3A <code>resolved</code>\uFF09\uFF0C\u5728\u5F02\u6B65\u64CD\u4F5C\u6210\u529F\u65F6\u8C03\u7528\uFF0C\u5E76\u5C06\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u51FA\u53BB\uFF1B<code>reject</code>\u51FD\u6570\u7684\u4F5C\u7528\u662F\uFF0C\u5C06<code>Promise</code>\u5BF9\u8C61\u7684\u72B6\u6001\u4ECE\u201C\u672A\u5B8C\u6210\u201D\u53D8\u4E3A\u201C\u5931\u8D25\u201D\uFF08\u5373\u4ECE <code>pending</code> \u53D8\u4E3A <code>rejected</code>\uFF09\uFF0C\u5728\u5F02\u6B65\u64CD\u4F5C\u5931\u8D25\u65F6\u8C03\u7528\uFF0C\u5E76\u5C06\u5F02\u6B65\u64CD\u4F5C\u62A5\u51FA\u7684\u9519\u8BEF\uFF0C\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u51FA\u53BB\u3002</p><h2 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then" aria-hidden="true">#</a> Promise.prototype.then()</h2><p>Promise \u5B9E\u4F8B\u5177\u6709 <code>then</code> \u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>then</code> \u65B9\u6CD5\u662F\u5B9A\u4E49\u5728\u539F\u578B\u5BF9\u8C61 <code>Promise.prototype</code>\u4E0A\u7684\u3002</p><p>\u5B83\u7684\u4F5C\u7528\u662F\u4E3A <code>Promise</code> \u5B9E\u4F8B\u6DFB\u52A0\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u524D\u9762\u8BF4\u8FC7\uFF0C<code>then</code>\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F<code>resolved</code>\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F<code>rejected</code>\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5B83\u4EEC\u90FD\u662F\u53EF\u9009\u7684\u3002</p><p><code>then</code>\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684<code>Promise</code>\u5B9E\u4F8B\uFF08\u6CE8\u610F\uFF0C\u4E0D\u662F\u539F\u6765\u90A3\u4E2A<code>Promise</code>\u5B9E\u4F8B\uFF09\u3002\u56E0\u6B64\u53EF\u4EE5\u91C7\u7528\u94FE\u5F0F\u5199\u6CD5\uFF0C\u5373then\u65B9\u6CD5\u540E\u9762\u518D\u8C03\u7528\u53E6\u4E00\u4E2Athen\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&quot;/posts.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> json<span class="token punctuation">.</span>post<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,16);function o(p,t){return e}var r=s(a,[["render",o]]);export{r as default};
