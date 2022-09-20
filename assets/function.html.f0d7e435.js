import{e as n}from"./app.d32d5e82.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><h2 id="\u5E38\u7528\u6570\u503C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u6570\u503C\u51FD\u6570" aria-hidden="true">#</a> \u5E38\u7528\u6570\u503C\u51FD\u6570</h2><div class="language-sql ext-sql"><pre class="language-sql"><code>
<span class="token comment">-- 1. ABS(x) \u8FD4\u56DE x \u7684\u7EDD\u5BF9\u503C</span>
<span class="token keyword">SELECT</span> ABS<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">,</span>ABS<span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">from</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 2. sign(x) \u8FD4\u56DEX\u7684\u7B26\u53F7\u3002\u6B63\u6570\u8FD4\u56DE1\uFF0C\u8D1F\u6570\u8FD4\u56DE-1\uFF0C0\u8FD4\u56DE0</span>
<span class="token keyword">SELECT</span> SIGN<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">,</span>SIGN<span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 3. pi() \u8FD4\u56DE\u5706\u5468\u7387\u7684\u503C</span>
<span class="token keyword">SELECT</span> PI<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 4. ceil(x)\uFF0Cceiling(x) \u5411\u4E0A\u53D6\u6574\uFF0C\u5982\u679C x \u662F\u6574\u6570\uFF0C\u8FD4\u56DE\u503C\u5C31\u662F x</span>
<span class="token keyword">SELECT</span> CEIL<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>CEILING<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span><span class="token punctuation">,</span>CEIL<span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 5. floor(x) \u5411\u4E0B\u53D6\u6574\uFF0C\u5982\u679C x \u662F\u6574\u6570\uFF0C\u8FD4\u56DE\u503C\u5C31\u662F x</span>
<span class="token keyword">SELECT</span> FLOOR<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span><span class="token punctuation">,</span> FLOOR<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span><span class="token punctuation">,</span>FLOOR<span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 6. least(e1,e2,e3...) \u8FD4\u56DE\u5217\u8868\u4E2D\u7684\u6700\u5C0F\u503C</span>
<span class="token keyword">SELECT</span> LEAST<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 7. greatest(e1,e2,e3...) \u8FD4\u56DE\u5217\u8868\u4E2D\u7684\u6700\u5927\u503C</span>
<span class="token keyword">SELECT</span> greatest<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 8. mod(x,y) \u8FD4\u56DE x \u9664\u4EE5 y \u540E\u7684\u4F59\u6570</span>
<span class="token keyword">SELECT</span> <span class="token function">MOD</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 9. rand() \u8FD4\u56DE 0 ~ 1 \u7684\u968F\u673A\u503C\u3002</span>
<span class="token keyword">SELECT</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 10. rand(x) \u8FD4\u56DE 0 ~ 1 \u7684\u968F\u673A\u503C\uFF0C\u5176\u4E2D x \u7684\u503C\u7528\u4F5C\u79CD\u5B50\u503C\uFF0C\u76F8\u540C\u7684 x \u503C\u4F1A\u4EA7\u751F\u76F8\u540C\u7684\u968F\u673A\u6570</span>
<span class="token keyword">SELECT</span> RAND<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RAND<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 11. round(x) \u56DB\u820D\u4E94\u5165\uFF0C\u53D6\u6574</span>
<span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">22.45</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">22.78</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 12. round(x,y) \u56DB\u820D\u4E94\u5165\uFF0C\u5E76\u4FDD\u7559\u5230\u5C0F\u6570\u70B9\u540E y \u4F4D</span>
<span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">22.454</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">22.78</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 13. truncate(x,y) \u8FD4\u56DE\u6570\u5B57x\u622A\u65AD\u4E3Ay\u4F4D\u5C0F\u6570\u7684\u7ED3\u679C</span>
<span class="token keyword">SELECT</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">22.458</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5B57\u7B26\u4E32\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u51FD\u6570" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u51FD\u6570</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- 1. ascll(s) \u8FD4\u56DE\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684 ASCLL \u7801\u503C</span>
<span class="token keyword">SELECT</span> ASCII<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>ASCII<span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 2. concat(s1,s2,s3...) \u8FDE\u63A5s1,s2,s3\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D&#39;</span><span class="token punctuation">,</span>first_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>

<span class="token comment">-- 3. concat_ws(x,s1,s2...) \u540CCONCAT(s1,s2,...)\u51FD\u6570\uFF0C\u4F46\u662F\u6BCF\u4E2A\u5B57\u7B26\u4E32\u4E4B\u95F4\u8981\u52A0\u4E0Ax</span>
<span class="token keyword">SELECT</span> CONCAT_WS<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u4F60\u597D&#39;</span><span class="token punctuation">,</span>first_name<span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span> 

<span class="token comment">-- 4. insert(str,idx,len,replacestr) \u5C06\u5B57\u7B26\u4E32str\u4ECE\u7B2Cidx\u4F4D\u7F6E\u5F00\u59CB\uFF0Clen\u4E2A\u5B57\u7B26\u957F\u7684\u5B50\u4E32\u66FF\u6362\u4E3A\u5B57\u7B26\u4E32replacestr\u3002\u6CE8\u610F\uFF1A\u7D22\u5F15\u4ECE 1 \u5F00\u59CB</span>
<span class="token keyword">SELECT</span> <span class="token keyword">INSERT</span><span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;\u4F60\u597D&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 5. replace(str,a,b) \u7528\u5B57\u7B26\u4E32b\u66FF\u6362\u5B57\u7B26\u4E32str\u4E2D\u6240\u6709\u51FA\u73B0\u7684\u5B57\u7B26\u4E32a</span>
<span class="token keyword">SELECT</span> <span class="token keyword">REPLACE</span><span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 6. upper(s) \u6216 ucase(s) \u5C06\u5B57\u7B26\u4E32s\u7684\u6240\u6709\u5B57\u6BCD\u8F6C\u6210\u5927\u5199</span>
<span class="token keyword">SELECT</span> UPPER<span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 7. lower(s) \u6216 lcase(s) \u5C06\u5B57\u7B26\u4E32s\u7684\u6240\u6709\u5B57\u6BCD\u8F6C\u6210\u5C0F\u5199</span>
<span class="token keyword">SELECT</span> LOWER<span class="token punctuation">(</span><span class="token string">&#39;HELLO_MYSQL&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 8. left(str,n) \u8FD4\u56DE\u5B57\u7B26\u4E32 str \u6700\u5DE6\u8FB9\u7684 n \u4E2A\u5B57\u7B26</span>
<span class="token keyword">SELECT</span> <span class="token keyword">LEFT</span><span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 9. right(str,n) \u8FD4\u56DE\u5B57\u7B26\u4E32 str \u6700\u53F3\u8FB9\u7684 n \u4E2A\u5B57\u7B26</span>
<span class="token keyword">SELECT</span> <span class="token keyword">RIGHT</span><span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 10. lpad(str,len,pad) \u7528\u5B57\u7B26\u4E32pad\u5BF9str\u6700\u5DE6\u8FB9\u8FDB\u884C\u586B\u5145\uFF0C\u76F4\u5230str\u7684\u957F\u5EA6\u4E3Alen\u4E2A\u5B57\u7B26</span>
<span class="token keyword">SELECT</span> LPAD<span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 11. rpad(str,len,pad) \u7528\u5B57\u7B26\u4E32pad\u5BF9str\u6700\u53F3\u8FB9\u8FDB\u884C\u586B\u5145\uFF0C\u76F4\u5230str\u7684\u957F\u5EA6\u4E3Alen\u4E2A\u5B57\u7B26</span>
<span class="token keyword">SELECT</span> RPAD<span class="token punctuation">(</span><span class="token string">&#39;hello_mysql&#39;</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 12. ltrim(s) \u53BB\u6389\u5B57\u7B26\u4E32s\u5DE6\u4FA7\u7684\u7A7A\u683C</span>
<span class="token keyword">SELECT</span> LTRIM<span class="token punctuation">(</span><span class="token string">&#39;  _hello&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 13. rtrim(s) \u53BB\u6389\u5B57\u7B26\u4E32s\u53F3\u4FA7\u7684\u7A7A\u683C</span>
<span class="token keyword">SELECT</span> RTRIM<span class="token punctuation">(</span><span class="token string">&#39;hello_  &#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 14. trim(s) \u53BB\u6389\u5B57\u7B26\u4E32s\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u5C3E\u7684\u7A7A\u683C</span>
<span class="token keyword">SELECT</span> TRIM<span class="token punctuation">(</span><span class="token string">&#39;  _hello_  &#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 15. trim(s1 from s) \u53BB\u6389\u5B57\u7B26\u4E32s\u4E2D\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u5C3E\u7684 s1</span>
<span class="token keyword">SELECT</span> TRIM<span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span> <span class="token keyword">FROM</span> <span class="token string">&#39;_hello_&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 16. trim(leading s1 from s) \u53BB\u6389\u5B57\u7B26\u4E32s\uFF0C\u5F00\u59CB\u5904\u7684s1</span>
<span class="token keyword">SELECT</span> TRIM<span class="token punctuation">(</span>LEADING <span class="token string">&#39;_&#39;</span> <span class="token keyword">FROM</span> <span class="token string">&#39;_hello_&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 16. trim(trailing s1 from s) \u53BB\u6389\u5B57\u7B26\u4E32s\uFF0C\u7ED3\u5C3E\u5904\u7684s1</span>
<span class="token keyword">SELECT</span> TRIM<span class="token punctuation">(</span>TRAILING <span class="token string">&#39;_&#39;</span> <span class="token keyword">FROM</span> <span class="token string">&#39;_hello_&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 17. repeat(str,n) \u8FD4\u56DE str \u91CD\u590D n \u6B21\u7684\u7ED3\u679C</span>
<span class="token keyword">SELECT</span> <span class="token keyword">REPEAT</span><span class="token punctuation">(</span><span class="token string">&#39;hello,&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 18. SPACE(n) \u8FD4\u56DE n \u4E2A\u7A7A\u683C</span>
<span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>SPACE<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

<span class="token comment">-- 19. nullif(value1,value2) \u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5982\u679Cvalue1\u4E0Evalue2\u76F8\u7B49\uFF0C\u5219\u8FD4\u56DENULL\uFF0C\u5426\u5219\u8FD4\u56DEvalue1</span>

<span class="token keyword">SELECT</span> <span class="token keyword">NULLIF</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token keyword">NULLIF</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u65E5\u671F\u548C\u65F6\u95F4\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u548C\u65F6\u95F4\u51FD\u6570" aria-hidden="true">#</a> \u65E5\u671F\u548C\u65F6\u95F4\u51FD\u6570</h2><h3 id="\u83B7\u53D6\u65E5\u671F\u3001\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u65E5\u671F\u3001\u65F6\u95F4" aria-hidden="true">#</a> \u83B7\u53D6\u65E5\u671F\u3001\u65F6\u95F4</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- curdate()\uFF0Ccurrent_date() \u8FD4\u56DE\u5F53\u524D\u65E5\u671F\uFF0C\u53EA\u5305\u542B \u5E74\u3001\u6708\u3001\u65E5</span>
<span class="token keyword">SELECT</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
</code></pre></div>`,8);function t(o,e){return p}var k=s(a,[["render",t]]);export{k as default};
