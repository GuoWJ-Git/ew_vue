import {AbstractConnector} from './AbstractConnector';
import {AbstractHttpService} from '../../../http/AbstractHttpService';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: string) => void;
/**
 * Source connector that proxies another connector's request using the callback provided by user
 */
export class Proxy extends AbstractConnector {
    /**
     * Source connector that proxies another connector's request using the callback provided by user
     * @param options 
     * @param options.connector connector to proxy
     * @param options.callback callback to modify the data
     * @param options.httpservice http service to make any HTTP request (in case connector
     * is not provided only)
     */
    constructor(options?: object | { connector?: AbstractConnector; callback?: Function; httpservice?: AbstractHttpService; } );
    /**
     * Proxies the request with the connector provided and handles the request before the passing by
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param options.key request key (can be used to abort it later)
     * @param callback the result handler
     */
    send(url: string, options: object | { key?: string; } , callback: Function): void;
}
