# 公共方法或插件

- 自定义打印
  - [printjs 自定义打印](https://printjs.crabbly.com/#documentation)
- 文件相关
  - [js-table2excel 将表格导出为 excel 文件](https://www.npmjs.com/package/js-table2excel)
  - [file-saver 导出文件](https://www.npmjs.com/package/file-saver)
  - [html-to-image 将 html 转换成图片](https://www.npmjs.com/package/html-to-image)
- 全屏
  - [screenfull 全屏](https://www.npmjs.com/package/screenfull)
- 特效相关
  - [CountUp.js 数字滚动](https://www.npmjs.com/package/countup.js)
- 二维码生成
  - [qrcodejs2-fixes](https://www.npmjs.com/package/qrcodejs2-fixes)
- 图标相关
  - [IconPark](https://iconpark.oceanengine.com/official)
- [图片懒加载](https://juejin.cn/post/6890325820200943629)
- 本地
  - print.ts 打印指定 html 内容。
  - watermark.ts 添加水印
  - download.ts 通用下载方法


## 自定义打印
使用 printjs 库，打印 html
```js
printJs({
  printable: `<div style=display:flex;flex-direction:column;text-align:center><h3>${props.printName}</h3></div><table border=1 cellspacing=0><tr>${tableTh}${tableTrTd}</table>`,
  type: 'raw-html',
  css: ['//at.alicdn.com/t/c/font_2298093_rnp72ifj3ba.css', '//unpkg.com/element-plus/dist/index.css'],
  style: `@media print{.mb15{margin-bottom:15px;}.el-button--small i.iconfont{font-size: 12px !important;margin-right: 5px;}}; .table-th{word-break: break-all;white-space: pre-wrap;}.table-center{text-align: center;}`,
});
```

## 全屏
- screenfull
```js
import screenfull from 'screenfull';
const onScreenfullClick = (element) => {
	if (!screenfull.isEnabled) {
		console.error('暂不不支持全屏');
		return false;
	}
	screenfull.toggle(element);
	screenfull.on('change', () => {
		if (screenfull.isFullscreen){
      state.isScreenfull = true;
    } else {
      state.isScreenfull = false;
    }
	});
};
```