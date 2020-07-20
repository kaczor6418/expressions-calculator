export namespace Utils {
    export function injectGlobalStyles(shadowRoot: ShadowRoot): void {
        const sheet = new CSSStyleSheet();
        // @ts-ignore
        sheet.replace(`@import url('main.css')`)
            .then((sheet: CSSStyleSheet) => {
                // @ts-ignore
                shadowRoot.adoptedStyleSheets = [sheet];
            })
            .catch( (err: Error) => {
                console.error('Failed to load global styles:', err.message, err);
            });
    }
}
