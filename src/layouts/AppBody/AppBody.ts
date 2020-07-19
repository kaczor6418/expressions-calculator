import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";

const template: string = `
<main>
  <strong>APP BODY</strong>
</main>
`;

export class AppBody extends HTMLElement implements KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-body`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }

    setUpElements(): void {
    }
}
customElements.define(AppBody.TAG, AppBody);
