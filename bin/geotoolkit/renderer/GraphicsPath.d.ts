import {Rect} from '../util/Rect';
import {Transformation} from '../util/Transformation';

/**
 * Provides a container for connected lines, curves.
 */
export class GraphicsPath {
    /**
     * Provides a container for connected lines, curves.
     * @param options properties object
     * @param options.x x
     * @param options.y y
     * @param options.index index
     * @param options.tags tags
     * @param options.bounds bounds
     */
    constructor(options?: object | { x?: number[]; y?: number[]; index?: number[]; tags?: PointType[]; bounds?: Rect; } );
    /**
     * Copy constructor
     * @param src instance to create a copy from
     */
    protected copyConstructor(src: GraphicsPath): void;
    /**
     * Copy path from source
     * @param src source path to copy from
     */
    copy(src: GraphicsPath): this;
    /**
     * Create a deep copy
     */
    clone(): GraphicsPath;
    /**
     * Add command to move the current position.
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     */
    moveTo(x: number, y: number): this;
    /**
     * Close path
     */
    close(): this;
    /**
     * Add command to draw a line from the current position to specified point
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     */
    lineTo(x: number, y: number): this;
    /**
     * Add command to draw an arc from the current position to specified point
     * @param x1 x-coordinate of control point
     * @param y1 y-coordinate of control point
     * @param x2 The x-coordinate of the destination point
     * @param y2 The y-coordinate of the destination point
     * @param radius The radius of arc
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    /**
     * Draws a cubic Bezier curve from the current point to the point (x, y),
     * with control points (cp1x, cp1y) and (cp2x, cp2y).
     * @param cp1x the x coordinate of the first control point
     * @param cp1y the y coordinate of the first control point
     * @param cp2x the x coordinate of the second control point
     * @param cp2y the y coordinate of the second control point
     * @param x the x coordinate of the end point
     * @param y the y coordinate of the end point
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Remove all of this path's points.
     */
    clear(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number[]; y: number[]; index: number[]; tags: PointType[]; bounds: Rect} | any;
    /**
     * Returns true if there are no elements in this path
     */
    isEmpty(): boolean;
    /**
     * Returns the length of the current path.
     */
    getLength(): number;
    /**
     * Returns an array of tags.
     */
    getTags(): any[];
    /**
     * Returns an array of x coordinates.
     */
    getX(): any[];
    /**
     * Returns an array of y coordinates.
     */
    getY(): any[];
    /**
     * Returns a start index in the x and y for the current command.
     * @param i index of the element
     */
    getIndex(i: number): number;
    /**
     * Returns the element at the given index in the painter path.
     * @param i index of the element
     */
    getElement(i: number): any;
    /**
     * Returns the number of elements
     */
    getElementCount(): number;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.x x
     * @param properties.y y
     * @param properties.index index
     * @param properties.tags tags
     * @param properties.bounds bounds
     */
    setProperties(properties: object | { x?: number[]; y?: number[]; index?: number[]; tags?: PointType[]; bounds?: Rect; } ): this;
    /**
     * Returns the path's string representation
     */
    toString(): string;
    /**
     * Makes the intersection of this path's fill area
     * and rectangle. This methid is experemental and work for
     * bounds only.
     * @param rect the specified rectangle
     */
    intersect(rect: Rect): this;
    /**
     * Transform path using the current transformation
     * @param transformation the specified transformation
     */
    transform(transformation: Transformation): this;
    /**
     * Returns a path shape which represents a rectangle
     * @param rect rectangle
     */
    static fromRect(rect: Rect): GraphicsPath;
    /**
     * Returns a path shape created from SVG formatted path string
     * @param str SVG formatted path
     */
    static fromSVG(str: string): GraphicsPath;
}
/**
 * PointType
 */
export enum PointType {
    /**
     * Line to
     */
    LINETO = 0,
    /**
     * Move to
     */
    MOVETO = 1,
    /**
     * Bezier curve to
     */
    BEZIERCURVETO = 2,
    /**
     * Close
     */
    CLOSE = 3,
    /**
     * Arc to
     */
    ARCTO = 4
}
