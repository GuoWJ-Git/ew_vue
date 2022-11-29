import {LogAbstractVisual} from './LogAbstractVisual';
import {LogAbstractData} from './data/LogAbstractData';
import {InterpolationType} from '../data/DataStepInterpolation';
import {Rect} from '../util/Rect';
import {StateChanges} from '../scene/Node';
import {Point} from '../util/Point';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {SymbolShape} from '../scene/shapes/SymbolShape';
import {Range} from '../util/Range';

/**
 * StackedLogFill class implements a fill between array of geotoolkit.welllog.data.LogAbstractData.<br>
 */
export class StackedLogFill extends LogAbstractVisual {
    /**
     * StackedLogFill class implements a fill between array of geotoolkit.welllog.data.LogAbstractData.<br>
     * @param options log data array or properties object
     * @param options.logdataarray log data array or properties object
     * @param options.autoupdate automatic update from data source. If it sets to true then fill listens on data changes from data source.
     * @param autoUpdate automatic update from data source. If it sets to true then fill listens on data changes from data source.
     */
    constructor(options?: LogAbstractData[] | object | { logdataarray?: LogAbstractData[]; autoupdate?: boolean; } , autoUpdate?: boolean);
    /**
     * Disposes the stacked fill
     */
    dispose(): void;
    /**
     * Returns interpolation type
     * ('Linear', 'MiddleStep', 'EndStep', 'StartStep')
     */
    getInterpolationType(): InterpolationType;
    /**
     * Sets interpolation type
     * @param interpolationType interpolation type
     */
    setInterpolationType(interpolationType: InterpolationType | string): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Update state
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): {fills: number[]; curves: number[]} | object;
    /**
     * Sets data source to be displayed.
     * @param logDataArray data to display
     * @param resetNormalizationLimits resets custom normalization limits
     *            and take it from data. By default it is true
     * @param autoUpdate automatic update from data source. If it sets to true then fill listens on data changes from data source.
     */
    setData(logDataArray: LogAbstractData[], resetNormalizationLimits?: boolean, autoUpdate?: boolean): this;
    /**
     * Return curve count
     */
    getCurvesCount(): number;
    /**
     * Returns curve and fill options
     * @param index data source index
     */
    getCurveOptions(index: number): {fillstyle: FillStyle; linestyle: LineStyle; symbol: SymbolShape; displaymode: string[]} | object;
    /**
     * Set curve and fill options
     * @param index data source index
     * @param options curve options
     * @param options.fillstyle fill style
     * @param options.linestyle line style
     * @param options.symbol symbol to be used for markers
     * @param options.displaymode an array with a combination of values: 'line', 'symbol'
     */
    setCurveOptions(index: number, options: object | { fillstyle?: FillStyle | string | object; linestyle?: LineStyle | string | object; symbol?: SymbolShape; displaymode?: any[] | string; } ): this;
    /**
     * Set reference line options
     * @param options reference line options
     * @param options.linestyle line style
     * @param options.visible visibility flag
     */
    setReferenceLineOptions(options: object | { linestyle?: LineStyle | string | object; visible?: boolean; } ): this;
    /**
     * Returns reference line options
     */
    getReferenceLineOptions(): {linestyle: LineStyle; visible: boolean} | object;
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
     * StackedLogFill.setNormalizationLimits(100, 130); // It means that each sample value that is less than 100 should have value 100, Same for 130
     * ```
     * @param minValue min value which can be specified for normalization
     * @param maxValue max value which can be specified for normalization
     */
    setNormalizationLimits(minValue: number | Range, maxValue?: number): this;
}
