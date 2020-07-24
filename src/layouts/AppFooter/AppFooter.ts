import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../components/KKWebComponent/KKWebComponent";

const template: string = `
<footer>
  <strong>APP FOOTER</strong>
</footer>
`;

export class AppFooter extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-footer`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }
}
customElements.define(AppFooter.TAG, AppFooter);
