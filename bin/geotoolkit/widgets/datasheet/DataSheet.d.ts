import {BaseWidget} from '../BaseWidget';
import {Group} from '../../scene/Group';
import {TextStyle} from '../../attributes/TextStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {WrapMode} from './WrapMode';
import {LineStyle} from '../../attributes/LineStyle';
import {Cell} from './Cell';
import {Rect} from '../../util/Rect';
import {Column} from './Column';
import {Row} from './Row';
import {MergedCell} from './MergedCell';

/**
 * DataSheet
 * DataSheet widget is similar with TableView widget but with features allow user to have more control of cells content and styles
 * User can also edit cell content like Excel sheet
 */
export class DataSheet extends BaseWidget {
    /**
     * DataSheet
     * DataSheet widget is similar with TableView widget but with features allow user to have more control of cells content and styles
     * User can also edit cell content like Excel sheet
     * @param options Options for datasheet
     * @param options.model Model limits for DataSheet
     * @param options.autotablesize True to let DataSheet decides table size if the actual size is smaller than the spcified size, the size will be decided base on supplied data (if defined) or number of rows and columns (if data is not supplied)
     * @param options.indextitle Title of index column or row titles column
     * @param options.minrowheight Minimum row height
     * @param options.mincolumnwidth Minimum column width
     * @param options.headerheight Header or column titles height
     * @param options.indexwidth Index or row titles column
     * @param options.highlightrowonhover True to highlight row when hover, false otherwise
     * @param options.rows Number of rows, will be ignored if autotablesize is True
     * @param options.cols Number of columns, will be ignored if autotablesize is True
     * @param options.index Settings for index or row titles column
     * @param options.index.textstyle Text style for index column
     * @param options.index.activerowfillstyle Fill style of a row in index column when it is set to active
     * @param options.index.indexdata Array of row titles
     * @param options.index.evenfillstyle Fill style of even row in index column
     * @param options.index.oddfillstyle Fill style of odd row in index column
     * @param options.header Settings for header or column titles row
     * @param options.header.textstyle Text style for header row
     * @param options.header.highlightcolumnfillstyle Fill style of a column in header row when it is set to active
     * @param options.header.headerdata Array of column titles
     * @param options.header.evenfillstyle Fill style of even column in header row
     * @param options.header.oddfillstyle Fill style of odd column in header row
     * @param options.content Settings for content of DataSheet
     * @param options.content.editable True to set cell content to be editable, false otherwise
     * @param options.content.validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string
     * @param options.content.textstyle Text style for cell text
     * @param options.content.textsizemode Wrap mode for DataSheet cell
     * @param options.content.evenfillstylecolumn Fill style for even column in DataSheet content
     * @param options.content.oddfillstylecolumn Fill style for odd column in DataSheet content
     * @param options.content.highlightcolumnfillstyle Fill style of a column in DataSheet content when it is set to active
     * @param options.content.evenfillstyle Fill style of even row in DataSheet content
     * @param options.content.oddfillstyle Fill style of odd row in DataSheet content
     * @param options.content.activerowfillstyle Fill style of a row in DataSheet content when it is set to active
     * @param options.content.activecelllinestyle Line style of cell when it is set to active
     */
    constructor(options: object | { model?: Group; autotablesize?: boolean; indextitle?: string; minrowheight?: number; mincolumnwidth?: number; headerheight?: number; indexwidth?: number; highlightrowonhover?: number; rows: number; cols: number; index?: object | { textstyle?: object | TextStyle; activerowfillstyle?: string | FillStyle; indexdata?: string[]; evenfillstyle?: string | FillStyle; oddfillstyle?: string | FillStyle; } ; header?: object | { textstyle?: object | TextStyle; highlightcolumnfillstyle?: string | FillStyle; headerdata?: string[]; evenfillstyle?: string | FillStyle; oddfillstyle?: string | FillStyle; } ; content?: object | { editable?: boolean; validator?: Function; textstyle?: object | TextStyle; textsizemode?: string | WrapMode; evenfillstylecolumn?: string | FillStyle; oddfillstylecolumn?: string | FillStyle; highlightcolumnfillstyle?: string | FillStyle; evenfillstyle?: string | FillStyle; oddfillstyle?: string | FillStyle; activerowfillstyle?: string | FillStyle; activecelllinestyle?: object | LineStyle; } ; } );
    /**
     * Get current content data of the table
     */
    getDataSet(): string[] | number[];
    /**
     * Set number of rows
     * @param rows The number of rows
     */
    setNumberOfRows(rows: number): this;
    /**
     * Set number of columns
     * @param columns The number of columns
     */
    setNumberOfColumns(columns: number): this;
    /**
     * Get number of rows
     */
    getNumberOfRows(): number;
    /**
     * Get number of columns
     */
    getNumberOfColumns(): number;
    /**
     * Set active cell
     * @param row Row index
     * @param column Column index
     * @param editCell True to also set cell to edit mode, false otherwise
     */
    setActiveCell(row: number, column: number, editCell: boolean): this;
    /**
     * Get active cell
     */
    getActiveCell(): Cell;
    /**
     * Get cell
     * @param row Row index
     * @param column Column index
     */
    getCell(row: number, column: number): Cell | any;
    /**
     * Get DataSheet visible model limits
     */
    getDataSheetVisibleModelLimits(): Rect;
    /**
     * Get DataSheet limits
     */
    getDataSheetLimits(): Rect;
    /**
     * Set columns width
     * @param columnWidth Array of column width
     */
    setColumnsWidth(columnWidth: number[]): this;
    /**
     * Set rows height
     * @param rowHeight Array of row height
     */
    setRowsHeight(rowHeight: number[]): this;
    /**
     * Get data of a specific column
     * @param column Column index of table
     */
    getColumnData(column: number): string[] | number[];
    /**
     * Get data of a specific row
     * @param row row index of table
     */
    getRowData(row: number): string[] | number[];
    /**
     * Get a specific column
     * @param column Column index of table
     */
    getColumn(column: number): Column;
    /**
     * Get a specific row
     * @param row row index of table
     */
    getRow(row: number): Row;
    /**
     * Hide columns
     * @param columns Array of column indices to hide
     */
    hideColumns(columns: number[]): this;
    /**
     * Hide rows
     * @param rows Array of row indices to hide
     */
    hideRows(rows: number[]): this;
    /**
     * Unhide all rows
     */
    unhideAllRows(): this;
    /**
     * Unhide all columns
     */
    unhideAllColumns(): this;
    /**
     * Unhide rows
     * @param rows Array of row indices
     */
    unhideRows(rows: number[]): this;
    /**
     * Unhide columns
     * @param columns Array of column indices
     */
    unhideColumns(columns: number[]): this;
    /**
     * Get highlighted column
     */
    getHighlightedColumn(): number;
    /**
     * Get highlighted row
     */
    getHighlightedRow(): number;
    /**
     * Set table background
     * @param fillStyle New table fill style
     */
    setTableBackground(fillStyle: FillStyle | string): this;
    /**
     * Set content to be editable
     * @param editable True to set table content to be editable, false otherwise
     */
    setContentEditable(editable: boolean): this;
    /**
     * Merge cells
     * @param firstCell First cell of merged rectangle
     * @param lastCell Last cell of merged rectangle
     */
    mergeCells(firstCell: Cell, lastCell: Cell): MergedCell;
    /**
     * Unmerge cells
     * @param cell Any cell of merged rectangle
     */
    unmergeCells(cell: Cell): this;
    /**
     * Add a new row at the end of DataSheet
     * @param rowData List of data for each cell of the new row, any missing cell data will be set to emtpy string by default
     */
    addRow(rowData: string[]): this;
    /**
     * Remove a row
     * @param index Row index to remove
     */
    removeRow(index: number): this;
    /**
     * Remove a column
     * @param index Column index to remove
     */
    removeColumn(index: number): this;
    /**
     * Insert a new row at a specified index in DataSheet
     * @param index Row index
     * @param rowData List of data for each cell of the new row, any missing cell data will be set to emtpy string by default
     * @param rowTitle Title of new row
     */
    insertRow(index: number, rowData: string[], rowTitle?: string): this;
    /**
     * Add a new column at the end of DataSheet
     * @param columnData List of data for each cell of the new column, any missing cell data will be set to emtpy string by default
     */
    addColumn(columnData: string[]): this;
    /**
     * Insert a new column at a specified index in DataSheet
     * @param index Column index
     * @param columnData List of data for each cell of the new column, any missing cell data will be set to emtpy string by default
     * @param columnTitle Title of new column
     */
    insertColumn(index: number, columnData: string[], columnTitle?: string): this;
}
/**
 * Validaton preset
 */
export enum ValidationPreset {
    /**
     * Default validator name to verify if cell content is a number
     */
    Number = 'number',
    /**
     * Default validator name to allow all content type
     */
    All = 'all'
}
