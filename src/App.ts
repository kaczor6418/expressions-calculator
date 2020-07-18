export * from './views/BinaryCalculator/UsedComponents';
import {CONSTANTS} from "./utils/CONSTANTS";

const template: string = `
<header>
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
    }
}
customElements.define(App.TAG, App);
