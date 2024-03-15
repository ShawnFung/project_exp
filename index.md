# 项目

## 事件
给页面元素添加鼠标相关类事件（页面渲染时机不确定）
- 利用事件冒泡机制，将事件绑定在 document 或其他已知的父元素上，这样就算子元素不知道什么时候渲染，后续也可以通过事件冒泡机制触发事件。
- 在不能使用事件冒泡机制时，可以在已知父元素上添加 mouseenter 事件，在 mouseenter 事件中添加子元素相关事件。[详情可以参考 Demo/EventBinding](./Demo/EventBinding.vue)

## TODO
- css
 - var？
- 其他
  - 瀑布屏的原理？