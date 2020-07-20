import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";
import {Utils} from "../../common/Utils";

const template: string = `
<footer>
  <strong>APP FOOTER</strong>
</footer>
`;

export class AppFooter extends HTMLElement implements KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-footer`;

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
customElements.define(AppFooter.TAG, AppFooter);
