import {EventDispatcher} from '../../util/EventDispatcher';
import {LogDataEvent} from './LogDataEvent';
import {InterpolationType} from '../../data/DataStepInterpolation';
import {AbstractUnit} from '../../util/AbstractUnit';
import {DataOrder} from '../../data/DataOrder';

/**
 * Define abstract Log data
 */
export class LogAbstractData extends EventDispatcher {
    /**
     * Define abstract Log data
     */
    constructor();
    /**
     * Return the value to indicate if data source was changed
     */
    getTimeStamp(): number;
    /**
     * Update time stamp
     */
    updateTimeStamp(): void;
    /**
     * Notify when data has been changed.
     * @param args optional parameters
     */
    protected update(args?: LogDataEvent): void;
    /**
     * Return index for specified depth
     * @param depth The depth for which you want to compute the index
     * @param fromIndex index of sample in depths
     * @param toIndex index of sample in depths
     */
    getIndexAt(depth: number, fromIndex?: number, toIndex?: number): number;
    /**
     * Return the value matching the given depth or NaN if the given depth is out of the logdata depth range.
     * If the depths are strictly increasing:
     *  - The returned value will be interpolated when necessary. See example 1
     * If the depths are not strictly increasing but never decreasing:
     * - The value returned will be the first one found (in the insertion order). See example 2
     * - The value returned will be interpolated between the last one found and its closest larger neighbor. See example 2
     * If the depths are not always increasing (not forward only):
     * - The value returned will be the last one found (in the insertion order). See example 3
     * - The value returned will be interpolated between the first one found and its closest larger neighbor. See example 3
     * Examples assume the default linear interpolation
     * @example
     * ```javascript
     * // Depth Value
     * // 0      0
     * // 100    1
     * // 200    2
     * getValueAt(100) // -> 1
     * getValueAt(150) // -> 1.5
     * ```
     * @example
     * ```javascript
     * // Depth Value
     * // 0      0
     * // 100    1
     * // 100    2
     * // 200    3
     * getValueAt(100) // -> 1
     * getValueAt(150) // -> 2.5
     * ```
     * @example
     * ```javascript
     * // Depth Value
     * // 0      0
     * // 100    1
     * // 200    2
     * // 100    3
     * getValueAt(100) // -> 3
     * getValueAt(150) // -> 1.5
     * ```
     * @param depth The depth for which you want to compute the value
     * @param fromIndex index of sample in depths
     * @param toIndex index of sample in depths
     * @param interpolation interpolation type for the value
     */
    getValueAt(depth: number, fromIndex?: number, toIndex?: number, interpolation?: InterpolationType): number;
    /**
     * Utility function to interpolate a value between two depths.
     * @param depth The depth for which you want to compute the value
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     * @param interpolation interpolation type for the value
     */
    static findValueAt(depth: number, depths: number[], values: number[], prev: number, next: number, interpolation?: InterpolationType): number;
    /**
     * Utility function to interpolate a value between two depths.
     * @param depth The depth for which you want to compute the value
     * @param depthPrev prev depth
     * @param valuePrev prev value
     * @param depthNext next depth
     * @param valueNext next value
     * @param interpolation interpolation type for the value
     */
    static interpolateValueAt(depth: number, depthPrev: number, valuePrev: number, depthNext: number, valueNext: number, interpolation?: InterpolationType): number;
    /**
     * Return the count of the samples
     */
    getSize(): number;
    /**
     * Return the depth unit
     */
    getValueUnit(): AbstractUnit;
    /**
     * Return the value unit
     */
    getIndexUnit(): AbstractUnit;
    /**
     * Return name of the data
     */
    getName(): string;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
    getMaxDepth(): number;
    /**
     * Return minimum data value
     */
    getMinValue(): number;
    /**
     * Return maximum data value
     */
    getMaxValue(): number;
    /**
     * Return an array of values
     */
    getValues(): number[];
    /**
     * Return an array of depths
     */
    getDepths(): number[];
    /**
     * Return true if data is in ascending order
     */
    isForwardOnly(): boolean;
    /**
     * Return the order of the log data
     */
    getDataOrder(): DataOrder | number;
    /**
     * Return an array of neat min and max
     * @param logScale scale log scale
     * @param centerOnZeroOnNegativeMin If negative and positive values, center around 0
     * @param displayUnit displayed unit
     */
    calculateNeatLimits(logScale: number, centerOnZeroOnNegativeMin: boolean, displayUnit: string | AbstractUnit): number[];
    /**
     * Return depth by index
     * @param index index at the depth
     */
    getDepth(index: number): number;
    /**
     * Return value by index
     * @param index index of the sample in the array
     */
    getValue(index: number): number;
}
