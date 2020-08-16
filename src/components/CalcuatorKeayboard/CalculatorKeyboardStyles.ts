//language=CSS
export const calculatorKeyboardStyles: string = `
div {
    background-color: var(--color-primary-dark);
    display: flex;
    justify-content: stretch;
    padding: var(--spacing-l);
}

kk-list {
    flex: 1;
}

.horizontal #values {
    padding-right: var(--spacing-m);
}

.horizontal #operators {
    padding-left: var(--spacing-m);
}

.horizontal-reversed #values {
    padding-left: var(--spacing-m);
}

.horizontal-reversed #operators {
    padding-right: var(--spacing-m);
}

.vertical #values {
    padding-bottom: var(--spacing-m);
}

.vertical #operators {
    padding-top: var(--spacing-m);
}

.vertical-reversed #values {
    padding-top: var(--spacing-m);
}

.vertical-reversed #operators {
    padding-bottom: var(--spacing-m);
}
    
.vertical {
    flex-direction: column;
}
    
.horizontal-reversed {
    flex-direction: row-reverse;
}
    
.vertical-reversed {
    flex-direction: column-reverse;
}
`;
