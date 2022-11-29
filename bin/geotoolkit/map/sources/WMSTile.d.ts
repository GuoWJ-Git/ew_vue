import {Tile} from './Tile';
import {WMS} from './WMS';

/**
 * Tile source that allows user to get map data as a bunch of tiles using the WMS (Web Map Service) server
 */
export class WMSTile extends Tile {
    /**
     * Tile source that allows user to get map data as a bunch of tiles using the WMS (Web Map Service) server
     * @param options options
     * @param options.imageformat image format to use
     * @param options.transparent true if tiles should be transparent, false otherwise
     * @param options.version wms server version to use
     */
    constructor(options?: object | { imageformat?: string; transparent?: boolean; version?: string; } );
    /**
     */
    _settings: object;
    /**
     * Sets the image format to be used for tiles
     * @param format image format to use (e.g. 'png')
     */
    setImageFormat(format: string): this;
    /**
     * Returns the image format currently used for tiles
     */
    getImageFormat(): string | null;
    /**
     * Sets the tiles transparency
     * @param transparent tiles transparency
     */
    setTransparent(transparent: boolean): this;
    /**
     * Returns the tiles current transparency
     */
    getTransparent(): boolean;
    /**
     * Sets WMS version to use
     * @param version version to use (in '1.3.0' format)
     */
    setVersion(version: string): WMS;
    /**
     * Returns WMS version currently used
     */
    getVersion(): string;
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
