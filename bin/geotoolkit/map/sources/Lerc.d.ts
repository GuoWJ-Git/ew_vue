import {Vector} from './Vector';

/**
 * Vector source that allows user to get features from remote resource in Lerc (Limited Error Raster Compression) format
 * Vector query mode cannot be changed, it is set to 'Bbox' permanently.
 */
export class Lerc extends Vector {
    /**
     * Vector source that allows user to get features from remote resource in Lerc (Limited Error Raster Compression) format
     * Vector query mode cannot be changed, it is set to 'Bbox' permanently.
     * @param options source options
     * @param options.format format for the server data requests formatting
     */
    constructor(options?: object | { format?: number; } );
}
