import {Area} from './Area';
import {Rect} from './Rect';
import {Point} from './Point';

/**
 * Represents a polygon with methods that allow the geometry of the polygon
 * to be queried and modified.
 */
export class Polygon extends Area {
    /**
     * Represents a polygon with methods that allow the geometry of the polygon
     * to be queried and modified.
     * @param x x coordinates
     * @param y y coordinates
     * @param evenOddMode even odd mode
     */
    constructor(x?: number[], y?: number[], evenOddMode?: boolean);
    /**
     * Return bounds and locks the bounds rect from further editing.
     */
    getBounds(): Rect;
    /**
     * Sets arrays of points. Will overwrite any exisitng points in this polygon.
     * @param x array of x coordinates
     * @param y array of y coordinates
     */
    setCoordinates(x: number[], y: number[]): this;
    /**
     * Add point to array of points.
     * @param x x coordinate
     * @param y y coordinate
     */
    push(x: number, y: number): void;
    /**
     * Gets x-coords of points
     */
    getPointsX(): number[];
    /**
     * Gets y-coords of points
     */
    getPointsY(): number[];
    /**
     * Gets number of points
     */
    getSize(): number;
    /**
     * Set even odd mode
     * @param mode even odd mode
     */
    setEvenOddMode(mode: boolean): this;
    /**
     * Get even odd mode
     */
    getEvenOddMode(): boolean;
    /**
     * Check if polygon contains point
     * @param x x position of the point if parameter is a number OR if parameter is a point then it checks if point is inside the rect or not
     * @param y y position of the point
     */
    contains(x: number | Point, y?: number): boolean;
    /**
     * Check if polygon contains polygon
     * @param polygon polygon
     */
    containsPolygon(polygon: Polygon): boolean;
    /**
     * Check if polygon intersects polygon
     * @param polygon polygon
     */
    intersectsPolygon(polygon: Polygon): boolean;
    /**
     * Check if polygon contains rectangle
     * @param rectangle rectangle
     */
    containsRectangle(rectangle: Rect): boolean;
    /**
     * Check if polygon intersects rectangle
     * @param rectangle rectangle
     */
    intersectsRectangle(rectangle: Rect): boolean;
    /**
     * Clone polygon
     */
    clone(): Polygon;
    /**
     * Intersects polygon with the rectangle and leaves only the inner part of polygon
     * WARNING! The result might have self-intersections in some cases
     * @param rectangle rectangle
     */
    intersectRectangle(rectangle: Rect): this;
    /**
     * Create polygon from rect
     * @param rect rectangle
     */
    static fromRect(rect: Rect): Polygon;
}
