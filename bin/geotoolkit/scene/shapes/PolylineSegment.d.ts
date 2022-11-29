import {Rect} from '../../util/Rect';

/**
 * The set of polyline shape.
 */
export class PolylineSegment {
    /**
     * The set of polyline shape.
     * @param x JSON containing the properties to set OR set of x coordinates
     * @param x.x set of x coordinates
     * @param x.y set of y coordinates
     * @param x.bounds shape bounds
     * @param y set of y coordinates
     */
    constructor(x?: object | { x?: number[]; y?: number[]; bounds?: Rect | object; }  | number[], y?: number[]);
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number[]; y: number[]; bounds: Rect; npts: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x set of x coordinates
     * @param properties.y set of y coordinates
     * @param properties.bounds shape bounds
     */
    setProperties(properties?: object | { x?: number[]; y?: number[]; bounds?: Rect | object; } ): this;
}
