import { TextFieldListenerProps } from './TextFieldListenerProps';

export interface TTextField {
    readonly value: string;
    setTextFieldInputListener(props: TextFieldListenerProps): void;
}
