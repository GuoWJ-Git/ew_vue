import {Tile} from './Tile';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * VectorTile source format that formats tile queries to Mapbox server and parses Pbf (Protocolbuffer Binary Format) formatted response
 */
export class VectorTile extends Tile {
    /**
     * VectorTile source format that formats tile queries to Mapbox server and parses Pbf (Protocolbuffer Binary Format) formatted response
     * @param options options
     * @param options.connector connector to use
     */
    constructor(options?: object | { connector?: AbstractConnector; } );
    /**
     */
    _settings: object;
    /**
     * Sends a tile request based on a settings provided
     * @param query query params
     * @param query.x tile x-ordinate
     * @param query.y tile y-ordinate
     * @param query.z tile zoom level
     * @param query.dst destination object
     * @param query.key connection key (can be used to abort it later)
     */
    query(query: object | { x: number; y: number; z: number; dst: object; key?: string; } ): this;
}
