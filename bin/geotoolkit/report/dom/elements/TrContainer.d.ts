import {AbstractTextElement} from './AbstractTextElement';
import {ITrContainer} from './ITrContainer';
import {VerticalAlign} from '../css/VerticalAlign';
import {TableElement} from './TableElement';
import {VerticalAlignment} from '../../../util/VerticalAlignment';

/**
 * Table rows container element
 */
export class TrContainer extends AbstractTextElement implements ITrContainer {
    /**
     * Table rows container element
     * @param options The options
     */
    constructor(options?: object);
    /**
     * Return vertical alignment type
     */
    getVerticalAlign(): VerticalAlign | null;
    /**
     * Set vertical alignment type
     * @param verticalAlign vertical alignment type
     */
    setVerticalAlign(verticalAlign: VerticalAlign | any): this;
    /**
     * Return Table element
     */
    getTableElement(): TableElement;
    /**
     * Sets the element properties
     * @param props props
     * @param props.verticalalign vertical alignment type
     */
    setProperties(props: object | { verticalalign?: VerticalAlignment | string; } ): this;
}
