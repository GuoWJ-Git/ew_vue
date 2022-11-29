import {Surface} from '../renderer/Surface';

/**
 * Keeps handles to HTML Canvas objects so they can be re-used
 */
export class TileResourceManager {
    /**
     * Keeps handles to HTML Canvas objects so they can be re-used
     * @param memoryLimit Upper memory limit in Megabyte
     */
    constructor(memoryLimit: number);
    /**
     * Returns upper memory limit
     */
    getMemoryLimit(): number;
    /**
     * Sets upper memory limit
     * @param memoryLimit in MB
     */
    setMemoryLimit(memoryLimit: number): this;
    /**
     * Access surface. This function should be called whenever the surface has been drawn.
     * @param surface surface to be released
     */
    accessSurface(surface: Surface): void;
    /**
     * Returns TileResourceManager instance
     */
    static getInstance(): TileResourceManager;
}
