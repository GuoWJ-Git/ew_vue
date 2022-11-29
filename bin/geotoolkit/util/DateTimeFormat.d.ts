import {Format} from './Format';
import {TimeZone} from '../axis/TimeZone';

/**
 * Defines a class for formatting date time
 */
export class DateTimeFormat extends Format {
    /**
     * Defines a class for formatting date time
     * @param options 
     * @param options.format date time format
     * @param options.timezone time zone
     */
    constructor(options?: object | { format?: string; timezone?: TimeZone | number | string; } );
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: DateTimeFormat): this;
    /**
     * All inheritors should implement copy constructor or provide custom implementation for this method
     */
    clone(): DateTimeFormat;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {format: string; timezone: TimeZone} | any;
    /**
     * Sets properties
     * @param properties properties pertaining to this object
     * @param properties.format date time format
     * @param properties.timezone time zone
     */
    setProperties(properties: object | { format?: string; timezone?: TimeZone | number | string; } ): this;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
    /**
     * Return instance of the number format
     * @param locale locale of formatter. Locals is not supported for now.
     */
    static getInstance(locale?: string): DateTimeFormat;
}
