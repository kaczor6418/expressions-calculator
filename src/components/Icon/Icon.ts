import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { IconId } from '../../common/IconDefinitions/IconId';
import { IconDefinitions } from '../../common/IconDefinitions/IconDefinitoins';
import { IconSize } from './interfaces/IconSize';
import { IconObservedAttributes } from './interfaces/IconObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { EnumValueEnumConverter } from '../../converters/EnumValueEnumConverter';
import { iconStyles } from './IconStyles';

const template: string = `
<style>${iconStyles}</style>
<a></a>
`;

export class Icon extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-icon`;
    public static observedAttributes: IconObservedAttributes[] = Object.values(IconObservedAttributes);

    public readonly shadowRoot!: ShadowRoot;

    private static REDIRECT_CLASS = 'redirect';

    private iconContainer!: HTMLAnchorElement;
    private icon!: SVGElement;

    constructor() {
        super(template);
        this.getElementsReferences();
    }

    public attributeChangedCallback(name: IconObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case IconObservedAttributes.ICON_ID:
                this.addIcon(EnumValueEnumConverter.toEnumFromKey(newValue, IconId));
                break;
            case IconObservedAttributes.ICON_SIZE:
                this.setIconSize(EnumValueEnumConverter.toEnumFromValue(newValue, IconSize));
                break;
            case IconObservedAttributes.HREF:
                this.setRedirectLinkAndClass(newValue);
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${Icon.name} component`);
        }
    }

    protected getElementsReferences(): void {
        this.iconContainer = <HTMLAnchorElement>this.shadowRoot.querySelector('a');
    }

    private addIcon(iconId: IconId): void {
        if (this.hasIcon()) {
            this.iconContainer.removeChild(this.icon);
        }
        this.icon = IconDefinitions.getIcon(iconId);
        this.iconContainer.appendChild(this.icon);
        this.setIconSize(IconSize.M);
    }

    private setIconSize(iconSize: IconSize): void {
        this.icon.setAttribute('width', iconSize);
        this.icon.setAttribute('height', iconSize);
    }

    private setRedirectLinkAndClass(link: string): void {
        this.icon.classList.add(Icon.REDIRECT_CLASS);
        this.iconContainer.href = link;
    }

    private hasIcon(): boolean {
        return this.iconContainer.childElementCount > 0;
    }
}

customElements.define(Icon.TAG, Icon);