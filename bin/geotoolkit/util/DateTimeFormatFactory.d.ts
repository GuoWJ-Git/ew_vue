import {Locale} from './Locale';
import {TimeZone} from '../axis/TimeZone';
import {Format} from './Format';

/**
 * Define date time factory
 */
export class DateTimeFormatFactory {
    /**
     * Define date time factory
     */
    constructor();
    /**
     * Return default factory instance
     */
    static getDefault(): DateTimeFormatFactory;
    /**
     * Create a new format
     * @param options options
     * @param options.format date time format such as "M j H:i"
     * @param options.locale locale
     * @param options.timezone UTC or local time,
     * If using Third Party such as momentJS see also {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones}
     */
    createFormat(options?: object | { format?: string; locale?: Locale | string; timezone?: TimeZone | string; } ): Format;
    /**
     * Sets default format factory
     * @param instance a new instance
     */
    static setDefault(instance: DateTimeFormatFactory): void;
}
