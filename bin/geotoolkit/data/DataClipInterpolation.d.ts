import {DataInterpolation} from './DataInterpolation';
import {DataConversion} from './DataConversion';
import {DataValueArray} from './DataValueArray';

/**
 * The DataClipInterpolation implements a simple clipping interpolation for the curve data.
 */
export class DataClipInterpolation extends DataInterpolation {
    /**
     * The DataClipInterpolation implements a simple clipping interpolation for the curve data.
     * @param conversion conversion from current to new coordinate system or properties object
     * @param conversion.low low limits
     * @param conversion.high high limits
     * @param conversion.conversion conversion from current to new coordinate system
     * @param low low limits
     * @param high high limits
     */
    constructor(conversion: DataConversion | object | { low?: number; high?: number; conversion?: DataConversion; } , low: number, high: number);
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
    getProperties(): {low: number; high: number; conversion: DataConversion} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.low low limits
     * @param properties.high high limits
     * @param properties.conversion conversion from current to new coordinate system
     */
    setProperties(properties: object | { low?: number; high?: number; conversion?: DataConversion; } ): this;
}
