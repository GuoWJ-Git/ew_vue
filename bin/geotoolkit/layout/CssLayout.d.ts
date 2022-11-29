import {Layout} from './Layout';
import {ILayoutable} from './ILayoutable';
import {Rect} from '../util/Rect';
import {Node} from '../scene/Node';

/**
 * Implements simple css layout (in absolute values)
 */
export class CssLayout extends Layout {
    /**
     * Implements simple css layout (in absolute values)
     */
    constructor();
    /**
     * Return Default CSS Layout
     */
    static getDefault(): CssLayout;
    /**
     * Add item to be layout
     * @param item item to add to layout
     */
    add(item: ILayoutable): this;
    /**
     * Add additional item to be layout
     * @param item item to add to layout
     */
    remove(item: ILayoutable): this;
    /**
     * Performs layout operation
     * @param rect desired rect to layout
     * @param targets of nodes supposed to layout
     */
    layout(rect: Rect, targets: Node[]): this;
    /**
     * Return the preferable size of children. Default implementation returns null
     * @param rect desired rect to layout
     * @param targets array of nodes supposed to layout
     */
    getPreferredSize(rect: Rect, targets?: Node[]): Rect;
}
