---
description: Vue3 和 Vue2 的差异
autoPrev: router
---

## 定义变量

Vue2 中，定义变量，可以按照如下方式：

```vue
<template>
    <div>hello 01!</div>
    <h1>{{msg}}</h1>
</template>

<script>
    export default {
        name: "My01",
        data(){
            return{
                msg: "hello javaboy!"
            }
        }
    }
</script>

<style scoped>

</style>
```

在 Vue3 中，按照如下方式来写：

```vue
<template>
    <div>
        <div>hello 01!</div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg">
    </div>
</template>

<script>
import {ref} from 'vue';

export default {
    name: "My02",
    /**
     * 我们以前在 Vue2 中定义的各种变量、方法、生命周期钩子函数等等，现在统一都在 setup 中进行定义
     *
     * 需要注意的是，所有定义的变量，方法等，都需要返回之后才可以使用
     */
    setup() {
        //注意，直接这样写，这个变量不是响应式数据
        // let msg = "hello vue3";
        let msg = ref("hello vue3");
        return {msg};
    }
}
</script>

<style scoped>

</style>
```

::: tip 注意

1. 变量定义，需要用到 `ref` 函数，该函数直接从 vue 中导入，如果不用 `ref` 函数，定义的变量不具备响应式的特征。
2. 所有定义的变量、方法等，都需要 return，否则用不了

:::

## 定义方法

在 Vue2 中，我们一般将方法定义在 methods 节点中，但是 Vue3 中，我们将方法定义在 `setup` 方法中，**尤其要注意，方法定义完成后，必须要返回方法名，否则方法用不了**

```vue
<template>
    <div>
        <div>hello 01!</div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg">
        <button @click="doLogin('zhangsan','123')">登录</button>
    </div>
</template>

<script>

    import {ref} from 'vue';

    export default {
        name: "My02",
        /**
         * 我们以前在 Vue2 中定义的各种变量、方法、生命周期钩子函数等等，现在统一都在 setup 中进行定义
         *
         * 需要注意的是，所有定义的变量，方法等，都需要返回之后才可以使用
         */
        setup() {
            //注意，直接这样写，这个变量不是响应式数据
            // let msg = "hello vue3";
            let msg = ref("hello vue3");

            const doLogin=(username,password)=>{
                console.log(username);
                console.log(password);
            }
            return {msg,doLogin};
        }
    }
</script>

<style scoped>

</style>
```

如上，像定义一个变量一样去定义方法，方法定义完成之后，一定要返回。

## 钩子函数

在 Vue2 中，定义钩子函数，直接定义对应的方法名即可：

```vue
<template>
    <div>hello 01!</div>
    <h1>{{msg}}</h1>
</template>

<script>
    export default {
        name: "My01",
        data(){
            return{
                msg: "hello javaboy!"
            }
        },
        mounted() {
            console.log("=====Vue2=====mounted()==========")
        }
    }
</script>

<style scoped>

</style>
```

但是，在 Vue3 中，由于所有的东西都是在 setup 中定义的，包括钩子函数。

Vue3 中定义钩子函数：

```vue
<template>
    <div>
        <div>hello 01!</div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg">
        <button @click="doLogin('zhangsan','123')">登录</button>
    </div>
</template>

<script>

    import {ref} from 'vue';
    //使用钩子函数时，首先导入钩子函数
    import {onMounted} from 'vue';

    export default {
        name: "My02",
        setup() {
            let msg = ref("hello vue3");
            const doLogin=(username,password)=>{
                console.log(username);
                console.log(password);
            }

            onMounted(()=>{
                console.log("My02 初始化了。。。")
            })
            return {msg,doLogin};
        }
    }
</script>

<style scoped>

</style>
```

::: tip 注意

1. 首先从 vue 中导入钩子函数
2. 在 setup 方法中定义钩子函数的逻辑
3. 在 return 中，不需要返回钩子函数

:::

在 vue3 中钩子函数要加上on，钩子函数对照如下：

| Vue2 | Vue3  |
|------|------|
|   mounted   |   onMounted    |
|   beforeUpdate   |   onBeforeUpdate    |
|updated |	OnUpdated|
|beforeUnmount|	OnBeforeUnmounted|
|unmounted|	OnUnmounted|
|errorCapture	|OnErrorCapture|
|renderTracked|	OnRenderTracked|
|renderTriggered	|OnRenderTriggered|
|activated|	OnActivated|
|deactivated	|OnDeactivated|

## computed (计算属性)
计算属性和钩子函数比较类似，计算属性使用步骤：

1. 从 vue 中导入计算属性
2. 定义计算属性
3. 在 return 中返回计算属性值

```vue
<template>
    <div>
        <div>hello 01!</div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg">
        <button @click="doLogin('zhangsan','123')">登录</button>
        <div>{{currentTime}}</div>
    </div>
</template>

<script>

    import {ref} from 'vue';
    //使用钩子函数时，首先导入钩子函数
    //计算属性的使用，也需要首先导入计算属性
    import {computed} from 'vue';

    export default {
        name: "My02",
        setup() {
            //注意，直接这样写，这个变量不是响应式数据
            // let msg = "hello vue3";
            let msg = ref("hello vue3");
            let age = ref(99);
            const doLogin=(username,password)=>{
                console.log(username);
                console.log(password);
                age.value++;
                msg.value = 'hello javaboy!';
            }

            //现在就可以通过计算属性去定义一个变量了
            const currentTime=computed(()=>{
                age.value++;
                return Date.now();
            })
            //注意，计算属性需要在 return 中返回
            return {msg,doLogin,currentTime,age};
        }
    }
</script>

<style scoped>

</style>
```

由于生成计算属性 currentTime 依赖 age 变量，所以当 age 变量发生变化的时候，计算属性会自动更新，否则计算属性将一直使用缓存中的数据（age 没有发生变化的情况）。

另外还有一点，就是定义的变量入 age、msg 等 ，在 HTML 节点中，直接使用 age、msg，但是如果是在方法中操作这些变量，则一定要使用 age.value 或者 msg.value 去操作这些变量。

## watch 函数

```vue
<template>
    <div>
        <div>hello 01!</div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg">
        <button @click="doLogin('zhangsan','123')">登录</button>
        <div>{{currentTime}}</div>
    </div>
</template>

<script>

    import {ref} from 'vue';
    //使用钩子函数时，首先导入钩子函数
    //计算属性的使用，也需要首先导入计算属性
    import {watch} from 'vue';

    export default {
        name: "My02",
        setup() {
            //注意，直接这样写，这个变量不是响应式数据
            // let msg = "hello vue3";
            let msg = ref("hello vue3");
            let age = ref(99);
            const doLogin=(username,password)=>{
                console.log(username);
                console.log(password);
                age.value++;
                msg.value = 'hello javaboy!';
            }

            watch(age,(newValue,oldValue)=>{
                console.log("newValue", newValue);
                console.log("oldValue", oldValue);
            })
            //注意，计算属性需要在 return 中返回
            return {msg,doLogin,currentTime,age};
        }
    }
</script>

<style scoped>

</style>
```

1. 先从 vue 中导入 watch 函数。
2. 在 setup 中去监控变量，第一个参数是要监控的变量，第二个参数则是一个回调函数，回调函数的参数就是所监控变量值的变化。

## reactive

上面我们讲了定义变量使用 `ref`，`reactive` 是用来定义对象的，代码如下：

```vue
<template>
    <div>
        <div>{{age}}</div>
        <div>{{book.name}}</div>
        <div>{{book.author}}</div>
    </div>
</template>

<script>

    import {ref, reactive} from 'vue';

    export default {
        name: "My03",
        setup() {
            const age = ref(99);
            const book = reactive({
                name: "三国演义",
                author: '罗贯中'
            });
            return {age,book};
        }
    }
</script>

<style scoped>

</style>
```

一般来说，我们通过 ref 来定义一个变量，一般都是原始数据类型，例如 String、Number、BigInt、Boolean 等，通过 reactive 来定义一个对象。

如上面的案例所示，定义了 book 对象之后，接下来的访问中，通过 book.xxx 就可以访问到 book 中的属性值了。
但是，假设我们在定义的时候，定义的是 book 对象，但是我们访问的时候，却希望能够直接按照属性来访问，此时可以直接展开变量，但是，如果直接通过扩展运算符（...）去展开变量，会导致变量的响应式特点失效，此时，我们可以通过 toRefs 函数，让变量恢复响应式的特点：

```vue
<template>
    <div>
        <div>{{age}}</div>
        <div>{{name}}</div>
        <div>{{author}}</div>
        <button @click="updateBookInfo">更新图书信息</button>
    </div>
</template>

<script>

    import {ref, reactive,toRefs} from 'vue';

    export default {
        name: "My03",
        setup() {
            const age = ref(99);
            const book = reactive({
                name: "三国演义",
                author: '罗贯中'
            });
            const updateBookInfo = ()=>{
                //修改书名，注意，在 vue3 中，现在方法中访问变量，不再需要 this
                book.name = '三国演义123';
            }
            //如果直接这样写，会导致响应式失效，通过 toRefs 函数，可以解决这个问题
            return {age,...toRefs(book),updateBookInfo};
        }
    }
</script>

<style scoped>

</style>
```

::: tip 总结

1. ref 定义原始数据类型；reactive 定义对象。
2. 如果用到了对象展开，那么需要用到 toRefs 函数将对象中的属性变为响应式。
3. 在 vue3 中，定义的变量、函数等等，在使用的时候，都不需要 this。

:::


