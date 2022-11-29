import {Selector} from '../../selection/Selector';
import {Transformation} from '../../util/Transformation';
import {ComponentNode} from '../scene/ComponentNode';

/**
 * Node selector implementation for schematics needs.
 */
export class ComponentNodeSelector extends Selector {
    /**
     * Node selector implementation for schematics needs.
     * @param transformation scene transformation
     */
    constructor(transformation?: Transformation);
    /**
     * The implementation returns {geotoolkit.schematics.scene.ComponentNode} objects at the location provided.
     * @param root node to be used for selection.
     * @param x x-coordinate
     * @param y y-coordinate
     * @param radius selection radius
     */
    select(root: ComponentNode, x: number, y: number, radius: number): any[];
}
