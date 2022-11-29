import {DataSheet} from './DataSheet';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle, AlignmentStyle, BaseLineStyle} from '../../attributes/TextStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {WrapMode} from './WrapMode';
import {MergedCell} from './MergedCell';

/**
 * DataSheet cell
 * A cell in DataSheet table
 * NOTE: Cell will be created automatically after DataSheet is initialized
 */
export class Cell {
    /**
     * DataSheet cell
     * A cell in DataSheet table
     * NOTE: Cell will be created automatically after DataSheet is initialized
     * @param row row index
     * @param column column index
     * @param cellStyle cellstyle
     * @param dataSheet dataSheet
     * @param options options
     */
    constructor(row: number, column: number, cellStyle: any, dataSheet: DataSheet, options: any);
    /**
     * Get row location of a cell
     */
    getRow(): number;
    /**
     * Get column location of a cell
     */
    getColumn(): number;
    /**
     * Check if cell is active
     */
    isActive(): boolean;
    /**
     * Get cell properties
     */
    getProperties(): object | any;
    /**
     * Set cell fill style
     * @param fillStyle New cell fill style
     */
    setFillStyle(fillStyle: FillStyle | string | object): this;
    /**
     * Get cell fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Set cell text style
     * @param textStyle New cell text style
     * @param merge True if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle, merge?: boolean): this;
    /**
     * Get cell text style
     */
    getTextStyle(): TextStyle;
    /**
     * Set cell border
     * @param border New cell border
     * @param border.top Top border line style
     * @param border.left Left border line style
     * @param border.right Right border line style
     * @param border.bottom Bottom border line style
     */
    setBorder(border: object | { top: LineStyle | string | object; left: LineStyle | string | object; right: LineStyle | string | object; bottom: LineStyle | string | object; } ): this;
    /**
     * Get cell border
     */
    getBorder(): object;
    /**
     * Set cell text alignment
     * @param alignment New cell text alignment
     * @param baseline New cell text baseline
     */
    setTextAlignment(alignment?: AlignmentStyle | string, baseline?: BaseLineStyle | string): this;
    /**
     * Set text content for a cell
     * @param newData New cell content
     * @param autoHeight True to automatically set row height base on content data, false otherwise
     */
    setContentData(newData: string, autoHeight: boolean): this;
    /**
     * Set wrap mode for cell text content
     * @param wrapMode New cell content wrap mode
     */
    setWrapMode(wrapMode: string): this;
    /**
     * Get wrap mode for cell text content
     */
    getWrapMode(): WrapMode;
    /**
     * Set cell content validator
     * @param validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string.
     */
    setValidator(validator: Function): this;
    /**
     * Get cell content validator
     */
    getValidator(): Function;
    /**
     * Get text content of a cell
     */
    getContentData(): string;
    /**
     * Get merged cell which this cell is within
     */
    getMergedCell(): MergedCell;
}
