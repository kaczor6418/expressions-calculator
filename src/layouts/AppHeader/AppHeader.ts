import {CONSTANTS} from "../../common/CONSTANTS";
import {TAppHeader} from "./interfaces/TAppHeader";
import {ObservedAttributes} from "./interfaces/ObservedAttributes";
import {KKWebComponent} from "../../components/KKWebComponent";
import {style} from "./AppHeaderStyle";

const template: string = `
<style>${style}</style>
<header>
  <h1 class="heading"></h1>
</header>
`;

export class AppHeader extends KKWebComponent implements TAppHeader {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-app-header`;
    public static observedAttributes: ObservedAttributes[] = [ObservedAttributes.TITLE];

    public readonly shadowRoot!: ShadowRoot;

    private header!: HTMLHeadingElement;

    constructor() {
        super(template);
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
