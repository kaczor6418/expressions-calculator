//language=CSS
export const listStyles: string = `
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

ul::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
}

ul::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
}

ul::-webkit-scrollbar-thumb {
    background-image: linear-gradient(0deg, var(--color-accent-1) 0%, var(--color-accent-2) 100%);
}

li {
 flex: 1;
}

`;
