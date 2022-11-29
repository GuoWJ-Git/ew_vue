import {AbstractFeature} from '../AbstractFeature';
import {IGetAnnotation} from './IGetAnnotation';
import {IFeature} from '../IFeature';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * Expression callback is used to generate feature annotation.
 */
export type expressionCallback = (feature: AbstractFeature) => string;
/**
 * Where condition callback determines which features are annotated.
 */
export type whereConditionCallback = (feature: AbstractFeature) => boolean;
/**
 * The strategy creates annotation according to the rules below.
 * @example
 * ```javascript
 * import {AnnotationByRule} from '@int/geotoolkit/map/features/strategies/AnnotationByRule';
 * const strategy = new AnnotationByRule({
 *      'expression': (feature) => {
 *          const attr = feature.getAttributes(); // get data attributes
 *          const rate = attr['pop2012'] / attr['pop1985']; // calculate population growth rate
 *          return attr['country_name'] + '(' + rate.toFixed(1) + ')'; // generate annotation label
 *      },
 *      'maxScale': 10000, // show annotation on scale < 10000
 * });
 * ```
 * @example
 * ```javascript
 * const strategy = new AnnotationByRule({
 *      'expression': '{city_name} city', // use braces for attribute values
 *      'where': (feature) => { // features that match the clause will be annotated
 *          const attr = feature.getAttributes();
 *          return attr['pop2012'] > 2000;
 *      }
 * });
 * ```
 */
export class AnnotationByRule implements IGetAnnotation {
    /**
     * The strategy creates annotation according to the rules below.
     * @param options rules options
     * @param options.expression string expression to annotate the feature (attribute values may be referenced using braces,
     * for example "{country_name} area: {country_area}") or expression callback to generate annotation labels dynamically. Uses feature id as an
     * annotation by default.
     * @param options.minScale minimum scale to show annotation
     * @param options.maxScale maximum scale to show annotation
     * @param options.where where condition callback to determine which features are annotated
     */
    constructor(options: object | { expression?: string | Function; minScale?: number; maxScale?: number; where?: Function; } );
    /**
     * Gets annotation text for a feature
     * @param feature map feature
     * @param layer feature layer
     */
    getAnnotation(feature: IFeature, layer: AbstractFeatureLayer): string | null;
}
