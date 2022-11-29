import {AbstractScaledData} from '../../data/AbstractScaledData';
import {DataTableView} from '../../data/DataTableView';
import {DataSample} from '../../data/DataSample';
import {DataConversion} from '../../data/DataConversion';
import {DataInterpolation} from '../../data/DataInterpolation';
import {DataOrder} from '../../data/DataOrder';
import {Range} from '../../util/Range';

/**
 * The ScaledData is a helper object that encapsulates the data
 * representing a time series line and allows to associate either
 * conversion and/or interpolation objects with this data.
 */
export class ScaledData extends AbstractScaledData {
    /**
     * The ScaledData is a helper object that encapsulates the data
     * representing a time series line and allows to associate either
     * conversion and/or interpolation objects with this data.
     * @param data abstract log data
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
    constructor(data: DataTableView | object | { data?: DataTableView; scaledsamples?: DataSample[]; minwraplevel?: number; maxwraplevel?: number; conversion?: DataConversion; interpolation?: DataInterpolation; } , conversion: DataConversion, interpolation?: DataInterpolation, useOutOfRangeData?: boolean);
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
     * Gets data source
     */
    getSource(): DataTableView;
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
    getSamples(): DataSample[];
    /**
     * Gets a count of samples
     */
    getLength(): number;
    /**
     * Always return true for time series data
     */
    isForwardOnly(): boolean;
    /**
     * Always return geotoolkit.data.DataOrder.Ascending for time series data
     */
    getDataOrder(): DataOrder | number;
    /**
     * Convert value from original source to current scaled data
     * @param v value of the original data source
     */
    convertValueFromSource(v: number[] | number): number[] | number;
    /**
     * Convert value from scaled data source to original source
     * @param v value of the scaled data source
     */
    convertValueToSource(v: number[] | number): number[] | number;
    /**
     */
    getDataTimeStamp(): number;
    /**
     * Return a wrap levels, If data doesn't have wraps than it returns null
     * @param fromPosition from position
     * @param toPosition to position
     */
    getIndexRange(fromPosition: number, toPosition: number): Range;
    /**
     * Find index corresponding to depth
     * @param scaledSamples samples
     * @param position depth
     * @param length length of the array in the sample
     */
    static findIndex(scaledSamples: DataSample[], position: number, length: number): number;
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
     * @param position to return value
     */
    getValue(position: number): number;
    /**
     * @param position position to return value
     * @param samples samples
     */
    protected getValueInternal(position: number, samples: DataSample[]): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {data: DataTableView; scaledsamples: DataSample[]; minwraplevel: number; maxwraplevel: number; conversion: DataConversion; interpolation: DataInterpolation} | any;
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
    setProperties(properties: object | { data?: DataTableView; scaledsamples?: DataSample[]; minwraplevel?: number; maxwraplevel?: number; conversion?: DataConversion; interpolation?: DataInterpolation; } ): this;
}
