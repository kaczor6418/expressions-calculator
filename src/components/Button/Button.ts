import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<div>
  <strong>BUTTON</strong>
</div>
`;

export class Button extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-button`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(Button.TAG, Button);
