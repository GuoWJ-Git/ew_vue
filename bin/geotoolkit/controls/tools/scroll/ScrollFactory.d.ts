import {AbstractScroll} from './AbstractScroll';

/**
 * Scroll factory
 * This factory registers a name-function pair.
 * the function is responsible for creating an instance of a scrollbar which inherits from
 * geotoolkit.controls.tools.scroll.AbstractScroll, and returns it
 */
export class ScrollFactory {
    /**
     * Scroll factory
     * This factory registers a name-function pair.
     * the function is responsible for creating an instance of a scrollbar which inherits from
     * geotoolkit.controls.tools.scroll.AbstractScroll, and returns it
     */
    constructor();
    /**
     * Get instance
     */
    static getInstance(): ScrollFactory;
    /**
     * Register scrollbar
     * @param name class name or unique name
     * @param constructor function which instantiates the required scrollbar
     */
    registerScrollbar(name: string, constructor: Function): this;
    /**
     * Get scrollbar
     * @param name class name
     * @param options for the scrollbar requested. Must include 'modellimits' and 'visiblelimits'
     */
    getScrollbar(name: string, options: any): AbstractScroll;
}
