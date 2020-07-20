import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";
import {Utils} from "../../common/Utils";

const template: string = `
<div>
  <kk-input></kk-input>
  <kk-button></kk-button>
</div>
`;

export class BinaryExpression extends HTMLElement implements KKWebComponent{
    public static TAG = `${CONSTANTS.TAG_PREFIX}-binary-expression`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
        Utils.injectGlobalStyles(this.shadowRoot);
    }

    setUpElements(): void {
    }
}
customElements.define(BinaryExpression.TAG, BinaryExpression);
