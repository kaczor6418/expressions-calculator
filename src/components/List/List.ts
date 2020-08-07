import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { listStyles } from './ListStyles';
import { CONSTANTS } from '../../common/CONSTANTS';
import { ListObservedAttributes } from './interfaces/ListObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { JSONCSSStyleDeclarationConverter } from '../../converters/JSONCSSStyleDeclarationConverter';
import { KKList } from './interfaces/KKList';

const template: string = `
<style>${listStyles}</style>
<ul></ul>
`;

export class List<T extends HTMLElement> extends KKWebComponent implements KKList<T> {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-list`;
    public static observedAttributes: ListObservedAttributes[] = Object.values(ListObservedAttributes);

    private listWrapper!: HTMLUListElement;
    private listElements: T[] = [];

    constructor() {
        super(template);
        this.getElementsReferences();
    }

    get elements(): T[] {
        return this.listElements;
    }

    set elements(listElements: T[]) {
        this.listElements = listElements;
    }

    public attributeChangedCallback(name: ListObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case ListObservedAttributes.CUSTOM_STYLES:
                this.setListCustomStyles(JSONCSSStyleDeclarationConverter.toCssStyleDeclaration(newValue));
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${List.name} component`);
        }
    }

    public addElement(element: T): void {
        this.listWrapper.appendChild(element);
    }

    protected getElementsReferences(): void {
        this.listWrapper = <HTMLUListElement>this.shadowRoot.querySelector('ul');
    }

    private setListCustomStyles(styles: Partial<CSSStyleDeclaration>): void {
        Object.assign(this.listWrapper.style, styles);
    }
}
customElements.define(List.TAG, List);
