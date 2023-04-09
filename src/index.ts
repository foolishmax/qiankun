/**
 * @author Kuitos
 * @since 2019-04-25
 */

export { loadMicroApp, registerMicroApps, start } from './apis';
export { initGlobalState } from './globalState';
export { getCurrentRunningApp as __internalGetCurrentRunningApp } from './sandbox';
export * from './errorHandler';
export * from './effects';
export * from './interfaces';
export { prefetchImmediately as prefetchApps } from './prefetch';

// 注册和start采用的是single-spa
// 1. 预加载功能->利用浏览器空闲时间加载其他应用
// 2. 沙箱功能 创建sandbox，让execScript方法在sandbox中运行
// 3. 样式隔离（shadowDom、scopedCss）
// 4. 在沙箱中执行接入协议，并进行了扩展（用户提供的生命周期）
