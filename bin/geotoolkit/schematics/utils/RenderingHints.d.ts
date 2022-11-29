import {ComponentNode} from '../scene/ComponentNode';

/**
 * Abstract class to formalize rendering hints
 */
export class RenderingHints {
    /**
     * Abstract class to formalize rendering hints
     */
    constructor();
    /**
     * Applies rendering hints
     * @param schematics component
     */
    apply(schematics: ComponentNode): void;
    /**
     * Saves default rendering state
     * @param schematics component
     */
    saveDefaults(schematics: ComponentNode): any;
    /**
     * Restores default rendering state
     * @param schematics component
     * @param defaults default rendering state
     */
    restoreDefaults(schematics: ComponentNode, defaults: any): void;
}
