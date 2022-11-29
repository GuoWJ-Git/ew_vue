import {DataConversion} from './DataConversion';

/**
 * Data conversion based on tangential function
 */
export class TangentialDataConversion extends DataConversion {
    /**
     * Data conversion based on tangential function
     * @param srcLow lower source limit or properties object
     * @param srcLow.srclow lower source limit
     * @param srcLow.srchigh higher source limit
     * @param srcLow.dstlow lower track destination limit
     * @param srcLow.dsthigh higher track destination limit
     * @param srcHigh higher source limit
     * @param dstLow lower track destination limit
     * @param dstHigh higher track destination limit
     */
    constructor(srcLow: number | object | { srclow?: number; srchigh?: number; dstlow?: number; dsthigh?: number; } , srcHigh?: number, dstLow?: number, dstHigh?: number);
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {srclow: number; srchigh: number; dstlow: number; dsthigh: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.srclow lower source limit
     * @param properties.srchigh higher source limit
     * @param properties.dstlow lower track destination limit
     * @param properties.dsthigh higher track destination limit
     */
    setProperties(properties: object | { srclow?: number; srchigh?: number; dstlow?: number; dsthigh?: number; } ): this;
}
