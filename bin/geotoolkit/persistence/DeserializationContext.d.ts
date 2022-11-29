import {Registry} from './Registry';

/**
 * The deserialization context
 */
export class DeserializationContext {
    /**
     * The deserialization context
     */
    constructor();
    /**
     * Get value
     * @param name name of the property
     * @param type optional type
     */
    getValue(name: string, type?: string): any;
    /**
     * Get object
     * @param type type of the object
     * @param name name of the property
     */
    getObject(type: string, name: string): any;
    /**
     * Request object
     * @param id unique id of the object
     * @param callback function contains parameter object that can be requested
     */
    requestObject(id: string, callback: Function): void;
    /**
     * Enumerate each child property
     * @param callback function called by each object child
     * @param propertyName optional property name
     */
    queryChildren(callback: Function, propertyName?: string): void;
    /**
     * Get object by reference
     * @param id reference id
     */
    getReference(id: string): any;
    /**
     * Register instance of the object
     * @param id unique id of the object
     * @param object instance of the deserialised class
     */
    addReference(id: string, object: any): void;
    /**
     * Get registry of memento deserializers
     */
    getRegistry(): Registry;
    /**
     * Push the current deserialized object. This method can be used if it is necessary to
     * provide the existing object for deserialization
     * @param object instance of the deserialised class
     */
    pushCurrentObject(object: any): void;
    /**
     * Pop the current object from the stack
     */
    popCurrentObject(): any;
    /**
     * Return the current object on the stack
     */
    getCurrentObject(): any;
}
