export interface KKList<T extends HTMLElement> {
    elements: T[];
    addElement(element: T): void;
}
