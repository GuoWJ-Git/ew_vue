import {GhostBearingHandle} from './GhostBearingHandle';
import {Rect} from '../../util/Rect';

/**
 * Defines a shape to draw handles for rectangle.
 */
export class BoxHandle extends GhostBearingHandle {
    /**
     * Defines a shape to draw handles for rectangle.
     * @param x1 x coordinate of the top left corner or a JSON object with properties
     * @param x1.rect Rect object
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     */
    constructor(x1?: number | object | { rect?: Rect; } , y1?: number, x2?: number, y2?: number);
    /**
     * Sets properties pertaining to this object
     * @param props JSON object with properties
     * @param props.rect Rect object
     */
    setProperties(props?: object | { rect?: Rect; } ): this;
    /**
     * Invalidate node
     * @param bounds optional rectangular area to be invalidated, or force flag if rectangle is empty
     * @param force optional boolean parameter that can force invalidation
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): {rect: Rect} | any;
    /**
     * Sets rectangle
     * @param bounds Bounds of rectangle
     */
    setRect(bounds: Rect): this;
    /**
     * Gets rectangle
     */
    getRect(): Rect;
}
