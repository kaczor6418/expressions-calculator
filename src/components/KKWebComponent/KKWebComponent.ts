import { Utils } from '../../common/Utils';
import { WebComponentLifecycle } from './interface/WebComponentLifecycle';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponentProps } from './interface/KKWebComponentProps';

export abstract class KKWebComponent<T extends string = string> extends HTMLElement implements WebComponentLifecycle {
    public readonly shadowRoot!: ShadowRoot;

    private readonly props: KKWebComponentProps<T> | undefined = undefined;

    protected constructor(template: string, props?: KKWebComponentProps<T>) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        this.props = props;
        Utils.injectGlobalStyles(this.shadowRoot);
    }

    protected initialize(): void {
        if (!Utils.isNullOrUndefined(this.props)) {
            for (const [key, value] of Object.entries(this.props)) {
                this.setAttribute(key.toLowerCase().replace(CONSTANTS.ENUM_DELIMITER, CONSTANTS.COMPONENT_TAG_DELIMITER), <string>value);
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        return void 0;
    }

    public connectedCallback(): void {
        this.initialize();
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
