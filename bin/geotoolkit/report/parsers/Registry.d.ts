import {ElementParser} from './ElementParser';

/**
 * Define a registry of element parsers.
 */
export class Registry {
    /**
     * Define a registry of element parsers.
     */
    constructor();
    /**
     * Returns default parser to be used if parser is not found for node
     */
    getDefaultParser(): ElementParser;
    /**
     * Set default parser to be used if parser is not found for node
     * @param parser parser
     */
    setDefaultParser(parser: ElementParser): this;
    /**
     * Register an instance of a parser
     * @param parser parser instance or element constructor
     * @param node node name or node DOM type
     * @param nodeType node type
     */
    register(parser: ElementParser | Function, node?: string | Function, nodeType?: number): this;
    /**
     * Unregister an instance of parser
     * @param nodeName node name
     * @param nodeType node type
     */
    unregister(nodeName: string, nodeType?: number): this;
    /**
     * Return parser by tag name
     * @param node node
     */
    getParser(node: string | Node): ElementParser;
    /**
     * Return default instance of the parsers Registry
     */
    static getDefaultInstance(): Registry;
}
