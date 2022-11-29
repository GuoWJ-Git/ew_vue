/**
 * The abstract serializer
 */
export class ObjectSerializer {
    /**
     * The abstract serializer
     */
    constructor();
    /**
     * Save object to context
     * @param object object to save
     * @param context context to save
     */
    save(object: any, context: any): void;
    /**
     * Load object from context
     * @param context context to save
     * @param object object save properties
     */
    load(context: any, object?: any): void;
}
