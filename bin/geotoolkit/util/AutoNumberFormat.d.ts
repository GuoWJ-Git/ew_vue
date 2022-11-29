import {NumberFormat} from './NumberFormat';

/**
 * Define the proper number format for a double value formatted for DISPLAY
 * only.
 */
export class AutoNumberFormat extends NumberFormat {
    /**
     * Define the proper number format for a double value formatted for DISPLAY
     * only.
     * @param options 
     * @param options.locale format locale
     * @param options.round round number
     * @param options.fulllocale specify format how to provide locale
     * @param options.maximumfractiondigits specify maximum fraction digits
     * @param options.automaximumfractiondigits automatic calculation of maximum fraction digits
     * @param options.exponentialformat 
     * @param options.grouplength specify group length of numbers
     */
    constructor(options?: object | { locale?: string; round?: boolean; fulllocale?: boolean; maximumfractiondigits?: number; automaximumfractiondigits?: boolean; exponentialformat?: string; grouplength?: number; } );
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: AutoNumberFormat): this;
    /**
     * Return maximum faction digits
     * @param number an optional number to get maximum fraction digits
     */
    getMaximumFractionDigits(number?: number): number;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
    /**
     * Estimate the maximum fraction digits
     * @param number number to provide the estimate
     */
    static estimateMaximumFractionDigits(number: number): number;
    /**
     * Creates format geotoolkit.util.NumberFormat based on specified value
     * @param number number to provide the best format
     */
    static matchFormat(number: number): NumberFormat;
}
