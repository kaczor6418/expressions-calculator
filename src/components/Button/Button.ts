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
import { KKWebComponentProps } from '../KKWebComponent/interface/KKWebComponentProps';
import { ButtonSize } from './interfaces/ButtonSize';

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
    private static RIPPLE_ANIMATION_DURATION = 600;

    private readonly button: HTMLButtonElement = <HTMLButtonElement>this.shadowRoot.querySelector('button');

    private _disabled: boolean = false;
    private size: ElementSize = ElementSize.M;

    constructor(props?: KKWebComponentProps<keyof typeof ButtonObservedAttributes>) {
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
        switch (name) {
            case ButtonObservedAttributes.AUTO_FIT:
                this.button.style.height = '100%';
                this.button.style.width = '100%';
                break;
            case ButtonObservedAttributes.DISABLED:
                this.button.toggleAttribute('disabled');
                break;
            case ButtonObservedAttributes.ICON:
                this.addIcon(EnumValueEnumConverter.toEnumFromValue(newValue, IconId));
                break;
            case ButtonObservedAttributes.MIN_WIDTH:
                this.button.style.minWidth = EnumValueEnumConverter.toEnumFromValue(newValue, ButtonSize);
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
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${Button.name} component`);
        }
        if (oldValue === newValue) {
            return void 0;
        }
    }

    public setButtonCallback(callback: MouseEventCallback): void {
        this.button.addEventListener('click', (e) => {
            const ripple: HTMLSpanElement = document.createElement('span');
            ripple.style.left = `${e.offsetX}px`;
            ripple.style.top = `${e.offsetY}px`;
            this.button.appendChild(ripple);
            window.setTimeout(() => {
                ripple.remove();
            }, Button.RIPPLE_ANIMATION_DURATION);
            callback(e);
        });
    }

    private addIcon(iconId: IconId): void {
        const icon: Icon = new Icon({
            ICON_ID: iconId
        });
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
                this.button.style[qualifiedName] = ButtonSize.L;
                break;
            case ElementSize.M:
                this.button.style[qualifiedName] = ButtonSize.M;
                break;
            case ElementSize.S:
                this.button.style[qualifiedName] = ButtonSize.S;
                break;
            case ElementSize.XL:
                this.button.style[qualifiedName] = ButtonSize.XL;
                break;
            case ElementSize.XS:
                this.button.style[qualifiedName] = ButtonSize.XS;
                break;
            default:
                throw new NotSupportedSize(`Size: ${this.size} is not supported in component: ${Button.name}`);
        }
    }
}
customElements.define(Button.TAG, Button);
