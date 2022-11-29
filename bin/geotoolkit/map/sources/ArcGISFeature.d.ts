import {Vector} from './Vector';
import {Text} from '../../scene/shapes/Text';
import {Rect} from '../../util/Rect';

/**
 * Callback for queryLegend().
 */
export type queryLegendCallback = (err: object, data: object) => void;
/**
 * Vector source that allows user to get features from ArcGIS FeatureService server.
 * Supports ArcGIS version 10.0 and higher.
 */
export class ArcGISFeature extends Vector {
    /**
     * Vector source that allows user to get features from ArcGIS FeatureService server.
     * Supports ArcGIS version 10.0 and higher.
     * @param options options
     * @param options.requestfields an array for requested fields. If null, all the fields are loaded
     * @param options.layers server layers to request (for multilayer server only)
     * @param options.offsetsupport true if offsetSupport server's property should be used (otherwise quadtree
     * division is used). WARNING! Some servers might have wrong offset implementation and partially miss features with or
     * without offset. Make sure your server is working correctly or change 'offsetsupport' property if the server settings
     * cannot be changed.
     * @param options.geometryPrecision number of decimal places in requested geometry values
     * @param options.token authorization token for ArcGIS data servers (if needed)
     */
    constructor(options?: object | { requestfields?: string[]; layers?: string | string[]; offsetsupport?: boolean; geometryPrecision?: number; token?: string; } );
    /**
     */
    _settings: object;
    /**
     * Sets the authorization token for ArcGIS data server (if needed, null otherwise)
     * @param token the authorization token for ArcGIS server
     */
    setToken(token: string | any): this;
    /**
     * Returns the authorization token (if set, null otherwise)
     */
    getToken(): string | any;
    /**
     * Sets the list of the fields to request from the server (should be set before the server url)
     * @param requestFields an array of fields to request from server
     */
    setRequestFields(requestFields: string[]): this;
    /**
     * Returns an array of fields to be requested from server
     */
    getRequestFields(): string[] | any;
    /**
     * Sets the list of the fields to request from the server (should be set before the server url)
     * @param precision number of decimal places in requested geometry values
     */
    setGeometryPrecision(precision: number): this;
    /**
     * Returns number of decimal places in requested geometry values
     */
    getGeometryPrecision(): number;
    /**
     * Returns the layers data array (for the multilayer server source)
     * Should be used asynchronically after loadServerData() method is called
     */
    getLayers(): any[];
    /**
     * Returns separate feature source for the given layer (for the multilayer server source)
     * Should be used asynchronically after loadServerData() method is called
     * @param id required layer id
     */
    getLayerSource(id: string): ArcGISFeature;
    /**
     * Returns true if feature source's server contains multiple layers
     * Should be used asynchronically after loadServerData() method is called
     */
    isMultilayerSource(): boolean;
    /**
     * Returns the server layer's global alpha (for singlelayer servers basically)
     * Should be used asynchronically after loadServerData() method is called
     */
    getGlobalAlpha(): number;
    /**
     * Returns scale visible range for the server's layer (for singlelayer servers basically)
     * Should be used asynchronically after loadServerData() method is called
     */
    getScaleRange(): number[];
    /**
     * Returns annotation's text shape parsed from the server (for singlelayer servers basically)
     * Should be used asynchronically after loadServerData() method is called
     */
    getAnnotationShape(): Text;
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: number | number[]): this;
    /**
     * Returns layer initial extent rectangle
     */
    getInitialModelLimits(): Rect | null;
    /**
     * Returns the server layer ids that are requested.
     */
    getVisibleLayers(): number[];
    /**
     * Disposes this source, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
    /**
     * Creates a server legend from its templates (short info about each layer, such as layer name, type and icon)
     * @param callback the result handler
     */
    queryLegend(callback: Function): void;
}
