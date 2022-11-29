import {AbstractLayer} from './AbstractLayer';
import {Tile as SourcesTile} from '../sources/Tile';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Dimension} from '../../util/Dimension';

/**
 * Tile layer connects to the server and displays a layer created from the server tiles.
 * It consists of a several images (tiles) painted next to each other and thus forming a complete picture. The example of this approach is the Bing layer.
 * @example
 * ```javascript
 * // To create a map based on Esri ArcGIS Tile Map.
 * import {Map} from '@int/geotoolkit/map/Map';
 * import {Tile} from '@int/geotoolkit/map/layers/Tile';
 * const curMap = new Map();
 * const curLayer = new Tile({
 *     'url': 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/',
 *     'minlod': 0,
 *     'maxlod': 24,
 *     'formatterfunction': (z, y, x) => z + '/' + y + '/' + x + '.png'
 * });
 * curMap.addLayer(curLayer);
 * ```
 */
export class Tile extends AbstractLayer {
    /**
     * Tile layer connects to the server and displays a layer created from the server tiles.
     * It consists of a several images (tiles) painted next to each other and thus forming a complete picture. The example of this approach is the Bing layer.
     * @param options options
     * @param options.source tile source
     * @param options.formatterfunction the function that takes z, y, x and turns that into tile location
     * @param options.tilewidth width for the tiles to use (in px)
     * @param options.tileheight height for the tiles to use (in px)
     * @param options.imagepool the amount of cache for the tile images
     * @param options.minlod the minimum level of details for the tiles
     * @param options.maxlod the maximum level of details for the tiles
     */
    constructor(options?: object | { source?: SourcesTile; formatterfunction?: Function; tilewidth?: number; tileheight?: number; imagepool?: number; minlod?: number; maxlod?: number; } );
    /**
     * Renders layer content
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Gets the minimum Lod for the server
     */
    getMinLod(): number;
    /**
     * Gets the maximum Lod for the server
     */
    getMaxLod(): number;
    /**
     * Returns current tile resolution (in px)
     */
    getTileResolution(): Dimension;
    /**
     * Sets image format for the server
     * This converts the z, x, y image indexes into a path that is added to the server param to locate
     * the requested tile.
     * @param formatter image formatter
     */
    setImageFormatter(formatter: Function): this;
    /**
     * Gets the current formatter function if the function format is used
     */
    getImageFormatter(): Function;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {tilewidth: number; tileheight: number; imagepool: number; minlod: number; maxlod: number; formatterfunction: Function} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options
     * @param properties.source tile source
     * @param properties.formatterfunction the function that takes z, y, x and turns that into tile location
     * @param properties.tilewidth width for the tiles to use (in px)
     * @param properties.tileheight height for the tiles to use (in px)
     * @param properties.imagepool the amount of cache for the tile images
     * @param properties.minlod the minimum level of details for the tiles
     * @param properties.maxlod the maximum level of details for the tiles
     */
    setProperties(properties?: object | { source?: SourcesTile; formatterfunction?: Function; tilewidth?: number; tileheight?: number; imagepool?: number; minlod?: number; maxlod?: number; } ): this;
    /**
     * Sets the min/max numbers of details for the server
     * @param min minimum Lod
     * @param max maximum Lod
     */
    setLods(min: number, max: number): this;
    /**
     * Gets map zoom level
     */
    getZoomLevel(): number;
    /**
     * Sets the resolution of the tiles from the server
     * @param width tile width (in px)
     * @param height tile height (in px)
     */
    setTileResolution(width: number, height: number): this;
}
