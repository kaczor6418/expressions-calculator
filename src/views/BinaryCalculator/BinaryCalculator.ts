import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<header>
  <kk-app-header></kk-app-header>
  <kk-app-body></kk-app-body>
  <kk-app-footer></kk-app-footer>
</header>
`;

export class BinaryCalculator extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
