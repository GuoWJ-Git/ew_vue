import {Transformer} from './Transformer';
import {AbstractSystem} from './AbstractSystem';
import {Point} from '../../util/Point';

/**
 * Used to transform points to lat/lon coordinate system.
 */
export class LatLonTransformer extends Transformer {
    /**
     * Used to transform points to lat/lon coordinate system.
     * @param initSystem options to specify transformer or initial coordinate system
     * @param initSystem.initialcoordinatesystem initial coordinate system
     */
    constructor(initSystem: AbstractSystem | object | { initialcoordinatesystem?: AbstractSystem; } );
    /**
     * Return transformed point
     * @param point to transform
     * @param dst optional destination point
     */
    transform(point: Point, dst?: Point): Point;
}
