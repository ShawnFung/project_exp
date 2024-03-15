// 申明外部 npm 插件模块
declare module 'vue-grid-layout';
declare module 'qrcodejs2-fixes';
declare module 'splitpanes';
declare module 'js-cookie';
declare module '@wangeditor/editor-for-vue';
declare module 'js-table2excel';
declare module 'qs';
declare module 'sortablejs';

// 声明一个模块，防止引入文件时报错
declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.scss';
declare module '*.ts';
declare module '*.js';

// 声明文件，*.vue 后缀的文件交给 vue 模块来处理
declare module '*.vue' {
	// DefineComponent，在定义 Vue 组件时提供类型推导的辅助函数
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

// 声明文件，定义全局变量
/* eslint-disable */
declare interface Window {
	nextLoading: boolean;
	BMAP_SATELLITE_MAP: any;
	BMap: any;
}

// 声明路由当前项类型
declare type RouteItem<T = any> = {
	path: string;
	name?: string | symbol | undefined | null;
	redirect?: string;
	k?: T;
	meta?: {
		title?: string;
		isLink?: string;
		isHide?: boolean;
		isKeepAlive?: boolean;
		isAffix?: boolean;
		isIframe?: boolean;
		roles?: string[];
		icon?: string;
		isDynamic?: boolean;
		isDynamicPath?: string;
		isIframeOpen?: string;
		loading?: boolean;
	};
	children: T[];
	query?: { [key: string]: T };
	params?: { [key: string]: T };
	contextMenuClickId?: string | number;
	commonUrl?: string;
	isFnClick?: boolean;
	url?: string;
	transUrl?: string;
	title?: string;
	id?: string | number;
};