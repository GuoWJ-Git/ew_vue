import {Group} from '../../scene/Group';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {Dimension} from '../../util/Dimension';

/**
 */
export class ElementContent extends Group {
    /**
     * @param cssLayout css layout
     */
    constructor(cssLayout?: object);
    /**
     * Returns if soft clipping is enabled or not for this node.
     */
    isSoftClippingEnabled(): boolean;
    /**
     * Enables or disables soft clipping of content. If enabled,
     * shapes will be rendered semi-transparent outside of its bounds.
     * @param doClip enable sof clipping on this node
     */
    enableSoftClipping(doClip: boolean): this;
    /**
     * Returns content orientation
     */
    getOrientation(): Orientation;
    /**
     * Set content orientation
     * @param orientation orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Set flip content
     * @param flip content flip flag
     */
    setFlip(flip: boolean): this;
    /**
     * Returns content flip flag
     */
    getFlip(): boolean;
    /**
     * Gets model limits, the limits of this groups inside space
     */
    getModelLimits(): Rect | any;
    /**
     * <code>getContentsTransform()</code> retrieves the world transformation of the node.
     */
    getContentsTransform(): Transformation;
    /**
     * Apply layout
     * @param modelLimits model limits
     * @param calculate calculate
     */
    applyLayout(modelLimits?: Rect, calculate?: boolean): this;
    /**
     * Rebuild layout
     */
    dropCache(): this;
    /**
     * Return preferred layout
     * @param layout layout
     * @param layoutHints layoutHints
     */
    getPreferredLayout(layout: Rect | Dimension | object, layoutHints?: object): object;
    /**
     * Return preferred layout
     * @param modelLimits modelLimits
     * @param layoutHints document print settings
     */
    calculatePreferredLayout(modelLimits: Rect | Dimension, layoutHints?: object): object;
}
/**
 * Enum of element content orientation (Element.Orientation.Vertical | Element.Orientation.Horizontal)
 */
export enum Orientation {
    /**
     * Vertical: default orientation
     */
    Vertical = 'vertical',
    /**
     * Horizontal: horizontal orientation, all content is rotated -90° degree
     */
    Horizontal = 'horizontal'
}
