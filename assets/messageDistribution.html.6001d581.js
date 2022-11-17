import{e as n}from"./app.72bdf44a.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="rabbitmq\u9AD8\u7EA7\u4E4B\u6D88\u606F\u5206\u53D1" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u9AD8\u7EA7\u4E4B\u6D88\u606F\u5206\u53D1" aria-hidden="true">#</a> rabbitmq\u9AD8\u7EA7\u4E4B\u6D88\u606F\u5206\u53D1</h1><h2 id="\u6D88\u606F\u987A\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u987A\u5E8F\u6027" aria-hidden="true">#</a> \u6D88\u606F\u987A\u5E8F\u6027</h2><p>RabbitMq\u6CA1\u6709\u5C5E\u6027\u8BBE\u7F6E\u6D88\u606F\u7684\u987A\u5E8F\u6027\uFF0C\u6240\u4EE5\u5728\u6CA1\u6709\u524D\u63D0\u7684\u60C5\u51B5\u4E0B\u8BF4RabbitMq\u6D88\u606F\u7684\u6D88\u8D39\u5177\u6709\u987A\u5E8F\u6027\u662F\u9519\u8BEF\u7684\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6CA1\u6709\u91CD\u590D\u6D88\u8D39\u524D\u63D0\u4E0B\uFF0C\u751F\u4EA7\u8005\u53D1\u9001 msg1\u3001msg2\u3001msg3\uFF0C\u90A3\u4E48\u6D88\u8D39\u8005\u6D88\u8D39\u987A\u5E8F\u4E5F\u662Fmsg1\u3001msg2\u3001msg3\u3002</p><p>\u4F46\u662F\u8FD9\u79CD\u60C5\u51B5\u6BD5\u7ADF\u662F\u7406\u60F3\u7684\uFF0C\u800C\u8FD9\u79CD\u7406\u60F3\u60C5\u51B5\u5728\u5B9E\u9645\u4E2D\u5F88\u5BB9\u6613\u4F1A\u88AB\u6253\u7834\uFF0C\u4F8B\u5982\u6D88\u606F\u4E22\u5931\uFF0C\u7F51\u7EDC\u539F\u56E0\uFF0C\u5F02\u5E38\u53D1\u751F\uFF0C\u800C\u4E14\u4E5F\u662F\u5728\u4E00\u4E2A\u751F\u4EA7\u8005\u548C\u4E00\u4E2A\u6D88\u8D39\u8FD9\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u591A\u4E2A\u751F\u4EA7\u8005\u7684\u8BDD\uFF0C\u771F\u7684\u5C31\u65E0\u6CD5\u4FDD\u8BC1\u54EA\u4E2A\u6D88\u606F\u5148\u5230\u8FBEBroker\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u4FDD\u8BC1\u987A\u5E8F\u3002</p><p>\u4F8B\u4E3E\u4E00\u4E0B\u60C5\u51B5\uFF0C\u6253\u7834\u6D88\u8D39\u7684\u987A\u5E8F\u6027\u3002</p><p>\u751F\u4EA7\u8005\u4F7F\u7528\u4E86\u4E8B\u52A1\uFF0C\u4E14\u89E6\u53D1\u4E86\u56DE\u6EDA\uFF0C\u91CD\u65B0\u8865\u53D1\u6D88\u606F\u540E\uFF0C\u987A\u5E8F\u53EF\u80FD\u662F\u9519\u4E71\u7684\u3002</p><p>\u5F00\u542Fpublisher confirm\u540E\u51FA\u73B0\u8D85\u65F6\u3001\u4E2D\u65AD\u3001\u62D2\u7EDD\u3001nack\u547D\u4EE4\u7B49\uFF0C\u91CD\u65B0\u8865\u53D1\u6D88\u606F\u540E\uFF0C\u987A\u5E8F\u53EF\u80FD\u662F\u9519\u4E71\u7684\u3002</p><h2 id="\u6D88\u606F\u5206\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u5206\u53D1" aria-hidden="true">#</a> \u6D88\u606F\u5206\u53D1</h2><p>RocketMq\u6709\u591A\u4E2A\u6D88\u8D39\u8005\u7684\u65F6\u5019\uFF0C\u961F\u5217\u4F1A\u4EE5\u8F6E\u8BE2\u7684\u65B9\u5F0F\u5206\u53D1\u7ED9\u591A\u4E2A\u6D88\u8D39\u8005\u3002</p><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u53C2\u6570 <code>channel.basicQos()</code>\uFF0C<strong>\u8BE5\u65B9\u6CD5\u662F\u5141\u8BB8\u4FE1\u9053\u4E0A\u6D88\u8D39\u8005\u6700\u5927\u672A\u786E\u8BA4\u6D88\u606F\u6570\u91CF</strong>\u3002\u4ED6\u662F\u9488\u5BF9\u4FE1\u9053\u800C\u8A00\u7684\uFF0C\u4E00\u4E2A\u8FDE\u63A5\u53EF\u4EE5\u6709\u591A\u4E2A\u4FE1\u9053\uFF0C\u4E00\u4E2A\u4FE1\u9053\u53EF\u4EE5\u6709\u591A\u4E2A\u961F\u5217\u3002</p><p>channel.basicQos()\u53C2\u6570\u53EA\u9002\u7528\u4E8E\u63A8\u6A21\u5F0F\u7684\u6D88\u8D39\u65B9\u5F0F\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C<code>channel.basicQos(5)</code>\uFF0C\u4EE3\u8868\u8BE5\u4FE1\u9053\u4E0A\u7684\u5176\u4E2D\u4E00\u4E2A\u6D88\u8D39\u8005\u672A\u786E\u8BA4\u6570\u91CF\u8FBE\u52305\u540E\uFF0CRabbitMq\u5C31\u4E0D\u4F1A\u5411\u8FD9\u4E2A\u6D88\u8D39\u8005\u5728\u53D1\u9001\u4EFB\u4F55\u6D88\u606F\uFF0C\u76F4\u5230\u8BE5\u6D88\u8D39\u8005\u786E\u8BA4\u4E86\u4E00\u4E2A\u6D88\u606F\u540E\u8BA1\u6570\u5668\u51CF1\uFF0C\u4E4B\u540E\u624D\u53EF\u4EE5\u7EE7\u7EED\u63A5\u6536\u6D88\u606F\u3002</p><p>\u8BE5\u53C2\u6570\u67093\u4E2A\u91CD\u8F7D\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code> <span class="token keyword">void</span> <span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token keyword">int</span> var1<span class="token punctuation">,</span> <span class="token keyword">int</span> var2<span class="token punctuation">,</span> <span class="token keyword">boolean</span> var3<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
 
 <span class="token keyword">void</span> <span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token keyword">int</span> var1<span class="token punctuation">,</span> <span class="token keyword">boolean</span> var2<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
 
 <span class="token keyword">void</span> <span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token keyword">int</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6211\u4EEC\u4E0A\u9762\u8BF4\u7684\u90A3\u4E2A\u6570\u5B57\u5C31\u662F\u8BE5\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570 var1\uFF0C\u5728\u4ED6\u7684\u5B9E\u73B0\u7C7B AutorecoveringChannel \u91CC\u53C2\u6570\u540D\u53EB prefetchCount\uFF0C</p><p>\u5982\u679C\u4F7F\u7528 basicQos(int var1)\uFF0Cvar1\u4EE3\u8868\u6D88\u8D39\u8005\u6240\u80FD\u63A5\u6536\u672A\u786E\u8BA4\u6D88\u606F\u603B\u6570\uFF0C\u51990 \u4EE3\u8868\u6CA1\u6709\u4E0A\u9650\u3002</p><p>\u5982\u679C\u4F7F\u7528 basicQos(int var1, int var2, boolean var3)\uFF0C\u5728\u4ED6\u7684\u5B9E\u73B0\u7C7B\u91CC\u5B9E\u73B0\u5982\u4E0B\uFF0C\u4ED4\u7EC6\u770B\u4ED6\u7684\u53C2\u6570\u987A\u5E8F\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token keyword">int</span> prefetchSize<span class="token punctuation">,</span> <span class="token keyword">int</span> prefetchCount<span class="token punctuation">,</span> <span class="token keyword">boolean</span> global<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>global<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prefetchCountGlobal <span class="token operator">=</span> prefetchCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prefetchCountConsumer <span class="token operator">=</span> prefetchCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>delegate<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span>prefetchSize<span class="token punctuation">,</span> prefetchCount<span class="token punctuation">,</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>prefetchSize\u53C2\u6570\u662F\u6D88\u8D39\u8005\u6240\u80FD\u63A5\u6536\u672A\u786E\u8BA4\u6D88\u606F\u7684\u603B\u5927\u5C0F\uFF0C\u5355\u4F4D\u662FB\uFF0C\u540C\u6837\uFF0C\u8BBE\u7F6E0\u8868\u793A\u65E0\u4E0A\u9650\u3002</p><p>global\u53C2\u6570\u542B\u4E49\u5982\u4E0B:</p><table><thead><tr><th style="text-align:center;">global</th><th style="text-align:center;">Meaning of prefetch_count in AMQP 0-9-1</th><th style="text-align:center;">Meaning of prefetch_count in RabbitMQ</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>false</strong></td><td style="text-align:center;">\u4FE1\u9053\u4E0A\u7684\u6D88\u606F\u90FD\u8981\u9075\u5FAAprefetchCount\u503C</td><td style="text-align:center;">\u4FE1\u9053\u4E0A\u65B0\u7684\u6D88\u8D39\u8005\u9700\u8981\u9075\u5FAAprefetchCount\u503C</td></tr><tr><td style="text-align:center;">true</td><td style="text-align:center;">\u5F53\u524D\u8FDE\u63A5\u4E0A\u6240\u6709\u6D88\u8D39\u8005\u90FD\u8981\u9075\u5FAAprefetchCount\u503C</td><td style="text-align:center;">\u4FE1\u9053\u4E0A\u7684\u6D88\u606F\u90FD\u8981\u9075\u5FAAprefetchCount\u503C</td></tr></tbody></table><p>\u90A3\u4E48\u6211\u4EEC\u600E\u4E48\u4F7F\u7528\u5462\uFF1F</p><div class="language-java ext-java"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;my-queue1&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span>consumer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;my-queue2&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span>consumer2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u8FD9\u6837\u5199\u662F\u8BF4my-queue1\u548Cmy-queue2\u4E24\u4E2A\u961F\u5217\u91CC\u6700\u5927\u7684\u672A\u786E\u8BA4\u6D88\u606F\u603B\u662F\u5206\u522B\u90FD\u662F10.</strong></p><p><strong>\u518D\u6765\u4E00\u79CD\u590D\u6742\u7684\u5199\u6CD5</strong></p><div class="language-java ext-java"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;my-queue1&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span>consumer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;my-queue2&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span>consumer2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6BCF\u4E2A\u6D88\u8D39\u8005\u6700\u591A\u63A5\u65363\u4E2A\u672A\u786E\u8BA4\u7684\u6D88\u606F\uFF0C\u5F53\u524D\u8FD9\u4E2A\u4FE1\u9053\u6700\u5927\u53EF\u63A5\u65365\u4E2A\u672A\u786E\u8BA4\u7684\u6D88\u606F\u3002</p><p>\u8BBE\u7F6E\u4E3Atrue \u6307\u7684\u662F\u540C\u4E00\u4E2A\u8FDE\u63A5\u8303\u56F4\u5185\u6240\u6709\u4FE1\u9053\u4E0A\u672A\u786E\u8BA4\u6570\u91CF\u4E4B\u548C\u3002</p><p>\u8BBE\u7F6E\u4E3Afalse\u6307\u7684\u662F\u6BCF\u4E2A\u4FE1\u9053\u4E0A\u6BCF\u4E2A\u6D88\u8D39\u8005\u6700\u5927\u672A\u786E\u8BA4\u6570\u91CF\u3002</p><p>RabbitMq\u8BA1\u7B97\u8FD9\u4E9B\u6570\u91CF\u4E5F\u662F\u9700\u8981\u5360\u7528\u6027\u80FD\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E00\u822C\u6307\u5B9A\u7684false\uFF0C\u9ED8\u8BA4\u4E5F\u662Ffalse\u3002</p></div>`,27);function p(e,o){return t}var l=a(s,[["render",p]]);export{l as default};