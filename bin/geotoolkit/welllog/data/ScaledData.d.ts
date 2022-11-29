import {AbstractScaledData} from '../../data/AbstractScaledData';
import {LogAbstractData} from './LogAbstractData';
import {LogDataSample} from './LogDataSample';
import {DataConversion} from '../../data/DataConversion';
import {DataInterpolation} from '../../data/DataInterpolation';
import {DataOrder} from '../../data/DataOrder';
import {Range} from '../../util/Range';
import {InterpolationType} from '../../data/DataStepInterpolation';
import {DataSample} from '../../data/DataSample';

/**
 * The ScaledData is a helper object that encapsulates the data
 * representing a well log curve and allows to associate either
 * conversion and/or interpolation objects with this data.
 */
export class ScaledData extends AbstractScaledData {
    /**
     * The ScaledData is a helper object that encapsulates the data
     * representing a well log curve and allows to associate either
     * conversion and/or interpolation objects with this data.
     * @param data abstract log data or properties object
     * @param data.data abstract log data
     * @param data.scaledsamples scaled samples
     * @param data.minwraplevel minimum wrap level
     * @param data.maxwraplevel maximum wrap level
     * @param data.conversion data conversion
     * @param data.interpolation algorithm to interpolate samples
     * @param conversion data conversion
     * @param interpolation algorithm to interpolate samples
     * @param useOutOfRangeData convert values equals or less to zero to 0 instead of NaN
     */
    constructor(data: LogAbstractData | object | { data?: LogAbstractData; scaledsamples?: LogDataSample[]; minwraplevel?: number; maxwraplevel?: number; conversion?: DataConversion; interpolation?: DataInterpolation; } , conversion: DataConversion, interpolation?: DataInterpolation, useOutOfRangeData?: boolean);
    /**
     * Return name of the data
     */
    getName(): string;
    /**
     * Sets conversion
     * @param conversion conversion of the data
     */
    setConversion(conversion: DataConversion): this;
    /**
     * Sets interpolation
     * @param interpolation algorithm to interpolate samples
     */
    setInterpolation(interpolation: DataInterpolation): this;
    /**
     * Gets source
     */
    getSource(): LogAbstractData;
    /**
     * Get minimum depth
     */
    getMinDepth(): number;
    /**
     * Returns maximum depth
     */
    getMaxDepth(): number;
    /**
     * Get minimum depth
     */
    getMinPosition(): number;
    /**
     * Returns maximum depth
     */
    getMaxPosition(): number;
    /**
     * Returns minimum value
     */
    getMinValue(): number;
    /**
     * Returns maximum value
     */
    getMaxValue(): number;
    /**
     * Gets scaled samples
     */
    getSamples(): LogDataSample[];
    /**
     * Return sample at specified index
     * @param index index of the sample
     */
    getSample(index: number): LogDataSample;
    /**
     * Gets a count of samples
     */
    getLength(): number;
    /**
     * Return the count of the samples
     */
    getSize(): number;
    /**
     * Return true if array of the depths is ordered
     */
    isForwardOnly(): boolean;
    /**
     * return the order of depths array
     */
    getDataOrder(): DataOrder | number;
    /**
     * Convert value from original source to current scaled data
     * @param v value of the original data source
     * @param d depth of the original data source
     */
    convertValueFromSource(v: number[] | number, d?: number[] | number): number[] | number;
    /**
     * Convert value from scaled data source to original source
     * @param v value of the scaled data source
     */
    convertValueToSource(v: number[] | number): number[] | number;
    /**
     * Gets value array either
     */
    getValueArray(): number[];
    /**
     * Gets position array
     */
    getPositionArray(): number[];
    /**
     * Return a wrap levels, If data doesn't have wraps than it returns null
     * @param fromDepth from depth
     * @param toDepth to depth
     */
    getIndexRange(fromDepth: number, toDepth: number): Range;
    /**
     * Find index corresponding to depth
     * @param scaledSamples samples
     * @param depth depth
     * @param length length of the array in the sample
     */
    static findIndex(scaledSamples: LogDataSample[], depth: number, length: number): number;
    /**
     * Return minimum wrap level. By default it is 0
     */
    getMinWrapLevel(): number;
    /**
     * Sets minimum wrap level value
     * @param level minimum wrap level
     */
    setMinWrapLevel(level: number): this;
    /**
     * Return maximum wrap level. By default it is 0
     */
    getMaxWrapLevel(): number;
    /**
     * Sets maximum wrap level value
     * @param level maximum wrap level.
     */
    setMaxWrapLevel(level: number): this;
    /**
     * Returns value at specified depth
     * @param depth to return value
     */
    getValue(depth: number): number;
    /**
     * @param depth depth to return value
     * @param samples samples
     */
    protected getValueInternal(depth: number, samples: number[]): number;
    /**
     * Return the value matching the given depth or NaN if the given depth is out of the logdata depth range.
     * If the depths are strictly increasing:
     *  - The returned value will be interpolated when necessary. See example 1
     * If the depths are not strictly increasing but never decreasing:
     * - The value returned will be the first one found (in the insertion order). See example 2
     * - The value returned will be interpolated between the last one found and its closest larger neighbor. See example 2
     * If the depths are not always increasing (not forward only):
     * - The value returned will be the last one found (in the insertion order). See example 3
     * - The value returned will be interpolated between the first one found and its closest larger neighbor. See example 3
     * @param depth The depth for which you want to compute the value
     * @param fromIndex index of sample in depths
     * @param toIndex index of sample in depths
     * @param interpolation interpolation type for the value
     */
    getValueAt(depth: number, fromIndex?: number, toIndex?: number, interpolation?: InterpolationType): number;
    /**
     * private
     * @param samples samples
     * @param depth depth
     * @param prev prev
     * @param next next
     */
    getSampleAt(samples: DataSample[], depth: number, prev: number, next: number): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {data: LogAbstractData; scaledsamples: LogDataSample[]; minwraplevel: number; maxwraplevel: number; conversion: DataConversion; interpolation: DataInterpolation} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data abstract log data
     * @param properties.scaledsamples scaled samples
     * @param properties.minwraplevel minimum wrap level
     * @param properties.maxwraplevel maximum wrap level
     * @param properties.conversion data conversion
     * @param properties.interpolation algorithm to interpolate samples
     */
    setProperties(properties: object | { data?: LogAbstractData; scaledsamples?: LogDataSample[]; minwraplevel?: number; maxwraplevel?: number; conversion?: DataConversion; interpolation?: DataInterpolation; } ): this;
}
