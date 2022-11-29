import {ArcGISFeature} from './ArcGISFeature';

/**
 * Stream source loader that loads settings from ArcGIS Stream server
 */
export class Stream extends ArcGISFeature {
    /**
     * Stream source loader that loads settings from ArcGIS Stream server
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
