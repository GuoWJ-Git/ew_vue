import {Point} from './Point';
import {Transformation} from './Transformation';
import {Polygon} from './Polygon';

/**
 * Define an interface to provide nonaffine transformation from a linear 2D-space.
 */
export abstract class ITransformable {
    /**
     * Transforms point from linear to target space
     * @param point point to transform
     */
    abstract transform(point: Point): Point;
    /**
     * Transforms point from target to linear space
     * @param point point to transform
     */
    abstract inverseTransform(point: Point): Point;
    /**
     * Gets node outline
     * @param tr transformation which will be applied to outline
     */
    abstract getOutline(tr: Transformation): Polygon;
}
