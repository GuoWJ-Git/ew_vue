import {ShapeGeometry as Geotoolkit3dShapeGeometry, Shape} from '../THREE';

/**
 * Internal implementation of THREE.ShapeGeometry (only for prototype inheritance es6 issue).
 * @deprecated since 3.3, use THREE.ShapeGeometry instead
 */
export class ShapeGeometry extends Geotoolkit3dShapeGeometry {
    /**
     * Internal implementation of THREE.ShapeGeometry (only for prototype inheritance es6 issue).
     * @param shapes Array of shapes or a single shape.
     * @param curveSegments Number of segments per shape.
     */
    constructor(shapes: Shape[] | Shape, curveSegments?: number);
    /**
     * Convert the geometry to JSON format.
     */
    toJSON(): object;
}
