import { Utils } from '../common/Utils';
import { ParseToElementError } from '../errors/ParseToElementError';

export class StringElementConverter {
    private readonly domParser: DOMParser;

    constructor() {
        this.domParser = new DOMParser();
    }

    public toElement<T extends Element>(xmlString: string): T {
        const parsedString: Element | null = this.domParser.parseFromString(xmlString, 'text/xml').firstElementChild;
        if (!Utils.isNullOrUndefined(parsedString)) {
            return <T>(<unknown>parsedString);
        }
        throw new ParseToElementError(`This xml string ${xmlString} is not parsable to Node`);
    }
}
