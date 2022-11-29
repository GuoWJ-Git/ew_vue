import {Vector3} from '../../../THREE';

/**
 * Contour Ray class<br>
 * Ray is used to travese contour mesh and find intersections for building labels
 */
export class Ray {
    /**
     * Contour Ray class<br>
     * Ray is used to travese contour mesh and find intersections for building labels
     * @param origin The origin of Ray
     * @param direction The direction of Ray
     * @param contourLevel The contour level that Ray is located at
     */
    constructor(origin: Vector3, direction: Vector3, contourLevel: number);
    /**
     * Set origin and direction for Ray
     * @param origin the origin of ray
     * @param direction the direction of ray
     */
    set(origin: Vector3, direction: Vector3): this;
    /**
     * Return a new Ray with the same origin and direction
     */
    clone(): this;
    /**
     * Copy the passed ray's properties to this ray
     * @param ray the passed ray
     */
    copy(ray: Ray): this;
    /**
     * Get a Vector3 that is a given distance along this Ray
     * @param distance the distance in float
     * @param target the target vector
     */
    at(distance: number, target: Vector3): Vector3;
    /**
     * Check if ray intersects the triangle
     * // from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
     * @param a the first vertex in triangle
     * @param b the second vertex in triangle
     * @param c the third vertex in triangle
     * @param backfaceCulling if true then not checking the backface
     * @param target the target that stored possible intersection
     * @param normal the normal of triangle
     */
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, target: Vector3, normal: Vector3): Vector3;
    /**
     * Get the origin of ray
     */
    getOrigin(): Vector3;
    /**
     * Get the direction of ray
     */
    getDirection(): Vector3;
    /**
     * Get contour level of this ray
     */
    getContourLevel(): number;
}
