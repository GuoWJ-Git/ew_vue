import {AbstractLayer} from './AbstractLayer';
import {IFilter} from '../features/filters/IFilter';
import {IGetAnnotation} from '../features/strategies/IGetAnnotation';
import {Text} from '../../scene/shapes/Text';
import {BaseConverter} from '../features/converters/BaseConverter';
import {Query} from '../util/Query';
import {Iterator} from '../../util/iterator';
import {IFeature} from '../features/IFeature';
import {IGeometryToText} from '../features/adapters/IGeometryToText';
import {RenderingContext} from '../../renderer/RenderingContext';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {GeodeticSystem} from '../GeodeticSystem';
import {Rect} from '../../util/Rect';
import {IFilter as RendererIFilter} from '../../renderer/IFilter';

/**
 * This layer is a collection of features (see {@link @int/geotoolkit/map/features/IFeature.IFeature}).<br>
 * addFeature() and removeFeature() are used to add and remove features; getFeatures() to iterate.
 */
export class AbstractFeatureLayer extends AbstractLayer {
    /**
     * This layer is a collection of features (see {@link @int/geotoolkit/map/features/IFeature.IFeature}).<br>
     * addFeature() and removeFeature() are used to add and remove features; getFeatures() to iterate.
     * @param options options
     * @param options.features features options
     * @param options.features.filter features filter(s)
     * @param options.annotations annotations options
     * @param options.annotations.filter annotations filter(s)
     * @param options.annotations.visible annotations visibility flag
     * @param options.annotations.strategy annotation strategy
     * @param options.annotations.text JSON-object or text shape instance (see {@link @int/geotoolkit/scene/shapes/Text.Text} constructor JSON-object for details)
     * @param options.annotations.text.preservereadingorientation preservereadingorientation flag
     * (if options.annotations.text is JSON-object then and only then its <b>preservereadingorientation=true</b> default value is acknowledged)
     * @param options.annotations.text.ispointingup ispointingup flag
     * (if options.annotations.text is JSON-object then and only then its <b>ispointingup=true</b> default value is acknowledged)
     * @param options.tooltip tooltip options
     * @param options.tooltip.visible tooltip visibility flag
     * @param options.tooltip.formatter tooltip data formatter
     * @param options.converters converter that is used for vector data conversions
     */
    constructor(options?: object | { features?: object | { filter?: IFilter | IFilter[]; } ; annotations?: object | { filter?: IFilter | IFilter[]; visible?: boolean; strategy?: IGetAnnotation; text?: object | { preservereadingorientation?: boolean; ispointingup?: boolean; }  | Text; } ; tooltip?: object | { visible?: boolean; formatter?: Function | any; } ; converters?: BaseConverter | BaseConverter[]; } );
    /**
     * Gets features iterator
     * @param filter features query filter.
     */
    getFeatures(filter?: Query | Function): Iterator;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     * @param feature feature  to get adapter for
     */
    getGeometryToText(feature?: IFeature): IGeometryToText;
    /**
     * Gets feature by feature id.
     * @param id feature identifier
     */
    getFeatureById(id: number | string): IFeature | null;
    /**
     * queries layer for items that match the search
     * @param query query
     */
    queryFeatures(query: Query | Function): IFeature[];
    /**
     * Renders features. The basic implementations iterates over the features provided and
     * renders them if derived from {@link @int/geotoolkit/scene/Node.Node}.
     * @param featuresIt features iterator
     * @param context rendering context
     */
    renderFeatures(featuresIt: Iterator, context: RenderingContext): void;
    /**
     * Renders annotations (to filtered features only)
     * @param featuresIt features iterator
     * @param context rendering context
     */
    renderAnnotations(featuresIt: Iterator, context: RenderingContext): void;
    /**
     * Renders content. The implementation:
     * 1. Applies features filter(s) if set;
     * 2. Execute "renderFeatures";
     * If annotations visible then:
     * 3. Applies annotations filter(s) if set;
     * 4. Execute "renderAnnotations"
     * @param context to render layer
     */
    renderContent(context: RenderingContext): void;
    /**
     * Sets a map coordinate system
     * @param system coordinate system
     */
    setMapCoordinateSystem(system: AbstractSystem | GeodeticSystem): this;
    /**
     * Returns the tooltip formatter or format function to use (null if tooltips are not visible)
     */
    getTooltipFormatter(): object | Function;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {features: {filter: IFilter | IFilter[]}; annotations: {filter: IFilter | IFilter[]; visible: boolean; strategy: IGetAnnotation; text: {preservereadingorientation: boolean; ispointingup: boolean}}; tooltip: {visible: boolean; formatter: Function}; converters: BaseConverter | BaseConverter[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.features features properties
     * @param properties.features.filter features filter(s)
     * @param properties.annotations annotations properties
     * @param properties.annotations.filter annotations filter(s)
     * @param properties.annotations.visible annotations visibility flag
     * @param properties.annotations.strategy annotation strategy
     * @param properties.annotations.text JSON-object or text shape instance (see {@link @int/geotoolkit/scene/shapes/Text.Text} constructor JSON-object for details)
     * @param properties.annotations.text.preservereadingorientation preservereadingorientation flag
     * (if options.annotations.text is JSON-object then and only then its <b>preservereadingorientation=true</b> default value is acknowledged)
     * @param properties.annotations.text.ispointingup ispointingup flag
     * (if options.annotations.text is JSON-object then and only then its <b>ispointingup=true</b> default value is acknowledged)
     * @param properties.tooltip tooltip properties
     * @param properties.tooltip.visible tooltip visibility flag
     * @param properties.tooltip.formatter tooltip data formatter
     * @param properties.converters converter that is used for vector data conversions
     */
    setProperties(properties?: object | { features?: object | { filter?: IFilter | IFilter[]; } ; annotations?: object | { filter?: IFilter | IFilter[]; visible?: boolean; strategy?: IGetAnnotation; text?: object | { preservereadingorientation?: boolean; ispointingup?: boolean; }  | Text; } ; tooltip?: object | { visible?: boolean; formatter?: Function | any; } ; converters?: BaseConverter | BaseConverter[]; } ): this;
    /**
     * Sets options
     * @param options options
     * @param options.features features options
     * @param options.features.filter features filter(s)
     * @param options.annotations annotations options
     * @param options.annotations.filter annotations filter(s)
     * @param options.annotations.visible annotations visibility flag
     * @param options.annotations.strategy annotation strategy
     * @param options.annotations.text JSON-object or text shape instance (see {@link @int/geotoolkit/scene/shapes/Text.Text} constructor JSON-object for details)
     * @param options.annotations.text.preservereadingorientation preservereadingorientation flag
     * (if options.annotations.text is JSON-object then and only then its <b>preservereadingorientation=true</b> default value is acknowledged)
     * @param options.annotations.text.ispointingup ispointingup flag
     * (if options.annotations.text is JSON-object then and only then its <b>ispointingup=true</b> default value is acknowledged)
     * @param options.tooltip tooltip options
     * @param options.tooltip.visible tooltip visibility flag
     * @param options.tooltip.formatter tooltip data formatter
     * @param options.converters converter that is used for vector data conversions
     * @param options.limits limits of this layer
     * @param options.layerfilter layer drawing filter (default "layerfilter=null" means layer _is_ drawn)
     * @param options.alpha the alpha of the layer
     */
    setOptions(options?: object | { features?: object | { filter?: IFilter | IFilter[]; } ; annotations?: object | { filter?: IFilter | IFilter[]; visible?: boolean; strategy?: IGetAnnotation; text?: object | { preservereadingorientation?: boolean; ispointingup?: boolean; }  | Text; } ; tooltip?: object | { visible?: boolean; formatter?: Function | any; } ; converters?: BaseConverter | BaseConverter[]; limits?: Rect; layerfilter?: RendererIFilter; alpha?: number; } ): this;
    /**
     * Converts layer features into GeoJSON format
     */
    toGeoJSON(): object;
    /**
     * Converts layer features into CSV formatted object
     * @param base latitude/longitude accuracy base
     */
    toCSV(base?: number): string[][];
    /**
     * Disposes this layer, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
}
