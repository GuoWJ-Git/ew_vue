import {AbstractConnector} from './AbstractConnector';
import {AbstractHttpService} from '../../../http/AbstractHttpService';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: string | object) => void;
/**
 * Source connector that wraps another one, adding (and requesting) ArcGIS token if needed
 */
export class ArcGISToken extends AbstractConnector {
    /**
     * Source connector that wraps another one, adding (and requesting) ArcGIS token if needed
     * @param options 
     * @param options.connector connector to wrap
     * @param options.httpservice http service to make any HTTP request (in case connector
     * is not provided only)
     */
    constructor(options?: object | { connector?: AbstractConnector; httpservice?: AbstractHttpService; } );
    /**
     * Sends request to the url provided
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param options.key request key (can be used to abort it later)
     * @param callback the result handler
     */
    send(url: string, options: object | { key?: string; } , callback: Function): void;
}
