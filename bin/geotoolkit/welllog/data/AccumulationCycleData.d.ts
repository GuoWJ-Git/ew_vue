import {LogAbstractData} from './LogAbstractData';
import {AbstractUnit} from '../../util/AbstractUnit';

/**
 * Define data for AccumulationCycle visual
 * @example
 * ```javascript
 * const data1 = new AccumulationCycleData('AccumulationCycle', depths, values);
 * const data2 = new AccumulationCycleData({
 *   'depths': depths,
 *   'values': values,
 *   'name': 'AccumulationCycle'
 * });
 * ```
 */
export class AccumulationCycleData extends LogAbstractData {
    /**
     * Define data for AccumulationCycle visual
     * @param name data name, or object
     * @param name.depths array of depth values
     * @param name.values array of values
     * @param name.colors array of colors
     * @param name.titles array of titles
     * @param name.name The log data name
     * @param name.indexunit array of titles
     * @param name.valuesunit The log data name
     * @param depth array of depth values
     * @param values array of values
     * @param colors array of colors
     * @param titles array of titles
     */
    constructor(name?: string | object | { depths?: number[]; values?: number[]; colors?: string[]; titles?: string[]; name?: string; indexunit?: AbstractUnit; valuesunit?: AbstractUnit; } , depth?: number[], values?: number[], colors?: string[], titles?: string[]);
    /**
     * Return titles of the data
     */
    getTitles(): string[];
    /**
     * Return title by index
     * @param index index at the depth
     */
    getTitle(index: number): string | any;
    /**
     * Set titles of the data
     * @param titles The log data titles
     */
    setTitles(titles: string[]): this;
    /**
     * Return name of the data
     */
    getName(): string;
    /**
     * Set name of the data
     * @param name The log data name
     */
    setName(name: string): this;
    /**
     * Clear log data. Removes all samples and reset depth limits
     */
    clear(): void;
    /**
     * Return a count of the samples
     */
    getSize(): number;
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
     * Set fill color by index
     * @param index index of the sample
     * @param color fill color
     */
    setColor(index: number, color: string): this;
    /**
     * Return color by index
     * @param index index of the sample in the array
     */
    getColor(index: number): string;
    /**
     * Set value by index
     * @param index index of the sample
     * @param value sample values
     */
    setValue(index: number, value: number): this;
    /**
     * Sets values
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param colors The array of colors
     * @param titles The array of titles
     */
    setValues(depths: number[], values: number[], colors: string[], titles?: string[]): this;
    /**
     * Suspend update
     */
    suspendUpdate(): void;
    /**
     * Resume update.
     * forceUpdate calls updateDataStatistics (update min, max of values, depths...)
     * @param forceUpdate force update based on the state of the data
     */
    resumeUpdate(forceUpdate: boolean): void;
    /**
     * Add values
     * @param depth The depth for which you want to compute the value
     * @param value value at the specified depth
     * @param color color at the specified depth
     */
    addValue(depth: number, value: number, color: string): void;
    /**
     * Add values at the bottom of the log
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param colors The array of colors
     */
    addValues(depths: number[], values: number[], colors: string[]): void;
    /**
     * Remove values
     * @param index position where to remove the values
     * @param count count of samples
     */
    removeValues(index: number, count: number): void;
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
     * @param color color at the depth
     */
    mergeValue(depth: number, value: number, color: string): void;
    /**
     * Remove values from start to end depth.
     * If startDepth is NaN or endDepth is NaN then it uses infinity values
     * @param startDepth where to start trim
     * @param endDepth where to end trim
     */
    trimValues(startDepth: number, endDepth: number): void;
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
     * @param colors the colors to merge
     */
    mergeValues(depths: number[], values: number[], colors: string[]): void;
    /**
     * Sets the depths and values of this AccumulationCycleData using the given string arrays.
     * Uses parseFloat() to parse strings, also recognize 'NaN' values as Number.NaN.
     * @param depths array of strings
     * @param values array of strings
     * @param colors colors of strings
     */
    parseFromString(depths: string[], values: string[], colors: string[]): this;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
    getMaxDepth(): number;
    /**
     * Return minimum Meaning depth (first depth with value)
     */
    getMinMeaningDepth(): number;
    /**
     * Return maximum Meaning depth (last depth with value)
     */
    getMaxMeaningDepth(): number;
    /**
     * Return values
     */
    getValues(): number[];
    /**
     * Return an array of depths
     */
    getDepths(): number[];
    /**
     * Return an array of colors
     */
    getColors(): string[];
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
    getProperties(): {depths: number[]; values: number[]; colors: string[]; titles: string[]; name: string; indexunit: AbstractUnit; valuesunit: AbstractUnit} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depths The array of ordered depths
     * @param properties.values The array of values
     * @param properties.colors The array of colors
     * @param properties.titles array of titles
     * @param properties.name The log data name
     * @param properties.indexunit array of titles
     * @param properties.valuesunit The log data name
     */
    setProperties(properties: object | { depths?: number[]; values?: number[]; colors?: string[]; titles?: string[]; name?: string; indexunit?: AbstractUnit; valuesunit?: AbstractUnit; } ): this;
}
