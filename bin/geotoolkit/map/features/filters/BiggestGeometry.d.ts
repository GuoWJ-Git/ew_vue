import {IFilter} from './IFilter';
import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * BiggestGeometry filters out feature parts with the biggest geometry (for Multi-features only).
 */
export class BiggestGeometry implements IFilter {
    /**
     * BiggestGeometry filters out feature parts with the biggest geometry (for Multi-features only).
     */
    constructor();
    /**
     * Gets iterator over filtered features
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer
     */
    filterFeatures(iterator: Iterator, context: RenderingContext, layer: AbstractFeatureLayer): Iterator;
    /**
     * Resets itself
     */
    reset(): this;
}
