import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<main>
  <strong>APP BODY</strong>
</main>
`;

export class AppBody extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-body`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(AppBody.TAG, AppBody);
