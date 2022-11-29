import {Image} from './Image';
import {Node} from '../../scene/Node';
import {Transformation} from '../../util/Transformation';
import {TileResourceManager} from '../../scene/TileResourceManager';

/**
 * Projection source for transforming rectangular nodes to the map projection.
 */
export class Projection extends Image {
    /**
     * Projection source for transforming rectangular nodes to the map projection.
     * @param options options
     * @param options.node content node to transform
     * @param options.projection content transformation from node model limits to map coordinates
     */
    constructor(options?: object | { node?: Node; projection?: Transformation; } );
    /**
     * Sets content node to be projected
     * @param node node to be projected
     */
    setContentNode(node: Node | any): this;
    /**
     * Returns current projected content node
     */
    getContentNode(): Node | any;
    /**
     * Returns resource manager used to create projection intermediate results
     */
    getResourceManager(): TileResourceManager;
}
