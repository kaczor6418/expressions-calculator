export class ValueUnset extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValueUnset';
    }
}
