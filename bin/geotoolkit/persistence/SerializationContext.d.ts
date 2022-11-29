import {Registry} from './Registry';

/**
 * The serialization context
 */
export class SerializationContext {
    /**
     * The serialization context
     */
    constructor();
    /**
     * Adds the specified value with name "name" to the current context
     * @param name unique property name
     * @param value object value
     */
    addValue(name: string, value: any): void;
    /**
     * Adds child element with the specified name and optional type to the current context.
     * Unlike "setObject", this method creates a child node to store the object.
     * @param name unique property name
     * @param object object to be serialized
     * @param type the optional serialization type
     */
    addObject(name: string, object: any, type?: string): this;
    /**
     * Sets value to the current context (no child nodes for the value will be created in current context)
     * @param value object value
     */
    setValue(value: any): this;
    /**
     * Sets object to the current context (no child nodes for the object will be created in current context)
     * @param value object value
     * @param type the optional serialization type
     */
    setObject(value: any, type?: string): this;
    /**
     * Create child element in the current context
     * @param name unique property name
     * @param type type of the object
     */
    createChild(name: string, type?: string): this;
    /**
     * Get reference id for the specified object. Null as return value means that the object
     * was not saved before
     * @param object object value
     */
    getReferenceId(object: any): string | number | any;
    /**
     * Add reference to the object
     * @param object object to get reference
     */
    addReference(object: any): string | number;
    /**
     * Get registry of memento serializers
     */
    getRegistry(): Registry;
    /**
     * Commit changes
     */
    commit(): void;
}
