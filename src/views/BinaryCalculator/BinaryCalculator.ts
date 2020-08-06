import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { binaryCalculatorStyles } from './BinaryCalcuatorStyles';
import { IconId } from '../../common/IconDefinitions/IconId';
import { IconSize } from '../../components/Icon/interfaces/IconSize';
import { TextFieldSize } from '../../components/TextField/interface/TextFieldSize';
import { KKTextField } from '../../components/TextField/interface/KKTextField';
import { OnInputTextFieldListenerProps } from '../../components/TextField/interface/TextFieldListenerProps';
import { KKAppFooter } from '../../layouts/AppFooter/interfaces/KKAppFooter';
import { return_char } from '../../../calculator-engine/pkg/calculator_engine';

const template: string = `
<style>${binaryCalculatorStyles}</style>
<main>
  <kk-app-header>
    <kk-icon slot="prepend" icon-id="${IconId.LOGO}" icon-size="${IconSize.L}"></kk-icon>
    <kk-heading slot="center"><strong>Binary calculator</strong></kk-heading>
    <kk-icon slot="append" icon-id="${IconId.GITHUB}" icon-size="${IconSize.L}" href="https://github.com/kaczor6418/binary-calculator" ></kk-icon>
  </kk-app-header>
  <kk-app-body>
    <kk-text-field placeholder="Type expression..." size=${TextFieldSize.L}></kk-text-field>
  </kk-app-body>
  <kk-app-footer></kk-app-footer>
</main>
`;

export class BinaryCalculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    private textField!: KKTextField;
    private footer!: KKAppFooter;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.footer = <KKAppFooter>(<unknown>this.shadowRoot.querySelector('kk-app-footer'));
        this.textField = <KKTextField>(<unknown>this.shadowRoot.querySelector('kk-text-field'));
    }

    protected setUpElements(): void {
        const callbackProps: OnInputTextFieldListenerProps = {
            eventName: 'input',
            callback: () => console.log(return_char()),
        };
        this.textField.setTextFieldInputListener(callbackProps);
        this.footer.setCopyright({
            date: '2020',
            author: 'Krzysztof Kaczyński',
            termsReferenceUrl: 'https://www.google.com',
        });
    }
}
customElements.define(BinaryCalculator.TAG, BinaryCalculator);
