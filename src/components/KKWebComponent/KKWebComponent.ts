import { Utils } from '../../common/Utils';
import { WebComponentLifecycle } from './interface/WebComponentLifecycle';
import { CONSTANTS } from '../../common/CONSTANTS';

export abstract class KKWebComponent extends HTMLElement implements WebComponentLifecycle {
    public readonly shadowRoot!: ShadowRoot;

    private readonly props: Record<any, string> | undefined = undefined;

    protected constructor(template: string, props?: Record<any, string>) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        this.props = props;
        Utils.injectGlobalStyles(this.shadowRoot);
    }

    private initialize(props: Record<any, string>): void {
        for (const [key, value] of Object.entries(props)) {
            this.setAttribute(key.toLowerCase().replace(CONSTANTS.ENUM_DELIMITER, CONSTANTS.COMPONENT_TAG_DELIMITER), value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        return void 0;
    }

    public connectedCallback(): void {
        if (!Utils.isNullOrUndefined(this.props)) {
            this.initialize(this.props);
        }
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
