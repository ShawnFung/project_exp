import axios from 'axios';
import FileSaver from 'file-saver';

// 通用下载方法
export function download(url: string, params: any, fileName: string) {
  // 可以根据需求，添加全局 loading
  return axios.post(url, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob'
  }).then(async (resp) => {
    const blob = new Blob([resp.data as any]);
    FileSaver.saveAs(blob, fileName);
  }).catch((r) => {
    console.error(r);
  });
}
