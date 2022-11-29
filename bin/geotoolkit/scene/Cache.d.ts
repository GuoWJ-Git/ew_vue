import {Node} from './Node';
import {RenderingContext} from '../renderer/RenderingContext';
import {Rect} from '../util/Rect';
import {TileResourceManager} from './TileResourceManager';

/**
 * Abstract parent class of caches
 */
export class Cache {
    /**
     * Abstract parent class of caches
     */
    constructor();
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
     * Sets render content delegate.
     * @param renderContentDelegate parameter which can render content for this node
     */
    setRenderContent(renderContentDelegate: Function): void;
    /**
     * Render cache.
     * @param context rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Rebuilds cache.
     */
    rebuild(): this;
    /**
     * Invalidates cache. Marks cache to be rendered.
     * @param bounds rectangular area to be invalidated
     */
    invalidate(bounds?: Rect): this;
    /**
     * Returns resource manager.
     */
    getResourceManager(): TileResourceManager | null;
    /**
     * Returns a cloned cache object.
     * All inheritors should implement copy constructor or provide custom implementation for this method.
     */
    clone(): this;
}
/**
 * Enum of cache mode
 * Defines tile allocation and sharing strategy
 */
export enum CacheMode {
    /**
     * Shared
This is default mode, Cache instance share titles with other instances
     */
    Shared = 0,
    /**
     * Independent
Cache instance owns titles exclusively
     */
    Independent = 1,
    /**
     * FullScreen
Cache instance owns tiles exclusively and minimize the number of tiles used to render the scene, it use only one tile per widget whenever it possible.
     */
    FullScreen = 2
}
