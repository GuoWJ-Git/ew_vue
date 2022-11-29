import {AbstractFormat} from './AbstractFormat';

/**
 * KML source format that formats feature queries and parses the KML formatted response
 */
export class KML extends AbstractFormat {
    /**
     * KML source format that formats feature queries and parses the KML formatted response
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses KML data into the geotoolkit features and notifies about the result
     * @param data XML object or its string representation that contains features data in KML format
     */
    parse(data: string | object): this;
}
