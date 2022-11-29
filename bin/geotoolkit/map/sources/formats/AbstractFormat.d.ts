import {EventDispatcher} from '../../../util/EventDispatcher';
import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * Abstract source format that formats data queries and sends it using the connector provided
 * The data requests could be flexibly adjusted the by additional parameters specified in 'options'. All of them
 * will be added as a query parameter.
 * @example
 * ```javascript
 * import {ArcGISFeature as ArcGISFeatureFormat} from '@int/geotoolkit/map/sources/formats/ArcGISFeature';
 * const format = new ArcGISFeatureFormat({
 *      // all undocumented parameters would be directly added to the send requests:
 *      'token': 'TikYtCP33k_Ql2mt_233AJZm3iHkFbowqWSUe9ZmkRp15PBbZLgYTEUP0sc46Nxjt5DPWBfSZst5b9ykD7x9mQ..'
 * });
 * ```
 */
export class AbstractFormat extends EventDispatcher {
    /**
     * Abstract source format that formats data queries and sends it using the connector provided
     * The data requests could be flexibly adjusted the by additional parameters specified in 'options'. All of them
     * will be added as a query parameter.
     * @param options options
     * @param options.connector connector to use
     * @param options.settings settings object
     */
    constructor(options?: object | { connector?: AbstractConnector; settings?: object; } );
    /**
     * Sends a request based on a settings provided
     * That's a basic implementation for the file requests. Implement parse method to use it or override this method directly.
     * @param query query params
     * @param query.key connection(s) key (can be used to abort it later)
     */
    query(query?: object | { key?: string; }  | any): this;
    /**
     * Parses the data provided and notifies about the result.
     * Is used in the default query implementation.
     * @param data data object or its string representation
     */
    parse(data: string | object): this;
    /**
     * Aborts all previous requests
     * @param key key of the connections to abort (all connections aborted if nothing provided)
     */
    abort(key?: string): this;
    /**
     * Sets the query parameter to add to the data requests
     * @param param parameter name
     * @param value parameter value
     */
    setQueryParameter(param: string, value: string): this;
    /**
     * Copies query parameters from another format
     * @param format format to clone parameters
     */
    cloneQueryParameters(format: AbstractFormat): this;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): AbstractFormat;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param deepCopy deep copy
     */
    protected copyConstructor(src: AbstractFormat, deepCopy?: boolean): this;
    /**
     * Gets connector
     */
    getConnector(): AbstractConnector;
}
