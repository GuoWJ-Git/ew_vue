import {Order} from './Order';
import {Point} from './Point';
import {Range} from './Range';

/**
 * The class Math contains methods for performing basic numeric operations and basic algorithms.
 */
export class MathUtil {
    /**
     * The class Math contains methods for performing basic numeric operations and basic algorithms.
     */
    constructor();
    /**
     * constant for epsilon
     * equal to 1E-10
     */
    static epsilon: number;
    /**
     * Checks whether value is a finite number.
     * @param value value to test
     */
    static isNumeric(value: string | number): boolean;
    /**
     * Checks whether value is a finite number.
     * @param value value to test
     */
    static isNumber(value: number): boolean;
    /**
     * Calculates log base 10
     * @example
     * ```javascript
     * import {MathUtil} from '@int/geotoolkit/util/MathUtil';
     * MathUtil.log10(-10, null, true); // will give -1 result and MathUtil.log10(-10) will be NaN
     * ```
     * @param val value to calculate log base 10
     * @param precision the number of digits after the decimal point
     * @param handlenegative set true if handling of negative value and 0 is required when mapping
     */
    static log10(val: number, precision?: number, handlenegative?: boolean): number;
    /**
     * Get sign of specified value
     * @param x current value
     */
    static sign(x: number): number;
    /**
     * Clamp the value to the range
     * @param value current value
     * @param min minimum value
     * @param max maximum value
     */
    static clamp(value: number, min: number, max: number): number;
    /**
     * Compare two values with specified precision
     * @param v1 1st number to compare
     * @param v2 2nd number to compare
     * @param epsilon difference bet 2 numbers to compare
     */
    static equals(v1: number, v2: number, epsilon?: number): boolean;
    /**
     * Uses binary search to find an index between 2 indices, that is the closest to the given value.
     * @param value object to find
     * @param values sorted array on objects
     * @param fromIndex index to start the search
     * @param toIndex index to end search scope
     * @param compareFunction compare function that defines the sort order.  If omitted, the object type must be number.
     * The second parameter passed to this compareFunction is the value passed to findIndex(). OR the data order. Ascending by default.
     */
    static findIndex(value: any, values: any[], fromIndex?: number, toIndex?: number, compareFunction?: Function | Order): number;
    /**
     * Bezier curves are often used to model smooth curves. calcCubicBezier Performs cubic Bezier approximation.
     * The control points P1 and P2 are only used to provide directional information.The arc or circle is divided into four equal sections and each section fit to a cubic Bézier curve.
     * When points are spaced far apart approximation is performed based on the precision(flatness) and control points on the same side of vector.
     * @param first first point
     * @param p1 control point #1
     * @param p2 control point #2
     * @param last last point
     * @param flatness precision
     */
    static calcCubicBezier(first: Point, p1: Point, p2: Point, last: Point, flatness?: number): any[];
    /**
     * Computes rounded limits using margin percentages as constraints.<br>
     * <br>
     * This function tries to compute a 'smart' range that includes the given min/max.<br>
     * To do so it will try to simplify the decimal part of the given values to the closest value.<br>
     * The original range is always contained in the returned range, meaning that the returned 'low' is lesser than the given min and the returned 'high' is greater than the given max.<br>
     * <br>
     * The given margin parameters will be used to constrain rounding process:<br>
     * <ul>
     *  <li>Margin:<br>
     *  The margin percentage determines how much margin the algorithm will try to introduce.<br>
     *  If the given margin percentage is 10%, then the returned 'high'' will be around:<br>
     *  <i>high = max + 10% * (max - min)</i>.<br>
     *  </li>
     *  <br>
     *  <li>Margin tolerance:<br>
     *  The margin tolerance percentage determines how much the 'smart rounding' process can change the value computed above.<br>
     *  If the given margin percentage is 4%, then the returned 'high' will be in the range:<br>
     *  <i>[high - <b>0.02</b>  * (max - min), high + <b>0.04</b> * (max - min)]</i>.<br>
     *  Note that margin tolerance is applied differently for inner tolerance.<br>
     * <pre>
     *     ------------------|-----------<----|-------->
     *                      max             +10% (margin)
     *                                  -2%            +4% (margin tolerance)
     *     ------------------|-----------<----|-------->
     *                                       high (before rounding)
     * </pre>
     * @example
     * ```javascript
     * import {MathUtil} from '@int/geotoolkit/util/MathUtil';
     * // With default margin :
     * MathUtil.calculateRoundedLimits(347.242, 372.110); // returns Range(345, 374);
     * // With bigger margin (10%) :
     * MathUtil.calculateRoundedLimits(347.242, 372.110, 0.10); // returns Range(344, 375);
     * // With values close to zero :
     * MathUtil.calculateRoundedLimits(-0.0041, 0.012); // returns Range(-0.005, 0.013);
     * ```
     * @param min The minimum value to be rounded
     * @param max The maximum value to be rounded
     * @param marginPercentage Percentage of margin desired
     * @param marginPercentageTolerance Percentage of margin tolerance desired
     */
    static calculateRoundedLimits(min: number, max: number, marginPercentage?: number, marginPercentageTolerance?: number): Range;
    /**
     * Find a "nice" settings based on "Algorithm for Optimal Scaling on a Chart Axis".
     * @param min minimum value
     * @param max maximum value
     * @param modelStep desired model space between ticks
     * @param minPadding percentage padding for minimum size based on range
     * @param maxPadding percentage padding for maximum size based on range
     */
    static findNiceLimits(min: number, max: number, modelStep: number, minPadding?: number, maxPadding?: number): {min: number; max: number; spacing: number; count: number} | object;
    /**
     * Create a "nice" range based on "Algorithm for Optimal Scaling on a Chart Axis".
     * @param min minimum value
     * @param max maximum value
     * @param desiredNumberOfTicks desired number of ticks
     * @param minPadding percentage padding for minimum size based on range
     * @param maxPadding percentage padding for maximum size based on range
     */
    static calculateNiceLimits(min: number, max: number, desiredNumberOfTicks: number, minPadding?: number, maxPadding?: number): {min: number; max: number; spacing: number; count: number} | object;
    /**
     * Returns a "nice" number approximately equal to range Rounds
     * the number if round = true takes the ceiling if round = false.
     * @param value input number
     * @param round round value
     */
    static niceNumber(value: number, round?: boolean): number;
    /**
     * This function computes human readable limits so that the returned interval is easily apprehended by the user.<br>
     * To do so, it will compute a minimum and maximum that can be easily divided by 2.<br>
     * Which means the user will immediately guess the mid and quarter values.<br>
     * <br>
     * The purpose of this function is not to provide accurately rounded limits but limits that will be easily apprehended.<br>
     * Using the given limits can virtually remove the necessity of displaying the intermediates labels on a axis.<br>
     * <br>
     * For example it will return [0, 4000] for the values [790, 3050].<br>
     * The user will easily guess the mid value to be 2000.<br>
     * @param min The minimum value
     * @param max The maximum value
     * @param logScale If this should use a logarithmic scale instead of linear
     * @param centerOnZeroOnNegativeMin If this should center the limits around 0 if minimum is a negative value
     * @param splitOnZero If this should split neat limits result around 0, applicable only when Math.sign(minimum) != Math.sign(maximum)
     */
    static calculateNeatLimits(min: number, max: number, logScale?: boolean, centerOnZeroOnNegativeMin?: boolean, splitOnZero?: boolean): Range;
    /**
     * Quick sort (in-place).
     * @param array array of numbers or objects
     * @param lo starting index
     * @param hi ending index (including)
     * @param comparator optional a function that defines an alternative sort order. The function
     * should return a negative, zero, or positive value, depending on the arguments, like:
     * function(a, b){return a-b}
     * When the sort() method compares two values, it sends the values to the compare function, and
     * sorts the values according to the returned (negative, zero, positive) value.
     * @param swap optional swap function to swap two elements of collection, like:
     * function(array, i, j) { }
     */
    static quickSort(array: number[] | object[], lo: number, hi: number, comparator?: Function, swap?: Function): void;
    /**
     * Rounds "src" to relative (see example below) "precision"
     * @example
     * ```javascript
     * import {MathUtil} from '@int/geotoolkit/util/MathUtil';
     * const a = 0.0000056789;
     * const resA = MathUtil.roundTo(a, 2); // resA = 0.00000568
     * const b = 56789.56789;
     * const resB = MathUtil.roundTo(b, 2); // resB = 56800
     * ```
     * @param src source value to be rounded
     * @param precision relative precision
     */
    static roundTo(src: number, precision: number): number;
    /**
     * Return the min value of a given array.
     * it internally filter NaN and null values.
     * @param arr represents the array.
     * @param init represents the initial min value
     * @param nullvalue A nullvalue to ignore, note that null and NaN are ignored
     */
    static getMin(arr: number[], init?: number, nullvalue?: number): number;
    /**
     * Return the max values of a given array.<br>
     * This function ignores NaN and null values.
     * @param arr represents the array.
     * @param init represents the initial max value
     * @param nullvalue A nullvalue to ignore, note that null and NaN are ignored
     */
    static getMax(arr: number[], init?: number, nullvalue?: number): number;
    /**
     * Get centile
     * @param values the percent value
     * @param centileNum percentile
     */
    static getCentile(values: number[], centileNum: number): number;
    /**
     * Return the min and max values of a given array.<br>
     * This function ignores NaN and null values.
     * @param arr represents the array
     * @param init represents the initials min and max values: [min, max]
     * @param nullvalue A nullvalue to ignore, note that null and NaN are ignored
     */
    static getLimits(arr: number[], init?: number[], nullvalue?: number): number[];
    /**
     * Convert degree to radians
     * @param deg The angle in degrees
     */
    static degToRad(deg: number): number;
    /**
     * Convert radians to degree
     * @param rad The angle in radians
     */
    static radToDeg(rad: number): number;
    /**
     * Normalizes the provided angle to be in range [0, 2*PI]
     * @param angle Angle to normalize
     */
    static normalizeAngle(angle: number): number;
    /**
     * Compute Statistics for a collection
     * @param array raw number array
     */
    static computeStatistics(array: number[]): {count: number; minvalue: number; maxvalue: number; average: number; variance: number; avgdeviation: number; stddeviation: number; skewness: number; kurtosis: number; p10: number; p50: number; p90: number} | object;
    /**
     * Checks if current platform is little endian
     */
    static isPlatformLittleEndian(): boolean;
    /**
     * Rounds value with the provided accuracy base
     * @example
     * ```javascript
     * import {MathUtil} from '@int/geotoolkit/util/MathUtil';
     * MathUtil.round(12.3456, 1000); // 12.346, rounds to 1/1000 accuracy
     * MathUtil.round(12.3456, 100); // 12.35, rounds to 1/100 accuracy
     * MathUtil.round(12.3456, 10); // 12.3, rounds to 1/10 accuracy
     * MathUtil.round(12.3456, 4); // 12.25, rounds to 1/4 accuracy
     * ```
     * @param value value to round
     * @param base accuracy base to round
     */
    static round(value: number, base?: number): number;
    /**
     * Used for tutorials to create a reproducible random value set.
     * @param min value of random
     * @param max value of random
     * @param seed seed
     */
    static getSeededRandom(min?: number, max?: number, seed?: number): number;
}
