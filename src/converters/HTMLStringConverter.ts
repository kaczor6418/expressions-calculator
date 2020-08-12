import { Utils } from '../common/Utils';
import { ParserError } from '../errors/ParserError';

export class HTMLStringConverter {
    public static toElement<T extends Element>(htmlString: string): T {
        const wrapper: HTMLDivElement = document.createElement('div');
        wrapper.innerHTML = htmlString;
        const parsedElement: T | null = <T>wrapper.firstElementChild;
        if (Utils.isNullOrUndefined(parsedElement)) {
            throw new ParserError(`This xml string ${htmlString} is not parsable to Element`);
        }
        return parsedElement;
    }
}
