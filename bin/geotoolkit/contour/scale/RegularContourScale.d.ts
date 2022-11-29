import {ContourScale} from './ContourScale';
import {Range} from '../../util/Range';

/**
 * Implements the ContourScale interface for a regular contour scale. Ie. all contour values are evenly spaced.
 *  Note: The step and count parameters must be positive or an exception will be thrown.
 */
export class RegularContourScale extends ContourScale {
    /**
     * Implements the ContourScale interface for a regular contour scale. Ie. all contour values are evenly spaced.
     *  Note: The step and count parameters must be positive or an exception will be thrown.
     * @param zero The first (lowest) contour value or alternatively the scaleRange
     * @param step The interval between successive contours or alternatively the number of levels (if first parameter was type of ScaleRange)
     * @param count The total number of contour isolines (intervals = count+1)
     */
    constructor(zero: number | Range, step: number, count?: number);
    /**
     * The number of intervals in this scale
     * (=#values + 1:  intervals to +/- infinity are included
     */
    getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param index The contour index for which to find the z-value range.
     */
    getRange(index?: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     */
    getIndex(zValue: number): number;
}
