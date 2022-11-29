import {NumericalDataSeries} from './NumericalDataSeries';
import {DataSeries} from './DataSeries';
import {DataTable} from './DataTable';

/**
 * Provides a set of methods to operate with {@link @int/geotoolkit/data/DataSeries.DataSeries}
 */
export class DataSeriesUtil {
    /**
     * Provides a set of methods to operate with {@link @int/geotoolkit/data/DataSeries.DataSeries}
     */
    constructor();
    /**
     * Remove values from start to end value of the index series and corresponded indices of the other series.
     * All series must have the same size.
     * @param indexSeries series to represent index data
     * @param startIndexValue start value of the index series where to start trim
     * @param endIndexValue end value of the index series where to end trim
     * @param arrayOfSeries array of data series
     * @param datatable optional data table as a host of destination series
     */
    static trimValues(indexSeries: NumericalDataSeries, startIndexValue: number, endIndexValue: number, arrayOfSeries: DataSeries[], datatable?: DataTable): void;
    /**
     * Merge data series from source to destination
     * This function works ONLY if the existing data is ordered.
     * @example
     * ```javascript
     * Depth       Value
     *              50           0
     *              100          1
     *              200          2
     *              300          3
     * mergeValues: [0,100,150,500], [-1,-100,-150,-500]
     *    ----     Depth       Value
     *    ===>       0           -1
     *    ----      50            0
     *    ===>      100         -100
     *    ===>      150         -150
     *    ----      200           2
     *    ----      300           3
     *    ===>      500         -500
     * ```
     * @param src object to represent source data
     * @param src.index series to represent index data of the source
     * @param src.series array of input data series
     * @param dst object to represent destination data
     * @param dst.index series to represent index data of the source
     * @param dst.series array of data series
     * @param dst.datatable optional data table as a host of destination series
     */
    static mergeValues(src?: object | { index?: NumericalDataSeries; series?: DataSeries[]; } , dst?: object | { index?: NumericalDataSeries; series?: DataSeries[]; datatable?: DataTable; } ): void;
}
