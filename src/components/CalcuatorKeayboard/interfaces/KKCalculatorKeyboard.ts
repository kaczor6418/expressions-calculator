import { CalculatorKeyboardLayout } from './CalculatorKeyboardLayout';
import { Button } from '../../Button/Button';

export interface KKCalculatorKeyboard {
    values: Button[];
    operators: Button[];
    setLayout(layout: CalculatorKeyboardLayout): void;
}
