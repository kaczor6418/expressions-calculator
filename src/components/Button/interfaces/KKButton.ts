import { MouseEventCallback } from '../../../common/Types';

export interface KKButton {
    disabled: boolean;
    setButtonCallback(callback: MouseEventCallback): void;
}
