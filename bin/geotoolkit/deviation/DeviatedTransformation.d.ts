import {Transformation} from '../util/Transformation';
import {Point} from '../util/Point';
import {Rect} from '../util/Rect';

/**
 * Abstract class to represent nonaffine transformation from a linear 2D-space to a deviated space.
 */
export class DeviatedTransformation {
    /**
     * Abstract class to represent nonaffine transformation from a linear 2D-space to a deviated space.
     */
    constructor();
    /**
     * Updates itself
     * @param transformation context transformation
     */
    update(transformation: Transformation): boolean;
    /**
     * Transforms point from linear to deviated space
     * @param point point to transform
     * @param transformation affine transformation
     */
    transform(point: Point, transformation?: Transformation | null): Point;
    /**
     * Transforms point from deviated to linear space
     * @param point point to transform
     */
    inverseTransform(point: Point): Point;
    /**
     * Transforms line from linear to deviated space
     * @param start start point
     * @param end end point
     * @param destination destination polyline's array
     * @param transformation affine transformation
     */
    transformLine(start: Point, end: Point, destination: Point[], transformation?: Transformation | null): void;
    /**
     * Transforms polyline (or polygon) from linear to deviated space
     * @param points source polyline's (or polygon's) points
     * @param destination destination polyline's (or polygon's) array
     * @param transformation affine transformation
     * @param isClosed isclosed flag
     */
    transformLines(points: Point[], destination: Point[], transformation: Transformation | null, isClosed?: boolean): void;
    /**
     * Gets bounds in linear space corresponding to deviated rect
     * @param rect rectangular area in deviated space
     */
    findBounds(rect: Rect): Rect;
    /**
     * Returns union of all station's bounds
     */
    getStationsBounds(): Rect;
    /**
     * Checks if a canvas point is contained in the deviated area
     * @param point point in canvas
     */
    contains(point: Point): boolean;
    /**
     * Gets x-scale at the point
     * @param point point to transform
     */
    scaleXAt(point: Point): number;
    /**
     * Gets y-scale at the point
     * @param point point to transform
     */
    scaleYAt(point: Point): number;
    /**
     * Gets scale statistics
     */
    getScalesInfo(): {xMin: number; yMin: number; xMean: number; yMean: number; xMax: number; yMax: number} | object;
    /**
     * Gets max x-scale
     */
    protected maxScaleX(): number;
    /**
     * Gets max y-scale
     */
    protected maxScaleY(): number;
    /**
     * Gets min x-scale
     */
    protected minScaleX(): number;
    /**
     * Gets min y-scale
     */
    protected minScaleY(): number;
    /**
     * The method is _not_ used at the moment
     * @param point 
     */
    protected digitize(point: Point): any[];
}
