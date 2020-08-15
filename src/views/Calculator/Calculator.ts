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
import { CalculatorKeyboard } from '../../components/CalcuatorKeayboard/CalculatorKeyboard';
import { KKCalculatorKeyboard } from '../../components/CalcuatorKeayboard/interfaces/KKCalculatorKeyboard';
import {Button} from "../../components/Button/Button";
import {KKButton} from "../../components/Button/interfaces/KKButton";

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
    <${CalculatorKeyboard.TAG}></${CalculatorKeyboard.TAG}>
  </${AppBody.TAG}>
  <${AppFooter.TAG}></${AppFooter.TAG}>
</main>
`;

export class Calculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-calculator`;

    private footer: KKAppFooter = <KKAppFooter>(<unknown>this.shadowRoot.querySelector(AppFooter.TAG));
    private kkCalculatorKeyboard: KKCalculatorKeyboard = <KKCalculatorKeyboard>(
        (<unknown>this.shadowRoot.querySelector(CalculatorKeyboard.TAG))
    );

    constructor() {
        super(template);
        this.setUpElements();
    }

    protected setUpElements(): void {
        this.kkCalculatorKeyboard.values = ['0', '1'];
        this.kkCalculatorKeyboard.values = ['-', '+', '*'];
        this.footer.setCopyright({
            date: '2020',
            author: 'Krzysztof Kaczyński',
            termsReferenceUrl: 'https://www.google.com'
        });
    }

    private createButtons(values: string[]): Button[] {
        const buttons: KKButton[] = [];
        for (const value of values) {
            const valueButton: KKButton = new Button({

            });
        }
    }
}
customElements.define(Calculator.TAG, Calculator);
