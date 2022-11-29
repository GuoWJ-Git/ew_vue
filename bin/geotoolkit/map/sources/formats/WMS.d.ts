import {AbstractFormat} from './AbstractFormat';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * WMS source format that formats map image queries to the WMS (Web Map Service) server
 */
export class WMS extends AbstractFormat {
    /**
     * WMS source format that formats map image queries to the WMS (Web Map Service) server
     * @param options options
     * @param connector connector to use
     */
    constructor(options?: object, connector?: AbstractConnector);
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
    /**
     * Queries data by the options provided.
     * @param query query options
     * @param query.x x-ordinate of the point requested (in device)
     * @param query.y y-ordinate of the point requested (in device)
     * @param query.width width of the layer visible area (in device)
     * @param query.height height of the layer visible area (in device)
     * @param query.left left point of the layer visible area (in model)
     * @param query.right right point of the layer visible area (in model)
     * @param query.top top point of the layer visible area (in model)
     * @param query.bottom bottom point of the layer visible area (in model)
     */
    getFeatureInfo(query: object | { x: number; y: number; width: number; height: number; left: number; right: number; top: number; bottom: number; } ): this;
    /**
     * Aborts FeatureInfo geometry queries previously sent
     * @param key key of the queries to abort (all geometry queries aborted if nothing provided)
     */
    abortGeometryQueries(key?: string): this;
}
