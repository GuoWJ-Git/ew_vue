import {RectangularShape} from './RectangularShape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Defines rectangle node
 */
export class Rectangle extends RectangularShape {
    /**
     * Defines rectangle node
     * @param options x coordinate of the top left corner
     * @param options.radius This defines if the rectangle has rounded border corners. 'radius' is the length denoting a radius for the rounded border of each corner.
     * @param top y coordinate of the top left corner
     * @param right x coordinate of the bottom right corner (if 'width' not specified)
     * @param bottom y coordinate of the bottom right corner (if 'height' not specified)
     * @param width width (if 'right' not specified)
     * @param height height (if 'bottom' not specified)
     * @param visible visibility of node
     * @param linestyle style applied on outline
     * @param fillstyle style applied on fill
     */
    constructor(options?: number | object | { radius?: number; } , top?: number, right?: number, bottom?: number, width?: number, height?: number, visible?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * Set border radius in model coordinates.
     * @param radius border radius in model coordinates
     */
    setCornerRadius(radius: number): this;
    /**
     * return corner radius
     */
    getCornerRadius(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {radius: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.radius corner radius
     */
    setProperties(properties?: object | { radius?: number; } ): this;
}
