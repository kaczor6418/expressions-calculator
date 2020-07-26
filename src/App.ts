import { KKWebComponent } from './components/KKWebComponent/KKWebComponent';

export * from './views/BinaryCalculator/UsedComponents';
import { CONSTANTS } from './common/CONSTANTS';

const template: string = `
<kk-binary-calculator></kk-binary-calculator>
`;

export class App extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }
}
customElements.define(App.TAG, App);
