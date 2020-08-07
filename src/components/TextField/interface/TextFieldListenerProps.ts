export type TextFieldListenerProps = OnBlurTextFieldListenerProps | OnInputTextFieldListenerProps | OnKeyDownTextFieldListenerProps;

export interface BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'blur' | 'input' | 'keydown'>;
    callback(e?: Event): void;
}

export interface OnBlurTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'blur'>;
    callback(e?: FocusEvent): void;
}

export interface OnInputTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'input'>;
    callback(e?: Event): void;
}

export interface OnKeyDownTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'keydown'>;
    callback(e?: KeyboardEvent): void;
}

export function isOnBlurTextFieldProps(value: BaseTextFieldListenerProps): value is OnBlurTextFieldListenerProps {
    return value.eventName === 'blur';
}

export function isOnInputTextFieldProps(value: BaseTextFieldListenerProps): value is OnInputTextFieldListenerProps {
    return value.eventName === 'input';
}

export function isOnKeyDownTextFieldListenerProps(value: BaseTextFieldListenerProps): value is OnKeyDownTextFieldListenerProps {
    return value.eventName === 'keydown';
}
