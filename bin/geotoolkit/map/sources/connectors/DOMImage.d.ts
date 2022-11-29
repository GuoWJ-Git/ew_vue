import {Image} from '../../../scene/shapes/Image';
import {AbstractConnector} from './AbstractConnector';

/**
 * Callback for send().
 */
export type sendCallback = (err: object, data: Image) => void;
/**
 * Source connector that sends requests by creating DOM image with appropriate url
 */
export class DOMImage extends AbstractConnector {
    /**
     * Source connector that sends requests by creating DOM image with appropriate url
     */
    constructor();
    /**
     * Creates DOM Image that requests image from the url provided
     * @param url url requested
     * @param options extra options for the request (null if no needed)
     * @param options.key request key (can be used to abort it later)
     * @param options.dst destination image if there's no need to create a new object
     * @param callback the result handler
     */
    send(url: string, options: object | { key?: string; dst?: Image; } , callback: Function): void;
}
