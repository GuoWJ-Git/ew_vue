import {Tile} from './Tile';
import {Bing as SourcesBing} from '../sources/Bing';
import {BingImagerySet} from '../BingImagerySet';
import {Point} from '../../util/Point';

/**
 * This shape connects to a Bing Maps server to display a map.<br>
 */
export class Bing extends Tile {
    /**
     * This shape connects to a Bing Maps server to display a map.<br>
     * @param options 
     * @param options.source Bing Maps source
     * @param options.key Bing Maps API key. Get yours at http://www.bingmapsportal.com/
     * @param options.culture the culture code to use for the request
     * @param options.uriScheme server uri scheme to use
     * @param options.imagerySet the type of imagery for request. See
     * geotoolkit.map.BingImagerySet enum for all imagery supported
     * @param options.centerPoint the center point to use for the imagery
     * WARNING! center point is required for the Birdseye imagery and its varieties
     */
    constructor(options?: object | { source?: SourcesBing; key?: string; culture?: string; uriScheme?: string; imagerySet?: BingImagerySet | string; centerPoint?: Point; } );
}
