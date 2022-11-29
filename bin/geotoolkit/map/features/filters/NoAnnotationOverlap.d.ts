import {IFilter} from './IFilter';
import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * NoAnnotationOverlap filters out geometries with overlapped annotations.<br>
 * If two or more annotations overlap each other, then only one with the biggest geometry is shown
 * @example
 * ```javascript
 * import {NoAnnotationOverlap} from '@int/geotoolkit/map/features/filters/NoAnnotationOverlap';
 * const filter = new NoAnnotationOverlap({
 *      // set the priority for features by population, if it's equal show older city label
 *      'weight': 'pop2012, settled_year ASC'
 * });
 * ```
 */
export class NoAnnotationOverlap implements IFilter {
    /**
     * NoAnnotationOverlap filters out geometries with overlapped annotations.<br>
     * If two or more annotations overlap each other, then only one with the biggest geometry is shown
     * @param options filter options
     * @param options.ignoreTypes feature types that should be passed without filtering
     * @param options.weight features weight to specify which annotations to show/hide.
     * Annotation weight can be based on a custom weight function (features with more weight are annotated) or attribute name(s).
     * In case you want to use multiple names, use a comma (,) to separate it and ASC/DESC keywords for ascending and descending order
     * (DESC by default). If null, features are filtered in adding order. See example for more info.
     * By default uses feature's bounding box area as an annotation priority (larger area features have higher priority).
     * @param ignoreTypes feature types that should be passed without filtering
     */
    constructor(options?: object | { ignoreTypes?: any[]; weight?: string | Function | any; } , ignoreTypes?: any[]);
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
