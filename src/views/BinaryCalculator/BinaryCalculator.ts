import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";
import {TAppHeader} from "../../layouts/AppHeader/interfaces/TAppHeader";

const template: string = `
<kk-app-header></kk-app-header>
<kk-app-body></kk-app-body>
<kk-app-footer></kk-app-footer>
`;

export class BinaryCalculator extends HTMLElement implements KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    public readonly shadowRoot!: ShadowRoot;

    private header!: TAppHeader;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
        this.setUpElements();
        this.setUpAppHeader();
    }

    setUpElements(): void {
        this.header = <TAppHeader><unknown>this.shadowRoot.querySelector('kk-app-header');
    }

    private setUpAppHeader(): void {
        this.header.titleText = 'Binary calculator';
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
