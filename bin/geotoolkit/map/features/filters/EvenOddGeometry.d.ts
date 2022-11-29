import {IFilter} from './IFilter';
import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * EvenOddGeometry filters features' geometries that are inside the others using even-odd algorithm ('holes' do not pass)
 */
export class EvenOddGeometry implements IFilter {
    /**
     * EvenOddGeometry filters features' geometries that are inside the others using even-odd algorithm ('holes' do not pass)
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
