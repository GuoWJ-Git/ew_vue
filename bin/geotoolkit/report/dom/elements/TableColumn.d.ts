import {TableElement} from './TableElement';
import {TdElement} from './TdElement';

/**
 * TableColumn is a helper class to work with TD elements attributes
 */
export class TableColumn {
    /**
     * TableColumn is a helper class to work with TD elements attributes
     */
    constructor();
    /**
     * Set owner table
     * @param table owner table element
     */
    protected setTable(table: TableElement): this;
    /**
     * Set column index
     * @param index column index
     */
    protected setIndex(index: number): this;
    /**
     * Return Table element
     */
    getTable(): TableElement;
    /**
     * Return index in Table element
     */
    getIndex(): number;
    /**
     * Return visibility state of the column
     */
    getVisible(): boolean | any;
    /**
     * Return cells count
     */
    getCellsCount(): number;
    /**
     * Return Cell by index
     * @param index cell index
     */
    getCell(index: number): TdElement;
    /**
     * Set visibility state of the column
     * @param visible visible flag
     */
    setVisible(visible: boolean | any): this;
}
