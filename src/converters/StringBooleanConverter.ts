import { ParserError } from '../errors/ParserError';

export class StringBooleanConverter {
    public static toBoolean(value: string): boolean {
        if (value === String(true)) {
            return true;
        } else if (value === String(false)) {
            return false;
        }
        throw new ParserError(`Can not parse: ${value} to boolean type!`);
    }
}
