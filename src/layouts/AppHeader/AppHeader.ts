import * as styles from './AppHeader.scss';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';

const template: string = `
<header>
  <slot name="prepend"></slot>
  <slot name="center"></slot>
  <slot name="append"></slot>
</header>
`;

export class AppHeader extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app-header`;

    constructor() {
        super(template, styles);
    }
}
customElements.define(AppHeader.TAG, AppHeader);
