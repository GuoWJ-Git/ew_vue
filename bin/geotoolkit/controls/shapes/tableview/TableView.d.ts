import {Group} from '../../../scene/Group';
import {Dimension} from '../../../util/Dimension';
import {Rect} from '../../../util/Rect';
import {LineStyle} from '../../../attributes/LineStyle';
import {TextStyle} from '../../../attributes/TextStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {Point} from '../../../util/Point';

/**
 * Defines a Table View Shape
 */
export class TableView extends Group {
    /**
     * Defines a Table View Shape
     * @param options JSON object
     * @param options.rows rows
     * @param options.cols columns
     * @param options.fixedsize performance hint for table view
     * @param options.indexwidth index column width
     * @param options.headerheight header height
     * @param options.cellsize cell size
     * @param options.bounds bounds
     */
    constructor(options: object | { rows?: number; cols?: number; fixedsize?: boolean; indexwidth?: number; headerheight?: number; cellsize?: Dimension; bounds?: Rect; } );
    /**
     * Set bounds for table in rows, columns
     * @param rows rows in the table
     * @param columns columns in the table
     * @param rebuild rebuild or not
     */
    setTableBounds(rows: number, columns: number, rebuild: boolean): this;
    /**
     * Get row height
     * @param row index of the row, -1 for the header row
     */
    getRowHeight(row: number): number;
    /**
     * Set row height
     * @remarks fires {@link @int/geotoolkit/controls/shapes/tableview/TableView~Events~ColumnWidthChanged}
     * @param row index of the row, -1 for the header row
     * @param height row height
     */
    setRowHeight(row: number, height: number): this;
    /**
     * Get column width
     * @param column index of the column, -1 for the index column
     */
    getColumnWidth(column: number): number;
    /**
     * Set column width
     * @remarks fires {@link @int/geotoolkit/controls/shapes/tableview/TableView~Events~ColumnWidthChanged}
     * @param column index of the column, -1 for the index column
     * @param width column width
     */
    setColumnWidth(column: number, width: number): this;
    /**
     * Set the width of index column
     * @param width width
     */
    setIndexColumnWidth(width: number): this;
    /**
     * Get the width of index column
     */
    getIndexColumnWidth(): number;
    /**
     * Set the height of header row
     * @param height height
     */
    setHeaderRowHeight(height: number): this;
    /**
     * Get the height of header row
     */
    getHeaderRowHeight(): number;
    /**
     * Get the default height of header, width of index column, and cell size
     */
    getDefaultTableElementSize(): {headerheight: number; indexwidth: number; cellsize: Dimension} | object;
    /**
     * Resize all column widths to fit to visible table width
     * @param distributeColumnsEvenly distribute columns evenly
     */
    fitToWidth(distributeColumnsEvenly?: boolean): this;
    /**
     * Set bounds in model space
     * @param bounds bounds in model space
     */
    setBounds(bounds: Rect): this;
    /**
     * Get visible model bounds in pixel space
     */
    getVisibleTableModelLimits(): Rect;
    /**
     * Get whole table content model bounds in pixel space
     */
    getContentTableBounds(): Rect;
    /**
     * Get header model bounds in pixel space
     */
    getHeaderBounds(): Rect;
    /**
     * Get fixed columns model bounds in pixel space
     */
    getFixedTableBounds(): Rect;
    /**
     * Get table size in column, row count
     */
    getTableSize(): Dimension;
    /**
     * Gets performance hint for table view
     */
    getFixedSize(): boolean;
    /**
     * Get table visible limits in column, row
     */
    getVisibleTableLimits(): Rect;
    /**
     * Set visible table limits to specific column and row index
     * @param row index at the row
     * @param column index at the column
     */
    setVisibleTableLimits(row?: number, column?: number): this;
    /**
     * Scroll to a specified cell location
     * @param row Row index, null to scroll only to column
     * @param column Column index, null to scroll only to row
     */
    scroll(row?: number, column?: number): this;
    /**
     * Get bounds of the whole table in terms of number of columns and rows
     */
    getTableBounds(): Rect;
    /**
     * Main method of scrolling the table view
     * @param dx number of model units to shift along x axis
     * @param dy number of model units to shift along y axis
     */
    translateTable(dx: number, dy: number): this;
    /**
     * Relayout table
     */
    adjustTable(): this;
    /**
     * Convenience method to set groups of visual properties
     * @param data JSON object
     * @param data.indextitle JSON to set index title - see {geotoolkit.controls.shapes.tableview.TableView.setIndexTitle}
     * @param data.indexvisible value to set index column visibility
     * @param data.headervisible value to set header row visibility
     * @param data.fixedsize performance hint for table view
     * @param data.contentmeasure JSON setting table view content measurer - see {geotoolkit.controls.shapes.tableview.TableView.setContentMeasure}
     * @param data.contentprepare JSON setting table view content preparer - see {geotoolkit.controls.shapes.tableview.TableView.setContentPrepare}
     * @param data.contentprovider JSON setting table view content provider - see {geotoolkit.controls.shapes.tableview.TableView.setContentProvider}
     * @param data.headerprovider JSON setting table view header provider - see {geotoolkit.controls.shapes.tableview.TableView.setHeaderProvider}
     * @param data.indexprepare JSON setting table view index preparer - see {geotoolkit.controls.shapes.tableview.TableView.setIndexPrepare}
     * @param data.indexprovider JSON setting table view index provider - see {geotoolkit.controls.shapes.tableview.TableView.setIndexProvider}
     * @param data.markerprovider JSON setting table view marker provider - see {geotoolkit.controls.shapes.tableview.TableView.setMarkerProvider}
     * @param data.header header options
     * @param data.header.gridstyle Grid style
     * @param data.header.gridstyle.vertical Grid style
     * @param data.header.gridstyle.horizontal Grid style
     * @param data.header.textstyle Text style
     * @param data.header.headerfillstyle Header fill style
     * @param data.content content options
     * @param data.content.gridstyle Grid style
     * @param data.content.textstyle Text style
     * @param data.content.oddfillstyle Odd row style
     * @param data.content.evenfillstyle Even row style
     * @param data.index index options
     * @param data.index.gridstyle Grid style
     * @param data.index.textstyle Text style
     * @param data.index.oddfillstyle Odd row style
     * @param data.index.evenfillstyle Even row style
     * @param data.index.markerfillstyle Marker fill style
     * @param data.index.markerlinestyle Marker line style
     * @param data.highlightrowfillstyle Highlight row style
     * @param data.highlightcolumnfillstyle Highlight column style
     * @param data.bounds Bounds
     * @param data.rows Table view row count
     * @param data.cols Table view column count
     * @param data.defaultcellsize Default cell dimensions
     * @param data.defaultheadersize Default header dimensions
     */
    setData(data: object | { indextitle?: string; indexvisible?: boolean; headervisible?: boolean; fixedsize?: boolean; contentmeasure?: object | Function; contentprepare?: object | Function; contentprovider?: object | Function; headerprovider?: object | Function; indexprepare?: object | Function; indexprovider?: object | Function; markerprovider?: object | Function; header?: object | { gridstyle?: LineStyle | string | object | { vertical?: LineStyle | string | object; horizontal?: LineStyle | string | object; } ; textstyle?: TextStyle | string | object; headerfillstyle?: FillStyle | string | object; } ; content?: object | { gridstyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; oddfillstyle?: FillStyle | string | object; evenfillstyle?: FillStyle | string | object; } ; index?: object | { gridstyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; oddfillstyle?: FillStyle | string | object; evenfillstyle?: FillStyle | string | object; markerfillstyle?: FillStyle | string | object; markerlinestyle?: LineStyle | string | object; } ; highlightrowfillstyle?: FillStyle | string | object; highlightcolumnfillstyle?: FillStyle | string | object; bounds?: Rect; rows?: number; cols?: number; defaultcellsize?: Dimension; defaultheadersize?: Dimension; } ): this;
    /**
     * Set index title (top left corner cell of index column)
     * @param indexTitle Index title
     */
    setIndexTitle(indexTitle: string): this;
    /**
     * Get index title (top left corner cell of index column)
     */
    getIndexTitle(): string;
    /**
     * Set optional cell measurement device, typical use would be to determine min table cell widths by contents.
     * contentMeasure parameter format: (column, headerTextStyle, contentTextStyle, columnSize) with columnSize is in {'width': value} format
     * @param contentMeasure function to determine min table cell widths by contents
     */
    setContentMeasure(contentMeasure: Function | object): this;
    /**
     * Set optional formatter of content values, use to prepare content value provider output.
     * contentPrepare parameter format: (startRow, endRow)
     * function will run with TableView set as this object will run normally
     * @param contentPrepare optional formatter of content values
     */
    setContentPrepare(contentPrepare: Function | object): this;
    /**
     * Set header value provider, returns column header name.
     * headerProvider parameter format: (column)
     * function will run with TableView set as this object will run normally
     * @param headerProvider header value provider, returns column header name
     */
    setHeaderProvider(headerProvider: Function | object): this;
    /**
     * Set header format provider, returns optionally text style at column.
     * headerFormatProvider parameter format: (column)
     * function will run with TableView set as this object will run normally
     * @param headerFormatProvider header format provider, returns optionally text style at column
     */
    setHeaderFormatProvider(headerFormatProvider: Function | object): this;
    /**
     * Set content value provider, returns optionally formatted content value at col, row.
     * contentProvider parameter format: (column, row)
     * function will run with TableView set as this object will run normally
     * @param contentProvider content value provider
     */
    setContentProvider(contentProvider: Function | object): this;
    /**
     * Set content format provider, returns optional text style at row.
     * contentFormatProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param contentFormatProvider content format provider
     */
    setContentFormatProvider(contentFormatProvider: Function | object): this;
    /**
     * Set optional formatter of index values, use to prepare index value provider output.
     * indexPrepare parameter format: (startRow, endRow)
     * function will run with TableView set as this object will run normally
     * @param indexPrepare optional formatter of index values, use to prepare index value provider output
     */
    setIndexPrepare(indexPrepare: Function | object): this;
    /**
     * Set index value provider, returns optionally formatted index value at row.
     * indexProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param indexProvider index value provider, returns optionally formatted index value at row
     */
    setIndexProvider(indexProvider: Function | object): this;
    /**
     * Run once before rendering index data. This should be used to prepare index data output formatting
     * @param fromRow fromRow used to prepare index data output formatting
     * @param toRow toRow used to prepare index data output formatting
     */
    prepareIndex(fromRow: number, toRow: number): string;
    /**
     * Return optionally formatted index value at row
     * @param row index value at row
     */
    getIndexData(row: number): string;
    /**
     * Show marker at row
     * @param row index value at row
     */
    getMarkerData(row: number): boolean;
    /**
     * Select row indexes for active rows
     * @param rows index value at row
     */
    setActiveRows(rows: number[] | number): this;
    /**
     * Return active rows as array index
     */
    getActiveRows(): number[];
    /**
     * Select row index for highlighting
     * @param row index value at row
     */
    highlightRow(row: number): this;
    /**
     * Return highlighted row index
     */
    getHighlightedRow(): number;
    /**
     * Select column index for highlighting
     * @param column column index for highlighting
     */
    highlightColumn(column: number): this;
    /**
     * Returns highlighted column index
     */
    getHighlightedColumn(): number;
    /**
     * Get column index
     * @param x Position in x axis
     * @param exactValue True to get exact value, ignore flooring of return value, false otherwise
     */
    getColumn(x: number, exactValue?: boolean): number;
    /**
     * Get row index
     * @param y Position in y axis
     * @param exactValue True to get exact value, ignore flooring of return value, false otherwise
     */
    getRow(y: number, exactValue?: boolean): number;
    /**
     * Select row on header row
     * @param x Mouse position in x axis
     * @param y Mouse position in y axis
     */
    pickHeader(x: number, y: number): Point;
    /**
     * Select row on index column
     * @param x Mouse position in x axis
     * @param y Mouse position in y axis
     */
    pickFixedRow(x: number, y: number): Point;
    /**
     * Returns cell row by x y position (in table view model coordinates)
     * @param x x coordinate
     * @param y y coordinate
     * @param exactValue exact value
     */
    resolveCellCoordinate(x: number | Point, y?: number, exactValue?: boolean): Point;
    /**
     * Returns cell bounds
     * @param row index at row
     * @param column index at column
     */
    getCellBounds(row: number, column: number): Rect | null;
    /**
     * Run once before rendering content data. This should be used to prepare content data output formatting.
     * @param fromRow fromRow used to prepare content data output formatting
     * @param toRow toRow used to prepare content data output formatting
     * @param fromColumn fromColumn used to prepare content data output formatting
     * @param toColumn toColumn used to prepare content data output formatting
     */
    prepareContent(fromRow: number, toRow: number, fromColumn: number, toColumn: number): object | null;
    /**
     * Return optionally formatted content text field at col, row
     * @param column index at the column
     * @param row index at the column
     */
    getContentData(column: number, row: number): string;
    /**
     * Set index format provider, returns optionally text style at row.
     * indexFormatProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param indexFormatProvider index format provider, returns text style at row
     */
    setIndexFormatProvider(indexFormatProvider: Function | object): this;
    /**
     * Set marker provider, returns boolean value to show/hide marker.
     * markerProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param markerProvider marker provider, returns boolean value to show/hide marker
     */
    setMarkerProvider(markerProvider: Function | object): this;
    /**
     * Return header text at column
     * @param column index where the header text will be returned
     */
    getHeaderData(column: number): string;
}
/**
 * TableViews's Events enumerator
 */
export enum Events {
    /**
     * Event type fired prior to column width change
     */
    ColumnWidthChanging = 'onColumnWidthChanging',
    /**
     * Event type fired after a column width change
     */
    ColumnWidthChanged = 'onColumnWidthChanged',
    /**
     * Event type fired prior to row height change
     */
    RowHeightChanging = 'onRowHeightChanging',
    /**
     * Event type fired after arow height change
     */
    RowHeightChanged = 'onRowHeightChanged'
}
