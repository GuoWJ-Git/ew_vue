import {ILayoutable} from './ILayoutable';
import {LayoutStyle} from './LayoutStyle';
import {Rect} from '../util/Rect';
import {Dimension} from '../util/Dimension';
import {Node} from '../scene/Node';
import {Text} from '../scene/shapes/Text';
import {Group} from '../scene/Group';
import {AnnotationLocation} from './AnnotationLocation';

/**
 * This utility class provides functions used by geotoolkit.layout.LayoutStyle implementations
 */
export class LayoutHelper {
    /**
     * This utility class provides functions used by geotoolkit.layout.LayoutStyle implementations
     */
    constructor();
    /**
     * Converts desired width of the "node" layoutable component to {number} if possible
     * @example
     * ```javascript
     * node.setDesiredWidth('15');
     * const w1 = LayoutHelper.getDesiredWidth(node); // So, w1==15.
     * node.setDesiredWidth('15%');
     * const w2 = LayoutHelper.getDesiredWidth(node, 200); // So, w2==30.
     * ```
     * @param node layoutable component
     * @param totalWidth parent width of the container or layoutable area
     */
    static getDesiredWidth(node: ILayoutable, totalWidth: number): number;
    /**
     * Converts desired height of the "node" layoutable component to {number} if possible
     * @example
     * ```javascript
     * node.setDesiredHeight('15');
     * const h1 = LayoutHelper.getDesiredHeight(node); // So, h1==15.
     * node.setDesiredHeight('15%');
     * const h2 = LayoutHelper.getDesiredHeight(node, 200); // So, h2==30.
     * ```
     * @param node layoutable component
     * @param totalHeight parent height of the container or layoutable area
     */
    static getDesiredHeight(node: ILayoutable, totalHeight: number): number;
    /**
     * Returns left margin
     * @param node layoutable component
     * @param totalWidth parent width of the container or layoutable area
     */
    static getLeftMargin(node: ILayoutable, totalWidth?: number): number;
    /**
     * Returns right margin
     * @param node layoutable component
     * @param totalWidth parent width of the container or layoutable area
     */
    static getRightMargin(node: ILayoutable, totalWidth?: number): number;
    /**
     * Returns top margin
     * @param node layoutable component
     * @param totalHeight parent height of the container or layoutable area
     */
    static getTopMargin(node: ILayoutable, totalHeight?: number): number;
    /**
     * Returns bottom margin
     * @param node layoutable component
     * @param totalHeight parent height of the container or layoutable area
     */
    static getBottomMargin(node: ILayoutable, totalHeight?: number): number;
    /**
     * Gets the Maximum Height of layoutable component
     * @param node layoutable component
     * @param totalHeight parent height of the container or layoutable area
     */
    static getDesiredMaxHeight(node: ILayoutable, totalHeight?: number): number;
    /**
     * Gets the Minimum Height of layoutable component
     * @param node layoutable component
     * @param totalHeight parent height of the container or layoutable area
     */
    static getDesiredMinHeight(node: ILayoutable, totalHeight?: number): number;
    /**
     * Gets the Maximum Width of layoutable component
     * @param node layoutable component
     * @param totalWidth parent width of the container or layoutable area
     */
    static getDesiredMaxWidth(node: ILayoutable, totalWidth?: number): number;
    /**
     * Gets the Minimum Width of layoutable component
     * @param node layoutable component
     * @param totalWidth parent width of the container or layoutable area
     */
    static getDesiredMinWidth(node: ILayoutable, totalWidth?: number): number;
    /**
     * Update layout style preferred size based on size constrains from calculated size
     * @param style style to be updated
     * @param rect desired rect to layout
     */
    static getPreferredStyle(style: LayoutStyle, rect?: Rect | Dimension): LayoutStyle;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     * @param item item
     * @param propagate propagate invalidate layout to parent
     */
    static invalidateParentLayout(item: Node, propagate?: boolean): void;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     * @param item item
     * @param propagate propagate invalidate layout to parent
     */
    static invalidateLayout(item: Node, propagate?: boolean): void;
    /**
     * Sets desired size of text group, depends on text metrics
     * @param text text
     * @param groupText group with this text
     * @param location location of text
     */
    static setDesiredTextSize(text: Text, groupText: Group, location: AnnotationLocation): void;
}
