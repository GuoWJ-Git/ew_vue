import {NumericalDataSeries} from './NumericalDataSeries';

/**
 * Define data object as array.
 * @deprecated since 2020.1 (3.1) Use NumericalDataSeries instead
 */
export class ArrayData extends NumericalDataSeries {
    /**
     * Define data object as array.
     * @param options JSON Object
     * @param options.data array data
     * @param options.name name of the Array
     * @param options.unit unit of the Array
     */
    constructor(options?: object | { data?: number[]; name?: string; unit?: string; } );
    /**
     * return value at specified index
     * @param index index at which value will be returned
     * @param unit to convert the data to (if none specified, data is not converted)
     */
    getValue(index: number, unit?: string): number;
    /**
     * Sets array of data
     * @param value array data
     */
    setData(value: number[]): this;
    /**
     * @param shift The shift to apply to the data
     */
    shift(shift: number): this;
    /**
     * Add array of data
     * @param value array of data
     */
    addData(value: number[]): this;
}
