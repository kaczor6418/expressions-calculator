import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../KKWebComponent";

const template: string = `
<div>
  <strong>INPUT</strong>
</div>
`;

export class Input extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-input`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }

    setUpElements(): void {
    }
}
customElements.define(Input.TAG, Input);
