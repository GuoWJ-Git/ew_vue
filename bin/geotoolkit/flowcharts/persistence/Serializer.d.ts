import {MementoDeserializationContext} from '../../persistence/MementoDeserializationContext';

/**
 * Serializer singleton for the FlowChart persistence
 */
export class Serializer {
    /**
     * Serializer singleton for the FlowChart persistence
     */
    constructor();
    /**
     * Gets a singleton instance
     */
    static getInstance(): Serializer;
    /**
     * Saves the given value to the source with name
     * @param name the name of the object or the object to mementoize
     * @param value The value to mementoize
     * @param source the source project to add property
     */
    serialize(name: string | object, value?: object, source?: object): string;
    /**
     * Deserializes a JSON string to the original object
     * @param str text to be deserialised
     */
    deserialize(str: string): MementoDeserializationContext;
    /**
     * Assignes a new serializer to a class with the given className
     * @param className a name of the class that should get new serizlier
     * @param serializer a serializer that knows how to save/load classes className
     */
    setSerializer(className: string, serializer: any): void;
    /**
     * Gets a previously assigned serializer to the className
     * @param type serializer for the specified type
     */
    getSerializer(type: string | object): object;
}
