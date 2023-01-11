import{e as n}from"./app.9006f5d8.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5355\u8868\u8BBF\u95EE\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u8868\u8BBF\u95EE\u65B9\u6CD5" aria-hidden="true">#</a> \u5355\u8868\u8BBF\u95EE\u65B9\u6CD5</h1><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u8868\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> single_table <span class="token punctuation">(</span>
 id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
 key1 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 key2 <span class="token keyword">INT</span><span class="token punctuation">,</span>
 key3 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 key_part1 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 key_part2 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 key_part3 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 common_field <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">KEY</span> idx_key1 <span class="token punctuation">(</span>key1<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> idx_key2 <span class="token punctuation">(</span>key2<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">KEY</span> idx_key3 <span class="token punctuation">(</span>key3<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">KEY</span> idx_key_part<span class="token punctuation">(</span>key_part1<span class="token punctuation">,</span> key_part2<span class="token punctuation">,</span> key_part3<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">Engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre></div><p>\u6211\u4EEC\u4E3A\u8FD9\u4E2A single_table \u8868\u5EFA\u7ACB\u4E861\u4E2A\u805A\u7C07\u7D22\u5F15\u548C4\u4E2A\u4E8C\u7EA7\u7D22\u5F15\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li>\u4E3A id \u5217\u5EFA\u7ACB\u7684\u805A\u7C07\u7D22\u5F15\u3002</li><li>\u4E3A key1 \u5217\u5EFA\u7ACB\u7684 idx_key1 \u4E8C\u7EA7\u7D22\u5F15\u3002</li><li>\u4E3A key2 \u5217\u5EFA\u7ACB\u7684 idx_key2 \u4E8C\u7EA7\u7D22\u5F15\uFF0C\u800C\u4E14\u8BE5\u7D22\u5F15\u662F\u552F\u4E00\u4E8C\u7EA7\u7D22\u5F15\u3002</li><li>\u4E3A key3 \u5217\u5EFA\u7ACB\u7684 idx_key3 \u4E8C\u7EA7\u7D22\u5F15\u3002</li><li>\u4E3A key_part1 \u3001 key_part2 \u3001 key_part3 \u5217\u5EFA\u7ACB\u7684 idx_key_part \u4E8C\u7EA7\u7D22\u5F15\uFF0C\u8FD9\u4E5F\u662F\u4E00\u4E2A\u8054\u5408\u7D22\u5F15\u3002</li></ul><p>\u7136\u540E\u6211\u4EEC\u9700\u8981\u4E3A\u8FD9\u4E2A\u8868\u63D2\u516510000\u884C\u8BB0\u5F55\uFF0C\u9664 id \u5217\u5916\u5176\u4F59\u7684\u5217\u90FD\u63D2\u5165\u968F\u673A\u503C\u5C31\u597D\u4E86\uFF0C\u5177\u4F53\u7684\u63D2\u5165\u8BED\u53E5\u6211\u5C31\u4E0D\u5199\u4E86\uFF0C\u81EA\u5DF1\u5199\u4E2A\u7A0B\u5E8F\u63D2\u5165\u5427\uFF08id\u5217\u662F\u81EA\u589E\u4E3B\u952E\u5217\uFF0C\u4E0D\u9700\u8981\u6211\u4EEC\u624B\u52A8\u63D2\u5165\uFF09\u3002</p><h2 id="\u8BBF\u95EE\u65B9\u6CD5\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u65B9\u6CD5\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u8BBF\u95EE\u65B9\u6CD5\u7684\u6982\u5FF5</h2><p>\u5BF9\u4E8E\u5355\u4E2A\u8868\u7684\u67E5\u8BE2\u6765\u8BF4\uFF0CMySQL\u628A\u67E5\u8BE2\u7684\u6267\u884C\u65B9\u5F0F\u5927\u81F4\u5206\u4E3A\u4E0B\u8FB9\u4E24\u79CD\uFF1A</p><ul><li><p>\u4F7F\u7528\u5168\u8868\u626B\u63CF\u8FDB\u884C\u67E5\u8BE2</p><p>\u8FD9\u79CD\u6267\u884C\u65B9\u5F0F\u5F88\u597D\u7406\u89E3\uFF0C\u5C31\u662F\u628A\u8868\u7684\u6BCF\u4E00\u884C\u8BB0\u5F55\u90FD\u626B\u4E00\u904D\u561B\uFF0C\u628A\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u8BB0\u5F55\u52A0\u5165\u5230\u7ED3\u679C\u96C6\u5C31\u5B8C\u4E86\u3002\u4E0D\u7BA1\u662F\u5565\u67E5\u8BE2\u90FD\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u6267\u884C\uFF0C\u5F53\u7136\uFF0C\u8FD9\u79CD\u4E5F\u662F\u6700\u7B28\u7684\u6267\u884C\u65B9\u5F0F\u3002</p></li><li><p>\u4F7F\u7528\u7D22\u5F15\u8FDB\u884C\u67E5\u8BE2</p><p>\u56E0\u4E3A\u76F4\u63A5\u4F7F\u7528\u5168\u8868\u626B\u63CF\u7684\u65B9\u5F0F\u6267\u884C\u67E5\u8BE2\u8981\u904D\u5386\u597D\u591A\u8BB0\u5F55\uFF0C\u6240\u4EE5\u4EE3\u4EF7\u53EF\u80FD\u592A\u5927\u4E86\u3002\u5982\u679C\u67E5\u8BE2\u8BED\u53E5\u4E2D\u7684\u641C\u7D22\u6761\u4EF6\u53EF\u4EE5\u4F7F\u7528\u5230\u67D0\u4E2A\u7D22\u5F15\uFF0C\u90A3\u76F4\u63A5\u4F7F\u7528\u7D22\u5F15\u6765\u6267\u884C\u67E5\u8BE2\u53EF\u80FD\u4F1A\u52A0\u5FEB\u67E5\u8BE2\u6267\u884C\u7684\u65F6\u95F4\u3002\u4F7F\u7528\u7D22\u5F15\u6765\u6267\u884C\u67E5\u8BE2\u7684\u65B9\u5F0F\u4E94\u82B1\u516B\u95E8\uFF0C\u53C8\u53EF\u4EE5\u7EC6\u5206\u4E3A\u8BB8\u591A\u79CD\u7C7B\uFF1A</p><ul><li>\u9488\u5BF9\u4E3B\u952E\u6216\u552F\u4E00\u4E8C\u7EA7\u7D22\u5F15\u7684\u7B49\u503C\u67E5\u8BE2</li><li>\u9488\u5BF9\u666E\u901A\u4E8C\u7EA7\u7D22\u5F15\u7684\u7B49\u503C\u67E5\u8BE2</li><li>\u9488\u5BF9\u7D22\u5F15\u5217\u7684\u8303\u56F4\u67E5\u8BE2</li><li>\u76F4\u63A5\u626B\u63CF\u6574\u4E2A\u7D22\u5F15</li></ul></li></ul><p>MySQL \u6267\u884C\u67E5\u8BE2\u8BED\u53E5\u7684\u65B9\u5F0F\u79F0\u4E4B\u4E3A <code>\u8BBF\u95EE\u65B9\u6CD5</code> \u6216\u8005 <code>\u8BBF\u95EE\u7C7B\u578B</code>\u3002\u540C\u4E00\u4E2A\u67E5\u8BE2\u8BED\u53E5\u53EF\u80FD\u53EF\u4EE5\u4F7F\u7528\u591A\u79CD\u4E0D\u540C\u7684\u8BBF\u95EE\u65B9\u6CD5\u6765\u6267\u884C\uFF0C\u867D\u7136\u6700\u540E\u7684\u67E5\u8BE2\u7ED3\u679C\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u6267\u884C\u7684\u65F6\u95F4\u53EF\u80FD\u5DEE\u8FDC\u4E86\u3002</p><p>\u4E0B\u8FB9\u7EC6\u7EC6\u9053\u6765\u5404\u79CD <code>\u8BBF\u95EE\u65B9\u6CD5</code> \u7684\u5177\u4F53\u5185\u5BB9\u3002</p><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h2>`,12);function t(e,o){return p}var k=s(a,[["render",t]]);export{k as default};
