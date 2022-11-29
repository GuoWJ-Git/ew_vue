/**
 * A simple class which knows how to store alarm functions and return them, all by name
 */
export class FunctionRegistry {
    /**
     * A simple class which knows how to store alarm functions and return them, all by name
     */
    constructor();
    /**
     * Returns an instance of registry filled with easing functions
     */
    static getDefaultInstance(): FunctionRegistry;
    /**
     * Registers an alarm handler function by its name
     * @param name Name of the handler or an object with handlers
     * @param func Handler Function
     */
    registerFunction(name: string | object, func?: Function): this;
    /**
     * Gets a handler function by its name
     * @param name Name of the function to get
     */
    getFunction(name: string): Function | null;
}
