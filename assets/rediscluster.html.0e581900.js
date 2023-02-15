import{e}from"./app.c7ffa9b7.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";const s={},a=e(`<h1 id="redis-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#redis-\u96C6\u7FA4" aria-hidden="true">#</a> Redis \u96C6\u7FA4</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>\u5173\u4E8E\u96C6\u7FA4\u6982\u5FF5\u95EE\u9898\uFF0C\u53EF\u4EE5\u770B https://blog.csdn.net/weixin_43798031/article/details/122555409</p><p>https://blog.csdn.net/qq_41432730/article/details/121591008</p><p>\u672C\u7BC7\u6587\u7AE0\u6211\u4EEC\u7740\u91CD\u4E8E\u96C6\u7FA4\u7684\u642D\u5EFA</p><h2 id="\u96C6\u7FA4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a> \u96C6\u7FA4\u642D\u5EFA</h2><p>\u9996\u5148\u6211\u4EEC\u5BF9\u96C6\u7FA4\u505A\u4E00\u4E2A\u7B80\u5355\u89C4\u5212\uFF0C\u5047\u8BBE\u6211\u7684\u96C6\u7FA4\u4E2D\u4E00\u5171\u6709\u4E09\u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9\u4E00\u4E2A\u4E3B\u673A\u4E00\u4E2A\u4ECE\u673A\uFF0C\u8FD9\u6837\u6211\u4E00\u5171\u9700\u8981 6 \u4E2A Redis \u5B9E\u4F8B\u3002\u9996\u5148\u521B\u5EFA redis-cluster \u6587\u4EF6\u5939\uFF0C\u5728\u8BE5\u6587\u4EF6\u5939\u4E0B\u5206\u522B\u521B\u5EFA 7001\u30017002\u30017003\u30017004\u30017005\u30017006 \u6587\u4EF6\u5939\uFF0C\u7528\u6765\u5B58\u653E\u6211\u7684 Redis \u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://img.zxqs.top/image-20230215231453570.png" alt="image-20230215231453570"></p><p>\u5C06 Redis \u4E5F\u5728 redis-cluster \u76EE\u5F55\u4E0B\u5B89\u88C5\u4E00\u4EFD\uFF0C\u7136\u540E\u5C06 redis.conf \u6587\u4EF6\u5411 7001-7006 \u8FD9 6 \u4E2A\u6587\u4EF6\u5939\u4E2D\u5206\u522B\u62F7\u8D1D\u4E00\u4EFD\uFF0C\u62F7\u8D1D\u5B8C\u6210\u540E\uFF0C\u5206\u522B\u4FEE\u6539\u5982\u4E0B\u53C2\u6570\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>port 700X
#bind 127.0.0.1
cluster-enabled yes
cluster-config-file nodes700X.conf
protected no
daemonize yes
</code></pre></div><p>\u4F7F\u7528\u547D\u4EE4\u4F9D\u6B21\u542F\u52A86\u4E2Aredis\u670D\u52A1\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>redis-server ../700X/redis.conf
</code></pre></div><p>\u542F\u52A8\u6210\u529F\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u770B redis \u8FDB\u7A0B\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://img.zxqs.top/image-20230215231919964.png" alt="image-20230215231919964"></p><p>\u8FD9\u4E2A\u8868\u793A\u5404\u4E2A\u8282\u70B9\u90FD\u542F\u52A8\u6210\u529F\u4E86\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u8FDB\u884C\u96C6\u7FA4\u7684\u521B\u5EFA\u4E86\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>redis-cli --cluster create 192.168.96.128:7001 192.168.96.128:7002 192.168.96.128:7003 192.168.96.128:7004 192.168.96.128:7005 192.168.96.128:7006  --cluster-replicas 1
</code></pre></div><p><code>--cluster-replicas 1</code> \u53C2\u6570\u8868\u793A\u5E0C\u671B\u6BCF\u4E2A\u4E3B\u670D\u52A1\u5668\u90FD\u6709\u4E00\u4E2A\u4ECE\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u5219\u4EE3\u8868 3 \u4E3B 3 \u4ECE\uFF0C\u901A\u8FC7\u8BE5\u65B9\u5F0F\u521B\u5EFA\u7684\u5E26\u6709\u4ECE\u8282\u70B9\u7684\u673A\u5668\u4E0D\u80FD\u591F\u81EA\u5DF1\u624B\u52A8\u6307\u5B9A\u4E3B\u8282\u70B9\uFF0Credis \u96C6\u7FA4\u4F1A\u5C3D\u91CF\u628A\u4E3B\u4ECE\u670D\u52A1\u5668\u5206\u914D\u5728\u4E0D\u540C\u673A\u5668\u4E0A:</p><p><img src="https://img.zxqs.top/image-20230215233130595.png" alt="image-20230215233130595"></p><p><strong>\u6CE8\u610F\uFF1A</strong></p><p>\u5982\u679Credis\u8BBE\u7F6E\u4E86\u5BC6\u7801\uFF0C\u9700\u8981\u52A0\u4E0A <code>-a \u5BC6\u7801</code> \u547D\u4EE4\u3002\u5426\u5219\u62A5\u9519\u3002</p><h2 id="\u67E5\u8BE2\u96C6\u7FA4\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u96C6\u7FA4\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u8BE2\u96C6\u7FA4\u4FE1\u606F</h2><p>\u96C6\u7FA4\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u767B\u5F55\u5230 Redis \u63A7\u5236\u53F0\u67E5\u770B\u96C6\u7FA4\u4FE1\u606F\uFF0C\u6CE8\u610F\u767B\u5F55\u65F6\u8981\u6DFB\u52A0 <code>-c</code> \u53C2\u6570\uFF0C\u8868\u793A\u4EE5\u96C6\u7FA4\u65B9\u5F0F\u8FDE\u63A5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>redis-cli -a 123456 -p 7001 -c
</code></pre></div><p>\u540C\u6837redis\u6709\u5BC6\u7801\u4E5F\u9700\u8981\u52A0\u4E0A\u5BC6\u7801\u3002</p><p>\u901A\u8FC7 <code>cluster info</code> \u53EF\u4EE5\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\u4FE1\u606F\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://img.zxqs.top/image-20230215233636023.png" alt="image-20230215233636023"></p><p>\u901A\u8FC7 <code>cluster nodes</code> \u67E5\u770B\u96C6\u7FA4\u8282\u70B9\u4FE1\u606F\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://img.zxqs.top/image-20230215233906514.png" alt="image-20230215233906514"></p><h2 id="\u6DFB\u52A0\u4E3B\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E3B\u8282\u70B9" aria-hidden="true">#</a> \u6DFB\u52A0\u4E3B\u8282\u70B9</h2><p>\u9996\u5148\u6211\u4EEC\u51C6\u5907\u4E00\u4E2A\u7AEF\u53E3\u4E3A 7007 \u7684\u4E3B\u8282\u70B9\u5E76\u542F\u52A8\uFF0C\u51C6\u5907\u65B9\u5F0F\u548C\u524D\u9762\u6B65\u9AA4\u4E00\u6837\uFF0C\u542F\u52A8\u6210\u529F\u540E\uFF0C\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u6DFB\u52A0\u4E3B\u8282\u70B9\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>edis-cli --cluster add-node 192.168.96.128:7007 192.168.96.128:7006  -a 123456
</code></pre></div><p>\u4E3B\u8282\u70B9\u6DFB\u52A0\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 cluster nodes \u547D\u4EE4\u67E5\u770B\u4E3B\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u6210\u529F\uFF0C\u6B64\u65F6\u65B0\u6DFB\u52A0\u7684\u8282\u70B9\u5E76\u6CA1\u6709\u6CA1\u6709\u5206\u914D\u5230 slot\u3002</p><p>\u4F7F\u7528\u547D\u4EE4\u7ED9\u65B0\u8282\u70B9\u5206\u914D\u66F9</p><div class="language-text ext-text"><pre class="language-text"><code>resis-cli -a 123456 --cluster reshard 192.168.96.128:7001 --cluster-form  &lt;7001\u7F16\u53F7&gt; --cluster-to  &lt;7007\u7F16\u53F7&gt; --cluster-slots 1024
</code></pre></div><p>\u76F8\u5F53\u4E8E\u5C06 7001 \u5206\u7ED9 7007 1024\u4E2A\u66F9\uFF0C\u7F16\u53F7\u5C31\u662F\u4E0B\u56FE\u6807\u8BB0\u7684\u8FD9\u79CD\u3002</p><p><img src="https://img.zxqs.top/image-20230215235229165.png" alt="image-20230215235229165"></p>`,36);function r(i,d){return a}var l=t(s,[["render",r]]);export{l as default};
