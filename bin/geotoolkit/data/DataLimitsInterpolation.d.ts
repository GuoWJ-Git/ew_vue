import {DataInterpolation} from './DataInterpolation';
import {DataValueArray} from './DataValueArray';

/**
 * This interpolation cuts values lower and upper track limits
 */
export class DataLimitsInterpolation extends DataInterpolation {
    /**
     * This interpolation cuts values lower and upper track limits
     * @param low low limit or properties object
     * @param low.low low limit
     * @param low.high high limit
     * @param low.interpolationedge type of edge value interpolation
     * @param high high limit
     * @param interpolationedge type of edge value interpolation
     */
    constructor(low: number | object | { low?: number; high?: number; interpolationedge?: InterpolationEdge | string; } , high: number, interpolationedge?: InterpolationEdge | string);
    /**
     * Interpolate array of samples as follows:
     * values smaller than track low limit are adjusted to the low limit
     * whereas
     * values greater than track high limit are adjusted to the high limit
     * @param start start index
     * @param count count of samples to interpolate
     * @param input input data
     * @param output output data
     */
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {low: number; high: number; interpolationedge: InterpolationEdge} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.low low limit
     * @param properties.high high limit
     * @param properties.interpolationedge edge value interpolation type
     */
    setProperties(properties: object | { low?: number; high?: number; interpolationedge?: InterpolationEdge | string; } ): this;
}
/**
 * Edge Interpolation types
 */
export enum InterpolationEdge {
    /**
     * Cut edge values
     */
    Cut = 'cut',
    /**
     * Interpolate edge values, default interpolation type
     */
    Interpolate = 'interpolate'
}
