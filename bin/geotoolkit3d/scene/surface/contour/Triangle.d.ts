import {Vector3} from '../../../THREE';

/**
 * Contour triangle class.<br>
 * This class calculates the center point on isoline, triangle normal,
 * and length of isoline intercepted an arbitrary triangle in 3D space.
 * @example
 * ```javascript
 * a                                a-------b
 *          / \                                \     /
 *      e1 /---\ e2      elevation           e1 \---/ e2
 *        /_____\                                \ /
 *       b       c                                c
 * ```
 */
export class Triangle {
    /**
     * Contour triangle class.<br>
     * This class calculates the center point on isoline, triangle normal,
     * and length of isoline intercepted an arbitrary triangle in 3D space.
     * @param a the first vertex
     * @param b the second vertex
     * @param c the third vertex
     * @param elevation the elevation that cross the triangle
     * @param sorted true if vertices are sorted in ascending by elevation
     */
    constructor(a: number[], b: number[], c: number[], elevation: number, sorted?: boolean);
    /**
     * Set triangle's properties such as vertices and elevation
     * @param a the first vertex
     * @param b the second vertex
     * @param c the third vertex
     * @param elevation the elevation that cross the triangle
     * @param sorted true if vertices are sorted in ascending by elevation
     */
    setProperties(a: number[], b: number[], c: number[], elevation: number, sorted?: boolean): void;
    /**
     */
    isVerticesValid(): boolean;
    /**
     */
    isIntersectElevation(): boolean;
    /**
     */
    isLineIntersection(): boolean;
    /**
     * Return sorted vertices from highest to lowest elevation in an array
     */
    getSortedVertices(): Vector3[];
    /**
     * Return the middle point of intersected isoline in triangle
     */
    getPoint(): Vector3;
    /**
     * Return the normal of this triangle
     */
    getNormal(): Vector3;
    /**
     * Return the intersected length between isoline and triangle
     */
    getIntersectedLength(): number;
    /**
     * Return the left intersected point in THREE.Vector3
     */
    getLeftIntersectionPoint(): Vector3;
    /**
     * Return the right intersected point in THREE.Vector3
     */
    getRightIntersectionPoint(): Vector3;
    /**
     * Return the left intersected point in array
     */
    getLeftIntersection(): number[];
    /**
     * Return the right intersected point in array
     */
    getRightIntersection(): number[];
    /**
     * Reset the properties of this triangle
     */
    reset(): void;
}
