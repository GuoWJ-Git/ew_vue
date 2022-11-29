import {Path} from './Path';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Define spline shape
 */
export class Spline extends Path {
    /**
     * Define spline shape
     * @param x coordinates
     * @param x.x x coordinates
     * @param x.y y coordinates
     * @param y coordinates
     * @param linestyle style
     */
    constructor(x?: number[] | object | { x?: number[]; y?: number[]; } , y?: number[], linestyle?: LineStyle | string | object);
    /**
     * Sets arrays of points
     * @param x x coordinates
     * @param y y coordinates
     */
    setCoordinates(x: number[], y: number[]): this;
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
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x x coordinates
     * @param properties.y y coordinates
     */
    setProperties(properties?: object | { x?: number[]; y?: number[]; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number[]; y: number[]} | any;
}
