import {ArrayLogAbstractData} from './ArrayLogAbstractData';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../../data/NumericalDataSeriesView';
import {AbstractDataRow} from './AbstractDataRow';
import {DataOrder} from '../../data/DataOrder';

/**
 * Define data source for array log visuals like Log2DVisual wo use DataSeries
 * @example
 * ```javascript
 * // create a table from data table
 * import {ArrayLogDataSource} from '@int/geotoolkit/welllog/data/ArrayLogDataSource';
 * const datatable = new ArrayLogDataSource({
 *   'datatable': table,
 *   'depths': {'index': 0 },
 *   'values': {'indices' : [1,2,3,4,5] },
 *   'angles': { 'values':  [0, Math.PI/2, Math.PI, Math.PI*3/2, Math.PI*2] }
 * });
 * ```
 * @example
 * ```javascript
 * // create a table from data series
 * const datatable = new ArrayLogDataSource({
 *   'datatable': table,
 *   'depths': {'series' : depthSeries },
 *   'values': {'series' : [valSeries1, valSeries2, valSeries3, valSeries4, valSeries5] },
 *   'angles': { 'values':  [0, Math.PI/2, Math.PI, Math.PI*3/2, Math.PI*2] }
 * });
 * ```
 */
export class ArrayLogDataSource extends ArrayLogAbstractData {
    /**
     * Define data source for array log visuals like Log2DVisual wo use DataSeries
     * @param options initialization parameters
     * @param options.name name of the data source
     * @param options.datatable optional parameter to specify data
     * @param options.depths optional parameter to specify depths data
     * @param options.depths.series optional parameter to specify depths
     * @param options.depths.index optional column index from table
     * @param options.values optional parameter to specify values
     * @param options.values.series values array of data series for each column
     * @param options.values.indices optional array of column indices from data table
     * @param options.angles optional properties of column angles
     * @param options.angles.series array of series to provide
     * @param options.angles.indices array of indices of columns to specify angles
     * @param options.angles.values array of angles
     */
    constructor(options?: object | { name?: string; datatable?: AbstractDataTable; depths?: object | { series?: NumericalDataSeries | NumericalDataSeriesView; index?: number; } ; values?: object | { series?: NumericalDataSeries[] | NumericalDataSeriesView[]; indices?: number[]; } ; angles?: object | { series?: NumericalDataSeries[] | NumericalDataSeriesView[]; indices?: number[]; values?: number[]; } ; } );
    /**
     */
    dispose(): void;
    /**
     * Sets data
     * @param options initialization parameters
     * @param options.name name of the data source
     * @param options.datatable optional parameter to specify data
     * @param options.depths optional parameter to specify depths data
     * @param options.depths.series optional parameter to specify depths
     * @param options.depths.index optional column index from table
     * @param options.values optional parameter to specify values
     * @param options.values.series values array of data series for each column
     * @param options.values.indices optional array of column indices from data table
     * @param options.angles optional properties of column angles
     * @param options.angles.series array of series to provide
     * @param options.angles.indices array of indices of columns to specify angles
     * @param options.angles.values array of angles
     */
    setData(options?: object | { name?: string; datatable?: AbstractDataTable; depths?: object | { series?: NumericalDataSeries | NumericalDataSeriesView; index?: number; } ; values?: object | { series?: NumericalDataSeries[] | NumericalDataSeriesView[]; indices?: number[]; } ; angles?: object | { series?: NumericalDataSeries[] | NumericalDataSeriesView[]; indices?: number[]; values?: number[]; } ; } ): void;
    /**
     * Return number of rows
     */
    getNumberOfRows(): number;
    /**
     * Return a row by index
     * @param index index of the row
     */
    getRow(index: number): AbstractDataRow;
    /**
     * Return minimum value
     */
    getMinValue(): number;
    /**
     * Return maximum value
     */
    getMaxValue(): number;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
    getMaxDepth(): number;
    /**
     * Return minimum angle of columns in radians
     */
    getMinAngle(): number;
    /**
     * Return maximum angle of columns in radians
     */
    getMaxAngle(): number;
    /**
     * Return information if depths have ascending order
     */
    isForwardOnly(): boolean;
    /**
     * return the order of depths array
     */
    getDataOrder(): DataOrder | number;
}
