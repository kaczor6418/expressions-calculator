import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../components/KKWebComponent/KKWebComponent";
import {style} from "./AppHeaderStyle";

const template: string = `
<style>${style}</style>
<header>
  <slot name="prepend"></slot>
  <slot name="center"></slot>
  <slot name="append"></slot>
</header>
`;

export class AppHeader extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-header`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
        this.setUpElements();
    }

    setUpElements(): void {
    }

}
customElements.define(AppHeader.TAG, AppHeader);
