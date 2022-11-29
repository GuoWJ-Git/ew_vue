import {AbstractFormat} from './AbstractFormat';

/**
 * GPX source format that formats feature queries and parses the GPX formatted response
 */
export class GPX extends AbstractFormat {
    /**
     * GPX source format that formats feature queries and parses the GPX formatted response
     * @param options options
     */
    constructor(options?: object);
    /**
     * Parses GPX data into the geotoolkit features and notifies about the result
     * @param data XML object or its string representation that contains features data in GPX format
     */
    parse(data: string | object): this;
}
