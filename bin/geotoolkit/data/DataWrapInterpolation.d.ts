import {DataInterpolation} from './DataInterpolation';
import {DataConversion} from './DataConversion';
import {DataValueArray} from './DataValueArray';

/**
 * The DataWrapInterpolation implements a simple wrapping interpolation for the curve data.
 */
export class DataWrapInterpolation extends DataInterpolation {
    /**
     * The DataWrapInterpolation implements a simple wrapping interpolation for the curve data.
     * @param conversion conversion from current to new coordinate system or properties object
     * @param conversion.low track low limits
     * @param conversion.high track high limits
     * @param conversion.conversion conversion from current to new coordinate system
     * @param conversion.maxwraps maximum count of wraps
     * @param low track low limits
     * @param high track high limits
     * @param maxWraps maximum count of wraps (by default 5)
     */
    constructor(conversion: DataConversion | object | { low?: number; high?: number; conversion?: DataConversion; maxwraps?: number; } , low?: number, high?: number, maxWraps?: number);
    /**
     * Interpolate array of samples
     * @param start start index
     * @param count count of samples to interpolate
     * @param input input data
     * @param output output (interpolated) data
     */
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {low: number; high: number; conversion: DataConversion; maxwraps: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.low track low limits
     * @param properties.high track high limits
     * @param properties.conversion conversion from current to new coordinate system
     * @param properties.maxwraps maximum count of wraps
     */
    setProperties(properties: object | { low?: number; high?: number; conversion?: DataConversion; maxwraps?: number; } ): this;
}
