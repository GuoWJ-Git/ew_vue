import {AbstractHttpService} from '../http/AbstractHttpService';

/**
 * Default data provider for SVG application. Implements standard XMLHttpRequest to load
 * data from the same server that the page was loaded
 */
export class SvgDataProvider {
    /**
     * Default data provider for SVG application. Implements standard XMLHttpRequest to load
     * data from the same server that the page was loaded
     * @param options options
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options?: object | { httpservice?: AbstractHttpService; } );
    /**
     * Loads the file accessible by the path parameter provided and passes it to callback
     * @param path Path to the file on server, or url
     * @param cb Callback to call
     */
    loadXmlData(path: string, cb: Function): void;
}
