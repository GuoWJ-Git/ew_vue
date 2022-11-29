import {AbstractFormat} from './AbstractFormat';
import {AbstractConnector} from '../connectors/AbstractConnector';
import {Point} from '../../../util/Point';
import {Rect} from '../../../util/Rect';
import {Polygon} from '../../../util/Polygon';

/**
 * ArcGIS source format that formats map image queries to the MapService or ImageService server.
 * Supports ArcGIS version 9.3 and higher.
 */
export class ArcGISImage extends AbstractFormat {
    /**
     * ArcGIS source format that formats map image queries to the MapService or ImageService server.
     * Supports ArcGIS version 9.3 and higher.
     * @param options options
     * @param options.connector connector to use
     * @param options.geometryconnector connector to use for geometry queries
     */
    constructor(options?: object | { connector?: AbstractConnector; geometryconnector?: AbstractConnector; } );
    /**
     * Sends an image request based on a settings provided
     * @param query query params
     * @param query.left requesting left limit in model coordinates
     * @param query.right requesting right limit in model coordinates
     * @param query.top requesting top limit in model coordinates
     * @param query.bottom requesting bottom limit in model coordinates
     * @param query.width requesting image width in device coordinates
     * @param query.height requesting image height in device coordinates
     */
    query(query: object | { left: number; right: number; top: number; bottom: number; width: number; height: number; } ): this;
    /**
     * Sends a data information request based on a geometry provided. Is supported in ArcGIS version 9.3 and higher.
     * @param query query params
     * @param query.geometry geometry to query
     * @param query.layer quering layer id
     * @param query.key connection key (can be used to abort it later)
     */
    queryGeometry(query: object | { geometry: object; layer?: number; key?: string; } ): this;
    /**
     * Aborts geometry queries previously sent
     * @param key key of the queries to abort (all geometry queries aborted if nothing provided)
     */
    abortGeometryQueries(key?: string): this;
    /**
     * Identifies the information in the area provided. Is supported in ArcGIS version 9.3 and higher
     * @param query query params
     * @param query.left map extent left limit in model coordinates
     * @param query.right map extent right limit in model coordinates
     * @param query.top map extent top limit in model coordinates
     * @param query.bottom map extent bottom limit in model coordinates
     * @param query.width image display width in device coordinates
     * @param query.height image display height in device coordinates
     * @param query.geometry area geometry to identify
     * @param query.layers layers to identify in ArcGIS format (e.g. 'visible:1,2,5')
     * @param query.key connection key (can be used to abort it later)
     */
    identify(query: object | { left: number; right: number; top: number; bottom: number; width: number; height: number; geometry: Point | Rect | Polygon; layers?: string; key?: string; } ): this;
}
