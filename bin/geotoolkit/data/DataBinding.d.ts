import {Node} from '../scene/Node';

/**
 * Define DataBinding
 */
export class DataBinding {
    /**
     * Define DataBinding
     */
    constructor();
    /**
     * Check if connector accepts node
     * @param node instance to apply the databinding to
     */
    accept(node: Node): boolean;
    /**
     * Bind data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    bind(node: Node, data: any): void;
    /**
     * Unbind data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    unbind(node: Node, data: any): void;
}
