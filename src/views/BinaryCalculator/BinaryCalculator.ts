import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { binaryCalculatorStyles } from './BinaryCalcuatorStyles';

const template: string = `
<style>${binaryCalculatorStyles}</style>
<main>
  <kk-app-header>
    <b slot="prepend">Prepend</b>
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

    constructor() {
        super(template);
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
