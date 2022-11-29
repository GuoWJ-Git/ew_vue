import {SerializationContext} from './SerializationContext';
import {Registry} from './Registry';

/**
 * The serialization context to XML
 */
export class XmlSerializationContext extends SerializationContext {
    /**
     * The serialization context to XML
     * @param doc doc
     * @param node node
     * @param owner owner
     * @param registry registry
     * @param state state
     */
    constructor(doc: Document, node?: Node, owner?: any, registry?: Registry, state?: any);
    /**
     * Commit changes
     */
    commit(): void;
    /**
     * Return a result of the  serialization to Node
     */
    getNode(): any;
}
