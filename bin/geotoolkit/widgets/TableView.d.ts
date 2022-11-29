import {AnnotatedWidget} from './AnnotatedWidget';
import {Rect} from '../util/Rect';
import {TableView as TableviewTableView} from '../controls/shapes/tableview/TableView';
import {Dimension} from '../util/Dimension';
import {LineStyle} from '../attributes/LineStyle';
import {TextStyle} from '../attributes/TextStyle';
import {FillStyle} from '../attributes/FillStyle';

/**
 * A table view displays a list of items in a single column and allows users to scroll through the table. The data is either passed by a data object or a function.
 * The widget can be customized using options() in the constructor.<br>
 * Some of the default tools are available to support:
 * <ul>
 *  <li>Horizontal Scrollbar</li>
 *  <li>Vertical Scrollbar</li>
 *  <li>Panning Listener</li>
 *  <li>Tableview Highlight</li>
 *  <li>Tableview Selection</li>
 * </ul>
 * The widget can be customized using options() in the constructor. <br>
 * @example
 * ```javascript
 * import {TableView} from '@int/geotoolkit/widgets/TableView';
 * import {Dimension} from '@int/geotoolkit/util/Dimension';
 * // 1). Initialize Widget
 * const tableViewWidget = new TableView({
 *          'horizontalscroll': 'floating',
 *          'verticalscroll': 'floating',
 *          'rows': '4',
 *          'cols': '4'
 *      });
 * const data = new TableViewDataSource(rowCount, colCount);
 * const tableViewWidget = createTableViewWidget(data); // create random data. Data can be provided through either an explicit function or through dataTable
 * tableViewWidget.setData({
 *              'content': {                        // Customize the appearance of the table as needed.
 *                  'textstyle': {
 *                      'color': 'darkblue',
 *                      'alignment': 'center',
 *                      'baseLine': 'middle'
 *                  },
 *                  'evenfillstyle': 'lightblue'
 *              },
 *  });
 * // 2). This example below shows how to create a TableView with only columns and without the first row index column.
 * const tableViewWidget = new TableView({...})// Set data using setData method
 * .setData({
 *   'indextitle': '', //remove title from index column
 * ....
 *   // Set table bounds in columns, rows
 *   'rows': data.getRowsCount(),
 *   'cols': data.getColumnsCount(),
 *   'defaultcellsize': new Dimension(0, 30) //default width is zero
 * });
 * for(let c=0;c<data.getColumnsCount();c++)
 * tableViewWidget.setColumnsSize(c, 100); //manually apply column widths
 * ```
 * @example
 * ```javascript
 * import {log} from '@int/geotoolkit/base';
 * import {Events as SelectionEvents} from '@int/geotoolkit/controls/tools/Selection';
 * // 3). This example shows a way to trigger a function when a row is selected:
 * // Setup manipulators - Panning, Highlight, Scrollbars
 * plot.getTool()
 *     .add(tableViewWidget.getTool());
 * //
 * const highlight = tableViewWidget.getToolByName("TableViewSelection");
 * highlight.addListener(SelectionEvents.onPick, (sender, eventArgs) => {
 *    const manipulators = tableViewWidget.getToolByName("TableViewCompositeTool");
 *    const tableViewShape = tableViewWidget.getTableViewShape();
 *    const point = manipulators.pointToModel(tableViewShape, eventArgs);
 *    const cell = tableViewShape.resolveCellCoordinate(point.getX(), point.getY());
 *   log("Row number : " +cell.getY());
 *  });
 * ```
 */
export class TableView extends AnnotatedWidget {
    /**
     * A table view displays a list of items in a single column and allows users to scroll through the table. The data is either passed by a data object or a function.
     * The widget can be customized using options() in the constructor.<br>
     * Some of the default tools are available to support:
     * <ul>
     *  <li>Horizontal Scrollbar</li>
     *  <li>Vertical Scrollbar</li>
     *  <li>Panning Listener</li>
     *  <li>Tableview Highlight</li>
     *  <li>Tableview Selection</li>
     * </ul>
     * The widget can be customized using options() in the constructor. <br>
     * @param options the json object
     * @param options.rows rows
     * @param options.cols columns
     * @param options.fixedsize performance hint for table view
     * @param options.bounds bounds
     * @param options.headermode Automatic header resize strategies
     */
    constructor(options?: object | { rows?: number; cols?: number; fixedsize?: boolean; bounds?: Rect; headermode?: HeaderMode; } );
    /**
     * returns a real size of columns
     * @param column column index
     */
    getColumnsSize(column?: number): number;
    /**
     * Set column width
     * @example
     * ```javascript
     * //To dynamically set column widths per column
     * tableViewWidget.setColumnsSize(0, 50)
     * ```
     * @param column column to set the size for, -1 for the index column
     * @param width width or size for the column
     */
    setColumnsSize(column: number, width: number): this;
    /**
     * Set header mode
     * @param mode Smart column type
     */
    setHeaderMode(mode: HeaderMode | string): this;
    /**
     * Get header mode
     */
    getHeaderMode(): HeaderMode | string;
    /**
     * Resize all column widths to fit to visible table width
     * @param distributeColumnsEvenly evenly flag
     */
    fitToWidth(distributeColumnsEvenly?: boolean): this;
    /**
     * Returns a real size of rows
     */
    getRowsSize(): number;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Returns base shape
     */
    getTableViewShape(): TableviewTableView;
    /**
     * Set bounds for table in rows, columns
     * @param rows bounds for table in rows
     * @param columns bounds for table in columns
     */
    setTableBounds(rows: number, columns: number): this;
    /**
     * Returns table bounds
     */
    getTableBounds(): Rect;
    /**
     * Returns table size in column, row count
     */
    getTableSize(): Dimension;
    /**
     * Returns table limits in column, row size
     */
    getVisibleTableLimits(): Rect;
    /**
     * Set visible table limits to specific position in column, row
     * @param row table limits to specific position in row
     * @param column table limits to specific position in column
     */
    setVisibleTableLimits(row?: number, column?: number): this;
    /**
     * set data and properties of the tableview widget.
     * @param data the data object
     * @param data.indextitle JSON to set index title - see {geotoolkit.controls.shapes.tableview.TableView.setIndexTitle}
     * @param data.indexvisible value to set index column visibility
     * @param data.headervisible value to set header row visibility
     * @param data.fixedsize performance hint for table view
     * @param data.smartcolumntype Smart column type, automatic header resize strategies
     * @param data.contentmeasure JSON setting table view content measurer - see {geotoolkit.controls.shapes.tableview.TableView.setContentMeasure}
     * @param data.contentprepare JSON setting table view content preparer - see {geotoolkit.controls.shapes.tableview.TableView.setContentPrepare}
     * @param data.contentprovider JSON setting table view content provider - see {geotoolkit.controls.shapes.tableview.TableView.setContentProvider}
     * @param data.headerprovider JSON setting table view header provider - see {geotoolkit.controls.shapes.tableview.TableView.setHeaderProvider}
     * @param data.indexprepare JSON setting table view index preparer - see {geotoolkit.controls.shapes.tableview.TableView.setIndexPrepare}
     * @param data.indexprovider JSON setting table view index provider - see {geotoolkit.controls.shapes.tableview.TableView.setIndexProvider}
     * @param data.markerprovider JSON setting table view marker provider - see {geotoolkit.controls.shapes.tableview.TableView.setMarkerProvider}
     * @param data.header json defining header style
     * @param data.header.gridstyle Grid style
     * @param data.header.textstyle Text style
     * @param data.header.headerfillstyle Header fill style
     * @param data.content json defining content style
     * @param data.content.gridstyle Grid style
     * @param data.content.textstyle Text style
     * @param data.content.oddfillstyle Odd row style
     * @param data.content.evenfillstyle Even row style
     * @param data.index json defining index style
     * @param data.index.gridstyle Grid style
     * @param data.index.textstyle Text style
     * @param data.index.oddfillstyle Odd row style
     * @param data.index.evenfillstyle Even row style
     * @param data.index.markerfillstyle Marker fill style
     * @param data.index.markerlinestyle Marker line style
     * @param data.highlightfillstyle Highlight style
     * @param data.bounds Bounds
     * @param data.rows Table view row count
     * @param data.cols Table view column count
     * @param data.defaultcellsize Default cell dimensions
     */
    setData(data: object | { indextitle?: string; indexvisible?: boolean; headervisible?: boolean; fixedsize?: boolean; smartcolumntype?: HeaderMode | string; contentmeasure?: object | Function; contentprepare?: object | Function; contentprovider?: object | Function; headerprovider?: object | Function; indexprepare?: object | Function; indexprovider?: object | Function; markerprovider?: object | Function; header?: object | { gridstyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; headerfillstyle?: FillStyle | string | object; } ; content?: object | { gridstyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; oddfillstyle?: FillStyle | string | object; evenfillstyle?: FillStyle | string | object; } ; index?: object | { gridstyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; oddfillstyle?: FillStyle | string | object; evenfillstyle?: FillStyle | string | object; markerfillstyle?: FillStyle | string | object; markerlinestyle?: LineStyle | string | object; } ; highlightfillstyle?: FillStyle | string | object; bounds?: Rect; rows?: number; cols?: number; defaultcellsize?: Dimension; } ): this;
    /**
     * Main method of scrolling the table view
     * @param dx relative change in x coordinate
     * @param dy relative change in y coordinate
     */
    translateTable(dx: number, dy: number): this;
    /**
     * Select row index for highlighting
     * @param row row index for highlighting
     * @param autoScroll by default is true
     */
    highlightRow(row: number, autoScroll?: boolean | any): this;
    /**
     * Return highlighted row index
     */
    getHighlightedRow(): number;
    /**
     * Return highlighted column index
     */
    getHighlightedColumn(): number;
    /**
     * Select column index for highlighting
     * @param column column index for highlighting
     * @param autoScroll by default is true
     */
    highlightColumn(column: number, autoScroll?: boolean | any): this;
    /**
     * Set active row index
     * @param rows active row index
     * @param autoScroll by default is true
     */
    setActiveRow(rows: number[] | number | any, autoScroll: boolean | any): this;
    /**
     * Return active rows as array index
     */
    getActiveRows(): number[];
    /**
     * Horizontal Scrollbar
     * Vertical Scrollbar
     * Panning Listener
     * Table Row Highlighting
     */
    protected initializeTools(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {rows: number; cols: number; fixedsize: boolean; bounds: Rect; headermode: HeaderMode} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing properties
     * @param properties.rows rows
     * @param properties.cols columns
     * @param properties.fixedsize performance hint for table view
     * @param properties.bounds bounds
     * @param properties.headermode Automatic header resize strategies
     */
    setProperties(properties?: object | { rows?: number; cols?: number; fixedsize?: boolean; bounds?: Rect; headermode?: HeaderMode; } ): this;
    /**
     * Generate string from table view, that can be used in other application like Excel, Notepad++ etc.
     * @example
     * ```javascript
     * copy cell
     * const result = tableWidget.copy(0, 0);
     * ```
     * @example
     * ```javascript
     * copy row
     * const result = tableWidget.copy(null, 0);
     * ```
     * @example
     * ```javascript
     * copy multiple rows
     * const result = tableWidget.copy(null, [0, 1]);
     * ```
     * @example
     * ```javascript
     * copy multiple rows by range
     * const result = tableWidget.copy(null, [[0, 2], [4, 6]]); // rows 0, 1, 2, 4, 5, 6 will be copied
     * ```
     * @example
     * ```javascript
     * copy entire table
     * const result = tableWidget.copy();
     * ```
     * @param column columns to be copied
     * @param row rows to be copied
     */
    copyContent(column: number | number[][], row: number | number[][]): string;
    /**
     * Generate string from table view, that can be used in other application like Excel, Notepad++ etc.
     * It saves only selected cells.
     */
    copySelectedCells(): string;
}
/**
 * Header mode, automatic header resize strategies
 */
export enum HeaderMode {
    /**
     * Automatically resize column width to fit header content
     */
    Auto = 'auto',
    /**
     * Default, no automatic resize
     */
    Default = 'default',
    /**
     * Automatically resize header height, and wrap header content to fit header within header width
     */
    Wrap = 'wrap',
    /**
     * Automatically resize header height. Will split words that are larger than width
     */
    WrapSplitWords = 'wrapsplitwords'
}
