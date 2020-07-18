import {CONSTANTS} from "../../utils/CONSTANTS";

const template: string = `
<footer>
  <strong>APP FOOTER</strong>
</footer>
`;

export class AppFooter extends HTMLElement {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-footer`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define(AppFooter.TAG, AppFooter);
