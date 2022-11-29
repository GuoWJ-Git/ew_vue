import {DeserializationContext} from './DeserializationContext';
import {Registry} from './Registry';

/**
 * The deserialization context from XML
 */
export class XmlDeserializationContext extends DeserializationContext {
    /**
     * The deserialization context from XML
     * @param node node
     * @param owner owner
     * @param registry registry
     * @param state state
     */
    constructor(node?: Node, owner?: any, registry?: Registry, state?: any);
}
