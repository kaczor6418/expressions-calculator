import * as styles from './CalculatorDisplay.scss';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { KKTextField } from '../TextField/interface/KKTextField';
import { OnKeyDownTextFieldListenerProps } from '../TextField/interface/TextFieldListenerProps';
import { ElementSize } from '../../common/Enums/ElementSize';
import { KKList } from '../List/interfaces/KKList';
import { List } from '../List/List';
import { TextField } from '../TextField/TextField';
import { KeyboardKey } from '../../common/Enums/KeyboardKey';
import { SingleExpression } from '../SingleExpression/SingleExpression';
import { KKSingleExpression } from '../SingleExpression/interfaces/KKSingleExpression';
import { KKCalculatorDisplay } from './interfaces/KKCalculatorDisplay';

const listCustomStyles: Partial<CSSStyleDeclaration> = {
    background: 'var(--color-accent-2-inactive)',
    height: '36%',
    overflowY: 'auto'
};

const template: string = `
<${List.TAG} custom-styles=${JSON.stringify(listCustomStyles)}></${List.TAG}>
<${TextField.TAG} placeholder="Type expression..." size=${ElementSize.L}></${TextField.TAG}>
`;

export class CalculatorDisplay extends KKWebComponent implements KKCalculatorDisplay {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-calculator-display`;

    private readonly kkTextField: KKTextField = <KKTextField>(<unknown>this.shadowRoot.querySelector(TextField.TAG));
    private readonly kkList: KKList<SingleExpression> = <KKList<SingleExpression>>(<unknown>this.shadowRoot.querySelector(List.TAG));

    constructor() {
        super(template, styles);
        this.setUpElements();
    }

    get displayValue(): string {
        return this.kkTextField.value;
    }

    set displayValue(value: string) {
        this.kkTextField.value = value;
    }

    public submitExpression(): void {
        const expressionItem: SingleExpression = new SingleExpression();
        expressionItem.expressionOperation = this.kkTextField.value;
        expressionItem.expressionScore = Math.random() * (1000 - 1) + 1;
        expressionItem.setScoreCallback(() => this.clickExpressionItem(expressionItem));
        this.kkList.addElement(expressionItem);
        this.kkTextField.clear();
    }

    protected setUpElements(): void {
        const callbackProps: OnKeyDownTextFieldListenerProps = {
            eventName: 'keydown',
            callback: this.expressionChanged.bind(this)
        };
        this.kkTextField.setTextFieldInputListener(callbackProps);
    }

    private expressionChanged(e: KeyboardEvent): void {
        if (e.key === KeyboardKey.ENTER || e.key === KeyboardKey.EQUAL) {
            this.submitExpression();
            e.preventDefault();
        }
    }

    private clickExpressionItem(expressionItem: KKSingleExpression): void {
        if (CONSTANTS.BINARY_OPERATORS.includes(this.kkTextField.lastChar)) {
            this.kkTextField.value = `${this.kkTextField.value} ${expressionItem.expressionScore}`;
        } else {
            this.kkTextField.value = `${expressionItem.expressionScore}`;
        }
    }
}

customElements.define(CalculatorDisplay.TAG, CalculatorDisplay);
