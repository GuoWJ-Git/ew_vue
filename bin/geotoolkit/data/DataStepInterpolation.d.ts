import {DataInterpolation} from './DataInterpolation';
import {DataValueArray} from './DataValueArray';

/**
 * Provides step-like interpolation for well log data. It provides zigzag-type
 * interpolation with alternate horizontal and vertical lines.
 */
export class DataStepInterpolation extends DataInterpolation {
    /**
     * Provides step-like interpolation for well log data. It provides zigzag-type
     * interpolation with alternate horizontal and vertical lines.
     * @param interpolationType Type of step interpolation or properties object
     * @param interpolationType.interpolationtype Type of step interpolation
     */
    constructor(interpolationType?: InterpolationType | object | { interpolationtype?: InterpolationType; } );
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
    getProperties(): {interpolationtype: InterpolationType} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.interpolationtype interpolation type
     */
    setProperties(properties: object | { interpolationtype?: InterpolationType; } ): this;
}
/**
 * Enum of step interpolation type
 */
export enum InterpolationType {
    /**
     * Linear
     */
    Linear = 'Linear',
    /**
     * Middle
     */
    MiddleStep = 'MiddleStep',
    /**
     * End
     */
    EndStep = 'EndStep',
    /**
     * Start
     */
    StartStep = 'StartStep'
}
