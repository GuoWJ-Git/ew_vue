import {TableView} from '../../controls/shapes/tableview/TableView';
import {TableView as WidgetsTableView} from '../TableView';
import {DataSheet} from './DataSheet';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * DataSheet row
 * A row in DataSheet table
 * NOTE: row will be created automatically after DataSheet is initialized
 */
export class Row {
    /**
     * DataSheet row
     * A row in DataSheet table
     * NOTE: row will be created automatically after DataSheet is initialized
     * @param index index
     * @param title title
     * @param tableViewShape tableViewShape
     * @param tableView tableView
     * @param dataSheet dataSheet
     * @param options options
     */
    constructor(index: number, title: string, tableViewShape: TableView, tableView: WidgetsTableView, dataSheet: DataSheet, options: any);
    /**
     * Set row fill style
     * @param fillStyle New row fill style
     */
    setFillStyle(fillStyle: FillStyle | string): this;
    /**
     * Get row fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Set row title
     * @param title Row title
     */
    setTitle(title: string): this;
    /**
     * Get row title
     */
    getTitle(): string;
    /**
     * Set row height
     * @param height Row height
     */
    setHeight(height: number): this;
    /**
     * Get row height
     */
    getHeight(): number;
    /**
     * Set row visibility
     * @param visible False to hide this row, true otherwise
     */
    setVisible(visible?: boolean): this;
    /**
     * Get whether row is visible
     */
    getVisible(): boolean;
    /**
     * Highlight row
     */
    highlight(): this;
    /**
     * Set cell content validator for a row
     * @param validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string.
     */
    setRowValidator(validator: Function): this;
    /**
     * Get new row height base on text content
     */
    calculateAutoRowHeight(): number;
}
