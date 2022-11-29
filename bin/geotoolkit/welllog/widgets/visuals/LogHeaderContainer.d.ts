import {HeaderContainer} from '../../HeaderContainer';
import {CompositeNode} from '../../../scene/CompositeNode';

/**
 */
export class LogHeaderContainer extends HeaderContainer {
    /**
     * @param options 
     */
    constructor(options?: object);
    /**
     * Add layer or layer collection to container
     * @param layer layer to be added
     */
    addLayer(layer: CompositeNode | CompositeNode[]): this;
    /**
     * Remove layer from container
     * @param layer layer to be removed
     */
    removeLayer(layer: CompositeNode): this;
    /**
     * Returns amount of layers
     */
    getLayersCount(): number;
    /**
     * Return layer at specified index
     * @param index index at which to get the layer for
     */
    getLayerAt(index: number): CompositeNode;
}
