import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { dividersStyles } from './DividerStyles';

const template: string = `
<style>${dividersStyles}</style>
<hr/>
`;

export class Divider extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-divider`;

    constructor() {
        super(template);
    }
}
customElements.define(Divider.TAG, Divider);
