export type MouseEventCallback = (e?: MouseEvent) => void;

export type EnumKeyStringValue<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];
