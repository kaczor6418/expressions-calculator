import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<header>
  <strong>APP HEADER</strong>
</header>
`;

export class AppHeader extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-header`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(AppHeader.TAG, AppHeader);
