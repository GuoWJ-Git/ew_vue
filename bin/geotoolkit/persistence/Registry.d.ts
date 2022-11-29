/**
 * The implementation of the default serializer registry
 */
export class Registry {
    /**
     * The implementation of the default serializer registry
     */
    constructor();
    /**
     * Return instance of the default registry
     */
    static getInstance(): Registry;
    /**
     * Add serializer
     * @param type type of the serializer
     * @param serializer serializer
     */
    addSerializer(type: string, serializer: any): void;
    /**
     * Remove serializer
     * @param type type of the serializer
     */
    removeSerializer(type: string): void;
    /**
     * Return serializer for the specified type
     * @param type serializer for the specified type
     */
    getSerializer(type: any): any;
}
