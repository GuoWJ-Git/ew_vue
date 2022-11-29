import {GhostBearingHandle} from './GhostBearingHandle';
import {Dimension} from '../../util/Dimension';
import {Point} from '../../util/Point';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Implements a handle which has an anchor point and a size. The shape uses symbols to render and accepts painters
 * to change the rendering shape. Anchored handle extends Ghost Bearung Hanle, thus handles ghost rendering in device
 * space as well as model space
 */
export class AnchoredHandle extends GhostBearingHandle {
    /**
     * Implements a handle which has an anchor point and a size. The shape uses symbols to render and accepts painters
     * to change the rendering shape. Anchored handle extends Ghost Bearung Hanle, thus handles ghost rendering in device
     * space as well as model space
     * @param x X coordinate of handle anchor or a JSON with handle properties
     * @param x.size The two dimensional size of the anchor
     * @param x.x X coordinate of handle's anchor
     * @param x.y Y coordinate of handle's anchor
     * @param x.painter Painter used to draw the handle
     * @param x.isindevicespace Flag defining if the handle is in device space
     * @param y Y coordinate of handle anchor
     * @param size The two dimensional size of the anchor
     */
    constructor(x: object | { size?: Dimension | number; x?: number; y?: number; painter?: Function; isindevicespace?: boolean; }  | number, y?: number, size?: number | Dimension);
    /**
     * Sets the point defining the anchor of this handle (coordinates of the symbol)
     * @param anchor position
     */
    setAnchor(anchor: Point): this;
    /**
     * Returns the position of the handle
     */
    getAnchor(): Point;
    /**
     * Sets the size of the handle. Size is defined in two dimensions and is rendered
     * with respect to the anchor of this handle
     * @param size size of the handle
     */
    setHandleSize(size: Dimension | number): this;
    /**
     * Return handle size as a two-dimensional unit
     */
    getHandleSize(): Dimension;
    /**
     * Check if object is within rendering area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): {size: Dimension; x: number; y: number; painter: Function; isindevicespace: boolean} | any;
    /**
     * Gets properties pertaining to this handle
     * @param props JSON with properties
     * @param props.size The two dimensional size of the anchor
     * @param props.x X coordinate of handle's anchor
     * @param props.y Y coordinate of handle's anchor
     * @param props.painter Painter used to draw the handle
     * @param props.isindevicespace Flag defining if the handle is in device space
     */
    setProperties(props: object | { size?: Dimension | number; x?: number; y?: number; painter?: Function; isindevicespace?: boolean; } ): this;
}
