import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * Features rendering filter interface
 */
export abstract class IFilter {
    /**
     * Gets iterator over filtered features
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer
     */
    abstract filterFeatures(iterator: Iterator, context: RenderingContext, layer: AbstractFeatureLayer): Iterator;
    /**
     * Resets itself
     */
    abstract reset(): this;
}
