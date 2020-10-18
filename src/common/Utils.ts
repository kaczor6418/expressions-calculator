export namespace Utils {
    export function isNullOrUndefined(value: unknown): value is null | undefined {
        return value == null;
    }

    export function removeLastChar(value: string): string {
        return value.slice(0, -1);
    }
}
