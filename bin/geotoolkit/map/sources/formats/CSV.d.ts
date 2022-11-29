import {AbstractFormat} from './AbstractFormat';

/**
 * CSV source format that formats feature queries and parses the CSV formatted response
 */
export class CSV extends AbstractFormat {
    /**
     * CSV source format that formats feature queries and parses the CSV formatted response
     * @param options options
     */
    constructor(options?: object);
    /**
     * Sets CSV data string delimiter (',' by default)
     * @param delimiter CSV delimiter to use for CSV parse
     */
    static setDelimiter(delimiter: string): void;
    /**
     * Parses CSV data into the geotoolkit features and notifies about the result
     * @param data table object or its string representation that contains features data in CSV format
     */
    parse(data: string | string[]): this;
}
