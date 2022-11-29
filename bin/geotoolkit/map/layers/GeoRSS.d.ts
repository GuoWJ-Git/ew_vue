import {Vector} from './Vector';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';
import {GeoRSS as SourcesGeoRSS} from '../sources/GeoRSS';

/**
 * The implementation is capable of loading GeoRSS (Geographically Encoded Objects for RSS feeds) data.<br>
 */
export class GeoRSS extends Vector {
    /**
     * The implementation is capable of loading GeoRSS (Geographically Encoded Objects for RSS feeds) data.<br>
     * @param options options
     * @param options.system initial data coordinate system
     * @param options.source the layer data source
     */
    constructor(options?: object | { system?: string | AbstractSystem; source?: SourcesGeoRSS; } );
}
