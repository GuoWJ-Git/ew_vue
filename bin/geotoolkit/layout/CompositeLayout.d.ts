import {Layout} from './Layout';
import {Rect} from '../util/Rect';
import {Node} from '../scene/Node';
import {Iterator} from '../util/iterator';

/**
 * Defines a container of layouts
 */
export class CompositeLayout extends Layout {
    /**
     * Defines a container of layouts
     */
    constructor();
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: CompositeLayout): void;
    /**
     * Return the preferable size of children. It returns an union of all children
     * @param rect desired rect to layout
     * @param targets array of nodes supposed to layout
     */
    getPreferredSize(rect: Rect, targets?: Node[]): Rect;
    /**
     * Return index of child
     * ( index of the specified child or -1 if layout is not found)
     * @param layout layout to check index
     */
    indexOfChild(layout: Layout): number;
    /**
     * Insert child layout at specified index
     * @param index specified index
     * @param layout a child layout to add
     */
    insertChild(index: number, layout: Layout): this;
    /**
     * Add a child layout(s)
     * @param layout the child layout to be added
     */
    add(layout: Layout | Layout[]): this;
    /**
     * Return iterator by child layouts
     * @param filter a filter function. Returns all layouts if null
     */
    getChildren(filter?: Function): Iterator;
    /**
     * Remove child layout
     * @param layout layout to be removed
     */
    removeChild(layout: Layout): this;
    /**
     * Remove all child layouts from this composite layout
     */
    clearChildren(): void;
    /**
     * Return layout by index
     * @param i index of the layout
     */
    getChild(i: number): Layout;
    /**
     * Return number of child layouts
     */
    getChildrenCount(): number;
}
