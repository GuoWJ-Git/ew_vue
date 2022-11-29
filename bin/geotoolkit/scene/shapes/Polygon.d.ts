import {ScaledShape} from './ScaledShape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {GraphicsPath} from '../../renderer/GraphicsPath';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * A polygon node which is defined by arrays of points.
 */
export class Polygon extends ScaledShape {
    /**
     * A polygon node which is defined by arrays of points.
     * @param options set of x coordinates or object, which contains shape properties
     * @param options.x set of x coordinates
     * @param options.y set of y coordinates
     * @param y set of y coordinates
     * @param visible 
     * @param linestyle 
     * @param fillstyle apply polygon fillstyle
     */
    constructor(options?: number[] | object | { x?: number[]; y?: number[]; } , y?: number[], visible?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * Returns path geometry of the polygon
     */
    getGeometry(): GraphicsPath;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Polygon): this;
    /**
     * Returns bounds and locks the bounds rect from further editing.
     */
    getBounds(): Rect;
    /**
     * Sets arrays of points. Will overwrite any existing points in this polygon.
     * @param x array of x coordinates
     * @param y array of y coordinates
     */
    setCoordinates(x: number[], y: number[]): this;
    /**
     * Adds point to array of points.
     * @param x x-coordinate or the point to add
     * @param y y-coordinate
     */
    push(x: number | Point, y?: number): this;
    /**
     * Inserts point into array at specified index.
     * @param index the point position index
     * @param x x-coordinate or the point to insert
     * @param y y-coordinate
     */
    insert(index: number, x: number | Point, y?: number): this;
    /**
     * Removes point(s) from the polygon.
     * @param start index of the first removing point
     * @param count the number of points to be removed
     */
    remove(start: number, count?: number): {x: number[]; y: number[]} | object;
    /**
     * Sets new coordinates for the polygon point at specified index
     * @param index the point index
     * @param x point x-coordinate or the new point object
     * @param y point y-coordinate
     */
    setPoint(index: number, x: number | Point, y?: number): this;
    /**
     * Returns polygon point at specified index (null if no point found)
     * @param index the point index
     */
    getPoint(index: number): any | Point;
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
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number[]; y: number[]; npts: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x set of x coordinates
     * @param properties.y set of y coordinates
     */
    setProperties(properties?: object | { x?: number[]; y?: number[]; } ): this;
}
