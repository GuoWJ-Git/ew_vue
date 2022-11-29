import {AbstractDataTable} from './AbstractDataTable';
import {QueryBuilder} from '../selection/QueryBuilder';

/**
 * A read-only view of an underlying DataTable.
 * A DataTableView allows selection of only a subset of the columns.
 * It also allows reordering columns and duplicating columns.<br>
 * A DataTableView is a "view" of a datasource {@link @int/geotoolkit/data/DataTable.DataTable} . To add data, you will have to do so to the original {@link @int/geotoolkit/data/DataTable.DataTable}.<br>
 * Please refer to the example below for a way to create and use DataTableView.
 * @example
 * ```javascript
 * import {DataTableView} from '@int/geotoolkit/data/DataTableView';
 * import {DataTable} from '@int/geotoolkit/data/DataTable';
 * ...
 * //Create a DataTable
 * const dataTable = new DataTable({ 'cols': [
 *            {'type': 'number', 'data': indicesArray},
 *            {'type': 'number', 'data': valuesArray}
 *        ]});
 * dataTable.getColumn(0).setUnit(indexunit);
 * dataTable.getColumn(1).setUnit(valueunit);
 * // Create a DataTableView of the DataTable
 * const dataTableView = new DataTableView(dataTable);
 * // user can modify the data in the original DataTable using the API of the DataTable
 * // addRow, addRows, removeRow, insertRow
 * ```
 */
export class DataTableView extends AbstractDataTable {
    /**
     * A read-only view of an underlying DataTable.
     * A DataTableView allows selection of only a subset of the columns.
     * It also allows reordering columns and duplicating columns.<br>
     * A DataTableView is a "view" of a datasource {@link @int/geotoolkit/data/DataTable.DataTable} . To add data, you will have to do so to the original {@link @int/geotoolkit/data/DataTable.DataTable}.<br>
     * Please refer to the example below for a way to create and use DataTableView.
     * @param dataTable 
     */
    constructor(dataTable: AbstractDataTable);
    /**
     * Dispose data table view object.
     */
    dispose(): void;
    /**
     * Returns the columns in this view. Identical array will be returned after calling setColumns().
     */
    getViewColumns(): number[];
    /**
     * Get data table
     */
    getDataTable(): AbstractDataTable;
    /**
     * Sets visible columns indexes. Any columns not specified will be hidden.
     * @param columnIndexes array of column indexes
     */
    setColumns(columnIndexes: number[]): this;
    /**
     * Query data item and child items by different conditions
     * @example
     * ```javascript
     * // Select by function
     * tableView.query()
     *      .where( (item) => return item.getUri() === 'itemuri')
     *      .select((item) => {
     *            founditem = item;
     *       });
     * ```
     * @example
     * ```javascript
     * // Select by expression
     * tableView.query()
     *      .where('item => uri(item) == "itemuri"')
     *      .select((item) => {
     *          founditem = item;
     *      });
     * ```
     */
    query(): QueryBuilder;
}
/**
 * DataTableView events.
 */
export enum Events {
    /**
     * Rebuild
     */
    Rebuild = 'Rebuild'
}
