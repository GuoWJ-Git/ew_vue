import {Node} from '../../scene/Node';
import {AbstractSource} from '../sources/AbstractSource';
import {GeodeticSystem} from '../GeodeticSystem';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {IFilter} from '../../renderer/IFilter';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Cache} from '../../scene/Cache';
import {Point} from '../../util/Point';

/**
 * Defines a Map Layer, an Abstract class that will be used by the Map.
 * Map layer represents the geographic layer which can be a tile layer, map layer or any custom layer. <br>
 * addLayer(), insertLayer() and removeLayer() is used to add and remove layers.
 */
export class AbstractLayer extends Node {
    /**
     * Defines a Map Layer, an Abstract class that will be used by the Map.
     * Map layer represents the geographic layer which can be a tile layer, map layer or any custom layer. <br>
     * addLayer(), insertLayer() and removeLayer() is used to add and remove layers.
     * @param options options
     * @param options.source the layer data source
     * @param options.system coordinate system this layer's data is in
     * @param options.layerfilter layer filter
     * @param options.limits limits of this layer
     * @param options.alpha the alpha of the layer
     * @param options.url server url
     */
    constructor(options?: object | { source?: AbstractSource; system?: GeodeticSystem | AbstractSystem; layerfilter?: IFilter; limits?: Rect; alpha?: number; url?: string; } );
    /**
     */
    getWorldTransform(): Transformation;
    /**
     * Return visible model limits
     * @param ignoreModelLimits flag defines whether to ignore ModelLimits or not
     */
    getVisibleModelLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Gets user defined model limits if set; calculated model limits otherwise
     */
    getModelLimits(): Rect | null;
    /**
     * Sets model limits
     * @param limits new model limits
     */
    setModelLimits(limits: Rect | null): this;
    /**
     * Gets calculated model limits
     */
    getDefaultModelLimits(): Rect | null;
    /**
     * Returns default model limits (based on the map coordinate system)
     */
    protected calculateDefaultModelLimits(): Rect;
    /**
     * Return a the alpha of the layer
     * between 0.0 (fully transparent) and 1.0 (fully opaque). The default value is 1.0.
     */
    getLayerAlpha(): number;
    /**
     * Set the alpha of the layer
     * @param alpha between 0.0 (fully transparent) and 1.0 (fully opaque). The default value is 1.0.
     */
    setLayerAlpha(alpha: number): this;
    /**
     * Gets options
     */
    getOptions(): object | any;
    /**
     * Sets options (default options listed are for construction time only)
     * @param options options
     * @param options.limits limits of this layer
     * @param options.layerfilter layer drawing filter (default "layerfilter=null" means layer _is_ drawn)
     * @param options.alpha the alpha of the layer
     */
    setOptions(options?: object | { limits?: Rect; layerfilter?: IFilter; alpha?: number; } ): this;
    /**
     * Return coordinate system for this layer
     */
    getCoordinateSystem(): AbstractSystem;
    /**
     * Set vertical flip of the representation
     * @param flip flag to set the vertical flip of the representation
     */
    setVerticalFlip(flip: boolean): this;
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Renders layer content
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Renders async layer content
     * @param context the Rendering Context
     * @param callback callback to be called after rendering of layer content
     */
    renderContentAsync(context: RenderingContext, callback: Function): void;
    /**
     * Returns promise that is resolved when all layer data is loaded and ready to be rendered
     */
    load(): Promise<any>;
    /**
     * Checks if layer data is still loading and not ready
     */
    isLoading(): boolean;
    /**
     * Sets cache to be used to cache
     * @param cache cache to be used
     */
    setCache(cache: Cache): this;
    /**
     * Invalidate layer
     * @param bounds bounds of the invalid rectangle in the inner node coordinates
     * @param force true if parent should be invalidated immediately
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     */
    invalidate(bounds?: Rect | any, force?: boolean): this;
    /**
     * Return cache strategy to be used to cache children nodes
     */
    getCache(): Cache;
    /**
     * Clear cache
     */
    clearCache(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {source: AbstractSource; system: GeodeticSystem | AbstractSystem; layerfilter: IFilter; limits: Rect; alpha: number; url: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options
     * @param properties.source the layer data source
     * @param properties.system coordinate system this layer's data is in
     * @param properties.layerfilter layer filter
     * @param properties.limits limits of this layer
     * @param properties.alpha the alpha of the layer
     * @param properties.url server url
     */
    setProperties(properties?: object | { source?: AbstractSource; system?: GeodeticSystem | AbstractSystem; layerfilter?: IFilter; limits?: Rect; alpha?: number; url?: string; } ): this;
    /**
     * Return a map coordinate system
     */
    getMapCoordinateSystem(): AbstractSystem;
    /**
     * Sets a map coordinate system
     * @param system new map coordinate system
     */
    setMapCoordinateSystem(system?: AbstractSystem | GeodeticSystem | number): this;
    /**
     * Transform point
     * @param point point to transform
     * @param from system converting from
     * @param to system converting to
     * @param dst optional destination point
     */
    transformPoint(point: Point, from: GeodeticSystem | AbstractSystem, to: GeodeticSystem | AbstractSystem, dst?: Point): Point | any;
    /**
     * Transform a point from layer coordinate system to map coordinate system
     * @param point point to transform
     * @param dst optional destination point
     */
    transformToMap(point: Point, dst?: Point): Point;
    /**
     * Transform a point from map coordinate system to layer coordinate system
     * @param point point to transform
     * @param dst optional destination point
     */
    transformFromMap(point: Point, dst?: Point): Point;
    /**
     * Sets the url to the layer source
     * @param url server url
     */
    setServerURL(url: string): this;
    /**
     * Gets the server url from the layer source
     */
    getServerURL(): string;
    /**
     * Disposes this layer, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
    /**
     * Returns current data source
     */
    getDataSource(): AbstractSource;
    /**
     * Performs selection of the data with its device coordinates. Returns null, if no data available but will be loaded
     * asynchronously later (fires geotoolkit.map.sources.Events.InfoUpdated).
     * @param pt is the device coordinates to select
     * @param radius the radius of selection (in px)
     */
    hitTest(pt: Point, radius?: number): any | any[];
    /**
     * Returns the format function to use for the tooltip info (null if tooltips are not visible)
     */
    getTooltipFormatter(): object | Function;
}
