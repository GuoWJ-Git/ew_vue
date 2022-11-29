import {IFilter} from './IFilter';
import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * ByType filters out all features that are not featureType(s) instances.
 */
export class ByType implements IFilter {
    /**
     * ByType filters out all features that are not featureType(s) instances.
     * @param featureType feature type(s) to pass
     */
    constructor(featureType: Function | Function[]);
    /**
     * Gets iterator over filtered features
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer (not used)
     */
    filterFeatures(iterator: Iterator, context: RenderingContext, layer?: AbstractFeatureLayer): Iterator;
    /**
     * Resets itself (the implementation does nothing)
     */
    reset(): this;
}
