//language=CSS
export const binaryExpressionItemStyles: string = `
p {
    margin: 0;
    padding: var(--spacing-m);
    
    display: flex;
    justify-content: space-between;
    gap: 50px;
}

var {
    flex: 0 0 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    
    align-self: flex-start;
}

mark {
    flex: 0 0 20%;
    align-self: flex-end;
    
    color: var(--color-text-on-accent-1);
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
    cursor: pointer;
    padding: var(--spacing-s);
    background-color: var(--color-accent-1-inactive);
    transition: background-color var(--default-duration) var(--ease-in-out-quint);
    will-change: background-color;
}

mark:hover {
    background-color: var(--color-accent-1);
}

`;
