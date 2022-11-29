/**
 * Class to store Bezier segment
 */
export class BezierSegment {
    /**
     * Class to store Bezier segment
     * @param x1 x1
     * @param y1 y1
     * @param x2 x2
     * @param y2 y2
     * @param x3 x3
     * @param y3 y3
     * @param x4 x4
     * @param y4 y4
     */
    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number);
    /**
     * get Value
     */
    getX1(): number;
    /**
     * get Value
     */
    getY1(): number;
    /**
     * get Value
     */
    getX2(): number;
    /**
     * get Value
     */
    getY2(): number;
    /**
     * get Value
     */
    getX3(): number;
    /**
     * get Value
     */
    getY3(): number;
    /**
     * get Value
     */
    getX4(): number;
    /**
     * get Value
     */
    getY4(): number;
    /**
     * get Value
     */
    getType(): number;
}
/**
 * Helper class
 */
export class Util {
    /**
     * Helper class
     */
    constructor();
    /**
     * Helper method to get ellipse Bezier reference points
     * @param x center x coordinate
     * @param y center y coordinate
     * @param width width of ellipse
     * @param height height of ellipse
     * @param counterclockwise counterclockwise
     */
    static getEllipseBezierReferencePoints(x: number, y: number, width: number, height: number, counterclockwise?: number): BezierSegment[];
}
