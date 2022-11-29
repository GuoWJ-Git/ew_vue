import {Vector} from './Vector';

/**
 * This layer connects to an Web Feature Service and displays received features from that server.
 */
export class WFS extends Vector {
    /**
     * This layer connects to an Web Feature Service and displays received features from that server.
     * @param options options
     * @param options.featuretypes featureType name(s) to receive from the server
     */
    constructor(options?: object | { featuretypes?: string[] | string; } );
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {featuretypes: string[] | string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options
     * @param properties.featuretypes featureType name(s) to receive from the server
     */
    setProperties(properties?: object | { featuretypes?: string[] | string; } ): this;
}
