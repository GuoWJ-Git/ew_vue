import {AbstractFormat} from './AbstractFormat';

/**
 * GeoJSON source format that formats feature queries and parses the GeoJSON formatted response
 */
export class GeoJSON extends AbstractFormat {
    /**
     * GeoJSON source format that formats feature queries and parses the GeoJSON formatted response
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses GeoJSON data into the geotoolkit features and notifies about the result
     * @param data JSON object or its string representation that contains features data in GeoJSON format
     */
    parse(data: string | object): this;
}
