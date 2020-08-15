import { KKWebComponent } from './components/KKWebComponent/KKWebComponent';
import { CONSTANTS } from './common/CONSTANTS';
import { Calculator } from './views/Calculator/Calculator';

const template: string = `
<${Calculator.TAG}></${Calculator.TAG}>
`;

export class App extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app`;

    constructor() {
        super(template);
    }
}
customElements.define(App.TAG, App);
