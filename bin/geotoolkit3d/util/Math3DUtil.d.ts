import {Vector2, BufferAttribute, Vector3, Box2, Matrix3, Matrix4, Euler, Box3} from '../THREE';
import {Point} from '../../geotoolkit/util/Point';

/**
 * This utility class provides functions to deal with common 3D related math problems.
 */
export class Math3DUtil {
    /**
     * This utility class provides functions to deal with common 3D related math problems.
     */
    constructor();
    /**
     * Computes area of a triangle using Heron's formula.<br>
     * <br>
     * This function computes the area of the triangle made by the three given points.<br>
     * To do so, it uses the Heron's stabilized formula:<br>
     * <br>
     * <i>
     *     Let a, b, c the length of each edge of the triangle with (a >= b >= c).<br>
     *     ∆ := √((a+(b+c)) (c-(a-b)) (c+(a-b)) (a+(b-c)))<br>
     * </i>
     * @param p0 The first point
     * @param p1 The second point
     * @param p2 The third point
     */
    static computeHeronArea(p0: Vector2, p1: Vector2, p2: Vector2): number;
    /**
     * Compute cross product of two array-based points and return as a new array
     * @param a array-based point1
     * @param b array-based point2
     * @param result array-based vector result to avoid array creation
     */
    static crossProduct(a: number[], b: number[], result?: number[]): number[];
    /**
     * Compute dot product of two array-based points
     * @param a array-based point1
     * @param b array-based point2
     */
    static dotProduct(a: number[], b: number[]): number;
    /**
     * Computes the 'surface normal' of three vertex in the given array (at the given indices).<br>
     * This will compute the normal vector of the plane made by the given 3 vertex.
     * @param vertices The xyz values of the vertices
     * @param index0 The first vector index
     * @param index1 The second vector index
     * @param index2 The third vector index
     * @param normal Optional target array
     * @param nullvalue A nullvalue to ignore (cannot be NaN)
     */
    static normal(vertices: number[], index0: number, index1: number, index2: number, normal?: number[], nullvalue?: number): number[];
    /**
     * Computes the 'surface normal' of three vertex in the given array (at the given indices).<br>
     * This will compute the normal vector of the plane made by the given 3 vertex.
     * @param vertices The xyz values of the vertices
     * @param index0 The first vector index
     * @param index1 The second vector index
     * @param index2 The third vector index
     * @param normal Optional target array
     * @param nullvalue A nullvalue to ignore (cannot be NaN)
     */
    static normalBufferAttribute(vertices: BufferAttribute, index0: number, index1: number, index2: number, normal?: number[], nullvalue?: number): number[];
    /**
     * Finds intersection between the given segments if there is any, null otherwise.<br>
     * @param segment0p0 First segment first point
     * @param segment0p1 First segment second point
     * @param segment1p0 Second segment first point
     * @param segment1p1 Second segment second point
     */
    static intersect(segment0p0: Vector2 | Point, segment0p1: Vector2 | Point, segment1p0: Vector2 | Point, segment1p1: Vector2 | Point): Vector2 | any;
    /**
     * Convert an angle in degree to radians.
     * @param angle The angle value in degree
     */
    static degreeToRadians(angle: number): number;
    /**
     * Convert an angle in radians to degree.
     * @param angle The angle value in radians
     */
    static radiansToDegree(angle: number): number;
    /**
     * Creates a normalized version of the given array.<br>
     * If given array's min&max are identical then the returned normalized values will be 'start + (end - start) / 2'.<br>
     * If given srcstart is NaN the actual minimum will be used instead.<br>
     * If given srcend is NaN the actual maximum will be used instead.<br>
     * @param values Values to normalize
     * @param dststart Normalization min value (ie normalized minimum value)
     * @param dstend Normalization max value (ie normalized maximum value)
     * @param srcstart Origin min value, by default will be the array actual min
     * @param srcend Origin max value, by default will be the array actual max
     * @param nullvalue A nullvalue to normalize differently, note that null and NaN are considered as nullvalue by default
     * @param normednullvalue The normalized value to use in place of the nullvalue in the returned array
     */
    static normalizeArray(values: number[], dststart?: number, dstend?: number, srcstart?: number, srcend?: number, nullvalue?: number, normednullvalue?: number): number[];
    /**
     * Compute the volume of the tetrahedron formed by the given set of 4 points.
     * The tetrahedron can be irregular and of any shape.
     * Formula based on https://en.wikipedia.org/wiki/Tetrahedron#Volume
     * @param p1 x,y,z values of a point
     * @param p2 x,y,z values of a point
     * @param p3 x,y,z values of a point
     * @param p4 x,y,z values of a point
     */
    static computeTetrahedronVolume(p1: number[], p2: number[], p3: number[], p4: number[]): number;
    /**
     * Compute the volume of the cell formed by the given set of 8 corners.
     * This is achieved by dividing the cell into 5 tetrahedrons and computing the volume of each of them separately.
     * Note that the cell corners must be given in the right order, following this schema:
     * 0 ------- 1
     * |\        |\
     * | \       | \
     * |  2 ------- 3
     * 4 -|----- 5  |
     *  \ |       \ |
     *   \|        \|
     *    6 ------- 7
     * @param c array[8] containing in each position the array [x,y,z] values of each corner
     */
    static computeCellVolume(c: number[][]): number;
    /**
     * Returns the maximum values of both vectors as a new vector
     * @param v1 First vector
     * @param v2 Second vector
     */
    static maxVector3(v1: Vector3, v2: Vector3): Vector3;
    /**
     * Returns the minimum values of both vectors as a new vector
     * @param v1 First vector
     * @param v2 Second vector
     */
    static minVector3(v1: Vector3, v2: Vector3): Vector3;
    /**
     * Returns if the two boxes intersect
     * @param b1 First box
     * @param b2 Second box
     */
    static intersectBox(b1: Box2, b2: Box2): boolean;
    /**
     * Returns if box2 is contained inside box1
     * @param box1 First box
     * @param box2 Second box
     */
    static containsBox(box1: Box2, box2: Box2): boolean;
    /**
     * Returns a THREE.Box2 of the space contained by both boxes
     * @param box1 First box
     * @param box2 Second box
     */
    static createFitBox(box1: Box2, box2: Box2): Box2;
    /**
     * Returns transform matrix from three Vector3 to three Vector3
     * @param src three Vector3
     * @param dest three Vector3
     */
    static resolveTransformMatrix3(src: Vector3[], dest: Vector3[]): Matrix3;
    /**
     * Returns transform matrix from four Vector3 to four Vector3
     * @param src four Vector3
     * @param dest four Vector3
     */
    static resolveTransformMatrix4(src: Vector3[], dest: Vector3[]): Matrix4;
    /**
     * This function turns measuredDepths inclinations and azimuth into XYZ deviation coordinates
     * @param measuredDepth measured depth array
     * @param inclination inclination array
     * @param azimuth azimuth array
     * @param neg resulting depths should be negative
     */
    static minimumCurvature(measuredDepth: number[], inclination: number[], azimuth: number[], neg?: boolean): object;
    /**
     * Casts angles between two Vector3's to euler angles<br>
     * See {@link http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToEuler/index.htm}
     * @param axis axis of rotation
     * @param angle angle of rotation
     * @param result euler angles
     */
    static angleToEuler(axis: Vector3, angle: number, result?: Euler): Euler;
    /**
     * Casts euler angles from direction and up vectors<br>
     * See {@link https://stackoverflow.com/questions/21622956/how-to-convert-direction-vector-to-euler-angles}
     * @param direction direction vector
     * @param up up vector
     * @param result euler angles
     */
    static directionToEuler(direction: Vector3, up: Vector3, result?: Euler): Euler;
    /**
     * Creates a box to box transformation matrix
     * @param src Source box
     * @param dst Target box
     */
    static getBoxToBoxMatrix(src: Box3, dst: Box3): Matrix4;
}
