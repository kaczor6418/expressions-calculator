import {KKWebComponent} from "../KKWebComponent/KKWebComponent";
import {CONSTANTS} from "../../common/CONSTANTS";
import {headingStyles} from "./HeadingStyles";


const template: string = `
<style>${headingStyles}</style>
<h1><slot></slot></h1>
`;

export class Heading extends KKWebComponent {
    public static TAG = `${CONSTANTS.TAG_PREFIX}-heading`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }
}
customElements.define(Heading.TAG, Heading);
