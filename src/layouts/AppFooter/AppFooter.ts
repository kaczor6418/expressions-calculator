import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { appFooterStyles } from './AppFooterStyles';
import { CopyrightProps } from './interfaces/CopyrightProps';
import { HTMLStringConverter } from '../../converters/HTMLStringConverter';
import { KKAppFooter } from './interfaces/KKAppFooter';

const template: string = `
<style>${appFooterStyles}</style>
<footer>
  <slot name="prepend"></slot>
  <slot name="center"></slot>
  <slot name="append"></slot>
</footer>
`;

export class AppFooter extends KKWebComponent implements KKAppFooter {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-app-footer`;

    public readonly shadowRoot!: ShadowRoot;

    private footer!: HTMLElement;

    constructor() {
        super(template);
        this.getElementsReferences();
    }

    protected getElementsReferences(): void {
        this.footer = <HTMLElement>this.shadowRoot.querySelector('footer');
    }

    public setCopyright({ date, author, termsReferenceUrl }: CopyrightProps): void {
        const copyrightText: string = AppFooter.formattedCopyrights`Copyright © ${date} ${author} Policy terms${termsReferenceUrl}`;
        this.footer.appendChild(HTMLStringConverter.toElement(copyrightText));
    }

    private static formattedCopyrights(
        [copyright, separate, policyTerms]: TemplateStringsArray,
        date: string,
        author: string,
        policyTermsUrl: string,
    ): string {
        const policyTermsText: string = policyTerms.trim();
        const policyTermsUrlText: string = `<a href="${policyTermsUrl}">${policyTermsText}</a>`;
        return `<p>${copyright + date + separate + author}. ${policyTermsUrlText}</p>`;
    }
}
customElements.define(AppFooter.TAG, AppFooter);
