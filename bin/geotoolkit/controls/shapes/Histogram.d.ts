import {Shape} from '../../scene/shapes/Shape';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../../data/NumericalDataSeriesView';
import {Rect} from '../../util/Rect';
import {FillStyle} from '../../attributes/FillStyle';
import {Unit} from '../../util/Unit';
import {Orientation} from '../../util/Orientation';
import {Point} from '../../util/Point';
import {Range} from '../../util/Range';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Transformation} from '../../util/Transformation';
import {RgbaColor} from '../../util/RgbaColor';
import {Pattern} from '../../attributes/Pattern';

/**
 * Create a advanced histogram shape, which is a graphical display of tabulated frequencies, shown as bars.<br>
 * The histogram can be customized using the options like 'bin spacing','Frequency Type', 'colors' etc. Refer to options below for more details.
 */
export class Histogram extends Shape {
    /**
     * Create a advanced histogram shape, which is a graphical display of tabulated frequencies, shown as bars.<br>
     * The histogram can be customized using the options like 'bin spacing','Frequency Type', 'colors' etc. Refer to options below for more details.
     * @param options JSON object
     * @param options.data data array
     * @param options.bounds bounds of the node
     * @param options.bins number of bins this histogram has
     * @param options.frequencytype frequency type
     * @param options.accumulatedmode accumulated mode
     * @param options.histogrammode histogram mode
     * @param options.autogradient auto gradient inside the bin to give a 3D look
     * @param options.binspacing bin spacing in percentage
     * @param options.verticalscale vertical scale in percentage
     * @param options.logstartvalue log start value
     * @param options.highlightstyle highlight style
     * @param options.highvalueinclusive highvalueinclusive
     * @param options.minvalue Lowest value to display
     * @param options.maxvalue Highest value to display
     * @param options.neatlimitsx set if apply neat limits for x axis
     * @param options.neatlimitsy set if apply neat limits for y axis
     * @param options.unit represent the {string} name, {string} symbol or {geotoolkit.util.Unit} unit to be created
     * @param options.flipedx set the flag if swap the min and max of X values
     * @param options.orientation orientation
     * @param bounds bounds of the node
     * @param bins number of bins this histogram has
     */
    constructor(options: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; bounds?: Rect; bins?: number; frequencytype?: FrequencyType; accumulatedmode?: AccumulatedMode; histogrammode?: HistogramMode; autogradient?: boolean; binspacing?: number; verticalscale?: number; logstartvalue?: number; highlightstyle?: FillStyle | string | any; highvalueinclusive?: boolean; minvalue?: number; maxvalue?: number; neatlimitsx?: boolean; neatlimitsy?: boolean; unit?: string | Unit; flipedx?: boolean; orientation?: Orientation; } , bounds?: Rect, bins?: number);
    /**
     * Set the data to be plotted in the histogram, optionally with min and max values.
     * @param values Data to be charted in histogram or options for histogram (for compatibility)
     * @param minValue Lowest value to display
     * @param maxValue Highest value to display
     */
    setData(values: number[] | NumericalDataSeries | NumericalDataSeriesView | object, minValue?: number, maxValue?: number): this;
    /**
     * get raw data
     */
    getData(): {data: number[]; minvalue: number; maxvalue: number} | object;
    /**
     * set shape properties
     * @param properties JSON object
     * @param properties.data data array
     * @param properties.bounds bounds of the node
     * @param properties.bins number of bins this histogram has
     * @param properties.frequencytype frequency type
     * @param properties.accumulatedmode accumulated mode
     * @param properties.histogrammode histogram mode
     * @param properties.autogradient auto gradient inside the bin to give a 3D look
     * @param properties.binspacing bin spacing in percentage
     * @param properties.verticalscale vertical scale in percentage
     * @param properties.logstartvalue log start value
     * @param properties.highlightstyle highlight style
     * @param properties.highvalueinclusive highvalueinclusive
     * @param properties.minvalue Lowest value to display
     * @param properties.maxvalue Highest value to display
     * @param properties.neatlimitsx set if apply neat limits for x axis
     * @param properties.neatlimitsy set if apply neat limits for y axis
     * @param properties.unit represent the {string} name, {string} symbol or {geotoolkit.util.Unit} unit to be created
     * @param properties.flipedx set the flag if swap the min and max of X values
     * @param properties.orientation orientation
     */
    setProperties(properties: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; bounds?: Rect; bins?: number; frequencytype?: FrequencyType; accumulatedmode?: AccumulatedMode; histogrammode?: HistogramMode; autogradient?: boolean; binspacing?: number; verticalscale?: number; logstartvalue?: number; highlightstyle?: FillStyle | string | any; highvalueinclusive?: boolean; minvalue?: number; maxvalue?: number; neatlimitsx?: boolean; neatlimitsy?: boolean; unit?: string | Unit; flipedx?: boolean; orientation?: Orientation; } ): this;
    /**
     * set options
     * @param options JSON object see {@link @int/geotoolkit/controls/shapes/Histogram.Histogram#setProperties}
     */
    setOptions(options: any): this;
    /**
     * set neat limits for x axis
     * @param neatlimits set if apply neat limits for x axis
     */
    setNeatLimitsX(neatlimits: boolean): this;
    /**
     * set neat limits for y axis
     * @param neatlimits set if apply neat limits for y axis
     */
    setNeatLimitsY(neatlimits: boolean): this;
    /**
     * Returns shape properties
     */
    getProperties(): {bounds: Rect; bins: number; frequencytype: FrequencyType; accumulatedmode: AccumulatedMode; histogrammode: HistogramMode; autogradient: boolean; binspacing: number; verticalscale: number; logstartvalue: number; highlightstyle: FillStyle; highvalueinclusive: boolean; minvalue: number; maxvalue: number; neatlimitsx: boolean; neatlimitsy: boolean; unit: Unit; flipedx: boolean; orientation: Orientation} | any;
    /**
     * get histogram options see
     */
    getOptions(): any;
    /**
     * set desired unit for data source, the finally display unit could be not the desired one due to failling of unit coversion
     * @param unit represent the {string} name, {string} symbol or {geotoolkit.util.Unit} unit to be created
     */
    setUnit(unit: string | Unit): this;
    /**
     * Return histogram data source
     */
    getDataSource(): number[] | NumericalDataSeries | NumericalDataSeriesView | any;
    /**
     */
    dispose(): void;
    /**
     * set orientation
     * @param orientation orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * get orientation
     */
    getOrientation(): Orientation;
    /**
     * get displayed unit
     */
    getDisplayUnit(): Unit;
    /**
     * Resets the highest and lowest values to be computed values
     */
    resetValues(): void;
    /**
     * Set the highest and lowest values to be displayed in this histogram
     * @param minValue lowest value to be displayed
     * @param maxValue highest value to be displayed
     */
    setValueRange(minValue: number, maxValue: number): this;
    /**
     * Resets the highest and lowest values to be computed values
     */
    areValuesCustomized(): boolean;
    /**
     * Get lowest value to be displayed
     */
    getMinValue(): number;
    /**
     * Get highest value to be displayed
     */
    getMaxValue(): number;
    /**
     * Returns calculated statistics of values
     * see description {@link @int/geotoolkit/controls/shapes/Histogram.Histogram.getStatisticsDescription}
     * @example
     * ```javascript
     * - Data samples count
     * - min sample value
     * - max sample value
     * - average value
     * - variance value
     * - average deviation value
     * - standard deviation value
     * - skewness value
     * - standard kurtosis value
     * - Theoretical P10 value (centile)
     * - Theoretical P50 value (centile)
     * - Theoretical P90 value (centile)
     * ```
     */
    getStatistics(): number[];
    /**
     * Descriptions of statistics
     * @example
     * ```javascript
     * return ["Sample Count", "Min", "Max", "Average", "Variance", "Avg. Deviation", "Std. Deviation", "Skewness", "Kurtosis", "P10", "P50", "P90"]
     * ```
     */
    getStatisticsDescription(): string[];
    /**
     * Maximum frequency
     */
    getMaxFrequency(): number;
    /**
     * Gets the frequency for the current index
     * @param index current index
     * @param ignoreMode ignore mode on or not
     */
    getFrequency(index: number, ignoreMode?: boolean): number;
    /**
     * Calculate distribution with normalization
     * @param keepModelLimits set if keep model limits unchanged
     */
    calculate(keepModelLimits?: boolean): this;
    /**
     * Gets the values of the bins in the following array format
     * Array [{ 'minvalue' : number, 'maxvalue' : number, 'binnumber' : number, 'frequency' : number }, ...]
     */
    getBins(): object[];
    /**
     * Determines if type of gap a value is located on.
     * @param x The x-value that is checked
     */
    getGapTypeForValue(x: number): GapType | number;
    /**
     * Gets the bin at the input x value
     * @param x input x value
     * @param excludeGaps True if gaps between bins should be excluded
     */
    getBinAt(x: number, excludeGaps?: boolean): {minvalue: number; maxvalue: number; binnumber: number; frequency: number} | object;
    /**
     * Gets indices by bin number
     * @param index index
     */
    getIndicesByBin(index: number): any[] | null;
    /**
     * Returns bin numbers for specified indices
     * @param indices of indices
     */
    getBinsByIndices(indices: number[]): number[];
    /**
     * get hit bins
     * @param hitArea selected area or point
     * @param bins the bins in certain range along x axis
     */
    hitTest(hitArea: Rect | Point, bins?: number[]): number[];
    /**
     * Gets the bin at the input x value
     * @param x input x value
     */
    getBinsAt(x: Point | Range | Rect): object[];
    /**
     * Highlight Bins
     * @param bins indices
     * @param reset previous selection
     */
    highlightBins(bins: number[], reset: boolean): void;
    /**
     * get highlighted bins
     */
    getHighlightedBins(): number[];
    /**
     * Updates the model limits
     */
    updateModelLimits(): void;
    /**
     * Sets bin count.
     * @param binCount a count of the bins
     */
    setBinCount(binCount: number): this;
    /**
     * Sets bin count using a step value
     * @param binStep a count of the binsthis._binCount
     */
    setBinSteps(binStep: number): this;
    /**
     * Resets the bin count to use _autoBinCount
     */
    resetBinCount(): void;
    /**
     * Returns _autoBinCount
     */
    isAutoBinCount(): boolean;
    /**
     * Calculates the automatic amount of bins
     * @param force force calculation of bins count
     */
    updateBinCount(force?: boolean): this;
    /**
     * Return bin count
     */
    getBinCount(): number;
    /**
     * sets if the high value is inclusive
     * @param inclusive high value is inclusive or not
     */
    setHighValueInclusive(inclusive: boolean): this;
    /**
     * gets if the high value is inclusive
     */
    getHighValueInclusive(): boolean;
    /**
     * Gets model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns current bounds
     */
    getBounds(): Rect;
    /**
     * Check collision
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Retrieves the world transformation of the spatial.
     */
    getContentsTransform(): Transformation;
    /**
     * Computers the statics based on the new data
     */
    computeStatistics(): void;
    /**
     * Sets _autoGradient
     * @param isAutoGradient Autogradient on or off
     */
    setAutoGradient(isAutoGradient: boolean): this;
    /**
     * Gets percentage of fill
     */
    getBinSpacing(): number;
    /**
     * Sets percentage of fill
     * Everything lower than 50 is set to 50
     * Everything higher than 100 is set to 100
     * All values in between are saved as is
     * @param percentage percentage of fill
     */
    setBinSpacing(percentage: number): this;
    /**
     * Sets bars vertical scale
     * @param percentage percentage of fill
     */
    setVerticalScaling(percentage: number): this;
    /**
     * Gets vertical scale
     */
    getVerticalScaling(): number;
    /**
     * Gets if we are auto gradient
     */
    getAutoGradient(): boolean;
    /**
     * Sets frequency type
     * @param frequencyType enum of FrequencyType
     */
    setFrequencyType(frequencyType: FrequencyType | string): this;
    /**
     * Gets frequency type
     */
    getFrequencyType(): FrequencyType;
    /**
     * Sets accumulated mode
     * @param accumulatedMode enum of AccumulatedMode (Disabled or Enabled)
     */
    setAccumulatedMode(accumulatedMode: AccumulatedMode | string): this;
    /**
     * Gets accumulated mode
     */
    getAccumulatedMode(): AccumulatedMode;
    /**
     * Sets histogram mode
     * @param histogramMode enum of HistogramMode (Linear or Logarithmic)
     */
    setHistogramMode(histogramMode: HistogramMode | string): this;
    /**
     * Gets the histogram mode
     */
    getHistogramMode(): HistogramMode;
    /**
     * Gets log start value
     */
    getStartValue(): number;
    /**
     * Sets highlight style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     */
    setHighlightStyle(fillStyle: FillStyle | string | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; } ): this;
    /**
     * Gets highlight style
     */
    getHighlightStyle(): FillStyle;
    /**
     * Sets log start value
     * @param logStartValue log start value
     */
    setLogStartValue(logStartValue: number): this;
}
/**
 * Histogram's Events enumerator
 */
export enum Events {
    /**
     * Event type fired when this shapes data has been updated, kept for compatiable purpose
     */
    DataUpdated = 'dataUpdated',
    /**
     * Event type fired when model limits has been updated.
     */
    ModelLimitsUpdated = 'modelLimitsUpdated',
    /**
     * set or get new calculated bin count
     */
    BinsUpdated = 'binsUpdated'
}
/**
 * GapType
 */
export enum GapType {
    /**
     * No Gap
     */
    None = 0,
    /**
     * Left Gap
     */
    Left = 1,
    /**
     * Right Gap
     */
    Right = 2
}
/**
 * FrequencyType
 */
export enum FrequencyType {
    /**
     * Represents the total number of observations within a given interval or frequency bin. Sum of the absolute frequencies is equal to the total number of data.
     */
    Absolute = 'absolute',
    /**
     * Height of the histogram bar represents the proportion of the data in each class.
     */
    Normalized = 'normalized',
    /**
     * Histogram vertical axis uses relative or proportional frequency instead of simple frequency. It then shows the proportion of cases that fall into each of several categories
     */
    Relative = 'relative'
}
/**
 * AccumulatedMode
 */
export enum AccumulatedMode {
    /**
     * Disabled
     */
    Disabled = 'disabled',
    /**
     * Enabled
     */
    Enabled = 'enabled'
}
/**
 * HistogramMode
 */
export enum HistogramMode {
    /**
     * Linear
     */
    Linear = 'linear',
    /**
     * Logarithmic
     */
    Logarithmic = 'logarithmic'
}
