import {AbstractLegendItemInfoProvider} from './AbstractLegendItemInfoProvider';
import {ComponentNode} from '../../scene/ComponentNode';

/**
 * DefaultLegendItemInfoProvider
 */
export class DefaultLegendItemInfoProvider extends AbstractLegendItemInfoProvider {
    /**
     * DefaultLegendItemInfoProvider
     * @param mode mode
     */
    constructor(mode?: Mode);
    /**
     * Gets legend item info based on component node
     * @param componentNode component node
     */
    getLegendItemInfo(componentNode: ComponentNode): string | null;
}
/**
 * Enum of legend item info modes
 */
export enum Mode {
    /**
     * Description
     */
    Description = 'Description',
    /**
     * Name
     */
    Name = 'Name',
    /**
     * Description if not null; Name - otherwise
     */
    DescriptionOrName = 'DescriptionOrName'
}
