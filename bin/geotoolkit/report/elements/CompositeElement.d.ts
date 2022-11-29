import {Element} from './Element';
import {IElement} from './IElement';
import {IWireElement} from './IWireElement';
import {ElementContent} from './ElementContent';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {NodeParser} from '../parsers/NodeParser';
import {Element as DomElement} from '../dom/Element';
import {ElementStyle} from './styles/ElementStyle';

/**
 * Define representation of Composite DOM element
 */
export class CompositeElement extends Element implements IElement, IWireElement {
    /**
     * Define representation of Composite DOM element
     * @param options options object
     */
    constructor(options?: object | ElementContent);
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
}
