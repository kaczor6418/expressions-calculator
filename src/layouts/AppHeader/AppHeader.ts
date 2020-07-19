import {CONSTANTS} from "../../common/CONSTANTS";
import {KKWebComponent} from "../../common/interfaces";
import {TAppHeader} from "./interfaces/TAppHeader";
import {ObservedAttributes} from "./interfaces/ObservedAttributes";

const template: string = `
<header>
  <h1 part="heading"></h1>
</header>
`;

export class AppHeader extends HTMLElement implements KKWebComponent, TAppHeader {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-header`;
    public static observedAttributes: ObservedAttributes[] = [ObservedAttributes.TITLE];

    public readonly shadowRoot!: ShadowRoot;

    private header!: HTMLHeadingElement;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
        this.setUpElements();
    }

    setUpElements(): void {
        this.header = <HTMLHeadingElement>this.shadowRoot.querySelector('h1');
    }

    set titleText(title: string) {
        this.setAttribute(ObservedAttributes.TITLE, title);
    }

    get titleText() {
        return this.header.innerText;
    }

    // @ts-ignore
    public attributeChangedCallback(name: ObservedAttributes, oldValue: string, newValue: string): void {
        if (name === ObservedAttributes.TITLE) {
            this.header.innerText = newValue;
        }
    }
}
customElements.define(AppHeader.TAG, AppHeader);
