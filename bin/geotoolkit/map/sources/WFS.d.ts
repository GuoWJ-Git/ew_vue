import {Vector} from './Vector';
import {AbstractFormat} from './formats/AbstractFormat';
import {AbstractLoader} from './loaders/AbstractLoader';

/**
 * Vector source that allows user to get features from WFS (Web Feature Service) server
 */
export class WFS extends Vector {
    /**
     * Vector source that allows user to get features from WFS (Web Feature Service) server
     * @param options options
     * @param options.format the remote features format
     * @param options.loader loader for loading server settings
     * @param options.featureTypes featureType name(s) to receive from the server
     * @param options.version WFS version to use
     */
    constructor(options?: object | { format?: AbstractFormat; loader?: AbstractLoader; featureTypes?: string[] | string; version?: string; } );
    /**
     */
    _settings: object;
    /**
     * Sets the featureTypes parameter sent to the server. The first one from the list is used, if no types provided
     * @param types featureType name(s) to receive from the server
     */
    setFeatureTypes(types?: string[] | string): this;
    /**
     * Returns the featureTypes parameter sent to the server.
     */
    getFeatureTypes(): string[] | string | any;
}
