import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { TextFieldObservedAttributes } from './interface/TextFieldObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { textFieldsStyles } from './TextFieldsStyles';
import { EnumValueEnumConverter } from '../../converters/EnumValueEnumConverter';
import { TextFieldSize } from './interface/TextFieldSize';
import { NotSupportedSize } from '../../errors/NotSupportedSize';
import { TextFieldListenerProps } from './interface/TextFieldListenerProps';
import { KKTextField } from './interface/KKTextField';

const template: string = `
<style>${textFieldsStyles}</style>
<div>
  <input type="text">
</div>
`;

export class TextField extends KKWebComponent implements KKTextField {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-text-field`;
    public static observedAttributes: TextFieldObservedAttributes[] = Object.values(TextFieldObservedAttributes);

    public readonly shadowRoot!: ShadowRoot;

    private static INPUT_XS_CLASS: string = 'input-xs';
    private static INPUT_S_CLASS: string = 'input-s';
    private static INPUT_M_CLASS: string = 'input-m';
    private static INPUT_L_CLASS: string = 'input-l';
    private static INPUT_XL_CLASS: string = 'input-xl';

    private textFieldContainer!: HTMLDivElement;
    private input!: HTMLInputElement;

    constructor() {
        super(template);
        this.getElementsReferences();
    }

    get value(): string {
        return this.input.value;
    }

    public attributeChangedCallback(name: TextFieldObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case TextFieldObservedAttributes.PLACEHOLDER:
                this.input.placeholder = newValue;
                break;
            case TextFieldObservedAttributes.LABEL:
                this.addLabel(newValue);
                break;
            case TextFieldObservedAttributes.SIZE:
                this.setInputSize(EnumValueEnumConverter.toEnumFromValue(newValue, TextFieldSize));
                break;
            default:
                throw new NotSupportedObservedAttribute(
                    `Attribute: ${name} doesn't exist in ${TextField.name} component`,
                );
        }
    }

    public setTextFieldInputListener({ eventName, callback }: TextFieldListenerProps): void {
        this.input.addEventListener(eventName, callback);
    }

    protected getElementsReferences(): void {
        this.textFieldContainer = <HTMLDivElement>this.shadowRoot.querySelector('div');
        this.input = <HTMLInputElement>this.textFieldContainer.querySelector('input');
    }

    private addLabel(labelText: string): void {
        const label = document.createElement('label');
        label.textContent = labelText;
        this.textFieldContainer.prepend(label);
    }

    private setInputSize(textFieldSize: TextFieldSize): void {
        switch (textFieldSize) {
            case TextFieldSize.XS:
                this.input.className = TextField.INPUT_XS_CLASS;
                break;
            case TextFieldSize.S:
                this.input.className = TextField.INPUT_S_CLASS;
                break;
            case TextFieldSize.M:
                this.input.className = TextField.INPUT_M_CLASS;
                break;
            case TextFieldSize.L:
                this.input.className = TextField.INPUT_L_CLASS;
                break;
            case TextFieldSize.XL:
                this.input.className = TextField.INPUT_XL_CLASS;
                break;
            default:
                throw new NotSupportedSize(`Size: ${textFieldSize} is not supported in component: ${TextField.name}`);
        }
    }
}
customElements.define(TextField.TAG, TextField);
