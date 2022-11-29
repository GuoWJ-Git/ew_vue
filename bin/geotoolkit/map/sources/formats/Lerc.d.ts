import {AbstractFormat} from './AbstractFormat';
import {ColorProvider} from '../../../util/ColorProvider';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * ArcGIS source format that parses Lerc (Limited Error Raster Compression) formatted responses. Can be used both as a features format
 * or parse LERC images (see tutorial for details)
 */
export class Lerc extends AbstractFormat {
    /**
     * ArcGIS source format that parses Lerc (Limited Error Raster Compression) formatted responses. Can be used both as a features format
     * or parse LERC images (see tutorial for details)
     * @param options options
     * @param options.colorprovider color provider to use for one-dimensional
     * @param options.symbolTileSize the tile size for each symbol/feature (in px). Set to use format for the vectors
     * @param options.connector connector to use
     */
    constructor(options?: object | { colorprovider?: ColorProvider; symbolTileSize?: number; connector?: AbstractConnector; } );
    /**
     * Sends an image request based on a settings provided
     * @param query query params
     * @param query.left requesting left limit in model coordinates
     * @param query.right requesting right limit in model coordinates
     * @param query.top requesting top limit in model coordinates
     * @param query.bottom requesting bottom limit in model coordinates
     * @param query.width requesting image width in device coordinates
     * @param query.height requesting image height in device coordinates
     * @param query.key connection key (can be used to abort it later)
     */
    query(query: object | { left: number; right: number; top: number; bottom: number; width: number; height: number; key?: string; } ): this;
}
