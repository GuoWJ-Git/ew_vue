import {Rect} from './Rect';

/**
 * Represents a readonly rectangle with sides parallel to the axes. This rectangle has methods that allow the geometry
 * to be queried. The geometry that makes up a rectangle consists
 * of two coordinate points that define the diagonal between the left bottom
 * corner and the right top corner. Note that the bottom vertical coordinate is
 * guaranteed to be less than the top vertical coordinate, and that the left
 * horizontal coordinate is less than the right horizontal coordinate.
 */
export class ReadOnlyRect extends Rect {
    /**
     * Represents a readonly rectangle with sides parallel to the axes. This rectangle has methods that allow the geometry
     * to be queried. The geometry that makes up a rectangle consists
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
     * Gets empty rectangle
     */
    static getEmpty(): ReadOnlyRect;
    /**
     * Gets unitsquare (0, 0, 1, 1)
     */
    static getUnitSquare(): ReadOnlyRect;
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
     * Gets all the properties pertaining to this object
     */
    getProperties(): {readonly: boolean; x: number; y: number; width: number; height: number} | any;
}
