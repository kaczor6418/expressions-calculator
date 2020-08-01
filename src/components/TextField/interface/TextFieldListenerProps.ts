export type TextFieldListenerProps = BlurTextFieldListenerProps | InputTextFieldListenerProps;

export interface BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'blur' | 'input'>;
    callback: EventListener;
}

export interface BlurTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'blur'>;
}

export interface InputTextFieldListenerProps extends BaseTextFieldListenerProps {
    eventName: Extract<keyof GlobalEventHandlersEventMap, 'input'>;
}

export function isBlurTextFieldProps(value: BaseTextFieldListenerProps): value is BlurTextFieldListenerProps {
    return value.eventName === 'blur';
}
