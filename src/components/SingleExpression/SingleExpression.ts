import { KKWebComponent } from '../KKWebComponent/KKWebComponent';
import { CONSTANTS } from '../../common/CONSTANTS';
import { KKSingleExpression } from './interfaces/KKSingleExpression';
import { singleExpressionStyles } from './SingleExpressionStyles';
import { Utils } from '../../common/Utils';
import { ValueUnset } from '../../errors/ValueUnset';
import { MouseEventCallback } from '../../common/Types';

const template: string = `
<style>${singleExpressionStyles}</style>
<p>
    <var></var> = <mark></mark>
</p>
`;

export class SingleExpression extends KKWebComponent implements KKSingleExpression {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-single-expression`;

    private readonly expression: HTMLElement = <HTMLElement>this.shadowRoot.querySelector('var');
    private readonly score: HTMLElement = <HTMLElement>this.shadowRoot.querySelector('mark');

    private value: number | null = null;

    constructor() {
        super(template);
    }

    set expressionOperation(value: string) {
        this.expression.textContent = value;
    }

    get expressionOperation(): string {
        return this.expression.textContent ?? '';
    }

    get expressionScore(): number {
        if (Utils.isNullOrUndefined(this.value)) {
            throw new ValueUnset(`Value of ${SingleExpression.name} has not been set!`);
        }
        return this.value;
    }

    set expressionScore(value: number) {
        this.value = value;
        this.score.textContent = value.toString();
    }

    public setScoreCallback(callback: MouseEventCallback): void {
        this.score.addEventListener('click', callback);
    }
}
customElements.define(SingleExpression.TAG, SingleExpression);
