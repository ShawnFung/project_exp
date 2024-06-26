# Vue 3.0 API

## 组合式 API

### 响应式核心
#### ref() 和 reactive() ？

### 响应式 API：工具函数
#### toRef()
- 可以将值、refs 或 getters 规范化为 refs (3.3+)。
- 也可以基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。

#### toRefs()
- 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。
- 当从组合式函数中返回响应式对象时，toRefs 相当有用。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性