import {Span} from './Span';
import {IPhrasingContainer} from './IPhrasingContainer';

/**
 * Label is a text container element binded to another element
 */
export class Label extends Span implements IPhrasingContainer {
    /**
     * Label is a text container element binded to another element
     * @param options properties object
     * @param options.for properties binding object id
     */
    constructor(options?: object | { for?: string | null; } );
    /**
     * Return target element reference id
     */
    for: string;
    /**
     * Return target element reference id
     */
    getFor(): string | null;
    /**
     * Set element reference id
     * @param forId element reference id
     */
    setFor(forId: string | null): this;
    /**
     * Sets the element properties
     * @param props properties object
     * @param props.for element reference id
     */
    setProperties(props: object | { for?: string | null; } ): this;
}
