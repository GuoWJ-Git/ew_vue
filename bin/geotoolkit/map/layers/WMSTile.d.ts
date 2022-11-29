import {Tile} from './Tile';

/**
 * This shape connects to WMS server to display a map with the tiles approach. Has its pros and cons compared to the standard
 * WMS layer such as strict tiling structure but potentially better performance.
 */
export class WMSTile extends Tile {
    /**
     * This shape connects to WMS server to display a map with the tiles approach. Has its pros and cons compared to the standard
     * WMS layer such as strict tiling structure but potentially better performance.
     * @param options layer options
     * @param options.format the image format used by the layer
     * @param options.version the WMS version currently used
     * @param options.transparent the layer transparency
     * @param options.showlayers the server layer names that are requested
     */
    constructor(options?: object | { format?: string; version?: string; transparent?: boolean; showlayers?: string[]; } );
    /**
     * Sets the image format to use by the layer
     * @param format image format to use
     */
    setImageFormat(format: string): this;
    /**
     * Returns the image format used by the layer
     */
    getImageFormat(): string | null;
    /**
     * Sets the transparency of the layer
     * @param transparent true if layer should be transparent
     */
    setTransparent(transparent: boolean): this;
    /**
     * Returns the transparency of the layer
     */
    getTransparent(): boolean | null;
    /**
     * Sets WMS version to use
     * @param version version to use (in '1.3.0' format)
     */
    setVersion(version: string): this;
    /**
     * Returns WMS version currently used
     */
    getVersion(): string | null;
    /**
     * Gets the JSON data of the available layers for the server
     */
    getLayers(): object | any;
    /**
     * Returns the server layer names that are requested.
     */
    getVisibleLayers(): string[] | any;
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: number | number[]): this;
    /**
     * Adds the passed in ID's to the list of layers to hide
     * @param id ID(s) for the layers to show
     */
    hideLayers(id?: number | number[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {format: string; version: string; transparent: boolean; showlayers: string[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties
     * @param properties.format the image format used by the layer
     * @param properties.version the WMS version currently used
     * @param properties.transparent the layer transparency
     * @param properties.showlayers the server layer names that are requested
     */
    setProperties(properties?: object | { format?: string; version?: string; transparent?: boolean; showlayers?: string[]; } ): this;
    /**
     * Sets options
     * @param options JSON containing the properties
     * @param options.format the image format used by the layer
     * @param options.version the WMS version currently used
     * @param options.transparent the layer transparency
     * @param options.showlayers the server layer names that are requested
     */
    setOptions(options?: object | { format?: string; version?: string; transparent?: boolean; showlayers?: string[]; } ): this;
}
