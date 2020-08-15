import { Utils } from '../../common/Utils';
import { WebComponentLifecycle } from './interface/WebComponentLifecycle';

export abstract class KKWebComponent extends HTMLElement implements WebComponentLifecycle {
    public readonly shadowRoot!: ShadowRoot;

    protected constructor(template: string) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        Utils.injectGlobalStyles(this.shadowRoot);
    }

    protected initialize<T>(props: Record<keyof typeof T, string>): void {
        for (const [key, value] of Object.entries(props)) {
            this.setAttribute(key, value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        return void 0;
    }

    public connectedCallback(): void {
        return void 0;
    }

    public disconnectedCallback(): void {
        return void 0;
    }

    public adoptedCallback(): void {
        return void 0;
    }

    protected setUpElements(): void {
        return void 0;
    }
}
