import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';

const template: string = `
<div>
  <strong>BUTTON</strong>
</div>
`;

export class Button extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-button`;

    constructor() {
        super(template);
    }
}
customElements.define(Button.TAG, Button);
