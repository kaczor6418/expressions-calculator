import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { binaryCalculatorStyles } from './BinaryCalcuatorStyles';
import { IconId } from '../../common/IconDefinitions/IconId';
import { IconSize } from '../../components/Icon/interfaces/IconSize';
import { KKAppFooter } from '../../layouts/AppFooter/interfaces/KKAppFooter';

const template: string = `
<style>${binaryCalculatorStyles}</style>
<main>
  <kk-app-header>
    <kk-icon slot="prepend" icon-id="${IconId.LOGO}" icon-size="${IconSize.L}"></kk-icon>
    <kk-heading slot="center"><strong>Binary calculator</strong></kk-heading>
    <kk-icon slot="append" icon-id="${IconId.GITHUB}" icon-size="${IconSize.L}" href="https://github.com/kaczor6418/binary-calculator" ></kk-icon>
  </kk-app-header>
  <kk-app-body>
    <kk-binary-expression></kk-binary-expression>
  </kk-app-body>
  <kk-app-footer></kk-app-footer>
</main>
`;

export class BinaryCalculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    private footer!: KKAppFooter;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.footer = <KKAppFooter>(<unknown>this.shadowRoot.querySelector('kk-app-footer'));
    }

    protected setUpElements(): void {
        this.footer.setCopyright({
            date: '2020',
            author: 'Krzysztof Kaczyński',
            termsReferenceUrl: 'https://www.google.com',
        });
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
