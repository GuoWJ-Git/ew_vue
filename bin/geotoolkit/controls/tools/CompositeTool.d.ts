import {AbstractCompositeTool} from './AbstractCompositeTool';
import {CompositeNode} from '../../scene/CompositeNode';
import {Group} from '../../scene/Group';

/**
 * Composite tool.
 */
export class CompositeTool extends AbstractCompositeTool {
    /**
     * Composite tool.
     * @param node associated with layer to display temporary shapes or properties object
     * @param node.node associated with layer to display temporary shapes
     * @param name name of the tool
     */
    constructor(node?: CompositeNode | object | { node?: CompositeNode; } , name?: string);
    /**
     * Returns node associated with manipulator.
     */
    getNode(): Group;
    /**
     * Sets node associated with manipulator
     * @param node node
     */
    setNode(node: Group): this;
}
