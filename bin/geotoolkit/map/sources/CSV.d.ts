import {Vector} from './Vector';
import {AbstractFormat} from './formats/AbstractFormat';

/**
 * Vector source that allows user to get features from remote resource in CSV (Comma-Separated Values) format
 */
export class CSV extends Vector {
    /**
     * Vector source that allows user to get features from remote resource in CSV (Comma-Separated Values) format
     * @param options options
     * @param options.format the remote features format
     * @param options.delimiter data delimiter, ',' symbol is used for CSV format by default
     * @param options.longitudeField string(s) defining the field name(s) that holds the longitude (X) coordinate
     * @param options.latitudeField string(s) defining the field name(s) that holds the latitude (Y) coordinate
     */
    constructor(options?: object | { format?: AbstractFormat; delimiter?: string; longitudeField?: string | string[]; latitudeField?: string | string[]; } );
    /**
     */
    _settings: object;
    /**
     * Sets the latitude coordinate field name(s)
     * @param field latitude field name(s)
     */
    setLatitudeField(field: string | string[]): this;
    /**
     * Returns the latitude coordinate field name(s)
     */
    getLatitudeField(): string | string[];
    /**
     * Sets the longitude coordinate field name(s)
     * @param field longitude field name(s)
     */
    setLongitudeField(field: string): this;
    /**
     * Returns the longitude coordinate field name(s)
     */
    getLongitudeField(): string | string[];
    /**
     * Sets CSV format data delimiter
     * @param delimiter data delimiter
     */
    setDelimiter(delimiter: string): this;
    /**
     * Returns current CSV data delimiter
     */
    getDelimiter(): string;
}
