import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';

const template: string = `
<main>
  <strong>APP BODY</strong>
</main>
`;

export class AppBody extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app-body`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }
}
customElements.define(AppBody.TAG, AppBody);
