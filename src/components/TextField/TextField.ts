import * as styles from './TextField.scss';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { TextFieldObservedAttributes } from './interface/TextFieldObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { EnumValueEnumConverter } from '../../converters/EnumValueEnumConverter';
import { ElementSize } from '../../common/Enums/ElementSize';
import { NotSupportedSize } from '../../errors/NotSupportedSize';
import {
    isOnBlurTextFieldProps,
    isOnInputTextFieldProps,
    isOnKeyDownTextFieldListenerProps,
    TextFieldListenerProps
} from './interface/TextFieldListenerProps';
import { KKTextField } from './interface/KKTextField';
import { KKWebComponentProps } from '../KKWebComponent/interface/KKWebComponentProps';

const template: string = `
<div>
  <input type="text">
</div>
`;

export class TextField extends KKWebComponent implements KKTextField {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-text-field`;
    public static observedAttributes: TextFieldObservedAttributes[] = Object.values(TextFieldObservedAttributes);

    private static INPUT_XS_CLASS: string = 'input-xs';
    private static INPUT_S_CLASS: string = 'input-s';
    private static INPUT_M_CLASS: string = 'input-m';
    private static INPUT_L_CLASS: string = 'input-l';
    private static INPUT_XL_CLASS: string = 'input-xl';

    private readonly textFieldContainer: HTMLDivElement = <HTMLDivElement>this.shadowRoot.querySelector('div');
    private readonly input: HTMLInputElement = <HTMLInputElement>this.textFieldContainer.querySelector('input');

    constructor(props?: KKWebComponentProps<keyof typeof TextFieldObservedAttributes>) {
        super(template, styles, props);
    }

    get lastChar(): string {
        return this.input.value.trimEnd()[this.input.value.trimEnd().length - 1];
    }

    get value(): string {
        return this.input.value;
    }

    set value(newValue: string) {
        this.input.value = newValue;
    }

    public attributeChangedCallback(name: TextFieldObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return void 0;
        }
        switch (name) {
            case TextFieldObservedAttributes.PLACEHOLDER:
                this.input.placeholder = newValue;
                break;
            case TextFieldObservedAttributes.LABEL:
                this.addLabel(newValue);
                break;
            case TextFieldObservedAttributes.SIZE:
                this.setInputSize(EnumValueEnumConverter.toEnumFromValue(newValue, ElementSize));
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${TextField.name} component`);
        }
    }

    public clear(): void {
        this.input.value = '';
    }

    public setTextFieldInputListener(listenerProps: TextFieldListenerProps): void {
        if (isOnBlurTextFieldProps(listenerProps)) {
            this.input.addEventListener<'blur'>(listenerProps.eventName, listenerProps.callback.bind(this));
        } else if (isOnInputTextFieldProps(listenerProps)) {
            this.input.addEventListener<'input'>(listenerProps.eventName, listenerProps.callback.bind(this));
        } else if (isOnKeyDownTextFieldListenerProps(listenerProps)) {
            this.input.addEventListener<'keydown'>(listenerProps.eventName, listenerProps.callback.bind(this));
        }
    }

    private addLabel(labelText: string): void {
        const label = document.createElement('label');
        label.textContent = labelText;
        this.textFieldContainer.prepend(label);
    }

    private setInputSize(textFieldSize: ElementSize): void {
        switch (textFieldSize) {
            case ElementSize.XS:
                this.input.className = TextField.INPUT_XS_CLASS;
                break;
            case ElementSize.S:
                this.input.className = TextField.INPUT_S_CLASS;
                break;
            case ElementSize.M:
                this.input.className = TextField.INPUT_M_CLASS;
                break;
            case ElementSize.L:
                this.input.className = TextField.INPUT_L_CLASS;
                break;
            case ElementSize.XL:
                this.input.className = TextField.INPUT_XL_CLASS;
                break;
            default:
                throw new NotSupportedSize(`Size: ${textFieldSize} is not supported in component: ${TextField.name}`);
        }
    }
}
customElements.define(TextField.TAG, TextField);
