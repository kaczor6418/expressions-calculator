import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { KKButton } from './interfaces/KKButton';
import { MouseEventCallback } from '../../common/Types';
import { ButtonObservedAttributes } from './interfaces/ButtonObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { IconId } from '../../common/Enums/IconId';
import { Icon } from '../Icon/Icon';
import { EnumValueEnumConverter } from '../../converters/EnumValueEnumConverter';
import { buttonStyles } from './ButtonStyles';

const template: string = `
<style>${buttonStyles}</style>
<button type="button">
  <slot name="icon"></slot>
</button>
`;

export class Button extends KKWebComponent implements KKButton {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-button`;
    public static observedAttributes: ButtonObservedAttributes[] = Object.values(ButtonObservedAttributes);

    private readonly button: HTMLButtonElement = <HTMLButtonElement>this.shadowRoot.querySelector('button');

    private _disabled: boolean = false;

    constructor() {
        super(template);
    }

    set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.button.disabled = this._disabled;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    attributeChangedCallback(name: ButtonObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return void 0;
        }
        switch (name) {
            case ButtonObservedAttributes.DISABLED:
                this.button.toggleAttribute('disabled');
                break;
            case ButtonObservedAttributes.ICON:
                this.addIcon(EnumValueEnumConverter.toEnumFromKey(newValue, IconId));
                break;
            case ButtonObservedAttributes.SHAPE:
                break;
            case ButtonObservedAttributes.TEXT:
                this.button.textContent = newValue;
                break;
            case ButtonObservedAttributes.AUTO_FIT:
                this.button.style.height = '100%';
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${Button.name} component`);
        }
    }

    public setButtonCallback(callback: MouseEventCallback): void {
        this.button.addEventListener('click', callback);
    }

    private addIcon(iconId: IconId): void {
        const icon: Icon = new Icon(iconId);
        this.button.appendChild(icon);
    }
}
customElements.define(Button.TAG, Button);
