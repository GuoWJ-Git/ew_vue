import {TreeNode} from './TreeNode';

/**
 * Basic tree representation
 */
export class Tree {
    /**
     * Basic tree representation
     * @param root root
     */
    constructor(root?: TreeNode);
    /**
     * Gets root
     */
    getRoot(): TreeNode | null;
    /**
     * Adds child tree node with "data" to parent's tree node with "toNodeData"
     * @param data data
     * @param toNodeData parent's tree node data
     * @param equal data comparator
     */
    add(data: any, toNodeData?: any, equal?: Function): this;
    /**
     * Removes child tree node with "data"
     * @param data data
     */
    remove(data: any): this;
    /**
     * Check if the tree contains data
     * @param data data
     * @param equal data comparator
     */
    contains(data: any, equal?: Function): boolean;
    /**
     * Searches for tree node with "data" (starting with root node)
     * @param data data
     * @param equal data comparator
     */
    findBFS(data: any, equal?: Function): TreeNode | null;
    /**
     * Traverses with Depth First Search
     * @param visitor tree node visitor
     * @param preOrder preOrder flag
     * @param options options
     */
    traverseDFS(visitor: Function, preOrder?: boolean, options?: any): this;
    /**
     * Traverses with Breadth First Search
     * @param visitor tree node visitor
     * @param options options
     */
    traverseBFS(visitor: Function, options?: any): this;
    /**
     * Returns a string representation of this object meaning<br>
     * @param dataToString data-to-string representation
     */
    toString(dataToString?: Function): string;
}
