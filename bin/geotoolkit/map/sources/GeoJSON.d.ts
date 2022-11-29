import {Vector} from './Vector';
import {AbstractFormat} from './formats/AbstractFormat';

/**
 * Vector source that allows user to get features from remote resource in GeoJSON format
 */
export class GeoJSON extends Vector {
    /**
     * Vector source that allows user to get features from remote resource in GeoJSON format
     * @param options options
     * @param options.format the remote features format
     */
    constructor(options?: object | { format?: AbstractFormat; } );
}
