import {Image} from './Image';
import {Range} from '../../util/Range';
import {Point} from '../../util/Point';
import {Rect} from '../../util/Rect';
import {Polygon} from '../../util/Polygon';
import {ArcGISImage as LayersArcGISImage} from '../layers/ArcGISImage';

/**
 * Callback for queryLegend().
 */
export type queryLegendCallback = (err: object, data: object) => void;
/**
 * Image source for ArcGIS servers that supports additional features provided by ArcGIS servers (such as getting legend).
 * Supports ArcGIS version 9.3 and higher.
 */
export class ArcGISImage extends Image {
    /**
     * Image source for ArcGIS servers that supports additional features provided by ArcGIS servers (such as getting legend).
     * Supports ArcGIS version 9.3 and higher.
     * @param options options
     * @param options.token authorization token for ArcGIS data servers (if needed)
     * @param options.dpi device resolution of the exported image (dots per inch)
     * @param options.time time instant or time extent of the exported map image
     * @param options.transparent exported image transparency
     * @param options.dynamicLayers parameter to modify the layer drawing order, change layer drawing info, and change layer data source version
     * for this server (if supported). See https://developers.arcgis.com/rest/services-reference/export-map.htm for more info
     */
    constructor(options?: object | { token?: string; dpi?: number; time?: number | Range; transparent?: boolean; dynamicLayers?: any[]; } );
    /**
     */
    _settings: object;
    /**
     * Queries server legend (short info about each layer, such as layer name, type and icon).
     * WARNING! Only ArcGIS version 10.0 and higher supports this operation.
     * @param callback the result handler
     */
    queryLegend(callback: Function): void;
    /**
     * Queries data by the geometry provided. Is supported in ArcGIS version 9.3 and higher.
     * @param geometry geometry to query
     */
    queryGeometry(geometry: object): any[];
    /**
     * Aborts all the geometry data queried
     */
    abortGeometryQueries(): this;
    /**
     * Queries data by the geometry provided. Is supported in ArcGIS version 9.3 and higher.
     * @param geometry area geometry to identify
     * @param layer layer for query
     */
    identify(geometry: Point | Rect | Polygon, layer: LayersArcGISImage): any[];
    /**
     * Returns layer initial extent rectangle. Is supported in ArcGIS version 9.3 and higher.
     */
    getInitialModelLimits(): Rect | null;
    /**
     * Sets layers to show as the tooltip info (in .queryGeometry and .identify methods)
     * @param layers layers to show tooltip
     */
    setTooltipLayers(layers: number | number[]): this;
    /**
     * Sets device resolution of the exported image (dots per inch)
     * @param dpi image resolution (dots per inch)
     */
    setDPI(dpi: number): this;
    /**
     * Sets time instant or time extent of the exported map image
     * @param time time instant or time extent of the exported map image
     */
    setTime(time: number | Range): this;
    /**
     * Sets exported image (layer) transparency
     * @param transparent exported image transparency
     */
    setTransparent(transparent: boolean): this;
    /**
     * Sets parameter to modify the layer drawing order, change layer drawing info, and change layer data source version
     * for this server (if supported). See https://developers.arcgis.com/rest/services-reference/export-map.htm for more info
     * @param layers modified layers' drawing information
     */
    setDynamicLayers(layers: any[]): this;
    /**
     * Sets the authorization token for ArcGIS data server (if needed, null otherwise)
     * @param token the authorization token for ArcGIS server
     */
    setToken(token: string | any): this;
    /**
     * Returns the authorization token (if set, null otherwise)
     */
    getToken(): string | any;
}
