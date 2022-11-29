import {Tile} from './Tile';
import {AbstractLoader} from './loaders/AbstractLoader';
import {BingImagerySet} from '../BingImagerySet';
import {Point} from '../../util/Point';

/**
 * Tile source that allows user to get tiles from the Bing Maps server
 */
export class Bing extends Tile {
    /**
     * Tile source that allows user to get tiles from the Bing Maps server
     * @param options options
     * @param options.loader loader for loading server settings
     * @param options.key Bing Maps API key. Get yours at http://www.bingmapsportal.com/
     * @param options.culture the culture code to use for the request
     * @param options.uriScheme server uri scheme to use
     * @param options.imagerySet the type of imagery for request. See
     * geotoolkit.map.BingImagerySet enum for all imagery supported
     * @param options.centerPoint the center point to use for the imagery
     * WARNING! center point is required for the Birdseye imagery and its varieties
     */
    constructor(options?: object | { loader?: AbstractLoader; key?: string; culture?: string; uriScheme?: string; imagerySet?: BingImagerySet | string; centerPoint?: Point; } );
    /**
     */
    _settings: object;
    /**
     * Sets Bing imagery set
     * @param imagerySet bing imagery set
     */
    setImagerySet(imagerySet: BingImagerySet): this;
    /**
     * Returns Bing imagery set
     */
    getImagerySet(): BingImagerySet;
    /**
     * Sets Bing Maps API key
     * @param key bing maps key
     */
    setKey(key: string): this;
    /**
     * Returns Bing Maps API key
     */
    getKey(): any | string;
    /**
     * Sets Bing Maps culture code
     * @param culture bing maps culture code
     */
    setCulture(culture: string): this;
    /**
     * Returns Bing Maps culture code
     */
    getCulture(): string;
    /**
     * Sets Bing Maps servers uri scheme to use
     * @param uriScheme bing maps servers uri scheme
     */
    setUriScheme(uriScheme: string): this;
    /**
     * Returns Bing Maps servers uri scheme
     */
    getUriScheme(): string;
    /**
     * Sets Bing Maps center point
     * @param point bing maps culture code
     */
    setCenterPoint(point: Point): this;
    /**
     * Returns Bing Maps center point
     */
    getCenterPoint(): any | Point;
}
