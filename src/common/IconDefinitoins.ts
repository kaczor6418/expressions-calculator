import { IconId } from './IconId';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../assets/icons/logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import github from '../assets/icons/github.svg';
import { Utils } from './Utils';
import { StringElementConverter } from '../converters/StringElementConverter';
import { IconNotFoundError } from '../errors/IconNotFoundError';

export namespace IconDefinitions {
    const stringElementConverter: StringElementConverter = new StringElementConverter();
    const iconIds: Map<IconId, SVGElement> = new Map<IconId, SVGElement>();
    iconIds.set(IconId.LOGO, stringElementConverter.toElement(logo));
    iconIds.set(IconId.GITHUB, stringElementConverter.toElement(github));

    export function getIcon(iconId: IconId): SVGElement {
        const icon: SVGElement | undefined = iconIds.get(iconId);
        if (!Utils.isNullOrUndefined(icon)) {
            return icon;
        }
        throw new IconNotFoundError(`Icon: ${iconId} doesn't exist in icon definitions`);
    }
}
