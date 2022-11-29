import {AbstractSystem} from './AbstractSystem';
import {Point} from '../../util/Point';
import {Rect} from '../../util/Rect';

/**
 * Used to transform points from one CoordinateSystem to another.
 * @example
 * ```javascript
 * // transform points from one CoordinateSystem to another.
 * import {Transformer} from '@int/geotoolkit/map/coordinatesystems/Transformer';
 * import {GeodeticSystem} from '@int/geotoolkit/map/GeodeticSystem';
 * import {Point} from '@int/geotoolkit/util/Point';
 * ...
 * const transform = new Transformer({
 *           // initial system: latitude/longitude:
 *           'initialcoordinatesystem': GeodeticSystem.LatLon,
 *           // target system: WGS84:
 *           'targetcoordinatesystem': GeodeticSystem.WGS84
 *       });
 *  transform.transform(new Point(longitude, latitude));
 * ```
 */
export class Transformer {
    /**
     * Used to transform points from one CoordinateSystem to another.
     * @param initSystem options to specify transformer or initial coordinate system
     * @param initSystem.initialcoordinatesystem initial coordinate system
     * @param initSystem.targetcoordinatesystem target coordinate system
     * @param targetSystem target coordinate system
     */
    constructor(initSystem: AbstractSystem | string | object | { initialcoordinatesystem?: AbstractSystem | string; targetcoordinatesystem?: AbstractSystem | string; } , targetSystem?: AbstractSystem | string);
    /**
     * Returns transformed point, rectangle or polygonal geometry object
     * @param source origin to be transformed
     * @param dst optional destination object
     */
    transform(source: Point | Rect | object, dst?: Point | Rect | object): Point | Rect | object;
    /**
     * Returns transformed point
     * @param point to transform
     * @param dst optional destination point
     */
    transformPoint(point: Point, dst?: Point): Point;
    /**
     * Returns transformed rectangle
     * @param rect rectangle to transform
     * @param dst optional destination rectangle
     */
    transformRect(rect: Rect, dst?: Rect): Rect;
    /**
     * Returns transformed polygonal geometry object
     * @param geometry polygonal geometry object to transform
     * @param geometry.x x-ordinates to be transformed
     * @param geometry.y y-ordinates to be transformed
     * @param dst optional destination geometry
     */
    transformPolygon(geometry: object | { x: number[]; y: number[]; } , dst?: object): object;
    /**
     * Sets initial coordinate system
     * @param system initial coordinate system
     */
    setInitialCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets initial coordinate system
     */
    getInitialCoordinateSystem(): AbstractSystem;
    /**
     * Sets target coordinate system
     * @param system target coordinate system
     */
    setTargetCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets target coordinate system
     */
    getTargetCoordinateSystem(): AbstractSystem;
}
