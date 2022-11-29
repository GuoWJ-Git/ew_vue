import {SymbolShape} from '../scene/shapes/SymbolShape';
import {LogDataSample} from './data/LogDataSample';
import {LogPointSet} from './LogPointSet';
import {LogAbstractData} from './data/LogAbstractData';
import {NumericalDataSeries} from '../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../data/NumericalDataSeriesView';
import {LineStyle} from '../attributes/LineStyle';
import {TextStyle} from '../attributes/TextStyle';
import {ScaleType} from './data/ScaleType';
import {AbstractUnit} from '../util/AbstractUnit';
import {LogCurveLimitsStrategy} from './LogCurveLimitsStrategy';
import {InterpolationEdge} from '../data/DataLimitsInterpolation';
import {InterpolationType} from '../data/DataStepInterpolation';
import {LogGradientStyle} from './attributes/LogGradientStyle';
import {DataSeries} from '../data/DataSeries';
import {Rect} from '../util/Rect';
import {LogDataEvent} from './data/LogDataEvent';
import {Range} from '../util/Range';
import {StateChanges} from '../scene/Node';
import {RgbaColor} from '../util/RgbaColor';
import {CutoffMode} from '../data/DataGapFillInterpolation';
import {OptimizationType as DataOptimizationType} from '../data/OptimizedData';
import {Transformation} from '../util/Transformation';
import {AbstractScaledData} from '../data/AbstractScaledData';
import {Point} from '../util/Point';
import {Dimension} from '../util/Dimension';
import {AnchorType} from '../util/AnchorType';
import {NumberFormat} from '../util/NumberFormat';

/**
 * Callback for symbol formatter
 */
export type symbolFormatterCallback = (symbol: SymbolShape, sample: LogDataSample) => SymbolShape | any;
/**
 * Creates the standard representation of a well log curve. Data is passed in a LogAbstractData.<br>
 * The LogCurve is constructed from the passed data source, then addChild() has to be used to add the curve to the track. The corresponding Line Style and interpolation type is set with helper methods.<br>
 * Several methods are also available to handle Clipping, Wrapping, Display Modes( symbols, values etc), curve limits , decimation etc.<br>
 * setMicroPosition() can be used to place log curve at a specified position of the track in horizontal direction.<br>
 * Similarly, the add/remove/get-Child() has to be used to add the track containing the curve, to the TrackContainer.
 * @example
 * ```javascript
 * import {TrackContainer} from '@int/geotoolkit/welllog/TrackContainer';
 * import {LogTrack} from '@int/geotoolkit/welllog/LogTrack';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * new TrackContainer(..)
 *      .addChild(new LogTrack(..)
 *                  .addChild(new LogCurve(dataSource))
 *       )
 * ```
 */
export class LogCurve extends LogPointSet {
    /**
     * Creates the standard representation of a well log curve. Data is passed in a LogAbstractData.<br>
     * The LogCurve is constructed from the passed data source, then addChild() has to be used to add the curve to the track. The corresponding Line Style and interpolation type is set with helper methods.<br>
     * Several methods are also available to handle Clipping, Wrapping, Display Modes( symbols, values etc), curve limits , decimation etc.<br>
     * setMicroPosition() can be used to place log curve at a specified position of the track in horizontal direction.<br>
     * Similarly, the add/remove/get-Child() has to be used to add the track containing the curve, to the TrackContainer.
     * @param data data source to be displayed or JSON object containing log visual configuration
     * @param data.data datasource
     * @param data.data.name curve name
     * @param data.data.depths datasource depths series/array
     * @param data.data.values datasource values series/array
     * @param data.autoupdate automatic update from datasource. If true, curve listens to data changes from source
     * @param data.description The node description
     * @param data.barlinestyle value-bar line style
     * @param data.textstyle text style
     * @param data.scaletype values scale type
     * @param data.textreference type of the text to be put on the track
     * @param data.displayunit display unit
     * @param data.displaymode display mode like 'line' , 'symbol'
     * @param data.limitstype limits type
     * @param data.limitsmin min limits value in case of data.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param data.limitsmax max limits value in case of data.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param data.autolimitsstrategy limits strategy in case of data.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Auto
     * @param data.interpolationEdge edge values interpolation type in case of properties.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param data.interpolationType interpolation type
     * @param data.centeronzeroonnegativemin flag set to center the limits
     * @param data.symbol symbol to be used
     * @param data.nullvaluesymbol null value symbol
     * @param data.nullvaluesymbolvisible flag to change visibility of null value symbol
     * @param data.symboldecimationstep symbol decimation step or level
     * @param data.maxwraps maximum count of wraps (by default 5)
     * @param data.wrapping flag to enable wrapping based on if you want to see the clipped part of the track or not
     * @param data.clipping flag to enable clipping
     * @param data.clippinglimitsmin min clipping limits
     * @param data.clippinglimitsmax max clipping limits
     * @param data.textdecimationstep text decimation step
     * @param data.gradientlinestyle style
     * @param data.gapfillcutoff an object containing cutoff options
     * @param data.gapfillcutoff.value The cutoff value. When non zero and a matching unit is set
     * @param data.gapfillcutoff.unit unit The unit or unit symbol to use for the gap fill cutoff
     * @param data.referenceCurve reference curve
     * @param data.formatoptions format options (see {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat} for more info)
     * @param data.formatoptions.format format
     * @param data.formatoptions.maximumfractiondigits specify maximum fraction digits
     * @param data.microposleft micropos left (between 0-1)
     * @param data.microposright micropos right (between 0-1)
     * @param data.outofrangevalues outofrangevalues flag
     * @param data.horizontalflip horizontal flip
     * @param data.optimization optimization flags
     * @param data.optimization.curve curve optimization flag
     * @param data.optimization.bar bar optimization flag
     * @param data.optimization.symbol symbol optimization flag
     * @param data.optimization.value value optimization flag
     * @param autoUpdate automatic update from data. If it sets to true then curve listens on data changes from data source.
     */
    constructor(data?: LogAbstractData | object | { data?: LogAbstractData | object | { name?: string; depths?: NumericalDataSeries | NumericalDataSeriesView | number[]; values?: NumericalDataSeries | NumericalDataSeriesView | number[]; } ; autoupdate?: boolean; description?: string | null; barlinestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; scaletype?: ScaleType | string; textreference?: string; displayunit?: AbstractUnit | string; displaymode?: any[] | string; limitstype?: LimitsType; limitsmin?: number; limitsmax?: number; autolimitsstrategy?: LogCurveLimitsStrategy; interpolationEdge?: InterpolationEdge | string; interpolationType?: InterpolationType | string; centeronzeroonnegativemin?: boolean; symbol?: SymbolShape; nullvaluesymbol?: SymbolShape; nullvaluesymbolvisible?: boolean; symboldecimationstep?: number; maxwraps?: number; wrapping?: boolean; clipping?: boolean; clippinglimitsmin?: number; clippinglimitsmax?: number; textdecimationstep?: number; gradientlinestyle?: LogGradientStyle; gapfillcutoff?: object | { value?: number; unit?: AbstractUnit | string; } ; referenceCurve?: LogCurve; formatoptions?: object | { format?: string; maximumfractiondigits?: number; } ; microposleft?: number; microposright?: number; outofrangevalues?: boolean; horizontalflip?: boolean; optimization?: object | { curve?: boolean; bar?: boolean; symbol?: boolean; value?: boolean; }  | boolean; } , autoUpdate?: boolean);
    /**
     * Returns the curve description
     */
    getDescription(): string | null;
    /**
     * Sets description of the node
     * @param description The node description
     */
    setDescription(description: string | null): this;
    /**
     * Returns reference curve
     */
    getReferenceCurve(): LogCurve;
    /**
     * Set reference curve
     * @param referenceCurve reference curve
     */
    setReferenceCurve(referenceCurve: LogCurve): this;
    /**
     * Sets symbol's skip intersection ratio
     * @param symbolSkipIntersectionRatio value to set
     */
    setSymbolSkipIntersectionRatio(symbolSkipIntersectionRatio: number): this;
    /**
     * Gets symbols' skip intersection ratio
     */
    getSymbolsSkipIntersectionRatio(): number | any;
    /**
     * Sets data source to be displayed.
     * @param data data to display
     * @param data.data datasource
     * @param data.data.name curve name
     * @param data.data.depths datasource depths series/array
     * @param data.data.values datasource values series/array
     * @param data.autoupdate automatic update from datasource. If true, curve listens to data changes from source.
     * @param resetNormalizationLimits resets custom normalization limits
     *            and take it from data. By default it is true
     * @param autoUpdate automatic update from data source. If it sets to true then curve listens on data changes from data source.
     */
    setData(data?: LogAbstractData | object | { data?: LogAbstractData | object | { name?: string; depths?: DataSeries | number[]; values?: DataSeries | number[]; } ; autoupdate?: boolean; } , resetNormalizationLimits?: boolean, autoUpdate?: boolean): this;
    /**
     * Synchronize state from data
     * @param rect optional area to invalidate
     * @param args event arguments
     */
    updateFromData(rect?: Rect, args?: LogDataEvent): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns whether wrapping is enabled
     */
    isWrapping(): boolean;
    /**
     * Sets whether wrapping is enabled.
     * @example
     * ```javascript
     * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
     * // if you enable wrapping, you also need to specify ClippingLimits
     * const logCurve = new LogCurve()
     *      .setWrapping(true)
     *      .setClippingLimits(0, 100);
     * ```
     * @param wrapping wrapping on or off, based on if you want to see the clipped part of the track or not
     */
    setWrapping(wrapping: boolean): this;
    /**
     * Sets maximum count of wraps for wrap interpolation
     * @param count count of wraps
     */
    setMaxWraps(count: number): this;
    /**
     * Returns maximum count of the wraps
     */
    getMaxWraps(): number;
    /**
     * Sets normalization limits of the data values. The data limits are used by
     * default.
     * @example
     * ```javascript
     * curve.setNormalizationLimits(100, 130); // It means that each sample value that is less than 100 should have value 100, Same for 130
     * ```
     * @param minValue min value which can be specified for normalization
     * @param maxValue max value which can be specified for normalization
     * @param interpolationEdge edge values interpolation type, edge interpolation type does not change if it was not specified
     */
    setNormalizationLimits(minValue: number | Range, maxValue?: number, interpolationEdge?: InterpolationEdge | string): this;
    /**
     * Default Clipping type
     */
    static DefaultClippingType: ClippingType;
    /**
     * Sets Clipping limits of the data values. The data limits are used by
     * default.
     * @param minValue This provides a way to specify min limit for clipping.
     * @param maxValue This provides a way to specify max limit for clipping.
     * @param clippingType optional clipping type
     */
    setClippingLimits(minValue: number, maxValue: number, clippingType?: ClippingType): this;
    /**
     * Returns true if clipping is enabled
     */
    isClippingEnabled(): boolean;
    /**
     * Returns true if normalization is enabled
     */
    isNormalizationEnabled(): boolean;
    /**
     * Returns true if limits are custom
     */
    isCustomLimits(): boolean;
    /**
     * Sets auto limits strategy
     * @param strategy strategy to calculate auto limits
     */
    setAutoLimitsStrategy(strategy: LogCurveLimitsStrategy | null): this;
    /**
     * Return auto limits strategy. If it is null then default logic
     * will be used depending on limits type
     */
    getAutoLimitsStrategy(): LogCurveLimitsStrategy | null;
    /**
     * Sets neat log limits
     * @param centerOnZeroOnNegativeMin center the limits
     */
    setNeatLogLimits(centerOnZeroOnNegativeMin: boolean): this;
    /**
     * Gets the value of centerOnZeroOnNegativeMin property
     */
    getNeatLogLimits(): boolean;
    /**
     * This method resets custom normalization limits
     */
    resetNormalizationLimits(): this;
    /**
     * This method resets clipping limits
     */
    resetClippingLimits(): this;
    /**
     * Returns minimum normalization limit
     */
    getMinimumNormalizationLimit(): number;
    /**
     * Returns maximum normalization limit
     */
    getMaximumNormalizationLimit(): number;
    /**
     * Returns edge values interpolation type
     */
    getInterpolationEdge(): InterpolationEdge;
    /**
     * Set edge values interpolation type in case of properties.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param interpolationEdge edge values interpolation type
     */
    setInterpolationEdge(interpolationEdge: InterpolationEdge | string): this;
    /**
     * Returns minimum clipping limit
     */
    getMinimumClippingLimit(): number;
    /**
     * Returns maximum clipping limit
     */
    getMaximumClippingLimit(): number;
    /**
     * Returns original data value limits
     */
    getValueDataLimits(): Range;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect | any;
    /**
     * Update state
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Returns interpolation type
     * ('Linear', 'MiddleStep', 'EndStep', 'StartStep')
     */
    getInterpolationType(): InterpolationType;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Sets interpolation type
     * @param interpolationType interpolation type
     */
    setInterpolationType(interpolationType: InterpolationType | string): this;
    /**
     * Returns display mode
     * (any combination of values: 'line', 'symbol', 'value'; or an empty array)
     */
    getDisplayMode(): string[];
    /**
     * Sets display mode
     * @param t In the old version, is JSON object with settings.
     *                In the old version, an array with a combination of values: 'line', 'symbol', 'value', 'bar'; or an empty array.
     *                In the oldest version, a string: 'line', 'symbol', 'both', 'bar', 'value' or 'none'
     * @param t.line curve flag
     * @param t.symbol symbol flag
     * @param t.value value flag
     * @param t.bar bar flag
     */
    setDisplayMode(t: any[] | string | object | { line?: boolean; symbol?: boolean; value?: boolean; bar?: boolean; }  | any): this;
    /**
     * Helper method to setup line visibility
     * @param enable visibility of the line
     */
    setVisibleLine(enable: boolean): this;
    /**
     * Returns true if line is visible (convenience method)
     */
    isVisibleLine(): boolean;
    /**
     * Helper method to set up symbols visibility
     * @param enable symbols visibility on or off
     */
    setVisibleSymbol(enable: boolean): this;
    /**
     * Returns true if symbols are visible (convenience method)
     */
    isVisibleSymbol(): boolean;
    /**
     * Helper method to set up values visibility.
     * @param enable values visibility on or off
     */
    setVisibleValue(enable: boolean): this;
    /**
     * Returns true if values are visible (convenience method)
     */
    isVisibleValue(): boolean;
    /**
     * Helper method to set up value-bars visibility.
     * @param enable value-bars visibility on or off
     */
    setVisibleBar(enable: boolean): this;
    /**
     * Returns true if value-bars are visible
     */
    isVisibleBar(): boolean;
    /**
     * Helper method to set value-bars line style.
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setBarLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Helper method to get value-bars line style
     */
    getBarLineStyle(): LineStyle;
    /**
     * Helper method to set alignment of value-bars to the right
     * @param enable defines if value-bars right align is true or false
     */
    setBarsRightAligned(enable: boolean): this;
    /**
     * Returns true if value-bars right align is true
     */
    isBarsRightAligned(): boolean;
    /**
     * Converts data sample value to curve model value
     * @param v data value
     * @param d data depth
     */
    convertDataToCurveValue(v: number, d?: number): number;
    /**
     * Converts curve model value to data sample value
     * @param v curve value
     */
    convertCurveToDataValue(v: number): number;
    /**
     * Set state of rendering for out of range values
     * @param outOfRangeValues value to set
     */
    setDrawOutOfRangeValues(outOfRangeValues: boolean): this;
    /**
     * Returns true if zero is a valid value in logarithmic mode
     */
    getDrawOutOfRangeValues(): boolean;
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero and the unit is convertible to the index unit.
     * @param cutoff The cutoff value. When non zero and a matching unit is set
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoffValue(): number;
    /**
     * Set the value of the gap. Value will be used to disconnect the sample if the distance between two samples in depth or time is more than specified value
     * @param value The maximum discontinuity allowed in depth or time
     */
    setGapValue(value: number): this;
    /**
     * Returns The maximum discontinuity allowed in depth or time
     */
    getGapValue(): number;
    /**
     * Sets the unit of the cutoff used for removing NaN valued samples. Gaps will only be 'filled'
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit or unit symbol to use for the gap fill cutoff
     */
    setGapFillCutoffUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoffUnit(): AbstractUnit;
    /**
     * Set a flag how to process NaN samples in cutoff range
     * @param cutoffMode mode, by default is geotoolkit.data.DataGapFillInterpolation.CutoffMode.RemoveSample
     */
    setGapFillCutoffMode(cutoffMode: CutoffMode): this;
    /**
     * Return cutoff mode
     */
    getGapFillCutoffMode(): CutoffMode;
    /**
     * Sets the unit of the gap to show discontinuity in sample
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit
     */
    setGapUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the gap
     */
    getGapUnit(): AbstractUnit;
    /**
     * Returns true if logarithmic mode is enabled
     * @deprecated since 2020.1 (3.1), use getScaleType instead
     */
    isLogarithmicScale(): boolean;
    /**
     * Sets logarithmic mode. This applies a log on the values themselves.
     * @deprecated since 2020.1 (3.1), use setScaleType instead
     * @param enable logarithmic mode on or off.
     */
    setLogarithmicScale(enable: boolean): this;
    /**
     * Sets scale type. This applies function to data values.
     * @param type scale type
     */
    setScaleType(type: ScaleType | string): this;
    /**
     * Returns current scale type.
     */
    getScaleType(): ScaleType | string;
    /**
     * @param optimizationType optimization type
     */
    static convertOptimizationTypeValue(optimizationType: OptimizationType): DataOptimizationType;
    /**
     * Returns scaled data
     * @param fromDepth from depth
     * @param toDepth to depth
     * @param transformation transformation
     */
    getScaledData(fromDepth?: number, toDepth?: number, transformation?: Transformation): AbstractScaledData | any;
    /**
     * Returns data range
     * @param fromDepth from depth
     * @param toDepth to depth
     * @param transformation transformation
     */
    getDataRange(fromDepth: number, toDepth: number, transformation: Transformation): AbstractScaledData;
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current curve
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization for curve
     * @param needOptimize Is optimization for curve on
     */
    setOptimizationCurve(needOptimize?: boolean): this;
    /**
     * Returns curve optimization flag
     */
    getOptimizationCurve(): boolean;
    /**
     * Turns on/off optimization for bars
     * @param needOptimize Is optimization for bars on
     */
    setOptimizationBar(needOptimize?: boolean): this;
    /**
     * Returns bars optimization flag
     */
    getOptimizationBar(): boolean;
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current symbols
     */
    setSymbolOptimizationType(optimizationType: SymbolOptimizationType): this;
    /**
     * Turns on/off optimization for symbols
     * @param needOptimize Is optimization for symbols on
     */
    setOptimizationSymbol(needOptimize?: boolean): this;
    /**
     * Returns symbol optimization flag
     */
    getOptimizationSymbol(): boolean;
    /**
     * Turns on/off optimization for values
     * @param needOptimize Is optimization for values on
     */
    setOptimizationValue(needOptimize?: boolean): this;
    /**
     * Returns values optimization flag
     */
    getOptimizationValue(): boolean;
    /**
     * Set wrap line style handler. Custom colors can be set for different wrap levels, please refer to example below.
     * @example
     * ```javascript
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     * curve
     *  .setClippingLimits(60, 90)
     *  .setWrapping(true)
     *  .setMaxWraps(1)
     *  .setWrapLineStyleHandler((sender, wrapLevel) => {
     *               if (wrapLevel < 0) {
     *                   return new LineStyle('blue');
     *               }
     *               if (wrapLevel > 0) {
     *                   return new LineStyle('red');
     *               }
     *               return null;
     *           }));
     * ```
     * @param wrapLineStyleHandler handler should return {@link @int/geotoolkit/attributes/LineStyle.LineStyle}
     */
    setWrapLineStyleHandler(wrapLineStyleHandler: Function): this;
    /**
     * Returns wrap line style handler
     */
    getWrapLineStyleHandler(): Function;
    /**
     * Set log gradient style
     * @param gradientLineStyle style
     */
    setGradientLineStyle(gradientLineStyle: LogGradientStyle): this;
    /**
     * Returns log gradient style
     */
    getGradientLineStyle(): LogGradientStyle;
    /**
     * Enable / disable automatic text alignment for text values, which intersects border of the track
     * If it is enabled text is shifted inside the track. By default it is false.
     * @param enabled enable automatic text alignment
     */
    setTextAutoAlignment(enabled: boolean): this;
    /**
     * Gets status if automatic text alignment is enabled for text values which intersect border of the track
     */
    getTextAutoAlignment(): boolean;
    /**
     * Return nearest original sample index from data source by device point
     * @param pt device point to find index of the sample
     * @param maxDistance maiximum distance in pixels from the current point
     * @param transformation transfromation of curve to device.
     * If it is not specified, <code>getSceneTransform()</code> is used.
     */
    getNearestSampleIndex(pt: Point, maxDistance?: number, transformation?: Transformation): number;
    /**
     * Returns interpolated value
     * @param depth depth
     */
    getValue(depth: number): number | any;
    /**
     * Sets symbol to be used to render markers for null value
     * @param symbol symbol used at the start and end of the gap(null value)
     */
    setNullValueSymbol(symbol: SymbolShape): this;
    /**
     * Returns symbol to be used to draw markers for null value
     */
    getNullValueSymbol(): SymbolShape;
    /**
     * Returns true if symbol to be used to draw markers for null value is visible
     */
    isVisibleNullValueSymbol(): boolean;
    /**
     * Display or hide null values symbols
     * @param visible visible null value symbols
     */
    setVisibleNullValueSymbol(visible: boolean): this;
    /**
     * Sets symbol to be used to render markers
     * @param symbol symbols to be used for markers
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Returns symbol to be used to draw markers
     */
    getSymbol(): SymbolShape;
    /**
     * Sets symbol decimation step
     * @param step range to skip the symbols
     */
    setSymbolDecimationStep(step: number): this;
    /**
     * Returns symbols gap
     */
    getSymbolsGap(): Dimension;
    /**
     * Returns symbol decimation step
     */
    getSymbolDecimationStep(): number;
    /**
     * Returns display unit
     */
    getDisplayUnit(): AbstractUnit;
    /**
     * Sets display unit
     * @param unit display unit like feet, meters etc
     */
    setDisplayUnit(unit: AbstractUnit | string): this;
    /**
     * Returns limits type
     */
    getLimitsType(): LimitsType | number;
    /**
     * Sets text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Gets text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text anchor type
     * @param anchorType position to place the anchor
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
     * Return symbol formatter
     */
    getSymbolFormatter(): symbolFormatterCallback;
    /**
     * Set symbol formatter
     * @example
     * ```javascript
     * curve.setSymbolFormatter(function (symbol, sample) {
     *      symbol.setPainter(sample.getOriginalValue() > 70 ? geotoolkit.scene.shapes.painters.CirclePainter : geotoolkit.scene.shapes.painters.DiamondPainter);
     *      if (sample.getOriginalValue() < 60) {
     *          symbol.getFillStyle().setColor('red');
     *      } else if (sample.getOriginalValue() > 80) {
     *          symbol.getFillStyle().setColor('green');
     *      } else {
     *          symbol.getFillStyle().setColor('blue');
     *      }
     *      return symbol;
     * });
     * ```
     * @param symbolFormatter formatter to be used to adjust symbol
     */
    setSymbolFormatter(symbolFormatter: symbolFormatterCallback): this;
    /**
     * Sets text formatter to be used to convert values to texts
     * @deprecated since 2021.2 (3.3), use setValueFormat instead
     * @param textFormatter formatter to be used to convert values to texts
     */
    setTextFormatter(textFormatter: Function): this;
    /**
     * Returns text formatter to be used to convert values to texts
     * @deprecated since 2021.2 (3.3), use getValueFormat instead
     */
    getTextFormatter(): Function;
    /**
     * Sets text reference.
     * Accepted values: 'curve', 'track' or 'sample'.
     * @param textReference sets textreference 'curve', 'track' or 'sample'.
     */
    setTextReference(textReference: string): this;
    /**
     * Gets sample's text reference type: 'track' or 'sample'
     */
    getTextReference(): string;
    /**
     * Sets text decimation step
     * @param step range to skip while decimating
     */
    setTextDecimationStep(step: number): this;
    /**
     * Returns text decimation step
     */
    getTextDecimationStep(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {description: string | null; barlinestyle: LineStyle; textstyle: TextStyle; scaletype: ScaleType; textreference: string; displayunit: AbstractUnit; displaymode: any[] | string; limitstype: LimitsType; limitsmin: number; limitsmax: number; autolimitsstrategy: LogCurveLimitsStrategy; interpolationedge: InterpolationEdge; interpolationtype: InterpolationType; centeronzeroonnegativemin: boolean; symbol: SymbolShape; nullvaluesymbol: SymbolShape; nullvaluesymbolvisible: boolean; symboldecimationstep: number; maxwraps: number; wrapping: boolean; clipping: boolean; clippinglimitsmin: number; clippinglimitsmax: number; textdecimationstep: number; gradientlinestyle: LogGradientStyle; gapfillcutoff: {value: number; unit: AbstractUnit}; referenceCurve: LogCurve; formatoptions: {format: string; maximumfractiondigits: number}; microposleft: number; microposright: number; outofrangevalues: boolean; horizontalflip: boolean; optimization: {curve: boolean; bar: boolean; symbol: boolean; value: boolean}; autoupdate: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data datasource
     * @param properties.data.name curve name
     * @param properties.data.depths datasource depths series/array
     * @param properties.data.values datasource values series/array
     * @param properties.autoupdate automatic update from datasource. If true, curve listens to data changes from source
     * @param properties.description The node description
     * @param properties.barlinestyle value-bar line style
     * @param properties.textstyle text style
     * @param properties.scaletype values scale type
     * @param properties.textreference type of the text to be put on the track
     * @param properties.displayunit display unit
     * @param properties.displaymode display mode like 'line' , 'symbol'
     * @param properties.limitstype limits type
     * @param properties.limitsmin min limits value in case of properties.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param properties.limitsmax max limits value in case of properties.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param properties.autolimitsstrategy limits strategy
     * @param properties.interpolationEdge edge values interpolation type in case of properties.limitstype==geotoolkit.welllog.LogCurve.LimitsType.Manual
     * @param properties.interpolationType interpolation type
     * @param properties.centeronzeroonnegativemin flag set to center the limits
     * @param properties.symbol symbol to be used
     * @param properties.nullvaluesymbol null value symbol
     * @param properties.nullvaluesymbolvisible flag to change visibility of null value symbol
     * @param properties.symboldecimationstep symbol decimation step or level
     * @param properties.maxwraps maximum count of wraps (by default 5)
     * @param properties.wrapping flag to enable wrapping based on if you want to see the clipped part of the track or not
     * @param properties.clipping flag to enable clipping
     * @param properties.clippinglimitsmin min clipping limits
     * @param properties.clippinglimitsmax max clipping limits
     * @param properties.textdecimationstep text decimation step
     * @param properties.gradientlinestyle style
     * @param properties.gapfillcutoff an object containing cutoff options
     * @param properties.gapfillcutoff.value The cutoff value. When non zero and a matching unit is set
     * @param properties.gapfillcutoff.unit unit The unit or unit symbol to use for the gap fill cutoff
     * @param properties.referenceCurve reference curve
     * @param properties.formatoptions format options (see {@link @int/geotoolkit/util/DecimalFormat.DecimalFormat} for more info)
     * @param properties.formatoptions.format format
     * @param properties.formatoptions.maximumfractiondigits specify maximum fraction digits
     * @param properties.microposleft micropos left (between 0-1)
     * @param properties.microposright micropos right (between 0-1)
     * @param properties.outofrangevalues outofrangevalues flag
     * @param properties.horizontalflip horizontal flip
     * @param properties.optimization optimization flags
     * @param properties.optimization.curve curve optimization flag
     * @param properties.optimization.bar bar optimization flag
     * @param properties.optimization.symbol symbol optimization flag
     * @param properties.optimization.value value optimization flag
     */
    setProperties(properties?: object | { data?: LogAbstractData | object | { name?: string; depths?: NumericalDataSeries | NumericalDataSeriesView | number[]; values?: NumericalDataSeries | NumericalDataSeriesView | number[]; } ; autoupdate?: boolean; description?: string | null; barlinestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; scaletype?: ScaleType | string; textreference?: string; displayunit?: AbstractUnit | string; displaymode?: any[] | string; limitstype?: LimitsType; limitsmin?: number; limitsmax?: number; autolimitsstrategy?: LogCurveLimitsStrategy; interpolationEdge?: InterpolationEdge | string; interpolationType?: InterpolationType | string; centeronzeroonnegativemin?: boolean; symbol?: SymbolShape; nullvaluesymbol?: SymbolShape; nullvaluesymbolvisible?: boolean; symboldecimationstep?: number; maxwraps?: number; wrapping?: boolean; clipping?: boolean; clippinglimitsmin?: number; clippinglimitsmax?: number; textdecimationstep?: number; gradientlinestyle?: LogGradientStyle; gapfillcutoff?: object | { value?: number; unit?: AbstractUnit | string; } ; referenceCurve?: LogCurve; formatoptions?: object | { format?: string; maximumfractiondigits?: number; } ; microposleft?: number; microposright?: number; outofrangevalues?: boolean; horizontalflip?: boolean; optimization?: object | { curve?: boolean; bar?: boolean; symbol?: boolean; value?: boolean; }  | boolean; } ): this;
    /**
     * Hit test symbols of the curve in the device coordinates
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): number[];
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
 * Enum of rendering optimization types
 */
export enum SymbolOptimizationType {
    /**
     * The same optimization as for curve
     */
    SameAsCurve = 0,
    /**
     * Symbols bbox intersection optimization
     */
    Intersection = 1
}
/**
 * Enum of curve limits type
 */
export enum LimitsType {
    /**
     * Auto limits
     */
    Auto = 0,
    /**
     * Neat limits
     */
    Neat = 1,
    /**
     * Manual limits
     */
    Manual = 2
}
/**
 * Enum of step interpolation type
 */
export enum ClippingType {
    /**
     * None
     */
    None = 'None',
    /**
     * Software
     */
    Software = 'Software',
    /**
     * Hardware
     */
    Hardware = 'Hardware'
}
