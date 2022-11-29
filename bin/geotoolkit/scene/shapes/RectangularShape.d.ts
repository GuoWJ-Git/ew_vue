import {ScaledShape} from './ScaledShape';
import {ILayoutable} from '../../layout/ILayoutable';
import {Rect} from '../../util/Rect';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {LayoutStyle} from '../../layout/LayoutStyle';

/**
 * The base abstract class for a number of shapes whose geometry
 * is defined by a rectangular frame. This class does not directly
 * specify any specific geometry by itself, but merely provides
 * manipulation methods inherited by a whole category of shapes.
 */
export class RectangularShape extends ScaledShape implements ILayoutable {
    /**
     * The base abstract class for a number of shapes whose geometry
     * is defined by a rectangular frame. This class does not directly
     * specify any specific geometry by itself, but merely provides
     * manipulation methods inherited by a whole category of shapes.
     * @param options x coordinate of the top left corner
     * @param options.bounds bounds
     * @param options.left x coordinate of the top left corner
     * @param options.top y coordinate of the top left corner
     * @param options.right x coordinate of the bottom right corner (if 'width' not specified)
     * @param options.bottom y coordinate of the bottom right corner (if 'height' not specified)
     * @param options.width width (if 'right' not specified)
     * @param options.height height (if 'bottom' not specified)
     * @param top y coordinate of the top left corner
     * @param right x coordinate of the bottom right corner (if 'width' not specified)
     * @param bottom y coordinate of the bottom right corner (if 'height' not specified)
     * @param width width (if 'right' not specified)
     * @param height height (if 'bottom' not specified)
     * @param visible visibility of node
     * @param linestyle style applied on outline
     * @param fillstyle style applied on fill
     */
    constructor(options?: Rect | number | object | { bounds?: Rect; left?: number; top?: number; right?: number; bottom?: number; width?: number; height?: number; } , top?: number, right?: number, bottom?: number, width?: number, height?: number, visible?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * Returns the X coordinate of the center of the framing
     * rectangle of this rectangular shape.
     */
    getCenterX(): number;
    /**
     * Returns the Y coordinate of the center of the framing
     * rectangle of this rectangular shape.
     */
    getCenterY(): number;
    /**
     * Returns the X coordinate of the left bottom corner of the framing rectangle.
     */
    getX(): number;
    /**
     * Returns the Y coordinate of the left bottom corner of
     * the framing rectangle.
     */
    getY(): number;
    /**
     * Returns the width of the framing rectangle.
     */
    getWidth(): number;
    /**
     * Returns the height of the framing rectangle.
     */
    getHeight(): number;
    /**
     * Return bounds. Will also lock the bounds so they cannot be directly modified.
     */
    getBounds(): Rect;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values. This method is the same as setRect.
     * @param x1 x coordinate of the top left corner
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     */
    setBounds(x1: number | Rect, y1?: number, x2?: number, y2?: number): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, merge?: boolean): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values.
     * @param x1 x coordinate of the top left corner
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     */
    setRect(x1: number | Rect, y1?: number, x2?: number, y2?: number): this;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     */
    invalidateLayout(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {bounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.bounds shape bounds
     * @param properties.left x coordinate of the top left corner
     * @param properties.top y coordinate of the top left corner
     * @param properties.right x coordinate of the bottom right corner (if 'width' not specified)
     * @param properties.bottom y coordinate of the bottom right corner (if 'height' not specified)
     * @param properties.width width (if 'right' not specified)
     * @param properties.height height (if 'bottom' not specified)
     */
    setProperties(properties?: object | { bounds?: Rect; left?: number; top?: number; right?: number; bottom?: number; width?: number; height?: number; } ): this;
}
