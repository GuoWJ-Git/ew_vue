import {Transformation} from './Transformation';
import {Rect} from './Rect';
import {GraphicsPath} from '../renderer/GraphicsPath';
import {Polygon} from './Polygon';
import {Point} from './Point';

/**
 * Class with can handle some operation with rectangles and polygons and represent a geometry region
 */
export class Region {
    /**
     * Class with can handle some operation with rectangles and polygons and represent a geometry region
     * @param epsilon epsilon, accuracy of clipping
     */
    constructor(epsilon?: number);
    /**
     * Check if region is empty
     */
    isEmpty(): boolean;
    /**
     * Transform region
     * @param transformation transformation
     */
    transformRegion(transformation: Transformation): this;
    /**
     * Return bounding rectangle
     */
    getBoundingBox(): Rect;
    /**
     * Return polygon as any array of non-overlapping graphics paths.
     */
    getGraphicsPaths(): GraphicsPath[];
    /**
     * Return polygon as graphics path
     */
    getGraphicsPath(): GraphicsPath;
    /**
     * Returns polygons
     */
    getPolygons(): Polygon[];
    /**
     * Clear region
     */
    clear(): this;
    /**
     * Union shape
     * @param shape shape
     * @param dest destination region
     */
    union(shape: Polygon | Rect | Region | Polygon[] | Rect[] | Region[], dest?: Region): Polygon[];
    /**
     * Intersect shape
     * @param shape shape
     * @param dest destination region
     */
    intersect(shape: Polygon | Rect | Region | Polygon[] | Rect[] | Region[], dest?: Region): Polygon[];
    /**
     * Subtract polygon
     * @param shape shape
     * @param dest destination region
     */
    subtract(shape: Polygon | Rect | Region | Polygon[] | Rect[] | Region[], dest?: Region): Polygon[];
    /**
     * Check if region contains shape
     * @param shape shape
     */
    contains(shape: Polygon | Rect | Region): boolean;
    /**
     * Check if region intersects shape
     * @param shape shape
     */
    intersects(shape: Polygon | Rect | Region): boolean;
    /**
     * Check if region contains point
     * @param point point
     */
    containsPoint(point: Point): boolean;
    /**
     * Return an array of non-overlapping rectangles that make up the region
     * @param eps epsilon, accuracy
     */
    getRectangles(eps?: number): Rect[];
}
/**
 * Enum for defining clipping operation
 */
export enum Operations {
    /**
     * Intersect
     */
    Intersect = 1,
    /**
     * Subtract
     */
    Subtract = 2,
    /**
     * Union
     */
    Union = 3
}
