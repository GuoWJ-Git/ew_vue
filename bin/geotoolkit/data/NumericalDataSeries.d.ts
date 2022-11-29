import {DataSeries} from './DataSeries';
import {INumericalDataSeries} from './INumericalDataSeries';
import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Define a numerical series of data
 * It has predefined 'sum' and 'avg' formulas to use with {@link @int/geotoolkit/data/NumericalDataSeries.NumericalDataSeries#calculate}
 */
export class NumericalDataSeries extends DataSeries implements INumericalDataSeries {
    /**
     * Define a numerical series of data
     * It has predefined 'sum' and 'avg' formulas to use with {@link @int/geotoolkit/data/NumericalDataSeries.NumericalDataSeries#calculate}
     * @param options JSON options object
     * @param options.id unique id of the series
     * @param options.name name of the data series
     * @param options.unit unit of the data series
     * @param options.data an array of data
     */
    constructor(options?: object | { id?: number | string; name?: string; unit?: string | AbstractUnit; data?: number[]; } );
    /**
     * Adds a value to the data series.
     * @param value a new value
     */
    addValue(value: number): this;
    /**
     * Adds an array of values to the data series.
     * @param array an array of values
     */
    addValues(array: number[]): this;
    /**
     * Inserts a value at the specified index.
     * @param index the index number where to insert the value.
     * @param value the value to insert
     */
    insertValue(index: number, value: number): this;
    /**
     * Inserts an array of values at the specified index.
     * @param index the index number where to insert the values. Values will be added starting at the index number.
     * @param array the array of values to insert
     */
    insertValues(index: number, array: number[]): this;
    /**
     * Sets the value at given index.
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     * @param value value to set
     */
    setValue(index: number, value: number): this;
    /**
     * Sets an array of values to the data series.
     * @param array an array of values to set
     * @param copy make a deep copy of the values
     */
    setValues(array: number[], copy?: boolean): this;
    /**
     * Returns min value
     * @param unit unit optional output unit to convert the data to (if none specified, data is not converted)
     */
    getMin(unit?: string): number;
    /**
     * Returns max value
     * @param unit unit optional output unit to convert the data to (if none specified, data is not converted)
     */
    getMax(unit?: string): number;
}
