import {Vector} from './Vector';
import {Stream as LoadersStream} from './loaders/Stream';
import {Stream as FormatsStream} from './formats/Stream';

/**
 * Vector source that allows user to get features from ArcGIS Stream server
 */
export class Stream extends Vector {
    /**
     * Vector source that allows user to get features from ArcGIS Stream server
     * @param options options
     * @param options.loader loader for loading server settings
     * @param options.format the remote features format
     * @param options.token authorization token (for ArcGIS stream servers if needed)
     */
    constructor(options?: object | { loader?: LoadersStream; format?: FormatsStream; token?: string; } );
    /**
     */
    _settings: object;
    /**
     * Sets the authorization token for ArcGIS stream server (if needed, null otherwise)
     * @param token the authorization token for ArcGIS server
     */
    setToken(token: string | any): this;
    /**
     * Returns the authorization token (if set, null otherwise)
     */
    getToken(): string | any;
}
