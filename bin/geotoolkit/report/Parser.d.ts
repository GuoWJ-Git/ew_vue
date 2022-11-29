import {EventDispatcher} from '../util/EventDispatcher';
import {Document} from './dom/Document';
import {Registry} from './parsers/Registry';
import {Registry as ElementsRegistry} from './dom/elements/Registry';
import {IResourceManager} from './resources/IResourceManager';

/**
 */
export class Parser extends EventDispatcher {
    /**
     * @param xmlDocument 
     * @param options additional options
     * @param options.parsers DOM Elements parsers
     * @param options.elements DOM elements registry
     * @param options.resourcemanager external resource resolver
     */
    constructor(xmlDocument: string | Document, options?: object | { parsers?: Registry | null; elements?: ElementsRegistry | null; resourcemanager?: IResourceManager | null; } );
    /**
     * Set Resource Manager instance
     * @param resourceManager resource manager
     */
    setResourceManager(resourceManager: IResourceManager): this;
    /**
     * Return Resource Manager instance
     */
    getResourceManager(): IResourceManager;
    /**
     * Parses the given XML document
     * @param doc The document to parse
     * @param registry DOM elements registry
     */
    static parse(doc?: string | Document, registry?: ElementsRegistry): Promise<any>;
    /**
     * Parses the given XML document
     * @param doc The document to parse
     * @param registry DOM element registry
     */
    parse(doc?: string | Document, registry?: ElementsRegistry): Promise<any>;
}
