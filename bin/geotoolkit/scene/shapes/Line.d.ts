import {ScaledShape} from './ScaledShape';
import {Point} from '../../util/Point';
import {ILineDecoration} from '../../attributes/ILineDecoration';
import {Rect} from '../../util/Rect';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Define a line shape.
 * <p>
 * Line shapes are the simplest shapes and they provide a foundation for more complex shapes.
 * Width, color, and style is set by assigning attributes to the line shape.<br>
 * Line shape itself defines geometry and assigned attributes provide information about drawing.
 * </p>
 */
export class Line extends ScaledShape {
    /**
     * Define a line shape.
     * <p>
     * Line shapes are the simplest shapes and they provide a foundation for more complex shapes.
     * Width, color, and style is set by assigning attributes to the line shape.<br>
     * Line shape itself defines geometry and assigned attributes provide information about drawing.
     * </p>
     * @param from origin point of line
     * @param from.from origin point of line
     * @param from.to endpoint of line
     * @param from.linedecoration line decoration style
     * @param from.bounds shape bounds
     * @param to endpoint of line
     * @param visible line visible
     * @param linestyle line style
     */
    constructor(from?: Point | object | { from?: Point; to?: Point; linedecoration?: ILineDecoration | string; bounds?: Rect | object; } , to?: Point, visible?: boolean, linestyle?: LineStyle | string | object);
    /**
     * Return Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify Line Decoration style
     * @param lineDecoration line decoration style
     */
    setLineDecoration(lineDecoration: ILineDecoration | object | string): this;
    /**
     * returns from point
     */
    getFrom(): Point | null;
    /**
     * returns to point
     */
    getTo(): Point | null;
    /**
     * Set line positions
     * @param line set of two points
     * @param line.from from position
     * @param line.to to position
     */
    setLine(line: object | { from?: Point; to?: Point; } ): this;
    /**
     * Update bounds
     */
    updateBounds(): this;
    /**
     * Return bounding box of this line.
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {from: Point; to: Point; bounds: Rect; linedecoration: ILineDecoration} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.from from
     * @param properties.to to
     * @param properties.bounds shape bounds
     * @param properties.linedecoration line decoration style
     */
    setProperties(properties?: object | { from?: Point; to?: Point; bounds?: Rect | object; linedecoration?: ILineDecoration | string; } ): this;
}
