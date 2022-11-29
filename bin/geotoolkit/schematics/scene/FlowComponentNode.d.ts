import {RegularComponentNode} from './RegularComponentNode';

/**
 * Abstract base class for a component node implementation with "flow" support.
 */
export class FlowComponentNode extends RegularComponentNode {
    /**
     * Abstract base class for a component node implementation with "flow" support.
     * @param options 
     */
    constructor(options?: object);
    /**
     * Show flow
     */
    showFlow(): void;
    /**
     * Delete all flow children
     */
    hideFlow(): void;
}
