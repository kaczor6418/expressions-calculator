import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";
import {Utils} from "../../common/Utils";

const template: string = `
<div>
  <strong>INPUT</strong>
</div>
`;

export class Input extends HTMLElement implements KKWebComponent{
    public static TAG = `${CONSTANTS.TAG_PREFIX}-input`;

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
customElements.define(Input.TAG, Input);
