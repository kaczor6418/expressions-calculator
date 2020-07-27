import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { IconId } from '../../common/IconId';
import { IconDefinitions } from '../../common/IconDefinitoins';
import { IconSize } from './interfaces/IconSize';
import { KKIcon } from './interfaces/KKIcon';

const template: string = `
<a></a>
`;

export class Icon extends KKWebComponent implements KKIcon {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-icon`;

    public readonly shadowRoot!: ShadowRoot;

    private iconContainer!: HTMLSpanElement;
    private icon!: SVGElement;

    constructor() {
        super(template);
        this.getElementsReferences();
    }

    set iconId(iconId: IconId) {
        const icon: SVGElement = IconDefinitions.getIcon(iconId);
        this.icon = icon;
        this.iconSize = IconSize.M;
        this.iconContainer.appendChild(icon);
    }

    set iconSize(iconSize: IconSize) {
        this.icon.setAttribute('width', iconSize);
        this.icon.setAttribute('height', iconSize);
    }

    protected getElementsReferences(): void {
        this.iconContainer = <HTMLSpanElement>this.shadowRoot.querySelector('a');
    }
}
customElements.define(Icon.TAG, Icon);
