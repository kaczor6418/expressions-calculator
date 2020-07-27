import { IconId } from './IconId';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../assets/icons/logo.svg';
import { Utils } from './Utils';
import { StringElementConverter } from '../converters/StringElementConverter';

export namespace IconDefinitions {
    const stringElementConverter: StringElementConverter = new StringElementConverter();
    const iconIds: Map<IconId, SVGElement> = new Map<IconId, SVGElement>();
    iconIds.set(IconId.LOGO, stringElementConverter.toElement(logo));

    export function getIcon(iconId: IconId): SVGElement {
        const icon: SVGElement | undefined = iconIds.get(iconId);
        if (!Utils.isNullOrUndefined(icon)) {
            return icon;
        }
        throw new Error(`Icon: ${iconId} doesn't exist in icon definitions`);
    }
}
