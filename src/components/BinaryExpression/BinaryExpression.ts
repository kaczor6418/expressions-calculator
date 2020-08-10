import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { KKTextField } from '../TextField/interface/KKTextField';
import { OnKeyDownTextFieldListenerProps } from '../TextField/interface/TextFieldListenerProps';
import { TextFieldSize } from '../TextField/interface/TextFieldSize';
import { KKList } from '../List/interfaces/KKList';
import { List } from '../List/List';
import { TextField } from '../TextField/TextField';
import { KeyboardKey } from '../../common/Enums/KeyboardKey';
import { BinaryExpressionItem } from '../BinaryExpressionItem/BinaryExpressionItem';
import { KKBinaryExpressionItem } from '../BinaryExpressionItem/interfaces/KKBinaryExpressionItem';
import { LexicalAnalyzer } from '../../../calculator-engine/pkg/calculator_engine';

const listCustomStyles: Partial<CSSStyleDeclaration> = {
    background: 'var(--color-accent-2-inactive)',
    maxHeight: '70%',
    overflowY: 'auto'
};

const template: string = `
<${List.TAG} custom-styles=${JSON.stringify(listCustomStyles)}></${List.TAG}>
<${TextField.TAG} placeholder="Type expression..." size=${TextFieldSize.L}></${TextField.TAG}>
`;

export class BinaryExpression extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-expression`;

    private readonly kkTextField: KKTextField = <KKTextField>(<unknown>this.shadowRoot.querySelector(`${TextField.TAG}`));
    private readonly kkList: KKList<BinaryExpressionItem> = <KKList<BinaryExpressionItem>>(
        (<unknown>this.shadowRoot.querySelector(`${List.TAG}`))
    );

    constructor() {
        super(template);
        this.setUpElements();
        const lexicalAnalyzer: LexicalAnalyzer = LexicalAnalyzer.new();
        console.log(lexicalAnalyzer.expression());
        lexicalAnalyzer.change_expression();
        console.log(lexicalAnalyzer.expression());
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
            const expressionItem: BinaryExpressionItem = new BinaryExpressionItem();
            expressionItem.expressionValue = this.kkTextField.value;
            expressionItem.scoreValue = Math.random() * (1000 - 1) + 1;
            expressionItem.setScoreCallback(() => this.clickExpressionItem(expressionItem));
            this.kkList.addElement(expressionItem);
            this.kkTextField.clear();
            e.preventDefault();
        }
    }

    private clickExpressionItem(expressionItem: KKBinaryExpressionItem): void {
        if (['+', '-'].includes(this.kkTextField.lastChar)) {
            this.kkTextField.value = `${this.kkTextField.value} ${expressionItem.scoreValue}`;
        } else {
            this.kkTextField.value = `${expressionItem.scoreValue}`;
        }
    }
}

customElements.define(BinaryExpression.TAG, BinaryExpression);
