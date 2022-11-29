import {ArcGISImage} from './ArcGISImage';

/**
 * ArcGIS source loader that loads ArcGIS server settings (including tileInfo) and sets the standard tiles url.
 * Supports ArcGIS version 9.3 and higher.
 */
export class ArcGISTile extends ArcGISImage {
    /**
     * ArcGIS source loader that loads ArcGIS server settings (including tileInfo) and sets the standard tiles url.
     * Supports ArcGIS version 9.3 and higher.
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string | object, onload: Function): void;
}
