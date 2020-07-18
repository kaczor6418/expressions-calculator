import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<div>
  <strong>INPUT</strong>
</div>
`;

export class Input extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-input`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(Input.TAG, Input);
