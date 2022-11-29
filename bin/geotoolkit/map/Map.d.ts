import {AnnotatedWidget} from '../widgets/AnnotatedWidget';
import {Rect} from '../util/Rect';
import {GeodeticSystem} from './GeodeticSystem';
import {AbstractSystem} from './coordinatesystems/AbstractSystem';
import {Image} from '../scene/shapes/Image';
import {Group} from '../scene/Group';
import {Functions} from '../animation/Easing';
import {AnchorType} from '../util/AnchorType';
import {PointerMode} from '../controls/tools/PointerMode';
import {MapScale} from './util/MapScale';
import {Unit} from '../util/Unit';
import {Point} from '../util/Point';
import {AbstractLayer} from './layers/AbstractLayer';

/**
 * Callback for flyTo().
 */
export type flyToCallback = (status: FlyStatus) => void;
/**
 * Map Widget defines a single map which is a collection of the different map layers ( WFS, WMTS, Shape, GeoJson layer..) Its supports different map providers that are tile and feature based.<br>
 * addLayer(), insertLayer() and removeLayer() functions are used to add or remove MapJS layers ( {@link @int/geotoolkit/map/layers/AbstractLayer.AbstractLayer } ).<br>
 * Widget supports changing the Z-order of layers as shown in Advanced Map Tutorial. <br>
 * getModelLimits/setModelLimits handle the bounds for the layer and other properties can be set using setOptions().<br>
 * Some navigation/utility functions like PanTo allows moving view position of the map to the specified map coordinate or focuses the map on a point.<br>
 * In version 2.6 map has no API for dynamic rotation.
 * <br>
 * Widget includes some default tools like:
 * <ul>
 *     <li> Pan Tool </li>
 *     <li> Zoom </li>
 *     <li> RubberBand Tool </li>
 *     <li> Selection </li>
 *     <li> Pinch Zoom </li>
 *     <li> Zoom with Scroll Wheel</li>
 * </ul>
 * @example
 * ```javascript
 * // 1). Initialize Maps. As with other widgets, you need to add map to a canvas and attach the tools.
 * import {Map} from '@int/geotoolkit/map/Map';
 * import {Tile} from '@int/geotoolkit/map/layers/Tile';
 * const map = new geotoolkit.map.Map();
 * const wmts = new Tile({..});
 * map.addLayer(wmts);
 * ```
 * @example
 * ```javascript
 * // 2). This example shows how to change the Spatial Reference for the map while using the @int/geotoolkit/map/Map with @int/geotoolkit/map/layers/Tile.
 * // Only lat/lon, wgs84 and UTM coordinate systems are available, so map data must be transformed to one of them.
 * import {LatLon} from '@int/geotoolkit/map/coordinatesystems/LatLon';
 * const map = new Map({
 *  ...
 *  'system': new LatLon() // lat/long coordinate system
 * });
 * ```
 */
export class Map extends AnnotatedWidget {
    /**
     * Map Widget defines a single map which is a collection of the different map layers ( WFS, WMTS, Shape, GeoJson layer..) Its supports different map providers that are tile and feature based.<br>
     * addLayer(), insertLayer() and removeLayer() functions are used to add or remove MapJS layers ( {@link @int/geotoolkit/map/layers/AbstractLayer.AbstractLayer } ).<br>
     * Widget supports changing the Z-order of layers as shown in Advanced Map Tutorial. <br>
     * getModelLimits/setModelLimits handle the bounds for the layer and other properties can be set using setOptions().<br>
     * Some navigation/utility functions like PanTo allows moving view position of the map to the specified map coordinate or focuses the map on a point.<br>
     * In version 2.6 map has no API for dynamic rotation.
     * <br>
     * Widget includes some default tools like:
     * <ul>
     *     <li> Pan Tool </li>
     *     <li> Zoom </li>
     *     <li> RubberBand Tool </li>
     *     <li> Selection </li>
     *     <li> Pinch Zoom </li>
     *     <li> Zoom with Scroll Wheel</li>
     * </ul>
     * @param options Data passed in
     * @param options.bounds bounds where to place the widget
     * @param options.border defines properties for widget outer border
     * @param options.border.color color of border border
     * @param options.maplimits limits of the map
     * @param options.system geodetic system we want the map to use
     * @param options.mapimage image to be displayed locked at the bottom right of the map
     * @param options.mapscale sets the initial map scale
     * @param options.model optional model of the center
     * @param options.layerscontainer defined a container of map layers.
     * If it is not specified than the default container is used. If a container specified than it must be inserted the model.
     * @param options.wrapped is map model limits wrapped in infinite loop
     * @param options.viewcache enable tiled cache for all map layers. It increase rendering performance for historical data
     * @param options.viewcachesize viewcachesize options to set
     * @param options.viewcachesize.width set tiled cache size.
     * @param options.viewcachesize.height set tiled cache size.
     * @param options.viewcachemode set tiled cache mode
     * @param options.viewcachememorylimit set tiled cache memory limit
     * @param options.viewcacheasync set tiled cache asynchrony
     * @param options.zoom map zoom options
     * @param options.zoom.max maximum zoom limit (i.e. '500' value means user cannot zoom-out after 1:500 scale - 500 meters in 1 pixel). Scale is counted on the equator (by .getMapScale() method), so it can be different with the actual scale on current parallel
     * @param options.zoom.min minimum zoom limit (i.e. '100' value means user cannot zoom-in after 1:100 scale - 100 meters in 1 pixel). Scale is counted on the equator (by .getMapScale() method), so it can be different with the actual scale on current parallel
     * @param options.zoom.speed zoom speed (e.g. 2 means that zoom-in brings the map x2 times closer)
     * @param options.zoom.time zoom time in milliseconds (set to 0 for instant zoom)
     * @param options.zoom.easing easing animation function for elastic zooming
     * @param options.tooltip tooltip options
     * @param options.tooltip.divelement HTML div tooltip element or it will be created with className cg-tooltip-container
     * @param options.tooltip.offsetx offset of tooltip from current position by x in pixels
     * @param options.tooltip.offsety offset of tooltip from current position by y in pixels
     * @param options.tooltip.alignment tooltip alignment according to the point set by offsets
     * @param options.tooltip.mode tooltip appearance mode
     * @param options.tooltip.delay delay in ms between mouse event and tooltip appearing (async for delay > 0)
     * @param options.tooltip.max max number of the features info showing (set to Infinity for unlimited selection)
     * @param options.tooltip.autoupdate true if tooltip info should be auto updated after map.invalidate() was called
     * @param options.mapscaleobject MapScale information to be locked at the bottom left of the map
     * @param options.webmap the ArcGIS WebMap server url or WebNap JSON settings object
     * @param options.scaleunit scale unit
     */
    constructor(options?: object | { bounds?: Rect; border?: object | { color?: object; } ; maplimits?: Rect; system?: GeodeticSystem | AbstractSystem; mapimage?: Image; mapscale?: number; model?: Group; layerscontainer?: Group; wrapped?: boolean; viewcache?: boolean; viewcachesize?: object | { width?: number; height?: number; } ; viewcachemode?: number; viewcachememorylimit?: number; viewcacheasync?: boolean; zoom?: object | { max?: number; min?: number; speed?: number; time?: number; easing?: Functions; } ; tooltip?: object | { divelement?: HTMLElement; offsetx?: number; offsety?: number; alignment?: AnchorType; mode?: PointerMode | string; delay?: number; max?: number; autoupdate?: boolean; } ; mapscaleobject?: MapScale; webmap?: string | any; scaleunit?: Unit; } );
    /**
     * Transform a point from coordinate system to map coordinate system
     * @param point point to transform
     * @param from system converting from
     */
    transformToMap(point: Point, from: GeodeticSystem | AbstractSystem): Point;
    /**
     * Transform a point from map coordinate system to specified coordinate system
     * @param point point to transform
     * @param to system converting from
     */
    transformFromMap(point: Point, to: GeodeticSystem | AbstractSystem): Point;
    /**
     * Transform point
     * @param point point to transform
     * @param from system converting from
     * @param to system converting to
     */
    transformPoint(point: Point, from: GeodeticSystem | AbstractSystem, to: GeodeticSystem | AbstractSystem): Point | any;
    /**
     * Returns the map logo (if exists)
     */
    getMapImage(): Image | any;
    /**
     * Scale node's contents.
     * @param amount zoom factor (> 1 for in, \< 1 for out)
     * @param posX x position to scale from (in pxl)
     * @param posY y position to scale from (in pxl)
     */
    zoom(amount: number, posX?: number, posY?: number): this;
    /**
     * Sets the current map scale
     * @param scale map scale
     * @param onCurrentParallel true, if you need to use factor, else false
     */
    setMapScale(scale: number, onCurrentParallel?: boolean): this;
    /**
     * gets the current map scale
     * @param onCurrentParallel true, if you need to use factor, else false
     */
    getMapScale(onCurrentParallel?: boolean): number;
    /**
     * Changes current map scale so it fits provided zoom level
     * @param level desired zoom level
     */
    setZoomLevel(level: number): this;
    /**
     * Returns current zoom level (based on current scale). May be a fractional number
     */
    getZoomLevel(): number;
    /**
     * removes scrollbars
     */
    getOptions(): object | any;
    /**
     * Sets options
     * @param options options
     * @param options.webmap the ArcGIS WebMap server url or WebMap JSON settings object. The old webmap layers will
     * be removed. if the url equals to loaded webmap url then nothing happens.
     * @param options.mapimage image to be displayed locked at the bottom right of the map
     * @param options.maplimits limits of the map
     * @param options.scaleunit scale unit
     * @param options.mapscale sets the initial map scale
     * @param options.mapscaleobject MapScale information to be locked at the bottom left of the map
     * @param options.zoom map zoom options
     * @param options.zoom.max maximum zoom limit (i.e. '500' value means user cannot zoom-out after 1:500 scale - 500 meters in 1 pixel). Scale is counted on the equator (by .getMapScale() method), so it can be different with the actual scale on current parallel
     * @param options.zoom.min minimum zoom limit (i.e. '100' value means user cannot zoom-in after 1:100 scale - 100 meters in 1 pixel). Scale is counted on the equator (by .getMapScale() method), so it can be different with the actual scale on current parallel
     * @param options.zoom.speed zoom speed (e.g. 2 means that zoom-in brings the map x2 times closer)
     * @param options.zoom.time zoom time in milliseconds (set to 0 for instant zoom)
     * @param options.zoom.easing easing animation function for elastic zooming
     */
    setOptions(options?: object | { webmap?: string | any; mapimage?: Image; maplimits?: Rect; scaleunit?: Unit; mapscale?: number; mapscaleobject?: MapScale; zoom?: object | { max?: number; min?: number; speed?: number; time?: number; easing?: Functions; } ; } ): this;
    /**
     * Gets the working system of the map
     */
    getCoordinateSystem(): AbstractSystem;
    /**
     * Method to add a map layer. Layers can be added on top of existing layers.
     * @remarks fires {@link @int/geotoolkit/map/Map~Events~onLayerAdded}
     * @param layer layer to add
     */
    addLayer(layer: AbstractLayer): this;
    /**
     * Sets inner model limits
     * @param limits inner limits
     */
    setCenterModelLimits(limits: Rect): this;
    /**
     * Gets model limits, the limits of this groups inside space
     */
    getCenterModelLimits(): Rect | any;
    /**
     * Sets the Map scale object that is anchored in the one position of the map
     * @param mapscale map scale
     */
    setMapScaleObject(mapscale: MapScale): this;
    /**
     * Returns current map scale object (if exists)
     */
    getMapScaleObject(): MapScale | any;
    /**
     * gets the center point on the map.
     */
    getMapCenter(): Point;
    /**
     * Pans the map to the point.
     * @param center point where to pan
     * @param coordSystem if null assumes map system
     * @param elastic deprecated (since 2020 (3.0)). use flyTo instead. is panTo move elastic or instant
     */
    panTo(center: Point, coordSystem?: GeodeticSystem, elastic?: boolean): this;
    /**
     * Return layer count
     */
    getLayerCount(): number;
    /**
     * Return layer by index
     * @param i index of the node
     */
    getLayer(i: number): AbstractLayer;
    /**
     * Removes a Layer
     * @remarks fires {@link @int/geotoolkit/map/Map~Events~onLayerRemoved}
     * @param layer Layer to remove
     */
    removeLayer(layer: AbstractLayer): this;
    /**
     * Inserts a Layer, if the layer is already a child, this moves it.  Layer can be inserted at a z depth or index as required.<br>
     * For Example <code> map.insertLayer(layer, index); </code>
     * @remarks fires {@link @int/geotoolkit/map/Map~Events~onLayerAdded}
     * @param layer Layer to insert
     * @param index where to insert layer
     */
    insertLayer(layer: AbstractLayer, index: number): this;
    /**
     * Animates map viewport to a given point on the map, simulating the effect of flight. For this, animation effects with
     * attributeName(s) 'scale' and 'location' are used. Set your own effects to customize the animation.
     * @param options animation fly options
     * @param options.scale final point scale (see .setMapScale for more info)
     * @param options.level final point zoom level (see .setZoomLevel for more info). Has less priority than 'scale', if both provided.
     * @param options.location final point location. May be a point,
     * an array ([x, y]), coordinates object of the form {x: x, y: y}, or array of such locations to move along the corresponding trajectory
     * @param options.system coordinate system for the location
     * coordinates. Latitude/longitude is used by default.
     * @param options.duration positive fly duration (in ms)
     * @param options.easing easing function for viewport change
     * @param options.callback callback to be called when fly is over. Receives geotoolkit.map.Map.FlyStatus enum
     * to check if animation was finished or interrupted by user actions.
     */
    flyTo(options: object | { scale?: number; level?: number; location?: Point | object | number[] | Point[] | object[]; system?: string | AbstractSystem; duration?: number; easing?: Functions; callback?: Function; } ): this;
    /**
     * Gets scale unit
     */
    getScaleUnit(): Unit;
    /**
     * Sets scale unit
     * @param unit new unit of this map
     */
    setScaleUnit(unit: Unit): this;
    /**
     * Sets visible model limits, keeping the full limits resolution
     * @param limits the visible model limits
     */
    zoomToRect(limits?: Rect): void;
    /**
     * Sets bounds of the map
     * @param bounds bound of the map
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Returns promise that is resolved when all current map layers are loaded and map is ready to be rendered
     */
    load(): Promise<any>;
}
/**
 * Map Events
 */
export enum Events {
    /**
     * Map layer added
     */
    onLayerAdded = 'LayerAdded',
    /**
     * Map layer removed
     */
    onLayerRemoved = 'LayerRemoved',
    /**
     * Map layers list order changed
     */
    onLayersModified = 'LayersModified',
    /**
     * Map zoom started
     */
    onZoomStart = 'onZoomStart',
    /**
     * Map zoom ended
     */
    onZoomEnd = 'onZoomEnd',
    /**
     * Map zoom triggered by double click
     */
    onDoubleClick = 'onDoubleClick',
    /**
     * Map resized
     */
    onResize = 'onResize'
}
/**
 * Map fly status for geotoolkit.map.Map.flyTo callback
 */
export enum FlyStatus {
    /**
     * Fly has been successfully done
     */
    Done = 'Done',
    /**
     * Fly has been interrupted and not finished
     */
    Interrupted = 'Interrupted'
}
