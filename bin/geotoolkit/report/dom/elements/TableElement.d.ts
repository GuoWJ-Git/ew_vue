import {AbstractTextElement} from './AbstractTextElement';
import {ITrContainer} from './ITrContainer';
import {THead} from './THead';
import {NodeList} from '../NodeList';
import {Dimension} from '../../../util/Dimension';
import {TrElement} from './TrElement';
import {AbstractDataTable} from '../../../data/AbstractDataTable';
import {DataTableView} from '../../../data/DataTableView';
import {TdElement} from './TdElement';
import {TableColumn} from './TableColumn';

/**
 * Table element
 */
export class TableElement extends AbstractTextElement implements ITrContainer {
    /**
     * Table element
     * @param options The options
     */
    constructor(options?: object);
    /**
     * Return border spacing
     */
    getBorderSpacing(): Dimension | null;
    /**
     * Set border spacing
     * @param borderSpacing border spacing
     */
    setBorderSpacing(borderSpacing: Dimension | any): this;
    /**
     * Return template data row
     */
    getTemplateRow(): TrElement | null;
    /**
     * Set data table, in case if data table is not null, table will expand it self after parsing and fill with values
     * @param dataTable data table
     * @param propagate generate data rows
     */
    setDataTable(dataTable: AbstractDataTable, propagate?: boolean): this;
    /**
     * Return associated data table
     */
    getDataTable(): DataTableView;
    /**
     * The tHead property returns a reference to the <thead> element of a table.
     */
    tHead: THead;
    /**
     * The rows returns an iterable collection of all <tr> elements in a table.
     */
    rows: NodeList;
    /**
     * Return rows count
     * @deprecated since 2021 (3.3) use geotoolkit.report.dom.elements.TableElement.rows.length instead
     */
    getRowsCount(): number;
    /**
     * Return row by index
     * @deprecated since 2021 (3.3) use geotoolkit.report.dom.elements.TableElement.rows.item(index) instead
     * @param index row index
     */
    getRow(index: number): TrElement;
    /**
     * Return index of row
     * @deprecated since 2021 (3.3) use geotoolkit.report.dom.elements.TableElement.rows.indexOf(row) instead
     * @param row row element
     */
    getIndexOf(row: TrElement): number;
    /**
     * Add Row
     * @param location row location
     * @param element tr element
     */
    addRow(location: string, element?: TrElement | TdElement): TrElement;
    /**
     * Remove row
     * @param element element
     */
    removeRow(element: TrElement | TdElement): this;
    /**
     * Return column by index
     * @param index column index
     */
    getColumn(index: number): TableColumn;
    /**
     * Add column
     * @param location column location. location can be 'before' or 'after'
     * @param element element element
     */
    addColumn(location: string, element?: TdElement): TableColumn;
    /**
     * Remove column
     * @param td td element
     */
    removeColumn(td: TdElement): this;
}
