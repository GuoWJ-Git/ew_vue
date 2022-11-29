import {IFilter} from './IFilter';
import {AnchoredShape} from '../../../scene/shapes/AnchoredShape';
import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * VisibilityArea can be applied to the Point features only. It filters out:<br>
 * 1. features outside of canvas rendering area<br>
 * 2. overlapped map features (optionally)<br>
 * 3. Non-point like features<br>
 * The filter assumes feature geometries having 'x' and 'y' components to use as anchored shape anchor.
 */
export class VisibilityArea implements IFilter {
    /**
     * VisibilityArea can be applied to the Point features only. It filters out:<br>
     * 1. features outside of canvas rendering area<br>
     * 2. overlapped map features (optionally)<br>
     * 3. Non-point like features<br>
     * The filter assumes feature geometries having 'x' and 'y' components to use as anchored shape anchor.
     * @param shape anchored shape as a template
     * @param options options (see "setOptions" method for details)
     * @param options.nooverlap "No overlapping Features allowed" flag
     */
    constructor(shape: AnchoredShape, options?: object | { nooverlap?: boolean; } );
    /**
     * Sets options
     * @param options options
     * @param options.nooverlap "No overlapping Features allowed" flag
     */
    setOptions(options?: object | { nooverlap?: boolean; } ): this;
    /**
     * Gets options
     */
    getOptions(): object | any;
    /**
     * Gets iterator over filtered features
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer (not used)
     */
    filterFeatures(iterator: Iterator, context: RenderingContext, layer?: AbstractFeatureLayer): Iterator;
    /**
     * Resets itself
     */
    reset(): this;
}
