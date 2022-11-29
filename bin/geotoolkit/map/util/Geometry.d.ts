import {Rect} from '../../util/Rect';

/**
 * Defines helper methods to work with feature geometries
 */
export class Geometry {
    /**
     * Defines helper methods to work with feature geometries
     */
    constructor();
    /**
     * Gets bounds for a geometry defined by arrays of x-ordinates and y-ordinates.
     * @param geometry feature geometry
     * @param geometry.x feature geometry x-ordinate(s)
     * @param geometry.y feature geometry x-ordinate(s)
     */
    static getCachedGeometryBounds(geometry: object | { x: number | number[]; y: number | number[]; } ): Rect;
    /**
     * Returns true if polygon geometry is clockwise, false otherwise
     * @param geometry polygon geometry
     */
    static isClockwise(geometry: object): boolean;
}
