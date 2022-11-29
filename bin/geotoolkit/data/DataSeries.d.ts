import {AbstractDataSeries} from './AbstractDataSeries';
import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Function to calculate
 */
export type FunctionCallback = (dataSeries: DataSeries) => any;
/**
 * Define a generic series of data to be used for any type.
 */
export class DataSeries extends AbstractDataSeries {
    /**
     * Define a generic series of data to be used for any type.
     * @param options JSON options object
     * @param options.id unique id of the series
     * @param options.name name of the data series
     * @param options.type a JavaScript type of the data series
     * @param options.unit unit of the data series
     * @param options.data an array of data
     */
    constructor(options: object | { id?: number | string; name?: string; type?: string; unit?: string | AbstractUnit; data?: object[]; } );
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param copyData copy data
     */
    protected copyConstructor(src: DataSeries, copyData?: boolean): this;
    /**
     * Returns false
     */
    isReadOnly(): boolean;
    /**
     * Set function which can be used to calculate some value (e.g. sum, avg etc.)
     * @example
     * ```javascript
     * DataSeries.setFormula('concat',
     *      (series) => {
     *               return series.toArray().join(' ');
     *       }
     * );
     * const series = new DataSeries({
     *           'type': 'string',
     *           'data': ['just', 'some', 'text']
     *       });
     * console.log(series.calculate('concat')); // 'just some text'
     * ```
     * @param name name of function or parameters object
     * @param name.name name of function
     * @param name.func handler, use null to unset
     * @param name.desc description
     * @param func handler, use null to unset
     * @param desc description
     */
    static setFormula(name: string | object | { name?: string; func?: FunctionCallback | any; desc?: string; } , func?: FunctionCallback | any, desc?: string): void;
    /**
     * List formulas
     */
    static getFormulas(): string[];
    /**
     * Get formula's description
     * @param name name of function
     */
    static getFormulaDescription(name?: string): string | any;
    /**
     * Run function. See available formulas list by {@link @int/geotoolkit/data/DataSeries.DataSeries#getFormulas}
     * @param name name
     */
    calculate(name: string): any;
    /**
     * Adds a value to the data series.
     * @param value a new value
     */
    addValue(value: any): this;
    /**
     * Adds an array of values to the data series.
     * @param array an array of values
     */
    addValues(array: any[]): this;
    /**
     * Inserts a value at the specified index.
     * @param index the index number where to insert the value.
     * @param value the value to insert
     */
    insertValue(index: number, value: any): this;
    /**
     * Inserts an array of values at the specified index.
     * @param index the index number where to insert the values. Values will be added starting at the index number.
     * @param array the array of values to insert
     */
    insertValues(index: number, array: any[]): this;
    /**
     * Returns the value at given index.
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     */
    getValue(index: number): any;
    /**
     * Sets the value at given index.
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     * @param value value to set
     */
    setValue(index: number, value: any): this;
    /**
     * Sets an array of values to the data series.
     * @param array an array of values to set
     * @param copy make a deep copy of the values
     */
    setValues(array: any[], copy?: boolean): this;
    /**
     * Removes a specified amount of values at the specified index.
     * @param index the index number where to start removing the values
     * @param count the amount of values to remove
     */
    removeValues(index: number, count?: number): this;
    /**
     * Clears all values of the data series.
     */
    clearValues(): this;
    /**
     * Sets unit of the data series.
     * @param unit unit to be set
     */
    setUnit(unit?: string | AbstractUnit): this;
}
/**
 * Type of state changes
 */
export enum StateChanges {
    /**
     * Added new values
     */
    Added = 'added',
    /**
     * Removed values
     */
    Removed = 'removed'
}
