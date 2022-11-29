import {AbstractFeatureLayer} from './AbstractFeatureLayer';
import {BaseTemplate} from '../features/templates/BaseTemplate';
import {IFeature} from '../features/IFeature';
import {Iterator} from '../../util/iterator';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';
import {IGeometryToText} from '../features/adapters/IGeometryToText';
import {Point} from '../../util/Point';
import {AbstractFeature} from '../features/AbstractFeature';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {GeodeticSystem} from '../GeodeticSystem';

/**
 * The layer uses {@link @int/geotoolkit/map/features/templates/BaseTemplate.BaseTemplate} instance(s)
 * to render its {@link @int/geotoolkit/map/features/IFeature.IFeature} elements.
 * @example
 * ```javascript
 * import {Template as TemplateLayer} from '@int/geotoolkit/map/layers/Template';
 * import {Point as MapFeaturePoint} from '@int/geotoolkit/map/features/Point';
 * import {BaseTemplate} from '@int/geotoolkit/map/features/templates/BaseTemplate';
 * ...
 * const layer = new TemplateLayer({
 *      'templates': {
 *          'featureclassname': MapFeaturePoint.getClassName(),
 *          'template': new BaseTemplate({
 *              'shape': circle,
 *              'geometrytoshape': geometryToAnchor,
 *              'geometrytotext': geometryToAnchor
 *          })
 *      }
 * });
 * ```
 */
export class Template extends AbstractFeatureLayer {
    /**
     * The layer uses {@link @int/geotoolkit/map/features/templates/BaseTemplate.BaseTemplate} instance(s)
     * to render its {@link @int/geotoolkit/map/features/IFeature.IFeature} elements.
     * @param options options
     * @param options.templates shape template(s) to visualize features (see example below)
     * @param options.templates.template template
     * @param options.templates.featureclassname class name or names
     * @param options.annotations annotations options
     * @param options.annotations.visibleonzoom annotations visibility on zoom
     */
    constructor(options: object | { templates: object | { template?: BaseTemplate; featureclassname?: string | string[]; }  | any[]; annotations?: object | { visibleonzoom?: boolean; } ; } );
    /**
     * Sets properties
     * @param properties options
     * @param properties.templates shape template(s) to visualize features (see example below)
     * @param properties.templates.template template
     * @param properties.templates.featureclassname class name or names
     * @param properties.annotations annotations options
     * @param properties.annotations.visibleonzoom annotations visibility on zoom
     */
    setProperties(properties: object | { templates: object | { template?: BaseTemplate; featureclassname?: string | string[]; }  | any[]; annotations?: object | { visibleonzoom?: boolean; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {annotations: {visibleonzoom: boolean}; templates: {template: BaseTemplate; featureclassname: string | string[]}} | any;
    /**
     * If no features provided then resets all shape templates to their initial states;<br>
     * otherwise resets specific templates for the features provided
     * @param features features to reset their specific template(s) to a default one
     * @param suppressInvalidate suppress layer invalidation flag
     */
    resetFeatureTemplates(features?: IFeature | IFeature[] | Iterator, suppressInvalidate?: boolean): this;
    /**
     * Gets template associated with a feature or its class name
     * @param parameter reference to a feature instance OR feature class name
     */
    getTemplate(parameter: IFeature | string): BaseTemplate | null;
    /**
     * Sets template associated with a feature or features
     * @param parameter feature class name OR reference to a feature instance OR feature iterator
     * @param template feature(s) template or feature class template
     * @param suppressInvalidate suppress layer invalidatation flag
     */
    setTemplate(parameter: string | IFeature | Iterator | IFeature[], template: BaseTemplate, suppressInvalidate?: boolean): this;
    /**
     * The implementation builds default limits from scratch if no iterator is provided;
     * otherwise, it extends previously calculated limits with limits calculated over new features.
     * @param features iterator or array of the new features
     */
    protected calculateDefaultModelLimits(features?: Iterator | any[]): Rect;
    /**
     * updates the geometry for the feature in this layer
     * @param feature feature to be modified
     * @param geometry the geometry to be set on the feature
     */
    updateGeometry(feature: IFeature, geometry: object): this;
    /**
     * Adds feature(s)
     * @param parameter feature(s) to be added
     */
    addFeature(parameter: IFeature | IFeature[] | Iterator): this;
    /**
     * Removes feature(s)
     * @param parameter feature(s) to be removed
     */
    removeFeature(parameter: IFeature | IFeature[] | Iterator): this;
    /**
     * Removes all feature(s)
     */
    clearFeatures(): this;
    /**
     * Renders features.<br>
     * NOTE:<br>
     * When picking is performed, then feature is selected if its shape gets picked.
     * @param featuresIt iterator over filtered features
     * @param context rendering context
     */
    renderFeatures(featuresIt: Iterator, context: RenderingContext): void;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     * @param feature feature to get adapter for
     */
    getGeometryToText(feature: IFeature): IGeometryToText;
    /**
     * Renders annotations (to filtered features only)
     * @param featuresIt features iterator
     * @param context rendering context
     */
    renderAnnotations(featuresIt: Iterator, context: RenderingContext): void;
    /**
     * Performs selection of the features with its device coordinates
     * @param pt is the device coordinates received by mouse event
     * @param radius the radius of selection (in px)
     */
    hitTest(pt: Point, radius?: number): AbstractFeature[];
    /**
     * Sets a map coordinate system
     * @param system coordinate system
     */
    setMapCoordinateSystem(system: AbstractSystem | GeodeticSystem): this;
}
