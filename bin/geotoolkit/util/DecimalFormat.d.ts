import {NumberFormat} from './NumberFormat';

/**
 * Defines class for formatting decimal numbers
 * @example
 * ```javascript
 * const df = new DecimalFormat( {'format':"#,###,##0.00"} );   //df.format(364565.14) gives "364,565.14"
 * ```
 * @example
 * ```javascript
 * const df = new DecimalFormat( {'format':"#,###,##0.000", 'locale': 'ru'} );  //df.format(364565.14) gives '364 565,140'
 * ```
 * @example
 * ```javascript
 * const df = new DecimalFormat( {'format':"0.####E0"}); //df.format(364565.14) gives '3.6457E5'
 * ```
 * @example
 * ```javascript
 * // The code below shows how to replace decimal separator to be a comma ',' without having to specify a local of a country that uses ',' comma.
 * // It changes 'overridedecsep' property and overridegroupsep for group separator.
 * const df = new DecimalFormat({'format':"###,###.###", overridedecsep: ',', overridegroupsep: ''});
 * const str = df.format(12345.6);   // 'str' should be '12345,6'.
 * ```
 */
export class DecimalFormat extends NumberFormat {
    /**
     * Defines class for formatting decimal numbers
     * @param options The options
     * @param options.format format : The syntax for the formatting is:<br>
     * 0 = Digit<br>
     * # = Digit, zero shows as absent<br>
     * . = Decimal separator<br>
     * - = Negative sign<br>
     * , = Grouping Separator<br>
     * % = Percent (multiplies the number by 100)<br>
     * E = Separates mantissa and exponent in scientific notation. Need not be quoted in prefix or suffix.<br>
     * @param options.decimalseparatoralwaysshown decimalseparatoralwaysshown
     * @param options.overridegroupsep overridegroupsep
     * @param options.overridenegsign overridenegsign
     * @param options.ispercentage ispercentage
     * @param options.autodetectpercentage autodetectpercentage
     */
    constructor(options?: object | { format?: string; decimalseparatoralwaysshown?: boolean; overridegroupsep?: string; overridenegsign?: string; ispercentage?: boolean; autodetectpercentage?: boolean; } );
    /**
     * Return default decimal format
     */
    static getDefault(): DecimalFormat;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: DecimalFormat): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {format: string; decimalseparatoralwaysshown: boolean; overridegroupsep: string; overridenegsign: string; ispercentage: boolean; autodetectpercentage: boolean} | any;
    /**
     * Sets properties
     * @param properties properties pertaining to this object
     * @param properties.format format
     * @param properties.decimalseparatoralwaysshown decimalseparatoralwaysshown
     * @param properties.overridegroupsep overridegroupsep
     * @param properties.overridenegsign overridenegsign
     * @param properties.ispercentage ispercentage
     * @param properties.autodetectpercentage autodetectpercentage
     */
    setProperties(properties?: object | { format?: string; decimalseparatoralwaysshown?: boolean; overridegroupsep?: string; overridenegsign?: string; ispercentage?: boolean; autodetectpercentage?: boolean; } ): this;
    /**
     * Formats number to string
     * @param number number to be formatted
     */
    format(number: number): string;
}
