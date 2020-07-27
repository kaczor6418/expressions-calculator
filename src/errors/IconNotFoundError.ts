export class IconNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'IconNotFoundError';
    }
}
