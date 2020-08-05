// language=CSS
export const appFooterStyles = `
    footer {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    a {
        text-decoration: none;
        font-weight: var(--font-weight-bold);
        color: var(--color-accent-1-inactive);
        transition: all var(--default-duration) var(--ease-in-out-quint);
        transition-property: color, font-size;
        will-change: color, font-size;
    }
    
    a:hover {
        color: var(--color-accent-1);
        font-size: var(--font-size-l);
    }
`;
