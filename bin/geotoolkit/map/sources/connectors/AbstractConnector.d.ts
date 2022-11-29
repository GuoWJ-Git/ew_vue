/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: object) => void;
/**
 * Abstract source connector that is able to send url requests and receive data responses
 */
export class AbstractConnector {
    /**
     * Abstract source connector that is able to send url requests and receive data responses
     */
    constructor();
    /**
     * Sends a request using the query provided
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param callback the result handler that's called when response is received
     */
    send(url: string, options: object, callback: Function): void;
    /**
     * Aborts the previous queries sent
     * @param key key of the queries to abort (all queries aborted if nothing provided)
     */
    abort(key?: string): this;
    /**
     * Checks if some connections are still loading
     */
    isLoading(): boolean;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): AbstractConnector;
}
