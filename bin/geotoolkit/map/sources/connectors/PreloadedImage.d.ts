import {Image} from '../../../scene/shapes/Image';
import {DOMImage} from './DOMImage';
import {AbstractHttpService} from '../../../http/AbstractHttpService';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: Image) => void;
/**
 * Source connector that sends http requests to load the data, and after that creates DOM image with the received base64 data
 * This approach allows user to effectively abort the requests, if necessary, and the DOM image data reload occurs quickly due to browser cache
 */
export class PreloadedImage extends DOMImage {
    /**
     * Source connector that sends http requests to load the data, and after that creates DOM image with the received base64 data
     * This approach allows user to effectively abort the requests, if necessary, and the DOM image data reload occurs quickly due to browser cache
     * @param options options
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options?: object | { httpservice?: AbstractHttpService; } );
    /**
     * Sends http request that requests data from the url provided. After that creates DOM image with the base64 data
     * @param url url requested
     * @param options extra options for the request (null if no needed)
     * @param options.key request key (can be used to abort it later)
     * @param options.dst destination image if there's no need to create a new object
     * @param options.priority request priority (more priority requests are sending earlier)
     * @param callback the result handler
     */
    send(url: string, options: object | { key?: string; dst?: Image; priority?: number; } , callback: Function): void;
}
