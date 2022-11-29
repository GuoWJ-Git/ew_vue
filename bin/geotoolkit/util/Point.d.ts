/**
 * This class is a 2D Point implementation. It holds the xy values that define a point coordinates in two dimensions.<br>
 * It also provides some utility functions to manipulate Points, compare points or calculate distance between points.
 */
export class Point {
    /**
     * This class is a 2D Point implementation. It holds the xy values that define a point coordinates in two dimensions.<br>
     * It also provides some utility functions to manipulate Points, compare points or calculate distance between points.
     * @param x x coordinate or an object with 'x' and 'y' properties or [x,y] array
     * @param x.x x coordinate
     * @param x.y y coordinate
     * @param y y coordinate
     */
    constructor(x?: number | object | { x?: number; y?: number; }  | number[] | Point, y?: number);
    /**
     * X position
     */
    x: number;
    /**
     * Y position
     */
    y: number;
    /**
     * Return x value
     */
    getX(): number;
    /**
     * Return x value
     */
    getY(): number;
    /**
     * set Point coordinates
     * @param x x coordinate or the point
     * @param y y coordinate
     */
    setPoint(x: number | Point, y?: number): this;
    /**
     * set X Point coordinate
     * @param x x coordinate
     */
    setX(x: number): this;
    /**
     * set Y Point coordinates
     * @param y y coordinate
     */
    setY(y: number): this;
    /**
     * translate point of dx, dy.
     * @param dx dx
     * @param dy dy
     */
    translate(dx: number, dy: number): this;
    /**
     * return clone object
     */
    clone(): Point;
    /**
     * Returns a string that represents the current point.
     */
    toString(): string;
    /**
     * compares a point against this one, if equal returns true
     * @param point point to compare to
     * @param epsilon acceptance criteria
     */
    equalsPoint(point: Point, epsilon?: number): boolean;
    /**
     * round point coordinates
     */
    round(): this;
    /**
     * Finds closest point from current to the segment provided (represented by two points)
     * @param x1 first segment point x-ordinate
     * @param y1 first segment point y-ordinate
     * @param x2 second segment point x-ordinate
     * @param y2 second segment point y-ordinate
     * @param dst destination point
     */
    getClosest(x1: number, y1: number, x2: number, y2: number, dst?: Point): Point;
    /**
     * Calculates distance between two points
     * @param x1 first point x-ordinate or the first point object
     * @param y1 first point y-ordinate or the second point object
     * @param x2 second point x-ordinate
     * @param y2 second point y-ordinate
     */
    static getDistance(x1: number | Point, y1: number | Point, x2?: number, y2?: number): number;
    /**
     * Returns squared distance between two points {x1, y1} and {x2, y2}
     * @param x1 first point x-ordinate or the first point object
     * @param y1 first point y-ordinate or the second point object
     * @param x2 second point x-ordinate
     * @param y2 second point y-ordinate
     */
    static getSquaredDistance(x1: number | Point, y1: number | Point, x2?: number, y2?: number): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number; y: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x x value
     * @param properties.y y value
     */
    setProperties(properties?: object | { x?: number; y?: number; } ): this;
    /**
     * Create or get point from object
     * @param object object can be in format of constructor of geotoolkit.attributes.LineStyle
     */
    static fromObject(object?: object | Point): Point | null;
}
