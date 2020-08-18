//language=CSS
export const textFieldsStyles: string = `    
div {
    box-shadow: inherit;
    padding: var(--spacing-m) var(--spacing-l);
    background-color: var(--color-accent-2-inactive);
    border-bottom: 2px ridge var(--color-accent-1-inactive);
    
    transition: all var(--default-duration) var(--ease-in-out-quint);
    transition-property: background-color, border-bottom-style, border-bottom-color;
    will-change: background-color, border-bottom-width, border-bottom-color;
}

label {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: var(--spacing-m) var(--spacing-s);
    font-size: var(--font-size-s);
}

input {
    padding: 0;
    outline: none;
    border: none;
    background-image: none;
    background-color: transparent;

    width: 100%;
    color: var(--color-text);
}

div:focus-within {
    background-color: var(--color-accent-2);
    border-bottom-color: var(--color-accent-1);
    border-bottom-style: solid;
}

.input-xs {
    font-size: var(--font-size-xs);
    height: var(--font-size-xs);
}

.input-s {
    font-size: var(--font-size-s);
    height: var(--font-size-s);
}

.input-m {
    font-size: var(--font-size-m);
    height: var(--font-size-m);
}

.input-l {
    font-size: var(--font-size-l);
    height: var(--font-size-l);
}

.input-xl {
    font-size: var(--font-size-xl);
    height: var(--font-size-xl);
}
    
.input-auto {
    width: 100%;
    height: 100%;
}
`;
