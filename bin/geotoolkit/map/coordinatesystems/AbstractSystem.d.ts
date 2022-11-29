import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * Any layer data has some coordinates, for example: From where to draw a picture for a Image layer, or feature coordinates for Vector layers. There is no single agreement which coordinate system to use and there are thousands of different coordinate systems. <br>
 * Therefore, to draw different layers on one map, the data must be converted to one system. For this purpose, transformers and coordinate systems from the geotoolkit.map.coordinatesystems are used. <br>
 * They contain information about how the coordinates are set in each case and thus can convert from one system to another. This class specifies the generalized coordinate system.
 */
export class AbstractSystem {
    /**
     * Any layer data has some coordinates, for example: From where to draw a picture for a Image layer, or feature coordinates for Vector layers. There is no single agreement which coordinate system to use and there are thousands of different coordinate systems. <br>
     * Therefore, to draw different layers on one map, the data must be converted to one system. For this purpose, transformers and coordinate systems from the geotoolkit.map.coordinatesystems are used. <br>
     * They contain information about how the coordinates are set in each case and thus can convert from one system to another. This class specifies the generalized coordinate system.
     * @param options options to specify coordinate system.
     * @param options.name name of the coordinate system.
     * @param options.units units of the coordinate system.
     * @param options.limits the default minimal rectangular bounding region that will entirely contain
     * @param options.epsg epsg code of coordinate system
     * this AbstractSystem (approximately)
     */
    constructor(options: object | { name: string; units: string | string[]; limits: Rect; epsg?: number; } );
    /**
     * Return a name of the coordinate system
     */
    getName(): string;
    /**
     * Return units of the coordinate system
     */
    getUnits(): string | string[];
    /**
     * Return epsg code of the coordinate system
     */
    getEpsgCode(): number;
    /**
     * Return if vertical axis goes up
     */
    isVerticalAxisUp(): boolean;
    /**
     * Gets the default minimal rectangular bounding region that will entirely contain
     * this AbstractSystem (approximately). A CSR is an arbitrary complex closed
     * region that touches the rectangular extent at least once on all four sides.
     */
    getDefaultModelLimits(): Rect;
    /**
     * Transforms the specified coordinate to projection from lat / lng
     * @param lon long
     * @param lat lat
     * @param dst optional destination point
     * @param clamp if set to true, lat and lon will be clamped
     */
    transform(lon: number, lat: number, dst?: Point, clamp?: boolean): Point;
    /**
     * Return transformed point to lat / lng from projection
     * @param x x coordinate
     * @param y y coordinate
     * @param dst optional destination point
     */
    inverseTransform(x: number, y: number, dst?: Point): Point;
}
