import {TableView} from '../../controls/shapes/tableview/TableView';
import {DataSheet} from './DataSheet';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * DataSheet column
 * A column in DataSheet table
 * NOTE: Column will be created automatically after DataSheet is initialized
 */
export class Column {
    /**
     * DataSheet column
     * A column in DataSheet table
     * NOTE: Column will be created automatically after DataSheet is initialized
     * @param index index
     * @param title title
     * @param tableViewShape tableViewShape
     * @param tableView tableView
     * @param dataSheet dataSheet
     * @param options options
     */
    constructor(index: number, title: string, tableViewShape: TableView, tableView: TableView, dataSheet: DataSheet, options: any);
    /**
     * Set column fill style
     * @param fillStyle New column fill style
     */
    setFillStyle(fillStyle: FillStyle | string): this;
    /**
     * Get column fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Set column title
     * @param title Column title
     */
    setTitle(title: string): this;
    /**
     * Get column title
     */
    getTitle(): string;
    /**
     * Set column width
     * @param width Column width
     */
    setWidth(width: number): this;
    /**
     * Get column width
     */
    getWidth(): number;
    /**
     * Set column visibility
     * @param visible False to hide this column, true otherwise
     */
    setVisible(visible?: boolean): this;
    /**
     * Get whether column is visible
     */
    getVisible(): boolean;
    /**
     * Highlight column
     */
    highlight(): this;
    /**
     * Set cell content validator for a column
     * @param validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string.
     */
    setColumnValidator(validator: Function): this;
}
