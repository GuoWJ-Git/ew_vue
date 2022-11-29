import {Format} from './Format';
import {Locale} from './Locale';

/**
 * Defines base class for formatting numbers based on Java NumberFormatter. <br>
 * User can also use {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat} which allows creating a custom format as well.
 * @example
 * ```javascript
 * // locale parameter can be used to specify 'Norway' as shown below. 'fr', 'ru', 'us', 'de' ... are also available.
 * const number = new NumberFormat({'locale': 'no'});
 * number.setMaximumFractionDigits(2);
 * number.format(5000.123); // '5 000,12'
 * ```
 */
export class NumberFormat extends Format {
    /**
     * Defines base class for formatting numbers based on Java NumberFormatter. <br>
     * User can also use {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat} which allows creating a custom format as well.
     * @param options 
     * @param options.locale format locale
     * @param options.round round number
     * @param options.fulllocale specify format how to provide locale
     * @param options.maximumfractiondigits specify maximum fraction digits
     * @param options.minimumfractiondigits specify minimum fraction digits, have to be less or equal to maximumfractiondigits
     * @param options.grouplength specify group length of numbers
     */
    constructor(options?: object | { locale?: string | Locale; round?: boolean; fulllocale?: boolean; maximumfractiondigits?: number; minimumfractiondigits?: number; grouplength?: number; } );
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: NumberFormat): this;
    /**
     * Returns a clone of the current format
     */
    clone(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {locale: Locale; round: boolean; fulllocale: boolean; maximumfractiondigits: number; minimumfractiondigits: number; grouplength: number} | any;
    /**
     * Sets properties
     * @param properties properties pertaining to this object
     * @param properties.locale format locale
     * @param properties.round round number
     * @param properties.fulllocale specify format how to provide locale
     * @param properties.maximumfractiondigits specify maximum fraction digits
     * @param properties.minimumfractiondigits specify minimum fraction digits, have to be less or equal to maximumfractiondigits
     * @param properties.grouplength specify group length of numbers
     */
    setProperties(properties: object | { locale?: string | Locale; round?: boolean; fulllocale?: boolean; maximumfractiondigits?: number; minimumfractiondigits?: number; grouplength?: number; } ): this;
    /**
     * Return object, which contains 'dec', 'group', 'neg' symbols
     * @param locale locale
     */
    protected getLocalFormatData(locale?: Locale | string): any;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
    /**
     * Return maximum fraction digits
     * @param digits maximum fraction digits
     */
    setMaximumFractionDigits(digits: number): this;
    /**
     * Return minimum fraction digits
     * @param digits minimum fraction digits
     */
    setMinimumFractionDigits(digits: number): this;
    /**
     * Return maximum faction digits
     * @param number an optional number to get maximum fraction digits
     */
    getMaximumFractionDigits(number?: number): number;
    /**
     * Return minimum faction digits
     * @param number an optional number to get minimum fraction digits
     */
    getMinimumFractionDigits(number?: number): number;
    /**
     * Sets locale
     * @param locale locale
     */
    setLocale(locale: Locale | string): this;
    /**
     * Return the current locale
     */
    getLocale(): Locale;
    /**
     * Convert number to format with fixed point
     * @param number number to be converted
     * @param decimalPlaces number of decimal places this number can have
     */
    protected toFixed(number: number, decimalPlaces: number): string;
    /**
     * Return instance of the number format
     * @param locale locale of formatter. Locals is not supported for now.
     */
    static getInstance(locale?: string): NumberFormat;
}
