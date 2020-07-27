export class ParseToElementError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ParseToElementError';
    }
}
