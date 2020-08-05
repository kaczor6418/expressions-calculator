import { Utils } from '../common/Utils';
import { ParseToElementError } from '../errors/ParseToElementError';

export class HTMLStringConverter {
    public static toElement<T extends Element>(htmlString: string): T {
        const wrapper: HTMLDivElement = document.createElement('div');
        wrapper.innerHTML = htmlString;
        const parsedElement: T | null = <T>wrapper.firstElementChild;
        if (!Utils.isNullOrUndefined(parsedElement)) {
            return parsedElement;
        }
        throw new ParseToElementError(`This xml string ${htmlString} is not parsable to Element`);
    }
}
