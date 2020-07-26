import { Utils } from '../../common/Utils';

export abstract class KKWebComponent extends HTMLElement {
    public readonly shadowRoot!: ShadowRoot;

    protected constructor(template: string) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        Utils.injectGlobalStyles(this.shadowRoot);
    }

    protected getElementsReferences(): void {
        return void 0;
    }
}
