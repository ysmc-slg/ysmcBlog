import{c as s,o as n,a as e}from"./app.c132f2a4.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";const a={},r={class:"language-redis ext-redis"},o=e("pre",{class:"language-redis"},[e("code",null,`keys *                     \u67E5\u770B\u5E93\u4E2D\u6240\u6709\u7684key
exists <key>               \u5224\u65AD\u67D0\u4E2Akey\u662F\u5426\u5B58\u5728
expire <key> <\u79D2\u949F>        \u4E3A\u7ED9\u5B9A\u7684key\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4
ttl <key>                  \u67E5\u770B\u8FD8\u6709\u591A\u5C11\u79D2\u8FC7\u671F\uFF0C-1\u8868\u793A\u6C38\u4E0D\u8FC7\u671F\uFF0C-2\u8868\u793A\u5DF2\u7ECF\u8FC7\u671F
type <key>                 \u67E5\u770Bkey\u662F\u4EC0\u4E48\u7C7B\u578B  
del <key>                  \u5220\u9664\u6307\u5B9A\u7684key\u6570\u636E
unlink <key>               \u6839\u636Evalue\u9009\u62E9\u975E\u963B\u585E\u5220\u9664
dbsize                     \u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u7684key\u6570\u91CF
flushdb                    \u6E05\u7A7A\u6570\u636E\u5E93
`)],-1),c=[o];function l(k,_){return n(),s("div",r,c)}var y=t(a,[["render",l]]);export{y as default};
