import {AbstractSource} from './AbstractSource';

/**
 * Tile source that allows user to get tiles from the server
 */
export class Tile extends AbstractSource {
    /**
     * Tile source that allows user to get tiles from the server
     * @param options options
     * @param options.tilewidth width for the tiles to use (in px)
     * @param options.tileheight height for the tiles to use (in px)
     * @param options.imagepool the amount of cache for the tile images
     * @param options.minlod the minimum level of details for the tiles
     * @param options.maxlod the maximum level of details for the tiles
     * @param options.formatterfunction the function that takes z, y, x and turns that into tile location (replaces the format field)
     * @param options.token authorization token (for ArcGIS tile servers if needed)
     */
    constructor(options?: object | { tilewidth?: number; tileheight?: number; imagepool?: number; minlod?: number; maxlod?: number; formatterfunction?: Function; token?: string; } );
    /**
     */
    _settings: object;
    /**
     * Notifies source to remove all tiles added.
     */
    clear(): this;
    /**
     * Sets properties (default properties listed are for construction time only)
     * @param properties options
     * @param properties.formatterfunction the function that takes z, y, x and turns that into tile location (replaces the format field)
     * @param properties.token authorization token (for ArcGIS tile servers if needed)
     * @param properties.tilewidth width for the tiles to use (in px)
     * @param properties.tileheight height for the tiles to use (in px)
     * @param properties.imagepool the amount of cache for the tile images
     * @param properties.minlod the minimum level of details for the tiles
     * @param properties.maxlod the maximum level of details for the tiles
     */
    setProperties(properties?: object | { formatterfunction?: Function; token?: string; tilewidth?: number; tileheight?: number; imagepool?: number; minlod?: number; maxlod?: number; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {token: string; tilewidth: number; tileheight: number; imagepool: number; minlod: number; maxlod: number} | any;
}
