//language=CSS
export const iconStyles: string = `
.redirect {
    transition: all var(--default-duration) var(--ease-in-out-quint);
    transition-property: fill, transform;
    will-change: fill, transform;
}
.redirect:hover {
    fill: var(--color-accent-1);
    transform: scale(1.2);
}   
`;
