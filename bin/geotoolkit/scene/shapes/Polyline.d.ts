import {ScaledShape} from './ScaledShape';
import {LineStyle} from '../../attributes/LineStyle';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * A line defined by x and y arrays of coordinates.
 */
export class Polyline extends ScaledShape {
    /**
     * A line defined by x and y arrays of coordinates.
     * @param options set of x coordinates or object, which contains shape properties
     * @param options.x set of x coordinates
     * @param options.y set of y coordinates
     * @param options.optimization optimization type boolean || ['none' | 'rdp' | 'closepoints']
     * @param y set of y coordinates
     * @param visible 
     * @param linestyle 
     */
    constructor(options?: number[] | object | { x?: number[]; y?: number[]; optimization?: boolean | string; } , y?: number[], visible?: boolean, linestyle?: LineStyle | string | object);
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current line
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Returns optimization type
     */
    getOptimizationType(): OptimizationType;
    /**
     * Turns on/off optimization for line
     * @param needOptimization Is optimization for line on
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Returns current optimization state
     */
    getOptimization(): boolean;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Polyline): this;
    /**
     * Check collision
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Update shape bounds
     */
    updateBounds(): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Sets arrays of points
     * @param x an array of x coordinates
     * @param y an array of y coordinates
     */
    setCoordinates(x: number[], y: number[]): this;
    /**
     * Adds point to array of points.
     * @param x x-coordinate or the point to add
     * @param y y coordinate
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
     * Sets new coordinates for the polyline point at specified index
     * @param index the point index
     * @param x point x-coordinate or the new point object
     * @param y point y-coordinate
     */
    setPoint(index: number, x: number | Point, y?: number): this;
    /**
     * Returns polyline point at specified index (null if no point found)
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
     */
    getSize(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number[]; y: number[]; optimization: string; npts: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x set of x coordinates
     * @param properties.y set of y coordinates
     * @param properties.optimization optimization type boolean || ['none' | 'rdp' | 'closepoints']
     */
    setProperties(properties?: object | { x?: number[]; y?: number[]; optimization?: boolean | string; } ): this;
}
/**
 * Enum of rendering optimization types
 */
export enum OptimizationType {
    /**
     * Filter points which are close to each other and are rendered in one pixel
     */
    FilterClosePoints = 0,
    /**
     * Ramer–Douglas–Peucker optimization
     */
    RDP = 1
}
