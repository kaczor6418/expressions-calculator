import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";

const template: string = `
<div>
  <strong>BUTTON</strong>
</div>
`;

export class Button extends HTMLElement implements KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-button`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }

    setUpElements(): void {
    }
}
customElements.define(Button.TAG, Button);
