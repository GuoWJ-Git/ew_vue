import {AbstractFeatureLayer} from './AbstractFeatureLayer';
import {ColorProvider} from '../../util/ColorProvider';
import {IFeature} from '../features/IFeature';
import {IGeometryToText} from '../features/adapters/IGeometryToText';

/**
 * The Heatmap layer is a visualization used to depict the intensity of data at geographical points
 * (geotoolkit.map.features.Point features). Use vector data source to add features to the layer.
 * @example
 * ```javascript
 * import {Heatmap} from '@int/geotoolkit/map/layers/Heatmap';
 * import {GeoJSON} from '@int/geotoolkit/map/layers/GeoJSON';
 * const layer = new Heatmap({
 *     'source': new GeoJSON({ // use geojson formatted file as a data source
 *         'url': './data/points.json' // file url
 *     })
 * });
 * ```
 * @example
 * ```javascript
 * const layer = new Heatmap({
 *     'weight': 'magnitude', // use feature attribute as weight
 *     'radius': () => map.getZoomLevel() > 5 ? 10 : 15 // adjust value on-the-fly
 * });
 * ```
 */
export class Heatmap extends AbstractFeatureLayer {
    /**
     * The Heatmap layer is a visualization used to depict the intensity of data at geographical points
     * (geotoolkit.map.features.Point features). Use vector data source to add features to the layer.
     * @param options heatmap options
     * @param options.weight field name for features' weight value (if needed) or a (feature) => weight callback
     * @param options.radius heatmap radius (in px) or a callback that returns current radius value
     * @param options.maxintensity heatmap maximum intensity or a callback that returns current value. If not set,
     * will be calculated automatically based on current features
     * @param options.colorprovider color provider
     * for heatmap colors interpolation (for 0-1 values)
     * @param options.mode heatmap calculation mode, see enum for details
     */
    constructor(options?: object | { weight?: string | Function; radius?: number | Function; maxintensity?: number | Function; colorprovider?: ColorProvider; mode?: Mode; } );
    /**
     * Sets heatmap radius
     * @param radius heatmap radius
     */
    setRadius(radius: number | Function): this;
    /**
     * Returns heatmap radius (or a callback for it)
     */
    getRadius(): number | Function;
    /**
     * Sets maximum intensity value
     * @param intensity max intensity (0 to calculate automatically)
     */
    setMaxIntensity(intensity: number | Function): this;
    /**
     * Returns maximum intensity value (or a callback for it). If not set, returns calculated value
     */
    getMaxIntensity(): number | Function;
    /**
     * Sets heatmap calculation mode
     * @param mode heatmap calculation mode
     */
    setMode(mode: Mode | string): this;
    /**
     * Returns heatmap calculation mode
     */
    getMode(): Mode;
    /**
     * Sets color provider for heatmap colors interpolation
     * @param provider heatmap color provider
     */
    setColorProvider(provider: ColorProvider): this;
    /**
     * Returns current heatmap color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * Sets features' field name to use as the weight value (or a callback for it)
     * @param field features' attribute field name (if exists)
     */
    setWeightField(field: string | Function | any): this;
    /**
     * Returns current weight field name or a callback for it (if exists, null otherwise)
     */
    getWeightField(): string | Function | any;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     * @param feature feature to get adapter for
     */
    getGeometryToText(feature: IFeature): IGeometryToText;
    /**
     * Sets all the properties pertaining to this object
     * @param properties the properties to set
     * @param properties.weight field name for features' weight value (if needed)
     * @param properties.radius heatmap radius (in px)
     * @param properties.maxIntensity heatmap maximum intensity. If not set, will be calculated automatically based on
     * current features
     * @param properties.colorProvider color provider for heatmap colors interpolation (for 0-1 values)
     * @param properties.mode heatmap calculation mode, see enum for details
     */
    setProperties(properties?: object | { weight?: string | Function; radius?: number | Function; maxIntensity?: number | Function; colorProvider?: ColorProvider; mode?: Mode; } ): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {weight: string | Function; radius: number | Function; maxintensity: number | Function; colorprovider: ColorProvider; mode: Mode} | any;
}
/**
 * Enum for heatmap calculation mode (point intensity distribution)
 */
export enum Mode {
    /**
     * Influence decreases linearly with the distance to the point
     */
    Linear = 'Linear',
    /**
     * Impact decreases with the squared distance to the point
     */
    Quad = 'Quad',
    /**
     * Impact decreases with the cube of the distance to the point
     */
    Cubic = 'Cubic',
    /**
     * Impact decreases with the distance to the point exponentially
     */
    Exp = 'Exp'
}
