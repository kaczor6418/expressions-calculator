import { logo, github } from './IconsDeclarations';
import { Utils } from '../Utils';
import { IconId } from '../Enums/IconId';
import { HTMLStringConverter } from '../../converters/HTMLStringConverter';
import { IconNotFoundError } from '../../errors/IconNotFoundError';

export namespace IconDefinitions {
    const iconIds: Map<IconId, SVGElement> = new Map<IconId, SVGElement>();
    iconIds.set(IconId.LOGO, HTMLStringConverter.toElement(logo));
    iconIds.set(IconId.GITHUB, HTMLStringConverter.toElement(github));

    export function getIcon(iconId: IconId): SVGElement {
        const icon: SVGElement | undefined = iconIds.get(iconId);
        if (!Utils.isNullOrUndefined(icon)) {
            return icon;
        }
        throw new IconNotFoundError(`Icon: ${iconId} doesn't exist in icon definitions`);
    }
}
