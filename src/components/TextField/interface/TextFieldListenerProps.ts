export type TextFieldListenerProps = OnBlurTextFieldListenerProps | OnInputTextFieldListenerProps;

export interface BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'blur' | 'input'>;
    callback(e?: FocusEvent | InputEvent): void;
}

export interface OnBlurTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'blur'>;
    callback(e?: FocusEvent): void;
}

export interface OnInputTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'input'>;
    callback(e?: Event): void;
}

export function isOnBlurTextFieldProps(value: BaseTextFieldListenerProps): value is OnBlurTextFieldListenerProps {
    return value.eventName === 'blur';
}

export function isOnInputTextFieldProps(value: BaseTextFieldListenerProps): value is OnInputTextFieldListenerProps {
    return value.eventName === 'input';
}
