import { backspace, github, logo } from './IconsDeclarations';
import { Utils } from '../Utils';
import { IconId } from '../Enums/IconId';
import { HTMLStringConverter } from '../../converters/HTMLStringConverter';
import { IconNotFoundError } from '../../errors/IconNotFoundError';

export namespace IconDefinitions {
    const iconIds: Map<IconId, string> = new Map<IconId, string>();
    iconIds.set(IconId.LOGO, logo);
    iconIds.set(IconId.GITHUB, github);
    iconIds.set(IconId.BACKSPACE, backspace);

    export function getIcon(iconId: IconId): SVGElement {
        const icon: string | undefined = iconIds.get(iconId);
        if (!Utils.isNullOrUndefined(icon)) {
            return HTMLStringConverter.toElement(icon);
        }
        throw new IconNotFoundError(`Icon: ${iconId} doesn't exist in icon definitions`);
    }
}
