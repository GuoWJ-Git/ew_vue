import {DataConversion} from './DataConversion';
import {NormalizeDataConversion} from './NormalizeDataConversion';

/**
 * Convert logarithmic value to linear and back
 */
export class LogarithmicDataConversion extends DataConversion {
    /**
     * Convert logarithmic value to linear and back
     * @param coeff coefficient or properties object
     * @param coeff.coeff coefficient
     * @param coeff.base logarithmic base
     * @param coeff.logmin logmin
     * @param coeff.loglow low value
     * @param coeff.loghigh high value
     * @param coeff.tracklow track lower value
     * @param coeff.trackhigh track high value
     * @param coeff.normalizeconversion normalizeConversion
     * @param base logarithmic base
     * @param logLow low value
     * @param logHigh high value
     * @param trackLow track lower value
     * @param trackHigh track high value
     * @param logMin logmin
     * @param normalizeConversion normalizeConversion
     */
    constructor(coeff: number | object | { coeff?: number; base?: number; logmin?: number; loglow?: number; loghigh?: number; tracklow?: number; trackhigh?: number; normalizeconversion?: NormalizeDataConversion; } , base?: number, logLow?: number, logHigh?: number, trackLow?: number, trackHigh?: number, logMin?: number, normalizeConversion?: NormalizeDataConversion);
    /**
     * Direct convert
     * @param v the number to be converted
     */
    direct(v: number): number;
    /**
     * Reverse convert
     * @param v the number to reverse convert
     */
    reverse(v: number): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {coeff: number; base: number; logmin: number; normalizeconversion: DataConversion} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.coeff coefficient
     * @param properties.base logarithmic base
     * @param properties.logmin logmin
     * @param properties.loglow low value
     * @param properties.loghigh high value
     * @param properties.tracklow track lower value
     * @param properties.trackhigh track high value
     * @param properties.normalizeconversion normalizeConversion
     */
    setProperties(properties: object | { coeff?: number; base?: number; logmin?: number; loglow?: number; loghigh?: number; tracklow?: number; trackhigh?: number; normalizeconversion?: NormalizeDataConversion; } ): this;
}
