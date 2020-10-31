import * as styles from './AppBody.scss';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';

const template: string = `
<main><slot></slot></main>
`;

export class AppBody extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app-body`;

    constructor() {
        super(template, styles);
    }
}
customElements.define(AppBody.TAG, AppBody);
