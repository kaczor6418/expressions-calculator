import * as styles from './Heading.scss';
import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';

const template: string = `
<h1><slot></slot></h1>
`;

export class Heading extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-heading`;

    constructor() {
        super(template, styles);
    }
}
customElements.define(Heading.TAG, Heading);
