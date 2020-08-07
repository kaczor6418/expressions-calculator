import { KKWebComponent } from './components/KKWebComponent/KKWebComponent';
import { CONSTANTS } from './common/CONSTANTS';
import { BinaryCalculator } from './views/BinaryCalculator/BinaryCalculator';

const template: string = `
<${BinaryCalculator.TAG}></${BinaryCalculator.TAG}>
`;

export class App extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app`;

    constructor() {
        super(template);
    }
}
customElements.define(App.TAG, App);
