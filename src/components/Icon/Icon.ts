import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { IconId } from '../../common/IconId';
import { IconDefinitions } from '../../common/IconDefinitoins';
import { IconSize } from './interfaces/IconSize';
import { KKIcon } from './interfaces/KKIcon';
import { IconObservedAttributes } from './interfaces/IconObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';

const template: string = `
<a></a>
`;

export class Icon extends KKWebComponent implements KKIcon {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-icon`;
    public static observedAttributes: IconObservedAttributes[] = Object.values(IconObservedAttributes);

    public readonly shadowRoot!: ShadowRoot;

    private iconContainer!: HTMLAnchorElement;
    private icon!: SVGElement;

    constructor() {
        super(template);
        this.getElementsReferences();
    }

    set iconId(iconId: IconId) {
        if (this.hasIcon()) {
            this.iconContainer.removeChild(this.icon);
        }
        this.icon = IconDefinitions.getIcon(iconId);
        this.iconContainer.appendChild(this.icon);
        this.iconSize = IconSize.M;
    }

    set iconSize(iconSize: IconSize) {
        this.icon.setAttribute('width', iconSize);
        this.icon.setAttribute('height', iconSize);
    }

    public attributeChangedCallback(name: IconObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case IconObservedAttributes.HREF:
                this.iconContainer.href = newValue;
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${Icon.name} component`);
        }
    }

    protected getElementsReferences(): void {
        this.iconContainer = <HTMLAnchorElement>this.shadowRoot.querySelector('a');
    }

    private hasIcon(): boolean {
        return this.iconContainer.childElementCount > 0;
    }
}
customElements.define(Icon.TAG, Icon);
