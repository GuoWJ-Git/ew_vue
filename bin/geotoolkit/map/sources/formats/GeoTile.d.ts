import {AbstractFormat} from './AbstractFormat';
import {Rect} from '../../../util/Rect';
import {Cancel} from '../../../util/Cancel';

/**
 * GeoTile format
 */
export class GeoTile extends AbstractFormat {
    /**
     * GeoTile format
     * @param options options object (@see {@link @int/geotoolkit/map/sources/formats/AbstractFormat.AbstractFormat})
     */
    constructor(options?: object);
    /**
     * Sends a request based on a settings provided
     * @param query query data
     * @param query.tileRect image model area
     * @param query.transformedModelRect image device area
     * @param query.deviceTileRect tile device area
     * @param query.cancel cancel token
     * @param query.callback tiled shape callback
     * @param query.id image id
     * @param query.i horizontal tile position
     * @param query.j vertical tile position
     * @param query.z tile depth layer
     */
    query(query: object | { tileRect: Rect; transformedModelRect: Rect; deviceTileRect: Rect; cancel: Cancel; callback: Function; id?: number; i?: number; j?: number; z?: number; } ): this;
    /**
     * Gets URL from query data
     * @param query query data
     * @param query.tileRect image model area
     * @param query.transformedModelRect image device area
     * @param query.deviceTileRect tile device area
     * @param query.cancel cancel token
     * @param query.id image id
     * @param query.i horizontal tile position
     * @param query.j vertical tile position
     * @param query.z tile depth layer
     */
    getURLFromQuery(query: object | { tileRect: Rect; transformedModelRect: Rect; deviceTileRect: Rect; cancel: Cancel; id?: number; i?: number; j?: number; z?: number; } ): string;
    /**
     * Gets request options from query data
     * @param query query data
     * @param query.tileRect image model area
     * @param query.transformedModelRect image device area
     * @param query.deviceTileRect tile device area
     * @param query.cancel cancel token
     * @param query.id image id
     * @param query.i horizontal tile position
     * @param query.j vertical tile position
     * @param query.z tile depth layer
     */
    getOptionsFromQuery(query: object | { tileRect: Rect; transformedModelRect: Rect; deviceTileRect: Rect; cancel: Cancel; id?: number; i?: number; j?: number; z?: number; } ): object;
    /**
     * Gets data from response
     * @param data response data
     */
    getDataFromResponse(data: object): string;
}
