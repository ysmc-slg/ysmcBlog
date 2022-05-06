import{e as t}from"./app.c132f2a4.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const d={},n=t('<p>\u4E0B\u9762\u914D\u7F6E\u9879\u8BF4\u660E\u5E76\u4E0D\u5168\uFF0C\u4E86\u89E3\u66F4\u591A\u8BF7\u68C0\u9605redis.conf\u3002</p><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th style="text-align:center;">\u914D\u7F6E\u9879</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;"><code>daemonize no</code></td><td style="text-align:center;">Redis \u9ED8\u8BA4\u4E0D\u662F\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\uFF0C<br>\u4F7F\u7528 yes \u542F\u7528\u5B88\u62A4\u8FDB\u7A0B</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;"><code>pidfile /var/run/redis.pid </code></td><td style="text-align:center;">\u5F53 Redis \u4EE5\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C\u65F6\uFF0CRedis \u9ED8\u8BA4\u4F1A\u628A pid \u5199\u5165 /var/run/redis.pid \u6587\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7 pidfile \u6307\u5B9A</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;"><code>port 6379</code></td><td style="text-align:center;">\u6307\u5B9A Redis \u76D1\u542C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 6379</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;"><code>bind 127.0.0.1</code></td><td style="text-align:center;">\u7ED1\u5B9A\u7684\u4E3B\u673A\u5730\u5740</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;"><code>timeout 300</code></td><td style="text-align:center;">\u5F53\u5BA2\u6237\u7AEF\u95F2\u7F6E\u591A\u957F\u79D2\u540E\u5173\u95ED\u8FDE\u63A5\uFF0C\u5982\u679C\u6307\u5B9A\u4E3A 0 \uFF0C\u8868\u793A\u5173\u95ED\u8BE5\u529F\u80FD</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;"><code>loglevel notice</code></td><td style="text-align:center;">\u6307\u5B9A\u65E5\u5FD7\u8BB0\u5F55\u7EA7\u522B\uFF0CRedis \u603B\u5171\u652F\u6301\u56DB\u4E2A\u7EA7\u522B\uFF1Adebug\u3001verbose\u3001notice\u3001warning\uFF0C\u9ED8\u8BA4\u4E3A notice</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:center;"><code>logfile stdout</code></td><td style="text-align:center;">\u65E5\u5FD7\u8BB0\u5F55\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u6807\u51C6\u8F93\u51FA\uFF0C\u5982\u679C\u914D\u7F6E Redis \u4E3A\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C\uFF0C\u800C\u8FD9\u91CC\u53C8\u914D\u7F6E\u4E3A\u65E5\u5FD7\u8BB0\u5F55\u65B9\u5F0F\u4E3A\u6807\u51C6\u8F93\u51FA\uFF0C\u5219\u65E5\u5FD7\u5C06\u4F1A\u53D1\u9001\u7ED9 /dev/null</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:center;"><code>databases 16</code></td><td style="text-align:center;">\u8BBE\u7F6E\u6570\u636E\u5E93\u7684\u6570\u91CF\uFF0C\u9ED8\u8BA4\u6570\u636E\u5E93\u4E3A16\uFF0C\u53EF\u4EE5\u4F7F\u7528SELECT \u547D\u4EE4\u5728\u8FDE\u63A5\u4E0A\u6307\u5B9A\u6570\u636E\u5E93id</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:center;"><code>save &lt;seconds&gt; &lt;changes&gt;</code> <br>Redis \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u4E2D\u63D0\u4F9B\u4E86\u4E09\u4E2A\u6761\u4EF6\uFF1A<br><code>save 900 1</code> <br><code>save 300 10</code> <br><code>save 60 10000</code></td><td style="text-align:center;">\u5206\u522B\u8868\u793A 900 \u79D2\uFF0815 \u5206\u949F\uFF09\u5185\u6709 1 \u4E2A\u66F4\u6539\uFF0C300 \u79D2\uFF085 \u5206\u949F\uFF09\u5185\u6709 10 \u4E2A\u66F4\u6539<br>\u4EE5\u53CA 60 \u79D2\u5185\u6709 10000 \u4E2A\u66F4\u6539\u3002\u6307\u5B9A\u5728\u591A\u957F\u65F6\u95F4\u5185\uFF0C\u6709\u591A\u5C11\u6B21\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5C31\u5C06\u6570\u636E\u540C\u6B65\u5230\u6570\u636E\u6587\u4EF6\uFF0C\u53EF\u4EE5\u591A\u4E2A\u6761\u4EF6\u914D\u5408</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:center;"><code>rdbcompression yes</code></td><td style="text-align:center;">\u6307\u5B9A\u5B58\u50A8\u81F3\u672C\u5730\u6570\u636E\u5E93\u65F6\u662F\u5426\u538B\u7F29\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E3A yes\uFF0C<br>Redis \u91C7\u7528 LZF \u538B\u7F29\uFF0C\u5982\u679C\u4E3A\u4E86\u8282\u7701 CPU \u65F6\u95F4\uFF0C\u53EF\u4EE5\u5173\u95ED\u8BE5\u9009\u9879\uFF0C\u4F46\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u6587\u4EF6\u53D8\u7684\u5DE8\u5927</td></tr><tr><td style="text-align:center;">11</td><td style="text-align:center;"><code>dbfilename dump.rdb</code></td><td style="text-align:center;">rdb\u6301\u4E45\u5316\u7684\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4E3Adump.rdb</td></tr><tr><td style="text-align:center;">12</td><td style="text-align:center;"><code>dir ./</code></td><td style="text-align:center;">\u6301\u4E45\u5316\u6587\u4EF6\u7684\u5B58\u653E\u76EE\u5F55</td></tr><tr><td style="text-align:center;">13</td><td style="text-align:center;"><code>slaveof &lt;masterip&gt; &lt;masterport&gt;</code></td><td style="text-align:center;">\u8BBE\u7F6E\u5F53\u672C\u673A\u4E3A slave \u670D\u52A1\u65F6\uFF0C\u8BBE\u7F6E master \u670D\u52A1\u7684 IP \u5730\u5740\u53CA\u7AEF\u53E3\uFF0C\u5728 Redis \u542F\u52A8\u65F6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u4ECE master \u8FDB\u884C\u6570\u636E\u540C\u6B65</td></tr><tr><td style="text-align:center;">14</td><td style="text-align:center;"><code>masterauth &lt;master-password&gt;</code></td><td style="text-align:center;">\u8BBE\u7F6E Redis \u8FDE\u63A5\u5BC6\u7801\uFF0C\u5982\u679C\u914D\u7F6E\u4E86\u8FDE\u63A5\u5BC6\u7801\uFF0C\u5BA2\u6237\u7AEF\u5728\u8FDE\u63A5 Redis \u65F6\u9700\u8981\u901A\u8FC7 AUTH \u547D\u4EE4\u63D0\u4F9B\u5BC6\u7801\uFF0C\u9ED8\u8BA4\u5173\u95ED</td></tr><tr><td style="text-align:center;">16</td><td style="text-align:center;"><code>maxclients 128</code></td><td style="text-align:center;">\u8BBE\u7F6E\u540C\u4E00\u65F6\u95F4\u6700\u5927\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA4\u65E0\u9650\u5236\uFF0CRedis \u53EF\u4EE5\u540C\u65F6\u6253\u5F00\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u4E3A Redis \u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\uFF0C\u5982\u679C\u8BBE\u7F6E maxclients 0\uFF0C\u8868\u793A\u4E0D\u4F5C\u9650\u5236\u3002\u5F53\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u5230\u8FBE\u9650\u5236\u65F6\uFF0CRedis \u4F1A\u5173\u95ED\u65B0\u7684\u8FDE\u63A5\u5E76\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE max number of clients reached \u9519\u8BEF\u4FE1\u606F</td></tr><tr><td style="text-align:center;">17</td><td style="text-align:center;"><code>maxmemory &lt;bytes&gt;</code></td><td style="text-align:center;">\u6307\u5B9A Redis \u6700\u5927\u5185\u5B58\u9650\u5236\uFF0CRedis \u5728\u542F\u52A8\u65F6\u4F1A\u628A\u6570\u636E\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\uFF0C\u8FBE\u5230\u6700\u5927\u5185\u5B58\u540E\uFF0CRedis \u4F1A\u5148\u5C1D\u8BD5\u6E05\u9664\u5DF2\u5230\u671F\u6216\u5373\u5C06\u5230\u671F\u7684 Key\uFF0C\u5F53\u6B64\u65B9\u6CD5\u5904\u7406 \u540E\uFF0C\u4ECD\u7136\u5230\u8FBE\u6700\u5927\u5185\u5B58\u8BBE\u7F6E\uFF0C\u5C06\u65E0\u6CD5\u518D\u8FDB\u884C\u5199\u5165\u64CD\u4F5C\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8FDB\u884C\u8BFB\u53D6\u64CD\u4F5C\u3002Redis \u65B0\u7684 vm \u673A\u5236\uFF0C\u4F1A\u628A Key \u5B58\u653E\u5185\u5B58\uFF0CValue \u4F1A\u5B58\u653E\u5728 swap \u533A</td></tr><tr><td style="text-align:center;">18</td><td style="text-align:center;"><code>appendonly no</code></td><td style="text-align:center;">\u6307\u5B9A\u662F\u5426\u5728\u6BCF\u6B21\u66F4\u65B0\u64CD\u4F5C\u540E\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\uFF0CRedis \u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u5F02\u6B65\u7684\u628A\u6570\u636E\u5199\u5165\u78C1\u76D8\uFF0C\u5982\u679C\u4E0D\u5F00\u542F\uFF0C\u53EF\u80FD\u4F1A\u5728\u65AD\u7535\u65F6\u5BFC\u81F4\u4E00\u6BB5\u65F6\u95F4\u5185\u7684\u6570\u636E\u4E22\u5931\u3002\u56E0\u4E3A redis \u672C\u8EAB\u540C\u6B65\u6570\u636E\u6587\u4EF6\u662F\u6309\u4E0A\u9762 save \u6761\u4EF6\u6765\u540C\u6B65\u7684\uFF0C\u6240\u4EE5\u6709\u7684\u6570\u636E\u4F1A\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\u3002\u9ED8\u8BA4\u4E3A no</td></tr><tr><td style="text-align:center;">19</td><td style="text-align:center;"><code>appendfilename appendonly.aof</code></td><td style="text-align:center;">\u6307\u5B9A\u66F4\u65B0\u65E5\u5FD7\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u4E3A appendonly.aof</td></tr><tr><td style="text-align:center;">20</td><td style="text-align:center;"><code>appendfsync everysec</code></td><td style="text-align:center;">\u6307\u5B9A\u66F4\u65B0\u65E5\u5FD7\u6761\u4EF6\uFF0C\u5171\u6709 3 \u4E2A\u53EF\u9009\u503C\uFF1A<br>no\uFF1A\u8868\u793A\u7B49\u64CD\u4F5C\u7CFB\u7EDF\u8FDB\u884C\u6570\u636E\u7F13\u5B58\u540C\u6B65\u5230\u78C1\u76D8\uFF08\u5FEB\uFF09<br>always\uFF1A\u8868\u793A\u6BCF\u6B21\u66F4\u65B0\u64CD\u4F5C\u540E\u624B\u52A8\u8C03\u7528 fsync() \u5C06\u6570\u636E\u5199\u5230\u78C1\u76D8\uFF08\u6162\uFF0C\u5B89\u5168\uFF09<br>everysec\uFF1A\u8868\u793A\u6BCF\u79D2\u540C\u6B65\u4E00\u6B21\uFF08\u6298\u4E2D\uFF0C\u9ED8\u8BA4\u503C\uFF09</td></tr><tr><td style="text-align:center;">21</td><td style="text-align:center;"><code>vm-enabled no</code></td><td style="text-align:center;">\u6307\u5B9A\u662F\u5426\u542F\u7528\u865A\u62DF\u5185\u5B58\u673A\u5236\uFF0C\u9ED8\u8BA4\u503C\u4E3A no\uFF0C\u7B80\u5355\u7684\u4ECB\u7ECD\u4E00\u4E0B\uFF0CVM \u673A\u5236\u5C06\u6570\u636E\u5206\u9875\u5B58\u653E\uFF0C\u7531 Redis \u5C06\u8BBF\u95EE\u91CF\u8F83\u5C11\u7684\u9875\u5373\u51B7\u6570\u636E swap \u5230\u78C1\u76D8\u4E0A\uFF0C\u8BBF\u95EE\u591A\u7684\u9875\u9762\u7531\u78C1\u76D8\u81EA\u52A8\u6362\u51FA\u5230\u5185\u5B58\u4E2D\uFF08\u5728\u540E\u9762\u7684\u6587\u7AE0\u6211\u4F1A\u4ED4\u7EC6\u5206\u6790 Redis \u7684 VM \u673A\u5236\uFF09</td></tr><tr><td style="text-align:center;">22</td><td style="text-align:center;"><code>vm-swap-file /tmp/redis.swap</code></td><td style="text-align:center;">\u865A\u62DF\u5185\u5B58\u6587\u4EF6\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u503C\u4E3A /tmp/redis.swap\uFF0C\u4E0D\u53EF\u591A\u4E2A Redis \u5B9E\u4F8B\u5171\u4EAB</td></tr><tr><td style="text-align:center;">23</td><td style="text-align:center;"><code>vm-max-memory 0</code></td><td style="text-align:center;">\u5C06\u6240\u6709\u5927\u4E8E vm-max-memory \u7684\u6570\u636E\u5B58\u5165\u865A\u62DF\u5185\u5B58\uFF0C\u65E0\u8BBA vm-max-memory \u8BBE\u7F6E\u591A\u5C0F\uFF0C\u6240\u6709\u7D22\u5F15\u6570\u636E\u90FD\u662F\u5185\u5B58\u5B58\u50A8\u7684(Redis \u7684\u7D22\u5F15\u6570\u636E \u5C31\u662F keys)\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53 vm-max-memory \u8BBE\u7F6E\u4E3A 0 \u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u662F\u6240\u6709 value \u90FD\u5B58\u5728\u4E8E\u78C1\u76D8\u3002\u9ED8\u8BA4\u503C\u4E3A 0</td></tr><tr><td style="text-align:center;">24</td><td style="text-align:center;"><code>vm-page-size 32</code></td><td style="text-align:center;">Redis swap \u6587\u4EF6\u5206\u6210\u4E86\u5F88\u591A\u7684 page\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u4FDD\u5B58\u5728\u591A\u4E2A page \u4E0A\u9762\uFF0C\u4F46\u4E00\u4E2A page \u4E0A\u4E0D\u80FD\u88AB\u591A\u4E2A\u5BF9\u8C61\u5171\u4EAB\uFF0Cvm-page-size \u662F\u8981\u6839\u636E\u5B58\u50A8\u7684 \u6570\u636E\u5927\u5C0F\u6765\u8BBE\u5B9A\u7684\uFF0C\u4F5C\u8005\u5EFA\u8BAE\u5982\u679C\u5B58\u50A8\u5F88\u591A\u5C0F\u5BF9\u8C61\uFF0Cpage \u5927\u5C0F\u6700\u597D\u8BBE\u7F6E\u4E3A 32 \u6216\u8005 64bytes\uFF1B\u5982\u679C\u5B58\u50A8\u5F88\u5927\u5927\u5BF9\u8C61\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u66F4\u5927\u7684 page\uFF0C\u5982\u679C\u4E0D\u786E\u5B9A\uFF0C\u5C31\u4F7F\u7528\u9ED8\u8BA4\u503C</td></tr><tr><td style="text-align:center;">25</td><td style="text-align:center;"><code>vm-pages 134217728</code></td><td style="text-align:center;">\u8BBE\u7F6E swap \u6587\u4EF6\u4E2D\u7684 page \u6570\u91CF\uFF0C\u7531\u4E8E\u9875\u8868\uFF08\u4E00\u79CD\u8868\u793A\u9875\u9762\u7A7A\u95F2\u6216\u4F7F\u7528\u7684 bitmap\uFF09\u662F\u5728\u653E\u5728\u5185\u5B58\u4E2D\u7684\uFF0C\uFF0C\u5728\u78C1\u76D8\u4E0A\u6BCF 8 \u4E2A pages \u5C06\u6D88\u8017 1byte \u7684\u5185\u5B58\u3002</td></tr><tr><td style="text-align:center;">26</td><td style="text-align:center;"><code>vm-max-threads 4</code></td><td style="text-align:center;">\u8BBE\u7F6E\u8BBF\u95EEswap\u6587\u4EF6\u7684\u7EBF\u7A0B\u6570,\u6700\u597D\u4E0D\u8981\u8D85\u8FC7\u673A\u5668\u7684\u6838\u6570,\u5982\u679C\u8BBE\u7F6E\u4E3A0,\u90A3\u4E48\u6240\u6709\u5BF9swap\u6587\u4EF6\u7684\u64CD\u4F5C\u90FD\u662F\u4E32\u884C\u7684\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u6BD4\u8F83\u957F\u65F6\u95F4\u7684\u5EF6\u8FDF\u3002\u9ED8\u8BA4\u503C\u4E3A4</td></tr><tr><td style="text-align:center;">27</td><td style="text-align:center;"><code>glueoutputbuf yes</code></td><td style="text-align:center;">\u8BBE\u7F6E\u5728\u5411\u5BA2\u6237\u7AEF\u5E94\u7B54\u65F6\uFF0C\u662F\u5426\u628A\u8F83\u5C0F\u7684\u5305\u5408\u5E76\u4E3A\u4E00\u4E2A\u5305\u53D1\u9001\uFF0C\u9ED8\u8BA4\u4E3A\u5F00\u542F</td></tr><tr><td style="text-align:center;">28</td><td style="text-align:center;">hash-max-zipmap-entries 64<br>hash-max-zipmap-value 512</td><td style="text-align:center;">\u6307\u5B9A\u5728\u8D85\u8FC7\u4E00\u5B9A\u7684\u6570\u91CF\u6216\u8005\u6700\u5927\u7684\u5143\u7D20\u8D85\u8FC7\u67D0\u4E00\u4E34\u754C\u503C\u65F6\uFF0C\u91C7\u7528\u4E00\u79CD\u7279\u6B8A\u7684\u54C8\u5E0C\u7B97\u6CD5</td></tr><tr><td style="text-align:center;">29</td><td style="text-align:center;"><code>activerehashing yes</code></td><td style="text-align:center;">\u6307\u5B9A\u662F\u5426\u6FC0\u6D3B\u91CD\u7F6E\u54C8\u5E0C\uFF0C\u9ED8\u8BA4\u4E3A\u5F00\u542F</td></tr><tr><td style="text-align:center;">30</td><td style="text-align:center;"><code>include /path/to/local.conf</code></td><td style="text-align:center;">\u6307\u5B9A\u5305\u542B\u5176\u5B83\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E3B\u673A\u4E0A\u591A\u4E2ARedis\u5B9E\u4F8B\u4E4B\u95F4\u4F7F\u7528\u540C\u4E00\u4EFD\u914D\u7F6E\u6587\u4EF6\uFF0C\u800C\u540C\u65F6\u5404\u4E2A\u5B9E\u4F8B\u53C8\u62E5\u6709\u81EA\u5DF1\u7684\u7279\u5B9A\u914D\u7F6E\u6587\u4EF6</td></tr></tbody></table>',2);function l(r,s){return n}var i=e(d,[["render",l]]);export{i as default};
