import {ComponentNode} from '../scene/ComponentNode';

/**
 * Abstract class to calculate schematics component bounds
 */
export class BoundsCalculation {
    /**
     * Abstract class to calculate schematics component bounds
     */
    constructor();
    /**
     * Calculates schematics component bounds
     * @param schematics component
     * @param isCompressed deprecated (since 2021.1 (3.2)) compressed (non-regular) view mode flag
     */
    getComponentBounds(schematics: ComponentNode, isCompressed: boolean): object;
}
