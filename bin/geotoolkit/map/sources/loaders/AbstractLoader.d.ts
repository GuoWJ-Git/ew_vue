import {AbstractConnector} from '../connectors/AbstractConnector';

/**
 * Abstract source loader that loads server settings by sending appropriate query and parsing its response
 * The settings request could be flexibly adjusted the by additional parameters specified in 'options'. All of them
 * will be added as a query parameter.
 * @example
 * ```javascript
 * import {ArcGISFeature} from '@int/geotoolkit/map/sources/loaders/ArcGISFeature';
 * const loader = new ArcGISFeature({
 *      // all undocumented parameters would be directly added to the request:
 *      'token': 'TikYtCP33k_Ql2mt_233AJZm3iHkFbowqWSUe9ZmkRp15PBbZLgYTEUP0sc46Nxjt5DPWBfSZst5b9ykD7x9mQ..'
 * });
 * ```
 */
export class AbstractLoader {
    /**
     * Abstract source loader that loads server settings by sending appropriate query and parsing its response
     * The settings request could be flexibly adjusted the by additional parameters specified in 'options'. All of them
     * will be added as a query parameter.
     * @param options options
     * @param options.connector connector to use
     * @param options.settings settings object
     */
    constructor(options?: object | { connector?: AbstractConnector; settings?: object; } );
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string, onload: Function): void;
    /**
     * Returns server settings request url
     */
    getSettingsUrl(): string | null;
    /**
     * Returns server settings request options
     */
    getRequestOptions(): any | object;
    /**
     * Returns connector
     */
    getConnector(): AbstractConnector;
    /**
     * Sets the query parameter to add to the server settings request
     * @param param parameter name
     * @param value parameter value
     */
    setQueryParameter(param: string, value: string): this;
    /**
     * Copies query parameters from another loader
     * @param loader loader to clone parameters
     */
    cloneQueryParameters(loader: AbstractLoader): this;
    /**
     * Returns copyright information.
     */
    getCopyright(): string | null;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): AbstractLoader;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param deepCopy deep copy
     */
    protected copyConstructor(src: AbstractLoader, deepCopy?: boolean): this;
}
