import {Group} from '../../scene/Group';
import {TextStyle} from '../../attributes/TextStyle';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';
import {SerieElementInfo} from '../data/SerieElementInfo';

/**
 * A bar chart is a chart that uses either horizontal or vertical bars to show comparisons among categories. <br>
 * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value. <br>
 * Display Modes and Styles can be selected based on the Enum. <br>
 * geotoolkit.controls.shapes.BarChart is used internally by the {@link @int/geotoolkit/widgets/BarChartWidget.BarChartWidget}
 */
export class BarChart extends Group {
    /**
     * A bar chart is a chart that uses either horizontal or vertical bars to show comparisons among categories. <br>
     * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value. <br>
     * Display Modes and Styles can be selected based on the Enum. <br>
     * geotoolkit.controls.shapes.BarChart is used internally by the {@link @int/geotoolkit/widgets/BarChartWidget.BarChartWidget}
     * @param options 
     * @param options.barstyles array of barstyles
     * @param options.valuelimits value limits parameters
     * @param options.valuelimits.minvalue min value to set
     * @param options.valuelimits.maxvalue max value to set
     * @param options.positionlimits value limits for bars positions data
     * @param options.positionlimits.minvalue min value to for bars positions data
     * @param options.positionlimits.maxvalue max value to for bars positions data
     * @param options.neatlimits use neatlimits flag
     * @param options.barvalues bar values parameters
     * @param options.barvalues.totalonly to only show total bar values for stacked bar mode
     * @param options.barvalues.visible bar values visibility flag, supports individual bar value visibility flag
     * if value visible is a function, it'll be in this format: function (groupIndex, barIndex, value, valueType, textWidth, textHeight, orientation) and return a boolean
     * @param options.barvalues.location bar values' label location
     * @param options.barvalues.decimalprecision bar values decimal precision
     * @param options.barvalues.rotationangle bar value labels rotation
     * @param options.barvalues.margins margins options
     * @param options.barvalues.margins.anchorx labels anchor x margin in pixels. This value will be added to anchor _before_ text rotation
     * @param options.barvalues.margins.anchory labels anchor y margin in pixels. This value will be added to anchor _before_ text rotation
     * @param options.barvalues.textstyle bar value text style
     * @param options.orientation orientation of the chart
     * @param options.barmode Bar display mode of the chart
     * @param options.barwidth width of the bars
     * @param options.barpad padding between the datasets
     * @param options.barmaxwidth maximum width of bar in device space
     * @param options.autogradient enables auto gradient of the bars
     * @param options.ismissingvalue missing value verification criteria; default is function(value){ return (value===null); }
     * @param options.createselectedstyle method to create selected style based on "regular" one
     * @param options.series Enable/disable specific bar chart series
     * @param data (see "setData" method description for details)
     */
    constructor(options: object | { barstyles?: any[]; valuelimits?: object | { minvalue?: number | Function; maxvalue?: number | Function; } ; positionlimits?: object | { minvalue?: number; maxvalue?: number; } ; neatlimits?: boolean; barvalues?: object | { totalonly?: boolean; visible?: boolean | boolean[][] | Function; location?: BarValueLocation | string; decimalprecision?: number; rotationangle?: number; margins?: object | { anchorx?: number; anchory?: number; } ; textstyle?: TextStyle | string | object; } ; orientation?: Orientation | string; barmode?: BarMode | string; barwidth?: number; barpad?: number; barmaxwidth?: number; autogradient?: boolean; ismissingvalue?: Function; createselectedstyle?: Function; series?: object[]; } , data: any);
    /**
     * Sets data to display
     * @param data data object
     * @param data.append append/replace flag
     * @param data.mode Data mode for the barchart
     * @param data.datasets Array of Values for non-float and Array of Array(2) Values for float charts
     * @param data.series Visibility of series
     * @param data.positions Array of data determines bars positions
     */
    setData(data: object | { append?: boolean; mode?: DataMode | string; datasets?: any[]; series?: object[]; positions?: number[] | NumericalDataSeries; } ): this;
    /**
     * Whether BarChart has data initialized
     */
    hasData(): boolean;
    /**
     * Set data series visibility
     * @param series Visibility of series
     */
    setDataSeriesVisible(series: object[]): this;
    /**
     * Get data series visibility
     */
    getDataSeriesVisible(): object[];
    /**
     * Sets shape options
     * @example
     * ```javascript
     * // How to use 'barstyles':
     * // Example 1 - no specific negative styles, no selected styles (simplest case):
     * 'barstyles': [
     * // "Element1" styles:
     * {
     *    'linestyles': myElement1LineStyle,
     *    'fillstyles': myElement1FillStyle,
     * },
     * // "Element2" styles:
     * {...},
     * // so on:
     * ...
     * ],
     * // Example 2 - positive and negative styles, no selected styles:
     * 'barstyles': [
     * // "Element1" styles:
     * {
     *    'linestyles': [myElement1PositiveLineStyle, myElement1NegativeLineStyle]
     *    'fillstyles': [myElement1PositiveFillStyle, myElement1NegativeFillStyle]
     * },
     * // "Element2" styles:
     * {...},
     * // so on:
     * ...
     * ],
     * // Example 3 - non-selected ("regular") and selected styles:
     * 'barstyles': [
     * // "Element1" styles:
     * {
     *    'linestyles': myElement1NonSelectedLineStyle,
     *    'fillstyles': myElement1NonSelectedFillStyle,
     *    'selected-linestyles': myElement1SelectedLineStyle,
     *    'selected-fillstyles': myElement1SelectedFillStyle,
     * },
     * // "Element2" styles:
     * {...},
     * // so on:
     * ...
     * ],
     * // Example 4 - Disable bar chart 2nd series
     * 'series': [
     *      {'visible': true},
     *      {'visible': false},
     *      {'visible': true}
     * ]
     * ```
     * @param options options object
     * @param options.barstyles array of barstyles (see example below)
     * @param options.valuelimits value limits parameters
     * @param options.valuelimits.minvalue min value to set
     * @param options.valuelimits.maxvalue max value to set
     * @param options.positionlimits value limits for bars positions data
     * @param options.positionlimits.minvalue min value to for bars positions data
     * @param options.positionlimits.maxvalue max value to for bars positions data
     * @param options.neatlimits use neatlimits flag
     * @param options.barvalues bar values parameters
     * @param options.barvalues.totalonly to only show total bar values for stacked bar mode
     * @param options.barvalues.visible bar values visibility flag, supports individual bar value visibility flag
     * if value visible is a function, it'll be in this format: function (groupIndex, barIndex, value, valueType, textWidth, textHeight, orientation) and return a boolean
     * @param options.barvalues.location bar values' label location
     * @param options.barvalues.decimalprecision bar values decimal precision
     * @param options.barvalues.rotationangle bar value labels rotation
     * @param options.barvalues.margins margins options
     * @param options.barvalues.margins.anchorx labels anchor x margin in pixels. This value will be added to anchor _before_ text rotation
     * @param options.barvalues.margins.anchory labels anchor y margin in pixels. This value will be added to anchor _before_ text rotation
     * @param options.barvalues.textstyle bar value text style
     * @param options.orientation orientation of the chart
     * @param options.barmode Bar display mode of the chart
     * @param options.barwidth width of the bars
     * @param options.barpad padding between the datasets
     * @param options.barmaxwidth maximum width of bar in device space
     * @param options.autogradient enables auto gradient of the bars
     * @param options.ismissingvalue missing value verification criteria; default is function(value){ return (value===null); }
     * @param options.createselectedstyle method to create selected style based on "regular" one
     * @param options.series Enable/disable specific bar chart series
     * @param options.symbol Options for symbols on top of each bar (see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties} for detail)
     */
    setOptions(options: object | { barstyles?: any[]; valuelimits?: object | { minvalue?: number | Function; maxvalue?: number | Function; } ; positionlimits?: object | { minvalue?: number; maxvalue?: number; } ; neatlimits?: boolean; barvalues?: object | { totalonly?: boolean; visible?: boolean | boolean[][] | Function; location?: BarValueLocation | string; decimalprecision?: number; rotationangle?: number; margins?: object | { anchorx?: number; anchory?: number; } ; textstyle?: TextStyle | string | object; } ; orientation?: Orientation | string; barmode?: BarMode | string; barwidth?: number; barpad?: number; barmaxwidth?: number; autogradient?: boolean; ismissingvalue?: Function; createselectedstyle?: Function; series?: object[]; symbol?: object; } ): this;
    /**
     * Return shape options
     */
    getOptions(): {barstyles: any[]; valuelimits: {minvalue: number | Function; maxvalue: number | Function}; positionlimits: {minvalue: number; maxvalue: number}; neatlimits: boolean; barvalues: {totalonly: boolean; visible: boolean | boolean[][] | Function; location: BarValueLocation | string; decimalprecision: number; rotationangle: number; margins: {anchorx: number; anchory: number}; textstyle: TextStyle | string | object}; orientation: Orientation | string; barmode: BarMode | string; barwidth: number; barpad: number; barmaxwidth: number; autogradient: boolean; ismissingvalue: Function; createselectedstyle: Function; series: object[]; symbol: object} | any;
    /**
     * Calculates minimal neat limit based on input limits
     * (see {@link @int/geotoolkit/util/MathUtil.MathUtil.calculateNeatLimits} for more info)
     * @param minValue min value to create neat limits from
     * @param maxValue max value to create neat limits from
     */
    static getNeatMinValue(minValue: number, maxValue: number): number;
    /**
     * Calculates maximal neat limit based on input limits
     * (see {@link @int/geotoolkit/util/MathUtil.MathUtil.calculateNeatLimits} for more info)
     * @param minValue min value to create neat limits from
     * @param maxValue max value to create neat limits from
     */
    static getNeatMaxValue(minValue: number, maxValue: number): number;
    /**
     * Get data limits
     */
    getDataLimits(): Rect;
    /**
     * Select elements at specified canvas coordinates
     * @param x x-ordinate OR {x,y}-coordinates
     * @param y y-ordinate
     * @param highlight highlight selected elements
     */
    selectBarsAt(x: number | Point, y?: number, highlight?: boolean): any[];
    /**
     * Hit test in the device coordinate
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): SerieElementInfo[];
    /**
     * Gets value of sample
     * @param series series id
     * @param sample sample id
     */
    getValueAt(series: number, sample: number): number | any;
    /**
     * Highlight specified bars
     * @param bars array of {@link @int/geotoolkit/controls/data/SerieElementInfo.SerieElementInfo} bars bars to highlight
     * @param append append or replace flag
     */
    highlightBars(bars: any[], append?: boolean): this;
    /**
     * set format handler for labels
     * @example
     * ```javascript
     * <caption> acceptable parameters for handler function </caption>
     * text {string}: current text that already fixed by value precision
     * groupId {number}: the index of current data series
     * itemId {number}: the index of the data in the current data series
     * value {number}: raw value in data series
     * <caption>The example simply show how to control the text content by value </caption>
     * For data series [[1,2,3][2,3,4]], the following example return '3+' when value is more than 2
     * barchart.setFormatLabelHandler(
     *      (text, groupId, itemId, value) => {
     *          if(value > 2)
     *              return '3+';
     *          else return value;
     *      });
     * ```
     * @param handler format handler
     */
    setFormatLabelHandler(handler: Function): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {barstyles: any[]; valuelimits: {minvalue: number | Function; maxvalue: number | Function}; positionlimits: {minvalue: number; maxvalue: number}; neatlimits: boolean; barvalues: {totalonly: boolean; visible: boolean | boolean[][] | Function; location: BarValueLocation | string; decimalprecision: number; rotationangle: number; margins: {anchorx: number; anchory: number}; textstyle: TextStyle | string | object}; orientation: Orientation | string; barmode: BarMode | string; barwidth: number; barpad: number; barmaxwidth: number; autogradient: boolean; ismissingvalue: Function; createselectedstyle: Function; series: object[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options object
     * @param properties.barstyles array of barstyles
     * @param properties.valuelimits value limits parameters
     * @param properties.valuelimits.minvalue min value to set
     * @param properties.valuelimits.maxvalue max value to set
     * @param properties.positionlimits value limits for bars positions data
     * @param properties.positionlimits.minvalue min value to for bars positions data
     * @param properties.positionlimits.maxvalue max value to for bars positions data
     * @param properties.neatlimits use neatlimits flag
     * @param properties.barvalues bar values parameters
     * @param properties.barvalues.totalonly to only show total bar values for stacked bar mode
     * @param properties.barvalues.visible bar values visibility flag, supports individual bar value visibility flag
     * if value visible is a function, it'll be in this format: function (groupIndex, barIndex, value, valueType, textWidth, textHeight, orientation) and return a boolean
     * @param properties.barvalues.location bar values' label location
     * @param properties.barvalues.decimalprecision bar values decimal precision
     * @param properties.barvalues.rotationangle bar value labels rotation
     * @param properties.barvalues.margins margins options
     * @param properties.barvalues.margins.anchorx labels anchor x margin in pixels. This value will be added to anchor _before_ text rotation
     * @param properties.barvalues.margins.anchory labels anchor y margin in pixels. This value will be added to anchor _before_ text rotation
     * @param properties.barvalues.textstyle bar value text style
     * @param properties.orientation orientation of the chart
     * @param properties.barmode Bar display mode of the chart
     * @param properties.barwidth width of the bars
     * @param properties.barpad padding between the datasets
     * @param properties.barmaxwidth maximum width of bar in device space
     * @param properties.autogradient enables auto gradient of the bars
     * @param properties.ismissingvalue missing value verification criteria; default is function(value){ return (value===null); }
     * @param properties.createselectedstyle method to create selected style based on "regular" one
     * @param properties.series Enable/disable specific bar chart series
     */
    setProperties(properties: object | { barstyles?: any[]; valuelimits?: object | { minvalue?: number | Function; maxvalue?: number | Function; } ; positionlimits?: object | { minvalue?: number; maxvalue?: number; } ; neatlimits?: boolean; barvalues?: object | { totalonly?: boolean; visible?: boolean | boolean[][] | Function; location?: BarValueLocation | string; decimalprecision?: number; rotationangle?: number; margins?: object | { anchorx?: number; anchory?: number; } ; textstyle?: TextStyle | string | object; } ; orientation?: Orientation | string; barmode?: BarMode | string; barwidth?: number; barpad?: number; barmaxwidth?: number; autogradient?: boolean; ismissingvalue?: Function; createselectedstyle?: Function; series?: object[]; } ): this;
}
/**
 * Enum for BarChart.BarMode
 */
export enum BarMode {
    /**
     * Default
     */
    Default = 'Default',
    /**
     * Stacked
     */
    Stacked = 'Stacked',
    /**
     * Float
     */
    Float = 'Float'
}
/**
 * Enum for BarChart.DataMode
 */
export enum DataMode {
    /**
     * Associative
     */
    Associative = 'Associative',
    /**
     * Single
     */
    Single = 'Single'
}
/**
 * Enum for BarChart.BarValueLocation
 */
export enum BarValueLocation {
    /**
     * TopOutside
     */
    TopOutside = 'TopOutside',
    /**
     * TopInside
     */
    TopInside = 'TopInside',
    /**
     * BottomInside
     */
    BottomInside = 'BottomInside',
    /**
     * Center
     */
    Center = 'Center'
}
/**
 * Enum for BarChart.Orientation
 */
export enum Orientation {
    /**
     * Bottom
     */
    Bottom = 'Bottom',
    /**
     * Left
     */
    Left = 'Left',
    /**
     * Top
     */
    Top = 'Top',
    /**
     * Right
     */
    Right = 'Right'
}
