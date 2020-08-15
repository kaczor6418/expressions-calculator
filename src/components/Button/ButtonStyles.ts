//language=CSS
export const buttonStyles: string = `
button {
    outline: none;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-text);
    font-size: var(--font-size-m);
    background-color: var(--color-accent-2-inactive);
    border: 2px dashed var(--color-accent-1-inactive);
    
    transition: all var(--default-duration) var(--ease-in-out-quint);
    transition-property: background-color, border-color, border-style;
    will-change: background-color, border-color, border-style;
}

button:hover:enabled {
    background-color: var(--color-accent-2);
    border-color: var(--color-accent-1);
    border-style: solid;
}

button:disabled {
    cursor: not-allowed;
}
    
.shadow-around {
    box-shadow: var(--shadow-around);
}
`;