import * as styles from './Divider.scss';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';

const template: string = `
<hr/>
`;

export class Divider extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-divider`;

    constructor() {
        super(template, styles);
    }
}
customElements.define(Divider.TAG, Divider);
