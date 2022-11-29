import {Vector} from './Vector';
import {AbstractFormat} from './formats/AbstractFormat';

/**
 * Vector source that allows user to get features from remote resource in GeoRSS (Geographically Encoded Objects for RSS feeds) format
 */
export class GeoRSS extends Vector {
    /**
     * Vector source that allows user to get features from remote resource in GeoRSS (Geographically Encoded Objects for RSS feeds) format
     * @param options options
     * @param options.format the remote features format
     */
    constructor(options?: object | { format?: AbstractFormat; } );
}
