import {DeserializationContext} from './DeserializationContext';

/**
 * The deserialization context to Memento
 */
export class MementoDeserializationContext extends DeserializationContext {
    /**
     * The deserialization context to Memento
     * @param memento memento
     * @param registry registry
     * @param state state
     */
    constructor(memento?: any, registry?: any, state?: any);
    /**
     * Get value
     * @param name name of the property
     * @param type optional type
     * @param dest destination object
     */
    getValue(name: string, type?: string, dest?: any): any;
    /**
     * Gets memento associated with context
     */
    getMemento(): any;
}
