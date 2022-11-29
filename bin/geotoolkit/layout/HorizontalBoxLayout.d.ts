import {BoxLayout, Alignment} from './BoxLayout';
import {Rect} from '../util/Rect';
import {Node} from '../scene/Node';

/**
 * The HorizontalBoxLayout class lines up child elements <code>geotoolkit.layout.ILayoutable</code> horizontally.
 * <p>
 * Each child will get at least its desired width and at most its desired height, minimum and maximum height.
 * If height is not specified a child takes a height of layout area. This area can be passed via method <code>setRect</code> or
 * as a parameter of the <code>layout</code>.
 * </p>
 * <p>
 * The desired width can be specified in model parent units or in percentage to width of the a layout area.
 * </p>
 */
export class HorizontalBoxLayout extends BoxLayout {
    /**
     * The HorizontalBoxLayout class lines up child elements <code>geotoolkit.layout.ILayoutable</code> horizontally.
     * <p>
     * Each child will get at least its desired width and at most its desired height, minimum and maximum height.
     * If height is not specified a child takes a height of layout area. This area can be passed via method <code>setRect</code> or
     * as a parameter of the <code>layout</code>.
     * </p>
     * <p>
     * The desired width can be specified in model parent units or in percentage to width of the a layout area.
     * </p>
     * @param dstRect optional layout area. if area is not specified then a parameter area of the
     * layout method is used or properties object
     * @param dstRect.alignment alignment of the layout
     * @param dstRect.direction direction of the layout
     * @param alignment vertical alignment
     * @param direction optional direction of layout
     */
    constructor(dstRect?: Rect | object | { alignment?: Alignment; direction?: Direction; } , alignment?: Alignment, direction?: Direction);
    /**
     * Returns vertical alignment
     */
    getAlignment(): Alignment;
    /**
     * Sets vertical alignment
     * @param alignment alignment
     */
    setAlignment(alignment: Alignment): this;
    /**
     * Set direction
     * @param value direction
     */
    setDirection(value: Direction): this;
    /**
     * Returns direction of layout
     */
    getDirection(): Direction;
    /**
     * Sets rectangular layout area
     * @param dstRect rectangular layout area
     */
    setRect(dstRect: Rect): this;
    /**
     * Return the preferable size of children. It returns an union of all children
     * @param layoutRect desired rect to layout
     * @param targets array of nodes supposed to layout. This parameter is ignored
     * if any item is added directly
     */
    getPreferredSize(layoutRect: Rect, targets?: Node[]): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {alignment: Alignment; direction: Direction} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.alignment alignment of the layout
     * @param properties.direction direction of the layout
     */
    setProperties(properties: object | { alignment?: Alignment; direction?: Direction; } ): this;
}
/**
 * Enum for Direction of Layout
 */
export enum Direction {
    /**
     * LeftToRight
     */
    LeftToRight = 'lefttoright',
    /**
     * RightToLeft
     */
    RightToLeft = 'righttoleft'
}
