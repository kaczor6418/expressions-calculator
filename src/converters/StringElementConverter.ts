import { Utils } from '../common/Utils';

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
        throw new Error(`This xml string ${xmlString} is not parsable to Node`);
    }
}
