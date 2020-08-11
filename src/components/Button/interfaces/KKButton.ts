import { MouseEventCallback } from '../../../common/Types';

export interface KKButton {
    disable: boolean;
    setButtonCallback(callback: MouseEventCallback): void;
}
