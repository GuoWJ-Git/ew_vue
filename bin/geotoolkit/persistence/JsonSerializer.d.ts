import {Registry} from './Registry';
import {MementoDeserializationContext} from './MementoDeserializationContext';

/**
 * The JsonSerializer class exposes the trivial serialization functions from a
 * JavaScript object to JSON and back
 */
export class JsonSerializer {
    /**
     * The JsonSerializer class exposes the trivial serialization functions from a
     * JavaScript object to JSON and back
     * @param registry registry of serializers
     * @param options serialization options
     * @param options.filter A function that alters the behavior of the serialization process
     * @param options.replacer A function that alters the behavior of the stringification process
     * @param options.space A String or Number object that's used to insert white space into the output JSON string for readability purposes.
     */
    constructor(registry: Registry, options?: object | { filter?: Function; replacer?: Function; space?: string | number; } );
    /**
     * Serializes an object to a JSON string
     * @param name the name of the object or the object to mementoize
     * @param value The value to mementoize
     * @param source the source project to add property
     */
    serialize(name: string | object, value?: any, source?: any): string;
    /**
     * Deserializes a JSON string to the original object
     * @param str text to be deserialised
     */
    deserialize(str: string): MementoDeserializationContext;
}
