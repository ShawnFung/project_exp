# 公共方法或插件

## js
- 文件相关
  - [printjs 自定义打印](https://printjs.crabbly.com/#documentation)
  - [js-table2excel 将表格导出为 excel 文件](https://www.npmjs.com/package/js-table2excel)
  - [file-saver 导出文件](https://www.npmjs.com/package/file-saver)
  - [html-to-image 将 html 转换成图片](https://www.npmjs.com/package/html-to-image)
  - [xlsx 导入导出 excel](https://www.npmjs.com/package/xlsx)
- 全屏
  - [screenfull 全屏](https://www.npmjs.com/package/screenfull)
- 特效相关
  - [CountUp.js 数字滚动](https://www.npmjs.com/package/countup.js)
- 二维码生成
  - [qrcodejs2-fixes 生成二维码](https://www.npmjs.com/package/qrcodejs2-fixes)
  - [jsbarcode 生成条形码](https://www.npmjs.com/package/jsbarcode)
- 图标相关
  - [IconPark](https://iconpark.oceanengine.com/official)
- 图片相关
  - [图片懒加载](https://juejin.cn/post/6890325820200943629)
  - [cropperjs 图片剪裁](https://www.npmjs.com/package/cropperjs)
- UI
  - [tippyjs 轻量级 tooltip、popover、dropdown、menu 插件](https://github.com/atomiks/tippyjs)
  - [sortablejs 拖拽](https://www.npmjs.com/package/sortablejs)
  - [xgplayer 视频播放器](https://www.npmjs.com/package/xgplayer)
- 其他
  - [china-area-data 中国行政区域数据](https://www.npmjs.com/package/china-area-data)
  - [mint-filter 敏感词过滤](https://www.npmjs.com/package/mint-filter)
  - [pinyin-pro js 汉字拼音转换库](https://www.npmjs.com/package/pinyin-pro)
- 本地
  - print.ts 打印指定 html 内容。
  - watermark.ts 添加水印
  - download.ts 通用下载方法

## css
- 动画
  - [animate.css](https://animate.style/)
- [tailwindcss](https://www.tailwindcss.cn/)


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

## xlsx
- [十分钟上手 xlsx，4 种方法实现 Excel 导入导出](https://juejin.cn/post/6998000575203770376)
```js 
import { utils, writeFile } from "xlsx";
exportExcel = () => {
  // data 格式为 [{ [dataKey]: any }]
  const res: string[][] = data.map((item: DataItem) => {
    const arr = [];
    columns.forEach((column: Columns) => {
      arr.push(item[column.dataKey]);
    });
    return arr;
  });
  const titleList: string[] = [];
  // columns 格式为 [{ title: string, dataKey: string }]
  columns.forEach((column: Columns) => {
    titleList.push(column.title);
  });
  res.unshift(titleList);
  const workSheet = utils.aoa_to_sheet(res);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, "数据报表");
  writeFile(workBook, "tableV2.xlsx");
}
```