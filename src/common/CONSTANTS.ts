export namespace CONSTANTS {
    export const TAG_PREFIX: string = 'kk';
    export const ENUM_DELIMITER = '_';
    export const COMPONENT_TAG_DELIMITER = '-';
    export const COMMON_OPERATORS: string[] = ['+', '-', '*', '/', '%', '(', ')'];
    export const BINARY_VALUES: string[] = ['0', '1'];
    export const COMMON_VALUES: string[] = [...BINARY_VALUES, '2', '3', '4', '5', '6', '7', '8', '9'];
    export const BINARY_OPERATORS: string[] = [...COMMON_OPERATORS, '~', '<<', '>>', 'AND', 'XOR', 'OR'];
}
