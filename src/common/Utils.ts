export namespace Utils {
    export function injectGlobalStyles(shadowRoot: ShadowRoot): void {
        const sheet: CSSStyleSheet = new CSSStyleSheet();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        sheet
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .replace(`@import url('main.css')`)
            .then((sheet: CSSStyleSheet) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                shadowRoot.adoptedStyleSheets = [sheet];
            })
            .catch((err: Error) => {
                console.error('Failed to load global styles:', err.message, err);
            });
    }

    export function isNullOrUndefined(value: unknown): value is Extract<null | undefined, null | undefined> {
        return value == null;
    }
}
