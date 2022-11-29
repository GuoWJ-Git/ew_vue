import {Cache, CacheMode} from './Cache';
import {Dimension} from '../util/Dimension';
import {Node} from './Node';
import {TileResourceManager} from './TileResourceManager';
import {RenderingContext} from '../renderer/RenderingContext';
import {Rect} from '../util/Rect';

/**
 * Defines a cache strategy to prerender composite node's children in a set of tiles,
 * which have a raster format. For example, it can be an image or texture. The format
 * depends on rendering engine.
 */
export class ViewCache extends Cache {
    /**
     * Defines a cache strategy to prerender composite node's children in a set of tiles,
     * which have a raster format. For example, it can be an image or texture. The format
     * depends on rendering engine.
     * @param tileWidth tile width in device coordinates
     * @param tileWidth.tileWidth tile width in device coordinates
     * @param tileWidth.tileHeight tile height in device coordinates
     * @param tileWidth.mode Shared mode by default
     * @param tileWidth.memoryLimit Upper memory limit in Megabyte, ignored when in Shared mode
     *      use geotoolkit.scene.TileResourceManager.getInstance().setMemoryLimit() to set memory limit in Shared mode
     * @param tileWidth.async true if actions are performed asynchronously
     * @param tileWidth.keepalive keep alive strategy, keeps tiles alive when rebuild as mach as possible
     * @param tileHeight tile height in device coordinates
     * @param mode Shared mode by default
     * @param memoryLimit memoryLimit Upper memory limit in Megabyte, ignored when in Shared mode
     *      use geotoolkit.scene.TileResourceManager.getInstance().setMemoryLimit() to set memory limit in Shared mode
     * @param async true if actions are performed asynchronously
     */
    constructor(tileWidth?: object | { tileWidth?: number; tileHeight?: number; mode?: CacheMode; memoryLimit?: number; async?: boolean; keepalive?: boolean; }  | number, tileHeight?: number, mode?: CacheMode, memoryLimit?: number, async?: boolean);
    /**
     * Set extend
     * @param extend overlap between 2 tiles
     */
    setExtend(extend: Dimension): this;
    /**
     * Set keep alive strategy, keep tiles alive when rebuild as mach as possible
     * @param keepAlive flag
     */
    setKeepAlive(keepAlive: boolean): this;
    /**
     * When this is set to true will essentially freeze the cache - tiles will no longer be created, existing tiles will be used and scaled to fit the visible bounds
     * if tiles do not exist for a particular area nothing will be rendered.
     * @param stop flag to freeze the cache
     */
    setStopCreationOrUpdate(stop: boolean): this;
    /**
     * Returns flag which freezes the cache.
     */
    getStopCreationOrUpdate(): boolean;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ViewCache): void;
    /**
     * Sets cache owner.
     * @param owner node which should be cached
     */
    setOwner(owner: Node): this;
    /**
     * Returns cache owner.
     */
    getOwner(): Node | null;
    /**
     * Returns resource manager.
     */
    getResourceManager(): TileResourceManager | null;
    /**
     * Returns tile width.
     */
    getTileWidth(): number;
    /**
     * Returns tile height.
     */
    getTileHeight(): number;
    /**
     * Render to context. Will only render tiles within visible model limits.
     * @param context rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Sets render content.
     * @param renderContentDelegate external method to render tiles
     */
    setRenderContent(renderContentDelegate: Function): this;
    /**
     * Invalidates cache. Marks cache to be rendered.
     * @param bounds rectangular area to be invalidated
     */
    invalidate(bounds?: Rect): this;
    /**
     * Stops all asynchronous rendering processes (if existed)
     */
    stopRenderAsync(): this;
    /**
     * Checks if cache is asynchronous
     */
    isAsync(): boolean;
    /**
     * Sets asynchrony of the cache
     * @param bool true if cache should be asynchronous
     */
    setAsync(bool?: boolean): this;
    /**
     * Flags the ViewCache as needing a clear / rebuild.
     * Called after zooming or when we've hit the cap for number of images
     * @param force force flag
     */
    rebuild(force?: boolean): this;
}
