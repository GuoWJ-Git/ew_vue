import {LogAbstractData} from './LogAbstractData';
import {AbstractUnit} from '../../util/AbstractUnit';

/**
 * This class is the default implementation of a welllog datasource. It contains both the index values (md, tvd, etc) and the corresponding log values.
 * {@link @int/geotoolkit/welllog/LogCurve.LogCurve} can use LogData as a datasource to render a welllog as a curve in a track.<br>
 * <br>
 * The LogData does not requires the index to be strictly increasing and it will not sort the indices/values.
 * It also keeps track of its state (typically for realtime scenario) through {@link @int/geotoolkit/welllog/data/LogDataState.LogDataState}.
 * The LogData computes and maintains some statistics about its data (min, max) that are used by the shapes to render properly and efficiently.<br>
 * <br>
 * Any data sample can be marked as null. Null data values are
 * supported by visuals as breaks in the curve. The null value of sample can be specified using Number.NaN or NaN value.
 * <br>
 * It offers several functions to change the data it contains and will fire events accordingly. Note that most of the shapes that use LogData as datasource are optimized based on those events.
 * Therefore care must be given when changing the data. For example, clearing and setting all the values+1 is more expensive than adding a value.
 * @example
 * ```javascript
 * import {LogData} from '@int/geotoolkit/welllog/data/LogData';
 * const data1 = new LogData('GR');
 * const data2 = new LogData(depths, values);
 * const data3 = new LogData({
 *      'name': 'GR',
 *      'depths': depths,
 *      'values': values
 * });
 * ```
 */
export class LogData extends LogAbstractData {
    /**
     * This class is the default implementation of a welllog datasource. It contains both the index values (md, tvd, etc) and the corresponding log values.
     * {@link @int/geotoolkit/welllog/LogCurve.LogCurve} can use LogData as a datasource to render a welllog as a curve in a track.<br>
     * <br>
     * The LogData does not requires the index to be strictly increasing and it will not sort the indices/values.
     * It also keeps track of its state (typically for realtime scenario) through {@link @int/geotoolkit/welllog/data/LogDataState.LogDataState}.
     * The LogData computes and maintains some statistics about its data (min, max) that are used by the shapes to render properly and efficiently.<br>
     * <br>
     * Any data sample can be marked as null. Null data values are
     * supported by visuals as breaks in the curve. The null value of sample can be specified using Number.NaN or NaN value.
     * <br>
     * It offers several functions to change the data it contains and will fire events accordingly. Note that most of the shapes that use LogData as datasource are optimized based on those events.
     * Therefore care must be given when changing the data. For example, clearing and setting all the values+1 is more expensive than adding a value.
     * @param options array of depths, data name, or object
     * @param options.depths The array of depths
     * @param options.values The array of values
     * @param options.name name of data
     * @param options.indexunit unit index unit
     * @param options.valuesunit unit values unit
     * @param options.metainfos array of additional info
     * @param values array of values
     */
    constructor(options?: number[] | string | object | { depths?: number[]; values?: number[]; name?: string; indexunit?: AbstractUnit | string; valuesunit?: AbstractUnit | string; metainfos?: object[]; } , values?: number[]);
    /**
     * Set name of the data
     * @param name The log data name
     */
    setName(name: string): this;
    /**
     * Clear log data. Removes all samples and reset depth limits
     */
    clear(): this;
    /**
     * Sets state of data.
     * Values can be (Empty,Normal, Warning,Error,Fetching).
     * @param state state of data.
     */
    setState(state: string): this;
    /**
     * Return state
     */
    getState(): string;
    /**
     * Return depth by index
     * @param index index at the depth
     */
    getDepth(index: number): number;
    /**
     * Return value by index
     * @param index index of the sample in the array
     */
    getValue(index: number): number;
    /**
     * Set value by index
     * @param index index of the sample
     * @param value sample values
     */
    setValue(index: number, value: number): this;
    /**
     * Sets values
     * @example
     * ```javascript
     * // Following example shows how to reverse depths and values for the curve displayed.
     * new LogData('Curve Name')
     *   .setValues(depths.reverse(), values.reverse());
     * ```
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param metaInfos The array of metaInfo
     * @param deepCopy if false, provided arrays shouldn't be changed outside
     */
    setValues(depths: number[], values: number[], metaInfos?: object[], deepCopy?: boolean): this;
    /**
     * Suspend update
     */
    suspendUpdate(): this;
    /**
     * Resume update.
     * forceUpdate calls updateDataStatistics (update min, max of values, depths...)
     * @param forceUpdate force update based on the state of the data
     */
    resumeUpdate(forceUpdate: boolean): this;
    /**
     * Add values
     * @param depth The depth for which you want to compute the value
     * @param value value at the specified depth
     * @param metaInfo meta info
     */
    addValue(depth: number, value: number, metaInfo: object): this;
    /**
     * Add values at the bottom of the log
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param metaInfos meta info
     */
    addValues(depths: number[], values: number[], metaInfos?: object[]): this;
    /**
     * Remove values
     * @param index position where to remove the values
     * @param count count of samples
     */
    removeValues(index: number, count: number): this;
    /**
     * Insert/Replace the given value at the correct place in the log.
     * This function works ONLY if the existing data is ordered.
     * @example
     * ```javascript
     * Depth       Value
     *              100          0
     *              200          1
     * mergeValue(150,3)
     *             Depth       Value
     *              100          0
     *              150          3
     *              200          1
     * ```
     * @param depth The depth for which you want to compute the value
     * @param value value at the depth
     * @param metaInfo meta info
     */
    mergeValue(depth: number, value: number, metaInfo?: object): this;
    /**
     * Remove values from start to end depth.
     * If startDepth is NaN or endDepth is NaN then it uses infinity values
     * @param startDepth where to start trim
     * @param endDepth where to end trim
     */
    trimValues(startDepth: number, endDepth: number): this;
    /**
     * Inserts/Replace the given values at the correct place in the log.
     * This function works ONLY if the existing data is ordered.
     * @example
     * ```javascript
     * Depth       Value
     *              50           0
     *              100          1
     *              200          2
     *              300          3
     * mergeValue([0,100,150,500], [-1,-100,-150,-500])
     *    ----     Depth       Value
     *    ===>       0           -1
     *    ----      50            0
     *    ===>      100         -100
     *    ===>      150         -150
     *    ----      200           2
     *    ----      300           3
     *    ===>      500         -500
     * ```
     * @param depths the place where to merge in the log
     * @param values the values to merge
     * @param checkValues check values before merge
     * @param metaInfos metaInfos
     */
    mergeValues(depths: number[], values: number[], checkValues?: boolean, metaInfos?: object[]): this;
    /**
     * Sets the depths and values of this logdata using the given string arrays.
     * Uses parseFloat() to parse strings, also recognize 'NaN' values as Number.NaN.
     * @param depths array of strings
     * @param values array of strings
     */
    parseFromString(depths: string[], values: string[]): this;
    /**
     * Return minimum Meaning depth (first depth with value)
     */
    getMinMeaningDepth(): number;
    /**
     * Return maximum Meaning depth (last depth with value)
     */
    getMaxMeaningDepth(): number;
    /**
     * Return value by depth, using linear interpolation if necessary.
     * See LogAbstractData.findValueAt.
     * @param depth The depth for which you want to compute the value
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     */
    getValueInRange(depth: number, prev: number, next: number): number;
    /**
     * computes a value at specified depth
     * @param depth The depth for which you want to compute the value
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     */
    static findValueAt(depth: number, depths: any[], values: any[], prev: number, next: number): number;
    /**
     * Sets value unit
     * @param unit value unit
     */
    setValueUnit(unit: AbstractUnit | string): this;
    /**
     * Sets index unit
     * @param unit index unit
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depths: number[]; values: number[]; name: string; indexunit: AbstractUnit; valuesunit: AbstractUnit; metainfos: object[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depths depths
     * @param properties.values values
     * @param properties.name The log data name
     * @param properties.indexunit index unit
     * @param properties.valuesunit value unit
     * @param properties.metainfos array of additional info
     */
    setProperties(properties: object | { depths?: number[]; values?: number[]; name?: string; indexunit?: AbstractUnit | string; valuesunit?: AbstractUnit | string; metainfos?: object[]; } ): this;
    /**
     * Returns array of additional info
     */
    getMetaInfos(): object[];
    /**
     * Sets array of additional info
     * @param infos additions
     */
    setMetaInfo(infos: object[]): this;
    /**
     * Gets additional info by index
     * @param index index
     */
    getMetaInfo(index: number): object;
}
