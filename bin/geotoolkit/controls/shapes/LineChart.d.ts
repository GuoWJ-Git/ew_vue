import {Group} from '../../scene/Group';
import {IChartDataVisual} from './IChartDataVisual';
import {INumericalDataSeries} from '../../data/INumericalDataSeries';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Rect} from '../../util/Rect';
import {Dimension} from '../../util/Dimension';
import {AnchorType} from '../../util/AnchorType';
import {DataSeries} from '../../data/DataSeries';
import {DataSeriesView} from '../../data/DataSeriesView';
import {TextStyle} from '../../attributes/TextStyle';
import {Grid} from '../../axis/Grid';
import {Point} from '../../util/Point';
import {Orientation} from '../../util/Orientation';

/**
 * The Line Chart is a chart that displays data with lines. <br>
 * Line Chart can display data with several curve types: <br>
 *  Linear - A simple polyline <br>
 *  Spline - Spline (Bezier) <br>
 *  Logscale - logarithmic <br>
 * It can be further customized by using the options in the constructor.
 * @example
 * ```javascript
 * // Creating a simple line chart. (X values are shared for the chart )
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const x = [0, 2, 4, 6, 8, ...];
 * const y = [
 *      [10, 53.3022600566037, 40.79461201233789, 53.4218930513598, ...],
 *      [1000, 642.6507126996294, 696.8659508964047, 618.771930876188, ...]
 * ];
 * const linechart = new LineChart({
 *   'x': x,
 *   'y': y,
 *   'linestyles': [...],
 *   'series': [{
 *      'visible': true
 *   }]
 * });
 * return lineChart;
 * // To draw a Line Chart but not display the gridlines user can do the following:
 * linechart.getGrid().setVisible(false);
 * // or use Css
 * linechart.setCss(new CssStyle({'css': '.geotoolkit.axis.Grid { visible: false;}' }));
 * ```
 */
export class LineChart extends Group implements IChartDataVisual {
    /**
     * The Line Chart is a chart that displays data with lines. <br>
     * Line Chart can display data with several curve types: <br>
     *  Linear - A simple polyline <br>
     *  Spline - Spline (Bezier) <br>
     *  Logscale - logarithmic <br>
     * It can be further customized by using the options in the constructor.
     * @param options array of X coordinates or parameters object
     * @param options.x array of X coordinates
     * @param options.y array of Y coordinates
     * @param options.linestyles Line styles to apply to curves
     * @param options.fillstyles Fill styles to apply to curves
     * @param options.cache boolean flag that specify cache usage
     * @param options.baseline A base line for the fill
     * @param options.gapfillcutoffvalue value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
     * @param options.gapvalue Maximum value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
     * @param options.stackedarea use to determine if stacked area or not
     * @param options.percentarea use to determine if percent area of not
     * @param options.datainterpolationstrategy Data Interpolation strategy for stacked chart for missing values
     * @param options.spline Defines whether to build a spline or polygon path
     * @param options.autodatalimits automatic model limits calculation
     * @param options.modellimits model limits of chart. if it is not set then model limits is calculated.
     * @param options.series Defines the visibility of linechart series. By default it's true
     * @param options.gridvisible set visible the gridlines
     * @param options.bounds bounds or position on the chart
     * @param options.symbols Symbols definition for data series. This object may contain definition for more than one series
     * @param options.symbols.width Symbols width, for all series
     * @param options.symbols.height Symbols height, for all series
     * @param options.symbols.dimensions Symbols dimensions, for each one series
     * @param options.symbols.sizeisindevicespace Flag that determines if symbols must keep device size
     * @param options.symbols.painters painters for series. Nulls are acceptable if a series should not have a symbols - functions are in geotoolkit.scene.shapes.painter namespace
     * @param options.symbols.step Number of step at which symbol should be displayed, for all series
     * @param options.symbols.visible define visibility of the symbols
     * @param options.symbols.linestyles Defines series symbols line styles
     * @param options.symbols.fillstyles Defines series symbols fill styles
     * @param options.arearange Defines Area Range
     * @param options.arearange.range Defines upper bound range and lowerbound range
     * @param options.arearange.linestyles Linestyles for area range series
     * @param options.arearange.fillstyle fillstyle to apply between ranges
     * @param options.labels labels for linechart points
     * @param options.labels.step Number of step at which label should be displayed, for all series
     * @param options.labels.padding text padding in pixel for label
     * @param options.labels.offset text margin in pixel for label in x-y-direction (in device space) calculated automatically according label anchor
     * @param options.labels.offsetx text margin in pixel for label in x-direction (in device space)
     * @param options.labels.offsety text margin in pixel for label in y-direction (in device space)
     * @param options.labels.anchor text anchor type for label (in device space)
     * @param options.labels.annotations annotations for linechart points, if not specified y value of linechart will be displayed
     * @param options.labels.textstyles text styles for labels
     * @param options.labels.fillstyles fill styles for labels
     * @param options.labels.linestyles line styles for labels
     * @param options.labels.showellipsis show ellipses for textstyle
     * @param y array of Y coordinates
     * @param lineStyles Line styles to apply to curves
     * @param bounds bounds or position on the chart
     * @param spline smooth the curve or not
     * @param logscale use log scale or not
     * @param fillStyles Fill Styles
     * @param baseLine Y value of a horizontal line which will define the base line for fill
     * @param stackedarea use to determine if stacked area or not
     * @param percentarea use to determine if percent area of not
     * @param arearange Defines Area Range
     * @param arearange.range Defines upper bound range and lowerbound range
     * @param arearange.linestyles Linestyles for area range series
     * @param arearange.fillstyle fillstyle to apply between ranges
     * @param series Defines the visibility of linechart series. By default it's true
     */
    constructor(options?: number[] | number[][] | INumericalDataSeries[] | object | { x?: number[] | number[][] | INumericalDataSeries[]; y?: number[] | number[][] | INumericalDataSeries[]; linestyles?: LineStyle[]; fillstyles?: FillStyle[]; cache?: boolean; baseline?: number; gapfillcutoffvalue?: number; gapvalue?: number; stackedarea?: boolean; percentarea?: boolean; datainterpolationstrategy?: string; spline?: boolean; autodatalimits?: boolean; modellimits?: Rect; series?: any[]; gridvisible?: boolean; bounds?: Rect; symbols?: object | { width?: number; height?: number; dimensions?: (any | number | Dimension)[]; sizeisindevicespace?: boolean; painters?: Function[]; step?: number; visible?: boolean | boolean[]; linestyles?: LineStyle[]; fillstyles?: FillStyle[]; } ; arearange?: any[] | object | { range?: number[][]; linestyles?: (LineStyle | string | any)[]; fillstyle?: FillStyle | string | any; } ; labels?: object | { step?: number; padding?: number; offset?: number; offsetx?: number; offsety?: number; anchor?: AnchorType; annotations?: number[][] | string[][] | DataSeries[] | DataSeriesView[]; textstyles?: (TextStyle | string | any)[] | TextStyle | string | any; fillstyles?: (FillStyle | string | any)[] | FillStyle | string | any; linestyles?: (LineStyle | string | any)[] | LineStyle | string | any; showellipsis?: boolean; } ; } , y?: number[][], lineStyles?: LineStyle[], bounds?: Rect, spline?: boolean, logscale?: boolean, fillStyles?: FillStyle[], baseLine?: number, stackedarea?: boolean, percentarea?: boolean, arearange?: any[] | object | { range?: number[][]; linestyles?: (LineStyle | string | any)[]; fillstyle?: FillStyle | string | any; } , series?: any[][]);
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current line
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization for line
     * @param needOptimization Is optimization for line on
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Turns on/off optimization for symbols
     * @param needOptimize Is optimization for symbols on
     */
    setOptimizationSymbol(needOptimize?: boolean): this;
    /**
     * Return the current chart setting
     */
    getData(): {x: number[] | number[][] | INumericalDataSeries[]; y: number[] | number[][] | INumericalDataSeries[]; linestyles: LineStyle[]; fillstyles: FillStyle[]; baseline: number; gapfillcutoffvalue: number; gapvalue: number; symbols: {width: number; height: number; visible: boolean; sizeIsInDeviceSpace: boolean; painters: Function[]; linestyles: LineStyle[]; fillstyles: FillStyle[]}; gridvisible: boolean; stackedarea: boolean; percentarea: boolean; arearange: AreaRange[]; labels: {offsetx: number; offsety: number; annotations: number[][] | string[][] | DataSeries[] | DataSeriesView[]; textstyles: TextStyle[]; fillstyles: FillStyle[]; linestyles: LineStyle[]; showellipsis: boolean}; series: boolean[][]} | object;
    /**
     * Set the data to be plotted in the line chart.
     * @param data data
     * @param data.x The x array contains x series data
     * @param data.y The y array contains y series data
     * @param data.modelLimits model limits of chart. if it is not set then model limits is calculated.
     * @param data.autodatalimits automatic model limits calculation
     * @param data.linestyles Line styles to apply to curves
     * @param data.fillstyles Fill styles to apply to curves
     * @param data.baseline A base line for the fill
     * @param data.gapfillcutoffvalue value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
     * @param data.gapvalue Maximum value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
     * @param data.stackedarea Determine if stacked area graph or not
     * @param data.percentarea Determine if stacked area graph or not
     * @param data.datainterpolationstrategy Data Interpolation strategy for stacked chart for missing values
     * @param data.symbols Symbols definition for data series. This object may contain definition for more than one series
     * @param data.symbols.width Symbols width, for all series
     * @param data.symbols.height Symbols height, for all series
     * @param data.symbols.sizeIsInDeviceSpace Flag that determines if symbols must keep device size,
     * @param data.symbols.painters painters for series. Nulls are acceptable if a series should not have a symbols
     * @param data.symbols.linestyles Defines series symbols line styles
     * @param data.symbols.fillstyles Defines series symbols fill styles
     * @param data.labels labels for linechart points
     * @param data.labels.offsetx text margin for label in x-direction
     * @param data.labels.offsety text margin for label in y-direction
     * @param data.labels.annotations annotations for linechart points, if not specified y value of linechart will be displayed
     * @param data.labels.textstyles textstyle for label
     * @param data.labels.showellipsis show ellipses for textstyle
     * @param data.arearange Defines Area Range
     * @param data.series Defines the visibility of linechart series. By default it's true
     */
    setData(data: object | { x?: number[] | number[][] | INumericalDataSeries[]; y?: number[] | number[][] | INumericalDataSeries[]; modelLimits?: Rect; autodatalimits?: boolean; linestyles?: LineStyle[]; fillstyles?: FillStyle[]; baseline?: number; gapfillcutoffvalue?: number; gapvalue?: number; stackedarea?: boolean; percentarea?: boolean; datainterpolationstrategy?: string; symbols?: object | { width?: number; height?: number; sizeIsInDeviceSpace?: boolean; painters?: Function[]; linestyles?: LineStyle[]; fillstyles?: FillStyle[]; } ; labels?: object | { offsetx?: number; offsety?: number; annotations?: number[][] | string[][] | DataSeries[] | DataSeriesView[]; textstyles?: TextStyle[][]; showellipsis?: boolean; } ; arearange?: AreaRange[]; series?: object[][]; } ): this;
    /**
     * Sets options
     * @param options An object containing the properties to set, see {@link @int/geotoolkit/controls/shapes/LineChart.LineChart#setProperties}
     */
    setOptions(options: any): this;
    /**
     * Gets visual options for the chart
     */
    getOptions(): {linestyles: LineStyle[]; fillstyles: FillStyle[]; baseline: number; gapvalue: number; spline: boolean; symbols: {width: number; height: number; dimensions: Dimension[] | any; sizeisindevicespace: boolean; painters: Function[]; step: number; visible: boolean | boolean[]; linestyles: LineStyle[]; fillstyles: FillStyle[]}; labels: {offsetx: number; offsety: number; annotations: number[][] | string[][] | DataSeries[] | DataSeriesView[]; textstyles: TextStyle[]; fillstyles: FillStyle[]; linestyles: LineStyle[]; showellipsis: boolean}; modellimits: Rect; autodatalimits: boolean; series: boolean[][]} | any;
    /**
     */
    dispose(): void;
    /**
     * Gets model limits, the limits of this groups inside space
     */
    getModelLimits(): Rect | any;
    /**
     * Sets inner model limits and it sets autodatalimits to false
     * @param limits inner limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * Set grid line styles
     * @param tickStyles json for tick line styles
     */
    setGridStyle(tickStyles?: object): this;
    /**
     * Return embedded gridlines
     */
    getGrid(): Grid;
    /**
     * Hit test in the device coordinate. This method checks if any point is inside the area and shape
     * intersects area.
     * @param area model area or position
     * @param area.x optional array of x coordinates
     * @param area.y optional array of y coordinates
     * @param radius radius of selection
     * @param ignoreOrientation Orientation to ignore - this parameter is ignored for arrays of points
     */
    hitTest(area: Rect | Point | object | { x?: number[]; y?: number[]; } , radius?: number, ignoreOrientation?: Orientation): any[];
    /**
     * Returns flag to indicate automatic calculation of data limits
     */
    getAutoDataLimits(): boolean;
    /**
     * Sets a flag to indicate automatic calculation of data limits
     * @param enable enable or disable calculation of the data limits
     */
    setAutoDataLimits(enable: boolean): this;
    /**
     * Return original data limits
     */
    getDataLimits(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {linestyles: LineStyle[]; fillstyles: FillStyle[]; cache: boolean; baseline: number; gapfillcutoffvalue: number; gapvalue: number; stackedarea: boolean; percentarea: boolean; datainterpolationstrategy: string; spline: boolean; autodatalimits: boolean; modellimits: Rect; series: boolean[][]; gridvisible: boolean; bounds: Rect; symbols: {width: number; height: number; dimensions: (any | number | Dimension)[]; sizeisindevicespace: boolean; painters: Function[]; step: number; visible: boolean | boolean[]; linestyles: LineStyle[]; fillstyles: FillStyle[]}; arearange: {range: number[][]; linestyles: LineStyle[]; fillstyle: FillStyle}; labels: {step: number; padding: number; offset: number; offsetx: number; offsety: number; anchor: AnchorType; annotations: number[][] | string[][] | DataSeries[] | DataSeriesView[]; textstyles: TextStyle[] | TextStyle; fillstyles: FillStyle[] | FillStyle; linestyles: LineStyle[] | LineStyle; showellipsis: boolean}} | any;
    /**
     * Sets visual options for the chart
     * @param properties options
     * @param properties.x array of X coordinates
     * @param properties.y array of Y coordinates
     * @param properties.linestyles Line styles to apply to curves
     * @param properties.fillstyles Fill styles to apply to curves
     * @param properties.cache boolean flag that specify cache usage
     * @param properties.baseline A base line for the fill
     * @param properties.gapfillcutoffvalue value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
     * @param properties.gapvalue Maximum value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
     * @param properties.stackedarea use to determine if stacked area or not
     * @param properties.percentarea use to determine if percent area of not
     * @param properties.datainterpolationstrategy Data Interpolation strategy for stacked chart for missing values
     * @param properties.spline Defines whether to build a spline or polygon path
     * @param properties.autodatalimits automatic model limits calculation
     * @param properties.modellimits model limits of chart. if it is not set then model limits is calculated.
     * @param properties.series Defines the visibility of linechart series. By default it's true
     * @param properties.gridvisible set visible the gridlines
     * @param properties.bounds bounds or position on the chart
     * @param properties.symbols Symbols definition for data series. This object may contain definition for more than one series
     * @param properties.symbols.width Symbols width, for all series
     * @param properties.symbols.height Symbols height, for all series
     * @param properties.symbols.dimensions Symbols dimensions, for each one series
     * @param properties.symbols.sizeisindevicespace Flag that determines if symbols must keep device size,
     * @param properties.symbols.painters painters for series. Nulls are acceptable if a series should not have a symbols
     * @param properties.symbols.step Number of step at which symbol should be displayed, for all series
     * @param properties.symbols.visible define visibility of the symbols
     * @param properties.symbols.linestyles Defines series symbols line styles
     * @param properties.symbols.fillstyles Defines series symbols fill styles
     * @param properties.arearange Defines Area Range
     * @param properties.arearange.range Defines upper bound range and lowerbound range
     * @param properties.arearange.linestyles Linestyles for area range series
     * @param properties.arearange.fillstyle fillstyle to apply between ranges
     * @param properties.labels labels for linechart points
     * @param properties.labels.step Number of step at which label should be displayed, for all series
     * @param properties.labels.padding text padding in pixel for label
     * @param properties.labels.offset text margin in pixel for label in x-y-direction (in device space) calculated automatically according label anchor
     * @param properties.labels.offsetx text margin for label in x-direction
     * @param properties.labels.offsety text margin for label in y-direction
     * @param properties.labels.anchor text anchor type for label (in device space)
     * @param properties.labels.annotations annotations for linechart points, if not specified y value of linechart will be displayed
     * @param properties.labels.textstyles textstyles for label
     * @param properties.labels.fillstyles fillstyles for label
     * @param properties.labels.linestyles linestyles for label
     * @param properties.labels.showellipsis show ellipses for textstyle
     */
    setProperties(properties?: object | { x?: number[] | number[][] | INumericalDataSeries[]; y?: number[] | number[][] | INumericalDataSeries[]; linestyles?: LineStyle[]; fillstyles?: FillStyle[]; cache?: boolean; baseline?: number; gapfillcutoffvalue?: number; gapvalue?: number; stackedarea?: boolean; percentarea?: boolean; datainterpolationstrategy?: string; spline?: boolean; autodatalimits?: boolean; modellimits?: Rect; series?: boolean[][]; gridvisible?: boolean; bounds?: Rect; symbols?: object | { width?: number; height?: number; dimensions?: (any | number | Dimension)[]; sizeisindevicespace?: boolean; painters?: Function[]; step?: number; visible?: boolean | boolean[]; linestyles?: LineStyle[]; fillstyles?: FillStyle[]; } ; arearange?: any[] | object | { range?: number[][]; linestyles?: (LineStyle | string | any)[]; fillstyle?: FillStyle | string | any; } ; labels?: object | { step?: number; padding?: number; offset?: number; offsetx?: number; offsety?: number; anchor?: AnchorType; annotations?: number[][] | string[][] | DataSeries[] | DataSeriesView[]; textstyles?: TextStyle[] | TextStyle; fillstyles?: FillStyle[] | FillStyle; linestyles?: LineStyle[] | LineStyle; showellipsis?: boolean; } ; } ): this;
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
     * @param cutoff The cutoff value. When non zero is set
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoffValue(): number;
    /**
     * Set the value of the gap. Value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
     * @param value The maximum discontinuity allowed in x axis
     */
    setGapValue(value: number): this;
    /**
     * Returns The maximum discontinuity allowed in x axis
     */
    getGapValue(): number;
}
/**
 * Enum of rendering optimization types
 */
export enum OptimizationType {
    /**
     * Filter points which are close to each other and are rendered in one pixel
     */
    FilterClosePoints = 0,
    /**
     * Ramer–Douglas–Peucker optimization
     */
    RDP = 1
}
/**
 * Enum of Data-Interpolation type for stacked area
 */
export enum DataInterpolationType {
    /**
     * Interpolate as 0 for missing points
     */
    InterpolateZero = 0,
    /**
     * Interpolate as Null for missing points
     */
    InterpolateNull = 1,
    /**
     * Apply linear interpolation for missing points
     */
    InterpolateMissingValues = 2
}
/**
 * The area range definition.
 */
export type AreaRange = { range: number[][]; linestyles: (LineStyle | string | object)[]; fillstyle: FillStyle | string | object}
