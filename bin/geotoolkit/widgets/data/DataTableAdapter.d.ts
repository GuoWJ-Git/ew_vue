import {EventDispatcher} from '../../util/EventDispatcher';
import {AbstractDataTable} from '../../data/AbstractDataTable';

/**
 * <p>
 *     DataTableAdapter allows use of DataTables with the tableView Widget.
 * </p>
 */
export class DataTableAdapter extends EventDispatcher {
    /**
     * <p>
     *     DataTableAdapter allows use of DataTables with the tableView Widget.
     * </p>
     * @param options DataTableAdapter Options
     * @param options.datatable dataTable
     * @param options.sortingarrowoptions Color of arrow if Sorting tool is attached.
     * @param options.sortingarrowoptions.uparrowfillcolor fillColor of up-arrow.
     * @param options.sortingarrowoptions.downarrowfillcolor fillColor of down-arrow.
     * @param options.sortingarrowoptions.uparrowlinecolor lineColor of up-arrow.
     * @param options.sortingarrowoptions.downarrowlinecolor lineColor of down-arrow.
     */
    constructor(options: object | { datatable: AbstractDataTable; sortingarrowoptions?: string | object | { uparrowfillcolor?: string; downarrowfillcolor?: string; uparrowlinecolor?: string; downarrowlinecolor?: string; } ; } );
    /**
     * Gets sorted column number.
     */
    getSortedByColumn(): any | object;
    /**
     * Gives number of rows
     */
    getRowsCount(): number;
    /**
     * Gives number of columns
     */
    getColumnsCount(): number;
    /**
     * Setting Content prepare
     * @param fromRow Row-number
     * @param toRow Row-number
     */
    prepareContent(fromRow: number, toRow: number): void;
    /**
     * Returns the cell values of Table View Widget
     * @param column column-number
     * @param row row-number
     */
    getContentData(column: number, row: number): string | number | object;
    /**
     * Returns header data of Table View Widget
     * @param column column-number
     */
    getHeaderData(column: number): string;
    /**
     * Returns Header style
     * @param column column number
     * @param headerStyle headerstyle
     */
    getHeaderFormat(column: number, headerStyle: object): object;
    /**
     * Sorting by column in TableViewWidget using specified comparator function.
     * @param column column number
     * @param comparator comparator function
     */
    sortByColumn(column: number, comparator: Function): void;
    /**
     * Filtering in TableViewWidget by value specified by filter. By default, this method will return all column - cellvalues containing value to filter.
     * External function for filtering can also be provided.
     * @param column column-number to filter column-specific data
     * @param filterValue filtering term
     * 
     * <p>
     *     Filtering term can be string or function. <br/>
     *     For using function, which filters value containing 'a'.<br/>
     *     var filteringFunction = function (index , value){ <br/>
     *     &nbsp&nbsp return value.toString().indexOf('a') !== -1 <br/>
     *     }
     * </p>
     */
    filter(column: number, filterValue: string | Function): this;
}
