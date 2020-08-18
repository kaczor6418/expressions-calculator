import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKCalculatorKeyboard } from './interfaces/KKCalculatorKeyboard';
import { CalculatorKeyboardLayout } from './interfaces/CalculatorKeyboardLayout';
import { List } from '../List/List';
import { CalculatorKeyboardObservedAttributes } from './interfaces/CalculatorKeyboardObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { TextField } from '../TextField/TextField';
import { EnumValueEnumConverter } from '../../converters/EnumValueEnumConverter';
import { KKList } from '../List/interfaces/KKList';
import { Button } from '../Button/Button';
import { calculatorKeyboardStyles } from './CalculatorKeyboardStyles';
import { ListObservedAttributes } from '../List/interfaces/ListObservedAttributes';
import { Divider } from '../Divider/Divider';
import { KKWebComponentProps } from '../KKWebComponent/interface/KKWebComponentProps';

const listCustomStyles: Partial<CSSStyleDeclaration> = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'space-around'
};

const template: string = `
<style>${calculatorKeyboardStyles}</style>
<div>
  <${List.TAG} id="values" ${ListObservedAttributes.CUSTOM_STYLES}=${JSON.stringify(listCustomStyles)} ${
    ListObservedAttributes.ITEM_GAP
}="var(--spacing-m)"></${List.TAG}>
  <${Divider.TAG}></${Divider.TAG}>
  <${List.TAG} id="operators" ${ListObservedAttributes.CUSTOM_STYLES}=${JSON.stringify(listCustomStyles)} ${
    ListObservedAttributes.ITEM_GAP
}="var(--spacing-m)"></${List.TAG}>
</div>
`;

export class CalculatorKeyboard extends KKWebComponent implements KKCalculatorKeyboard {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-calculator-keyboard`;
    public static observedAttributes: CalculatorKeyboardObservedAttributes[] = Object.values(CalculatorKeyboardObservedAttributes);

    private readonly keyboardWrapper: HTMLDivElement = <HTMLDivElement>this.shadowRoot.querySelector('div');
    private readonly kkValuesList: KKList<Button> = <KKList<Button>>(<unknown>this.shadowRoot.querySelector('#values'));
    private readonly kkOperatorsList: KKList<Button> = <KKList<Button>>(<unknown>this.shadowRoot.querySelector('#operators'));

    constructor(props?: KKWebComponentProps<keyof typeof CalculatorKeyboardObservedAttributes>) {
        super(template, props);
    }

    set values(values: Button[]) {
        this.kkValuesList.elements = values;
    }

    get values(): Button[] {
        return this.kkValuesList.elements;
    }

    set operators(operators: Button[]) {
        this.kkOperatorsList.elements = operators;
    }

    get operators(): Button[] {
        return this.kkOperatorsList.elements;
    }

    public attributeChangedCallback(name: CalculatorKeyboardObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return void 0;
        }
        switch (name) {
            case CalculatorKeyboardObservedAttributes.LAYOUT:
                this.setLayout(EnumValueEnumConverter.toEnumFromValue(newValue, CalculatorKeyboardLayout));
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${TextField.name} component`);
        }
    }

    public setLayout(layout: CalculatorKeyboardLayout): void {
        this.keyboardWrapper.className = layout;
    }
}
customElements.define(CalculatorKeyboard.TAG, CalculatorKeyboard);
