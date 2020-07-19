export * from './views/BinaryCalculator/UsedComponents';
import {CONSTANTS} from "./common/CONSTANTS";

const template: string = `
<header>
<style></style>
  <kk-binary-calculator></kk-binary-calculator>
</header>
`;

export class App extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
        let someStyleSheet = new CSSStyleSheet();
        someStyleSheet.insertRule("h1 { color: green }");
        this.shadowRoot.styleSheets
    }
}
customElements.define(App.TAG, App);
