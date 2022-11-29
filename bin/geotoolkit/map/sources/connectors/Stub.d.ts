import {AbstractConnector} from './AbstractConnector';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: string) => void;
/**
 * Source connector that simulates the request sending and receives the predefined object
 */
export class Stub extends AbstractConnector {
    /**
     * Source connector that simulates the request sending and receives the predefined object
     * @param options options
     * @param options.data the predefined data object
     */
    constructor(options?: object | { data?: object; } );
    /**
     * Simulates the request sending with the predefined data receiving
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param callback the result handler
     */
    send(url: string, options: object, callback: Function): void;
}
