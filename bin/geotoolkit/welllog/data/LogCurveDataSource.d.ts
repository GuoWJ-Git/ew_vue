import {LogAbstractData} from './LogAbstractData';
import {DataSeries} from '../../data/DataSeries';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../../data/NumericalDataSeriesView';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {AbstractUnit} from '../../util/AbstractUnit';

/**
 * This class defines a well log curve data source.
 * @example
 * ```javascript
 * import {LogCurveDataSource} from '@int/geotoolkit/welllog/data/LogCurveDataSource';
 * const data1 = new LogCurveDataSource({ 'depth': depthObject, 'values': valuesObject });
 * ```
 */
export class LogCurveDataSource extends LogAbstractData {
    /**
     * This class defines a well log curve data source.
     * @param options options
     * @param options.name name of the curve
     * @param options.depths depths array, series or name or index of series in data table if it is provided
     * @param options.values values array, series or name or index of series in data table if it is provided
     * @param options.datatable DataTable or DataTableView which contains depth and value column
     */
    constructor(options?: object | { name?: string; depths?: number[] | DataSeries | NumericalDataSeries | NumericalDataSeriesView | string | number; values?: number[] | DataSeries | NumericalDataSeries | NumericalDataSeriesView | string | number; datatable?: AbstractDataTable; } );
    /**
     * Sets data
     * @param options addition options
     * @param options.name name of the curve
     * @param options.depths depths array, series or name or index of series in data table if it is provided
     * @param options.values values array, series or name or index of series in data table if it is provided
     * @param options.datatable DataTable or DataTableView which contains depth and value column
     */
    setData(options?: object | { name?: string; depths?: number[] | NumericalDataSeries | NumericalDataSeriesView | string | number; values?: number[] | NumericalDataSeries | NumericalDataSeriesView | string | number; datatable?: AbstractDataTable; } ): this;
    /**
     * Returns the internal series object used to store the depth data
     */
    getDepthData(): NumericalDataSeries | NumericalDataSeriesView;
    /**
     * Returns the internal series object used to store the value data
     */
    getValuesData(): NumericalDataSeries | NumericalDataSeriesView;
    /**
     * Return minimum Meaning depth (first depth with value)
     */
    getMinMeaningDepth(): number;
    /**
     * Return maximum Meaning depth (last depth with value)
     */
    getMaxMeaningDepth(): number;
    /**
     * Gets value at index
     * @param index index
     */
    getValue(index: number): number;
    /**
     * Gets depth at index
     * @param index index
     */
    getDepth(index: number): number;
    /**
     * Clear log data.
     */
    clear(): void;
    /**
     * Return value unit
     */
    getValueUnit(): AbstractUnit;
}
