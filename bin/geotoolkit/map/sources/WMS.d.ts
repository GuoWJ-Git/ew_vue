import {Image} from './Image';
import {Point} from '../../util/Point';
import {WMS as LayersWMS} from '../layers/WMS';
import {AbstractFeature} from '../features/AbstractFeature';

/**
 * Image source that allows user to get map data as an image using the WMS (Web Map Service) server
 */
export class WMS extends Image {
    /**
     * Image source that allows user to get map data as an image using the WMS (Web Map Service) server
     * @param options options
     * @param options.imageformat image format to use
     */
    constructor(options?: object | { imageformat?: string; } );
    /**
     */
    _settings: object;
    /**
     * Sets the image format to be used
     * @param format image format to use (e.g. 'png')
     */
    setImageFormat(format: string): this;
    /**
     * Returns the image format currently used
     */
    getImageFormat(): string | null;
    /**
     * Sets the image transparency
     * @param transparent image transparency
     */
    setTransparent(transparent: boolean): this;
    /**
     * Returns the image current transparency
     */
    getTransparent(): boolean;
    /**
     * Sets WMS version to use
     * @param version version to use (in '1.3.0' format)
     */
    setVersion(version: string): this;
    /**
     * Returns WMS version currently used
     */
    getVersion(): string;
    /**
     * Queries data by the geometry provided.
     * @param geometry area geometry to request
     * @param layer layer for query
     */
    getFeatureInfo(geometry: Point, layer: LayersWMS): AbstractFeature[] | any;
    /**
     * Sets layers to show as the tooltip info (in .getFeatureInfo method)
     * @param layers layers to show tooltip
     */
    setTooltipLayers(layers: number | number[]): this;
    /**
     * Aborts all the geometry data queried
     */
    abortGeometryQueries(): this;
}
