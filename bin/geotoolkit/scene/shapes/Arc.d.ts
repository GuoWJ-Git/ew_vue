import {ScaledShape} from './ScaledShape';
import {Rect} from '../../util/Rect';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * The Arc shape is defined by its center, radius and start/end angles.<br>
 */
export class Arc extends ScaledShape {
    /**
     * The Arc shape is defined by its center, radius and start/end angles.<br>
     * @param options x coordinate of the center
     * @param options.x x coordinate of the center
     * @param options.y y coordinate of the center
     * @param options.radius The radius of the arc
     * @param options.startarc The start angle for the arc in radians
     * @param options.endarc The end angle for the arc in radians
     * @param options.sweeparc Defines the sweep of the arc
     * @param options.connecttocenter A flag which specifies if the end points of the arc should be connected to center with lines, like a pie slice
     * @param options.bounds shape bounds
     * @param y y coordinate of the center
     * @param radius The radius of the arc
     * @param startArc The start angle for the arc in radians
     * @param endArc The end angle for the arc in radians
     * @param visible visibility of node
     * @param linestyle style applied on outline
     * @param fillstyle style applied on fill
     * @param sweepArc Defines the sweep of the arc
     * @param connectToCenter A flag which specifies if the end points of the arc should be connected to center with lines, like a pie slice
     */
    constructor(options?: number | object | { x?: number; y?: number; radius?: number; startarc?: number; endarc?: number; sweeparc?: number; connecttocenter?: boolean; bounds?: Rect | object; } , y?: number, radius?: number, startArc?: number, endArc?: number, visible?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object, sweepArc?: number, connectToCenter?: boolean);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Arc): this;
    /**
     * Set arc parameters
     * @param options x coordinate of the center
     * @param options.x x coordinate of the center
     * @param options.y y coordinate of the center
     * @param options.radius The radius of the arc
     * @param options.startarc The start angle for the arc in radians
     * @param options.endarc The end angle for the arc in radians
     * @param y y coordinate of the center
     * @param radius The radius of the arc
     * @param startArc The start angle for the arc in radians
     * @param endArc The end angle for the arc in radians
     * @param sweepArc Defines the sweep of the arc
     * @param connectToCenter connect to center
     */
    setArc(options?: number | object | { x?: number; y?: number; radius?: number; startarc?: number; endarc?: number; } , y?: number, radius?: number, startArc?: number, endArc?: number, sweepArc?: number, connectToCenter?: boolean): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number; y: number; radius: number; startarc: number; endarc: number; sweeparc: number; connecttocenter: boolean; bounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x x coordinate of the center
     * @param properties.y y coordinate of the center
     * @param properties.radius size of the radius
     * @param properties.startarc angle where the arc starts
     * @param properties.endarc angle where the arc ends
     * @param properties.sweeparc Defines the sweep of the arc
     * @param properties.connecttocenter A flag which specifies if the end points of the arc should be connected to center with lines, like a pie slice
     * @param properties.bounds shape bounds
     */
    setProperties(properties: object | { x?: number; y?: number; radius?: number; startarc?: number; endarc?: number; sweeparc?: number; connecttocenter?: boolean; bounds?: Rect | object; } ): this;
}
