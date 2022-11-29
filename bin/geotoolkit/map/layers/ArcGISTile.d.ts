import {Tile} from './Tile';

/**
 * This shape connects to an Esri Map Server and displays a single layer using its built-in tiled API.
 * Server must support raster tiles. Supports ArcGIS version 9.3 and higher.
 */
export class ArcGISTile extends Tile {
    /**
     * This shape connects to an Esri Map Server and displays a single layer using its built-in tiled API.
     * Server must support raster tiles. Supports ArcGIS version 9.3 and higher.
     * @param options layer options
     */
    constructor(options?: object);
}
