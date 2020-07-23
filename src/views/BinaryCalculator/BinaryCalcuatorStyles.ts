//language=CSS
export const style: string = `
    main {
        min-height: 100vh;
        display: grid;
        grid-template-rows: [app-header]12fr [app-body]70fr [app-footer]18fr;
        grid-gap: var(--spacing-xl);
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
