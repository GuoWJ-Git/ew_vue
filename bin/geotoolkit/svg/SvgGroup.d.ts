import {Group} from '../scene/Group';
import {Rect} from '../util/Rect';
import {Node, StateChanges} from '../scene/Node';
import {Iterator} from '../util/iterator';

/**
 * A group which expands bounds to fits its children. Used to mimic the behavior of SVG Groups and
 * avoid failing checkCollision when the children transform into scene
 */
export class SvgGroup extends Group {
    /**
     * A group which expands bounds to fits its children. Used to mimic the behavior of SVG Groups and
     * avoid failing checkCollision when the children transform into scene
     * @param options options
     * @param options.verticalFlip vertical axis goes from bottom to top
     * @param options.horizontalFlip horizontal axis goes from right to left
     * @param options.modelLimits define inner model coordinates of the group
     * @param options.bounds define position of the group in the parent
     * @param options.children the child nodes to be added
     */
    constructor(options?: object | { verticalFlip?: boolean; horizontalFlip?: boolean; modelLimits?: Rect | any; bounds?: Rect | any; children?: Node | Node[] | Iterator; } );
    /**
     * Adds a child and subscribes to its bounds and transformation changes
     * @param node node or array of nodes to be added
     */
    addChild(node: Node | Node[]): this;
    /**
     * Insert child node at specified index
     * @param index specified index
     * @param node a child node to add
     */
    insertChild(index: number, node: Node): this;
    /**
     * Removes a child and unsubscribes from bounds and transformation change events
     * @param node node or array of nodes to be removed
     */
    removeChild(node: Node | Node[]): this;
    /**
     * Mark this group to be updated.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Remove all child nodes from this composite group
     * @param disposeChildren automatically dispose children. If it is
     * true then method dispose is called for each child.
     */
    clearChildren(disposeChildren?: boolean): this;
}
