import {IElementsRegistry} from './IElementsRegistry';

/**
 * Define elements parser interface
 */
export abstract class IParser {
    /**
     * Parse the given XML document
     * @param doc The document to parse
     * @param registry dom element registry
     */
    abstract parse(doc?: string | Document, registry?: IElementsRegistry): Promise<any>;
}
