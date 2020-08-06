import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { KKTextField } from '../TextField/interface/KKTextField';
import { OnInputTextFieldListenerProps } from '../TextField/interface/TextFieldListenerProps';
import { return_char } from '../../../calculator-engine/pkg/calculator_engine';
import { TextFieldSize } from '../TextField/interface/TextFieldSize';

const listCustomStyles: Partial<CSSStyleDeclaration> = {
    background: 'var(--color-accent-2-inactive)',
};

const template: string = `
<div>
  <kk-list custom-styles=${JSON.stringify(listCustomStyles)}></kk-list>
  <kk-text-field placeholder="Type expression..." size=${TextFieldSize.L}></kk-text-field>
</div>
`;

export class BinaryExpression extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-expression`;

    private textField!: KKTextField;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.textField = <KKTextField>(<unknown>this.shadowRoot.querySelector('kk-text-field'));
    }

    protected setUpElements(): void {
        const callbackProps: OnInputTextFieldListenerProps = {
            eventName: 'input',
            callback: () => console.log(return_char()),
        };
        this.textField.setTextFieldInputListener(callbackProps);
    }
}
customElements.define(BinaryExpression.TAG, BinaryExpression);
