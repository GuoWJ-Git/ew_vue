import {AbstractTextElement} from './AbstractTextElement';
import {IPhrasingContainer} from './IPhrasingContainer';
import {AnchorType} from '../../../util/AnchorType';

/**
 * Text  element
 */
export class Text extends AbstractTextElement implements IPhrasingContainer {
    /**
     * Text  element
     * @param options The options
     */
    constructor(options?: object);
    /**
     * Return text alignment type
     */
    getAlignment(): AnchorType;
    /**
     * Sets the text alignment type.
     * @param alignment text alignment type
     */
    setAlignment(alignment: AnchorType): this;
    /**
     * Return text value
     */
    getText(): string | null;
}
