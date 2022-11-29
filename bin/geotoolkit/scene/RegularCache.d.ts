import {Transformation} from '../util/Transformation';
import {Rect} from '../util/Rect';
import {Cache} from './Cache';
import {TileResourceManager} from './TileResourceManager';

/**
 * Return cache model limits to be cached
 */
export type getLimitsCallback = (tr: Transformation) => Rect | any;
/**
 * Defines a cache strategy to prerender composite node's children into a single shared image and cut it into
 * a set of tiles.
 */
export class RegularCache extends Cache {
    /**
     * Defines a cache strategy to prerender composite node's children into a single shared image and cut it into
     * a set of tiles.
     * @param options cache options
     * @param options.limits total cache limits to use instead of the owner model limits (if needed)
     * @param options.tilewidth tile width in pixels
     * @param options.tileheight tile height in pixels
     * @param options.memorylimit upper memory limit in Mb
     */
    constructor(options: object | { limits?: Rect | getLimitsCallback; tilewidth?: number; tileheight?: number; memorylimit?: number; } );
    /**
     * Flags the RegularCache as needing a clear / rebuild.
     * Called after zooming or when we've hit the cap for number of images
     * @param force force flag
     */
    rebuild(force?: boolean): this;
    /**
     * Sets total cache limits
     * @param limits total cache limits to use instead of the owner model limits (if needed)
     */
    setLimits(limits: Rect | getLimitsCallback | any): this;
    /**
     * Returns total cache limits (if used)
     */
    getLimits(): Rect | getLimitsCallback;
    /**
     * Returns resource manager.
     */
    getResourceManager(): TileResourceManager;
    /**
     * Returns tile width.
     */
    getTileWidth(): number;
    /**
     * Returns tile height.
     */
    getTileHeight(): number;
}
