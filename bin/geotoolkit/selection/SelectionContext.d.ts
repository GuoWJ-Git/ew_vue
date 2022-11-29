import {RenderingContext} from '../renderer/RenderingContext';
import {Node} from '../scene/Node';

/**
 * Define a base selection context to be used for picking strategies
 */
export class SelectionContext extends RenderingContext {
    /**
     * Define a base selection context to be used for picking strategies
     */
    constructor();
    /**
     * Check selection of node and call onselect if node is selected
     * @param node node to pick
     * @param listener function to be called on select
     */
    pick(node: Node, listener: Function): void;
    /**
     * Push selection
     * @param selection selected object
     */
    pushSelection(selection: any): this;
}
