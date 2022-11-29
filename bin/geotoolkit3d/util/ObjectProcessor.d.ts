import {Object3D} from '../scene/Object3D';

/**
 * This utility class provides a way to bind objects with a callback
 * function.<br>
 * For example, if an object is selected, it will be processed
 * through callback function if its namespace is in processor.
 */
export class ObjectProcessor {
    /**
     * This utility class provides a way to bind objects with a callback
     * function.<br>
     * For example, if an object is selected, it will be processed
     * through callback function if its namespace is in processor.
     */
    constructor();
    /**
     * Return name of provider
     */
    getName(): string;
    /**
     * Set name
     * @param name name of the header provider
     */
    setName(name: string): this;
    /**
     * Register object with its class name,
     * by binding it to a custom process callback.<br>
     * @param name the class name of object
     * @param callback the callback that binds with
     */
    registerObject(name: string, callback: Function): this;
    /**
     * Return and process the object if it has been registered in the processor
     * @param object the object to be processed
     */
    processObject(object: Object3D): Object3D;
    /**
     * Return default instance of the ObjectProcessor
     */
    static getDefaultInstance(): ObjectProcessor;
    /**
     * Return the properties of this processor
     */
    getProperties(): object | any;
    /**
     * Reset the processor to default state
     */
    resetProcessor(): this;
}
