import {ComponentNode} from '../../scene/ComponentNode';

/**
 * Abstraction for schematics' legend item text.
 */
export class AbstractLegendItemInfoProvider {
    /**
     * Abstraction for schematics' legend item text.
     */
    constructor();
    /**
     * Gets legend item info based on component node
     * @param componentNode component node
     */
    getLegendItemInfo(componentNode: ComponentNode): string | null;
}
