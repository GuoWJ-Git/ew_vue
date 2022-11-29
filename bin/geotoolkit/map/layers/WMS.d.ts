import {Image} from './Image';

/**
 * This shape connects to WMS server to display a map as a single image.
 */
export class WMS extends Image {
    /**
     * This shape connects to WMS server to display a map as a single image.
     * @param options options
     * @param options.imageformat image format to use
     * @param options.layers layer name(s) to be shown
     * @param options.version WMS version to be used
     * @param options.inflate inflate ratio for requesting area (0.2 by default means +20%)
     * @param options.transparent true if layer should be transparent
     * @param options.timeout the timeout (in ms) between viewport changed and new image requested
     * @param options.tooltip tooltip options
     * @param options.tooltip.visible tooltip visibility flag
     * @param options.tooltip.formatter tooltip data formatter
     */
    constructor(options?: object | { imageformat?: string; layers?: string | string[]; version?: string; inflate?: number; transparent?: boolean; timeout?: number; tooltip?: object | { visible?: boolean; formatter?: Function | any; } ; } );
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
     * @param bool true if layer should be transparent
     */
    setTransparent(bool: boolean): this;
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
     * Gets all the properties pertaining to this object
     */
    getProperties(): {imageformat: string; layers: string[]; version: string; inflate: number; timeout: number; transparent: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options
     * @param properties.imageformat image format to use
     * @param properties.layers layer name(s) to be shown
     * @param properties.version WMS version to be used
     * @param properties.inflate inflate ratio for requesting area (0.2 by default means +20%)
     * @param properties.transparent true if layer should be transparent
     * @param properties.timeout the timeout (in ms) between viewport changed and new image requested
     */
    setProperties(properties?: object | { imageformat?: string; layers?: string | string[]; version?: string; inflate?: number; transparent?: boolean; timeout?: number; } ): this;
    /**
     * Returns the format function to use (null if tooltips are not visible)
     */
    getTooltipFormatter(): object | Function;
}
