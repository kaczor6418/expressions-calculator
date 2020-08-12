export class NotSupportedObservedAttribute extends Error {
    constructor(message: string) {
        super(message);
        this.name = NotSupportedObservedAttribute.name;
    }
}
