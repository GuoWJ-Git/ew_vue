import {AbstractLayer} from './AbstractLayer';
import {Node} from '../../scene/Node';
import {Transformation} from '../../util/Transformation';
import {TileResourceManager} from '../../scene/TileResourceManager';

/**
 * Projection layer is used to transform and display rectangular nodes on the map projection.
 */
export class Projection extends AbstractLayer {
    /**
     * Projection layer is used to transform and display rectangular nodes on the map projection.
     * @param options options
     * @param options.node content node to transform
     * @param options.projection content transformation from node model limits to map coordinates
     */
    constructor(options?: object | { node?: Node; projection?: Transformation; } );
    /**
     * Sets content node to be projected
     * @param node node to be projected
     */
    setContentNode(node: Node): this;
    /**
     * Returns current projected content node
     */
    getContentNode(): Node | any;
    /**
     * Returns resource manager used to create projection intermediate results
     */
    getResourceManager(): TileResourceManager;
}
