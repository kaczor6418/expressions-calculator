export type TextFieldListenerProps = BlurTextFieldListenerProps | InputTextFieldListenerProps;

export interface BaseTextFieldListenerProps {
    eventName: any; //Extract<keyof GlobalEventHandlersEventMap, 'blur' | 'input'>;
    callback(e?: FocusEvent | InputEvent): void;
}

export interface BlurTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: any; //Extract<keyof GlobalEventHandlersEventMap, 'blur'>;
    callback(e?: FocusEvent): void;
}

export interface InputTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: any; //Extract<keyof GlobalEventHandlersEventMap, 'input'>;
    callback(e?: InputEvent): void;
}

export function isBlurTextFieldProps(value: BaseTextFieldListenerProps): value is BlurTextFieldListenerProps {
    return value.eventName === 'blur';
}
