import{r as o,c as t,a,d as e,F as p,b as n,e as r,o as c}from"./app.b83ff720.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const u={},d=a("h1",{id:"copilot-tab-\u8865\u5168\u5728-markdown-\u4E2D\u4E0D\u751F\u6548",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#copilot-tab-\u8865\u5168\u5728-markdown-\u4E2D\u4E0D\u751F\u6548","aria-hidden":"true"},"#"),n(" Copilot tab \u8865\u5168\u5728 markdown \u4E2D\u4E0D\u751F\u6548")],-1),l=n("\u4F3C\u4E4E\u662F\u7531 "),m={href:"https://github.com/yzhang-gh/vscode-markdown/issues/1011",target:"_blank",rel:"noopener noreferrer"},k=n("Markdown all in one"),h=n(" \u63D2\u4EF6\u5F15\u8D77\u7684\u95EE\u9898\u3002"),g=r(`<h2 id="\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D" aria-hidden="true">#</a> \u4FEE\u590D</h2><p>\u6309\u4E0B <code>Ctrl + Shift + P</code> \u5E76\u641C\u7D22 <code>Preferences: Open Keyboard Shortcuts</code>\uFF0C\u8FDB\u5165\u8BE5\u754C\u9762\u540E\u5207\u6362\u81F3 <code>JSON</code> \u683C\u5F0F\uFF0C\u5E76\u8FFD\u52A0 <code>tab</code> \u914D\u7F6E\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;markdown.extension.onTabKey&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus &amp;&amp; !inlineSuggestionVisible &amp;&amp; !editorReadonly &amp;&amp; !editorTabMovesFocus &amp;&amp; !hasOtherSuggestions &amp;&amp; !hasSnippetCompletions &amp;&amp; !inSnippetMode &amp;&amp; !suggestWidgetVisible &amp;&amp; editorLangId == &#39;markdown&#39;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-markdown.extension.onTabKey&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus &amp;&amp; !editorReadonly &amp;&amp; !editorTabMovesFocus &amp;&amp; !hasOtherSuggestions &amp;&amp; !hasSnippetCompletions &amp;&amp; !inSnippetMode &amp;&amp; !suggestWidgetVisible &amp;&amp; editorLangId == &#39;markdown&#39;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,3);function _(b,q){const s=o("OutboundLink");return c(),t(p,null,[d,a("p",null,[l,a("a",m,[k,e(s)]),h]),g],64)}var w=i(u,[["render",_]]);export{w as default};