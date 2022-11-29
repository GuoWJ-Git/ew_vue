import {DataSeries} from './DataSeries';
import {AbstractDataSeries} from './AbstractDataSeries';
import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Read-only data series view which calculates values, depending on other series
 * @example
 * ```javascript
 * // using callback
 * const ds1 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('alfa');
 * const ds2 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('beta');
 * const calcds = new CalculatedDataSeries({
 *           'name': 'calculated',
 *           'sources': [ds1, ds2],
 *           'formula': (val) => val('alfa') + val('beta')
 * });
 * ```
 * @example
 * ```javascript
 * // using string
 * const ds1 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('alfa');
 * const ds2 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('beta');
 * const calcds = new CalculatedDataSeries({
 *           'name': 'calculated',
 *           'sources': [ds1, ds2],
 *           'formula': '2 * alfa + beta'
 * });
 * ```
 */
export class CalculatedDataSeries extends DataSeries {
    /**
     * Read-only data series view which calculates values, depending on other series
     * @param options options
     * @param options.formula callback or string to calculate values of the series
     * @param options.sources set of sources to be used by function
     * @param options.data inherited parameter will be ignored
     */
    constructor(options?: object | { formula?: Function | string; sources?: AbstractDataSeries[]; data?: object[]; } );
    /**
     * Set formula. String version supports Math functions such as cos, sin, sqrt etc.
     * @example
     * ```javascript
     * const ds1 = new NumericalDataSeries({'data': [1.1, 1.4, 1.6, 1.7]}).setName('alfa');
     * const calcds = new CalculatedDataSeries({
     *       'name': 'calculated',
     *       'sources': [ds1]
     * });
     * calcds.setFormula('round(alfa)');
     * ```
     * @param formula callback or string to calculate values of the series
     */
    setFormula(formula?: Function | string): this;
    /**
     * Does nothing
     * @param value a new value
     */
    addValue(value: any): this;
    /**
     * Does nothing
     * @param array an array of values
     */
    addValues(array: any[]): this;
    /**
     * Does nothing
     * @param index the index number where to insert the value.
     * @param value the value to insert
     */
    insertValue(index: number, value: any): this;
    /**
     * Does nothing
     * @param index the index number where to insert the values. Values will be added starting at the index number.
     * @param array the array of values to insert
     */
    insertValues(index: number, array: any[]): this;
    /**
     * Does nothing
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     * @param value value to set
     */
    setValue(index: number, value: any): this;
    /**
     * Does nothing
     * @param array an array of values to set
     * @param copy make a deep copy of the values
     */
    setValues(array: any[], copy?: boolean): this;
    /**
     * Does nothing
     * @param index the index number where to start removing the values
     * @param count the amount of values to remove
     */
    removeValues(index: number, count?: number): this;
    /**
     * Does nothing
     */
    clearValues(): this;
    /**
     * Returns an array of objects in the data series.
     * @param copy whether creating a copy of data
     * @param unit unit optional output unit to convert the data to. if not specified, data will not be converted
     */
    toArray(copy?: boolean, unit?: string | AbstractUnit): object[];
    /**
     * Returns true
     */
    isReadOnly(): boolean;
    /**
     * Set sources
     * @param sources set of sources to be used by function
     */
    setSources(sources?: AbstractDataSeries[]): this;
}
