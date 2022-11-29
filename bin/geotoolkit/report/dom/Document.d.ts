import {Element} from './Element';
import {IParser} from './IParser';
import {StyleSheetList} from './css/StyleSheetList';
import {CssStyleSheet} from './css/CssStyleSheet';
import {Document as ElementsDocument} from './elements/Document';
import {Body} from './elements/Body';
import {IElementsRegistry} from './IElementsRegistry';
import {Attribute} from './Attribute';

/**
 * Document
 */
export class Document extends Element {
    /**
     * Document
     * @param options The options
     * @param options.parser document parser
     */
    constructor(options?: object | { parser?: IParser | null; } );
    /**
     * Returns a live {geotoolkit.report.dom.css.StyleSheetList} which maintains an up-to-date list of the {geotoolkit.report.dom.css.CssRule} objects that comprise the stylesheet.
     */
    styleSheets: StyleSheetList;
    /**
     * Returns clone array of a live {geotoolkit.report.dom.css.CssStyleSheet} collection which contains application specific CssStyleSheets
     * Note: .adoptedStyleSheets can accept standard window.CssStyleSheet objects as well, but keep in mind that those kind of objects will be converted, and you will not be able to use it after
     * also, all Carnac specific styles will be lost, or converted, if standard CssStyleSheet can not recognise it
     * for example {border: 1px [pattern] color;}
     * @example
     * ```javascript
     * import {CssStyleSheet} from '@int/geotoolkit/report/dom/css/CssStyleSheet';
     * const sheet = new CssStyleSheet();
     * sheet.replaceSync('a { color: red; }');
     * // Combine existing sheets with our new one:
     * document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
     * ```
     */
    adoptedStyleSheets: CssStyleSheet[];
    /**
     * Lock document
     */
    public lock(): this;
    /**
     * Unlock document
     */
    public unlock(): this;
    /**
     * DOM Document root element
     */
    documentElement: ElementsDocument;
    /**
     * Return DOM root element
     */
    getDocumentElement(): ElementsDocument;
    /**
     * DOM Document root element
     */
    head: Element;
    /**
     * DOM Document body element
     */
    body: Body;
    /**
     * Create new element with specified tag name
     * @param options tag name or option
     * @param elementRegistry shadow registry
     */
    createElement(options: string | any, elementRegistry: IElementsRegistry | any): Element;
    /**
     * Create new Attribute
     * @param options or attribute name
     */
    createAttribute(options: string | object): Attribute;
}
