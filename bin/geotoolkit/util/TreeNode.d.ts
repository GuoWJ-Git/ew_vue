import {Iterator} from './iterator';

/**
 * TreeNode representation
 */
export class TreeNode {
    /**
     * TreeNode representation
     * @param data data
     * @param parent parent tree node
     */
    constructor(data: any, parent: TreeNode | null);
    /**
     * Gets parent
     */
    getParent(): this | null;
    /**
     * Removes child if available
     * @param child child
     */
    removeChild(child: TreeNode): this;
    /**
     * Add child
     * @param child child
     */
    addChild(child: TreeNode): this;
    /**
     * Gets iterator over childrens' tree nodes
     */
    getChildren(): Iterator;
    /**
     * Gets tree node data
     */
    getData(): any;
}
