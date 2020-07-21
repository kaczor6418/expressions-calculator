import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../KKWebComponent";

const template: string = `
<div>
  <strong>BUTTON</strong>
</div>
`;

export class Button extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-button`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }

    setUpElements(): void {
    }
}
customElements.define(Button.TAG, Button);
