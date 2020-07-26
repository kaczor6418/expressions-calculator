import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';

const template: string = `
<div>
  <strong>INPUT</strong>
</div>
`;

export class Input extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-input`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super(template);
    }
}
customElements.define(Input.TAG, Input);
