import {BaseTemplate} from './BaseTemplate';
import {RgbaColor} from '../../../util/RgbaColor';
import {ColorProvider} from '../../../util/ColorProvider';
import {Node} from '../../../scene/Node';
import {AnchoredShape} from '../../../scene/shapes/AnchoredShape';
import {Line} from '../../../scene/shapes/Line';

/**
 * Manages {@link @int/geotoolkit/map/features/Aggregation.Aggregation}-to-{@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape}
 * logic used by {@link @int/geotoolkit/map/layers/Template.Template} class
 * @example
 * ```javascript
 * import {Aggregation} from '@int/geotoolkit/map/features/templates/Aggregation';
 * import {DefaultColorProvider} from '@int/geotoolkit/util/DefaultColorProvider';
 * const template = new Aggregation({
 *     ...
 *     // change shape size dynamically:
 *     'size': {
 *         // size is based on the sum of aggregated features' population:
 *         'field': 'population',
 *         // size is changing from 25px to 60px:
 *         'range': [25, 60]
 *     },
 *     'color': {
 *         // no 'field' provided i.e. color is based on amount of aggregated features
 *         // color 'range' can be either a color provider or an array:
 *         'range': new DefaultColorProvider({
 *             // use first color for 2 aggregated points, second for 50 and third for 500
 *             // (linear interpolation):
 *             'values': [2, 50, 500],
 *             'colors': ['rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 127, 0.5)', 'rgba(0, 0, 0, 0.5)']
 *         })
 *     }
 * });
 * ```
 * @example
 * ```javascript
 * const template = new Aggregation({
 *     ...
 *     // change shape size dynamically:
 *     'size': {
 *         // 'field' can be a function, here's a callback to calculate the average 'age' of aggregated features:
 *         'field': (feature) => {
 *              let sum = 0, count = 0;
 *              feature.getAggregation().forEach((element) => {
 *                  sum += +element.getAttributes()['age']; // add 'age' value
 *                  count++; // count the processed elements
 *              });
 *              return sum / count; // return average 'age' value
 *         },
 *         // now size is based on the average 'age' value:
 *         'range': [25, 60]
 *     },
 *     'color': {
 *         // color is based on the sum of aggregated features' priority:
 *         'field': 'priority',
 *         // color 'range' can be either a color provider or an array:
 *         // color changes from white to black basing on priority:
 *         'range': ['white', 'black']
 *     }
 * });
 * ```
 */
export class Aggregation extends BaseTemplate {
    /**
     * Manages {@link @int/geotoolkit/map/features/Aggregation.Aggregation}-to-{@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape}
     * logic used by {@link @int/geotoolkit/map/layers/Template.Template} class
     * @param options template options
     * @param options.size dynamic size options
     * @param options.size.field parameter depending on which size of aggregations will be changed. May be a callback (function), an attribute field (if string, all values of aggregated features will be summed up) or aggregation size itself if nothing provided (number of aggregated features)
     * @param options.size.range sizes array, according to which the size of the aggregations will be changed, based on its 'field' value. Current aggregation size is linearly interpolated from minimum to maximum among all the aggregations.
     * WARNING! array must be strictly increasing or decreasing
     * @param options.color dynamic color options
     * @param options.color.field parameter depending on which color of aggregations will be changed. May be a callback (function), an attribute field (if string, all values of aggregated features will be summed up) or aggregation size itself if nothing provided (number of aggregated features)
     * @param options.color.range color array/provider, according to which the color of the aggregations will be changed, based on its 'field' value. If array provided, current aggregation color is linearly interpolated from minimum to maximum among all the aggregations.
     * @param options.shape carnac shape to visualize aggregation feature
     * @param options.expandedshape carnac shape to visualize expanded aggregation feature (if geotoolkit.map.tools.AggregationSelection tool is used)
     * @param options.colorprovider color provider to change shape fill color depending on aggregation size (number of points aggregated)
     * @param options.expandedcolorprovider color provider to change shape fill color depending on expanded aggregation level (0 for root, 1 for its children, etc.)
     * @param options.expandedline line to connect expanded aggregation with its child (set visible false if no needed)
     */
    constructor(options?: object | { size?: object | { field?: string | Function | any; range?: number[]; } ; color?: object | { field?: string | Function | any; range?: (string | RgbaColor)[] | ColorProvider; } ; shape?: Node; expandedshape?: AnchoredShape; colorprovider?: ColorProvider; expandedcolorprovider?: ColorProvider; expandedline?: Line; } );
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.size dynamic size options
     * @param properties.size.field parameter depending on which size of aggregations will be changed. May be a callback (function), an attribute field (if string, all values of aggregated features will be summed up) or aggregation size itself if nothing provided (number of aggregated features)
     * @param properties.size.range sizes array, according to which the size of the aggregations will be changed, based on its 'field' value. Current aggregation size is linearly interpolated from minimum to maximum among all the aggregations.
     * WARNING! array must be strictly increasing or decreasing
     * @param properties.color dynamic color options
     * @param properties.color.field parameter depending on which color of aggregations will be changed. May be a callback (function), an attribute field (if string, all values of aggregated features will be summed up) or aggregation size itself if nothing provided (number of aggregated features)
     * @param properties.color.range color array/provider, according to which the color of the aggregations will be changed, based on its 'field' value. If array provided, current aggregation color is linearly interpolated from minimum to maximum among all the aggregations.
     * @param properties.shape carnac shape to visualize aggregation feature
     * @param properties.expandedshape carnac shape to visualize expanded aggregation feature (if geotoolkit.map.tools.AggregationSelection tool is used)
     * @param properties.colorprovider color provider to change shape fill color depending on aggregation size (number of points aggregated)
     * @param properties.expandedcolorprovider color provider to change shape fill color depending on expanded aggregation level (0 for root, 1 for its children, etc.)
     * @param properties.expandedline line to connect expanded aggregation with its child (set visible false if no needed)
     */
    setProperties(properties?: object | { size?: object | { field?: string | Function | any; range?: number[]; } ; color?: object | { field?: string | Function | any; range?: (string | RgbaColor)[] | ColorProvider; } ; shape?: Node; expandedshape?: AnchoredShape; colorprovider?: ColorProvider; expandedcolorprovider?: ColorProvider; expandedline?: Line; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {expandedshape: AnchoredShape; colorprovider: ColorProvider; expandedcolorprovider: ColorProvider; expandedline: Line} | any;
}
