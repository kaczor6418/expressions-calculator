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
    <kk-icon id="logo" slot="prepend"></kk-icon>
    <kk-heading slot="center">Binary calculator</kk-heading>
    <kk-icon id="github" slot="append"></kk-icon>
  </kk-app-header>
  <kk-app-body></kk-app-body>
  <kk-app-footer></kk-app-footer>
</main>
`;

export class BinaryCalculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    public readonly shadowRoot!: ShadowRoot;

    private logoIcon!: KKIcon;
    private githubIcon!: KKIcon;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.logoIcon = <KKIcon>(<unknown>this.shadowRoot.querySelector('#logo'));
        this.githubIcon = <KKIcon>(<unknown>this.shadowRoot.querySelector('#github'));
    }

    private setUpElements(): void {
        this.setUpIconsElements();
    }

    private setUpIconsElements(): void {
        this.logoIcon.iconId = IconId.LOGO;
        this.logoIcon.iconSize = IconSize.L;
        this.githubIcon.iconId = IconId.GITHUB;
        this.githubIcon.iconSize = IconSize.L;
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
