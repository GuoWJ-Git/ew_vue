import {Node} from './Node';

/**
 * The NodeList interface represents an iterable collection of {@link @int/geotoolkit/report/dom/Node.Node} objects.<br>
 */
export class NodeList {
    /**
     * The NodeList interface represents an iterable collection of {@link @int/geotoolkit/report/dom/Node.Node} objects.<br>
     * @param nodeList list of nodes
     */
    constructor(nodeList?: Node[]);
    /**
     * Returns the {@link @int/geotoolkit/report/dom/Node.Node} at the given index, or null if the index is higher or equal to the number of nodes.
     * @param index of named item
     */
    item(index: number): Node;
    /**
     * Returns index of node.
     * @param node item to get index of
     */
    indexOf(node: Node): number;
    /**
     * Returns the amount of objects in the map.
     */
    length: number;
}
