# 在 Vue3.0 中使用 tsx

## jsx自定义指令的使用
```js
  setup() {
    return () => <a v-custom:arg={val} />;
  }
  setup() {
    // 传递值，自定义指令的参数，修饰符
    return () => <a v-custom={[val, "arg", ["a", "b"]]} />;
  }
```