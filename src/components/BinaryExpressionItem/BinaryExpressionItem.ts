import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKBinaryExpressionItem } from './interfaces/KKBinaryExpressionItem';

const template: string = `
<p>
    <var></var>
    <mark></mark>
</p>
`;

export class BinaryExpressionItem extends KKWebComponent implements KKBinaryExpressionItem {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-expression-tem`;

    private expression: HTMLElement = <HTMLElement>this.shadowRoot.querySelector('var');
    private score: HTMLElement = <HTMLElement>this.shadowRoot.querySelector('mark');

    constructor(expressionValue: string, scoreValue: string) {
        super(template);
        this.expression.textContent = expressionValue;
        this.score.textContent = scoreValue;
    }

    get expressionValue(): string {
        return this.expression.textContent ?? '';
    }

    get scoreValue(): string {
        return this.score.textContent ?? '';
    }
}
customElements.define(BinaryExpressionItem.TAG, BinaryExpressionItem);
