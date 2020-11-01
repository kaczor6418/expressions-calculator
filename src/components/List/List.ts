import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import * as styles from './List.scss';
import { CONSTANTS } from '../../common/CONSTANTS';
import { ListObservedAttributes } from './interfaces/ListObservedAttributes';
import { NotSupportedObservedAttribute } from '../../errors/NotSupportedObservedAttribute';
import { JSONCSSStyleDeclarationConverter } from '../../converters/JSONCSSStyleDeclarationConverter';
import { KKList } from './interfaces/KKList';
import { KKWebComponentProps } from '../KKWebComponent/interface/KKWebComponentProps';

const template: string = `
<ul></ul>
`;

export class List<T extends HTMLElement> extends KKWebComponent implements KKList<T> {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-list`;
    public static observedAttributes: ListObservedAttributes[] = Object.values(ListObservedAttributes);

    private readonly listWrapper: HTMLUListElement = <HTMLUListElement>this.shadowRoot.querySelector('ul');

    private itemGap: string = 'unset';
    private listElements: T[] = [];

    constructor(props?: KKWebComponentProps<keyof typeof ListObservedAttributes>) {
        super(template, styles, props);
    }

    get elements(): T[] {
        return this.listElements;
    }

    set elements(listElements: T[]) {
        this.listElements = listElements;
        for (const element of this.elements) {
            this.appendListElement(element);
        }
    }

    public attributeChangedCallback(name: ListObservedAttributes, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case ListObservedAttributes.CUSTOM_STYLES:
                this.setListCustomStyles(JSONCSSStyleDeclarationConverter.toCssStyleDeclaration(newValue));
                break;
            case ListObservedAttributes.ITEM_GAP:
                this.itemGap = newValue;
                break;
            default:
                throw new NotSupportedObservedAttribute(`Attribute: ${name} doesn't exist in ${List.name} component`);
        }
    }

    public addElement(element: T): void {
        this.elements.push(element);
        this.appendListElement(element);
    }

    private appendListElement(element: T): void {
        const li: HTMLLIElement = document.createElement('li');
        li.appendChild(element);
        li.style.padding = this.itemGap;
        this.listWrapper.appendChild(li);
    }

    private setListCustomStyles(customStyles: Partial<CSSStyleDeclaration>): void {
        Object.assign(this.listWrapper.style, customStyles);
    }
}

customElements.define(List.TAG, List);
