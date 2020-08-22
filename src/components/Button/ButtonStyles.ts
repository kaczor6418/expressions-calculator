//language=CSS
export const buttonStyles: string = `
button {
    position: relative;
    outline: none;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-text);
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    padding: var(--spacing-m);
    background-color: var(--color-accent-2-inactive);
    border: 2px dashed var(--color-accent-1-inactive);
    box-shadow: var(--shadow-around-level-2);

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
    box-shadow: var(--shadow-around-level-2);
}

button > span {
    position: absolute;
    background-color: var(--color-accent-1);
    border-radius: 50%;
    width: 1px;
    height: 1px;
    pointer-events: none;
    animation: ripple 0.6s var(--ease-in-out-quint);
}
    
@keyframes ripple {
    0% {
        opacity: 0.7;
    }
    100% {
        opacity: 0;
        transform: scale(1000);
    }
}
`;
