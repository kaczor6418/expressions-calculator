import * as styles from './style/main.scss';
export { App } from './App';
const rootStyleWrapper: HTMLStyleElement = document.createElement('style');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
rootStyleWrapper.innerHTML = styles;
document.head.appendChild(rootStyleWrapper);
