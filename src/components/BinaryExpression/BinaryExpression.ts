import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../KKWebComponent";

const template: string = `
<div>
  <kk-input></kk-input>
  <kk-button></kk-button>
</div>
`;

export class BinaryExpression extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-binary-expression`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }

    setUpElements(): void {
    }
}
customElements.define(BinaryExpression.TAG, BinaryExpression);
