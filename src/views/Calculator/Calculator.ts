import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { calculatorStyles } from './CalcuatorStyles';
import { IconId } from '../../common/Enums/IconId';
import { IconSize } from '../../components/Icon/interfaces/IconSize';
import { KKAppFooter } from '../../layouts/AppFooter/interfaces/KKAppFooter';
import { Icon } from '../../components/Icon/Icon';
import { Heading } from '../../components/Heading/Heading';
import { AppBody } from '../../layouts/AppBody/AppBody';
import { CalculatorDisplay } from '../../components/CalculatorDisplay/CalculatorDisplay';
import { AppFooter } from '../../layouts/AppFooter/AppFooter';
import { AppHeader } from '../../layouts/AppHeader/AppHeader';

const template: string = `
<style>${calculatorStyles}</style>
<main>
  <${AppHeader.TAG}>
    <${Icon.TAG} slot="prepend" icon-id="${IconId.LOGO}" icon-size="${IconSize.L}"></${Icon.TAG}>
    <${Heading.TAG} slot="center"><strong>Binary calculator</strong></${Heading.TAG}>
    <${Icon.TAG} slot="append" icon-id="${IconId.GITHUB}" icon-size="${IconSize.L}" href="https://github.com/kaczor6418/binary-calculator" ></${Icon.TAG}>
  </${AppHeader.TAG}>
  <${AppBody.TAG}>
    <${CalculatorDisplay.TAG}></${CalculatorDisplay.TAG}>
  </${AppBody.TAG}>
  <${AppFooter.TAG}></${AppFooter.TAG}>
</main>
`;

export class Calculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-calculator`;

    private footer: KKAppFooter = <KKAppFooter>(<unknown>this.shadowRoot.querySelector(AppFooter.TAG));

    constructor() {
        super(template);
        this.setUpElements();
    }

    protected setUpElements(): void {
        this.footer.setCopyright({
            date: '2020',
            author: 'Krzysztof Kaczyński',
            termsReferenceUrl: 'https://www.google.com'
        });
    }
}
customElements.define(Calculator.TAG, Calculator);
