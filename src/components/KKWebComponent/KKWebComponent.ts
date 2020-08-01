import { Utils } from '../../common/Utils';
import { WebComponentLifecycle } from './interface/WebComponentLifecycle';

export abstract class KKWebComponent extends HTMLElement implements Partial<WebComponentLifecycle> {
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

    protected setUpElements(): void {
        return void 0;
    }

    adoptedCallback(): void {
        return void 0;
    }

    attributeChangedCallback(_name: string, _oldValue: string, _newValue: string): void {
        return void 0;
    }

    connectedCallback(): void {
        return void 0;
    }

    disconnectedCallback(): void {
        return void 0;
    }
}
