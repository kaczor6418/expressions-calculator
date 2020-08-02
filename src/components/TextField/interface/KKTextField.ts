import { TextFieldListenerProps } from './TextFieldListenerProps';

export interface KKTextField {
    readonly value: string;
    setTextFieldInputListener(props: TextFieldListenerProps): void;
}
