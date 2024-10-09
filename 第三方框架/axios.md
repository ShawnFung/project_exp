# Axios

## Axios 跨端架构是如何实现的？

Axios 的适配器机制允许你自定义发送请求的方式，以适应不同的请求环境。在浏览器端采用 XMLHttpRequest API 进行封装，而在 Node.js 端则采用 http/https 模块进行封装。但你也可以配置自定义适配器以使用其他请求库或环境。

```js
// 对外开放了一套统一的开放接口，优先使用用户配置的自定义适配器，其次使用内置的适配器
var adapter = config.adapter || defaults.adapter;
```

### 默认适配器

Axios 默认使用 axios/lib/adapters 目录中的适配器，其中包括 xhr.js，用于浏览器环境，http.js，用于 Node.js 环境。

```js
// 默认适配器是根据请求环境来判断的
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    // For browsers use XHR adapter
    adapter = require("./adapters/xhr");
  } else if (typeof process !== "undefined") {
    // For node use HTTP adapter
    adapter = require("./adapters/http");
  }
  return adapter;
}
```

### 自定义适配器

你可以通过在 config 中设置 adapter 选项来指定使用的适配器。**自定义适配器是一个函数**，接收 Axios 请求配置对象，并返回一个 Promise 对象，该 Promise 对象应该在请求完成时进行 resolve 或者在发生错误时进行 reject。

```js
const myAdapter = (config) => {
  return new Promise((resolve, reject) => {
    // 在这里执行你自定义的请求逻辑
    // 请求成功时调用 resolve
    resolve(response);
    // 请求失败时调用 reject
    reject(error);
  });
};
```

## 请求拦截与响应拦截
- InterceptorManager，声明一个用于拦截器管理的构造函数
  - handlers 属性，数组类型，用于存放 Axios 拦截行为
  - use 方法，增加拦截器，用于把拦截器加入到 handlers 数组中
- Axios 构造函数中增加 interceptors
- 在 request 函数中处理拦截器和请求，本质上就是把请求拦截器、请求、响应拦截器，依次加入到数组中，依次执行。
```js
Axios.prototype.request = function (config) {
  function dispatchRequest() {
    // 发送xhr请求……
  }
  // dispatchRequest 发送请求，undefined 用来补位
  var chain = [dispatchRequest, undefined];
  // 遍历实例对象的请求拦截器
  this.interceptors.request.handlers.forEach((interceptor) => {
    // 将请求拦截器压入数组的最前面
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  // 遍历实例对象的响应拦截器
  this.interceptors.response.handlers.forEach((interceptor) => {
    // 将请求拦截器压入数组的最后面
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });
  // 创建一个成功的 promise 且成功的值为合并后的请求配置
  let promise = Promise.resolve(config);

  // 如果链条长度不为 0
  while (chain.length) {
    // 依次取出 chain 的回调函数, 并执行
    promise = promise.then(chain.shift(), chain.shift());
  }
  return promise;
};
```

## 取消请求
取消请求主要分为下面三种思路：
- 发送请求前取消
- 发送请求过程中取消
- 请求接收后取消  

其中第一点和第三点比较好实现，只要在请求前和请求后判断是否取消了就行，如果取消，就抛出异常。

## 参考文档
- [我终于明白了Axios拦截器的原理](https://juejin.cn/post/7051209129985048584)
- [解析 Axios 原理之二：如何实现请求与响应的拦截](https://zhuanlan.zhihu.com/p/358385078)
- [五分钟！让你彻底搞懂axios的请求取消原理！附源码分析](https://juejin.cn/post/7284417436752265277)
