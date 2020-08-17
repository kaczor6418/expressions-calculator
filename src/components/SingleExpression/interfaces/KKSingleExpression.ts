import { MouseEventCallback } from '../../../common/Types';

export interface KKSingleExpression extends HTMLElement {
    expressionOperation: string;
    expressionScore: number | null;
    setScoreCallback(callback: MouseEventCallback): void;
}
