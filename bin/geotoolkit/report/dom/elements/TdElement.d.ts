import {ContainerElement} from './ContainerElement';
import {IElementContainer} from './IElementContainer';
import {VerticalAlign} from '../css/VerticalAlign';
import {AnchorType} from '../../../util/AnchorType';
import {TrElement} from './TrElement';
import {TableElement} from './TableElement';

/**
 * Td is a container element
 */
export class TdElement extends ContainerElement implements IElementContainer {
    /**
     * Td is a container element
     * @param options The options
     * @param options.verticalalign vertical alignment type
     */
    constructor(options?: object | { verticalalign?: VerticalAlign; } );
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
     * Return Tr element
     */
    getTrElement(): TrElement;
    /**
     * Return Table element
     */
    getTableElement(): TableElement;
    /**
     * Return text value
     */
    getText(): string | null;
    /**
     * Gets element properties
     */
    getProperties(): {verticalalign: VerticalAlign | null} | any;
    /**
     * Sets the element properties
     * @param props props
     * @param props.verticalalign vertical alignment type
     */
    setProperties(props: object | { verticalalign?: VerticalAlign | string | any; } ): this;
}
