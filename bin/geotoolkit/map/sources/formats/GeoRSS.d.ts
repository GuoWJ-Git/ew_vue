import {AbstractFormat} from './AbstractFormat';

/**
 * GeoRSS source format that formats feature queries and parses the GeoRSS formatted response
 */
export class GeoRSS extends AbstractFormat {
    /**
     * GeoRSS source format that formats feature queries and parses the GeoRSS formatted response
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses GeoRSS data into the geotoolkit features and notifies about the result
     * @param data XML object or its string representation that contains features data in GeoRSS format
     */
    parse(data: string | object): this;
}
