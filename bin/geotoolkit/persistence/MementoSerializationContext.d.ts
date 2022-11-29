import {SerializationContext} from './SerializationContext';
import {Registry} from './Registry';

/**
 * The serialization context to Memento
 */
export class MementoSerializationContext extends SerializationContext {
    /**
     * The serialization context to Memento
     * @param object object
     * @param registry registry
     * @param state state
     */
    constructor(object?: any, registry?: Registry, state?: any);
    /**
     * Add reference to the object
     * @param obj object to get reference
     * @param memento serialized view of object
     */
    addReference(obj: any, memento?: any): number;
    /**
     * Get serialized view of object by reference id
     * @param id reference id
     */
    getReference(id: number): any;
    /**
     * Commits changes
     */
    commit(): void;
    /**
     * Gets a result of the serialization to memento
     */
    getMemento(): any;
}
