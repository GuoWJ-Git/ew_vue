import {AbstractIntersection} from './AbstractIntersection';
import {Object3D} from '../../scene/Object3D';
import {Vector3} from '../../THREE';

/**
 * An abstract utility class for seismic intersection.
 */
export class AbstractSeismicIntersection extends AbstractIntersection {
    /**
     * An abstract utility class for seismic intersection.
     */
    constructor();
    /**
     * Transform the bounding box of baseObject to intersectingObject's coordinate system<br>
     * Because baseObject is a 2D surface,
     * three points are picked to represent this transformation: min, max, top-left
     * @param baseObject the base object
     * @param intersectingObject the intersecting object
     */
    transformBoundingBoxCoordinate(baseObject: Object3D, intersectingObject: Object3D): {p1: Vector3; p2: Vector3; p3: Vector3} | object;
}
