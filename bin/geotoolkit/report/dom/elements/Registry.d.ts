import {IElementsRegistry} from '../IElementsRegistry';
import {Element} from '../Element';

/**
 * Define a registry of DOM element.
 */
export class Registry implements IElementsRegistry {
    /**
     * Define a registry of DOM element.
     */
    constructor();
    /**
     * Register an element constructor
     * @param nodeName node name
     * @param constructor to register
     */
    register(nodeName: string, constructor: Function): this;
    /**
     * Register element
     * @param nodeName node name
     */
    unregister(nodeName: string): this;
    /**
     * Create a copy of Registry
     */
    clone(): Registry;
    /**
     * Return default instance of the DOM elements Registry
     */
    static getDefaultInstance(): Registry;
    /**
     * Check if registry can create specific element
     * @param tagName element name
     */
    hasElement(tagName: string): boolean;
    /**
     * Create specific element
     * @param tagName element name
     * @param options of element
     */
    createElement(tagName: string, options: object): Element;
}
