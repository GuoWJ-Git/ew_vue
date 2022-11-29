import {LogPointSet} from './LogPointSet';
import {LogAbstractData} from './data/LogAbstractData';
import {NumericalDataSeries} from '../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../data/NumericalDataSeriesView';
import {DataSeries} from '../data/DataSeries';
import {DataSeriesView} from '../data/DataSeriesView';
import {ScaleType} from './data/ScaleType';
import {FillStyle} from '../attributes/FillStyle';
import {DiscreteDataMap} from '../data/DiscreteDataMap';
import {LineStyle} from '../attributes/LineStyle';
import {Range} from '../util/Range';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {Rect} from '../util/Rect';

/**
 * Define a cut off visual to support continues and discrete mode.
 */
export class LogCutoffVisual extends LogPointSet {
    /**
     * Define a cut off visual to support continues and discrete mode.
     * @param data The cut off visual options
     * @param data.data data source to be displayed
     * @param data.data.name datasource name
     * @param data.data.depths datasource depths series/array
     * @param data.data.values datasource values series/array
     * @param data.autoupdate Whether to automatically update from data
     * @param data.scaletype values scale type
     * @param data.horizontalflip horizontal flip
     * @param data.cutoffmode values cutoff mode
     * @param data.displaymode values display mode
     * @param data.stepmode values step display mode
     * @param data.fillstyle The fill style.
     * @param data.cutoff cutOff value
     * @param data.cutoff.codes cutOff codes
     * @param data.cutoff.ranges cutOff ranges
     * @param data.cutoff.fillstyles fill styles
     * @param data.cutoff.linestyles line styles
     * @param autoUpdate automatic update from data
     */
    constructor(data?: LogAbstractData | object | { data?: LogAbstractData | object | { name?: string; depths?: NumericalDataSeries | NumericalDataSeriesView | number[]; values?: DataSeries | DataSeriesView | number[] | string[]; } ; autoupdate?: boolean; scaletype?: ScaleType | string; horizontalflip?: boolean; cutoffmode?: CutoffMode | string; displaymode?: DisplayMode | string; stepmode?: StepMode | string; fillstyle?: FillStyle | string | object; cutoff?: object | { codes?: number[] | null; ranges?: number | number[] | number[][]; fillstyles?: FillStyle | FillStyle[] | DiscreteDataMap; linestyles?: LineStyle | LineStyle[] | DiscreteDataMap; }  | null; } , autoUpdate?: boolean);
    /**
     * Returns minimum normalization limit
     */
    getMinimumNormalizationLimit(): number;
    /**
     * Returns maximum normalization limit
     */
    getMaximumNormalizationLimit(): number;
    /**
     * Sets normalization limits of the data values. The data limits are used by default.
     * @example
     * ```javascript
     * cutOffVisual.setNormalizationLimits(100, 200); // It means that each sample value that is less than 100 should have value 100, Same for 200
     * ```
     * @example
     * ```javascript
     * cutOffVisual.setNormalizationLimits(200, 100); // same but orientation is reversed
     * ```
     * @param minValue min value which can be specified for normalization
     * @param maxValue max value which can be specified for normalization
     */
    setNormalizationLimits(minValue: number | Range, maxValue?: number): this;
    /**
     * This method resets custom normalization limits
     */
    resetNormalizationLimits(): this;
    /**
     * Sets data source to be displayed.
     * @param data data to display
     * @param data.name curve name
     * @param data.depths datasource depths series/array
     * @param data.values datasource values series/array, strings array is designated to use with categories mode only
     * @param resetNormalizationLimits resets custom normalization limits
     * @param autoUpdate automatic update from data source
     */
    setData(data: LogAbstractData | object | { name?: string; depths?: NumericalDataSeries | NumericalDataSeriesView | number[]; values?: DataSeries | DataSeriesView | number[] | string[]; } , resetNormalizationLimits?: boolean, autoUpdate?: boolean): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
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
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Sets values cutoff mode.
     * @param cutoffMode values cutoff mode
     */
    setCutoffMode(cutoffMode: CutoffMode | string): this;
    /**
     * Returns current cutoff mode.
     */
    getCutoffMode(): CutoffMode;
    /**
     * Sets values display mode.
     * @param displayMode values display mode
     */
    setDisplayMode(displayMode: DisplayMode | string): this;
    /**
     * Returns current display mode.
     */
    getDisplayMode(): DisplayMode;
    /**
     * Returns limits type
     */
    getLimitsType(): LimitsType;
    /**
     * Sets values step display mode.
     * @param stepMode values step display mode
     */
    setStepMode(stepMode: StepMode | string): this;
    /**
     * Returns current display mode.
     */
    getStepMode(): StepMode;
    /**
     * Set  cut off settings
     * @param cutOff cut off settings
     * @param cutOff.names cutOff names
     * @param cutOff.codes cutOff codes
     * @param cutOff.casesensitive cutOff casesensitive flag, default is not false
     * @param cutOff.ranges cutOff ranges
     * @param cutOff.fillstyles fill styles
     * @param cutOff.linestyles line styles
     */
    setCutOff(cutOff: object | { names?: string[]; codes?: number[] | null; casesensitive?: boolean | null; ranges?: number | number[] | number[][]; fillstyles?: FillStyle | FillStyle[] | DiscreteDataMap; linestyles?: LineStyle | LineStyle[] | DiscreteDataMap; }  | null): this;
    /**
     * Return cut off settings
     */
    getCutOff(): {names: string[]; codes: number[] | null; casesensitive: boolean | null; ranges: number | number[] | number[][]; fillstyles: FillStyle | FillStyle[] | DiscreteDataMap; linestyles: LineStyle | LineStyle[] | DiscreteDataMap} | object;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | string | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; } , merge?: boolean): this;
    /**
     * Gets the fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Gets the auto update flag
     */
    getAutoUpdate(): boolean;
    /**
     * Sets the auto update flag
     * @param autoUpdate Flag that determines whether to automatically update from data.
     */
    setAutoUpdate(autoUpdate: boolean): this;
    /**
     * Synchronize state from data
     * @param rect optional area to invalidate track
     */
    updateFromData(rect?: Rect): this;
    /**
     * Returns meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {autoupdate: boolean; scaletype: ScaleType; limitstype: LimitsType; limitsmin: number; limitsmax: number; horizontalflip: boolean; cutoffmode: CutoffMode; displaymode: DisplayMode; stepmode: StepMode; fillstyle: FillStyle; cutoff: {names: string[]; codes: number[] | null; casesensitive: number[] | null; ranges: number | number[] | number[][]; fillstyles: FillStyle | FillStyle[] | DiscreteDataMap; linestyles: LineStyle | LineStyle[] | DiscreteDataMap}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data data source to be displayed
     * @param properties.autoupdate Flag that determines whether to automatically update from data.
     * @param properties.scaletype values scale type
     * @param properties.limitstype limits type
     * @param properties.limitsmin min limits value in case of properties.limitstype==geotoolkit.welllog.LogCutoffVisual.LimitsType.Manual
     * @param properties.limitsmax max limits value in case of properties.limitstype==geotoolkit.welllog.LogCutoffVisual.LimitsType.Manual
     * @param properties.horizontalflip horizontal flip
     * @param properties.cutoffmode values cutoff mode
     * @param properties.displaymode values display mode
     * @param properties.stepmode values step display mode
     * @param properties.fillstyle fill style
     * @param properties.cutoff cutOff value
     * @param properties.cutoff.names cutOff names
     * @param properties.cutoff.codes cutOff codes
     * @param properties.cutoff.casesensitive cutOff casesensitive flag
     * @param properties.cutoff.ranges cutOff ranges
     * @param properties.cutoff.fillstyles fill styles
     * @param properties.cutoff.linestyles line styles
     */
    setProperties(properties: object | { data?: LogAbstractData; autoupdate?: boolean; scaletype?: ScaleType | string; limitstype?: LimitsType; limitsmin?: number; limitsmax?: number; horizontalflip?: boolean; cutoffmode?: CutoffMode | string; displaymode?: DisplayMode | string; stepmode?: StepMode | string; fillstyle?: FillStyle | string | object; cutoff?: object | { names?: string[]; codes?: number[] | null; casesensitive?: boolean | null; ranges?: number | number[] | number[][]; fillstyles?: FillStyle | FillStyle[] | DiscreteDataMap; linestyles?: LineStyle | LineStyle[] | DiscreteDataMap; }  | null; } ): this;
}
/**
 * LogCutoffVisual CuttingsMode
 */
export enum CutoffMode {
    /**
     * Continuous mode.
     */
    Continuous = 'continuous',
    /**
     * Discrete mode.
     */
    Discrete = 'discrete'
}
/**
 * LogCutoffVisual DisplayMode
 */
export enum DisplayMode {
    /**
     * Value mode.
     */
    Value = 'value',
    /**
     * Categorized mode.
     */
    Categorized = 'categorized'
}
/**
 * Enum of step mode
 */
export enum StepMode {
    /**
     * End
     */
    EndStep = 'endstep',
    /**
     * Start
     */
    StartStep = 'startstep'
}
/**
 * Enum of cutoff limits type
 */
export enum LimitsType {
    /**
     * Auto limits
     */
    Auto = 'auto',
    /**
     * Manual limits
     */
    Manual = 'manual'
}
