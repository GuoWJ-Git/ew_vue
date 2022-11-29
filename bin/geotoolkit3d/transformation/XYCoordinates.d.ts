import {Vector2, Box3, Vector3} from '../THREE';

/**
 * A XYCoordinates coordinates object.<br>
 * <br>
 * This object holds the information about the XY coordinates of a seismic volume.<br>
 * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the XY coordinates.<br>
 */
export class XYCoordinates {
    /**
     * A XYCoordinates coordinates object.<br>
     * <br>
     * This object holds the information about the XY coordinates of a seismic volume.<br>
     * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the XY coordinates.<br>
     */
    constructor();
    /**
     * Initialize XYCoordinates using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * @param xy The xy json
     * @param xy.x0 The first point x value
     * @param xy.y0 The first point y value
     * @param xy.x1 The second point x value
     * @param xy.y1 The second point y value
     * @param xy.x2 The third point x value
     * @param xy.y2 The third point y value
     * @param xy.x3 The fourth point x value
     * @param xy.y3 The fourth point y value
     * @param xy.z0 The start depth
     * @param xy.z1 The end depth
     */
    fromJSONXY(xy: object | { x0?: number; y0?: number; x1?: number; y1?: number; x2?: number; y2?: number; x3?: number; y3?: number; z0?: number; z1?: number; } ): this;
    /**
     * Initialize XYCoordinates using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * @param xy json with points
     * @param xy.p0 The first point
     * @param xy.p1 The second point
     * @param xy.p2 The third point
     * @param xy.p3 The fourth point
     * @param xy.z0 The first z value
     * @param xy.z1 The last z value
     */
    fromJSONPoints(xy: object | { p0?: Vector2; p1?: Vector2; p2?: Vector2; p3?: Vector2; z0?: number; z1?: number; } ): this;
    /**
     * Returns the bounding box
     */
    asBox3(): Box3;
    /**
     * Returns the bounding box with z being elevation
     */
    asElevationBox3(): Box3;
    /**
     * Returns if the point is inside the box
     * @param point the point to check if it is inside the box
     */
    isPointInside(point: Vector3): boolean;
}
