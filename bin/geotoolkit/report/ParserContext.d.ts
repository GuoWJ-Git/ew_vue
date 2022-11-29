import {Parser} from './Parser';
import {Registry} from './parsers/Registry';
import {IResourceManager} from './resources/IResourceManager';
import {Node} from '../scene/Node';
import {Layout} from '../layout/Layout';
import {LayoutStyle} from '../layout/LayoutStyle';

/**
 */
export class ParserContext {
    /**
     * @param parser 
     * @param parent context
     * @param node xml node
     */
    constructor(parser: Parser, parent: ParserContext, node: Node);
    /**
     * Return xml node
     */
    getNode(): Node;
    /**
     * Returns active parsers registry
     */
    getRegistry(): Registry;
    /**
     * Set element parsers registry for parser context
     * @param registry parsers registry
     */
    setRegistry(registry: Registry): this;
    /**
     * Register loadable resource
     * @param resource loadable resource
     */
    registerResource(resource?: any): this;
    /**
     * Resolve resource
     * @param resource loadable resource
     */
    resolveResource(resource?: any): this;
    /**
     */
    getResourceManager(): IResourceManager;
    /**
     * Return parent context
     */
    getParent(): ParserContext;
    /**
     * Return geotoolkit node
     */
    getElement(): Node;
    /**
     * Set geotoolkit node
     * @param element element
     */
    setElement(element: Node): this;
    /**
     * Set geotoolkit content node
     * @param content content
     */
    setContent(content: Node): this;
    /**
     * Return geotoolkit content node
     */
    getContent(): Node;
    /**
     * Return preferred layout
     * @deprecated since 2020.1 (3.1), obsolete
     */
    getLayout(): Layout;
    /**
     * Set preferred layout
     * @deprecated since 2020.1 (3.1), obsolete
     * @param layout layout
     */
    setLayout(layout: Layout): this;
    /**
     * Return preferred layout style
     * @deprecated since 2020.1 (3.1), obsolete
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Set preferred layout style
     * @deprecated since 2020.1 (3.1), obsolete
     * @param layoutStyle layoutStyle
     */
    setLayoutStyle(layoutStyle: object | LayoutStyle): this;
    /**
     * Parse child node
     * @param childNode childNode
     */
    parseChild(childNode: Node): Node;
}
