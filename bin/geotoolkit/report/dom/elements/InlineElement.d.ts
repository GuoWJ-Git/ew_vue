import {Element} from '../Element';

/**
 * Text  element
 */
export class InlineElement extends Element {
    /**
     * Text  element
     * @param options The options
     */
    constructor(options?: object);
    /**
     * Return text value
     */
    getText(): string | null;
}
