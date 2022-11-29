import {AbstractConnector} from './AbstractConnector';
import {AbstractHttpService} from '../../../http/AbstractHttpService';
import {Cancel} from '../../../util/Cancel';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: string) => void;
/**
 * Source connector that sends requests by creating XMLHttpRequest with appropriate GET request
 */
export class HttpRequest extends AbstractConnector {
    /**
     * Source connector that sends requests by creating XMLHttpRequest with appropriate GET request
     * @param options options
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options?: object | { httpservice?: AbstractHttpService; } );
    /**
     * Sends XMLHttpRequest to the url provided
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param options.key request key (can be used to abort it later)
     * @param options.responseType request response type if necessary
     * @param options.priority request priority (more priority requests are sending earlier)
     * @param options.method request http method ('get'/'post')
     * @param options.headers request headers
     * @param options.cancel cancel
     * @param callback the result handler
     */
    send(url: string, options: object | { key?: string; responseType?: string; priority?: number; method?: string; headers?: object; cancel?: Cancel; }  | null, callback: Function): void;
}
