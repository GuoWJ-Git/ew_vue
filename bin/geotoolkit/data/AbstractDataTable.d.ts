import {EventDispatcher} from '../util/EventDispatcher';
import {AbstractDataSeries} from './AbstractDataSeries';

/**
 * Define an abstract class for data table representation
 */
export class AbstractDataTable extends EventDispatcher {
    /**
     * Define an abstract class for data table representation
     */
    constructor();
    /**
     * Returns the number of columns in the data table.
     */
    getNumberOfColumns(): number;
    /**
     * Returns number of rows.
     */
    getNumberOfRows(): number;
    /**
     * Returns the column at the specified index.
     * @param columnIndex column index
     */
    getColumn(columnIndex: number): AbstractDataSeries;
    /**
     * Returns the index of specified column.
     * @param column column
     */
    indexOfColumn(column: AbstractDataSeries): number;
    /**
     * Returns column by specified identifier. If multiple columns have the same identifier, the first one will be returned.
     * @param id identifier of the column
     */
    getColumnById(id: number | string): AbstractDataSeries | null;
    /**
     * Returns column by specified name. If multiple columns have the same name, the first one will be returned.
     * @param name name of the column
     */
    getColumnByName(name: string): AbstractDataSeries | null;
    /**
     * Return the value of a cell.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param columnIndex index of the column. should be a number greater than or equal to zero, and less
     * than the number of columns as returned by the getNumberOfColumns() method.
     */
    getValue(rowIndex: number, columnIndex: number): any;
    /**
     * Returns the map of all meta data of the data table. This method returns the reference to the meta data.
     */
    getMetaData(): any;
    /**
     * Returns the map of all properties of specified column.
     * @param columnIndex index of the column
     */
    getColumnProperties(columnIndex: number): any;
}
