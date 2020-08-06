export class JSONCSSStyleDeclarationConverter {
    public static toCssStyleDeclaration(jsonStyles: string): Partial<CSSStyleDeclaration> {
        return <CSSStyleDeclaration>JSON.parse(jsonStyles);
    }
}
