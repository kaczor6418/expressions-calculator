import {CONSTANTS} from "../../common/CONSTANTS";
import {TAppHeader} from "../../layouts/AppHeader/interfaces/TAppHeader";
import {KKWebComponent} from "../../components/KKWebComponent";
import {style} from "./BinaryCalcuatorStyles";

const template: string = `
<style>${style}</style>
<main>
  <kk-app-header></kk-app-header>
  <kk-app-body></kk-app-body>
  <kk-app-footer></kk-app-footer>
</main>
`;

export class BinaryCalculator extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    public readonly shadowRoot!: ShadowRoot;

    private header!: TAppHeader;

    constructor() {
        super(template);
        this.getComponentsReference();
        this.setUpAppHeader();
    }

    private getComponentsReference(): void {
        this.header = <TAppHeader><unknown>this.shadowRoot.querySelector('kk-app-header');
    }

    private setUpAppHeader(): void {
        this.header.titleText = 'Binary calculator';
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
