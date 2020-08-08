//language=CSS
export const textFieldsStyles: string = `    
label {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: var(--spacing-m) var(--spacing-s);
    font-size: var(--font-size-s);
}

input {
    outline: none;
    border: none;
    background-image: none;

    width: 100%;
    padding: var(--spacing-m) var(--spacing-l);
    color: var(--color-text);
    background-color: var(--color-accent-2-inactive);
    border-bottom: 1px solid var(--color-accent-1-inactive);
    
    transition: all var(--default-duration) var(--ease-in-out-quint);
    transition-property: background-color, border-bottom-width, border-bottom-color;
    will-change: background-color, border-bottom-width, border-bottom-color;
}

input:focus {
    background-color: var(--color-accent-2);
    border-bottom: 2px solid var(--color-accent-1);
}

.input-xs {
    font-size: var(--font-size-xs);
}

.input-s {
    font-size: var(--font-size-s);
}

.input-m {
    font-size: var(--font-size-m);
}

.input-l {
    font-size: var(--font-size-l);
}

.input-xl {
    font-size: var(--font-size-xl);
}
`;
