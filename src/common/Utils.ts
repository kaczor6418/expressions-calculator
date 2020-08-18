export namespace Utils {
    /* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
    export function injectGlobalStyles(shadowRoot: ShadowRoot): void {
        const sheet: CSSStyleSheet = new CSSStyleSheet();
        sheet
            // @ts-ignore
            .replace(`@import url('main.css')`)
            .then((sheet: CSSStyleSheet) => {
                // @ts-ignore
                shadowRoot.adoptedStyleSheets = [sheet];
            })
            .catch((err: Error) => {
                console.error('Failed to load global styles:', err.message, err);
            });
    }
    /* eslint-enable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

    export function isNullOrUndefined(value: unknown): value is null | undefined {
        return value == null;
    }

    export function removeLastChar(value: string): string {
        return value.slice(0, -1);
    }
}
