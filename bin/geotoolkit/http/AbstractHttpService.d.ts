import {Cancel} from '../util/Cancel';

/**
 * Provide an abstract service for HTTP requests
 * @example
 * ```javascript
 * // Cancellation of request from external token
 * import {Cancel} from '@int/geotoolkit/util/Cancel';
 * ...
 * const token = new Cancel();
 * http.get('/cancel', {
 *    'cancel': token
 * }).then( (response) => { ... }, (error) => {
 *    // TODO: Cancel
 * }).catch((error) => { ... });
 * setTimeout(() => {
 *   token.cancel();
 * });
 * ```
 * @example
 * ```javascript
 * // Cancellation of request using function to get token
 * let token;
 * http.get('/cancel', {
 *    'cancel': (t) => {
 *         token = t;
 *     }
 * }).then( (response) => { ... }, (error) => {
 *    // TODO: Cancel
 * }).catch( (error) => { ... });
 * // Cancel request
 * token.cancel();
 * ```
 */
export class AbstractHttpService {
    /**
     * Provide an abstract service for HTTP requests
     * @param options default options
     * @param options.timeout A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    constructor(options?: object | { timeout?: number; } );
    /**
     * Add request interceptor
     * @example
     * ```javascript
     * // Add request interceptor
     * import {deepMergeObject} from '@int/geotoolkit/base';
     * http.addRequestInterceptor((options) => {
     *   return new Promise((resolve, reject) => {
     *       const newOptions = deepMergeObject({'headers': {
     *           'Authorization': 'Bearer ' + token
     *       }}, options, true);
     *       resolve(newOptions);
     *   });
     *  }, (error) => Promise.reject(error)
     * );
     * ```
     * @param onFulfilled on fulfilled function to be called in promise
     * @param onRejected on function to be called in promise if it is rejected
     */
    addRequestInterceptor(onFulfilled: Function, onRejected?: Function): string;
    /**
     * Remove interceptor
     * @param id id of interceptor to remove
     */
    removeRequestInterceptor(id: string): boolean;
    /**
     * Verify if request interceptor with specified id exists
     * @param id id of interceptor to verify
     */
    containsRequestInterceptor(id: string): boolean;
    /**
     * Add response interceptor
     * @example
     * ```javascript
     * // Add response interceptor
     * http.addResponseInterceptor(function (response) {
     *   return new Promise((resolve, reject) => {
     *       // TODO with response
     *       resolve(response);
     *   });
     * }, (error) => Promise.reject(error) );
     * ```
     * @param onFulfilled on fulfilled function to be called in promise
     * @param onRejected on function to be called in promise if it is rejected
     */
    addResponseInterceptor(onFulfilled: Function, onRejected?: Function): string;
    /**
     * Remove response interceptor
     * @param id id of interceptor to remove
     */
    removeResponseInterceptor(id: string): boolean;
    /**
     * Verify if response interceptor with specified id exists
     * @param id id of interceptor to verify
     */
    containsResponseInterceptor(id: string): boolean;
    /**
     * Send request
     * It is necessary to specify baseUrl, url or both to make request. This method return promise to execute
     * query.
     * <p>Response object contains:</p>
     * <ul>
     * <li>data: response data</li>
     * <li>options: provided options </li>
     * <li>status: as a rule response status of response<li>
     * <li>statusText: status text<li>
     * <li>request: an instance of request</li>
     * </ul>
     * @example
     * ```javascript
     * // make a simple GET request
     *  http.request({ method: 'get', 'url': url ).then((response) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     * ```
     * @param options options all options keys are case insensitive
     * @param options.method method
     * @param options.headers custom headers to be sent
     * @param options.url url to combine with baseURL
     * @param options.baseURL a base URL will be prepended to url unless url is absolute.
     * @param options.params an object, which contains parameters: key, value
     * @param options.data Data to be sent as the request message data.
     * @param options.timeout A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     * @param options.withCredentials property is a Boolean that indicates whether or
     * not cross-site Access-Control requests should be made using credentials such as cookies, authorization
     * headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.
     * @param options.transformrequest a function executed before requests
     * @param options.transformresponse a function executed after response
     * @param options.onprogress a function to be executed to handle progress
     * @param options.cancel a function to receive object to cancel
     * http request or instance of this object
     */
    request(options?: object | { method?: string; headers?: object[]; url?: string | null; baseURL?: string | null; params?: any; data?: string | any; timeout?: number; withCredentials?: boolean; transformrequest?: Function; transformresponse?: Function; onprogress?: Function; cancel?: Function | Cancel; } ): Promise<any>;
    /**
     * Dispatch request
     * @param options options
     * @param options.method method
     * @param options.headers custom headers to be sent. All all keys are case insensitive
     * @param options.url url
     * @param options.baseURL a base URL will be prepended to url unless url is absolute.
     * @param options.params an object, which contains parameters: key, value
     * @param options.data Data to be sent as the request message data.
     * @param options.timeout A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     * @param options.httpcancel an object to receive object to cancel http request
     * @param options.onprogress a function to be executed to handle progress
     * @param options.withCredentials property is a Boolean that indicates whether or
     * not cross-site Access-Control requests should be made using credentials such as cookies, authorization
     * headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.
     */
    protected dispatch(options?: object | { method?: string; headers?: object[]; url?: string | null; baseURL?: string | null; params?: any; data?: string | any; timeout?: number; httpcancel?: Cancel; onprogress?: Function; withCredentials?: boolean; } ): Promise<any>;
    /**
     * Create an instance of a new service with new default settings
     * @param options options
     */
    clone(options?: any): this;
    /**
     * Sets default options for the current instance of the service
     * @param options options all options keys are case insensitive
     */
    setOptions(options?: any): void;
    /**
     * Gets a default options
     */
    getOptions(): object | any;
    /**
     * Send post request
     * @example
     * ```javascript
     * // make a simple POST request
     *  http.post(url, data).then((response) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     * ```
     * @param url url
     * @param data data to be sent as the request message data.
     * @param options options
     */
    post(url: string, data: any, options?: any): Promise<any>;
    /**
     * Send get request
     * @example
     * ```javascript
     * // make a simple GET request
     *  http.get(url).then((response) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     * ```
     * @example
     * ```javascript
     * // make GET request and transform output
     * http.get(url, {
     *   'responsetype': 'json',
     *   'transformresponse': (response) => {
     *       if (response['data']['version'] != null) {
     *           return Promise.resolve(response['data']);
     *       }
     *       return Promise.reject('Server error');
     *   }
     * }).then((data) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     * ```
     * @param url url
     * @param options options
     */
    get(url: string, options?: any): Promise<any>;
    /**
     * Send put request
     * @param url url
     * @param data data to be sent as the request message data.
     * @param options options
     */
    put(url: string, data: any, options?: any): Promise<any>;
    /**
     * Send delete request
     * @param url url
     * @param options options
     */
    delete(url: string, options?: any): Promise<any>;
    /**
     * Send patch request
     * @param url url
     * @param data data to be sent as the request message data.
     * @param options options
     */
    patch(url: string, data: any, options?: any): Promise<any>;
    /**
     */
    protected getRequestInterceptors(): any[];
    /**
     */
    protected getResponseInterceptors(): any[];
    /**
     * @param options options to merge
     */
    protected mergeOptions(options: any): any;
}
