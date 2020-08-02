import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { appFooterStyles } from './AppFooterStyles';
import { CopyrightProps } from './interfaces/CopyrightProps';
import { StringElementConverter } from '../../converters/StringElementConverter';
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

    public setCopyright({ year, author, termsReferenceUrl }: CopyrightProps): void {
        const copyrightText: string = AppFooter.formattedCopyrights`Copyright © ${year} ${author}. Policy terms${termsReferenceUrl}`;
        this.footer.appendChild(new StringElementConverter().toElement(copyrightText));
    }

    private static formattedCopyrights(strings: TemplateStringsArray, ...values: string[]): string {
        const policyTermsUrlText: string = `<a href="${values[values.length - 1]}">${strings[strings.length - 2]}</a>`;
        let formattedText: string = '<p>';
        for (let i = 0; i < values.length - 1; i++) {
            formattedText += `${strings[i]}${values[i]}`;
        }
        formattedText += `${policyTermsUrlText}</p>`;
        return formattedText;
    }
}
customElements.define(AppFooter.TAG, AppFooter);
