import {AbstractDataTable} from './AbstractDataTable';
import {DataSeries} from './DataSeries';
import {AbstractUnit} from '../util/AbstractUnit';
import {AbstractDataSeries} from './AbstractDataSeries';

/**
 * Define a data table as a collection of data series defined as columns in the
 * table. This code is inspired by google table.
 * <p>
 * The data table can be read only, which means that each column is immutable,
 * but it is still possible to add or remove columns.
 * </p>
 * @example
 * ```javascript
 * datatable = new DataTable({
 *   cols: [
 *           { name: 'col1', type: 'number'},
 *           { name: 'col2', type: 'number'}
 *       ]
 * });
 * ```
 */
export class DataTable extends AbstractDataTable {
    /**
     * Define a data table as a collection of data series defined as columns in the
     * table. This code is inspired by google table.
     * <p>
     * The data table can be read only, which means that each column is immutable,
     * but it is still possible to add or remove columns.
     * </p>
     * @param data parameters
     * @param data.meta a map of meta information properties
     * @param data.columnFactory a custom factory to create a new data series from JSON object
     * @param data.cols an array of series to represents columns. All columns must have the same number of rows
     * @param data.rowsdata an array of rows or a number of empty rows to add
     * @param data.colsdata an array of columns data to add. Will be ignored if rowsdata is not null
     */
    constructor(data?: object | { meta?: object; columnFactory?: Function; cols?: (DataSeries | object)[]; rowsdata?: object[][] | number; colsdata?: object[][]; } );
    /**
     * Returns a clone of the data table.
     * @param copyData copy data
     */
    clone(copyData?: boolean): DataTable;
    /**
     * Adds a new column to the data table.
     * @example
     * ```javascript
     * // creating common column
     * datatable.addColumn({ 'name': 'col4', 'type': 'number', 'data': [1, 2, 3, 4] });
     * ```
     * @example
     * ```javascript
     * // creating calculated column
     * const table = new DataTable({'cols': [
     *      {'name': 'alfa', 'type': 'number', 'data': [1, 4, 6, 7]},
     *      {'name': 'beta', 'type': 'number', 'data': [0, 1, 2, 3]}
     * ]});
     * table.addColumn( {
     *      'name': 'calculated',
     *      'sources': [table.getColumnByName('alfa'), table.getColumnByName('beta')],
     *      'formula': '2 * alfa + beta'
     * });
     * ```
     * @param column a geotoolkit.data.DataSeries object or a JSON object containing descriptions.
     * @param column.id unique id of the data series
     * @param column.name name of the data series
     * @param column.type a JavaScript type of the data series
     * @param column.unit unit of the data series
     * @param column.data an array of data
     * @param column.formula callback or string to calculate values of the series, used for {@link @int/geotoolkit/data/CalculatedDataSeries.CalculatedDataSeries}
     * @param column.sources set of sources to be used by function, used for {@link @int/geotoolkit/data/CalculatedDataSeries.CalculatedDataSeries}
     */
    addColumn(column: DataSeries | object | { id?: number | string; name?: string; type?: string; unit?: string | AbstractUnit; data?: object[]; formula?: Function | string; sources?: AbstractDataSeries[]; } ): this;
    /**
     * Removes column(s) at the specified index.
     * @param columnIndex column index to remove
     * @param numberOfColumns number of columns to remove
     */
    removeColumns(columnIndex: number, numberOfColumns?: number): this;
    /**
     * Inserts a column at specified index.
     * @param columnIndex column index to insert
     * @param column column
     */
    insertColumn(columnIndex: number, column: DataSeries | object): this;
    /**
     * Fills data table with specified array of column data.
     * @example
     * ```javascript
     * // fill table with two columns
     * datatable.fillTable([[10, 20, 30, 50], [30, 40, 30, 50]]);
     * ```
     * @param columnsArray array of values by column
     */
    fillTable(columnsArray: object[][]): this;
    /**
     * Adds a new row to the data table.
     * @example
     * ```javascript
     * // add a new row to a four-column data table
     * datatable.addRow([10, 20, 30, 50]);
     * ```
     * @param cellArray array of cells
     * @param ignoreMissingValue ignore missing value
     */
    addRow(cellArray: object[], ignoreMissingValue?: boolean): this;
    /**
     * Adds new rows to the data table. This method can be called to create new empty rows, or with data used to populate the rows
     * @example
     * ```javascript
     * // add two rows to a three-column data table
     * datatable.addRows([[10, 20, 30], [50, 70, 100]]);
     * ```
     * @param rowsArray rows data or a number of empty rows to add
     * @param ignoreMissingValue ignore missing value
     */
    addRows(rowsArray: object[][] | number, ignoreMissingValue?: boolean): this;
    /**
     * Insert a row at the specified row index
     * @example
     * ```javascript
     * // insert a row at index 10 to a four-column data table
     * datatable.insertRow(10, [10, 20, 30, 50]);
     * ```
     * @param rowIndex index number where to insert the new row
     * @param cellArray array of cells
     */
    insertRow(rowIndex: number, cellArray: object[]): this;
    /**
     * Returns an array of values at specified row index.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param cells optional array to fill values
     */
    getRow(rowIndex: number, cells?: object[]): object[];
    /**
     * Sets the value of the cell at given row and column index.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param columnIndex index of the column. should be a number greater than or equal to zero, and less
     * than the number of columns as returned by the getNumberOfColumns() method.
     * @param value a value to be set to the cell.
     */
    setValue(rowIndex: number, columnIndex: number, value?: any): this;
    /**
     * Sets an array of values at specified column index.
     * @param columnIndex index of the column
     * @param cellArray array of values to set
     */
    setColumnValues(columnIndex: number, cellArray: any[]): this;
    /**
     * Removes row(s) from all columns in the data table.
     * @param rowIndex the index number where to start removing the rows
     * @param numberOfRows the amount of rows to remove
     */
    removeRows(rowIndex: number, numberOfRows?: number): this;
    /**
     * Clears all cells of the data table.
     */
    clear(): this;
    /**
     * Notify if data is changed
     * @deprecated since 3.3 (2021.1)
     * @remarks fires {@link @int/geotoolkit/data/Events~Events~Updated}
     * @param args event args
     */
    update(args?: any): this;
    /**
     * Sets properties of specified column.
     * @param columnIndex index of the column
     * @param properties a map of properties for the specified column.
     * All properties will be merged with existing ones.
     */
    setColumnProperties(columnIndex: number, properties: any): this;
    /**
     * Sets the map of all meta data of the data table.
     * @param meta meta data
     */
    setMetaData(meta: any): this;
    /**
     * Sorting of DataTable
     * @param column Identifier of Column
     * @param comparator comparator function that return positive, negative and zero based on condition.
     */
    sort(column?: number, comparator?: Function): this;
    /**
     * Query data item and child items by different conditions
     * @example
     * ```javascript
     * // Select by function
     * table.query()
     *      .where( (item) => return item.getUri() === 'itemuri')
     *      .select(function(item) {
     *            founditem = item;
     *       });
     * ```
     * @example
     * ```javascript
     * // Select by expression
     * table.query()
     *      .where('item => uri(item) == "itemuri"')
     *      .select((item) => {
     *          founditem = item;
     *      });
     * ```
     */
    query(): object;
}
/**
 * DataTable events.
 */
export enum Events {
    /**
     * ColumnsAdding
     */
    ColumnsAdding = 'ColumnsAdding',
    /**
     * ColumnsAdded
     */
    ColumnsAdded = 'ColumnsAdded',
    /**
     * ColumnsRemoving
     */
    ColumnsRemoving = 'ColumnsRemoving',
    /**
     * ColumnsRemoved
     */
    ColumnsRemoved = 'ColumnsRemoved',
    /**
     * ColumnsSet
     */
    ColumnsSet = 'ColumnsSet',
    /**
     * RowsAdding
     */
    RowsAdding = 'RowsAdding',
    /**
     * RowsAdded
     */
    RowsAdded = 'RowsAdded',
    /**
     * RowsRemoving
     */
    RowsRemoving = 'RowsRemoving',
    /**
     * RowsRemoved
     */
    RowsRemoved = 'RowsRemoved',
    /**
     * ValuesSet
     */
    ValuesSet = 'ValuesSet',
    /**
     * Disposing
     */
    Disposing = 'Disposing'
}
