import {LogPointSet} from './LogPointSet';
import {LogAbstractData} from './data/LogAbstractData';
import {AbstractUnit} from '../util/AbstractUnit';
import {FillStyle} from '../attributes/FillStyle';
import {Range} from '../util/Range';
import {ScaleType} from './data/ScaleType';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {Rect} from '../util/Rect';

/**
 * Creates a LogBar visual. Data is passed in an LogData.
 */
export class LogBarVisual extends LogPointSet {
    /**
     * Creates a LogBar visual. Data is passed in an LogData.
     * @param options The log bar visual options object.
     * @param options.data data source to be displayed
     * @param options.autoupdate Whether to automatically update from data
     * @param options.barspacing The amount of space between adjacent bars
     * @param options.barwidth The width of each bar
     * @param options.unit The type of unit for bar width and bar spacing.
     * @param options.fillstyle The fill style.
     * @param options.enableautolimits Whether the limits should be automatically calculated
     * @param options.limits The value limits that should be used if autoLimits is disabled
     * @param options.scaletype values scale type
     */
    constructor(options?: object | { data?: LogAbstractData; autoupdate?: boolean; barspacing?: number; barwidth?: number | number[]; unit?: AbstractUnit; fillstyle?: FillStyle | string | object; enableautolimits?: boolean; limits?: Range; scaletype?: ScaleType | string; } );
    /**
     * Gets the flag which indicates whether auto value limits are enabled.
     */
    getEnableAutoLimits(): boolean;
    /**
     * Sets the flag which indicates whether auto value limits are enabled.
     * @param enableAutoLimits The autoLimits flag.
     */
    setEnableAutoLimits(enableAutoLimits: boolean): this;
    /**
     * Gets the value limits
     */
    getLimits(): Range;
    /**
     * Sets the manual value limits
     * @param limits The value limits.
     */
    setLimits(limits: Range): this;
    /**
     * Sets data source to be displayed.
     * @param data data to display
     * @param autoUpdate automatic update from data source
     */
    setData(data: LogAbstractData | LogAbstractData[], autoUpdate?: boolean): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns true if logarithmic mode is enabled
     * @deprecated since 2020.1 (3.1), use getScaleType instead
     */
    isLogarithmicScale(): boolean;
    /**
     * Sets logarithmic mode
     * @deprecated since 2020.1 (3.1), use setScaleType instead
     * @param enable defines state of logarithmic mode
     */
    setLogarithmicScale(enable: boolean): this;
    /**
     * Returns reference bar
     */
    getReferenceBar(): LogBarVisual;
    /**
     * Set reference bar
     * @param referenceBar reference bar
     */
    setReferenceBar(referenceBar: LogBarVisual): this;
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
     * Sets reverse mode state
     * @param reverse reverse flag
     */
    setReverse(reverse: boolean): this;
    /**
     * Gets reverse mode state
     */
    getReverse(): boolean;
    /**
     * Sets the amount of space between adjacent bars.
     * @param barSpacing The amount of space between adjacent bars.
     */
    setBarSpacing(barSpacing: number): this;
    /**
     * Gets the amount of space between adjacent bars.
     */
    getBarSpacing(): number;
    /**
     * Sets the width of each bar
     * @param barWidth The width of each bar
     */
    setBarWidth(barWidth: number | number[]): this;
    /**
     * Gets the width of each bar.
     */
    getBarWidth(): number | number[];
    /**
     * Sets the depth unit
     * @param unit The type of unit for bar width and bar spacing.
     */
    setUnit(unit: AbstractUnit): this;
    /**
     * Gets the depth unit
     */
    getUnit(): AbstractUnit;
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
     * Returns original data value limits
     */
    getValueDataLimits(): Range;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Update state
     * @param regions optional array to return invalid rectangles
     */
    updateState(regions?: Rect[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {autoupdate: boolean; barspacing: number; barwidth: number | number[]; unit: AbstractUnit; fillstyle: FillStyle; enableautolimits: boolean; limits: Range; scaletype: ScaleType | string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data data source to be displayed
     * @param properties.autoupdate Flag that determines whether to automatically update from data.
     * @param properties.barspacing The amount of space between adjacent bars.
     * @param properties.barwidth The width of each bar
     * @param properties.unit The type of unit for bar width and bar spacing.
     * @param properties.fillstyle fill style
     * @param properties.enableautolimits The autoLimits flag.
     * @param properties.limits The value limits.
     * @param properties.scaletype values scale type
     */
    setProperties(properties: object | { data?: LogAbstractData; autoupdate?: boolean; barspacing?: number; barwidth?: number | number[]; unit?: AbstractUnit; fillstyle?: FillStyle | string | object; enableautolimits?: boolean; limits?: Range; scaletype?: ScaleType | string; } ): this;
}
