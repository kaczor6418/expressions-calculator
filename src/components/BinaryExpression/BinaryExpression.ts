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

const listCustomStyles: Partial<CSSStyleDeclaration> = {
    background: 'var(--color-accent-2-inactive)'
};

const template: string = `
<${List.TAG} custom-styles=${JSON.stringify(listCustomStyles)}></${List.TAG}>
<${TextField.TAG} placeholder="Type expression..." size=${TextFieldSize.L}></${TextField.TAG}>
`;

export class BinaryExpression extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-expression`;

    private kkTextField!: KKTextField;
    private kkList!: KKList<BinaryExpressionItem>;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.kkTextField = <KKTextField>(<unknown>this.shadowRoot.querySelector(`${TextField.TAG}`));
        this.kkList = <KKList<BinaryExpressionItem>>(<unknown>this.shadowRoot.querySelector(`${List.TAG}`));
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
            const expressionItem: BinaryExpressionItem = new BinaryExpressionItem(this.kkTextField.value, '12');
            this.kkList.addElement(expressionItem);
            this.kkTextField.clear();
            e.preventDefault();
        }
    }
}

customElements.define(BinaryExpression.TAG, BinaryExpression);
