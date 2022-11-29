import {DataSource} from './DataSource';
import {DataTable} from './DataTable';
import {Range} from '../util/Range';
import {DataSeries} from './DataSeries';

/**
 * Define a set of tables to make requests, manage allocated memory,
 * merge received data samples
 * <p>
 * Data source can contain several data tables with different data ranges. Each table has a virtual
 * range, which usually contains a full data range on server. If method fetch is called then data set verifies
 * if data is already exist. If data is not exists then it makes request to retrieve a data range. If data set receives
 * a new data it merges existing data table with new data and keeps a valid range. if data is not received then it
 * marks invalid range and it can be updated the next time. In the same time data set tracks allocated memory and deallocate
 * automatically old ranges.
 * </p>
 * @example
 * ```javascript
 * // How to provide data
 * import {Events} from '@int/geotoolkit/data/Events';
 * import {Range} from '@int/geotoolkit/util/Range';
 * ...
 * dataset.on(Events.DataFetching, (event, sender, args) => {
 *   const data = [[500, 600], [0.5, 0.7], [100, 200]];
 *   args['callback'](null, [data]);
 * });
 * dataset.fetch(new Range(1000, 2000), 5);
 * ```
 * @example
 * ```javascript
 * // How to provide data with limits
 * dataset.on(Events.DataFetching, (event, sender, args) => {
 *   const data = [[500, 600], [0.5, 0.7], [100, 200]];
 *   args['callback'](null, { 'limits': new Range(500, 600), 'columns': data });
 * });
 * dataset.fetch(new Range(500, 600), 5);
 * ```
 */
export class DataSet extends DataSource {
    /**
     * Define a set of tables to make requests, manage allocated memory,
     * merge received data samples
     * <p>
     * Data source can contain several data tables with different data ranges. Each table has a virtual
     * range, which usually contains a full data range on server. If method fetch is called then data set verifies
     * if data is already exist. If data is not exists then it makes request to retrieve a data range. If data set receives
     * a new data it merges existing data table with new data and keeps a valid range. if data is not received then it
     * marks invalid range and it can be updated the next time. In the same time data set tracks allocated memory and deallocate
     * automatically old ranges.
     * </p>
     * @param options parameters
     * @param options.autoupdateinterval auto update interval in ms
     * @param options.numberofparallelrequests number of parallel requests
     * @param options.requestwindowmultiplier extend of requested range
     * @param options.maxmemory maximum memory for all data table in Mb
     * @param options.decimation support decimation with requests
     * @param options.cleartableonscale clear requested data range in the tables before making fetch and scale is changed. If it is false then
     * range will be clean before making request overwise it is cleaned then new data is arrived. This option works only if decimation is enabled.
     * @param options.includerequestlimits include requested limits as a valid instead of
     * returned main index limits if limits is not specified
     */
    constructor(options?: object | { autoupdateinterval?: number; numberofparallelrequests?: number; requestwindowmultiplier?: number; maxmemory?: number; decimation?: boolean; cleartableonscale?: boolean; includerequestlimits?: boolean; } );
    /**
     * Add a new data table to data set
     * @param table a table to add
     * @param range a virtual range on the server
     * @param indexColumnName name of column used for Index data
     */
    addTable(table: DataTable, range: Range, indexColumnName?: string): this;
    /**
     * Remove table from data set
     * @param table table to be removed
     */
    removeTable(table: DataTable): this;
    /**
     * Remove table from data set by index
     * @param index index of the table to be removed
     */
    removeTableAt(index: number): this;
    /**
     * Returns number of tables
     */
    getNumberOfTables(): number;
    /**
     * Return data table by index
     * @param index index of table
     */
    getTable(index: number): DataTable;
    /**
     * Return data range by index
     * @param index index of table
     */
    getIndexRange(index: number): Range;
    /**
     * Sets data range by index
     * @param index index of table
     * @param range a virtual range on the server
     */
    setIndexRange(index: number, range: Range): this;
    /**
     * Invalid a data range of the specified table
     * @param index index of table
     * @param range range to invalidate
     * @param clearData clear rows of data table
     */
    invalidateTableRange(index: number, range?: Range, clearData?: boolean): this;
    /**
     * Invalid a data range of all tables
     * @param range range to invalidate
     * @param clearData clear rows of data table
     */
    invalidateRange(range?: Range, clearData?: boolean): void;
    /**
     * Gets index column for the specified table
     * @param index index of table
     */
    getIndexColumn(index: number): DataSeries | null;
    /**
     * Return a union data range by all tables
     */
    getFullIndexRange(): Range;
    /**
     * Enable / disable decimation
     * @param enabled enable decimation
     */
    enableDecimation(enabled: boolean): this;
    /**
     * Returns status if decimation is enabled
     */
    isDecimationEnabled(): boolean;
    /**
     * Fetch data for all tables from the source. This method can modify existing data
     * @param limits data range to fetch
     * @param scale current scale factor
     */
    fetch(limits: Range, scale: number): this;
    /**
     * Fetch data table from the source. This method can modify existing data
     * @param index index of the table
     * @param limits data range to fetch
     * @param scale current scale factor
     */
    fetchTable(index: number, limits: Range, scale: number): this;
    /**
     * Clear the current data
     * @param limits limits that has been released
     */
    clearAllTables(limits?: Range | null): this;
    /**
     * Fetch data range.
     * @param tables an array of updating tables
     * @param limits limits
     * @param scale scale
     * @param callback callback function to return a result of query
     */
    protected fetchDataRange(tables: DataTable[], limits: Range, scale: number, callback: Function): void;
    /**
     * Dispose.
     */
    dispose(): void;
}
