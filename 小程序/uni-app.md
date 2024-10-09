# 小程序

- 组件库
 - CSS 组件库
  - [Color UI](https://miren123.gitee.io/colorui-document/pages/base/)是一款适应于H5、微信小程序、安卓、ios、支付宝的高颜值，高度自定义的 Css 组件库。
 - UI框架
  - [uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)是 DCloud 提供的一个跨端 ui 库，它是基于 vue 组件的、flex 布局的、无 dom 的跨全端 ui 框架。
  - [uView](https://xuqu.gitee.io/)是 uni-app 生态最优秀的 UI 框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水。
  - [u-charts](https://www.ucharts.cn/v2/#/)，高性能跨平台图表库
- 开源项目
  - [前端铺子-uniapp移动端](https://gitee.com/kevin_chou/qdpz)
  - [开源项目资源汇总](https://www.bookstack.cn/read/uniapp-intro/7b326662091eb891.md)

## 常用组件
- swiper 滑块视图容器
- scroll-view 可滚动视图区域
- 弹窗？

## 地图或位置相关
- 内置组件
  - `<map>`，支持标注点、路线、支持标注点平移动画(轨迹回放)、点聚合。
  - [地图组件 api](https://uniapp.dcloud.net.cn/api/location/map.html)
- 三方定位和地图服务
  - 部分 Android 手机可能不支持系统定位，因此需要第三方定位的支持。
  - [uni-app 定位文档](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)
  - [腾讯位置服务](https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview)

## 媒体相关
- 相机
  - `<camera>`，内置相机组件
  - [相机组件 api](https://uniapp.dcloud.net.cn/api/media/camera-context.html)
- 图片
  - `<canvas>`，内置画布组件
  - [画布组件 api](https://uniapp.dcloud.net.cn/api/canvas/createCanvasContext.html)
  - [图片 api](https://uniapp.dcloud.net.cn/api/media/image.html)

### 媒体类型相互转化
- 图片转 canvas：uni.getImageInfo -> uni.createCanvasContext -> ctx.drawImage
- canvas 转图片：uni.canvasToTempFilePath
- 相机转图片：uni.createCameraContext -> ctx.takePhoto

## 文件相关
文件预览：uni.downloadFile -> uni.openDocument
选取本地文件并上传：uni.chooseImage -> uni.uploadFile

## 其他
- [uniapp页面间通信相关方法总结](https://cloud.tencent.com/developer/article/1835962)
  - 利用url传参进行通讯
  - uni.$emit()和uni.$on() 进行通讯
  - 使用 EventBus 进行通讯
  - 利用“全局变量”进行通讯
  - Vuex
  - 通过 getCurrentPages() 获取页面栈，然后就可以在当前页面调用其他页面的方法