import { TextFieldListenerProps } from './TextFieldListenerProps';

export interface KKTextField {
    readonly value: string;
    clear(): void;
    setTextFieldInputListener(props: TextFieldListenerProps): void;
}
