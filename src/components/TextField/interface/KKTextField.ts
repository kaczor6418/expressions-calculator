import { TextFieldListenerProps } from './TextFieldListenerProps';

export interface KKTextField {
    readonly lastChar: string;
    value: string;
    clear(): void;
    setTextFieldInputListener(props: TextFieldListenerProps): void;
}
