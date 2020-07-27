import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { binaryCalculatorStyles } from './BinaryCalcuatorStyles';
import { KKIcon } from '../../components/Icon/interfaces/KKIcon';
import { IconId } from '../../common/IconId';
import { IconSize } from '../../components/Icon/interfaces/IconSize';

const template: string = `
<style>${binaryCalculatorStyles}</style>
<main>
  <kk-app-header>
    <kk-icon slot="prepend"></kk-icon>
    <kk-heading slot="center">Binary calculator</kk-heading>
    <b slot="append">Append</b>
  </kk-app-header>
  <kk-app-body></kk-app-body>
  <kk-app-footer></kk-app-footer>
</main>
`;

export class BinaryCalculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    public readonly shadowRoot!: ShadowRoot;

    private kkIcon!: KKIcon;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.kkIcon = <KKIcon>(<unknown>this.shadowRoot.querySelector('kk-icon'));
    }

    private setUpElements(): void {
        this.setUpIconElement();
    }

    private setUpIconElement(): void {
        this.kkIcon.iconId = IconId.LOGO;
        this.kkIcon.iconSize = IconSize.L;
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
