import {AbstractConnector} from './AbstractConnector';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: string) => void;
/**
 * Source connector that sends requests by creating WebSocket
 */
export class WebSocket extends AbstractConnector {
    /**
     * Source connector that sends requests by creating WebSocket
     */
    constructor();
    /**
     * Creates WebSocket listening the url provided
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param options.key socket request key (can be used to abort it later)
     * @param callback the result handler
     */
    send(url: string, options: object | { key?: string; } , callback: Function): void;
}
