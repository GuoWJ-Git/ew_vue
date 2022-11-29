import {Map} from '../Map';

/**
 * ArcGIS Web Map layers parser
 */
export class WebMap {
    /**
     * ArcGIS Web Map layers parser
     */
    constructor();
    /**
     * Loads WebMap layers from the server and adds them to the map. When all added layers are loaded, the returned promise is resolved.
     * @param map the map widget for the result
     * @param webmap the ArcGIS WebMap server url or WebMap JSON settings object
     */
    static load(map: Map, webmap: string | any): Promise<any>;
    /**
     * Sets the Bing Maps API key to use in the Webmap-created Bing layers. Get yours key at http://www.bingmapsportal.com/
     * @param key Bing Maps API key
     */
    static setBingMapsKey(key: string): void;
}
