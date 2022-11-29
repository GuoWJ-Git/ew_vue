import {Point} from './Point';

/**
 * This class is a 2D Line implementation. It holds two points define a line segment two dimensions.</br>
 * It also provides some utility functions to manipulate Lines and do basic geometrical calculations</br>
 * The line segment is defined by two points: start and end. </br>
 * StartPoint----------------------------EndPoint
 */
export class LineSegment {
    /**
     * This class is a 2D Line implementation. It holds two points define a line segment two dimensions.</br>
     * It also provides some utility functions to manipulate Lines and do basic geometrical calculations</br>
     * The line segment is defined by two points: start and end. </br>
     * StartPoint----------------------------EndPoint
     * @param start start Point
     * @param start.start start point
     * @param start.end end point
     * @param end end point
     */
    constructor(start?: Point | object | { start?: Point; end?: Point; } , end?: Point);
    /**
     * Sets the start point to the line
     * @param start Start Point
     */
    setStart(start: Point): this;
    /**
     * Sets the end point to the line segment
     * @param end End Point
     */
    setEnd(end: Point): this;
    /**
     * Return end point of the line segment
     */
    getEnd(): Point;
    /**
     * Return start point of the line segment
     */
    getStart(): Point;
    /**
     * Returns the length of the line segment
     */
    getLength(): number;
    /**
     * Sets the two points which define a line segment.
     * @param start Point representing the "start" position
     * @param end Point representing the "end" position
     */
    setLineSegment(start: Point, end: Point): this;
    /**
     * Translates the line segment by the deltas passed as arguments
     * @param dx Change in x coordinates
     * @param dy Change in y coordinates
     */
    translate(dx: number, dy: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {start: Point; end: Point} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.start start point
     * @param properties.end end point
     */
    setProperties(properties?: object | { start?: Point; end?: Point; } ): this;
    /**
     * Clones this line segment and returns the newly created clone object
     */
    clone(): LineSegment;
    /**
     * Create or get LineSegment from object
     * @param object object can be in format of constructor of geotoolkit.util.LineSegment
     */
    static fromObject(object?: object | LineSegment): LineSegment | null;
    /**
     * Checks if two lines are intersecting. If they do, will return intersection point, if they don't,
     * will return null. If second argument is passed, it will be assigned a property "intersectiontype",
     * which will contain one of the geotoolkit.util.LineSegment.IntersectionType types defining how the two
     * line segments are correlated. If a destination point is provided, the point will be filled with
     * intersection coordinates and returned. (optimization)
     * @param ls1 The line to check intersection with
     * @param typeObject An optional to which a property called "intersectiontype" will be added
     * @param dst Destination point to fill with intersection coordinates
     */
    findIntersection(ls1: LineSegment, typeObject?: object, dst?: Point): Point | null;
}
/**
 * Defines types of intersection detectable by the line
 * Assume line segments are: p1----p2 and p3----p4
 */
export enum IntersectionType {
    /**
     * Lie on the same line and overlap
p1---p3-p2---p4
     */
    Overlapping = 'overlapping',
    /**
     * Lie on the same line but don't overlap
p1----p2 p3----p4
     */
    Disjoint = 'disjoint',
    /**
     * Lie on parallel lines
p1----p2
  p3----p4
     */
    Parallel = 'parallel',
    /**
     * Lie on different lines and intersect
     */
    Intersecting = 'intersecting',
    /**
     * Lie on different lines but don't intersect
     */
    NonIntersecting = 'nonintersecting'
}
