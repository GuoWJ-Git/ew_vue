import {Area} from './Area';
import {Point} from './Point';
import {GeometryOperation} from './GeometryOperation';
import {Polygon} from './Polygon';

/**
 * Represents a rectangle with sides parallel to the axes. This rectangle has methods that allow the geometry
 * to be queried and modified. The geometry that makes up a rectangle consists
 * of two coordinate points that define the diagonal between the left bottom
 * corner and the right top corner. Note that the bottom vertical coordinate is
 * guaranteed to be less than the top vertical coordinate, and that the left
 * horizontal coordinate is less than the right horizontal coordinate.
 * @example
 * ```javascript
 * const r1 = new Rect({'x': 4,
 *                      'y': 3,
 *                      'width': 2,
 *                      'height': 1
 *                    });
 * const r2 = new Rect(r1);
 * const r3 = new Rect(4, 3, 6, 4);  // x1, y1, x2, y2
 * // r1, r2, and r3 are now equal
 * ```
 */
export class Rect extends Area {
    /**
     * Represents a rectangle with sides parallel to the axes. This rectangle has methods that allow the geometry
     * to be queried and modified. The geometry that makes up a rectangle consists
     * of two coordinate points that define the diagonal between the left bottom
     * corner and the right top corner. Note that the bottom vertical coordinate is
     * guaranteed to be less than the top vertical coordinate, and that the left
     * horizontal coordinate is less than the right horizontal coordinate.
     * @param x1 left or object to copy
     * @param x1.readonly readonly flag
     * @param x1.x left
     * @param x1.y top
     * @param x1.width width
     * @param x1.height height
     * @param y1 top
     * @param x2 right
     * @param y2 bottom
     */
    constructor(x1?: number | Rect | object | { readonly?: boolean; x?: number; y?: number; width?: number; height?: number; } , y1?: number, x2?: number, y2?: number);
    /**
     * Return clone object.
     */
    clone(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {readonly: boolean; x: number; y: number; width: number; height: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.readonly readonly flag
     * @param properties.x left value
     * @param properties.y top value
     * @param properties.width width
     * @param properties.height height
     */
    setProperties(properties?: object | { readonly?: boolean; x?: number; y?: number; width?: number; height?: number; } ): this;
    /**
     * return Rect state. If true, rect cannot be modified.
     */
    isReadOnly(): boolean;
    /**
     * protect Rect instance from modification.
     */
    lock(): this;
    /**
     * Intersects this rectangle with the specified one
     * @param x The x coordinate or rectangle to intersect with
     * @param y The y coordinate
     * @param width The width
     * @param height The height
     */
    intersect(x: number | Rect, y?: number, width?: number, height?: number): this;
    /**
     * Union this Rect with the specified
     * @param rect The rect to union with current one
     */
    union(rect: Rect): this;
    /**
     * Unions this Rect with the specified x,y-point
     * @param x The x coordinate
     * @param y The y coordinate
     */
    unionPoint(x: number, y: number): this;
    /**
     * Returns true if rectangles are identical
     * @param rect rect to compare to
     * @param epsilon acceptance criteria
     */
    equalsRect(rect: Rect, epsilon?: number): boolean;
    /**
     * Determines whether or not this Rectangle and the specified Rectangle
     * intersection. Two rectangles intersect if their intersection is non-empty or if they touch on either side.
     * @param x The x coordinate or another rectangle
     * @param y The y coordinate
     * @param w The width
     * @param h The height
     */
    intersects(x: number | Rect, y?: number, w?: number, h?: number): boolean;
    /**
     * Set left position
     * @param x left position
     */
    setX(x: number): this;
    /**
     * Set top position
     * @param y top position
     */
    setY(y: number): this;
    /**
     * Return left position
     */
    getX(): number;
    /**
     * Return top position
     */
    getY(): number;
    /**
     * Sets width
     * @param w width
     */
    setWidth(w: number): this;
    /**
     * Sets height
     * @param h height
     */
    setHeight(h: number): this;
    /**
     * Return height
     */
    getHeight(): number;
    /**
     * Return width
     */
    getWidth(): number;
    /**
     * Return coordinate of left corner
     */
    getLeft(): number;
    /**
     * Return coordinate of right corner
     */
    getRight(): number;
    /**
     * Return top coordinate
     */
    getTop(): number;
    /**
     * Return bottom coordinate (always top < bottom)
     */
    getBottom(): number;
    /**
     * Return bounds and locks the bounds rect from further editing.
     */
    getBounds(): Rect;
    /**
     * Sets rectangle center
     * @param x X coordinate of the rectangle's center
     * @param y Y coordinate of the rectangle's center
     */
    setCenter(x: number, y: number): Rect;
    /**
     * Gets X coordinate of the rectangle's center
     */
    getCenterX(): number;
    /**
     * Gets Y coordinate of the rectangle's center
     */
    getCenterY(): number;
    /**
     * Gets coordinates of the rectangle's center
     */
    getCenter(): Point;
    /**
     * Return left top position
     */
    getLeftTop(): Point;
    /**
     * Return left top position
     */
    getRightTop(): Point;
    /**
     * Return right bottom position
     */
    getRightBottom(): Point;
    /**
     * Return left bottom position
     */
    getLeftBottom(): Point;
    /**
     * Return Left center position
     */
    getLeftCenter(): Point;
    /**
     * Return Right center position
     */
    getRightCenter(): Point;
    /**
     * Return Top center position
     */
    getTopCenter(): Point;
    /**
     * Return Bottom center position
     */
    getBottomCenter(): Point;
    /**
     * Sets rectangle
     * @param x1 the x-coordinate of one corner
     * @param x1.x left
     * @param x1.y top
     * @param x1.width width
     * @param x1.height height
     * @param y1 the y-coordinate of one corner
     * @param x2 the x-coordinate of the opposite corner
     * @param y2 the y coordinate of the opposite corner
     */
    setRect(x1: number | Rect | object | { x?: number; y?: number; width?: number; height?: number; } , y1?: number, x2?: number, y2?: number): this;
    /**
     * Check if rectangle contains point
     * @param x x position of the point if parameter is a number OR if parameter is a point then it checks if point is inside the rect or not
     * @param y y position of the point
     */
    contains(x: number | Point, y?: number): boolean;
    /**
     * Check if rectangle contains rectangle
     * @param x x positon
     * @param y y position
     * @param w width
     * @param h height
     */
    containsRect(x: number | Rect, y?: number, w?: number, h?: number): boolean;
    /**
     * Clips a line by rectangle.
     * a1 [IN] the start position of the line. a2 [IN] the end position of the
     * line. result1 [OUT] the first point of the clipped line. result2 [OUT]
     * the end point of the clipped line. return true if clipped rectangle
     * intersects line or line is inside of the rectangle.
     * @param a1 the first input point
     * @param a2 the second input point
     * @param result1 the first output point
     * @param result2 the second output point
     */
    clipLine(a1: Point, a2: Point, result1: Point, result2: Point): number;
    /**
     * Translates rectangle a specified distance
     * @param tx x translation
     * @param ty y translation
     */
    translate(tx: number, ty: number): this;
    /**
     * Inflate rectangle from each side by width and height
     * @param width extend in horizontal direction
     * @param height extend in vertical direction
     */
    inflate(width: number, height?: number): this;
    /**
     * Inflate rectangle
     * @param source rect to be inflated
     * @param w The width to inflate
     * @param h The height to inflate
     */
    static inflateRect(source: Rect, w: number, h: number): Rect;
    /**
     * returns Rect state
     */
    isEmpty(): boolean;
    /**
     * Round this rectangle to integer values for coordinates.
     * This method sets the largest whole numbers less than or equal to the current
     * values of left-top corner and sets the smallest whole numbers greater than or equal
     * to the current values of right-bottom corner of the rectangle.
     */
    round(): this;
    /**
     * Returns string like: "Rect: x1,y1:x2,y2
     * With x1 left
     * With y1 top
     * With x2 right
     * With y2 bottom
     */
    toString(): string;
    /**
     * Merges provided rectangular areas according to the operation applied.
     * @param oldRect 1st rect to merge
     * @param newRect 2nd rect to merge
     * @param operation operation to be performed on the new rect
     * @param dstRect destination rectangular geometry
     */
    static merge(oldRect: Rect, newRect: Rect, operation?: GeometryOperation, dstRect?: Rect): Rect;
    /**
     * Merges with provided rectangular area according to the operation applied.
     * @param newRect rect to be merged with the current
     * @param operation operation to apply
     */
    merge(newRect: Rect, operation?: GeometryOperation): this;
    /**
     * Check if rectangle1 contains rectangle2
     * @param rect1 rectangle 1
     * @param rect2 rectangle 2
     */
    static containsRect(rect1: Rect, rect2: Rect): boolean;
    /**
     * Check if rectangle1 intersects rectangle2.
     * Two rectangles intersect if their intersection is non-empty or if they touch on either side.
     * @param rect1 rectangle 1
     * @param rect2 rectangle 2
     */
    static intersectsRect(rect1: Rect, rect2: Rect): boolean;
    /**
     * Check if rectangle contains polygon
     * @param polygon polygon
     */
    containsPolygon(polygon: Polygon): boolean;
    /**
     * Create or get rect from object
     * @param object object can be in format of constructor of geotoolkit.util.Rect
     */
    static fromObject(object?: object | Rect): Rect | null;
    /**
     * Get diagonal length of rectangle
     */
    getDiagonalLength(): number;
}
