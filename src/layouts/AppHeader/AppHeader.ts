import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { appHeaderStyles } from './AppHeaderStyles';

const template: string = `
<style>${appHeaderStyles}</style>
<header>
  <slot name="prepend"></slot>
  <slot name="center"></slot>
  <slot name="append"></slot>
</header>
`;

export class AppHeader extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app-header`;

    constructor() {
        super(template);
    }
}
customElements.define(AppHeader.TAG, AppHeader);
