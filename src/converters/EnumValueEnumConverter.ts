import { Utils } from '../common/Utils';
import { EnumKeyNotFound } from '../errors/EnumKeyNotFound';

export class EnumValueEnumConverter {
    public static toEnum<T>(keyOrValue: string | number, enumItem: Record<string, unknown>): T {
        const enumEntries: Array<[string, string | unknown]> = Object.entries(enumItem);
        const enumSingleItem: [string, string | unknown] | undefined = enumEntries.find((enumSet) =>
            enumSet.includes(keyOrValue),
        );
        if (Utils.isNullOrUndefined(enumSingleItem)) {
            throw new EnumKeyNotFound(`Key or value: ${keyOrValue} doesn't exist in enum!`);
        }
        return <T>enumItem[enumSingleItem[0]];
    }
}
