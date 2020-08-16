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
import { ElementSize } from '../../common/Enums/ElementSize';
import { NotSupportedSize } from '../../errors/NotSupportedSize';
import { Shape } from '../../common/Enums/Shape';

const template: string = `
<style>${buttonStyles}</style>
<button type="button">
  <slot name="icon"></slot>
</button>
`;

export class Button extends KKWebComponent implements KKButton {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-button`;
    public static observedAttributes: ButtonObservedAttributes[] = Object.values(ButtonObservedAttributes);

    private static SHADOW_AROUND_CLASS: string = 'shadow-around';

    private readonly button: HTMLButtonElement = <HTMLButtonElement>this.shadowRoot.querySelector('button');

    private _disabled: boolean = false;
    private size: ElementSize = ElementSize.M;

    constructor(props?: Record<any, string>) {
        super(template, props);
        this.setButtonSize('width');
    }

    set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.button.disabled = this._disabled;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    public attributeChangedCallback(name: ButtonObservedAttributes, oldValue: string, newValue: string): void {
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
            case ButtonObservedAttributes.SHADOW:
                this.button.classList.add(Button.SHADOW_AROUND_CLASS);
                break;
            case ButtonObservedAttributes.SHAPE:
                this.setButtonShape(newValue);
                break;
            case ButtonObservedAttributes.SIZE:
                this.size = EnumValueEnumConverter.toEnumFromValue(newValue, ElementSize);
                this.setButtonSize('width');
                break;
            case ButtonObservedAttributes.TEXT:
                this.button.textContent = newValue;
                break;
            case ButtonObservedAttributes.AUTO_FIT:
                this.button.style.height = '100%';
                this.button.style.width = '100%';
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

    private setButtonShape(shape: string) {
        if (EnumValueEnumConverter.toEnumFromValue(shape, Shape) === Shape.CIRCLE) {
            this.setButtonSize('height');
            this.button.style.borderRadius = '50%';
        }
    }

    private setButtonSize(qualifiedName: Extract<keyof CSSStyleDeclaration, 'width' | 'height'>) {
        switch (this.size) {
            case ElementSize.L:
                this.button.style[qualifiedName] = '256px';
                break;
            case ElementSize.M:
                this.button.style[qualifiedName] = '128px';
                break;
            case ElementSize.S:
                this.button.style[qualifiedName] = '64px';
                break;
            case ElementSize.XL:
                this.button.style[qualifiedName] = '512px';
                break;
            case ElementSize.XS:
                this.button.style[qualifiedName] = '32px';
                break;
            default:
                throw new NotSupportedSize(`Size: ${this.size} is not supported in component: ${Button.name}`);
        }
    }
}
customElements.define(Button.TAG, Button);
