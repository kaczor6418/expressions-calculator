export * from './views/BinaryCalculator/UsedComponents';
import {CONSTANTS} from "./common/CONSTANTS";

const template: string = `
<kk-binary-calculator></kk-binary-calculator>
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
