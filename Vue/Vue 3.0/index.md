# Vue 3.0

## 组合式 API
Composition API 的设计理念就是把接口的可重复部分及其功能提取到可复用的代码段中，增加代码的可复用性、逻辑性。
- 语法
  - Hook
    - 将代码**按功能分块写，变量和方法在一起定义和调用**
    - Utils 和 Hook 的区别？
      - Utils 的工具函数脱离框架也能使用，hooks 和框架耦合配合业务定义，可以利用vue的生命周期，还有响应式。
    - Vue3 自定义 Hooks 和 Vue2 时代 Mixin 的关系？
      - Mixin 难以追溯的方法与属性！Vue3 自定义 Hooks 却可以
      - 无法向 Mixin 传递参数来改变逻辑，但是 Vue3 自定义 Hooks 却可以
      - Mixin 同名变量会被覆盖，Vue3 自定义 Hook 可以在引入的时候对同名变量重命名
  - 组件通信
    - provide/inject

## 双向数据绑定
- `v-model` 与 `defineModel` [3.4+]  
  `defineModel` 本质上就是一个语法糖，也是通过抛出事件来实现的。
- `v-model` 与 `defineProps`、`defineEmits` [3.4之前]
- 使用 vueuse 的双向绑定工具，`useVModel`
```js
import { useVModel } from "@vueuse/core";
const props = withDefaults(defineProps<FormProps>(), {
  data: () => ""
});
const emit = defineEmits(["update:data"]);
const data = useVModel(props, "data", emit);
```
- 当类型为对象时，有一种投机取巧的方案
```js
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({ user: "", region: "" })
});
// vue 规定所有的 prop 都遵循着单向绑定原则，直接修改 prop 时，Vue 会抛出警告。此处的写法仅仅是为了消除警告。
// 因为对一个 reactive 对象执行 ref，返回 Ref 对象的 value 值仍为传入的 reactive 对象，
// 即 newFormInline === props.formInline 为 true，所以此处代码的实际效果，仍是直接修改 props.formInline。
// 但该写法仅适用于 props.formInline 是一个对象类型的情况，原始类型需抛出事件
// 推荐阅读：https://cn.vuejs.org/guide/components/props.html#one-way-data-flow
const newFormInline = ref(props.formInline);
```

## [渲染函数 & JSX](https://cn.vuejs.org/guide/extras/render-function.html)
- 使用 JSX。在 .vue 文件启用 jsx 语法，需要在 script 开启 lang="tsx"
```js
<script setup lang="tsx">
```
- 渲染函数。`h()` 或者 `createVnode()`

## 路由
- [keep-alive与router-view的相爱相杀](https://juejin.cn/post/7083793875390693383)
```js
<router-view v-slot="{ Component }">
  <transition :name="setTransitionName" mode="out-in">
    <keep-alive :include="getKeepAliveNames">
      <component :is="Component" :key="state.refreshRouterViewKey" class="w100" />
    </keep-alive>
  </transition>
</router-view>
```

## 其他
- 状态管理
  - pinia
- 指令
  - clickOutside.ts
- 第三方库
  - hooks 工具集
    - [VueUse](https://vueuse.org/)
  - UI
    - [tippy.js 纯JS库工具提示(tooltip)库](https://atomiks.github.io/tippyjs/v6/)
      - 在 Vue 中使用 tippy.js，封装成组件调用，响应 components/Popover.vue
      - 在 Vue 中使用 tippy.js，封装为指令调用，详见 directives/tooltip.ts
    - [vue-grid-layout 拖拽布局](https://www.npmjs.com/package/vue-grid-layout)
    - [splitpanes 可拖拽分隔面板](https://www.npmjs.com/package/splitpanes)，[文档](https://antoniandre.github.io/splitpanes/)
  - 其他
    - [pptxtojson 将 .pptx 文件转为可读的 json 数据的 JavaScript 库](https://github.com/pipipi-pikachu/pptx2json)
- 开源项目
  - [推荐10个基于Vue3.0全家桶的优秀开源项目](https://zhuanlan.zhihu.com/p/584484310)
- 参考文档
  - [Vue3必学技巧-自定义Hooks-让写Vue3更畅快](https://juejin.cn/post/7083401842733875208)
  - [template setup 和 tsx 的混合开发实践](https://juejin.cn/post/7282692088016437307)