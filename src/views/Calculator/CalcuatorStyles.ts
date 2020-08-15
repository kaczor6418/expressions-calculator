//language=CSS
export const calculatorStyles: string = `
main {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: [app-header]12fr [app-body]70fr [app-footer]18fr;
}
kk-app-header {
    background: var(--color-primary-dark);
    grid-row: app-header / app-header;
    box-shadow: var(--shadow-bottom);
}
kk-app-body {
    grid-row: app-body / app-body;
}
kk-app-footer {
    background: var(--color-primary-dark);
    grid-row: app-footer / app-footer;
    box-shadow: var(--shadow-top);
}
`;
