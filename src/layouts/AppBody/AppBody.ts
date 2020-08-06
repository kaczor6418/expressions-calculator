import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { appBodyStyles } from './AppBodyStyles';

const template: string = `
<style>${appBodyStyles}</style>
<main><slot></slot></main>
`;

export class AppBody extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app-body`;

    constructor() {
        super(template);
    }
}
customElements.define(AppBody.TAG, AppBody);
