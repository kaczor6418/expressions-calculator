import { MouseEventCallback } from '../../../common/Types';

export interface KKSingleExpression {
    expressionOperation: string;
    expressionScore: number | null;
    setScoreCallback(callback: MouseEventCallback): void;
}
