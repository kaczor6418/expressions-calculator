import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKBinaryExpressionItem } from './interfaces/KKBinaryExpressionItem';
import { binaryExpressionItemStyles } from './BinaryExpressionItemStyles';
import { Utils } from '../../common/Utils';
import { ValueUnset } from '../../errors/ValueUnset';

const template: string = `
<style>${binaryExpressionItemStyles}</style>
<p>
    <var></var> = <mark></mark>
</p>
`;

export class BinaryExpressionItem extends KKWebComponent implements KKBinaryExpressionItem {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-expression-tem`;

    private readonly expression: HTMLElement = <HTMLElement>this.shadowRoot.querySelector('var');
    private readonly score: HTMLElement = <HTMLElement>this.shadowRoot.querySelector('mark');

    private value: number | null = null;

    constructor() {
        super(template);
    }

    set expressionValue(value: string) {
        this.expression.textContent = value;
    }

    get expressionValue(): string {
        return this.expression.textContent ?? '';
    }

    get scoreValue(): number {
        if (Utils.isNullOrUndefined(this.value)) {
            throw new ValueUnset(`Value of ${BinaryExpressionItem.name} has not been set!`);
        }
        return this.value;
    }

    set scoreValue(value: number) {
        this.value = value;
        this.score.textContent = value.toString();
    }

    public setScoreCallback(callback: (e?: MouseEvent) => void): void {
        this.score.addEventListener('click', callback);
    }
}
customElements.define(BinaryExpressionItem.TAG, BinaryExpressionItem);
