import {IParser} from './IParser';
import {IElementsRegistry} from './IElementsRegistry';

/**
 * DOM parser, class to convert standard DOM to geotoolkit report DOM
 */
export class DOMParser implements IParser {
    /**
     * DOM parser, class to convert standard DOM to geotoolkit report DOM
     * @param xmlDocument 
     * @param options options
     * @param options.elements registry to resolve custom DOM elements
     */
    constructor(xmlDocument: string | Document, options?: object | { elements?: IElementsRegistry | null; } );
    /**
     * Parses the given XML document
     * @param xml The document to parse
     * @param registry dom element registry
     */
    static parse(xml?: string | Document, registry?: IElementsRegistry): Promise<any>;
    /**
     * Parse the given XML document
     * @param doc The document to parse
     * @param registry dom element registry
     */
    parse(doc?: string | Document, registry?: IElementsRegistry): Promise<any>;
}
