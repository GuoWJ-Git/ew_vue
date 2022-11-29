import {ContainerElement} from './ContainerElement';
import {IPhrasingContainer} from './IPhrasingContainer';
import {VerticalAlign} from '../css/VerticalAlign';
import {VerticalAlignment} from '../../../util/VerticalAlignment';
import {AnchorType} from '../../../util/AnchorType';

/**
 * Span is a text container element
 */
export class Span extends ContainerElement implements IPhrasingContainer {
    /**
     * Span is a text container element
     * @param options properties object
     * @param options.verticalalign vertical alignment type
     */
    constructor(options?: object | { verticalalign?: VerticalAlign; } );
    /**
     * Return vertical alignment type
     */
    getVerticalAlign(): VerticalAlign | null;
    /**
     * Set vertical element alignment type
     * @param verticalAlign vertical alignment type
     */
    setVerticalAlign(verticalAlign: VerticalAlignment): this;
    /**
     * Return text alignment type
     * @deprecated since 2021 (3.3) use .getVerticalAlign() instead
     */
    getAlignment(): AnchorType;
    /**
     * Sets the text alignment type.
     * @deprecated since 2021 (3.3) use .setVerticalAlign() instead
     * @param alignment text alignment type
     */
    setAlignment(alignment: AnchorType): this;
    /**
     * Return text value
     */
    getText(): string | null;
    /**
     * Gets the properties
     */
    getProperties(): {verticalalign: VerticalAlign | null} | any;
    /**
     * Sets the element properties
     * @param props properties object
     * @param props.verticalalign vertical alignment type
     */
    setProperties(props: object | { verticalalign?: VerticalAlign | string | any; } ): this;
}
