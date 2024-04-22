# CSS
- CSS Module

## 原生 CSS 的常见问题
- 不支持选择器的嵌套
- 样式污染
- 浏览器兼容问题  

## 解决方案
针对如上原生 CSS 的痛点，社区中诞生了不少解决方案，常见的有 5 类：
- CSS 预处理器：主流的包括Sass/Scss、Less和Stylus。这些方案各自定义了一套语法，让 CSS 也能使用嵌套规则，甚至能像编程语言一样定义变量、写条件判断和循环语句，大大增强了样式语言的灵活性，解决原生 CSS 的开发体验问题。
- CSS Modules：能将 CSS 类名处理成哈希值，这样就可以避免同名的情况下样式污染的问题。
- CSS 后处理器PostCSS，用来解析和处理 CSS 代码，可以实现的功能非常丰富，比如将 px 转换为 rem、根据目标浏览器情况自动加上类似于--moz--、-o-的属性前缀等等。
- CSS in JS 方案，主流的包括emotion、styled-components等等，顾名思义，这类方案可以实现直接在 JS 中写样式代码，基本包含CSS 预处理器和 CSS Modules 的各项优点，非常灵活，解决了开发体验和全局样式污染的问题。
- CSS 原子化框架，如 Tailwind CSS、Windi CSS，通过类名来指定样式，大大简化了样式写法，提高了样式开发的效率，主要解决了原生 CSS 开发体验的问题。

## CSS Module
- 文件命名 xxx.module.scss
- css module 文件中的 css 样式会自动导出，但是 scss 变量，需要使用`:export{}`主动导出。
```scss
.red {
  color: red;
}
$base-menu-color: #bfcbd9;
:export {
  menuColor: $base-menu-color;
}
```

## CSS 变量
```css
/*声明变量*/
:root{       
  --primary-color: green;  
} 
/*引用变量*/
.primary-button{
  background: var(--primary-color);
  /* var函数可以设置一个默认值，如果变量不存在直接使用默认值 */
  background: var(--primary-color, red);
}
```
变量声明中，属性值不能直接进行数学运算，需要借助`calc()`函数，如果是字符串，则可直接拼接。
```css
/*正确，数字可计算拼接*/
body {
  --fontSize: 20;
  margin-top: calc(var(--fontSize) * 1px);
}
/*正确，字符创可直接拼接*/
body {
  --backgroundColor: green;
  background: var(--backgroundColor, red) url(../../images/background.jpg) no-repeat fixed top;
}
/*错误，数字不可直接拼接*/
.box {
  --size-one:14;
  font-size:var(--size-one)px;
}
```
CSS 变量与 JS
```js
//获取变量
const root = document.documentElement;
let root_computed = getComputedStyle(root);
root_computed.getPropertyValue('--color').trim();
//设置变量
root.style.setProperty('--color','green');
//删除变量
root.style.removeProperty('--color');
```

## 参考文档
- [在Vite中接入现代化的CSS 工程化方案](https://cloud.tencent.com/developer/article/2357266)
