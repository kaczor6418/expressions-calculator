import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<div>
  <kk-input></kk-input>
  <kk-button></kk-button>
</div>
`;

export class BinaryExpression extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-binary-expression`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(BinaryExpression.TAG, BinaryExpression);
