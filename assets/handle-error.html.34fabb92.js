import{e}from"./app.b83ff720.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const a={},s=e(`<h1 id="\u5904\u7406-nginx-err" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406-nginx-err" aria-hidden="true">#</a> \u5904\u7406 Nginx ERR</h1><h2 id="net-err-incomplete-chunked-encoding" tabindex="-1"><a class="header-anchor" href="#net-err-incomplete-chunked-encoding" aria-hidden="true">#</a> Net::ERR_INCOMPLETE_CHUNKED_ENCODING</h2><h3 id="_1-\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3" tabindex="-1"><a class="header-anchor" href="#_1-\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3" aria-hidden="true">#</a> 1. \u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3</h3><p>\u9996\u5148\u67E5\u770B <code>nginx</code> \u7684\u65E5\u5FD7</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># tail -f error.log</span>
<span class="token number">2020</span>/07/08 <span class="token number">16</span>:43:44 <span class="token punctuation">[</span>crit<span class="token punctuation">]</span> <span class="token number">2176</span><span class="token comment">#0: *1 pwritev() &quot;/etc/nginx/proxy_temp/1/00/0000000001&quot; failed (28: No space left on device) while reading upstream</span>
</code></pre></div><p>\u63D0\u793A\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u518D\u9A8C\u8BC1\u78C1\u76D8\u7A7A\u95F4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">df</span> -h
<span class="token comment"># \u679C\u7136\u662F\u78C1\u76D8\u5360\u6EE1</span>
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        99G   96G  <span class="token number">2</span>.7G  <span class="token number">100</span>% /
</code></pre></div><p>\u6E05\u7406\u51FA\u4E00\u90E8\u5206\u7A7A\u95F4\u5373\u53EF\u4F7F\u7528\u4E86\u3002</p>`,8);function r(t,c){return s}var i=n(a,[["render",r]]);export{i as default};