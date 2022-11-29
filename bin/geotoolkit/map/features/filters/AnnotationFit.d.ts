import {IFilter} from './IFilter';
import {Text} from '../../../scene/shapes/Text';
import {Iterator} from '../../../util/iterator';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * AnnotationFit filters out features who's annotations do not fit in their geometries
 */
export class AnnotationFit implements IFilter {
    /**
     * AnnotationFit filters out features who's annotations do not fit in their geometries
     * @param text JSON-object or text shape instance
     * (see {@link @int/geotoolkit/scene/shapes/Text.Text} constructor JSON-object for details)
     */
    constructor(text?: object | Text);
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
