export class NotSupportedSize extends Error {
    constructor(message: string) {
        super(message);
        this.name = NotSupportedSize.name;
    }
}
