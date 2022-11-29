/**
 * A simple and lite event emitter that represents a collection of functions
 * that will be invoked upon trigger() call
 */
export class LiteEvent {
    /**
     * A simple and lite event emitter that represents a collection of functions
     * that will be invoked upon trigger() call
     */
    constructor();
    /**
     * Subscribes a handler to the event
     * @param handler function handler
     */
    on(handler: any): void;
    /**
     * Unsubscribes a handler from the event
     * @param handler function handler
     */
    off(handler: any): void;
    /**
     * Emits an event with the specified data
     * @param data event data that will be passed to all subscribed event handlers
     */
    trigger(data: any): void;
}
