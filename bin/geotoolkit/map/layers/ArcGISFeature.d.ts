import {Vector} from './Vector';

/**
 * Callback for queryLegend().
 */
export type queryLegendCallback = (err: object, data: object) => void;
/**
 * This shape connects to an Esri Feature Server and displays a single layer from that server.
 * Supports ArcGIS version 10.0 and higher.
 */
export class ArcGISFeature extends Vector {
    /**
     * This shape connects to an Esri Feature Server and displays a single layer from that server.
     * Supports ArcGIS version 10.0 and higher.
     * @param options options
     * @param options.layer layer id(s) to display (for multilayer servers only)
     * @param options.requestresolution layer will be broken into a grid requestresolution x requestresolution for server requests
     * @param options.requestfields an array for requested fields. if it is not specified all fields are loaded
     * @param options.token authorization token for ArcGIS data server (if needed)
     */
    constructor(options?: object | { layer?: string | any[]; requestresolution?: number; requestfields?: string[]; token?: string; } );
    /**
     * Returns an array of fields to be requested from server
     */
    getRequestFields(): string[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {requestresolution: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.layer layer id(s) to display (for multilayer servers only)
     * @param properties.requestresolution layer will be broken into a grid requestresolution x requestresolution for server requests
     * @param properties.requestfields an array for requested fields. if it is not specified all fields are loaded
     * @param properties.token authorization token for ArcGIS data server (if needed)
     */
    setProperties(properties?: object | { layer?: string | any[]; requestresolution?: number; requestfields?: string[]; token?: string; } ): this;
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: number | number[]): this;
    /**
     * Returns the server layer names that are requested.
     */
    getVisibleLayers(): string[] | any;
    /**
     * Queries layer legend data
     * @param callback callback to call when the legend data is loaded
     */
    queryLegend(callback?: Function): this;
}
