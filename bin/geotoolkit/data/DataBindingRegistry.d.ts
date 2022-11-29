import {DataBinding} from './DataBinding';
import {Node} from '../scene/Node';

/**
 * Define DataBindingRegistry
 */
export class DataBindingRegistry extends DataBinding {
    /**
     * Define DataBindingRegistry
     */
    constructor();
    /**
     * Add a data connector
     * @param connector binding between node and data
     */
    add(connector: DataBinding): this;
    /**
     * Return connector by index
     * @param i index of the node
     */
    getConnector(i: number): DataBinding;
    /**
     * Return number of connectors
     */
    getCount(): number;
    /**
     * Remove data connector
     * @param connector binding between node and data
     */
    remove(connector: DataBinding): this;
    /**
     * Check if binding accept node
     * @param node node to check
     */
    accept(node: Node): boolean;
    /**
     * Unbind data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    bind(node: Node, data: any): void;
    /**
     * Disconnect data
     * @param node instance to apply the databinding to
     * @param data data to bind to the node
     */
    unbind(node: Node, data: any): void;
    /**
     * Return default instance of the registry
     */
    static getInstance(): DataBindingRegistry;
}
