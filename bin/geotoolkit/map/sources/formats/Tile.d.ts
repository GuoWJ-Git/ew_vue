import {AbstractFormat} from './AbstractFormat';
import {AbstractConnector} from '../connectors/AbstractConnector';
import {Dimension} from '../../../util/Dimension';
import {Image} from '../../../scene/shapes/Image';

/**
 * Tile source format that formats tile queries based on formatter function provided
 */
export class Tile extends AbstractFormat {
    /**
     * Tile source format that formats tile queries based on formatter function provided
     * @param options options
     * @param options.formatterfunction formatter function that formats a tile request based on its z, y, x indices
     * @param options.connector connector to use
     */
    constructor(options?: object | { formatterfunction?: Function; connector?: AbstractConnector; } );
    /**
     * Sends a tile request based on a settings provided
     * @param query query params
     * @param query.x tile x-ordinate
     * @param query.y tile y-ordinate
     * @param query.z tile zoom level
     * @param query.grid layer' estimated tiles grid size
     * @param query.dst destination image
     * @param query.key connection key (can be used to abort it later)
     * @param query.priority query priority
     */
    query(query: object | { x: number; y: number; z: number; grid: Dimension; dst?: Image; key?: string; priority?: number; }  | any): this;
}
