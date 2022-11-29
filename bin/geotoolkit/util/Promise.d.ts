/**
 * This class is an implementation of promise interface.<br/>
 * The Promise interface is a proxy of something that is not known at its creation time, like a remote resource.<br/>
 * This Callback API can be used to asynchronously load this data without using forcing the rest of the application to wait for this resource.<br/>
 * Thus achieving a smooth loading of the required resources that will minimize down time time for the user.<br/>
 * <br/>
 * Reading materials on the Promise concept:<br/>
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise}<br/>
 * {@link http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&s=promise}<br/>
 * @example
 * ```javascript
 * // Example of use to load an image:
 *  import {Promise} from '@int/geotoolkit/util/Promise';
 *  const promise = new Promise(function (resolve, reject) {
 *      var img = new Image();
 *      img.onload = () => {
 *          resolve(img);
 *      };
 *      img.src = 'path_to_img';
 *  }).then((result) => {
 *      //display the result
 *  }, (reason) => {
 *      //display the error
 *  });
 * ```
 */
export class Promise {
    /**
     * This class is an implementation of promise interface.<br/>
     * The Promise interface is a proxy of something that is not known at its creation time, like a remote resource.<br/>
     * This Callback API can be used to asynchronously load this data without using forcing the rest of the application to wait for this resource.<br/>
     * Thus achieving a smooth loading of the required resources that will minimize down time time for the user.<br/>
     * <br/>
     * Reading materials on the Promise concept:<br/>
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise}<br/>
     * {@link http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&s=promise}<br/>
     * @param execute execute function
     * @param abort optional abort function
     */
    constructor(execute: Function, abort?: Function);
    /**
     * Appends fulfillment and rejection handlers to the promise and return a new promise
     * @param onResolved called if promise is accepted
     * @param onRejected called if promise is rejected
     */
    then(onResolved?: Function, onRejected?: Function): this;
    /**
     * Abort promise execution
     * @deprecated since 2021 (3.2)
     */
    abort(): void;
    /**
     * Appends a rejection handler callback to the promise and returns a new promise resolving to the return value
     * of the callback
     * @param onRejected called if the promise is rejected
     */
    catch(onRejected?: Function): this;
    /**
     * returns a new promise that will give the result of all promises when fulfilled
     * @param promises an array of promises
     */
    static all(promises: Promise[]): Promise;
    /**
     * Returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects
     * @param promises an array of promises
     * @param interval [interval] deprecated (since 2020 (3.0)). to check promises result
     * @param timeout [timeout] deprecated (since 2020 (3.0)). that automatically reject the promise
     */
    static race(promises: Promise[], interval?: number, timeout?: number): Promise;
    /**
     * returns a new promise that has been rejected.
     * tip: it is useful to make reason an instance of Error. (for debugging purpose)
     * @param reason reason why the promise has been rejected.
     */
    static reject(reason?: any): Promise;
    /**
     * returns a new promise that has been resolved.
     * @param value value to resolve
     */
    static resolve(value?: any | Promise): Promise;
    /**
     * returns true if the object is an instance of geotoolkit.util.Promise
     * @param object object to check if it is a promise
     */
    static isPromise(object: any): boolean;
}
