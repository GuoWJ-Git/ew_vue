import {NodeParser} from '../parsers/NodeParser';
import {Element} from '../dom/Element';
import {ElementStyle} from './styles/ElementStyle';
import {Rect} from '../../util/Rect';
import {Dimension} from '../../util/Dimension';

/**
 * Define an object that represents the report element
 */
export abstract class IElement {
    /**
     * Returns DOM element parser
     */
    abstract getElementParser(): NodeParser;
    /**
     * Set DOM element parser
     * @param element DOM element parser
     */
    abstract setElementParser(element: NodeParser): this;
    /**
     * Returns DOM element
     */
    abstract getDomElement(): Element;
    /**
     * Set DOM element
     * @param element DOM element
     */
    abstract setDomElement(element: Element): this;
    /**
     * Returns element style
     * @param elementStyle element style
     */
    abstract getElementStyle(elementStyle?: ElementStyle): ElementStyle | string;
    /**
     * Set element style
     * @param elementStyle 
     * @param styleValue 
     */
    abstract setElementStyle(elementStyle: ElementStyle | string, styleValue?: object): this;
    /**
     * Return preferred layout
     * @param layout 
     * @param layout.width 
     * @param layout.height 
     */
    abstract getPreferredLayout(layout?: Rect | Dimension | object | { width?: number; height?: number; } ): object;
}
