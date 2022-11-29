import {Transformation} from '../util/Transformation';
import {Node} from '../scene/Node';
import {Rect} from '../util/Rect';
import {Point} from '../util/Point';

/**
 * Defines node selection. This class provides the logic to do shape selection using device coordinates.<br>
 * It implements several algorithms to perform different types of selection:
 * <ul>
 * <li> By point: At a given point with an optional radius </li>
 * <li> By rect: In a given rectangle </li>
 * <li> By polygon: In a given arbitrary polygon </li>
 * </ul>
 *  The picking algorithm implemented in this Selector emulates 'rendering' to perform the selection and find the shape(s) at the given coordinates.<br>
 *  Selection returns multiple objects in the current position.
 * @example
 * ```javascript
 * // following code show how to get the names of the selected items.
 * // The method 'select' returns an array of selected objects. Also it has a radius of selection. In this code is 5 pixels.
 * import {Selector} from '@int/geotoolkit/selection/Selector';
 * ...
 * const selector = new Selector();
 * const radius = 5;
 * const select = selector.select(widget, pt.x, pt.y, radius);
 * if (select == null) return;
 * for (let i = 0; i < select.length; i++) {
 *      console.log(select[i].getName());
 * }
 * ```
 */
export class Selector {
    /**
     * Defines node selection. This class provides the logic to do shape selection using device coordinates.<br>
     * It implements several algorithms to perform different types of selection:
     * <ul>
     * <li> By point: At a given point with an optional radius </li>
     * <li> By rect: In a given rectangle </li>
     * <li> By polygon: In a given arbitrary polygon </li>
     * </ul>
     *  The picking algorithm implemented in this Selector emulates 'rendering' to perform the selection and find the shape(s) at the given coordinates.<br>
     *  Selection returns multiple objects in the current position.
     * @param transformation transformation from current node to plot (device). It is equal
     * to node.getParent().getSceneTransform(). If a root node is used as a start node then it is not necessary
     * to specify transformation.
     */
    constructor(transformation?: Transformation);
    /**
     * Set selection hints
     * @param selectionHints hints
     */
    setSelectionHints(selectionHints: any): this;
    /**
     * Get clone of current selection hints
     */
    getSelectionHints(): any;
    /**
     * Select node in the current point OR in the polygonal area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @example
     * ```javascript
     * // The selector returns visuals in the order in which they are rendered.  If user wants to select visuals that were rendered last, just reverse the order of the selected nodes.
     * const nodes = selector.select(widget, pt.x, pt.y, 2).reverse();
     * ```
     * @param root node to be used for selection.
     * @param p1 x-coordinate of the selection point OR x-coordinates of the selection polygon OR a selection rectangle.
     * @param p2 y-coordinate of the selection point OR y-coordinates of the selection polygon.
     * @param p3 selection radius OR "allow intersection" flag
     * @param p4 even odd mode for polygonal selection
     */
    select(root: Node, p1: number | any[] | Rect, p2: number | any[], p3: number | boolean, p4?: boolean): Node[];
    /**
     * Select node in the current point OR in the polygonal area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param callback selection callback
     * @param root node to be used for selection.
     * @param p1 x-coordinate of the selection point OR x-coordinates of the selection polygon OR a selection rectangle OR center point.
     * @param p2 y-coordinate of the selection point OR y-coordinates of the selection polygon OR radius (in case if p1 is geotoolkit.util.Point).
     * @param p3 selection radius OR "allow intersection" flag
     * @param p4 even odd mode for polygonal selection
     */
    asyncSelect(callback: Function, root: Node, p1: number | any[] | Rect | Point, p2?: number | any[], p3?: number | boolean, p4?: boolean): void;
    /**
     * Sets current transformation
     * @param transformation transformation from current node to device
     */
    setTransformation(transformation: Transformation): this;
    /**
     * Gets current transformation
     */
    getTransformation(): Transformation;
    /**
     * This is a helper method to select node in the current point. This method starts selection
     * from the specified node. Coordinates provided are in the parent node coordinate system or
     * device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param p1 x-coordinate of the selection point OR x-coordinates of the selection polygon OR a selection rectangle.
     * @param p2 y-coordinate of the selection point OR y-coordinates of the selection polygon.
     * @param p3 selection radius OR "allow intersection" flag
     * @param p4 even odd mode for polygonal selection
     */
    static select(root: Node, p1: number | any[] | Rect, p2?: number | any[], p3?: number | boolean, p4?: boolean): Node[];
}
