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

const template: string = `
<${List.TAG} id="values"></${List.TAG}>
<${List.TAG} id="operators"></${List.TAG}>
`;

export class CalculatorKeyboard extends KKWebComponent implements KKCalculatorKeyboard {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-calculator-keyboard`;

    private readonly kkValuesList: KKList<Button> = <KKList<Button>>(<unknown>this.shadowRoot.querySelector('#values'));
    private readonly kkOperatorsList: KKList<Button> = <KKList<Button>>(<unknown>this.shadowRoot.querySelector('#operators'));

    constructor() {
        super(template);
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
        console.log('super :D', layout);
    }
}
customElements.define(CalculatorKeyboard.TAG, CalculatorKeyboard);
