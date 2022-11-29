/**
 * Defines locale class, which contains information for formatting numbers, dates and time.<br>
 * The setDefault() function explained below, sets up your locale and then it will use it by default for all formatters.<br>
 * To create a custom format or change format without specifying 'local' of a country you can use {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat}
 */
export class Locale {
    /**
     * Defines locale class, which contains information for formatting numbers, dates and time.<br>
     * The setDefault() function explained below, sets up your locale and then it will use it by default for all formatters.<br>
     * To create a custom format or change format without specifying 'local' of a country you can use {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat}
     * @param options 
     * @param options.numberformat defines number format
     * @param options.numberformat.dec defines decimal symbol
     * @param options.numberformat.group defines group symbol
     * @param options.numberformat.neg defines negative symbol
     * @param options.numberformat.infinity defines infinity text
     * @param options.locale The name of the locale
     */
    constructor(options?: object | { numberformat?: object | { dec?: string; group?: string; neg?: string; infinity?: string; } ; locale?: string; } );
    /**
     * Return number format
     */
    getNumberFormatInfo(): any;
    /**
     * Return a name of the locale
     */
    getLocaleName(): string;
    /**
     * @param locale current locale
     */
    static getLocale(locale: string): Locale;
    /**
     * Return default locale
     */
    static getDefault(): Locale;
    /**
     * Sets default locale. Once user sets a default locale here it will be used by default for all formatters in all the plots.<br>
     * Please refer to the example below
     * @example
     * ```javascript
     * import {Locale} from '@int/geotoolkit/util/Locale';
     * Locale.setDefault(Locale.getLocale('ru'));
     * ```
     * @param locale default locale. It supports ['ae', 'au', 'ca', 'cn', 'eg', 'gb', 'hk', 'il', 'in', 'jp', 'sk', 'th', 'tw', 'us', 'at', 'br', 'de', 'dk', 'es',
     * 'gr', 'it', 'nl', 'pt', 'tr', 'vn', 'bg', 'cz', 'fi', 'fr', 'no', 'pl', 'ru', 'se', 'ch']
     */
    static setDefault(locale: Locale): void;
    /**
     * Sets the properties pertaining to Locale
     * @param options JSON containing locale properties
     * @param options.numberformat defines number format
     * @param options.numberformat.dec defines decimal symbol
     * @param options.numberformat.group defines group symbol
     * @param options.numberformat.neg defines negative symbol
     * @param options.numberformat.infinity defines infinity text
     * @param options.locale The name of the locale
     */
    setProperties(options: object | { numberformat?: object | { dec?: string; group?: string; neg?: string; infinity?: string; } ; locale?: string; } ): this;
    /**
     * Returns the properties pertaining to Locale
     */
    getProperties(): {numberformat: {dec: string; group: string; neg: string; infinity: string}; locale: string} | any;
}
