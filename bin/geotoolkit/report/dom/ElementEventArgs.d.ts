import {BaseEventArgs} from '../../controls/tools/BaseEventArgs';
import {Element} from './Element';

/**
 * Element event args
 */
export class ElementEventArgs extends BaseEventArgs {
    /**
     * Element event args
     * @param eventName name of the event
     */
    constructor(eventName: string);
    /**
     * Set parent element
     * @param parentElement parent element
     */
    setParentElement(parentElement: Element): this;
    /**
     * Get parent element
     */
    getParentElement(): Element;
    /**
     * Set element
     * @param element element
     */
    setElement(element: Element): this;
    /**
     * Get element
     */
    getElement(): Element;
    /**
     * Cancel event
     */
    cancel(): this;
}
