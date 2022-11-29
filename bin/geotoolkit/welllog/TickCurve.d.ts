import {LogPointSet} from './LogPointSet';
import {LogAbstractData} from './data/LogAbstractData';
import {NumberFormat} from '../util/NumberFormat';
import {Rect} from '../util/Rect';
import {Range} from '../util/Range';
import {LineStyle} from '../attributes/LineStyle';
import {TextStyle} from '../attributes/TextStyle';
import {AnchorType} from '../util/AnchorType';

/**
 * Creates a tick curve. Data is passed in LogData.
 * @example
 * ```javascript
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * // The three default categories
 * [
 *   {
 *       'key': 'Major',
 *       'length': 15,
 *       'linestyle': new LineStyle({'color':'red', 'width': 1}),
 *       'textstyle': new TextStyle({'color':'red', 'font': 'normal 11px Arial'})
 *   },
 *   {
 *       'key': 'Medium',
 *       'length': 10,
 *       'linestyle': new LineStyle({'color':'green', 'width': 1}),
 *       'textstyle': new TextStyle({'color':'green', 'font': 'normal 11px Arial'})
 *   },
 *   {
 *       'key': 'Minor',
 *       'length': 5,
 *       'linestyle': new LineStyle({'color':'blue', 'width': 1}),
 *       'textstyle': new TextStyle({'color':'blue', 'font': 'normal 11px Arial'})
 *   }
 * ];
 * // The default category callback
 * function(index, depth, value){
 *   const onethird = (this.getDataSource().getMaxValue() - this.getDataSource().getMinValue())/3;
 *   if(value < onethird)
 *       return 'Minor';
 *   else if(value < onethird * 2)
 *       return 'Medium';
 *   else if(value <= onethird * 3)
 *       return 'Major';
 * };
 * ```
 */
export class TickCurve extends LogPointSet {
    /**
     * Creates a tick curve. Data is passed in LogData.
     * @param data data source to be displayed or properties object
     * @param data.data data source to be displayed
     * @param data.displaymode an array with a combination of values: "line", "value"; or an empty array.
     * @param data.textdecimationstep text decimation step or level
     * @param data.textopposite sets position of the text in relation to the tick
     * @param data.ticksreversed set direction of tick lines
     * @param data.textmargin in device space(pixels)
     * @param data.categories an object containing categories
     * @param data.formatoptions format options
     * @param data.formatoptions.format format
     * @param data.formatoptions.maximumfractiondigits specify maximum fraction digits
     * @param autoUpdate autoUpdate automatic update from data
     * @param categories An array of objects which contain the different categories
     * @param categoryCallback A function which accepts parameters: index, depth and value
     *                                      and returns a string, which corresponds to a category key
     */
    constructor(data?: LogAbstractData | object | { data?: LogAbstractData; displaymode?: string[] | string; textdecimationstep?: number; textopposite?: boolean; ticksreversed?: boolean; textmargin?: number; categories?: Category[]; formatoptions?: NumberFormat | object | { format?: string; maximumfractiondigits?: number; } ; } , autoUpdate?: boolean, categories?: Category[], categoryCallback?: Function);
    /**
     * Sets data source to be displayed.
     * @param data data to display
     * @param autoUpdate automatic update from data source
     */
    setData(data: LogAbstractData, autoUpdate?: boolean): this;
    /**
     * Synchronize state from data
     * @param rect optional area to invalidate track
     */
    updateFromData(rect?: Rect): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns original data value limits
     */
    getValueDataLimits(): Range;
    /**
     * Set category callback, sets the callback function to determine the category
     * of an (index, depth, value) combination
     * @param value A function which accepts parameters: index, depth and value
     *                         and returns a string, which corresponds to a category key
     */
    setCategoryCallback(value: Function): this;
    /**
     * Sets  categories
     * @param categories An array of JSON objects which contain the different categories
     */
    setCategories(categories?: Category[]): this;
    /**
     * Get category by key
     * @param key unique key for category
     */
    getCategory(key: string): object | any;
    /**
     * Removes a category by key
     * @param key category style like major,medium,minor.
     */
    removeCategory(key: string): this;
    /**
     * Adds a new category or replaces an existing one with the same key
     * @param key unique key for category
     * @param length line length
     * @param linestyle line style
     * @param textstyle text style for the tick
     */
    addCategory(key: string, length: number, linestyle: LineStyle | string | object, textstyle: TextStyle | string | object): this;
    /**
     * Gets the array of categories
     */
    getCategories(): any;
    /**
     * Returns display mode
     * (any combination of values: "line", "symbol", "value"; or an empty array)
     */
    getDisplayMode(): string[];
    /**
     * Sets display mode
     * @param t in the new version, an array with a combination of values: "line", "value"; or an empty array.
     *                In the old version, a string: "line", "both" or "none"
     */
    setDisplayMode(t: any[] | string): this;
    /**
     * Helper method to setup line visibility
     * @param enable set visibility of line
     */
    setVisibleLine(enable: boolean): this;
    /**
     * Returns true if line is visible (convenience method)
     */
    isVisibleLine(): boolean;
    /**
     * Helper method to set up values visibility.
     * @param enable sets up values visibility
     */
    setVisibleValue(enable: boolean): this;
    /**
     * Returns true if values are visible (convenience method)
     */
    isVisibleValue(): boolean;
    /**
     * Enables or disables adjusting of anchor for first and last text value
     * @param value Enables or disables adjusting of anchor for first and last text value
     */
    setAdjustTopAndBottomTextAnchor(value: boolean): this;
    /**
     * Gets flag for adjusting anchor of first and last text
     */
    isAdjustTopAndBottomTextAnchor(): boolean;
    /**
     * Set text margin/distance from line in pixels
     * @param value in device space(pixels)
     */
    setTextMargin(value: number): this;
    /**
     * Gets the text margin
     */
    getTextMargin(): number;
    /**
     * Helper method to set direction of tick lines
     * @param enable set direction of tick lines
     */
    setTicksReversed(enable: boolean): this;
    /**
     * Returns true if tick direction is reversed
     */
    isTicksReversed(): boolean;
    /**
     * Sets the position of the reference line for the ticks
     * @param val Number between 0 and 1
     */
    setReferenceLinePosition(val: number): this;
    /**
     * Returns the reference line position
     */
    getReferenceLinePosition(): number;
    /**
     * Sets the position of the text in relation to the ticks
     * 'true' sets the position near the start of the tick line
     * 'false' sets the position near the end of the tick line
     * @param val sets position of the text in relation to the tick
     */
    setTextOpposite(val: boolean): this;
    /**
     * Returns true if text if positioned at the start of the tick
     */
    isTextOpposite(): boolean;
    /**
     * Sets text anchor type, only the 'top', 'bottom' and 'center' (vertical)
     * component of the anchor is used
     * @param anchorType position to display the tick
     */
    setTextAnchorType(anchorType: AnchorType): this;
    /**
     * Gets text anchor type
     */
    getTextAnchorType(): AnchorType;
    /**
     * Sets formatter to be used to format values
     * @param format number formatter
     * (see {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat} for more info)
     * @param format.format format
     * @param format.maximumfractiondigits specify maximum fraction digits
     */
    setValueFormat(format: NumberFormat | object | { format?: string; maximumfractiondigits?: number; } ): this;
    /**
     * Returns formatter to format values
     */
    getValueFormat(): NumberFormat;
    /**
     * Sets text formatter to be used to convert values to texts
     * @deprecated since 2021.2 (3.3), use setValueFormat instead
     * @param textFormatter text formatter to be used to convert values to texts
     */
    setTextFormatter(textFormatter: Function): this;
    /**
     * Returns text formatter to be used to convert values to texts
     * @deprecated since 2021.2 (3.3), use getValueFormat instead
     */
    getTextFormatter(): Function;
    /**
     * Sets text decimation step
     * @param step text decimation step or level
     */
    setTextDecimationStep(step: number): this;
    /**
     * Returns text decimation step
     */
    getTextDecimationStep(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displaymode: string[] | string; textdecimationstep: number; textopposite: boolean; ticksreversed: boolean; textmargin: number; categories: Category[]; formatoptions: NumberFormat} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data data source to be displayed
     * @param properties.displaymode an array with a combination of values: "line", "value"; or an empty array.
     * @param properties.textdecimationstep text decimation step or level
     * @param properties.textopposite sets position of the text in relation to the tick
     * @param properties.ticksreversed set direction of tick lines
     * @param properties.textmargin in device space(pixels)
     * @param properties.categories an object containing categories
     * @param properties.formatoptions format options
     * (see {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat} for more info)
     * @param properties.formatoptions.format format
     * @param properties.formatoptions.maximumfractiondigits specify maximum fraction digits
     */
    setProperties(properties: object | { data?: LogAbstractData; displaymode?: string[] | string; textdecimationstep?: number; textopposite?: boolean; ticksreversed?: boolean; textmargin?: number; categories?: Category[]; formatoptions?: NumberFormat | object | { format?: string; maximumfractiondigits?: number; } ; } ): this;
}
/**
 * Defines category
 */
export type Category = { key: string; length: number; linestyle: LineStyle | string | object; textstyle: TextStyle | string | object}
