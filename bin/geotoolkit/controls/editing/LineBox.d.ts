import {GhostBearingHandle} from './GhostBearingHandle';
import {Point} from '../../util/Point';

/**
 * Defines a shape to draw handles for line
 */
export class LineBox extends GhostBearingHandle {
    /**
     * Defines a shape to draw handles for line
     * @param x1 x coordinate of the start or a JSON object with properties
     * @param x1.x1 x coordinate of the start
     * @param x1.y1 y coordinate of the start
     * @param x1.x2 x coordinate of the end
     * @param x1.y2 y coordinate of the end
     * @param x1.linewidth line width
     * @param y1 y coordinate of the start
     * @param x2 x coordinate of the end
     * @param y2 y coordinate of the end
     */
    constructor(x1?: number | object | { x1?: number; y1?: number; x2?: number; y2?: number; linewidth?: number; } , y1?: number, x2?: number, y2?: number);
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): {x1: number; y1: number; x2: number; y2: number; linewidth: number} | any;
    /**
     * Sets properties pertaining to this object
     * @param props An object containing the properties to set
     * @param props.x1 x coordinate of the start
     * @param props.y1 y coordinate of the start
     * @param props.x2 x coordinate of the end
     * @param props.y2 y coordinate of the end
     * @param props.linewidth line width
     */
    setProperties(props: object | { x1?: number; y1?: number; x2?: number; y2?: number; linewidth?: number; } ): this;
    /**
     * Sets two points defining the line, or one of the edges
     * @param point1 The first point defining the line (from), or an object with points
     * @param point1.from The first point defining the line (from)
     * @param point1.to The second point defining the line (to)
     * @param point2 The second point defining the line (to)
     */
    setLine(point1: object | { from?: Point; to?: Point; }  | Point, point2?: Point): this;
    /**
     * Returns the point defining "From" coordinate of the line
     */
    getFrom(): any | Point;
    /**
     * Returns the point defining "To" coordinate of the line
     */
    getTo(): any | Point;
    /**
     * Changes the line to match its center point with the provided point. Length remains the same
     * @param anchor center point for line box
     */
    setAnchor(anchor: Point): this;
}
