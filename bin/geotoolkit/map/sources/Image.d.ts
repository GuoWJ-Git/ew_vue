import {AbstractSource} from './AbstractSource';

/**
 * Image source that allows user to get map data as an image using the format provided
 */
export class Image extends AbstractSource {
    /**
     * Image source that allows user to get map data as an image using the format provided
     * @param options options
     * @param options.timeout the timeout (in ms) between viewport changed and new image requested
     * @param options.inflate inflate ratio for requesting area (0.2 by default means +20%)
     * @param options.uselayerlimits set true to clip requesting image with the layer limits, false otherwise
     */
    constructor(options?: object | { timeout?: number; inflate?: number; uselayerlimits?: boolean; } );
    /**
     */
    _settings: object;
    /**
     * Notifies source to remove all data added.
     */
    clear(): this;
    /**
     * Sets image inflate ratio to use
     * @param ratio image inflate ratio (e.g. 0.2 means the 20% inflation)
     */
    setInflateRatio(ratio: number): this;
    /**
     * Returns current inflate ratio
     */
    getInflateRatio(): number;
    /**
     * Sets timeout
     * @param timeout timeout
     */
    setSourceTimeout(timeout: number): this;
    /**
     * Returns timeout
     */
    getSourceTimeout(): number;
    /**
     * Sets the server layer name(s) to be shown on the layer
     * @param layers layer id(s) to be shown
     */
    showLayers(layers: string | number[]): this;
    /**
     * Adds the passed in ID's to the list of layers to hide
     * @param id ID(s) for the layers to show
     */
    hideLayers(id?: number | number[]): this;
    /**
     * Returns the server layer ids that are requested.
     */
    getVisibleLayers(): number[];
    /**
     * Returns layers JSON data loaded from the server
     * Should be used asynchronically after loadServerData() method is called
     */
    getLayers(): object;
}
