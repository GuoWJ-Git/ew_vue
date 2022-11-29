import {Element} from './Element';

/**
 * Define elements registry interface
 */
export abstract class IElementsRegistry {
    /**
     * Check if registry can create specific element
     * @param tagName element name
     */
    abstract hasElement(tagName: string): boolean;
    /**
     * Create specific element
     * @param tagName element name
     * @param options of element
     */
    abstract createElement(tagName: string, options: object): Element;
}
