export interface KKBinaryExpressionItem {
    expressionValue: string;
    scoreValue: number | null;
    setScoreCallback(callback: (e?: MouseEvent) => void): void;
}
